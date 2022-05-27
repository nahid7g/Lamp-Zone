import React from 'react';

const Newsletter = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Please subscribe our Newsletter</h1>
                    <p class="py-6">If you want to be connected with us you can subscribe our newsletter so that we will be sending you about our latest plans and latest Products.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;