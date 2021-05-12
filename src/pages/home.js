import * as React from 'react';

import Carousel from '../components/carousel';
import Family from '../images/family.jpg';

const HomePage = () => {
    return(
        <div>
            {/* Hero Section */}
            <div className="hero flex content-center items-center align-center w-full h-screen p-6 md:p-10">
                <img className="z-0 w-full h-full absolute top-0 left-0 home-banner-img" src={Family} />
                <div className="z-10 hero-centered m-auto text-white text-center md:w-4/5">
                    <h1>Insurance to Help You Protect What Matters Most</h1>
                    <h2 className="md:w-4/5 mx-auto">Sleep better knowing even in the worst situations, you're covered and we'll have your back every step of the way.</h2>
                    <h3>Home &#183; Auto &#183; Life &#183; Business</h3>
                    <button class="blue-btn">Get Protected</button>
                </div>
            </div>
            {/* End Hero Section */}

            <div className="main container mx-auto text-center md:w-1/2 p-10">
                <h2>You're probably far less protected than you think.</h2>
                <p>We hear "I thought I was covered" from new customer almost every day. <br />They come to us after a disaster with their budget plan, or because a confusing policy left them vulnerable and it cost them everything</p>
                <p>Whether you choose us or not, we'll review your current policies at no cost, show you how and where they leave you at risk, and outline customized options to better fit your specific needs.</p>
                <button className="blue-btn">Get a Free Policy Review</button>
            </div>

            <div className="two-col-wrap grid md:grid-cols-2 first">
                <img className="w-auto" src={Family} />
                <div className="text-center p-10 md:p-20 m-auto text-side">
                    <h3>Less Stress &#38; Worrying</h3>
                    <p>With us, you'll never have to worry that your next accident or rough patch could threaten your family's well-being, your financial security, or your business.</p>
                    <button className="blue-btn">Get Protected</button>
                </div>
            </div>

            <div className="two-col-wrap grid md:grid-cols-2 second">
                <div className="text-center p-10 md:p-20 m-auto text-side">
                    <h3>Support You Can Count On</h3>
                    <p>If something happens and you have to file a claim, we'll be there every step of the way.</p>
                    <p>No surprises. No loopholes. <br />Just support when you need it most.</p>
                    <button className="blue-btn">Call us.</button>
                </div>
                <img className="w-auto order-first md:order-last" src={Family} />
            </div>

            <div className="two-col-wrap grid md:grid-cols-2 third">
                <img className="w-auto" src={Family} />
                <div className="text-center p-10 md:p-20 m-auto text-side">
                    <h3>Honest &#38; Transparent</h3>
                    <p>Pushy insurance salesman and complicated policies can get you in trouble fast.</p>
                    <p>As a family-owned agency, we put transparency and integrity first. You'll receive the same quality service, attention, and insider advice we give our own families. That's our promise.</p>
                    <button className="blue-btn">Get Started</button>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="carousel-container p-6 py-10 md:p-20 min-h-screen text-center text-white flex flex-col justify-between">
                <div className="md:w-3/5 mx-auto">
                    <h2 className="md:w-4/5 mx-auto">We know what it's like to get burned by unreliable insurance.</h2>
                    <p>We started Ott Insurance Agency because we believe you shouldn't have to deal with sneaky salesman or becoming an insurance expert just to get the coverage you deserve.</p>
                </div>
                
                <div class="carousel-wrapper review-carousel w-full md:w-3/5 mx-auto md:p-0 my-10">
                    <h2>See What Our Clients Are Saying</h2>
                    <Carousel />
                </div>

                <div class="btn-container my-10 md:my-0 mb-10">
                    <a href="#" className="btn greyish">Get Protected Now</a>
                </div>
            </div>

            {/* Instructions Section */}
            <div className="instructions-container p-10 md:p-20 min-h-screen text-center text-white greyish">
                <div className="md:w-3/5 m-auto">
                    <h2 className="md:w-4/5 m-auto">We know what it's like to get burned by unreliable insurance.</h2>
                    <p>We started Ott Insurance Agency because we believe you shouldn't have to deal with sneaky salesman or becoming an insurance expert just to get the coverage you deserve.</p>
                </div>

                <div className="card-wrapper grid md:grid-cols-3 gap-4 my-10 md:w-4/5 m-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3>1. We'll evaluate your current policies for free.</h3>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>2. We'll build a custom plan just for you.</h3>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>3. You can finally stop stressing about your insurance.</h3>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="buttons flex justify-center my-10">
                        <a href="/quote" className="btn blue-btn white">Request a Quote</a>
                        <a href="tel:+1972-329-4811" className="btn blue-btn">Call Now</a>
                    </div>
            </div>

        </div>
    )
}

export default HomePage;