import React from 'react';
import pic2 from '../../images/pic2.jpg'

const EachReview = (props) => {
    const {name, rating, review} = props.item;
    return (
        <div className='grid grid-cols-1 justify-items-center mt-10 md:ml-32 md:mr-32 shadow-lg hover:shadow-[#f80] p-5'>
            <div>
                <img className='w-10 h-10 rounded-full' src={pic2} alt="" />
            </div>
            <div className='md:p-2'>
                <p className='text-[#f80] font-semibold'>{name}</p>
                <p>Review: {review}</p>
                <p><small className='font-semibold tracking-tighter'>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default EachReview;