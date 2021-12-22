# eCommerce Component: Restaurant Shopping Cart

Project inspired by James Q Quick initiative [Advent of Javascript](https://www.adventofjs.com/)

All the code is mine, don't blame James for that 😝

<img width="836" alt="Capture d’écran, le 2021-12-22 à 14 05 52" src="https://user-images.githubusercontent.com/6333396/147142720-a5950b19-3585-4d50-88ec-50a7656ac924.png">

# Demo

You can use it there: https://app.netlify.com/sites/sleepy-feynman-aad6d3/overview

# Specs

Users should be able to:

- View the plates on the left side of the screen and add them to your cart on the right side.
- When there are no plates within your cart, you should see a message that says, "Your cart is empty."
- When a plate is added to your cart, the Subtotal and Totals will automatically update.
- When products are in your cart, you should be able to increase and decrease the quantity.
    - A user should not be able to mark the quantity as a negative number.
    - If the quantity goes down to 0, the user will have the option to delete or remove the product from their cart entirely.
- Tax is based on the state of Tennessee sales tax: 0.0975

# Tech Stack

React, TypeScript, Vite, Jest, Eslint, Prettier.
