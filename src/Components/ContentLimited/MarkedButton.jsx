import React from 'react';
import { useDispatch } from 'react-redux';

function MarkedButton({id,countLiked,starter,setStar}) {
    const dispatch = useDispatch();
    function Counting(uuid){
      if(starter){
        setStar(!starter);
        fetch(`http://localhost:8000/api/AddLike/${uuid}`)
           .then(data=>data.json())
           .then(data=>dispatch({type:'ADD_LIKED',payload:{Liked:data.countLiked,id}}))
      }
      }

    return (
     <>
         <i style={{position:'absolute',"bottom":'1rem','left':'5rem'}}>{countLiked}</i>    
         <i  className="material-icons heart_x" style={{position:'absolute',"bottom":'1rem',"left":'3rem'}} onClick={()=>Counting(id)}>thumb_up_border</i>  
     </>                 
    );
}

export default MarkedButton;