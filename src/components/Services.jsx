import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
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
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    sectionTitle: "My Philosophy",
    sectionDescription:
        "As a hybrid computational designer and software engineer working in emerging tech, I am by nature always looking at various perspectives to give a fresh take and holistic approach. Additionally, as a former politico at the intersection of tech, I am always considering the impact of my work.",

    servicesData: [
        {
            icon: "icofont-speed-meter",
            heading: "Efficiency",
            description:
                "My engineering and entrepreneurial philosophy is to strive for optimization."
        },
        {
            icon: "icofont-paint",
            heading: "Design",
            description:
                "I strive for beautiful form and function that enhances creative expression."
        },
        {
            icon: "icofont-globe",
            heading: "Impact",
            description:
                "Through my interdisciplinary approach, I push boundaries to serve purpose and stay on the bleeding edge."
        },
    ]
};

export default Services;
