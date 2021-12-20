import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Hero from '../images/ott-seth-img.png'
import Footer from '../components/footer';
import whiteLogo from '../images/White_Logo.png';

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <Helmet>
        <title>Ott Insurance Agency Careers</title>
        <meta name="description" content="Insurance to Help You Protect What Matters Most"></meta>
      </Helmet>
      
      <header className="flex justify-between fixed w-full md:flex-row">
          <div className="nav-logo">
              <Link to="/"><img className="p-4" src={whiteLogo} /></Link>
          </div>
          <div className="nav-cta justify-around md:flex">
              <a target="_blank" rel="noreferrer nofollower" href="https://rhodiumtalent.applytojob.com/apply/PGvTsgxAmv/Licensed-Insurance-Agent" className="blue-btn hidden secondary border-white">Apply Now</a>
          </div>
      </header>

      {/* Hero Section */}
      <div className="hero flex flex-col justify-center content-center items-center align-center w-full h-screen p-6 md:p-10">
        <img alt="" className="z-0 w-full h-screen absolute top-0 left-0 home-banner-img" src={Hero} />
        <div
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease" 
            className="z-10 hero-centered mx-auto mb-6 mt-28 text-white text-center py-6 px-2">
          <h1>Join Our Team</h1>
          <div className="md:w-4/5 mx-auto">
          <p>
          We are on a mission to help our community protect 
what matters most and understand exactly how their
policies will perform when they need to file a claim.
          </p>
          </div>
          
        </div>
        <div className="w-screen text-center z-10">
        <a target="_blank" rel="noreferrer nofollower" href="https://rhodiumtalent.applytojob.com/apply/PGvTsgxAmv/Licensed-Insurance-Agent" className="blue-btn secondary">
            Join Us
          </a>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="main p-10 py-20 second-section">
        <div 
          className="lg:px-10 container mx-auto text-center">
            <div className="3-cols-section md:grid md:grid-cols-3">
              <div className="join-value-points m-8"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease" >
                <StaticImage className="w-2/5 mb-6 md:mb-2 m-auto" alt="" src="../images/value-driven.png" />
                <h3 className="text-white">Value Driven</h3>
                <p>Do people rave about the value you bring and look to you for that perfect recommendation?</p>
              </div>

              <div className="join-value-points m-8"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
                data-sal-easing="ease" >
                <StaticImage className="w-2/5 mb-6 md:mb-2 m-auto" alt="" src="../images/optimistic.png" />
                <h3 className="text-white">Relentlessly Optimistic</h3>
                <p>Does your positive outlook allow you to achieve lofty goals and persevere through challenges?</p>
              </div>

              <div className="join-value-points m-8"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
                data-sal-easing="ease" >
                <StaticImage className="w-2/5 mb-6 md:mb-2 m-auto" alt="" src="../images/growth-mindset.png" />
                <h3 className="text-white">Growth Minded</h3>
                <p>Do you constantly look for ways to improve as a professional and as a human?</p>
              </div>
            </div>

            <div className="text-center">
            <a target="_blank" rel="noreferrer nofollower" href="https://rhodiumtalent.applytojob.com/apply/PGvTsgxAmv/Licensed-Insurance-Agent"
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease" 
                        className="blue-btn secondary">
                Join Our Team
              </a>
            </div>

        </div>
      </div>

      <div className="section-three py-8 px-4 md:py-40 md:px-20">
        <div className="join-team-wrapper lg:w-3/5 m-auto p-6 md:p-10 rounded-2xl">
          <h2
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease" 
          >Everyone deserves to have coverage that fits their needs & goals and understand exactly what they’re paying for.</h2>
          <p
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease" 
          >Most people are far less covered than they think and have little to no understanding of exactly what is covered and what is not or how their policy will perform come claim time.</p>
          <p
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease" 
          >We are on a mission to protect and educate our community. At Ott Insurance Agency it is our job as insurance advisors to be the expert, so our clients don’t have to be. We listen to their stories, their goals, and use our knowledge of insurance to help them protect and achieve those goals.</p>
          <p
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease" 
          >We are looking to grow our team with people who believe in that mission and want to be a part of it.</p>
          <div className="text-center"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease" 
          >
            <a target="_blank" rel="noreferrer nofollower" href="https://rhodiumtalent.applytojob.com/apply/PGvTsgxAmv/Licensed-Insurance-Agent" className="blue-btn primary">
              Join Our Team
            </a>
          </div>
        </div>
      </div>


      {/* Join Our Team Section */}
      <div className="join-team lg:flex py-10">
        <div className="lg:w-5/12  mx-auto md:mx-6 p-4 py-6 md:py-10 md:p-10 text-center">
          <StaticImage alt="Join Our team" className="ott-img-jobs mx-auto" src="../images/kristen-seth-desk.jpg" />
        </div>

        <div className="lg:w-7/12 mx-6 text-center flex flex-col justify-center md:p-6 ">
          <h2>Who We Are</h2>
          <p>We started Ott Insurance Agency because we believe our community shouldn’t have to deal with sneaky salesmen or becoming an insurance expert just to get the coverage they deserve.</p>
          <a target="_blank" rel="noreferrer nofollower" href="https://rhodiumtalent.applytojob.com/apply/PGvTsgxAmv/Licensed-Insurance-Agent" className="btn blue-btn primary">
            Apply Today
          </a>
        </div>
      </div>

    <Footer />
    </div>
  );
};

export default JobsPage;
