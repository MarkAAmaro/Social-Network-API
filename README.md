# Social Network API

## Introduction

Thank you for taking an interest in my Social Network API. This project serves as the back-end for a social network platform where users can share their thoughts, react to their friends' thoughts and even maintain a friend list. Powered by Node.js, Express.js, MongoDB, and Mongoose, the API is optimized for handling large amounts of unstructured data efficiently.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code server-side.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to handle large amounts of unstructured data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Installation

1. **Clone the Repository**

2. **Install Dependencies**

    npm install

3. **Start MongoDB**

    Make sure MongoDB is running on your machine.

## Usage

1. **Start the Server**

    npm start
 

    This will start the server and sync the Mongoose models to the MongoDB database.

2. **API Testing**

    Use a tool like Insomnia to test the API endpoints.

## API Routes

- **Users**
  - `GET /api/users`: Get all users.
  - `POST /api/users`: Create a new user.
  - `GET /api/users/:id`: Get a user by ID.
  - `PUT /api/users/:id`: Update a user by ID.
  - `DELETE /api/users/:id`: Delete a user by ID.

- **Friends**
  - `POST /api/users/:userId/friends/:friendId`: Add a friend.
  - `DELETE /api/users/:userId/friends/:friendId`: Remove a friend.

- **Thoughts**
  - `GET /api/thoughts`: Get all thoughts.
  - `POST /api/thoughts`: Create a new thought.
  - `GET /api/thoughts/:id`: Get a thought by ID.
  - `PUT /api/thoughts/:id`: Update a thought by ID.
  - `DELETE /api/thoughts/:id`: Delete a thought by ID.

- **Reactions**
  - `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
  - `DELETE /api/thoughts/:thoughtId/reactions`: Remove a reaction from a thought.

## Demo

- [Walkthrough Video](#) (Replace with your video link)




