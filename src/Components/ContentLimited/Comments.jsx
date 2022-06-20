import React from 'react';
import { useDispatch } from 'react-redux';
import { ChangeModul } from '../../functions/SelectedButtonsMethods';

function Comments({id}) {
    const dispatch = useDispatch();
    return (
        <div>
        <i  className="material-icons heart_x" style={{position:'absolute',"bottom":'1rem',"left":'10rem'}} onClick={()=>ChangeModul(dispatch,id)}>chat</i>
        </div>
    );
}

export default Comments;