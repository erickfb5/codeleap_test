import axios from "axios";

export const createPost = (username, title, content) => {
  try {
    axios
      .post(`https://dev.codeleap.co.uk/careers/`, { username, title, content })
      .catch((error) => console.log("Error: ", error));
  } catch (error) {
    console.log("Error: ", error);
  }
};
