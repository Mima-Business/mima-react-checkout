<p align="center">
  <img src="./src/lib/assets/img/mima-logo.png" alt="Diagram" width="200"/>
</p>

# Mima React Library

---

## Introduction

**Mima React Checkout** is a React SDK that helps businesses collect payments for **goods and services** directly on their websites. Funds go straight into their **Mima Wallet** and can be received in **Naira (NGN)** or any of **135+ international currencies** like **USD, GBP, EUR**, and more.

This react sdk provides an easy-to-integrate UI and programmatic API for initiating payments via Mima; whether you're selling products or booking services.

---

## 🌍 Features

- Collect payments in NGN and 135+ international currencies.
- Seamless UI components for quick integration.
- No provider setup required.
- React + TypeScript ready.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Parameters](#parameters)
5. [Support](#support)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License](#license)
8. [Contributors](#contributors)
9. [Changelog](#)

---

## Requirements

1. Mima Public Api keys
2. Node version >= 16.0.0
3. React version ^ 18.x or ^19.x
4. Npm version >= 7.x

## Installation

Install the SDK

```bash
npm install mima-react-checkout
# or
yarn add mima-react-checkout
```

## Usage

Add Mima pay to your projects as a component or function:

1. [As a component with selection UI](#components)
2. [As a pre-styled button](#button)
3. [As a function ](#function)

### Components

Include the **selected** and **onSelect** props to ensure the user can select mima as the preferred payment option

```javascript
import React, { useState } from "react";
import { PayWithMima } from "mima-react-checkout";

export default function App() {
  const customer = {
    fullname: "John Doe",
    email: "john@example.com",
    mobile: "08012345678",
    street: "123 Street",
    country: "Nigeria",
    postCode: "100001",
    state: "Lagos",
  };

  const items = [
    {
      item: "T-shirt",
      unitPrice: 2000,
      quantity: 2,
    },
  ];

  const payload = {
    customer,
    publicKey: "fd86a********************4",
    order: {
      items,
      currencyCode: "NGN",
      shipping: 200,
      orderId: "ORDER123456",
    },
    callBackUrl: "www.google.com",
  };

  const [method, setMethod] = useState("mima");

  const mimaConfig = {
    payload,
    selected: method === "mima",
    onSelect: () => setMethod("mima"),
    onSuccess: () => alert("Payment Successful"),
    onClose: () => console.log("Closed"),
    signature: "2341abc********************4",
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <PayWithMima {...mimaConfig} />
    </div>
  );
}
```

### Button

```javascript
import React from "react";
import { MimaButton } from "mima-react-checkout";

export default function App() {
  const customer = {
    fullname: "John Doe",
    email: "john@example.com",
    mobile: "08012345678",
    street: "123 Street",
    country: "Nigeria",
    postCode: "100001",
    state: "Lagos",
  };

  const items = [
    {
      item: "T-shirt",
      unitPrice: 2000,
      quantity: 2,
    },
  ];

  const payload = {
    customer,
    publicKey: "fd86a********************4",
    order: {
      items,
      currencyCode: "NGN",
      shipping: 200,
      orderId: "ORDER123456",
    },
    callBackUrl: "www.google.com",
  };

  const mimaButtonConfig = {
    payload,
    onSuccess: () => alert("Payment Successful"),
    onClose: () => console.log("Closed"),
    signature: "2341abc********************4",
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <MimaButton {...mimaButtonConfig} />
    </div>
  );
}
```

### Function

```javascript
import React from "react";
import { checkOutWithMima } from "mima-react-checkout";

export default function App() {
  const customer = {
    fullname: "John Doe",
    email: "john@example.com",
    mobile: "08012345678",
    street: "123 Street",
    country: "Nigeria",
    postCode: "100001",
    state: "Lagos",
  };

  const items = [
    {
      item: "T-shirt",
      unitPrice: 2000,
      quantity: 2,
    },
  ];

  const payload = {
    customer,
    publicKey: "fd86a********************4",
    order: {
      items,
      currencyCode: "NGN",
      shipping: 200,
      orderId: "ORDER123456",
    },
    callBackUrl: "www.google.com",
  };

  const mimaConfig = {
    payload,
    signature: "2341abc********************4",
    onSuccess: () => alert("Payment Successful"),
    onClose: () => console.log("Closed"),
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <button
        onClick={() => {
          checkOutWithMima(mimaConfig);
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
```

## Parameters

Read about our parameters and how they can be used

| Parameter | Always Required ? | Description                                                                                                                                                                           |
| --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| payload   | Yes               | An object containing order and customer information                                                                                                                                   |
| signature | Yes               | A SHA-512 HMAC hash of the payload, generated using your Secret Key. This ensures the integrity and authenticity of the request. The payload must be JSON-stringified before hashing. |
| onSuccess | No                | A function of your desired action once a payment is successful                                                                                                                        |
| onClose   | No                | A function of your desired action once a payment is canceled                                                                                                                          |
| testMode  | No                | A boolean value to enable test mode. If not included value defaults to false                                                                                                          |

### Payload Parameters

| Parameter   | Always Required? | Description                      |
| ----------- | ---------------- | -------------------------------- |
| customer    | Yes              | Customer Information             |
| order       | Yes              | Order Information                |
| publicKey   | Yes              | Your API public key              |
| callBackUrl | No               | Your webhook to send information |

### Customer Parameters

| Parameter   | Always Required? | Description                        |
| ----------- | ---------------- | ---------------------------------- |
| fullname    | Yes              | Full name of the customer          |
| email       | Yes              | Email address of the customer      |
| mobile      | No               | Customer's mobile phone number     |
| street      | No               | Street address of the customer     |
| country     | No               | Country where the customer resides |
| companyName | No               | Name of the customer’s company     |
| postCode    | No               | Postal/ZIP code                    |
| state       | No               | State or province                  |

### Order Parameters

| Parameter    | Always Required? | Description                                                                                                                      |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| items        | Yes              | Array of order items                                                                                                             |
| currencyCode | Yes              | Currency to charge in.                                                                                                           |
| orderId      | Yes              | Your order Id. This MUST be unique for every order so you can be able to receive information on the order related to the payment |
| shipping     | No               | This specifies the cost of shipping. Defaults to 0 when not added.                                                               |

### Items Parameters

Items is an array of objects with these properties

| Parameter | Always Required? | Description                           |
| --------- | ---------------- | ------------------------------------- |
| item      | Yes              | Name of the product or service        |
| quantity  | Yes              | Number of units being purchased       |
| unitPrice | Yes              | Price per unit (in selected currency) |

## Debugging Errors

We understand that you may run into some errors while integrating our library.

For `authorization` and `validation` error responses, double-check your API keys and request. If you get a `server` error or any other error, kindly engage the team for support.

# Support

For additional assistance using this library, please create an issue on the Github repo or contact the developer experience (DX) team via [email](mailto:hello@trymima.com).

You can also follow us [@mimapayafrica](https://x.com/mimapayafrica) and let us know what you think 😊.

## Contribution Guidelines

We welcome contributions from the community. Read more about our community contribution guidelines [here](/CONTRIBUTING.md).

<a id="license"></a>

## License

By contributing to this library, you agree that your contributions will be licensed under its [MIT license](/LICENSE.md).

Copyright (c) Mima Business Inc.

## Contributors

- [Babatunde Nathaniel Shodunke](https://x.com/babszzz)
