import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('userReview.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return [review , setReview]
};

export default useReview;