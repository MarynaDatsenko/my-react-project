import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { UserProvider } from "./userContext";

const initialUserValue = {
  username: "Mango",
  isLoggedIn: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider value={initialUserValue}>
    <App />
  </UserProvider>
);
