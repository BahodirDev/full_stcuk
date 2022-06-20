import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hook/useHttp';
import Loader from '../../Layouts/Loader';
import { AllPosts } from '../../redux/actions';
import AdminPageItems from './AdminPageItems';
import "../../styles/admin.css"

function AdminPage(props) {
    const {allPosts,statusAllPosts} = useSelector(state=>state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    useEffect(()=>{
        request('http://localhost:8000/api/all')
            .then(data=>dispatch(AllPosts(data)))
    },[])
    console.log(allPosts);
    if(!allPosts.length){
        return<Loader />
    }
    return (
        <div className='admin_page adminControl'>
            
                    {allPosts.map((item,index)=>{
                    return(
                            <AdminPageItems key={index} index={index} {...item} />
                    )
                })}
             
           
        </div>
    );
}

export default AdminPage;