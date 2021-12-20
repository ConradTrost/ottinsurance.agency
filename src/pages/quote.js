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
            <div className="quote-container m-auto ">
            <iframe id="JotFormIFrame-212855185072154" title="Request for Quote" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" className="m-auto" style={{minWidth: '100%', height: '100vh'}} src="https://hipaa.jotform.com/212855185072154" height="1381" minWidth="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            {/* <script type="text/javascript" src="https://hipaa.jotform.com/jsform/212855185072154"></script> */}
        </div>
    )
}

export default RequestQuote;