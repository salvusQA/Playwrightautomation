# Playwright Automation Testing Framework

## Overview

This project is a Playwright-based automation testing framework developed using JavaScript.

It includes UI and API automation tests with reusable test components, fixtures, test data, assertions, and Playwright reporting.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Playwright Test

## Automation Coverage

### UI Automation

- Login validation
- Inventory page validation
- Sorting functionality
- UI element validations

### API Automation

- GET request testing
- POST request testing
- PUT request testing
- Query parameter testing
- Path parameter testing
- Response validation
- Status code validation
- Response data validation

## Project Structure

playwrightautomation/
│
├── fixtures/
├── pages/
├── test-data/
├── tests/
│ └── api/
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js

## Installation

Install the project dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Run Tests

Run all tests:

npx playwright test

Run tests with browser visible:

npx playwright test --headed

## Run a Specific Test

npx playwright test tests/saucedemologin.spec.js

## View Test Report

npx playwright show-report

## Test Reporting

The project uses Playwright HTML reports to review:

- Passed tests
- Failed tests
- Test execution details
- Execution duration
- Failure information

## Framework Highlights

- UI automation
- API automation
- Reusable test components
- Fixtures
- Test data management
- Assertions and validations
- Cross-browser testing support
- HTML test reporting

## 📌 Project Purpose

This project is a **Playwright automation testing framework developed for learning, practice, and demonstration purposes**.

The framework demonstrates real-world automation testing practices including:

- UI automation testing
- API testing
- Page Object Model (POM)
- Custom fixtures
- Data-driven testing
- Positive and negative test scenarios
- Assertions and validations
- Cross-browser testing
- Playwright configuration
- CI/CD workflow integration

### 🌐 Test Applications & APIs

For demonstration and practice, this project uses publicly available demo/testing applications and APIs rather than a real client production application.

The test scenarios are designed to demonstrate automation framework structure, test design, validations, and reusable automation practices.

### ⚠️ Negative Test Scenarios

Some test cases are intentionally designed with **negative/invalid scenarios** to demonstrate error handling and validation testing.

Therefore, certain test cases may be intentionally expected to fail depending on the behavior or response of the public test API/application being used.

These scenarios are included **for testing and learning demonstration purposes** and should not be interpreted as defects in a real production application.

> **Note:** The test results may vary because the project depends on publicly available demo/testing applications and APIs.
