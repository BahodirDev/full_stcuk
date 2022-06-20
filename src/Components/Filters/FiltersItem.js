import React from 'react';
import { Link } from 'react-router-dom';


function FiltersItem(props) {
    const {id,c_id,category,countLiked,description,img_path,isAllowed,price,title} = props;
    return (
        <div className='' id='search_position'>
            <div className='img_search'>
                <Link to={`/detail/${c_id}`}>
                <img src={`http://localhost:8000/${img_path}`} alt={category} />
                </Link>
            </div>
            <div className='title_search'>
                <p>{title}</p>
            </div>
            <div className='title_search'>
                <b>{price} So'm</b>
            </div>
            <div className='title_search'>
                <p>{description.slice(0,10)}....</p>
            </div>
        </div>
    );
}

export default FiltersItem;