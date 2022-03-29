import { Greeting } from '@/models/greeting';
import { Welcome } from '@/models/welcome';
import httpClient from '@/modules/client/@client';

export function fetchGreetingApi() {
  const url = '/greeting';

  return httpClient.get<Greeting>({
    url,
  });
}

export function fetchWelcomeApi() {
  const url = '/welcome';

  return httpClient.get<Welcome>({
    url,
  });
}
