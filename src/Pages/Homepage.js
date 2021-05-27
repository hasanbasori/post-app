/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import "../App.css";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import Button from "../component/Button";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  let history = useHistory();
  const [edit, setEdit] = useState();

  //

  const [countLike, setCountLike] = useState(0);

  //
  // function countLike(){
  //   onClick={() => {
  //     setCountLike(countLike + 1);
  //   }}
  // }

  useEffect(function () {
    async function getPosts() {
      try {
        let response = await fetch("http://localhost:8000/posts");
        let data = await response.json();
        setPosts(data.data);
      } catch (error) {
        setIsError(true);
        alert("error");
      }
    }
    getPosts();
  }, []);
  function handleAddPostClick() {
    history.push("/addpost");
  }

  async function handleDeletePost(postId) {
    // console.log("postId", postId);
    let response = await fetch("http://localhost:8000/posts/" + postId, {
      method: "DELETE",
    });

    if (response.ok) {
      let newPosts = posts.filter((post) => {
        return post.id !== postId;
      });
      setPosts(newPosts);
    }
  }
  let src =
    "https://www.clocklink.com/html5embed.php?clock=046&timezone=ICT&color=red&size=256&Title=&Message=&Target=&From=2021,1,1,0,0,0&Color=red";

  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e);
  };

  const [comment, setComment] = useState([
    // {
    //   task: "",
    // },
  ]);

  const handleSubmitAddForm = (e) => {
    e.preventDefault();
    setComment([...comment, { task: text }]);
    setText("");
  };
  return (
    <div className="main">
      <div className="postapp-header">
        <h1
          css={css`
            color: whitesmoke;
          `}
        >
          Bearsore Club
        </h1>
        <Button primary={false} onClick={handleAddPostClick}>
          Add Post
        </Button>
        {/* <button className="button">Add post</button> */}
      </div>
      <div className="main-container">
        <div className="main-l">
          {" "}
          {/* <iframe
            title="sun"
            scrolling="no"
            frameborder="no"
            clocktype="html5"
            style={{
              overflow: "hidden",
              border: 0,
              margin: 0,
              padding: 0,
              width: "256px",
              height: "174px",
              position: "fixed",
            }}
            src={src}
          ></iframe> */}
        </div>
        <div className="post-container">
          {isError && <h1> Something went wrong Please try again.</h1>}
          {posts.map((post) => {
            return (
              <div key={post.id} className="post-box">
                <div>
                  <p
                    css={css`
                      cursor: pointer;
                    `}
                    className="title-p"
                    onClick={() => {
                      history.push("/Post/" + post.id);
                    }}
                  >
                    <b>Title : {post.title}</b>
                  </p>
                  <p>{post.content}</p>
                  <div>
                    <img
                      css={css`
                        width: 100%;
                        height: 300px;
                      `}
                      src={`https://source.unsplash.com/collection/${post.id}`}
                    />
                  </div>

                  <div className="button-input">
                    <p>Author : Hasanbasori</p>
                    <div>
                      <Button
                        onClick={() => {
                          setCountLike(countLike + 1);
                        }}
                      >
                        {countLike}
                        <span> &#128077;</span>
                      </Button>
                      <Button
                        onClick={() => history.push("/editPost/" + post.id)}
                        primary={false}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={function () {
                          handleDeletePost(post.id);
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                      {/* <button className="bt">Edit</button>
                      <button className="bt">Delete</button> */}
                    </div>
                  </div>
                  <div
                    css={css`
                      display: flex;
                    `}
                  >
                    <form onSubmit={handleSubmitAddForm}>
                      <input
                        css={css`
                          width: 400px;
                          text-align: center;
                          border: 1px solid gray;
                          border-radius: 8px;
                          height: 25px;
                        `}
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter your comment here."
                      ></input>
                      <Button>Comment</Button>
                    </form>
                  </div>
                  <ul>
                    {comment.map(({ task }, index) => (
                      <div key={index}>
                        <span>{task}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="main-r"></div>
      </div>
    </div>
  );
}

export default Homepage;
