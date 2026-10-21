const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../src/app');

// List of pages to scaffold
const pages = [
  // 1. Public Routes
  { file: '(public)/page.tsx', title: 'Home' },
  { file: '(public)/events/page.tsx', title: 'Events Listing' },
  { file: '(public)/events/holy-spirit-worship/page.tsx', title: 'Event Detail - Holy Spirit Worship' },
  { file: '(public)/events/goteborgs-lovsangskonsert/page.tsx', title: 'Event Detail - Göteborgs Lovsångskonsert 2027' },
  { file: '(public)/events/past/page.tsx', title: 'Past Events Archive' },
  { file: '(public)/watch/page.tsx', title: 'Watch & Listen Media Hub' },
  { file: '(public)/about/story/page.tsx', title: 'Our Story' },
  { file: '(public)/about/vision/page.tsx', title: 'Vision & Mission' },
  { file: '(public)/about/team/page.tsx', title: 'Team & Leadership' },
  { file: '(public)/about/contact/page.tsx', title: 'Contact Form' },
  { file: '(public)/partners/page.tsx', title: 'Partner Churches Directory' },
  { file: '(public)/get-involved/volunteer/page.tsx', title: 'Volunteer Signup' },
  { file: '(public)/get-involved/prayer-team/page.tsx', title: 'Prayer Team Application' },
  { file: '(public)/get-involved/kingdom-partners/page.tsx', title: 'Kingdom Partners (Monthly Giving)' },
  { file: '(public)/give/page.tsx', title: 'General Giving / Swish' },
  { file: '(public)/prayer/page.tsx', title: 'Need Prayer Form' },
  { file: '(public)/newsletter/page.tsx', title: 'Newsletter Signup' },

  // 2. Legal Routes
  { file: '(legal)/legal/privacy/page.tsx', title: 'Privacy Policy' },
  { file: '(legal)/legal/terms/page.tsx', title: 'Terms of Use' },
  { file: '(legal)/legal/organisation/page.tsx', title: 'Organisation Info' },

  // 3. Admin Routes
  { file: 'admin/page.tsx', title: 'Admin Dashboard' },
  { file: 'admin/events/page.tsx', title: 'Event Manager List' },
  { file: 'admin/events/new/page.tsx', title: 'Create Event Form' },
  { file: 'admin/prayer/page.tsx', title: 'Prayer Requests Table' },
  { file: 'admin/volunteers/page.tsx', title: 'Volunteer Applications Table' },
];

// Clean up old conflicting directories and root page.tsx
const oldPathsToRemove = [
  'page.tsx',
  'events',
  'watch',
  'about',
  'partners',
  'get-involved',
  'give',
  'prayer',
  'newsletter',
  'legal',
  'volunteer',
  'kontakt',
  'om-oss',
  'anvandarvillkor',
  'integritetspolicy',
  'watch-listen'
];

oldPathsToRemove.forEach(p => {
  const target = path.join(baseDir, p);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log('Removed old conflicting path:', p);
  }
});

// Create all required folders and pages
pages.forEach(p => {
  const filePath = path.join(baseDir, p.file);
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import React from "react";

export default function Page() {
  return <h1>${p.title}</h1>;
}
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created route:', p.file, '->', p.title);
});

console.log('Scaffolding complete! Total pages created:', pages.length);
