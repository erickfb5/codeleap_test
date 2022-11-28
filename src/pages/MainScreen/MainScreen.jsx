import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import MyPost from "../../components/MyPost/MyPost";
import Posts from "../../components/Posts/Posts";
import "./MainScreen.css";

const MainScreen = () => {
  const [postsList, setPostsList] = useState([]);
  const posts = useSelector((state) => state.posts.value);

  useEffect(() => {
    setPostsList(posts);
  }, [postsList, posts]);

  return (
    <div className="container">
      <div className="title-header">
        <div>
          <h1 className="mypost-title">CodeLeap Network</h1>
        </div>
        <MyPost />
        <div className="posts-wrapper" style={{ margin: "-85px auto" }}>
          {
            <>
              {postsList?.map((post) => (
                <Posts
                  key={post.id}
                  date={moment(post.created_datetime).fromNow()}
                  {...post}
                />
              ))}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
