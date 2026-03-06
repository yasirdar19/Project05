#  Movie App

A React + Vite movie browser that allows users to explore movies, filter and sort them, and organize movies into **Wishlist** and **Watched** lists.  
The application also includes **Firebase Authentication** for secure user login.

---
## Live Link

https://bymovieapp.netlify.app/

---
##  Features

- Browse and explore movies
- Filter movies by category
- Sort movies by rating or release year
- Add movies to **Wishlist**
- Mark movies as **Watched**
- Firebase Authentication
  - Email & Password login
  - Google login
  - Password reset
- Protected routes for authenticated users

---

##  Tech Stack

- **React** – Frontend framework  
- **Vite** – Build tool  
- **Firebase** – Authentication  
- **Tailwind CSS** – Styling  
- **JavaScript** – Application logic  

---

##  Project Structure
 
```
project5
│
├── public
│
├── src
│ ├── assets
│ ├── components
│ │ ├── Navbar.jsx
│ │ ├── MovieCard.jsx
│ │ └── ProtectedRoute.jsx
│ │
│ ├── contexts
│ │ └── AuthContext.jsx
│ │
│ ├── firebase
│ │ └── config.js
│ │
│ ├── hooks
│ ├── pages
│ ├── utils
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

---

##  Environment Variables

Firebase credentials are stored using **environment variables** for security.

When you download or clone the repository, you must create a `.env` file in the root of the project.

1. Copy the file `.env.example`
2. Rename it to `.env`
3. Add the Firebase keys inside the `.env` file like this:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
---



- Yasir Dar
- Bruno Valdez

---



