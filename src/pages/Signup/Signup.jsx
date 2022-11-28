import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userPost } from "../../redux/userPostSlice";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  sessionStorage.removeItem("username");

  const handleClick = () => {
    dispatch(userPost({ username }));
    sessionStorage.setItem("username", username);
    navigate("/feed");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Welcome to CodeLeap network!</h1>
      <label className="signup-label">Please enter your username</label>
      <input
        className="signup-input"
        type="text"
        maxLength={35}
        placeholder="John Doe"
        onChange={(event) => setUsername(event.target.value)}
      />
      <div className="btn-container">
        <span className={!username ? "cursor-not-allowed" : ""}>
          <button 
            className={!username ? "signup-button disable-btn" : "signup-button"}
            onClick={handleClick}
          >
            ENTER
          </button>
        </span>
      </div>
    </div>
  );
};

export default Signup;
