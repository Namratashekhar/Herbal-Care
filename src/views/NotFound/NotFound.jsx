import "./NotFound.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";  
function NotFound() {
  return (
    <div className="notfound">
      <Navbar />
      <BodyContainer>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default NotFound;