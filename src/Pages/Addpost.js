/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "../component/Button";

function Addpost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  async function createPost() {
    let response = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      body: JSON.stringify({ title: title, content: description }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      history.push("/");
    }
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    createPost();
    console.log("submit");
  }
  return (
    <>
      <div className="postapp-header">
        <h1
          css={css`
            color: whitesmoke;
          `}
        >
          Bearsore Club
        </h1>
        {/* <StyledButton primary={false}>Add Post</StyledButton> */}
        {/* <button className="button">Add post</button> */}
      </div>
      <div className="ContainerP">
        <h1>Post App </h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h3 className="ContainerP">Title</h3>
          <div className="ContainerP">
            <input
              className="Title "
              type="textArea"
              placeholder="Enter Post title"
              onChange={handleTitleChange}
              value={title}
            ></input>
          </div>
        </div>
        <div>
          <h3 className="ContainerP">Description</h3>
          <div className="ContainerP">
            <textarea
              className="Description "
              placeholder="Enter Post Description"
              onChange={handleDescriptionChange}
              value={description}
            ></textarea>
          </div>
        </div>
        <div className="ButtonAddpost">
          <Button type="submit">Post</Button>
        </div>
      </form>
    </>
  );
}

export default Addpost;
