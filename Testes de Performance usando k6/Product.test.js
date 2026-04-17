import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const res = http.get(`${BASE_URL}/api/products`);

  let body;

  try {
    body = JSON.parse(res.body);
  } catch (e) {
    body = null;
  }

  check(res, {
    'status 200': (r) => r.status === 200,
    'tempo < 500ms': (r) => r.timings.duration < 500,
    'retorna array': () => Array.isArray(body),
    'lista não vazia': () => body && body.length > 0,
  });

  sleep(1);
}