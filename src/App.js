import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Pristine Outdoor</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="hero">
      <h1>Pristine Outdoor Services</h1>
      <p>
        Premium exterior cleaning services run by local students delivering
        top-tier results in Roslyn Heights - Albertson - East Williston, -
        Williston Park
      </p>
      <Link to="/contact" className="btn">
        Get a Quote
      </Link>
    </div>
  );
}

function Services() {
  return (
    <div className="section">
      <h1>Our Services</h1>

      <div className="cards">
        <div className="card">
          <h3>Window Cleaning</h3>
          <img
            src="https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150358980.jpg"
            alt="window cleaning"
          />
          <p>Streak-free, spotless glass every time.</p>
        </div>

        <div className="card">
          <h3>Power Washing</h3>
          <img
            src="https://media.istockphoto.com/id/2150556211/photo/half-of-the-stone-slabs-were-cleaned-with-a-high-pressure-cleaner-before-and-afterwards.jpg?s=612x612&w=0&k=20&c=N9GDsNEsJWYEQy8kiA0JhSauch92yD3i-0kGaHVRtT0="
            alt="power washing"
          />
          <p>Restore driveways, patios, and siding.</p>
        </div>

        <div className="card">
          <h3>Outdoor Maintenance</h3>
          <img
            src="https://img.freepik.com/free-photo/male-hands-cutting-bushes-with-big-scissors_651396-1549.jpg?semt=ais_hybrid&w=740&q=80"
            alt="outdoor maintenance"
          />
          <p>Keep your property looking pristine year-round.</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="section">
      <h1>Contact Us</h1>
      <p>
        <strong>Phone:</strong> 516-906-2814
      </p>
      <p>
        <strong>Instagram:</strong> @pristine_outdoor_services
      </p>
      <p>
        <strong> Areas:</strong> Roslyn Heights - Albertson - East Williston -
        Williston Park
      </p>
      <a href="tel:5169062814" className="btn">
        Call Now
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
