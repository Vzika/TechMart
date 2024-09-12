from flask_wtf import FlaskForm
from wtforms import SubmitField

class WishlistForm(FlaskForm):
    submit = SubmitField('Add to Wishlist')

