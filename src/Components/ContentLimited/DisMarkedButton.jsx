import React from 'react';
import { useDispatch } from 'react-redux';

function DisMarkedButton({id,countDisLiked,setStar,starter}) {
    const dispatch = useDispatch();
    function Counting(uuid){
     if(starter){
        setStar(!starter);
        fetch(`http://localhost:8000/api/RemoveLike/${uuid}`)
           .then(data=>data.json())
           .then(data=>dispatch({type:'REMOVE_LIKED',payload:{Liked:data.countLiked,id}}))
        }
     }

    return (
        <>
         <i style={{position:'absolute',"bottom":'1rem','right':'6rem'}}>{countDisLiked}</i>    
        <i  className="material-icons heart_x" style={{position:'absolute',"bottom":'1rem',"left":'6.5rem'}} onClick={()=>Counting(id)}>thumb_down</i>
        </>                   
    );
}

export default DisMarkedButton;