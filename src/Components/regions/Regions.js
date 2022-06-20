import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import RegionsList from './RegionsList';

function Regions(props) {
     const {name} =  useParams();
     const dispatch = useDispatch();
     const {filters2} = useSelector(state=>state);
     const navigate = useNavigate();
     console.log(filters2);
    useEffect(()=>{
        fetch('http://localhost:8000/api/findPlace/'+name)
            .then(data=>data.json())
            .then(data=>dispatch({type:'FIND_PLACE',payload:data}))
    },[name])
    let  response
    if(!filters2.length){
        response = <h3 className='text-center'>Ma'lumot topilmadi</h3>
    }
    return (
        <div>
            <button onClick={()=>navigate('/')} className="btn btn-primary">Ortga Qaytish</button>
            <div>
                <h3>{response}</h3>
            </div>
            <div className='row'>
                <div className='col-sm-12 main'>
                    {filters2.map((item,index)=>{
                        return(
                            <RegionsList key={index} {...item} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Regions;