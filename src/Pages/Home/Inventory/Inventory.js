import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Inventory = () => {
    const [part, setPart] = useState({});
    const { id } = useParams();
    const { name, image, price, stock, description, minOrder } = part;
    const [user, loading, gLoading] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [id]);
    // Handle Form 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container bg-slate-200 mx-auto my-10 p-10">
            <section>
                <div className="product-detail">
                    <div class="card card-compact w-2/3 mx-auto bg-base-100 shadow-xl">
                        <figure><img src={image} alt={name} /></figure>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product</span>
                                    </label>
                                    <input type="text" defaultValue={name} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Price $</span>
                                    </label>
                                    <input type="text" defaultValue={price} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Available Stock</span>
                                    </label>
                                    <input type="text" defaultValue={stock} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName || ""} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Email</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.email || ""} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Address</span>
                                    </label>
                                    <input type="text" placeholder='Please enter your full address' class="input input-bordered" {...register("address")} required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Phone</span>
                                    </label>
                                    <input type="text" placeholder='Please enter your valid phone number' class="input input-bordered" {...register("phone")} required />
                                </div>

                                {/* include validation with required or other standard HTML validation rules */}
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" className='btn btn-primary my-2' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Inventory;