## Testing

Because Next.js considers any file in the `pages` directory a navigable route, any tests written for a full page in that directory will live in the `__tests__` directory. Tests written for components, however, will be found in the same directory as tested component. Refer to the folder structure diagram below as a guideline.

```
team-availability/
├── __tests__/
│   ├── about.test.js
│   └── index.test.js
├── components/
│   ├── ComponentOne.js
│   ├── ComponentOne.test.js
│   ├── ComponentTwo.js
│   └── ComponentTwo.test.js
└── pages/
    ├── _app.js
    ├── about.js
    └── index.js
```