import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams,  } from 'react-router-dom';
import FilterByMount from '../../functions/FilterByMount';
import Loader from '../../Layouts/Loader';
import FiltersItem from './FiltersItem';

function FiltersList(props) {
    const navigate  =useNavigate();
    const dispatch  = useDispatch()
    let {name} = useParams();
    useEffect(()=>{
        // Baza bilan qidirishni amalga oshirish
        fetch('http://localhost:8000/api/search/'+name)
            .then(data=>data.json())
            .then(data=>dispatch({type:"FOUNDED",payload:data}))

    },[name])
    const {filters,statusFilter} = useSelector(state=>state);
  
 
if(statusFilter){
    return <Loader />
}
    return (
        <div>
            <FilterByMount />
            <button className=' btn btn-primary' id='info_btn' onClick={()=>navigate(-1)}>Ortga qaytish</button>
            {filters.length && filters.map((item,index)=>{
            
                        return(
                            <FiltersItem {...item} key={index} />
                        )
            })}
        </div>
    );
}

export default FiltersList;