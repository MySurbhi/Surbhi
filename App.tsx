
import React, { useState, useCallback, useMemo } from 'react';
import { CompanyType, ChecklistData } from './types';
import { FIRM_NAME, CHECKLISTS, SERVICE_OPTIONS, COMPANY_TYPES_ORDER } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import ChecklistDisplay from './components/ChecklistDisplay';

const App: React.FC = () => {
  const [selectedCompanyType, setSelectedCompanyType] = useState<CompanyType | ''>('');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [currentChecklist, setCurrentChecklist] = useState<ChecklistData | null | undefined>(null);

  const handleCompanyTypeChange = useCallback((value: string) => {
    const companyType = value as CompanyType;
    setSelectedCompanyType(companyType);
    setSelectedServiceType(''); // Reset service type
    setCurrentChecklist(null); // Reset checklist
  }, []);

  const handleServiceTypeChange = useCallback((value: string) => {
    setSelectedServiceType(value);
    if (selectedCompanyType && value) {
      setCurrentChecklist(CHECKLISTS[selectedCompanyType]?.[value]);
    } else {
      setCurrentChecklist(null);
    }
  }, [selectedCompanyType]);

  const companyTypeOptions = useMemo(() => {
    return COMPANY_TYPES_ORDER.map(type => ({ value: type, label: type }));
  }, []);

  const serviceTypeOptions = useMemo(() => {
    if (selectedCompanyType) {
      const services = SERVICE_OPTIONS[selectedCompanyType] || [];
      return services.map(service => ({ value: service, label: service }));
    }
    return [];
  }, [selectedCompanyType]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-slate-100">
      <Header firmName={FIRM_NAME} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-slate-800 shadow-2xl rounded-xl p-6 md:p-10 border border-slate-700">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 text-center">
            One-Stop Checklist Solution
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Dropdown
              label="Select Company/LLP Type:"
              options={[{ value: '', label: 'Select Type...' }, ...companyTypeOptions]}
              value={selectedCompanyType}
              onChange={handleCompanyTypeChange}
              id="companyType"
            />
            <Dropdown
              label="Select Service:"
              options={[{ value: '', label: 'Select Service...' }, ...serviceTypeOptions]}
              value={selectedServiceType}
              onChange={handleServiceTypeChange}
              id="serviceType"
              disabled={!selectedCompanyType || serviceTypeOptions.length === 0}
            />
          </div>
          
          <ChecklistDisplay 
            checklistData={currentChecklist} 
            companyTypeSelected={!!selectedCompanyType}
            serviceTypeSelected={!!selectedServiceType}
            noServicesDefined={selectedCompanyType && serviceTypeOptions.length === 0}
            selectedCompanyTypeLabel={selectedCompanyType}
            selectedServiceTypeLabel={selectedServiceType}
          />

        </div>
      </main>
      <Footer firmName={FIRM_NAME} />
    </div>
  );
};

export default App;