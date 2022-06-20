export const fetchedPosts = (posts)=>{
    return{
        type:"FETCHED",
        payload:posts
    }
}

export const fetchingPosts =()=>{
    return{
        type:'FETCHING'
    }
}
export const slicePosts =()=>{
    let id =1,
        uuid =3;
    // setInterval(()=>{
    //     id = Math.floor(Math.random(1*3));
    //     uuid = Math.floor(Math.random(1*5));
    // },2000)
    return{
        type:'FETCHED_SLICER',
        payload:{id,uuid}
    }
}

export const  add_posts = (posts)=>({type:"ADD_POSTS",payload:posts})
export const  InfoMap = (data)=>({type:"INFO",payload:data})
export const  InfoDetail = (id)=>({type:'DETAIL_INFO',payload:id})
export const  DetailFetching = ()=>({type:'DETAIL_FETCHING'})
export const  AllPosts = (posts)=>({type:'ALL',payload:posts})