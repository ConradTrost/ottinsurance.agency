import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';

const RequestQuote = () => {
    return(
        <div>
            <Helmet>
                <title>Request a Free Quote | Ott Insurance Agency</title>
                <meta name="description" content="Insurance to Help You Protect What Matters Most"></meta>
            </Helmet>
            <Header />
            <div className="quote-container m-auto md:p-10 pt-20 md:pt-28">
                <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLSf_cPjKhkfuhT8KDlQQPpkuRvI7Rvvs77lBORIbz7B7GBYNdw/viewform?embedded=true" width="640" height="1381" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default RequestQuote;