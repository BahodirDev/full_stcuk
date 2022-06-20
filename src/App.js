
import './App.css';
import MainPage from './Components/MainPage';
import Navbar from './Layouts/Navbar';
import { Route, Routes } from 'react-router-dom';
import Input from './Components/Input/Input';
import Register from './Components/register/Register';
import Protected from './Components/ProtectedRoutes/Protected';
import Login from './Components/register/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from './hook/useHttp';
import { fetchedPosts, fetchingPosts, InfoMap, slicePosts } from './redux/actions';
import Info from './Components/ProtectedRoutes/Detail/Info';
import AdminPage from './Components/Admin/AdminPage';
import LikedItem from './Components/Liked/LikedItem';
import FiltersList from './Components/Filters/FiltersList';
import Regions from './Components/regions/Regions';
import CommentsModule from './Components/Modules/Comments_Module';
import {PORT} from './config';

function App() {
  const dispatch = useDispatch();
  const {request} = useHttp();
  const {isModule} = useSelector(state=>state)
  useEffect(()=>{
    dispatch(slicePosts())
    dispatch(fetchingPosts());
    request(`http://localhost:8000/api/data`)
    .then(data=>dispatch(fetchedPosts(data)))
    // .then(data=>console.log(data))

    request('http://localhost:8000/api/dataLikes')
    .then(data=>dispatch({type:'DATA_LIKES',payload:data}))
    // .then(data=>console.log(data))

    request('http://localhost:8000/api/info')
    .then(data=>dispatch(InfoMap(data))) 

    // dispatch({type:"STATUS_COMMENT"})
    //  fetch("http://localhost:8000/api/getComments")
    //     .then(data=>data.json())
    //     .then(data=>dispatch({type:'GET_COMMENT',payload:data}));
   
      //eslint-disable-next-line
},[])

  return (
    <div className="App">
      <Navbar />
      <div className='contents container-fluid'>
       <div className='row'>
          <div className='col-xs-12'> 
          <Routes>
            <Route path='/protected' index element={<Register />} />
            <Route path='/liked/:id'  element={<LikedItem />} />
            <Route path='/' element={<Protected Content={MainPage} />} />
            <Route path='/admin' element={<Protected Content={AdminPage} />} />
            <Route path='/detail/:id' element={<Info />} />
            <Route path='/regions/:name' element={<Regions />} />
            <Route path='/filters/:name' element={<FiltersList />} />
            <Route path='/input' element={<Protected Content={Input } />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h3 className='text-center main' style={{padding:'0 18%'}}>Nothing Found</h3>} />
        </Routes>
        {!isModule && (<div className='parent_modul'><CommentsModule /></div>)}
          </div>
       </div>
      </div>
    </div>
  );
}

export default App;
