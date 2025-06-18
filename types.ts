
export enum ServiceId {
  NONE = 'NONE',
  ITR_2_YEAR = 'ITR_2_YEAR',
  ITR_1_YEAR = 'ITR_1_YEAR',
  ITR_3_YEAR = 'ITR_3_YEAR',
  GST_REGISTRATION = 'GST_REGISTRATION',
  SHOP_ACT_REGISTRATION = 'SHOP_ACT_REGISTRATION',
  MSME_REGISTRATION = 'MSME_REGISTRATION',
}

export interface FeeDetails {
  itrLatePenalty?: string;
  professionalFees: string;
  departmentCharges?: string; // For GST
  totalCharged: string;
  referralFees: string;
  netPaymentToCA: string;
}

export interface ServiceFeeItem {
  id: ServiceId;
  name: string;
  details?: FeeDetails; // Optional because initial/default selection might not have details
}
