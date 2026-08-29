# Dream Portal — QA Automation

## Overview

This project contains automated functional tests for the **Dream Portal** website using **Playwright with TypeScript**.

Application URL: https://arjitnigam.github.io/myDreams/

The automation suite validates the main user flow, Dream Diary data, and Dream Total statistics across multiple browsers.

---

## Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **Page Object Model (POM)**
- **Playwright Assertions**
- **Playwright HTML Report**

---

## Test Coverage

### 1. Home Page

The Home Page tests verify:

- Loading spinner appears.
- Loading spinner disappears after loading.
- The **My Dreams** button is visible.
- Clicking **My Dreams** opens both:
  - `dreams-diary.html`
  - `dreams-total.html`
- New pages/tabs are validated using their URLs.

### 2. Dream Diary

The Dream Diary tests verify:

- Exactly **10 dream entries** are present.
- Every row contains exactly **3 columns**:
  - Dream Name
  - Days Ago
  - Dream Type
- All cells contain values.
- Dream Type is only:
  - `Good`
  - `Bad`
- Recurring dreams are correctly identified:
  - `Flying over mountains`
  - `Lost in maze`

### 3. Dream Total

The Dream Total tests verify the expected statistics:

| Metric | Expected Value |
|---|---:|
| Good Dreams | 6 |
| Bad Dreams | 4 |
| Total Dreams | 10 |
| Recurring Dreams | 2 |

---

## Project Structure

```text
dream-portal-qa/
│
├── pages/
│   ├── HomePage.ts
│   ├── DreamDiaryPage.ts
│   └── DreamTotalPage.ts
│
├── tests/
│   ├── home.spec.ts
│   ├── diary.spec.ts
│   └── total.spec.ts
│
├── screenshots/
│   ├── home-page.png
│   ├── my-dreams-click.png
│   ├── dream-diary.png
│   └── dream-total.png
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Page Object Model

The project follows the **Page Object Model (POM)** approach.

Page-specific locators and actions are kept inside the `pages/` directory, while test scenarios are maintained separately in the `tests/` directory.

This keeps the tests readable, maintainable, and easier to update.

---

## Browser Coverage

The test suite is configured to run against:

- Chromium
- Firefox
- WebKit

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests with browser UI

```bash
npx playwright test --headed
```

### Run Home Page tests

```bash
npx playwright test tests/home.spec.ts --headed
```

### Run Dream Diary tests

```bash
npx playwright test tests/diary.spec.ts --headed
```

### Run Dream Total tests

```bash
npx playwright test tests/total.spec.ts --headed
```

---

## Test Report

Playwright HTML reporting is configured for the project.

Generate/run the test suite:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

The report provides an overview of passed/failed tests and test execution details.

---

## Screenshots

Screenshots are captured for important test scenarios and stored in the `screenshots/` directory.

They provide visual evidence of the automated test execution.

---

## Test Result

Latest local execution:

```text
21 tests passed
0 tests failed
```

The suite was executed across Chromium, Firefox, and WebKit.

---

## Conclusion

The Dream Portal QA automation suite validates the core functional requirements of the application using Playwright and TypeScript.

The implementation uses Page Object Model, automated assertions, multi-browser testing, screenshots, and HTML reporting to provide a structured and maintainable QA solution.
