import React from 'react';

const Stats = () => {
    return (
        <div className='py-10 my-10 bg-cover min-h-60' style={{ backgroundImage: `url(https://i.ibb.co/zJL3PJZ/hero-area.jpg)` }}>
            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-5 justify-between text-neutral-content'>
                <div>
                    <div class="stat">
                        <div>Company Revinue</div>
                        <div class="stat-value">50 billion+</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div>Our total Staff</div>
                        <div class="stat-value">20000+</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div>Countries we have factory in the world.</div>
                        <div class="stat-value">100+</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div>Succesfully working years.</div>
                        <div class="stat-value">30+</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div>Satisfied Customers.</div>
                        <div class="stat-value">2 million+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;