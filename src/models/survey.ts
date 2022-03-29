import { ValueOf } from '@/utils/types/value-of';

export const SurveyType = {
  OX: 'OX',
  TEXT: 'TEXT',
} as const;
export type SurveyType = ValueOf<typeof SurveyType>;

export interface SurveyOxItem {
  value: string;
  label: string;
}

export interface SurveyOx {
  question: string;
  oxItems: SurveyOxItem[];
}

export interface SurveyText {
  question: string;
}

export interface surveyItem {
  type: SurveyType;
  surveyItem: SurveyOx | SurveyText;
}
