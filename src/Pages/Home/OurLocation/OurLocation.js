import React from 'react';

const OurLocation = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl text-purple-400 my-5'>Our Headquarters adress.</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.46585274718!2d2.070148827919413!3d41.3927754984665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sbd!4v1653836715283!5m2!1sen!2sbd" width="100%" height="550" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default OurLocation;