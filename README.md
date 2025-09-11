# React Firebase Authentication

This project is a simple **React app** demonstrating how to use **Firebase Authentication** with:
- Email/Password Sign Up & Sign In
- Google Sign In
- Protected Routes (only accessible after login)

Currently, the app contains only **authentication pages** (`Sign In` and `Sign Up`) along with a Google login option. After successful login, it redirects to a blank To-Do page placeholder (no todo functionality added yet).

---

## 🚀 Features

- 🔑 User Sign Up (email + password)
- 🔐 User Sign In (email + password)  
- 🌐 Google Sign In
- 🔒 Protected routes using Firebase auth state

---

## 🛠️ Tech Stack

- React  
- React Router DOM  
- Firebase Authentication  
- React Firebase Hooks  

---

## 📂 Project Structure

src/
|-- firebase.js # Firebase config & initialization
|-- App.js # Main routing with protected routes
|-- pages/
| |-- SignIn.js # Sign In page
| |-- SignUp.js # Sign Up page
| |-- ToDoList.js # Placeholder for To-Do (post login)
|-- styles/
|-- SignIn.css
|-- SignUp.css


---

## ⚡ Setup Instructions

1. **Clone this repo:**
```
git clone https://github.com/rahul-singh92/firebase-auth-demo.git
cd <repo-name>
```

2. **Install dependencies:**
```
npm install
```

3. **Create a `.env.local` file in the root with your Firebase config:**
```
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_app_measurement_id
```

4. **Run the app:**
```npm start```

---
## To Understand visit
youtube.com

---

## 📜 License

This project is for learning purposes. Free to use and extend.
