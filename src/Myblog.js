import React from 'react';
//import ReactDOM from 'react-dom';
import './Myblog.css';


function Post(props){
    return(<div class="post">
      <div id="xInBox1">&#9746;</div>
        <span id="fontSize16">{props.titel}{props.numOfBlog}</span>
        <br></br>
        <span>{props.start}<strong>{props.strong}</strong>{props.continue}<span id="red">{props.red}</span>
        {props.continue2}</span>
        <br></br>
        <span>{props.apter4bar}</span>
        <a href='link'><span>{props.link}</span></a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {props.after4bar}{props.numOfDays}{props.end}{props.name}
        </div>);
  }

export default Post;
