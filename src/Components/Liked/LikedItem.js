import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Layouts/Loader';
import LikedList from './LikedList';

function LikedItem(props) {
    const  dispatch = useDispatch()
    const {likedPosts,likedPostsStatus,posts,postStatus} = useSelector(state=>state);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        dispatch({type:'FILTERED_FETCHING'})
        fetch('http://localhost:8000/api/filterLiked/'+id)
            .then(data=>data.json())
            .then(data=>dispatch({type:'FILTERED_FETCHED',payload:data}))
    },[])
 

    console.log(likedPosts);
    if(postStatus){
        return <Loader />
    }    
    if(posts.isLiked ==0){
        return(
        <>
         <h3>Nothing liked yet</h3>
        <button className='btn btn-warning btn_abs' onClick={()=>navigate(-1)}>Ortga qaytish</button>
        </>
        )
    }    
   
    return (
        <div className='main'>
        <button className='btn btn-warning btn_abs' onClick={()=>navigate(-1)}>Ortga qaytish</button>
           {likedPosts.length ? likedPosts.map((item,index)=>{
               if(item.isLiked === 1){
                return(
                    <LikedList key={index} {...item}  />
                )
               }
               
           }):
            <h4 className='text-center'>Nothing Found</h4>
           }
        </div>
    );
}

export default LikedItem;