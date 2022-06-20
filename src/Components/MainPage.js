import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from '../Layouts/Loader';
import ContentList from './ContentList';

function MainPage(props) {
  const navigate = useNavigate();

    useEffect(()=>{
        // setTimeout(()=>{
        //     localStorage.clear();
        //     console.log('LogOut ishladi');
        //     navigate('/')
        //   },5000)
    },[])
    const {posts,postStatus,postsSlice} = useSelector(state=>state);
 
    if(postStatus){
        return <Loader />
    }    
       return (
        <div className='col-md-12 col-xs-12'>
            <div className='row main'>
           {posts.length ? posts.map((item,index)=>{
               if(item.isAllowed === 1){ 
                   if(item.length !== 0){
                       return(
                               <ContentList key={index} {...item} />
                               )
                            }  
                        }                         
                    }).reverse(): <h4 className='text-center'>Nothing Found</h4>}
                    </div>
        </div>
    );
}

export default MainPage;