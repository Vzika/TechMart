from flask import Blueprint, render_template, redirect, url_for, flash
from .models import db, Wishlist, Product
from flask_login import current_user

wishlist_bp = Blueprint('wishlist', __name__)

@wishlist_bp.route('/wishlist')
def view_wishlist():
    wishlist_items = Wishlist.query.filter_by(user_id=current_user.id).all()
    return render_template('wishlist.html', wishlist_items=wishlist_items)

@wishlist_bp.route('/wishlist/add/<int:product_id>', methods=['POST'])
def add_to_wishlist(product_id):
    if current_user.is_authenticated:
        existing_item = Wishlist.query.filter_by(user_id=current_user.id, product_id=product_id).first()
        if not existing_item:
            new_item = Wishlist(user_id=current_user.id, product_id=product_id)
            db.session.add(new_item)
            db.session.commit()
            flash('Item added to wishlist!', 'success')
        else:
            flash('Item is already in your wishlist.', 'info')
    else:
        flash('You need to log in to add items to your wishlist.', 'warning')
    return redirect(url_for('wishlist.view_wishlist'))

@wishlist_bp.route('/wishlist/remove/<int:item_id>', methods=['POST'])
def remove_from_wishlist(item_id):
    item = Wishlist.query.get(item_id)
    if item and item.user_id == current_user.id:
        db.session.delete(item)
        db.session.commit()
        flash('Item removed from wishlist!', 'success')
    else:
        flash('Item not found or you do not have permission to remove it.', 'danger')
    return redirect(url_for('wishlist.view_wishlist'))

