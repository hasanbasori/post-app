import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Addpost from "./Pages/Addpost";
import "./App.css";
import SinglePostPage from "./Pages/SinglePostPage";
import Counter from "./Pages/CounterPage";
import EditPost from "./Pages/EditPost";

function Post() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/editPost/:postId" component={EditPost} />
          <Route path="/counter" component={Counter} />
          <Route path="/Post/:postId" component={SinglePostPage} />
          <Route path="/addpost" component={Addpost} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Post;
