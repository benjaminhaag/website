---
title: Test
excerpt: This is a demo blog post
date: 12/22/2024
---

Here will be some Content!

## Hello World!

<b>Bold</b>

lorem Ipsum

```bash:bash showLineNumbers
npm i rehype-autolink-headings
npm i rehype-code-titles
npm i rehype-pretty-code
npm i rehype-slug
npm i rehype-stringify
npm i remark-parse
npm i remark-rehype
npm i shiki
```

```js:test.js showLineNumbers /count/
let message = "Hello, JavaScript!";
let count = 42;
let isActive = true;
```

- ```message``` is a string.
- `count` is a number.
- `isActive` is a boolean.

```javascript showLineNumbers {3-5, 7}
// Define an array of products
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 600 },
    { id: 3, name: 'Tablet', price: 400 }
];

// Function to calculate the total price of all products
function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}

// Function to apply a discount to all products
function applyDiscount(products, discountPercentage) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * (discountPercentage / 100))
    }));
}

// Example usage
console.log("Original Products:", products);

const discountedProducts = applyDiscount(products, 10); // Apply 10% discount
console.log("Discounted Products:", discountedProducts);

const totalPrice = calculateTotal(discountedProducts);
console.log("Total Price after Discount:", totalPrice);
```

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Another one

lorem Ipsum

```javascript
let a = 5;
```

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### A subheading

lorem Ipsum

```
let a = 5;
```

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Hello heading

lorem Ipsum

```
let a = 5;
```

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
