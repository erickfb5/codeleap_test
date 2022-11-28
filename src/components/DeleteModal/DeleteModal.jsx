
import { useSelector } from "react-redux";
import { deletePost } from "../../actions/deletePost";
import { deleteModal, handleClickModal } from "../../actions/handleClickModal";
import "./DeleteModal.css";

const DeleteModal = () => {
  const { userPost } = useSelector((state) => state.userPost.value);

  const handleClick = () => {
    deletePost(userPost.id);
    handleClickModal(deleteModal, "none");
    setTimeout(() => window.location.reload(), 300);
  };
  return (
    <div id={deleteModal} className="modal">
      <div className="modal-content">
        <div className="modal-container">
          <span className="modal-title">
            Are you sure you want to delete this item?
          </span>

          <div className="modal-btn-container">
            <button
              type="button"
              onClick={() => handleClickModal(deleteModal, "none")}
              className="cancelbtn"
            >
              cancel
            </button>
            <button type="button" onClick={handleClick} className="deletebtn">
              ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
