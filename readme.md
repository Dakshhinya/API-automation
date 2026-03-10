# CASA Offer API Automation (Playwright)

This project automates **Offer Creation APIs** for CASA using **Playwright API testing**.

The test suite validates both:

* **Bill Level Offer APIs**
* **Product Level Offer APIs**

The framework focuses on verifying backend validations, payload handling, and API response behavior.

---

# Installation

### Clone the repository

```
git clone <repository-url>
cd casa_api_automation
```

### Install dependencies

```
npm install
```

### Install Playwright browsers

```
npx playwright install
```

---

# Test Scenarios Covered

## Bill Level Offer API

### Create Valid Bill Offer

Creates a bill level offer with valid payload.

### Empty Payload Validation

Attempts to create an offer with an empty payload and verifies API validation.

### Invalid BU Validation

Attempts to create an offer using an invalid Business Unit ID.

---

## Product Level Offer API

### Create Valid Product Offer

Creates a product level offer with valid products and discount configuration.

### Empty Payload Validation

Attempts to create an offer with an empty payload and verifies API validation.

### Missing Products

Creates an offer without products.
Backend currently **accepts empty products array**, so this is treated as a **valid case (200 response)**.

### Missing Mandatory Fields

Attempts to create an offer without required fields such as name or code.

### Invalid Date Range

Creates an offer where **endDate is before startDate**.

### Invalid Discount Value Types

Attempts to create an offer with invalid discount values or incorrect data types.

---

# Run Command

Run the complete test suite using environment variables:

```
npx playwright test tests/offer

```

---


