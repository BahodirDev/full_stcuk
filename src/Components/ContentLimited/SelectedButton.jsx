import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IsLiked, NotLiked } from '../../functions/SelectedButtonsMethods';
import Comments from './Comments';
import DisMarkedButton from './DisMarkedButton';
import MarkedButton from './MarkedButton';

function SelectedButton({id,countLiked,countDisLiked}) {
    const dispatch = useDispatch();
    const [starter,setStar] = useState(true);
    const {postsSubLikes} = useSelector(state=>state);
    let person  = JSON.parse(localStorage.getItem('person'));      
   

    return (
        <div className='c_icons'>
                {
                    //eslint-disable-next-line
                  postsSubLikes.map((item,index)=>{
                      if(item.isAllowed === 1 && item.pid === id){
                        if(item.per_id == null && person.id !== item.per_id){
                            return (
                                <i key={index} className="material-icons heart_x" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>IsLiked(item.pid,person.id,dispatch)}>favorite_border</i>
                            )
                            }
                        if(item.pid !== null && person.id !== item.per_id){
                            return (
                            <i key={index} className="material-icons heart_x " style={{position:'absolute',"bottom":'1rem'}} onClick={()=>IsLiked(item.pid,person.id,dispatch)}>favorite_border</i>
                           
                           )
                            }
                            if(person.id === item.per_id && item.per_id !== null && (item.pid === id)){
                              return  (
                                  <i key={index} className="material-icons heart_x" style={{position:'absolute',"bottom":'1rem'}} onClick={()=>NotLiked(item.pid,person.id,dispatch)}>favorite</i> 
                              )
                            }
                      }
                      
                    })
                }
              
                       <MarkedButton starter={starter} setStar={setStar} id={id} countLiked={countLiked} />
                        <DisMarkedButton starter={starter} setStar={setStar} id={id} countDisLiked={countDisLiked} />       
                       <Comments id={id} />
                </div>
    );
}

export default SelectedButton;