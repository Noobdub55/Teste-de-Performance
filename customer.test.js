import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const res = http.get('http://localhost:3000/api/customers');

  check(res, {
    'status 200': (r) => r.status === 200,
    'lista de clientes não vazia': (r) => JSON.parse(r.body).length > 0,
  });

  sleep(1);
}
