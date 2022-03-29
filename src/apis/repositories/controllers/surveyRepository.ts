import { surveyItem } from '@/models/survey';
import httpClient from '@/modules/client/@client';

export function fetchSurveyItemApi() {
  const url = '/survey';

  return httpClient.get<surveyItem>({
    url,
  });
}
