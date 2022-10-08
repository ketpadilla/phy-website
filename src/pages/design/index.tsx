import { useRef } from "react";
import "./style.css";

const Design = () => {
  const navlinkRef = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    if (navlinkRef.current) {
      navlinkRef.current.style.left = "0px";
    }
  };

  const hideMenu = () => {
    if (navlinkRef.current) {
      navlinkRef.current.style.left = "-600px";
    }
  };

  return (
    <section className="design">
      <nav>
        <div ref={navlinkRef} className="nav-links" id="navLinks">
          <a href="Web.html" className="logo">
            <img src="https://via.placeholder.com/250x100" />
          </a>
          <ul>
            <a href="" className="btn">
              Home
            </a>
            <a href="" className="btn">
              Topics
            </a>
            <a href="" className="btn">
              Forums
            </a>
          </ul>
          <i className="fa fa-times" onClick={hideMenu}></i>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>

      <div className="question">
        <div className="rect">
          <h1 className="absolute-title">GRADE 4-6</h1>
          <h2>HORIZONTAL KINEMATICS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            nisi vitae suscipit tellus mauris a diam maecenas sed. Massa massa
            ultricies mi quis hendrerit dolor magna. Lacus vel facilisis
            volutpat est velit. Nibh nisl condimentum id venenatis a condimentum
            vitae sapien. Lacus viverra vitae congue eu. Ut tristique et egestas
            quis ipsum suspendisse. In ornare quam viverra orci sagittis eu
            volutpat odio. Velit scelerisque in dictum non consectetur a erat.
            Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
            Velit dignissim sodales ut eu sem integer. Consectetur lorem donec
            massa sapien. Sollicitudin tempor id eu nisl nunc mi. Et molestie ac
            feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
        </div>
        <a className="rect2">
          <label>NUMBER</label>
          <input id="input" className="input" />
          <label>UNIT</label>
          <select id="unit" className="input"></select>
        </a>
        <a href="" className="btn">
          SUBMIT
        </a>
        <a href="" className="btn">
          SHOW SOLUTION
        </a>
      </div>
    </section>
  );
};

export default Design;
