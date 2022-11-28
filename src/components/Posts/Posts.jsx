import { useDispatch } from "react-redux";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import deleteIcon from "./delete-icon.svg";
import editIcon from "./edit-icon.svg";
import { userPost } from "../../redux/userPostSlice";
import {
  deleteModal,
  editModal,
  handleClickModal,
} from "../../actions/handleClickModal";
import "./Posts.css";

const Posts = ({ title, username, date, content, id }) => {
  const newUsername = sessionStorage.getItem("username");
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(userPost({ userPost: { id } }));
    handleClickModal(deleteModal, "block");
  };

  const handleClickEdit = () => {
    dispatch(
      userPost({
        userPost: { username: newUsername, id, title, content },
      })
    );
    handleClickModal(editModal, "block");
  };

  return (
    <div className="posts-container">
      <div className="posts-header">
        <div className="posts-title">{title}</div>
        {newUsername === username && (
          <div className="icons">
            <img
              alt="delete icon"
              src={deleteIcon}
              onClick={handleClickDelete}
            />
            <img alt="edit icon" src={editIcon} onClick={handleClickEdit} />
          </div>
        )}
      </div>
      <div className="creator-date-container">
        <div className="post-creator">{`@${username}`}</div>
        <div className="post-date">{date}</div>
      </div>
      <textarea readOnly disabled className="post-content" value={content}></textarea>
      <DeleteModal />
      <EditModal />
    </div>
  );
};

export default Posts;
