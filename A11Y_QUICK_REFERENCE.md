# Accessibility Testing - Quick Reference

## 🚀 Quick Commands

```bash
# Start dev server
pnpm dev

# Scan all pages (new terminal)
pnpm scan:a11y

# Programmatic test with summary
pnpm test:a11y
```

## 📁 Files Created

- ✅ `.achecker.yml` - Configuration
- ✅ `scan-list.txt` - List of URLs to scan
- ✅ `scripts/a11y-test.js` - Automated test script
- ✅ `ACCESSIBILITY_TESTING.md` - Full documentation

## 🎯 Common Checks

### Before Every Commit
```bash
pnpm dev
pnpm scan:a11y
# Fix any violations found
```

### Check Specific Page
```bash
echo "http://localhost:3000/fr/projects" | npx achecker
```

### Full Test Suite
```bash
pnpm build
pnpm start
pnpm test:a11y
```

## 📊 Reports Location

Results saved in: `accessibility-reports/`

- `*.json` - Machine-readable results
- `*.html` - Human-readable reports (open in browser)

## 🔍 Violation Levels

| Level | Priority | Action |
|-------|----------|--------|
| **violation** | 🔴 High | Must fix |
| **potentialviolation** | 🟡 Medium | Review & fix if needed |
| **recommendation** | 🟢 Low | Best practice |

## ✅ Quick Fixes

### 1. Images Missing Alt Text
```tsx
<Image src="..." alt="Description" />
```

### 2. Low Contrast Text
Use darker colors or increase font weight

### 3. Missing ARIA Labels
```tsx
<button aria-label="Close menu">
  <Icon />
</button>
```

### 4. Keyboard Navigation
Use semantic elements: `<button>`, `<a>`, `<input>`

## 📚 Full Documentation

See `ACCESSIBILITY_TESTING.md` for complete guide.

## 🆘 Troubleshooting

**Server not running?**
```bash
pnpm dev
```

**Can't find reports?**
Check `accessibility-reports/` folder in project root

**Too many issues?**
Focus on violations first, then potential violations
