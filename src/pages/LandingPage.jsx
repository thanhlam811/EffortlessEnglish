import About from "../components/About";
import Features from "../components/Features";
import Home from "../components/Home";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";

const LandingPage = () => {
  return (
    <>
      <div style={{ marginTop: "110px" }}>
        <Home />
      </div>
      <Features />
      <About />
      <Pricing />
      {/* <Newsletter />   */}
    </>
  );
};

export default LandingPage;
