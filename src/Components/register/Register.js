import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hook/useHttp';

function Register(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    const navigate = useNavigate();

    const {request} = useHttp();
    const register = async()=>{
        const data ={
            name,email,password
        }
        request('http://localhost:8000/api/register','POST',JSON.stringify(data))
            .then(data2=>localStorage.setItem('person',JSON.stringify(data2)))
            setName('')
            setEmail('')
            setPassword('')
            
            setTimeout(()=>{
                navigate('/protected')
            },1500)
    }
    useEffect(()=>{
        if(localStorage.getItem('person')){
            navigate('/protected')
        }
    },[])

    return (
        <div className='register'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <label className='form-label' htmlFor='name'>Ism</label>
                    <input type="text" required className='form-control' value={name} onChange={e=>setName(e.target.value)}  placeholder='FISH'/>
                </div>
                <div className='col-sm-6 offset-3'>
                    <label className='form-label' htmlFor='name'>Email</label>
                    <input type="email" required className='form-control' value={email} onChange={e=>setEmail(e.target.value)}  placeholder='Email'/>
                </div>
                <div className='col-sm-6 offset-3'>
                    <label className='form-label' htmlFor='name'>Password</label>
                    <input type="password" required className='form-control' value={password} onChange={e=>setPassword(e.target.value)}  placeholder='Password'/>
                </div>
                <div>
                    <button className='btn btn-success' style={{width:'200px',margin:'0 auto'}} onClick={register}>Ro'yhatdan o'tish</button>
                </div>
            </div>
            <div className='col-sm-5 alert'>
                <p>
                <h3>Ogohlantirish</h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione necessitatibus numquam adipisci illo velit architecto delectus debitis tempora doloremque laboriosam rem, corporis voluptate modi exercitationem, reprehenderit itaque! Magni incidunt consequatur ullam quasi in aliquam rerum fugiat velit deleniti quas? Veniam, sed nisi mollitia culpa est aliquam cum ab rem in!</p>
                </div>
           </div>
    );
}

export default Register;