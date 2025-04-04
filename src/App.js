import "./App.css";
import { Agencies } from "./components/Agencies";
import { Ask } from "./components/Ask";
import { Capabilities } from "./components/Capabilities";
import { Community } from "./components/Community";
import { Feature } from "./components/Feature";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Posts } from "./components/Posts";
import { Price } from "./components/Price";
import { Structure } from "./components/Structure";
function Home() {
  return (
    <>
      <div
        className="home page-template page-template-page-templates page-template-home1 page-template-page-templateshome1-php page page-id-47 elementor-default elementor-kit-46 elementor-page elementor-page-47 e--ua-blink e--ua-chrome e--ua-webkit"
        data-elementor-device-mode="desktop"
      >
        <div className="wrapper">
          <Header />
          <div
            data-elementor-type="wp-page"
            data-elementor-id="47"
            className="elementor elementor-47"
          >
            {/* <Contact /> */}
            <div
              data-elementor-type="wp-page"
              data-elementor-id="47"
              className="elementor elementor-47"
            >
              {/* <Contact /> */}
              <Hero />
              <Feature />
              <Agencies />
              <Structure />
              <Capabilities />
              <Community />
              <Price />
              <Ask />
              <Posts />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
