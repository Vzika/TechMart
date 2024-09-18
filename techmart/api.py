from flask import jsonify, request, Blueprint
from flask_login import login_required
from . import db
from .models import Product, Order, Review, Comment

bp = Blueprint('api', __name__)


@bp.route('/product', methods=['GET'])
def get_products():
    products = Product.query.all()
    # print(products)
    # [<Product id=1, name='Laptop', description='A powerful laptop', price=1000> ,
    # <Product id=2, name='Mouse', description='A wireless mouse', price=25>]

    product_list = []
    for p in products:
        product_info_dict = {
            'id': p.id,
            'name': p.name,
            'description': p.description,
            'price': p.price
        }
        product_list.append(product_info_dict)

    return jsonify(product_list)


@bp.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    products = Product.query.all()
    for product in products:
        if product.id == product_id:
            product_info = {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'price': product.price
            }
            return jsonify(product_info)
    return jsonify({'error': 'Product not found'}), 404


@bp.route('/add_products', methods=['POST'])
@login_required
def add_products():
    user_input = request.get_json()

    new_post = Product(
        name=user_input.get('name'),
        description=user_input.get('description'),
        price=user_input.get('price')
    )

    db.session.add(new_post)
    db.session.commit()

    new_post_info = {
        'id': new_post.id,
        'name': new_post.name,
        'description': new_post.description,
        'price': new_post.price
    }

    return jsonify(new_post_info)


@bp.route('/add_order', methods=['POST'])
@login_required
def add_order():
    user_input = request.get_json()
    new_order = Order(
        customer_name=user_input.get('customer_name'),
        customer_email=user_input.get('customer_email'),
        product_id=user_input.get('product_id'),
        quantity=user_input.get('quantity')
    )
    db.session.add(new_order)
    db.session.commit()

    new_order_info = {
        'id': new_order.id,
        'customer_name': new_order.customer_name,
        'customer_email': new_order.customer_email,
        'product_id': new_order.product_id,
        'quantity': new_order.quantity,
        'status': new_order.status
    }
    return jsonify(new_order_info)


@bp.route('/orders', methods=['GET'])
@login_required
def get_orders():
    orders = Order.query.all()
    orders_list = []
    for o in orders:
        order_info = {
            'id': o.id,
            'customer_name': o.customer_name,
            'customer_email': o.customer_email,
            'product_id': o.product_id,
            'quantity': o.quantity,
            'status': o.status
        }
        orders_list.append(order_info)
    return jsonify(orders_list)


@bp.route('/add_review', methods=['POST'])
@login_required
def add_review():
    user_input = request.get_json()
    new_review = Review(
        product_id=user_input.get('product_id'),
        customer_name=user_input.get('customer_name'),
        review_text=user_input.get('review_text'),
        rating=user_input.get('rating')
    )
    db.session.add(new_review)
    db.session.commit()

    new_review_info = {
        'id': new_review.id,
        'product_id': new_review.product_id,
        'customer_name': new_review.customer_name,
        'review_text': new_review.review_text,
        'rating': new_review.rating
    }
    return jsonify(new_review_info)


@bp.route('/product/<int:product_id>/reviews', methods=['GET'])
@login_required
def get_product_reviews(product_id):
    reviews = Review.query.filter_by(product_id=product_id).all()
    reviews_list = []
    for r in reviews:
        review_info = {
            'id': r.id,
            'product_id': r.product_id,
            'customer_name': r.customer_name,
            'review_text': r.review_text,
            'rating': r.rating
        }
        reviews_list.append(review_info)
    return jsonify(reviews_list)


@bp.route('/add_comment', methods=['POST'])
@login_required
def add_comment():
    user_input = request.get_json()
    new_comment = Comment(
        product_id=user_input.get('product_id'),
        customer_name=user_input.get('customer_name'),
        comment_text=user_input.get('comment_text')
    )
    db.session.add(new_comment)
    db.session.commit()

    new_comment_info = {
        'id': new_comment.id,
        'product_id': new_comment.product_id,
        'customer_name': new_comment.customer_name,
        'comment_text': new_comment.comment_text
    }
    return jsonify(new_comment_info)


@bp.route('/product/<int:product_id>/comments', methods=['GET'])
def get_product_comments(product_id):
    comments = Comment.query.filter_by(product_id=product_id).all()
    comments_list = []
    for c in comments:
        comment_info = {
            'id': c.id,
            'product_id': c.product_id,
            'customer_name': c.customer_name,
            'comment_text': c.comment_text
        }
        comments_list.append(comment_info)
    return jsonify(comments_list)
