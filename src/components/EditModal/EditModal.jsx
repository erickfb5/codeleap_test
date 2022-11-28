import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { editModal, handleClickModal } from "../../actions/handleClickModal";
import { updatePost } from "../../actions/updatePost";
import "./EditModal.css";

const EditModal = () => {
  const [newTitle, setNewTitle] = useState();
  const [newContent, setNewContent] = useState();
  const { userPost } = useSelector((state) => state.userPost.value);

  useEffect(() => {
    setNewTitle(userPost?.title);
    setNewContent(userPost?.content);
  }, [userPost]);

  const handleClick = () => {
    updatePost(userPost.id, newTitle, newContent);
    setTimeout(() => window.location.reload(), 300);
    handleClickModal(editModal, "none");
  };

  return (
    <div id={editModal} className="modal">
      <div className="mypost-container">
        <div>
          <h1 className="mypost-title">Edit item</h1>
          <div className="input-container">
            <label className="mypost-label">Title</label>
            <input
              className="title-inputs"
              type="text"
              placeholder={newTitle}
              defaultValue={newTitle}
              maxLength={35}
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <label className="mypost-label">Content</label>
            <textarea
              className="content-inputs"
              type="text"
              maxLength={430}
              placeholder={newContent}
              defaultValue={newContent}
              onChange={(event) => setNewContent(event.target.value)}
            />
          </div>

          <div className="btn-container">
            <span
              className={!newTitle || !newContent ? "cursor-not-allowed" : ""}
            >
              <button
                className={!newTitle || !newContent ? "disable-btn" : ""}
                onClick={handleClick}
              >
                save
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
