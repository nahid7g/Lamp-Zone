import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto h-screen bg-slate-200 my-2 p-4'>
            <h2 className='text-2xl text-center text-primary font-bold'>Blogs</h2>
            <article className='my-2'>
                <h2 className='text-xl'>1. How will you improve the performance of a React Application?</h2>
                <p><b>Ans:</b> To optimize React rendering, we need to make sure that components receive only necessary props. It will let us control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            </article>
            <article className='my-2'>
                <h2 className='text-xl'>2. What are the different ways to manage a state in a React application?</h2>
                <p><b>Ans:</b> Local state. Global state. Server state. URL state</p>
            </article>
            <article className='my-2'>
                <h2 className='text-xl'>3. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p><b>Ans:</b> When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
            </article>
            <article className='my-2'>
                <h2 className='text-xl'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p><b>Ans:</b> We can perform a loop on that array by using name from the array.</p>
            </article>
            <article className='my-2'>
                <h2 className='text-xl'>5. What is a unit test? Why should write unit tests?</h2>
                <p><b>Ans:</b> Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            </article>
        </div>
    );
};

export default Blogs;