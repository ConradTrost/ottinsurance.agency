import React from 'react';
import Header from '../components/header';

const RequestQuote = () => {
    return(
        <div>
            <Header />
            <div className="quote-container m-auto p-4 md:p-20 pt-20 md:pt-28">
                <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLSezrBixRqx_OO9FYkcBDGjf7Ugtxyq6kq199ewtb-nvcH6VSw/viewform?embedded=true" width="640" height="2174" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default RequestQuote;