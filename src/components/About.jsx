import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    sectionTitle: "About Me",
    sectionDescription:
        "See my portfolio of design and engineering work ranging from desktop, mobile, spatial computing (AR, VR MR XR). Read my O’Reilly Media collective anthology spearheading this project as lead Co-Editor of Creating Augmented and Virtual Realities: Theory and Practice for Next-Generation Spatial Computing." ,
        aboutsData: [
        {
            Icon: "icofont-twitch",
            title: "Watch",
            content: "Watch my Twitch Stream, YouTube Channel, and find past recordings of my speaking material, talks I have given, panels I have moderated, hackathons I have judged etc.",
        },
        {
            Icon: "icofont-book",
            title: "Read",
            content: "I am lead co-editor and contributor of the anthology, Creating Augmented + Virtual Realities (AR+VR): 	Theory and Practice for Next-Generation of Spatial Computing to be released under O'Reilly Media 	March 2019, her chapter covers data and machine learning visualization design and development. In 2017-2018, I was selected as a Diversity Fellow at University of San Francisco (USF) Data Institute Deep Learning Program.",
        },
        {
            Icon: "icofont-download",
            title: "Download",
            content: "Check out my professional work portfolio, ranging from front-end engineering, graphic, marketing+communications, UX/UI, and computational design, Artificial Intelligence (AI), and spatial computing (Augmented and Virutal Reality - AR+VR).",
        },
        {
            Icon: "icofont-users-social",
            title: "Organize",
            content: "Take action and join in the causes I support, 2 501(c)(3) non-profit organizations I co-founded supporting diversity and inclusion, ARVR Academy for women and underrepresented	communities in tech and FilipinX Americans in STEAM (FASTER).",
        },
        {
            Icon: "icofont-headphone",
            title: "Listen",
            content: "Coming soon. My other hobbies include page and spoken word poetry + producing beats that I have taken up again as a music and hip hop lover",
        },
        {
            Icon: "icofont-speech-comments",
            title: "Connect",
            content: "Contact me about future speaking engagements and other activities.",
        },
    ]
};

export default About;
