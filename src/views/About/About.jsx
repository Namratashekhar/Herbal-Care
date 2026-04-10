import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AboutData = [
  {
    id: 1,
    title: "🌿 Who We Are",
    description: "We are a platform that provides information about herbal plants and their natural benefits."
  },
  {
    id: 2,
    title: "🌱 Our Collection",
    description: "We include plants like Aloe Vera, Tulsi, Neem, Ashwagandha, and many more useful herbs."
  },
  {
    id: 3,
    title: "💊 Our Mission",
    description: "Our mission is to promote a healthy lifestyle using natural and herbal solutions."
  },
  {
    id: 4,
    title: "🚚 Easy Access",
    description: "We provide simple and clear information so users can easily learn about herbal plants."
  }
];

function About() {
  return (
    <div className="about">
      <Navbar active="about" />

      <BodyContainer>
        <h1 className="about-title">About HerbalCare 🌿</h1>
        <p className="about-subtitle">Know more about herbal plants and their benefits</p>

        <div className="about-container">
          {AboutData.map((item) => (
            <div key={item.id} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default About;