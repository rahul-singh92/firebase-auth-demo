import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/Todo.css";

export default function TodoList() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="todo-container">
      <h1>Welcome! 🎉</h1>
      <p>You are successfully logged in.</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
