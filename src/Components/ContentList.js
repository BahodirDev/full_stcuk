import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectedButton from './ContentLimited/SelectedButton';


function ContentList(props) {
    const {img_path,title,description,price,category,c_id,id,countLiked,countDisLiked} = props;

    
         
// console.log(img_path);
    return (
        <>
        <div className="content_list " >
            <div className='img_div'>   
                <Link to={`/detail/${c_id}`}>
                     <img  src={`http://localhost:8000/`+img_path} alt="Card cap"  /> 
                </Link>
            </div>
                <div className="card_b   ">
                  <h6 className="card-text">Name: {title}</h6>
                    <p>Details: {description && description.slice(0,10)}...</p>
                    <b> Price: {price.slice(0,4)}... so'm</b>
                    <p>Type: {category}</p>
                   <Link to={`/detail/${c_id}`}>
                   <button className='btn btn-primary'>Batafsil</button></Link>
                </div>
                {/* SelectedButtonK=js */}
                {/* <SelectedButton id={id} countLiked={countLiked} countDisLiked={countDisLiked} /> */}
        </div>
        </>
    );
}

export default ContentList;