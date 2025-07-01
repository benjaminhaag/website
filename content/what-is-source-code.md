---
title: What is Source Code?
excerpt: TODO
date: 01/22/2025
---

Here will be some Content!

## 

<b>Bold</b>

``` text:example.exe
0101010101001000100010011110010110001001
0111110111111100100010010111010111111000
1000101101000101111111000000111110101111
1100000010001001110000101000101101000101
1111110000001111101011110100010111111100
0000000100001100000000011100001010001011
0100010111111000000011111010111111000000
00000001110100000101110111000011
```


```text:example.exe showLineNumbers
55
48 89 e5
89 7d fc
89 75 f8
8b 45 fc
0f af c0
89 c2
8b 45 fc
0f af 45 fc
01 0c
01 c2
8b 45 f8
0f af c0
01 d0
5d
c3
```

```asm:example.asm showLineNumbers {4,5,8} /add/ /01/
binomial:
  push  rbp                       ; 55
  mov   rbp,rsp                   ; 48 89 e5
  mov   DWORD PTR [rbp-8x8],edi   ; 89 7d fc
  mov   DWORD PTR [rbp-0x8],esi   ; 89 75 f8
  mov   eax,DWORD PTR [rbp-0x4]   ; 8b 45 fc
  imul  eax,eax                   ; 0f af c0
  mov   edx,eax                   ; 89 c2
  mov   eax,DWORD PTR [rbp-0x4]   ; 8b 45 fc
  imul  eax,DWORD PTR [rbp-0x8]   ; 0f af 45 fc
  add   eax,eax                   ; 01 0c
  add   edx,eax                   ; 01 c2
  mov   eax,DWORD PTR [rbp-0x8]   ; 8b 45 f8
  imul  eax,eax                   ; 0f af c0
  add   eax,edx                   ; 01 d0
  pop   rbp                       ; 5d
  ret                             ; c3
```

```c:example.c showLineNumbers
int binomial(int a, int b)
{
  return a*a+2*a*b+b*b;
}
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
