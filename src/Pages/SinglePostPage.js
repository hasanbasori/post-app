/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/Button";
import { useHistory } from "react-router-dom";

function SinglePostPage() {
  const [post, setPost] = useState({});
  let params = useParams();
  let history = useHistory();

  useEffect(() => {
    async function getPostbyId() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postId
      );
      let data = await response.json();
      console.log(data.data);

      setPost(data.data);
    }
    getPostbyId();
  }, []);
  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: whitesmoke;
          `}
        >
          Bearsore Club
        </h1>
        <Button
          onClick={() => {
            history.push("/Homepage/");
          }}
        >
          Back
        </Button>
        {/* <button className="button">Add post</button> */}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div className="post-box">
          <h1>{post.title}</h1>
          <div>
            <img
              css={css`
                width: 100%;
                height: 300px;
              `}
              src={`https://source.unsplash.com/collection/${post.id}`}
            />
          </div>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
