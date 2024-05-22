import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "tailwindcss/tailwind.css";
import "./index.css";
import Mainpg from "./component/root/home";
import Nav from "./component/root/nav";
import post1ex from "./component/posts/POST/ex1";
import ChatBot from "./component/chatbot/chatbtn";

const Home = lazy(() => import("./component/root/home"));
const Profile = lazy(() => import("./component/profile/profilepg"));
const Write = lazy(() => import("./component/write"));
const Expost1 = lazy(() => import("./component/posts/POST/ex1"));
const UserSettings = lazy(() => import("./component/settings"));
// const Register = lazy(() => import("./component/''"));
// const Login = lazy(() => import("./component/''"));

const App = props => (
  <>
  <Nav/>
  <ChatBot/>
  {/* <Mainpg/> */}
    {props.children}
  </>
);

render(() => (
  <Router root={App}>
    <Route path="/profile" component={Profile}/>
    <Route path="/write" component={Write}/>
    <Route path="/posts/ex1" component={Expost1}/>
    <Route path="/settings" component={UserSettings}/>

    <Route path="/" component={Home} />
  </Router>
),document.getElementById("root"));

