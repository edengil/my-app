
//import ReactDOM from 'react-dom';
import './Right.css';

function Popular(props){
    return(<div id="toTheRight">
        <h1>{props.titel1}</h1>
         <span id="blog3">Blog post #{props.first_blog} <a href='link'>{props.link_of_first1}</a></span>
         <br></br>
         <span id="blog1">Blog post #{props.second_blog} <a href='link'>{props.link_of_second2}</a></span>
         <br></br>
         <span id="blog2">Blog post #{props.third_blog} <a href='link'>{props.link_of_third3}</a></span>
         <br></br>
         <hr id="hr"></hr>
        <h1>{props.titel2}</h1>
         <span id="blog3">Blog post #{props.first_popular_blog} <a href='link'>{props.link_of_first4}</a></span>
         <br></br>
         <span id="blog1">Blog post #{props.second_popular_blog} <a href='link'>{props.link_of_second5}</a></span>
         <br></br>
         <span id="blog2">Blog post #{props.third_popular_blog} <a href='link'>{props.link_of_third6}</a></span>
         <br></br>
    </div>);
  }

export default Popular;