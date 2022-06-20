import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useHttp from '../../hook/useHttp';

function AdminPageItems(props) {
    const {id,name,price,isAllowed,description,title,img_path,index,c_id} = props;
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const update = async(uuid)=>{
         fetch(`http://localhost:8000/api/update/${uuid}`,{
            method:'PUT',

        })
          .then(data=>data.json())
          .then(data=>console.log('Qaytgan', data))
          dispatch({type:'IS_ALLOWED',payload:uuid})
    }
    const update2 = async(uuid)=>{
         fetch(`http://localhost:8000/api/update2/${uuid}`,{
            method:'PUT',

        })
          .then(data=>data.json())
          .then(data=>console.log('Qaytgan', data))
          dispatch({type:'IS_ALLOWED_NULL',payload:uuid})
    }
    const delItem=async(uuid)=>{
        fetch(`http://localhost:8000/api/delete/${uuid}`,{
            method:'DELETE',
        })
        .then(data=>data.json())
        .then(data=>console.log("DELETED ",data))
        dispatch({type:'DELETE_ITEM',payload:uuid})
        console.log(uuid);
    }
    console.log(id);
    
           

    return (
       <div key={id} className="item_all adminPanel">
           <td>{index+1}</td>
           <td>{name}</td>
           <td>{price}</td>
           {isAllowed === 0 ? (<td id='unAllowed'>Tasdiqlanmagan</td>) : (<td id='Allowed' >Tasdiqlangan</td>) }
           <td>{description && description.slice(0,10)}</td>
           <td>{title}</td>
           <td>
               <Link to={`/detail/${c_id}`}>
               <img src={`http://localhost:8000/`+img_path}style={{maxWidth:'100px'}} alt="" />
               </Link>
           </td>
           <td className='d-grid'>
               {isAllowed === 1 ? (<button className='btn btn-warning mb-2' onClick={()=>update2(id)}>Bekor qilish</button>):(<button className='btn btn-success mb-2' onClick={()=>update(id)}>Tasdiqlash</button>)}
               <button className='btn btn-danger' onClick={()=>delItem(c_id)}>O'chirish</button>
           </td>
           <div className='btn_abs btn btn-outline-danger text-dark' onClick={()=>navigate(-1)}>
            Ortga qaytish
           </div>
       </div>
    );
}

export default AdminPageItems;