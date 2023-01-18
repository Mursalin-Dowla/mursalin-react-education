import React from 'react';
import useReview from '../../hooks/useReview';
import EachReview from '../EachReview/EachReview';

const Review = () => {
    const [review, setReview] = useReview();
    return (
        <div className='min-h-screen md:m-20'>
            <div className='text-center font-semibold text-xl text-[#f80]'>
                <p>All Reviews:</p>
            </div>
            <div>
                {
                    review.map(item=><EachReview 
                    key={item.id}
                    item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default Review;