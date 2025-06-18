
import { ServiceId, ServiceFeeItem } from './types';

export const SERVICE_OPTIONS: ServiceFeeItem[] = [
  { id: ServiceId.NONE, name: '--- Select a Service ---' },
  {
    id: ServiceId.ITR_2_YEAR,
    name: 'ITR Filing 2 year',
    details: {
      itrLatePenalty: '1000/-',
      professionalFees: '2000/-',
      totalCharged: '3000/-',
      referralFees: '300/-',
      netPaymentToCA: '2700/-',
    },
  },
  {
    id: ServiceId.ITR_1_YEAR,
    name: 'ITR filing 1 year',
    details: {
      itrLatePenalty: '0/-',
      professionalFees: '1000/-',
      totalCharged: '1000/-',
      referralFees: '200/-',
      netPaymentToCA: '800/-',
    },
  },
  {
    id: ServiceId.ITR_3_YEAR,
    name: 'ITR filing 3 year',
    details: {
      itrLatePenalty: '2000/-',
      professionalFees: '3000/-',
      totalCharged: '5000/-',
      referralFees: '450/-',
      netPaymentToCA: '4550/-',
    },
  },
  {
    id: ServiceId.GST_REGISTRATION,
    name: 'GST Registration',
    details: {
      professionalFees: '2500/-',
      departmentCharges: '1500/- (tentative)',
      totalCharged: '4000/-',
      referralFees: '400/-',
      netPaymentToCA: '3600/-',
    },
  },
  {
    id: ServiceId.SHOP_ACT_REGISTRATION,
    name: 'Shop Act Registration',
    details: {
      professionalFees: '2000/-',
      totalCharged: '2000/-',
      referralFees: '200/-',
      netPaymentToCA: '1800/-',
    },
  },
  {
    id: ServiceId.MSME_REGISTRATION,
    name: 'MSME Registration',
    details: {
      professionalFees: '1000/-',
      totalCharged: '1000/-',
      referralFees: '200/-',
      netPaymentToCA: '800/-',
    },
  },
];
