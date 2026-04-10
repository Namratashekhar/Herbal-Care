import "./OurService.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

const servicesData = [
  {
    id: 1,
    title: "🌿 Plant Information",
    description: "Detailed information about various herbal plants and their properties."
  },
  {
    id: 2,
    title: "💊 Health Benefits",
    description: "Comprehensive guide to health benefits of different herbs and natural remedies."
  },
  {
    id: 3,
    title: "🛒 Product Consultation",
    description: "Expert guidance on selecting the right herbal products for your needs."
  },
  {
    id: 4,
    title: "📚 Educational Resources",
    description: "Articles, guides, and resources about herbal medicine and wellness."
  },
  {
    id: 5,
    title: "🚚 Fast Delivery",
    description: "Quick and reliable delivery of herbal products to your doorstep."
  },
  {
    id: 6,
    title: "📞 24/7 Support",
    description: "Round-the-clock customer support for all your herbal care queries."
  },
];

function OurService() {
  return (
    <div className="ourservice">
      <Navbar active="home" />

      <BodyContainer>
        <h1>Our Services 🌿</h1>

        <div className="service-container">
          {servicesData.map((item) => (
            <div key={item.id} className="service-card">
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

export default OurService;