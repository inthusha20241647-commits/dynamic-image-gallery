import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import morning from "./images/morning.jpg";
import mountain from "./images/mountain.jpg";
import waterfall from "./images/waterfall.jpg";
import landscape from "./images/landscape.jpg";
import spring from "./images/spring.jpg";
import evening from "./images/evening.jpg";

function Display(props) {
  return (
    
      <div className="ImageCard">
        <img src={props.image} alt={props.title}></img>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const gallery_profile = [
  {
    image: morning,
    title: "morning",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    image: mountain,
    title: "mountain",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    image: waterfall,
    title: "waterfall",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    image: landscape,
    title: "landscape",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    image: evening,
    title: "evening",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    image: spring,
    title: "Spring",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

root.render(
  <div>
    <div className="container">
    {gallery_profile.map(function (item) {
      return <Display image={item.image} title={item.title} desc={item.desc}></Display>;
    })}
    </div>
  </div>,
);
