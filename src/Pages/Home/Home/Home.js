import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Newslater from '../../Newslater/Newslater';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviewhome from '../Reviewhome/Reviewhome';

const Home = () => {
    return (
        <div>
           
           <Navigation></Navigation>
           <Banner></Banner>
           <Products></Products>
          <Reviewhome></Reviewhome>
          <Newslater></Newslater>
          <Footer></Footer>
        </div>
    );
};

export default Home;