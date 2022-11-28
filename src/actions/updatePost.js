import axios from "axios";

export const updatePost = (id, title, content) => {
  try {
    axios
      .patch(`https://dev.codeleap.co.uk/careers/${id}/`, { title, content })
      .catch((error) => console.log("Error: ", error));
  } catch (error) {
    console.log("Error: ", error);
  }
};
