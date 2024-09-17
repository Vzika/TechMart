"""
This module initializes the Flask application and database.

Functions:
- create_app(): Initializes the Flask application and database.
"""

from . import create_app, db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
