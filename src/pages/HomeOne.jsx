import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";
import Services from "../components/Services";
import WelcomeServices from "../components/WelcomeServices";
import Works from "../components/Works";
import About from "../components/About";
// import Team from "../components/Team";
import Blog from "../components/Blog";
import VideoArea from "../components/VideoArea";
// import Pricing from "../components/Pricing";
// import FunFacts from "../components/FunFacts";
// import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomeOne extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar pageName="home" />
            {/* BannerOne: src/components/banner/BannerOne */}
            <BannerOne />
            {/* Services: src/components/Services.jsx */}
            <Services />
            {/* WelcomeServices: src/components/WelcomeServices.jsx */}
            <WelcomeServices />
            {/* About: src/components/About.jsx */}
            <About />
            {/* Blog: src/components/Blog.jsx */}
            <Blog />
            {/* VideoArea: src/components/VideoArea.jsx */}
            <VideoArea />
            {/* Works: src/components/Works.jsx */}
            <Works />
            {/* Contact: src/components/Contact.jsx */}
            <Contact />
            {/* Footer: src/components/Footer.jsx */}
            <Footer />
        </React.Fragment>
    );
  }
}

export default HomeOne;
