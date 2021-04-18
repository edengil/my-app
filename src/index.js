import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Post from './Myblog';
import Right from './Right';
import Title from './Title';



var props = [
  {
      titel: "Blog post #",
      numOfBlog: "1",
      start: "My ",
      strong: "first blog post ",
      continue: "is all about me",
      red: " blog post",
      continue2: " and how to write a new post in my ",
      continue2andbar: "blog, you can find it ",
      link: "here",
      after4bar: "Published ",
      numOfDays: "1 ",
      end: "days ago by ",
      name: "Israel"
  },
  {
      titel: "Blog post #",
      numOfBlog: "2",
      start: "My",
      strong: " second blog post",
      continue: " is all about my blog post.",
      red: "",
      continue2: "",
      continue2andbar: "",
      link: "",
      after4bar: "Published ",
      numOfDays: "2 ",
      end: "days ago by ",
      name: "Joe"
  },
  {
      titel: "Blog post #",
      numOfBlog: "3",
      start: "My",
      strong: " third blog post",
      continue: " is all about my blog post.",
      red: "",
      continue2: "",
      continue2andbar: "",
      link: "",
      after4bar: "Published ",
      numOfDays: "3",
      end: "days ago by ",
      name: "Israel"
  }
]
var right =[
  {
    first_link: "Home",
    next_link: "About Me",
    one_more: "Contoct Me",
    login: "Login",
    title: "This is my blog"
  },
  {
    titel2: "Popular",
    first_popular_blog: "3",
    second_popular_blog: "1",
    third_popular_blog: "2",
    link_of_first4: "go to page",
    link_of_second5: "go to page",
    link_of_third6: "go to page",
    titel1: "Lastest",
    first_blog: "1",
    second_blog: "2",
    third_blog: "3",
    link_of_first1: "go to page",
    link_of_second2: "go to page",
    link_of_third3: "go to page"
  }
]


ReactDOM.render(<Post {...props[0]}/>,document.getElementById("box0"));
ReactDOM.render(<Post {...props[1]}/>,document.getElementById("box1"));
ReactDOM.render(<Post {...props[2]}/>,document.getElementById("root2"));
ReactDOM.render(<Right  {...right[1]}/>,document.getElementById("root4"));
ReactDOM.render(<Title  {...right[0]}/>,document.getElementById("Title"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





