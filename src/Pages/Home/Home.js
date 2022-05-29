import React from 'react';
import Banner from './Banner/Banner';
import Newsletter from './Newsletter/Newsletter';
import OurLocation from './OurLocation/OurLocation';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Stats />
            <Reviews />
            <OurLocation />
            <Newsletter />
        </div>
    );
};

export default Home;