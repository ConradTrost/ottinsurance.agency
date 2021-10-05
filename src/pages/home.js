import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Carousel from "../components/carousel";
import Family from "../images/family.jpg";
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Ott Insurance Agency</title>
        <meta name="description" content="Insurance to Help You Protect What Matters Most"></meta>
      </Helmet>
      {/* Hero Section */}
      <div className="hero flex flex-col justify-center content-center items-center align-center w-full h-screen p-6 md:p-10">
        <img alt="" className="z-0 w-full h-screen absolute top-0 left-0 home-banner-img" src={Family} />
        <div
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease" 
            className="z-10 hero-centered mx-auto mb-6 mt-28 text-white text-center py-6 px-2">
          <h1>Insurance to Help You Protect What Matters Most</h1>
          <div className="md:w-4/5 mx-auto">
          <p>
            Sleep better knowing even in the worst situations, you're covered and we'll have your back every step of the
            way.
          </p>
          <h2>Home &#183; Auto &#183; Life &#183; Business</h2>
          </div>
          
        </div>
        <div className="w-screen text-center z-10">
          <Link to="quote" className="blue-btn secondary">
            Get Protected
          </Link>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="main p-10 py-20 second-section">
        <div 
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease" 
          className="md:w-4/5 container mx-auto text-center">
          <h2>You're probably far less protected than you think.</h2>
          <div className="md:w-3/5 m-auto">
              <p>
              We hear "I thought I was covered" from new customer almost every day. <br />
              They come to us after a disaster with their budget plan, or because a confusing policy left them vulnerable
              and it cost them everything
              </p>
              <p>
              Whether you choose us or not, we'll review your current policies at no cost, show you how and where they leave
              you at risk, and outline customized options to better fit your specific needs.
              </p>
              <Link to="quote" className="blue-btn secondary">
              Get a Free Policy Review
              </Link>
          </div>
        </div>
      </div>

      <div className="two-col-wrap grid md:grid-cols-2 first">
        <StaticImage alt="father and son hugging" className="w-auto" src="../images/father-son-1.jpg" />
        <div
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease" 
          className="text-center p-10 md:p-20 m-auto text-side">
          <h3>Less Stress &#38; Worrying</h3>
          <p>
            With us, you'll never have to worry that your next accident or rough patch could threaten your family's
            well-being, your financial security, or your business.
          </p>
          <Link to="quote" className="blue-btn">
            Get Protected
          </Link>
        </div>
      </div>

      <div className="two-col-wrap grid md:grid-cols-2 second">
        <div 
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease" 
          className="text-center p-10 md:p-20 m-auto text-side order-2">
          <h3>Support You Can Count On</h3>
          <p>If something happens and you have to file a claim, we'll be there every step of the way.</p>
          <p>
            No surprises. No loopholes. <br />
            Just support when you need it most.
          </p>
          <a href="tel:+1972-329-4811" className="blue-btn">
            Call Us
          </a>
        </div>
        <StaticImage alt="father and baby" className="w-auto order-1 md:order-3" src="../images/father-child-2.jpg" />
      </div>

      <div className="two-col-wrap grid md:grid-cols-2 third">
        <StaticImage alt="family sitting in a park" className="w-auto" src="../images/ott-seth-img.png" />
        <div 
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease" 
          className="text-center p-10 md:p-20 m-auto text-side">
          <h3>Honest &#38; Transparent</h3>
          <p>Pushy insurance salesman and complicated policies can get you in trouble fast.</p>
          <p>
            As a family-owned agency, we put transparency and integrity first. You'll receive the same quality service,
            attention, and insider advice we give our own families. That's our promise.
          </p>
          <Link to="quote" className="blue-btn">
            Get Started
          </Link>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container p-6 py-10 md:p-20 min-h-screen text-center text-white flex flex-col justify-between">
        <div className="md:w-3/5 mx-auto">
          <h2 className="md:w-4/5 mx-auto">We know what it's like to get burned by unreliable insurance.</h2>
          <p>
            We started Ott Insurance Agency because we believe you shouldn't have to deal with sneaky salesman or
            becoming an insurance expert just to get the coverage you deserve.
          </p>
        </div>

        <div class="carousel-wrapper review-carousel w-full md:w-3/5 mx-auto md:p-0 my-10">
          <h2>See What Our Clients Are Saying</h2>
          <Carousel />
        </div>

        <div class="btn-container md:my-0 mb-10">
          <Link to="quote" className="btn blue-btn secondary">
            Get Protected Now
          </Link>
        </div>
      </div>

                  {/* Instructions Section */}
                  <div className="instructions-container p-10 md:p-20 min-h-screen text-center text-white flex">
              <div className="instructions-wrapper-inner m-auto">
        <div className="md:w-3/5 m-auto">
          <h2 className="md:w-4/5 m-auto">Getting the best coverage doesn’t have to be difficult.</h2>
          <p>We’ve created a simple plan that will help you get the coverage 
you need to protect what matters most. Here’s how it works:</p>
        </div>

        <div className="card-wrapper grid md:grid-cols-3 gap-4 my-10 md:w-4/5 m-auto">
          
          <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease" 
                    className="card one flex">
            <div>
                <div className="card-header">
                <h3>1. We'll evaluate your current policies for free.</h3>
                </div>
                <div className="card-body">
                <p>
                    We’ll lay out the facts. We’ll show you exactly where you’re protected and where you’re vulnerable.
                    You’ll finally know what kind of coverage you really have.
                </p>
                </div>
            </div>
          </div>

          <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="200"
                    data-sal-easing="ease" 
                    className="card two">
            <div>
                <div className="card-header">
                <h3>2. We'll build a custom plan just for you.</h3>
                </div>
                <div className="card-body">
                <p>
                    We’ll listen to the needs of you, your family, or business and customize a policy that reduces your risk
                    and covers your current blind spots.
                </p>
                </div>
            </div>
          </div>

          <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                    data-sal-easing="ease" 
                    className="card three">
            <div>
                <div className="card-header">
                <h3>3. You can finally stop stressing about your insurance.</h3>
                </div>
                <div className="card-body">
                <p>
                    Once you’re part of the Ott Insurance family, we’ll worry about the details so you can relax knowing no
                    matter what happens, you’re protected.
                </p>
                </div>
            </div>
          </div>
        </div>
        <div className="buttons flex justify-center my-10">
          <Link to="quote" className="btn blue-btn white">
            Request a Quote
          </Link>
          <a href="tel:+1972-329-4811" className="btn blue-btn">
            Call Now
          </a>
        </div>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="join-team flex">
        <div className="md:w-4/12  mx-6 p-10">
          <StaticImage alt="Join Our team" className="ott-img-jobs" src="../images/kristen-seth-desk.jpg" />
        </div>

        <div className="md:w-8/12 mx-6 text-center flex flex-col justify-center">
          <h2>Join Our Team</h2>
          <p>We are on a mission to help our community protect what matters most and understand exactly how their policy will perform come claim time.</p>
          <a href="/jobs" className="btn blue-btn secondary">
            Join Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
