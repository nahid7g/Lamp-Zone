import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Inventory = () => {
    const [part, setPart] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { name, image, price, stock, description, minOrder, _id } = part;
    const [user, loading, gLoading] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [id]);
    // Handle Form 
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const order = {
            orderId: _id,
            productName: name,
            price: price,
            email: user?.email,
            totalOrder: data.totalOrder,
            address: data.address,
            phone: data.phone
        }
        fetch("http://localhost:5000/orders", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        reset();
        toast("Your order will be sent to your address within 3-5 business days.");
        navigate("/")
    };
    return (
        <div className="container bg-slate-200 mx-auto my-10 p-10">
            <section>
                <div className="product-detail">
                    <div className="card card-compact w-2/3 mx-auto bg-base-100 shadow-xl">
                        <figure><img src={image} alt={name} /></figure>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product</span>
                                    </label>
                                    <input type="text" defaultValue={name} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price $</span>
                                    </label>
                                    <input type="text" defaultValue={price} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Stock</span>
                                    </label>
                                    <input type="text" defaultValue={stock} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Order</span>
                                    </label>
                                    <input type="text" placeholder='Minimum order must be 5000' className="input input-bordered" required {...register("totalOrder", {
                                        required: true,
                                        validate: value => value >= 5000,
                                        message: "Error"

                                    })} />
                                    {errors.totalOrder?.type === "validate" && <span className="label-text-alt text-red-500">You can not order less than 5000 items.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName || ""} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.email || ""} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input type="text" placeholder='Please enter your full address' className="input input-bordered" {...register("address")} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input type="text" placeholder='Please enter your valid phone number' className="input input-bordered" {...register("phone")} required />
                                </div>
                                {/* include validation with required or other standard HTML validation rules */}
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <button type="submit" disabled={errors.totalOrder?.type === "validate"} className='btn btn-primary my-2'>Buy Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Inventory;