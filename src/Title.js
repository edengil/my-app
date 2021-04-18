import './Title.css';



function Title(props){
    return(
  <div class="Box1">
    <a href='link'>{props.first_link}</a>
     | <a href='link'>{props.next_link}</a> | 
    <a href='link'>{props.one_more}</a>
    <a id="box2" href='link'>{props.login}</a>
  
     <h1 class="title"><span>{props.title}</span></h1></div>);
       }
  
export default Title;  