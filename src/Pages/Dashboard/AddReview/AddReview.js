import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const review = {
            name: user?.displayName,
            image: user?.photoURL,
            comment: data.comment,
            rating: data.rating
        }
        fetch("https://lamp-zone1.herokuapp.com/reviews", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        reset();
        toast("Submited!")
    };
    return (
        <div className="hero min-h-screen bg-base-200 mt-5 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Write about our product.</h1>
                    <p className="py-6">We would love to read your reviews and experiences about our products.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <textarea className="textarea textarea-accent" placeholder="Review" {...register("comment")} ></textarea>
                            </div>
                            <div className="form-control">
                                <label className='label'>
                                    <span className="label-text">Your Rating</span>
                                </label>
                                <select {...register("rating")} className="select select-primary w-full max-w-xs">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <button type="submit" className='btn btn-primary my-2'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;