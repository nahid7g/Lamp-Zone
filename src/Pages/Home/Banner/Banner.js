import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/RYQyHNY/banner.jpg)` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-5xl font-bold">Welcome to Lampzone official site.</h1>
                    <p class="mb-5">We are one of the leading Lamp Manufacturer Company in the world. Our company working in this field since 1992 and we are perfectly satisfying our clients with our Products.</p>
                    <button class="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;