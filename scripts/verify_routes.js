const http = require('http');

const routes = [
  // 1. Public Routes
  '/',
  '/events',
  '/events/holy-spirit-worship',
  '/events/goteborgs-lovsangskonsert',
  '/events/past',
  '/watch',
  '/about/story',
  '/about/vision',
  '/about/team',
  '/about/contact',
  '/partners',
  '/get-involved/volunteer',
  '/get-involved/prayer-team',
  '/get-involved/kingdom-partners',
  '/give',
  '/prayer',
  '/newsletter',

  // 2. Legal Routes
  '/legal/privacy',
  '/legal/terms',
  '/legal/organisation',

  // 3. Admin Routes
  '/admin',
  '/admin/events',
  '/admin/events/new',
  '/admin/prayer',
  '/admin/volunteers',
];

async function checkRoute(r) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + r, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hasH1 = data.includes('<h1');
        resolve({ route: r, status: res.statusCode, hasH1 });
      });
    }).on('error', (err) => {
      resolve({ route: r, error: err.message });
    });
  });
}

async function run() {
  console.log('Verifying all 25 routes on http://localhost:3000 ...');
  let passed = 0;
  for (const r of routes) {
    const res = await checkRoute(r);
    if (res.status === 200) {
      console.log(`[PASS] ${r} -> 200 OK (h1: ${res.hasH1})`);
      passed++;
    } else {
      console.log(`[FAIL] ${r} -> status: ${res.status || res.error}`);
    }
  }
  console.log(`\nResult: ${passed}/${routes.length} routes responding with 200 OK`);
}

run();
