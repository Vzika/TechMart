from flask import Blueprint, render_template, request, redirect, url_for, flash
from .models import db, Cart, Product
from .forms import CartForm
from flask_login import current_user

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/cart')
def view_cart():
    cart_items = Cart.query.filter_by(user_id=current_user.id).all()
    return render_template('cart.html', cart_items=cart_items)

@cart_bp.route('/cart/add/<int:product_id>', methods=['POST'])
def add_to_cart(product_id):
    if current_user.is_authenticated:
        existing_item = Cart.query.filter_by(user_id=current_user.id, product_id=product_id).first()
        if existing_item:
            existing_item.quantity += 1
        else:
            new_item = Cart(user_id=current_user.id, product_id=product_id)
            db.session.add(new_item)
        db.session.commit()
        flash('Item added to cart!', 'success')
    else:
        flash('You need to log in to add items to your cart.', 'warning')
    return redirect(url_for('cart.view_cart'))

@cart_bp.route('/cart/update/<int:item_id>', methods=['POST'])
def update_cart(item_id):
    form = CartForm()
    if form.validate_on_submit():
        item = Cart.query.get(item_id)
        if item and item.user_id == current_user.id:
            item.quantity = form.quantity.data
            db.session.commit()
            flash('Cart updated successfully!', 'success')
        else:
            flash('Item not found or you do not have permission to update it.', 'danger')
    return redirect(url_for('cart.view_cart'))

@cart_bp.route('/cart/remove/<int:item_id>', methods=['POST'])
def remove_from_cart(item_id):
    item = Cart.query.get(item_id)
    if item and item.user_id == current_user.id:
        db.session.delete(item)
        db.session.commit()
        flash('Item removed from cart!', 'success')
    else:
        flash('Item not found or you do not have permission to remove it.', 'danger')
    return redirect(url_for('cart.view_cart'))

