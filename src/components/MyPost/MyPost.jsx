import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../actions/fetchPosts";
import { createPost } from "../../actions/createPost";
import "./MyPost.css";

const MyPost = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const username = sessionStorage.getItem("username");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleClick = () => {
    if (!username) {
      alert("you must login to create a post");
      return navigate("/signup");
    }
    createPost(username, newPost.title, newPost.content);
    setTimeout(() => window.location.reload(), 150);
  };

  return (
    <div className="mypost-container">
      <div>
        <h1 className="mypost-title">What's on your mind?</h1>
        <div className="input-container">
          <label className="mypost-label">Title</label>
          <input
            className="title-inputs"
            type="text"
            placeholder="Hello world"
            maxLength={35}
            onChange={(event) =>
              setNewPost({ ...newPost, title: event.target.value })
            }
          />
          <label className="mypost-label">Content</label>
          <textarea
            className="content-inputs"
            type="text"
            maxLength={430}
            placeholder="Content here"
            onChange={(event) =>
              setNewPost({ ...newPost, content: event.target.value })
            }
          />
        </div>

        <div className="btn-container">
          <span
            className={
              !newPost.title || !newPost.content ? "cursor-not-allowed" : ""
            }
          >
            <button
              className={
                !newPost.title || !newPost.content ? "disable-btn" : ""
              }
              onClick={handleClick}
            >
              create
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
