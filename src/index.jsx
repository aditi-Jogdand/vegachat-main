import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "tailwindcss/tailwind.css";
import "./index.css";
import Mainpg from "./component/root/home";
import Nav from "./component/root/nav";
import post1ex from "./component/posts/POST/ex1";

const Home = lazy(() => import("./component/root/home"));
const Profile = lazy(() => import("./component/profile/profilepg"));
const Write = lazy(() => import("./component/write"));
const Expost1 = lazy(() => import("./component/posts/POST/ex1"));

// const Settings = lazy(() => import("./component/''"));
// const Register = lazy(() => import("./component/''"));
// const Login = lazy(() => import("./component/''"));

const App = props => (
  <>
  <Nav/>
  {/* <Mainpg/> */}
    {props.children}
  </>
);

render(() => (
  <Router root={App}>
    <Route path="/profile" component={Profile}/>
    <Route path="/write" component={Write}/>
    <Route path="/posts/ex1" component={post1ex}/>
    <Route path="/" component={Home} />
  </Router>
),document.getElementById("root"));

