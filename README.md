# MERN Stack Blog App
## Introduction:
This project is a MERN Stack web application that serves as a fully functional, responsive blog platform. The application includes advanced features such as user authentication, post creation, admin privileges for managing posts, and a robust commenting system.

## Features:
### User Authentication: Sign up, Sign in, and Sign out functionality.
Password encryption and secure authentication using JWT (JSON Web Tokens).
* OAuth integration with Google for seamless login.
* Admin privileges for certain users, enabling them to manage posts and users.
### Post Management:
* Admin users can create, edit, and delete blog posts.
* Posts include images, tags, and meta-data like the date and reading time.
* Post creation includes a rich text editor and image upload functionality.
* Posts are displayed in a dynamic feed with pagination and sorting options.
### Commenting System:
* Users can comment on posts, and their comments are displayed in real-time.
* Comments include like functionality and can be edited or deleted by the user.
* The system supports threaded comments for better discussion flow.
### Responsive Design:
* The app is fully responsive, ensuring a seamless experience across devices.
* Tailwind CSS is used for styling, providing a modern and clean user interface.
* Components are designed with accessibility in mind, ensuring the app is usable by everyone.
### User Dashboard:
* A private dashboard for users to manage their profile, view their posts, and interact with the community.
* The dashboard includes sections for user statistics, recent posts, and comments.
### Admin Dashboard:
* Admin users have access to a specialized dashboard where they can manage all posts and users.
* Features include user and post statistics, as well as moderation tools.
### Advanced Functionality:
* Redux is used for global state management, especially for handling user authentication and managing UI states.
* The app includes a dark mode toggle and theme management for a personalized user experience.
* A dynamic search feature allows users to find posts based on various criteria.

## Technologies Used:
* MongoDB: NoSQL database for storing user, post, and comment data.
* Express.js: Backend framework for building the server and API routes.
* React.js: Frontend framework for building the user interface.
* Node.js: JavaScript runtime for handling server-side logic.
* Tailwind CSS: Utility-first CSS framework for styling the application.
* Redux: State management library for managing global states.
* JWT: For secure user authentication.
* Firebase: For Google OAuth integration.
* Insomnia: API testing tool used during development.

## Installation:
* Clone the repository.
* Navigate to the server and client folders and install dependencies using npm install.
* Create a .env file in the server directory with the following variables:
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT.
GOOGLE_CLIENT_ID: Google OAuth Client ID.
* Run the backend server using npm start in the server directory.
* Run the frontend using npm start in the client directory.

