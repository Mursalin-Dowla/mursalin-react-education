import React from 'react';
import useReview from '../../hooks/useReview';
import backgroundImage from '../../images/home1.jpg'
import EachReview from '../EachReview/EachReview';

const Home = () => {
    const [review, setReview] = useReview();
    const cuttedReview = review.slice(0,3);

    return (
        <div className='md:m-10 m-5 grid grid-cols-1 min-h-screen'>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center mb-10'>
                <div className='grid grid-cols-1 justify-items-center mb-10'>
                    <div>
                    <p className='font-bold font-serif md:text-5xl lg:text-[55px] text-4xl text-center mt-10'>Welcome to mursalin's Education</p>
                    </div>
                  <div className='xl:mt-[-70px] mt-5'>
                  <p className='text-[#f80] md:text-xl text-lg'>The Best Education Consultant You Can Get</p>
                  </div>
                  <div className='xl:mt-[-90px] grid grid-cols-1 justify-items-center mt-5'>
                  <p className='text-black md:text-lg text-sm font-semibold'>We are the ultimate choice. The Best Education Consultant You Can Get.
                  Come and fullfill your thurst of learning. We are your best helper. </p>
                  <button className='bg-slate-200 hover:bg-lime-400 hover:text-white rounded-xl w-[150px] h-[50px] shadow-lg hover:shadow-[#f80] mt-5'>Explore More</button>
                  </div> 
                </div>
                <div className='relative'>
                     <img className='md:rounded-t-3xl rounded-t-xl border shadow-lg shadow-[#f80]' src={backgroundImage} alt="" />
                     <div className= 'absolute bottom-1/4 left-1/4 text-lime-400 font-mono font-semibold lg:text-4xl  text-2xl tracking-tighter grid grid-cols-1 justify-items-center'><p>Learn</p>
                     <p className='text-[#f80]'>To</p>
                     <p>Teach</p></div>
                </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center mt-10'>
                <div className='border-2 border-t-0 border-r-0 border-l-0 border-b-[#f80]'>
                  <h1 className='text-lg text-lime-400 font-semibold font-sherif'>OUR ALUMNI TELLS ABOUT US</h1>
                </div>
                <div className='mt-10 m-10'>
                    {
                        cuttedReview.map(item=><EachReview 
                        key={item.id}
                        item={item}
                        />)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Home;