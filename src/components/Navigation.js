import { Link } from "react-router-dom";
import "../Styles/Navigation.css"



function navTop() {

  alert("most common way of writing function");
   myFunction();


  // Get the container
  // var container = document.getElementById("container");

  // Get the offset position of the container
  // var sticky = container.offsetTop;

  // Add the sticky class to the container when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    var container = document.getElementsByClassName("container");
    
  var sticky = container.offsetTop;
  alert(" common way of writing function");

    if (Window.pageYOffset >= sticky) {
      container.classList.add("sticky");
    } else {
      container.classList.remove("sticky");
    }
  alert("most common way of writing function");

  }
}
  




const Navigation = () => {

  return (
    <>
      <nav className="container ">
        <Link to="/" className="logo">
          <>
            <img src="/images/myphoto2.jpg" alt="logo" />
            <span> Dvlpr Ujjwal</span>
          </>
        </Link>
        <ul className="ujj">
          <li>
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">FEATURES</Link>{" "}
          </li>
          <li>
            <Link to="/">PORTFOLIO</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">RESUME</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/">CLIENTS</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">PRICING</Link>{" "}
          </li>
          <li>
            <Link to="/">BLOG</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">CONTACT</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">FOOTER</Link>{" "}
          </li>
          <button className='button-1' onClick={navTop}>buy now</button>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
