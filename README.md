# Product Management Application

## Overview

This documentation provides an overview of my Product Management Application, including setup instructions, features, challenges I faced during development, and the growth I experienced throughout the project.

## Features

- **User Authentication**: Secure user registration and login functionality.
- **CRUD Operations**: Create, Read, Update, and Delete products with an intuitive user interface.
- **Audit Logs**: Track changes made to products, including creation, updates, and deletions.
- **Search Functionality**: Easily search for products by name.
- **Pagination**: Navigate through large lists of products with pagination controls.
- **Toast Notifications**: Receive real-time feedback on CRUD operations through toast notifications.

## Setup Instructions

### Prerequisites

Before setting up the application, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node package manager)
- Composer (for PHP dependencies)
- Laravel 11
- SQLite (as the database)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/msigidi/product-management-system.git
   cd product-management-system
   ```

2. **Install PHP Dependencies**

   Navigate to the backend directory and install PHP dependencies using Composer:

   ```bash
   composer install
   ```

3. **Set Up Environment Variables**

   Copy the `.env.example` file to `.env` and configure your database settings:

   ```bash
   cp .env.example .env
   ```

   Update the following lines in your `.env` file for SQLite:

   ```plaintext
   DB_CONNECTION=sqlite
   DB_DATABASE=/path/to/database.sqlite
   ```

   Make sure to replace `/path/to/database.sqlite` with the actual path where you want your SQLite database file to be created.

4. **Generate Application Key**

   Generate a new application key for Laravel:

   ```bash
   php artisan key:generate
   ```

5. **Run Migrations**

   Run the database migrations to set up the necessary tables:

   ```bash
   php artisan migrate
   ```

6. **Install Frontend Dependencies**

   Navigate to the frontend directory and install npm packages:

   ```bash
   npm install
   ```

7. **Build Assets**

   Build your frontend assets using Vite:

   ```bash
   npm run dev
   ```

8. **Run the Application**

   Start your Laravel server:

   ```bash
   php artisan serve 
   ```
    ```bash
   composer run dev 
   ```

9. **Access the Application**

   Open your web browser and navigate to `http://localhost:8000` to access the application.

## Challenges Faced

During the development of this application, I encountered several challenges:

1. **CSRF Token Issues**: Newly registered users faced 419 errors when attempting CRUD operations due to CSRF token mismatches. I resolved this by ensuring that all forms included CSRF tokens and that AJAX requests were properly configured.

2. **State Management**: Managing state across components for modals and notifications proved challenging initially. I implemented custom hooks to encapsulate modal logic and product management functions, improving code reusability and maintainability.

3. **Pagination and Search Functionality**: Implementing efficient pagination and search filters required careful consideration of performance and user experience. I optimized these features to ensure smooth navigation through large datasets.

4. **User Feedback**: Providing real-time feedback through toast notifications was essential for enhancing user experience but required integration with a third-party library (React Hot Toast). This integration improved my understanding of managing UI states effectively.

## Growth Experience

Throughout this project, I experienced significant growth in various areas:

1. **Technical Skills**: I enhanced my skills in React, Laravel 11, and Tailwind CSS, gaining a deeper understanding of building full-stack applications.

2. **Problem-Solving**: Overcoming challenges such as CSRF issues and state management improved my problem-solving abilities and taught me how to approach debugging systematically.

3. **User-Centric Development**: Focusing on user experience through features like search functionality, pagination, and toast notifications reinforced my commitment to developing user-centric applications.

## Conclusion

The Product Management Application serves as a comprehensive tool for managing products with robust features like CRUD operations, audit logs, and user notifications. The challenges I faced during development provided valuable learning experiences that contributed to my growth as a developer.

For any questions or further assistance regarding this application, please feel free to reach out!
