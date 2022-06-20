
export const IsLiked = async(item_id,p_id,dispatch)=>{
    const data = new FormData();
    data.append('p_id',p_id)
    data.append('item_id',item_id)
      fetch(`http://localhost:8000/api/IsLiked`,{
         method:'POST',
         body:data
     })
     .then(data=>data.json())
     .then(data=>console.log(data))
     dispatch({type:"LIKED",payload:{item_id,p_id}})
 }

 export  const NotLiked = async(item_id,p_id,dispatch)=>{
    const data = new FormData();
    data.append('p_id',p_id)
    data.append('item_id',item_id)
     fetch(`http://localhost:8000/api/NotLiked`,{
        method:'POST',
        body:data,
        
    })
    .then(data=>data.json())
    .then(data=>console.log(data))
    dispatch({type:"UNLIKED",payload:item_id})
    
}

export const ChangeModul=(dispatch,id)=>{
    dispatch({type:'CHANGE_MODUL',payload:id});
    dispatch({type:"STATUS_COMMENT"});
    fetch(`http://localhost:8000/api/getComments/`+id)
       .then(data=>data.json())
       .then(data=>dispatch({type:'GET_COMMENT',payload:data}));
       console.log(id);
}

export const removeComments = (id,dispatch)=>{
    dispatch({type:"STATUS_COMMENT"});
    fetch(`http://localhost:8000/api/delComments`,{
        method:"POST",
        body:JSON.stringify({id}),
        headers:{
            "Content-type":"application/json",
        }
    })
    dispatch({type:'DELETE_COMMENT',payload:id})
}