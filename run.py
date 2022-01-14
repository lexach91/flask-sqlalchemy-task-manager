import os
from taskmanager import app


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(
        host=os.environ.get("IP"),
        port=os.environ.get("PORT"),
        debug=os.environ.get("DEBUG")
    )