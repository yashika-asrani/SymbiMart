# Symbi Mart

Symbi Mart is an e-commerce website where you can purchase stationary items from Symbi Stationary, essential items from the Rangoli store on the campus, and food from SymbiEat. The website is built using React, CSS, and JavaScript for the frontend, and Express and Mongoose for the backend.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

## Installation

1. Clone the repository to your local machine.

```
git clone https://github.com/username/symbi-mart.git
```

2. Install the dependencies.

```
cd symbi-mart
npm install
```

3. Start the development server.

```
npm start
```

4. Open http://localhost:3000 in your web browser.

## Tech Stack

The following technologies were used to build the project:

### Frontend

#### React

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state in a more efficient way. In this project, React was used to build the frontend of the website.

#### CSS

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. In this project, CSS was used to style the frontend of the website.

#### JavaScript

JavaScript is a programming language used to create interactive effects within web browsers. In this project, JavaScript was used to add interactivity to the frontend of the website.

### Backend

#### Express

Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, and error handling. In this project, Express was used to build the backend of the website.

#### Mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model your application data. In this project, Mongoose was used to define the database schema and interact with the MongoDB database.

#### Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. In this project, Node.js was used as the server-side runtime environment for the backend of the website.

#### Nodemon

Nodemon is a tool that helps to automatically restart the Node.js application when file changes are detected. It saves time and increases productivity during development. In this project, Nodemon was used to automatically restart the server when changes were made to the backend code.

## Backend

The backend of the application is built using Express and Mongoose. The API endpoints are defined in the `routes` directory, and the database models are defined in the `models` directory.

To run the backend server, navigate to the `backend` directory and run the following command:

```
nodemon index.js
```

The server will start on http://localhost:5000.

## Database

The application uses MongoDB as the database. The database connection is established in the `db.js` file in the `config` directory.

## Deployment

To deploy the application, you can use a platform like Heroku or AWS. Make sure to set up the environment variables and update the database connection string accordingly.

## Credits

- [React](https://reactjs.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Acknowledgments

Thank you [@Pratikgaikwad1004] (https://github.com/Pratikgaikwad1004) for helping me and my team out for this project !
