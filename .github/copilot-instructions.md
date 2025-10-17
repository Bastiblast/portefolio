# Project general coding guidelines

## Behavior
- Do not generate code until you have necessary context, you need to know the librairy version of the code you generate.
## Code Style
- Use semantic HTML5 elements (header, main, section, article, etc.)
- Prefer modern JavaScript (ES6+) features like const/let, arrow functions, and template literals.
- Use the adapted version solution for main librairy as NextJS and Tailwindcss.
- Do not create CSS file, use tailwind to write the style in the components.

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Code Quality
- Use meaningful variable and function names that clearly describe their purpose
- Include helpful comments for complex logic
- Add error handling for user inputs and API calls