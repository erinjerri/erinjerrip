import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Blog extends Component {
    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }
  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blog.postLink} className="blog-img"><img src={blog.postImage} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {blog.date} <span className="month">{blog.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={blog.postLink}>{blog.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.authorLink}>{blog.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.CommentsLink}>{blog.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.TagLink}>{blog.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{blog.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100">
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
                        {blogdata}
                        <div className="col-lg-12 col-md-12 all-post">
                            <div className="center-wrap">
                            <Link to={this.props.btnLink} className="btn-a">
                                <div className="button">
                                    {this.props.BlogBtn} <Icofont icon="icofont-long-arrow-right" />
                                    <div className="mask"></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
//Props Types
Blog.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Blog.defaultProps = {
    sectionTitle: "Experience My Work",
    sectionDescription:
        "Download, experience, read about my portfolio of work in front-end engineering, UX/UI and marketing+communications design, computational design, data visualization, Artificial Intelligence (AI), and spatial computing (Augmented and Virtual Reality (AR + VR)",
    btnLink: "/blog-one",
    BlogBtn: "View All Post",
        blogsData: [
        {
            postImage: require("../assets/img/MYSC.png"),
            postLink: "/blog-details",
            date: "May",
            month: "2019",
            posttitle: "MYSC",
            postContent: "Stealth Startup. Currently, I am a fellow at Verizon Ventures’ Alley All-In-Fellowship program working on a revamp of my stealth startup research, MYSC, where our platform advances Alzheimer’s research using AI and Augmented Reality (AR) to unlock insights with cutting-edge analytics and save researchers time and money in drug discovery. ",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "startup",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-data-viz.png"),
            postLink: "/blog-details",
            date: "2019",
            month: "April",
            posttitle: "Overview: Data Visualization Design + Development in XR.",
            postContent: "I gave a talk at the Augmented World Expo (AWE) on the subject in 2017. A more refined version of the material can be found in the 2019 O'Reilly Media published anthology. I also posted another tutorial on how to create data and machine learning visualizations on the blog.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "data visualization",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/Data-Viz1.png"),
            postLink: "/blog-details",
            date: "2019",
            month: "April",
            posttitle: "Tutorial: How to Create Data and Machine Visualizations in XR",
            postContent: "This is the supplemental tutorial (what I couldn't fit) in the Creating Augmented and Virtual Realities O'Reilly anthology book where I published the chapter on data and machine learning visualization in spatial computing.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "data visualization",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-fast-ai.png"),
            postLink: "/blog-details",
            date: "2019",
            posttitle: "Deep Learning Project #2: NLP",
            postContent: ".",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "deep learning",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-fast-ai.png"),
            postLink: "/blog-details",
            date: "2018",
            posttitle: "Deep Learning Project #1: Computer Vision Style Transfer",
            postContent: "Read about my work on the fast.ai course on deep learning part I and II. I was selected as a Diversity Fellow in the Deep Learning program at the University of San Francisco (USF) 2017-2018.",
            authorName: "Jone",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "deep learning",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-olp-skr.png"),
            postLink: "/blog-details",
            date: "2018",
            month: "July",
            posttitle: "Oculus Launch Pad Project Baybayin - Natural Language Processing in AR.",
            postContent: "For my Oculus Launch Pad project, I am working on leverage Apple CoreML and creating the first non-English 3D dataset and am creating novel Natural Language Processing (NLP) techniques to help standardize of word embeddings of pre-Philippine writing system, Baybayin through a creative educational application and experience that teaches the language.  I worked on this project with my colleagues, leading authority on Baybayin,  Kristian Kabuay and cross-platform extraordinaire, co-founder of Across Realities, Steve Lukas and am continuing further deeper work into NLP and Computer Vision (CV) algorithms in this area.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "NLP",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-386BSD.png"),
            postLink: "/blog-details",
            date: "2016",
            posttitle: "386BSD",
            postContent: "I successfully shipped front-end engineering production code for single page web application, the original pre-cursor to Linux, 386BSD for its first major developer release in 20 years. I rebranded and redesigned look and feel for overall application, which we built using NodeJS and ReactJS.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "front-end",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-hfa.png"),
            postLink: "/blog-details",
            date: "2015",
            posttitle: "Mobile iOS + Apple Prototype - Hillary for America 2016.",
            postContent: "Shortly after winning DataHack14 and leaving Ro Khanna for Congress and turning down a termsheet, I learned iOS development and design. Though I considered turning down the opportunity to co-found an office in San Francisco to be the tech arm for the SuperPAC for the electoral campaign to elect Hillary Clinton to President, I worked on this mobile iOS I Apple Watch finance donation prototype to fill the gap in what I thought was missing.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "mobile",
            TagLink: "/#0",
        },
        {
            postImage: require("../assets/img/download-r4c.png"),
            postLink: "/blog-details",
            date: "'13-14",
            posttitle: "Digital and Print Collateral for Ro Khanna for Congress.",
            postContent: "In 2015, I worked as official campaign staff to elect Ro Khanna to Congressional member in District 17 where I focused on finance, digital strategy, ethnic media Filipino American voter outreach.",
            authorName: "Erin",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "graphic design",
            TagLink: "/#0",
        },

    ]
};

export default Blog;
