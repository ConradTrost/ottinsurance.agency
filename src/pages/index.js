import * as React from "react";

import Header from '../components/header';
import Footer from '../components/footer';
import HomePage from './home';

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}

export default IndexPage;
