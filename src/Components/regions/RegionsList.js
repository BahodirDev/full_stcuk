import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function RegionsList(props) {
    const dispatch = useDispatch();
    const {img_path,title,description,price,category,c_id,isLiked,item_id,pid,p_id,per_id} = props;
    let person  = JSON.parse(localStorage.getItem('person'));
    // console.log(person);
  

    const IsLiked = async(item_id,p_id)=>{
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
    const NotLiked = async(i_id)=>{
         fetch(`http://localhost:8000/api/NotLiked/${i_id}`,{
            method:'DELETE',
        })
        .then(data=>data.json())
        .then(data=>console.log(data))
        dispatch({type:"UNLIKED",payload:i_id})
    }
    
    // const  BTN =() =>{
    //     if(per_id == null && person.id !== per_id){
            
    //         return  <i className="material-icons heart" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>IsLiked(pid,person.id)}>favorite_border</i>
                
    //         }else if(person.id == per_id && per_id !== null){

    //           return  <i className="material-icons heart" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>NotLiked(pid,person.id)}>favorite</i>
    //         }
    //         return  <i className="material-icons heart" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>IsLiked(pid,person.id)}>favorite_border</i>

    //     }        
    return (
        <div className="content_list" style={{position:'relative'}} >
            <div className='img_div'>   
                <Link to={`/detail/${c_id}`}>
                     <img  src={`http://localhost:8000/`+img_path} alt="Card cap"  className='img-fluid '  /> 
                </Link>
            </div>
                <div className="card_b ">
                    <h6 className="card-text">Name: {title}</h6>
                    <p>Details: {description && description.slice(0,10)}...</p>
                    <b> Price: {price}... so'm</b>
                    <p>Type: {category}</p>
                </div>
                <div className='c_icons'>
               
                </div>
        </div>
    );
}

export default RegionsList;