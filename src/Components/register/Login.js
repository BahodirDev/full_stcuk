import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [email,setEmail] = useState('')
    const [valid,setValid] = useState(false)
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const loginIn = ()=>{
        const data = {
            email,
            password,
        }
        login(data)
    }
    const login = async (data)=>{
        let timer = new Date().getMinutes() + 1;
        console.log(timer/60);
        let res = await fetch('http://localhost:8000/api/login',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        res = await res.json();
        console.log(res);
        if(!res.error){
            localStorage.setItem('person',JSON.stringify(res))
            navigate('/protected')
            // setTimeout(()=>{
            //     localStorage.clear()
            //     navigate('/login')
            // },10000)
            
        }
        else{
            setValid(true)
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('person')){
            navigate('/protected')
        }

    },[])

    return (
        <div className='login'>
            <div className='row'>
                {
                    valid && (
                <>
                    <div className='col-sm-6 offset-3 d-inline alert alert-info'>
                    <h5 className=''>Invalid password or Email <button className='btn btn-close p-2 ' aria-label='Close' onClick={()=>setValid(!valid)}></button></h5> 
                    </div>
                    </>
                )
            }
                <div className='col-sm-6 offset-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' className='form-control' value={email} placeholder='Email' onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className='col-sm-6 offset-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' className='form-control' value={password} placeholder='Password' onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className='col-sm-6 offset-3 mt-4'>
                    <button className='btn btn-success w-100' onClick={loginIn}>Kirish</button>
                </div>
            </div>
        </div>
    );
}

export default Login;