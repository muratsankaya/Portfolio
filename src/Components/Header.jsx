import "./Header.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Welcome To My Site.</h1>
      </div>
      <div className="header-center"></div>
      <div className="header-right">
        <Button
          variant="outline-dark"
          onClick={() =>
            window.open("https://github.com/muratsankaya/Portfolio", "_blank")
          }
        >
          View This Project
        </Button>
      </div>
    </div>
  );
};

export default Header;
