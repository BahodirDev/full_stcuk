import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add_posts } from '../../redux/actions';
import '../../styles/input.css';
function Input(props) {

    const navigate =useNavigate()
    const [categore,setCategory] = useState([
        {id:1,value:'Mobil'},
        {id:2,value:'Avtomobil'},
        {id:3,value:'Ko`chmas mulk'},
        {id:4,value:'texnik jihoz'},
        {id:5,value:'Mebel'},
        {id:6,value:'Tekin'},
    ])

    const [viloyat,setViloyat] = useState([
        {id:1,value:'Farg`ona'},
        {id:2,value:'Namangan'},
        {id:3,value:'Samarqand'},
        {id:4,value:'Toshkent'},
        {id:5,value:'Buxoro'},
        {id:6,value:'Navoiy'},
        {id:7,value:'Xorazm'},
        {id:8,value:'Qashqadaryo'},
        {id:9,value:'Surxondaryo'},
        {id:10,value:'Andijon'},
        {id:11,value:'Qoraqalpoq'},
        {id:12,value:'Nukus'},
    ])

    const dispatch = useDispatch();

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
    const [img,setImg] = useState('');
    const [category,setCategorya] = useState('');

    let time = new Date().getMilliseconds();

    const Submit =async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('title',title);
        data.append('desc',desc);
        data.append('price',price);
        data.append('category',category);
        data.append('file',img);
        data.append('id',time);
        
      let  copyData ={
            title,
            desc,
            price,
            category,
            img,
            time
        }
          dispatch(add_posts(copyData))
        // Object sifatida olish zarur yoki laravelga ilsh kerak

        await fetch('http://localhost:8000/api/postsItem/',{
            method:"POST",
            body:data,
        })
        .then(data=>data.json())
        .then(data=>console.log(data))
        
        getClients()
       
        setCategorya('');    
        setAddress('');    
        setContact('');    
        setEmail('');    
        setImg('');    
        setName('');    
        setDesc('');    
        setPrice('');    
        setTitle('')   
    }

    const getClients = async() =>{
        const data2={
            name,address,email,contact,id:time
        }
         await fetch('http://localhost:8000/api/client/',{
            method:"POST",
            body:JSON.stringify(data2),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(data=>data.json())
        .then(data=>console.log(data))
    }

  

    return (
        <form onSubmit={Submit}>
            <div  >
            <div className='row mt-4 ' id='from_area'>
            <h3 className='text-center mt-4'>E'lon beruvchi haqida</h3>
         <div className='col-sm-8 offset-2'>
             <div className='row' id='data_item'>
                 <div className='col-sm-12'>
                     <label className='form-label' htmlFor='ism'><h5>E'lon beruvchining ismi </h5></label>
                     <input type="text" id='ism' className='form-control' onChange={e=>setName(e.target.value)} value={name} required placeholder='Ismni kiriting...' />
                 </div>
                 <div className='col-sm-9'>
                     <label className='form-label' htmlFor='viloyat'><h5>Hududni tanlang</h5></label>
                         <select className='form-select' required id='viloyat' onChange={e=>setAddress(e.target.value)} value={address} >
                             <option className='option'>Hududni tanlang</option>
                             {viloyat.map(item=>{
                                 return(
                                     <option className='option' value={item.value} key={item.id}>{item.value}</option>
                                 )
                             })}
                         </select>
                 </div>
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='email'><h5>Email address Turi</h5></label>
                     <input type="text" required onChange={e=>setEmail(e.target.value)} value={email}  id='email' className='form-control'  placeholder='Test@gmail.com' />
                 </div>
                 
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='tel'><h5>Telefon raqam</h5></label>
                     <input type="number" id='tel' onChange={e=>setContact(e.target.value)} value={contact}  className='form-control' required placeholder='(99) 999-88-77 ' />
                 </div>
             </div>
         </div>
         {/* Mahsulot haqida  */}

                 <h3 className='text-center mt-4'>Mahsulot haqida</h3>
         
         <div className='col-sm-8 offset-2'>
             <div className='row' id='data_item2'>
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='name'><h5>Mahsulot Nomi</h5></label>
                     <input type="text" id='name' className='form-control' onChange={e=>setTitle(e.target.value)} value={title}  required placeholder='Mahsulot nomini kiriting...' />
                 </div>
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='select'><h5>Mahsulot Turi</h5></label>
                     <select className='form-select' id='select' required onChange={e=>setCategorya(e.target.value)} value={category}  >
                         <option className='option'>Kategoriyani tanlash...</option>
                         {categore.map(item=>{
                             return(
                                 <option className='option' value={item.value} key={item.id}>{item.value}</option>
                             )
                         })}
                     </select>
                 </div>
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='price'><h5>Mahsulot Narxi</h5></label>
                     <input type="number" id='price' onChange={e=>setPrice(e.target.value)} value={price}  className='form-control' required placeholder='Mahsulot narxini kiriting... ' />
                 </div>
                 <div className='col-sm-6'>
                     <label className='form-label' htmlFor='desc'><h5>Mahsulot Tavsifi</h5></label>
                     <textarea type="number" id='desc' className='form-control' onChange={e=>setDesc(e.target.value)} value={desc}  required placeholder='Mahsulot haqida... ' />
                 </div>
                 <div className='col-sm-6 '>
                 <label><h5>Mahsulot uchun surat</h5></label>
                 <span>
                     <input type="file" placeholder="surat"  onChange={(e)=>setImg(e.target.files[0])} required  />
                 </span>
                 </div>
                 <div className='col-sm-12'>
                         <button  type='submit' className='btn btn-info m-2 text-white'>Yuborish</button>
                         <button    className='btn btn-warning m-2 text-primary' onClick={()=>navigate(-1)}>Ortga qaytish</button>
                 </div>
             </div>
         </div>
     </div>
        </div>
        </form>
    );
}

export default Input;