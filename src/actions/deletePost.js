import axios from "axios";

export const deletePost = async (id) => {
  try {
     await axios
      .delete(`https://dev.codeleap.co.uk/careers/${id}/`, {})
      .catch((error) => console.log("Error: ", error));
  } catch (error) {
    console.log("Error: ", error);
  }
};
