import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NotLiked } from '../../functions/SelectedButtonsMethods';

function LikedList(props) {
    const {img_path,c_id,description,title,price,category,isLiked,id,pid} = props;
    const dispatch = useDispatch();
    let person  = JSON.parse(localStorage.getItem('person'));

    return (
        <div className=" content_list" style={{position:'relative'}} >
        <div className='img_div'>
            <Link to={`/detail/${c_id}`}>
                 <img  src={`http://localhost:8000/`+img_path} alt="Card cap"  className='img-fluid '  /> 
            </Link>
        </div>
            <div className="card_b" >
                <h6 className="card-text">{title}</h6>
                <p>{description && description.slice(0,10)}...</p>
                <b>{price} so'm</b>
                <p>{category}</p>
            </div>
            <div className='c_icons' >
           {isLiked == 1 ? (<i  className="material-icons heart" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>NotLiked(id,person.id,dispatch)}>favorite</i>
            ):(<i class="material-icons heart" style={{position:'absolute',"bottom":'4rem'}} onClick={()=>(id)}>favorite_border</i>)}
            </div>
    </div>
    );
}

export default LikedList;