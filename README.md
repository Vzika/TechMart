Webstack - Portfolio Project


how to place order:
curl -X POST http://127.0.0.1:5000/orders \
-H "Content-Type: application/json" \
-d '{
    "customer_name": "John Doe",
    "customer_email": "johndoe@yahooe.com",
    "product_id": 1,
    "quantity": 2,
    "status": "Pending"
}'


how to add a product:
curl -X POST http://127.0.0.1:5000/add_products \
-H "Content-Type: application/json" \
-d '{
    "name": "New Laptop",
    "description": "A high-performance laptop",
    "price": 1500
}'


to get products

curl -X GET http://127.0.0.1:5000/product


how to add comment:
curl -X POST http://127.0.0.1:5000/add_comment -H "Content-Type: application/json" -d '{
    "product_id": 2,
    "customer_name": "Zika Charles",
    "comment_text": "Hey TechMart i love ur products."
}'

curl -X POST http://127.0.0.1:5000/signUp\
-H "Content-Type: application/json" \
-d '{"username": "zika", "email": "zika@yahoo.com", "password": "password123"}'

curl -X POST http://127.0.0.1:5000/login \
-H "Content-Type: application/json" \
-d '{"email": "newuser@example.com", "password": "password123"}' \
-c cookies.txt

curl -X POST http://127.0.0.1:5000/logout \
-H "Content-Type: application/json" \
-b cookies.txt
