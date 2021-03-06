import React, { useState, useEffect } from 'react';

import FiveStars from '../images/five-stars.png';

const Carousel = () => {
    const [slider, setSlider] = useState(0);

    const prevClick = (e) => {
        e.preventDefault();
        console.log(slider);
        if (slider <= 0) {
            setSlider(2);
            return;
        } else {
            setSlider(slider - 1);
            return;
        }
    }

    const nextClick = (e) => {
        e.preventDefault();
        console.log(slider);
        if (slider >= 2) {
            setSlider(0);
            return;
        } else {
            setSlider(slider + 1);
            return;
        }
    }

    useEffect(() => {
        const timer = window.setInterval(() => {
            if (slider >= 2) {
                setSlider(0);
                return;
            } else {
                setSlider(slider + 1);
                return;
            }
        }, 8000);
        return () => clearInterval(timer);
    }, [slider]) 

    const firstReview = {
        review: 'Seth and his team were tremendously helpful with the explanation of covereage. We received multiple options and a personal video going over all our options.',
        author: 'Tony P.'
    }

    const secondReview = {
        review: 'I didn\'t realize that I didn\'t have full coverage with my previous car insurance. When Seth reviewed my policy, he genuinely cared about making sure I was fully insured for my safety and explained my new policy well.',
        author: 'Kelli Ann P.'
    }

    const thirdReview = {
        review: 'Seth explained coverage & answered all our questions. Their customer service is exceptional! They understood our concerns & put us at ease!',
        author: 'Dawn F.'
    }

    const reviewArr = [firstReview, secondReview, thirdReview];

    return(
        <div className="carousel">
            <button onClick={prevClick} className="arrow left-arrow"></button>
            <button onClick={nextClick} className="arrow right-arrow"></button>

            <div className="reviews-section w-4/5 m-auto">
                <div className="review flex justify-center flex-col">
                    <p>{reviewArr[slider].review}</p>
                </div>
                <img className="w-48 mx-auto" alt=""  src={FiveStars} />
                <p className="review-author">{reviewArr[slider].author}</p>
            </div>

        </div>
    )
}

export default Carousel; 