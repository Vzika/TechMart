from flask import Blueprint, render_template, request, redirect, url_for, flash
from ..models.review import Review
from ..models.product import Product
from ..forms.review_form import ReviewForm

review_bp = Blueprint('review', __name__)

@review_bp.route('/product/<int:product_id>/review', methods=['GET', 'POST'])
def add_review(product_id):
    form = ReviewForm()
    if form.validate_on_submit():
        new_review = Review(product_id=product_id, user_id=current_user.id,
                            rating=form.rating.data, comment=form.comment.data)
        db.session.add(new_review)
        db.session.commit()
        flash('Review added!', 'success')
        return redirect(url_for('product.detail', product_id=product_id))
    return render_template('add_review.html', form=form)

