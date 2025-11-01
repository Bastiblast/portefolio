const aChecker = require('accessibility-checker');

const pages = [
  'http://localhost:3000/fr',
  'http://localhost:3000/en',
  'http://localhost:3000/fr/about',
  'http://localhost:3000/en/about',
  'http://localhost:3000/fr/projects',
  'http://localhost:3000/en/projects',
  'http://localhost:3000/fr/projects/homy',
  'http://localhost:3000/fr/projects/scolar-flashcard',
  'http://localhost:3000/fr/contact',
  'http://localhost:3000/en/contact',
  'http://localhost:3000/fr/experience',
  'http://localhost:3000/en/experience',
];

async function testAccessibility() {
  console.log('🔍 Starting accessibility scan...\n');
  
  let allPassed = true;
  let totalViolations = 0;
  let totalPotentialViolations = 0;

  for (const url of pages) {
    try {
      console.log(`Testing: ${url}`);
      const result = await aChecker.getCompliance(url, url);
      
      const report = result.report;
      const violations = report.results.filter(r => r.level === 'violation');
      const potentialViolations = report.results.filter(r => r.level === 'potentialviolation');
      
      totalViolations += violations.length;
      totalPotentialViolations += potentialViolations.length;

      if (violations.length > 0) {
        console.log(`  ❌ ${violations.length} violations found`);
        allPassed = false;
      } else {
        console.log(`  ✅ No violations`);
      }
      
      if (potentialViolations.length > 0) {
        console.log(`  ⚠️  ${potentialViolations.length} potential violations (review needed)`);
      }
    } catch (error) {
      console.error(`  ❌ Error scanning ${url}:`, error.message);
      allPassed = false;
    }
  }

  await aChecker.close();

  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total pages scanned: ${pages.length}`);
  console.log(`Total violations: ${totalViolations}`);
  console.log(`Total potential violations: ${totalPotentialViolations}`);
  console.log('\nDetailed reports saved in: accessibility-reports/');
  console.log('='.repeat(60) + '\n');

  if (!allPassed) {
    console.log('❌ Accessibility issues found. Check reports for details.');
    process.exit(1);
  } else {
    console.log('✅ All pages passed accessibility checks!');
  }
}

testAccessibility().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
