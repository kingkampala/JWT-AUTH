# **JWT Authentication with Express.js**

This Node.js application demonstrates JWT (JSON Web Token) authentication using the Express.js framework. It provides user registration, login, and protected routes with authentication.

# **Key Notes**

### Dependencies
This application uses the following dependencies:

* **Expres**s: For building the web server.
* **bcryptjs**: For password hashing.
* **jsonwebtoken (JWT)**: For creating and verifying JSON Web Tokens.
* **dotenv**: For loading environment variables.
* **MongoDB** : For database storage.

### Configuration

Environment variables are loaded from a .env file using the dotenv library. You must configure the following variables in your .env file:

**TOKEN_KEY**: A secret key used for signing JWT tokens.

**MONGO_URL**: The URL for your MongoDB database.

### User Model

This code assumes the existence of a User model for storing user data. Ensure that you have a corresponding database schema for users.

# **Endpoints**
The application defines the following endpoints:

### User Registration
* **Endpoint**: `POST /register`
* **Description**: Register a new user by providing first name, last name, email, and password.
* **Response**: If registration is successful, it returns the user data along with a JWT token.

### User Login
* **Endpoint**: `POST /login`
* **Description**: Log in an existing user by providing email and password.
* **Response**: If login is successful, it returns the user data along with a new JWT token.

### Protected Route
* **Endpoint**: `GET /welcome`
* **Description**: A protected route that requires authentication. Only authenticated users with a valid JWT token can access it.
* **Response**: A simple "Welcome!" message.

# **Running the Application**

* **Install dependencies**: Run npm install to install the required packages.

* **Set up the environment**: Create a .env file in the project root and configure the required environment variables.

* **Start the server**: Run npm start to start the Express server.

* **Access the endpoints**: Use a tool like Postman or a web browser to make requests to the defined endpoints (/register, /login, and /welcome) based on your needs.

# **404 Error Handling**
If a request is made to an undefined route, the server responds with a 404 status code and a JSON error message.

# **License**
    This code is provided under the MIT License.
