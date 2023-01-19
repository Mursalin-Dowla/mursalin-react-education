import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faCommentAlt, faUser} from '@fortawesome/free-solid-svg-icons';


const EachPost = (props) => {
    const {name, title, body} = props.post;
    return (
        <div className='grid grid-cols-1 justify-items-start mt-10'>
            <p className='mb-2 cursor-pointer'>
            <span className='mr-4'>
                    <FontAwesomeIcon title={name} className='cursor-pointer text-gray-400 hover:text-red-600' icon={faUser}></FontAwesomeIcon>
                </span>
                <span className='text-[#f80] font-semibold text-md'>
                {name}</span>
                </p>
            <p><small><span className='font-semibold'>Caption:</span> {title}</small></p>
            <p className='text-black text-xl shadow-lg p-5 rounded-xl ml-2'>{body}</p>
            <p className='mt-2'><FontAwesomeIcon title='Like' className='mt-1 cursor-pointer text-gray-400 hover:text-black' icon={faThumbsUp}></FontAwesomeIcon>
            <span className='ml-3'>
                <FontAwesomeIcon title='DisLike' className='mt-1 cursor-pointer text-gray-400 hover:text-black' icon={faThumbsDown}></FontAwesomeIcon>
                </span> 
                <span className='ml-4'>
                    <FontAwesomeIcon title='Right a Comment' className='cursor-pointer text-gray-400 hover:text-lime-400' icon={faCommentAlt}></FontAwesomeIcon>
                </span>
                </p>
            
        </div>
    );
};

export default EachPost;