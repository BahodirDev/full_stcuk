import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CategoryFilter(props) {
const dispatch = useDispatch();

    return (
        <div className='col-md-4 col-sm-6' id='search_filter'>
            <select className='form-control select' onChange={(e)=>dispatch({type:"CHANGE_LIMIT_CATEGORY",payload:e.target.value})}>
                <option value="texnik jihoz">Texnik</option>
                <option value="mobil">Mobil</option>
                <option value="mebel">Mebel</option>
            </select>
        </div>
    );
}

export default CategoryFilter;