import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../component/Button";

function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let params = useParams();
  let history = useHistory();
  // function handleTfunction handleDescriptionChange(event) {
  //     setDescription(event.target.valuitleChange(event) {
  //     setTitle(event.target.value);
  //   }

  //   );
  //   }
  async function updatePost() {
    let response = await fetch("http://localhost:8000/posts/" + params.postId, {
      method: "PUT",
      body: JSON.stringify({ title: title, content: content }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      history.push("/");
    }
  }

  useEffect(() => {
    async function EditPost() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postId
      );
      let data = await response.json();
      setTitle(data.data.title);
      setContent(data.data.content);
    }
    EditPost();
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    updatePost();
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    setContent(e.target.value);
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
              value={content}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>

        <div className="ButtonAddpost">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
export default EditPost;
