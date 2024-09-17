from flask import Blueprint, render_template, redirect, url_for, flash
from .models import db, Payment
from .forms import PaymentForm
from flask_login import current_user

payment_bp = Blueprint('payment', __name__)

@payment_bp.route('/payment', methods=['GET', 'POST'])
def make_payment():
    form = PaymentForm()
    if form.validate_on_submit():
        new_payment = Payment(user_id=current_user.id, amount=form.amount.data, status='Pending')
        db.session.add(new_payment)
        db.session.commit()
        flash('Payment initiated successfully!', 'success')
        return redirect(url_for('payment.view_payments'))
    return render_template('payment.html', form=form)

@payment_bp.route('/payments')
def view_payments():
    payments = Payment.query.filter_by(user_id=current_user.id).all()
    return render_template('payments.html', payments=payments)

