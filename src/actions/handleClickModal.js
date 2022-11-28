export const editModal = "edit-modal";
export const deleteModal = "delete-modal";

export const handleClickModal = (modalId, action) =>
  (document.getElementById(modalId).style.display = action);
