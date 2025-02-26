# React Login Authentication System

This project is a basic authentication system built using React, designed to simulate a login functionality with dummy credentials and local state management. It demonstrates React Router-based navigation, authentication persistence using localStorage, and controlled form handling with React hooks.

---

## 📌 Project Overview
- The app starts with a **Login Page**, where users enter their email and password.
- If the credentials match the predefined values, the user is redirected to the **Dashboard**.
- If the credentials are incorrect, an error message is displayed.
- The login status is stored in **localStorage**, ensuring users remain logged in even after refreshing the page.
- A **Logout** button allows users to log out, removing their authentication state and redirecting them back to the Login Page.
- If an unauthenticated user tries to access the Dashboard, they are automatically redirected to the Login Page.

---

## 🛠️ Technologies Used
- **React** – Frontend library for building UI components.
- **React Router** – For handling navigation between pages.
- **useState & useEffect (React Hooks)** – For managing component state and side effects.
- **localStorage** – To persist user authentication status.
- **CSS** – For basic styling.

---

## 📂 Project Structure
```
📂 src
 ┣ 📜 App.jsx                  # Main entry point that defines routes
 ┣ 📜 index.css               # Global styles for the application
 ┣ 📜 main.jsx                # Central layout component managing navigation
 ┣ 📜 constant.js             # Stores predefined constants like dummy credentials
 ┣ 📂 pages
 ┃ ┣ 📜 Login.jsx             # Handles user authentication
 ┃ ┣ 📜 Dashboard.jsx         # Protected page accessible after login
 ┣ 📂 components
 ┃ ┣ 📜 ProtectedRoutes.jsx   # Restricts access to pages unless authenticated
```

---

This project provides a **simple yet effective foundation** for understanding authentication and routing in a React application. Future improvements may include **API-based authentication, form validation, and better UI styling**.

