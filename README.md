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
