import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeModul, removeComments } from '../../functions/SelectedButtonsMethods';
import '../../styles/Comments.css';
import img from '../../assets/comments_img.png';
function CommentsModule(props) {
    const [comment,setComment] = useState('');
    const dispatch = useDispatch();
    let person  = JSON.parse(localStorage.getItem('person'));      
    const {currentItemId,comments} = useSelector(state=>state)

    const putScript=()=>{
        if(!comment == ''){
            dispatch({type:'STATUS_COMMENT'});
            fetch('http://localhost:8000/api/addComments',{
                method:"POST",
                body:JSON.stringify({person_id:person.id,post_id:currentItemId,comments:comment}),
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json"
                }
            })
            .then(data=>data.json())
            .then(data=>dispatch({type:'PUT_COMMENT',payload:data}))
            setComment('');
        }
       
    }

    // if(!commenstStatus){
    //     return <Loader />
    // }

    return (
        <div className='comment_block row' style={{position:'relative'}}>
            <i className='material-icons heart_x' style={{position:'fixed',right:'-29rem',padding:'10px',zIndex:'99'}} onClick={()=>ChangeModul(dispatch)}>close</i>
           <div className='col-sm-12 comments_area'>
               {comments.length ? comments.map((item,idx)=>{
                   if(person.id === item.person_id){
                    return(
                        <div key={idx} className='d-flex justify-content-between alert alert-dark'>
                          <div className='d-flex '>
                            <img id='comments_img' src={img} />
                            <h5 >{item.comments}</h5>
                          </div>
                          <div className=''> 
                            {item.person_id === person.id && <button className='btn btn-danger' onClick={()=>removeComments(item.id,dispatch)}>DELETE</button>}
                          </div>
                        </div>
                    )
                   }
                   return(
                    <div key={idx} className='partner alert alert-warning'>
                      <div className='partner'>
                        <h5 >{item.comments}</h5>
                        <img id='comments_img' src={img} />
                      </div>
                      <div className=''> 
                        {item.person_id === person.id && <button className='btn btn-danger' onClick={()=>removeComments(item.id,dispatch)}>DELETE</button>}
                      </div>
                    </div>
                )
                   
               }).reverse():<h5 className='text-center'>Comment doesn't exist yet!</h5>}
           </div>
            
            <div className='row comment_input'>
                <div className='col-sm-10'>
                    <input 
                    type="text" 
                    value={comment}
                    onChange={e=>setComment(e.target.value)}
                    placeholder="Write Comments"
                    className='form-control'
                    />
                </div>
                <div className='col-sm-2'>
                    <button className='btn btn-primary w-100' onClick={putScript}>
                        send
                    </button>
                </div>
            </div>
            </div>
    );
}

export default CommentsModule;