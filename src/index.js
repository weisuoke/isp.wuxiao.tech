import React from "react";
import ReactDOM from "react-dom";
import Topnav from "./components/Topnav";
import "./tailwindcss.css";
import "./style.less";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  return (
    <div>
      <Topnav title="天天全栈学习" />
      <Content />
      <Footer isp="浙ICP备2020030283号-2"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
