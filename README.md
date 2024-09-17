# Webstack - Portfolio Project

This project is a simple e-commerce platform that allows customers to browse products, place orders, leave comments, and manage their accounts. The API offers endpoints for product management, order placement, user authentication, and comment functionality.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [API Endpoints](#api-endpoints)
    -   [Placing an Order](#placing-an-order)
    -   [Adding a Product](#adding-a-product)
    -   [Getting All Products](#getting-all-products)
    -   [Adding a Comment](#adding-a-comment)
    -   [User Signup](#user-signup)
    -   [User Login](#user-login)
    -   [User Logout](#user-logout)
-   [Usage](#usage)
-   [License](#license)
-   [Collaborators](#collaborators)

## Features

-   Create and manage products
-   Place orders for available products
-   Leave comments on products
-   User registration and login functionality
-   Session management for authenticated users

## Technologies Used

-   Python (Flask)
-   SQLite (or any preferred database)
-   cURL (for API testing)
-   JSON (for data exchange)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Vzika/TechMart.git
    cd TechMart
    ```

2. **Install the dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Flask application**:
    ```bash
    python3 -m main
    ```
    The server should now be running on `http://127.0.0.1:5000`.

## API Endpoints

### Placing an Order

To place an order, send a POST request to `/orders` with the required order details.

```bash
curl -X POST http://127.0.0.1:5000/orders \
-H "Content-Type: application/json" \
-d '{
  "customer_name": "John Doe",
  "customer_email": "johndoe@yahooe.com",
  "product_id": 1,
  "quantity": 2,
  "status": "Pending"
}'
```

### Adding a Product

To add a new product to the store, send a POST request to `/add_products` with the product details.

```bash
curl -X POST http://127.0.0.1:5000/add_products \
-H "Content-Type: application/json" \
-d '{
  "name": "New Laptop",
  "description": "A high-performance laptop",
  "price": 1500
}'
```

### Getting All Products

To retrieve the list of available products, send a GET request to `/product`.

```bash
curl -X GET http://127.0.0.1:5000/product
```

### Adding a Comment

To leave a comment on a product, send a POST request to `/add_comment` with the comment details.

```bash
curl -X POST http://127.0.0.1:5000/add_comment \
-H "Content-Type: application/json" \
-d '{
  "product_id": 2,
  "customer_name": "Zika Charles",
  "comment_text": "Hey TechMart, I love your products."
}'
```

### User Signup

To create a new user account, send a POST request to `/register` with the user's details.

```bash
curl -X POST http://127.0.0.1:5000/register \
-H "Content-Type: application/json" \
-d '{
  "username": "zika",
  "email": "zika@yahoo.com",
  "password": "password123"
}'
```

### User Login

To log in an existing user, send a POST request to `/login` with the email and password. The session is managed using cookies.

```bash
curl -X POST http://127.0.0.1:5000/login \
-H "Content-Type: application/json" \
-d '{
  "email": "newuser@example.com",
  "password": "password123"
}' -c cookies.txt
```

### User Logout

To log out the current user, send a POST request to `/logout` using the session cookie.

```bash
curl -X POST http://127.0.0.1:5000/logout \
-H "Content-Type: application/json" \
-b cookies.txt
```

## Usage

1. Ensure that the server is running on `http://127.0.0.1:5000`.
2. Use the provided cURL commands to interact with the API for placing orders, managing products, and handling user accounts.

Feel free to modify the API according to your needs or add more features to the project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Collaborators

-   Martins Okanlawon: [Email: oyedelenewton@gmail.com](mailto:oyedelenewton@gmail.com), [GitHub: PrimotionStudio](https://github.com/PrimotionStudio)
-   Isabella Akunekwu: [Email: akunekwuisabella@gmail.com](mailto:akunekwuisabella@gmail.com), [GitHub: bellacocho123](https://github.com/bellacocho123)
-   Ndukauba Ngozi: [Email: ndukaubangozi@gmail.com](mailto:ndukaubangozi@gmail.com), [GitHub: Vzika](https://github.com/Vzika)
