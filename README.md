# Online Book Review Application

## Description
This is a RESTful API built with Node.js and Express.js for an online book retailer. It allows users to retrieve book information, search by ISBN, author, or title, view reviews, register/login, and manage book reviews (add, modify, delete) with JWT-based authentication. The application supports multiple users accessing it simultaneously using asynchronous operations.

This project fulfills the requirements of the final assignment, implementing CRUD operations for books and reviews, user authentication, and a Node.js client program using Axios for API interactions.

## Features
- **General Users**:
  - Retrieve a list of all books.
  - Search books by ISBN, author, or title.
  - View reviews for a specific book.
  - Register as a new user.
  - Login to access protected features.
- **Registered Users**:
  - Add a new review for a book.
  - Modify or delete their own reviews.
- **Multi-User Support**: Asynchronous handling ensures concurrent access without blocking.
- **Node.js Client Program**: Separate functions using Async/Await, Promises, and Axios to interact with the API (Tasks 10-13).
- **Authentication**: JWT-based session management for secure access.

## Installation
1. **Prerequisites**:
   - Node.js (version 14 or higher) installed on your system.
   - Git for cloning the repository.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name