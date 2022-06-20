import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PriceFilter(props) {
const dispatch = useDispatch();

    return (
        <div className="col-md-6 col-sm-6"  id='filterHand'>
        <div className='row'>
          <div className='col-md-6'>
          {/* <select className='form-select' onChange={(e)=>dispatch({type:'CHANGE_LIMIT_FROM',payload:e.target.value})}>
            {
                From.length && From.map((item,idx)=>{
                    return(
                        <option value={item.value} key={idx}>{item.title}</option>
                    )
                })
            }
        </select> */}
          <input type="text"
            className='form-control'
           onChange={(e)=>dispatch({type:'CHANGE_LIMIT_FROM',payload:e.target.value})}
           placeholder="...dan"
        />
        <label className='text-white'>...dan</label>

          </div>
          <div className='col-md-6'>
          {/* <select className='form-select' onChange={(e)=>dispatch({type:'CHANGE_LIMIT_TO',payload:e.target.value})}>
          {
                To.length && To.map((item,idx)=>{
                    return(
                        <option value={item.value} key={idx}>{item.title}</option>
                    )
                })
            }
        </select> */}
        <input type="text"
        className='form-control'
        onChange={(e)=>dispatch({type:'CHANGE_LIMIT_TO',payload:e.target.value})}
        placeholder="...gacha"
        />
        <label className='text-white'>...gacha</label>
          </div>
        </div>
      </div>
    );
}

export default PriceFilter;