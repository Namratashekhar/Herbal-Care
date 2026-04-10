import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";


import Img1 from "../../assets/plant1.jpg";
import Img2 from "../../assets/plant2.jpg";
import Img3 from "../../assets/plant3.jpg";
import Img4 from "../../assets/plant4.jpg";
import Img5 from "../../assets/plant5.jpg";

const Products = [
  {
    id: 1,
    title: "Aloe Vera",
    price: 40,
    use:"Skin care and healing",
    description: "Helps in treating burns and moisturizing skin",
    image: Img1
  },
  {
    id: 2,
    title: "Tulsi",
    price: 60,
    use: "Boost immunity",
    description: "Used in treating cold and cough",
    image: Img2
  },
  {
    id: 3,
    title: "Neem",
    price: 70,
    use: "Skin and dental care",
    description: "Has antibacterial properties",
    image: Img3
  },
  {
    id: 4,
    title: "Ashwagandha",
    price: 80,
    use: "Stress relief",
    description: "Helps reduce stress and improve energy levels",
    image: Img4
  },
  {
    id: 5,
    title: "Curry leaves",
    price: 50,
    use: "Digestion and hair care",
    description:  "Improves digestion and supports hair health",
    image: Img5
  }
];

function Home() {
  return (
    <div className="home">
      <Navbar active="home" />
      

      <BodyContainer>
        <h1>Welcome to HerbalCare 🌿</h1>

        <div className="product-container">
          {Products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} width="120" />
              <h3>{product.title}</h3>
              <p className="use">{product.use || "Herbal product"}</p>
              <p className="description">{product.description}</p>
            </div>
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;





