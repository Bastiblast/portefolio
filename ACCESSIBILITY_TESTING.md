# Accessibility Testing with IBM Equal Access Checker

## Overview

This project uses the **accessibility-checker** tool from IBM's Equal Access Toolkit to automatically test for accessibility (a11y) issues following WCAG 2.1 and IBM Accessibility standards.

## Installation

Already installed! The package is in `devDependencies`:

```bash
pnpm add -D accessibility-checker
```

## Quick Start

### 1. Command Line Usage

Create a file listing pages to scan:

```bash
# Create scan-list.txt
echo "http://localhost:3000" > scan-list.txt
echo "http://localhost:3000/fr/about" >> scan-list.txt
echo "http://localhost:3000/en/projects" >> scan-list.txt
```

Run the scanner:

```bash
npx achecker scan-list.txt
```

### 2. Scan Local Build

First, build and start your Next.js app:

```bash
pnpm build
pnpm start
```

Then in another terminal, scan your pages:

```bash
npx achecker scan-list.txt
```

## Configuration

Create `.achecker.yml` in your project root:

```yaml
# Accessibility policies to check against
policies:
  - IBM_Accessibility
  - WCAG_2_1

# Rule archive version
ruleArchive: latest

# Fail the scan if these levels are found
failLevels:
  - violation

# Report these levels
reportLevels:
  - violation
  - potentialviolation
  - recommendation
  - potentialrecommendation

# Output formats (json, csv, html)
outputFormat:
  - json
  - html

# Where to save results
outputFolder: accessibility-reports

# Baseline folder for comparison
baselineFolder: accessibility-baseline

# Label for the scan
label: portfolio-accessibility-scan
```

## Usage Methods

### Method 1: CLI Scan (Recommended for Quick Checks)

1. **Start your dev server:**
   ```bash
   pnpm dev
   ```

2. **Create your scan list** (`scan-list.txt`):
   ```
   http://localhost:3000/fr
   http://localhost:3000/en
   http://localhost:3000/fr/about
   http://localhost:3000/en/about
   http://localhost:3000/fr/projects
   http://localhost:3000/en/projects
   http://localhost:3000/fr/projects/homy
   http://localhost:3000/fr/projects/scolar-flashcard
   http://localhost:3000/fr/contact
   http://localhost:3000/en/contact
   http://localhost:3000/fr/experience
   http://localhost:3000/en/experience
   ```

3. **Run the scan:**
   ```bash
   npx achecker scan-list.txt
   ```

4. **View results:**
   Check the `accessibility-reports/` folder for HTML and JSON reports.

### Method 2: Programmatic Testing (For CI/CD)

Create `scripts/a11y-test.js`:

```javascript
const aChecker = require('accessibility-checker');

const pages = [
  'http://localhost:3000/fr',
  'http://localhost:3000/en',
  'http://localhost:3000/fr/about',
  'http://localhost:3000/en/projects',
];

async function testAccessibility() {
  console.log('🔍 Starting accessibility scan...\n');
  
  let allPassed = true;

  for (const url of pages) {
    try {
      console.log(`Testing: ${url}`);
      const result = await aChecker.getCompliance(url, url);
      
      const report = result.report;
      const violations = report.results.filter(r => r.level === 'violation');
      
      if (violations.length > 0) {
        console.log(`❌ ${violations.length} violations found`);
        allPassed = false;
      } else {
        console.log(`✅ No violations`);
      }
    } catch (error) {
      console.error(`Error scanning ${url}:`, error.message);
      allPassed = false;
    }
  }

  await aChecker.close();

  if (!allPassed) {
    console.log('\n❌ Accessibility issues found. Check reports for details.');
    process.exit(1);
  } else {
    console.log('\n✅ All pages passed accessibility checks!');
  }
}

testAccessibility();
```

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "test:a11y": "node scripts/a11y-test.js"
  }
}
```

Run:

```bash
# In terminal 1
pnpm dev

# In terminal 2
pnpm test:a11y
```

## Understanding Reports

### Violation Levels

- **violation**: Must be fixed (fails WCAG)
- **potentialviolation**: Needs review
- **recommendation**: Best practice suggestion
- **potentialrecommendation**: Optional improvement

### Common Issues to Check

1. **Color Contrast**: Text must have sufficient contrast
2. **Alt Text**: All images need descriptive alt attributes
3. **Keyboard Navigation**: All interactive elements accessible via keyboard
4. **ARIA Labels**: Proper use of ARIA attributes
5. **Form Labels**: All form inputs properly labeled
6. **Heading Hierarchy**: Logical heading structure (h1 → h2 → h3)

## Scanning Workflow

### Daily Development

```bash
# 1. Start dev server
pnpm dev

# 2. In another terminal, scan current page
echo "http://localhost:3000/fr/projects" | npx achecker

# 3. Fix issues, rescan
```

### Before Commit

```bash
# 1. Build production
pnpm build
pnpm start

# 2. Full scan
npx achecker scan-list.txt

# 3. Review reports in accessibility-reports/
```

### CI/CD Integration

Add to your GitHub Actions or CI pipeline:

```yaml
- name: Run accessibility tests
  run: |
    pnpm build
    pnpm start &
    sleep 10
    pnpm test:a11y
```

## Fixing Common Issues in Your Portfolio

### 1. Images Without Alt Text

```tsx
// ❌ Bad
<Image src="/logo.png" />

// ✅ Good
<Image src="/logo.png" alt="Odonate Portfolio Logo" />
```

### 2. Color Contrast

```tsx
// ❌ Bad - Light text on light background
<p className="text-gray-400 bg-gray-100">Text</p>

// ✅ Good - Sufficient contrast
<p className="text-gray-900 bg-gray-100">Text</p>
```

### 3. Keyboard Navigation

```tsx
// ❌ Bad - onClick on div
<div onClick={handleClick}>Click me</div>

// ✅ Good - Use button
<button onClick={handleClick}>Click me</button>
```

### 4. ARIA Labels

```tsx
// ❌ Bad - Icon without label
<button><Icon /></button>

// ✅ Good - Descriptive label
<button aria-label="Open navigation menu">
  <Icon />
</button>
```

## Best Practices

1. **Run scans regularly** during development
2. **Fix violations immediately** - don't let them accumulate
3. **Test with keyboard only** - Tab, Enter, Escape
4. **Test with screen reader** if possible
5. **Use semantic HTML** - nav, main, section, article
6. **Maintain heading hierarchy** - don't skip levels
7. **Provide focus indicators** - visible outlines on focus

## Resources

- [IBM Equal Access Toolkit Docs](https://github.com/IBMa/equal-access)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Troubleshooting

### "Cannot connect to localhost"
Make sure your dev server is running: `pnpm dev`

### "No results generated"
Check that `.achecker.yml` is in the project root and properly formatted

### "Too many violations"
Start by fixing high-priority violations first, then work through recommendations

## Next Steps

1. ✅ Tool is installed
2. ⏭️ Create `.achecker.yml` configuration
3. ⏭️ Create `scan-list.txt` with your routes
4. ⏭️ Run your first scan: `npx achecker scan-list.txt`
5. ⏭️ Review reports and fix issues
6. ⏭️ Add `pnpm test:a11y` script for automated testing

---

**Pro Tip**: Run accessibility checks before every commit to catch issues early! 🚀
