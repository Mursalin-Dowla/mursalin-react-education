import React from 'react';
import usePosts from '../../hooks/usePosts';
import EachPost from '../EachPost/EachPost';

const Blogs = () => {
    const [posts, setPosts] = usePosts();
    return (
        <div className='min-h-screen md:m-10 md:mb-20 m-5 mb-20 grid grid-cols-1 justify-items-center'>
            <div className='text-2xl text-lime-400 font-semibold font-mono border border-l-0 border-t-0 border-r-0 shadow-md p-2 rounded-lg'>
            <h1>Recently Posted</h1>
            </div>
            <div className='mt-10 grid grid-cols-1 md:px-24 lg:px-32'>
               {
                posts.map(post=><EachPost 
                key={post.id}
                post={post}
                />)
               }
            </div>
            
        </div>
    );
};

export default Blogs;