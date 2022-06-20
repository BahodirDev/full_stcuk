


const initialState = {
    regions:[
        {id:1,title:'farg`ona'},
        {id:2,title:'andijon'},
        {id:3,title:'namangan'},
        {id:4,title:'xorazm'},
        {id:5,title:'buxoro'},
        {id:6,title:'samarqand'},
        {id:7,title:'navoiy'},
        {id:8,title:'qashqadaryo'},
        {id:9,title:'surxondaryo'},
        {id:10,title:'qoraqalpoq'},
        {id:11,title:'nukus'},
        {id:12,title:'toshkent'}
    ],
    posts:[],
    postsSubLikes:[],
    postStatus:false,
    infomap:[],
    infoStatus:false,
    detail:[],
    deatilStatus:false,
    allPosts:[],
    allPostsStatus:false,
    likedPosts:[],
    likedPostsStatus:false,
    filters2:[],
    filters:[],
    statusFilter:false,
    comments:[],
    commentsStatus:false,
    isModule:true,
    currentItemId:0,
    postsSlice:[],
    From:
    [
        {id:1,value:10000,"title":"10 ming"},
        {id:2,value:20000,"title":"20 ming"},
        {id:3,value:50000,"title":"50 ming"},
        {id:4,value:100000,"title":"100 ming"},
        {id:5,value:200000,"title":"200 ming"},
        {id:6,value:250000,"title":"250 ming"}
    ],
    To:[
        {id:1,value:300000,"title":"300 ming"},
        {id:2,value:500000,"title":"500 ming"},
        {id:3,value:1000000,"title":"1 mln"},
        {id:4,value:10000000,"title":"10 mln"},
        {id:5,value:20000000,"title":"20 mln"},
        {id:6,value:25000000,"title":"25 mln"},
        {id:6,value:25000000000000,"title":"25 mln dan yuqori"},
    ],
    MoneyFrom:0,
    MoneyTo:10000000000000,
    Category:''

}

function reducer(state=initialState,{type,payload}) {
    switch (type) {
        case 'FETCHING':
            return{
                ...state,
                postStatus:true
            }
    
        case 'FETCHED':
            return{
                ...state,
                posts:payload,
                postStatus:false
            }
        case 'FETCHED_SLICER':
            return{
                ...state,
                postsSlice:state.posts.slice(payload.id,payload.uuid)
            }
        case 'DATA_LIKES':
            return{
                ...state,
                postsSubLikes:payload,
            }
        case 'ADD_POSTS':
            return{
                ...state,
                posts:[...state.posts,payload]
            }
        case 'INFO':
            return{
                ...state,
                infomap:payload
            }
        case 'DETAIL_FETCHING':
            return{
                ...state,
                deatilStatus:true
            }
        case 'DETAIL_INFO':
            return{
                ...state,
                detail: payload,
                deatilStatus:!state.deatilStatus
            }
        case 'ALL':
            return{
                ...state,
                allPosts: payload,
                allPostsStatus:!state.deatilStatus
            }
        case 'IS_ALLOWED':
            return{
                ...state,
                allPosts: state.allPosts.map((item)=>{
                    if(item.id == payload){
                        return{
                            ...item,
                            isAllowed:1
                        }
                    }
                    return item
                    
                }),
            }
        case 'IS_ALLOWED_NULL':
            return{
                ...state,
                allPosts: state.allPosts.map((item)=>{
                    if(item.id == payload){
                        return{
                            ...item,
                            isAllowed:0
                        }
                    }
                   return item
                }),
            }
        case 'LIKED':
            return{
                ...state,
                postsSubLikes: state.postsSubLikes.map((item)=>{
                    if(item.pid == payload.item_id){
                        return{
                            ...item,
                            per_id:payload.p_id
                        }
                    }
                   return item
                }),
            }
        case 'UNLIKED':
            return{
                ...state,
                postsSubLikes: state.postsSubLikes.map((item)=>{
                    if(item.pid == payload){
                        return{
                            ...item,
                            per_id: null
                        }
                    }
                   return item
                }),
                likedPosts: state.likedPosts.map((item)=>{
                    if(item.id == payload){
                        return{
                            ...item,
                            isLiked: 0
                        }
                    }
                   return item
                }),
            }
        case 'DELETE_ITEM':
            return{
                ...state,
                allPosts: state.allPosts.filter(s=>s.c_id !== payload),
            }
        case 'FILTER_LIKED_POSTS':
            return{
                ...state,
                likedPosts: state.posts.filter(s=>s.isLiked === 1),
            }
        case 'FILTERED_FETCHING':
            return{
                ...state,
                likedPostsStatus:true,
            }
        case 'FILTERED_FETCHED':
            return{
                ...state,
                likedPosts:payload,
                likedPostsStatus:!state.likedPostsStatus,
            }

        case 'FOUNDED':         
            return{
                ...state,
                // filters:payload,
                filters: payload.map((item)=>{
                    return{
                        ...item,
                        price:parseInt(item.price)
                    }
                }),
                statusFilter:false
        }  
        case 'FIND_PLACE':         
            return{
                ...state,
                filters2:payload,
                statusFilter:!state.statusFilter
        }  
        case 'ADD_LIKED':         
            return{
                ...state,
                posts: state.posts.map((item)=>{
                    if(item.id === payload.id){
                        return{
                            ...item,
                            countLiked: item.countLiked +1
                        }
                    }
                    return item
                })
        }  
        case 'REMOVE_LIKED':         
            return{
                ...state,
                posts: state.posts.map((item)=>{
                    if(item.id === payload.id){
                        return{
                            ...item,
                            countDisLiked: item.countDisLiked +1
                        }
                    }
                    return item
                })
        }  
        case 'CHANGE_MODUL':
            return{
                ...state,
                isModule: !state.isModule,
                currentItemId:payload
            }
        case "STATUS_COMMENT":
            return{
                ...state,
                commentsStatus:!state.commentsStatus
            }    
        case "GET_COMMENT":
            return{
                ...state,
                comments:payload,
                commentsStatus:false
            }    
        case "PUT_COMMENT":
            return{
                ...state,
                comments:[...state.comments,payload],
                commentsStatus:!state.commentsStatus
            }    
        case "DELETE_COMMENT":
            return{
                ...state,
                comments:state.comments.filter(s=>s.id !==payload),
                commentsStatus:!state.commentsStatus
            }    
        case "CHANGE_LIMIT_FROM":
            return{
                ...state,
                // statusFilter:true,
                MoneyFrom:Number(payload),
            }    
        case "CHANGE_LIMIT_TO":
            return{
                ...state,
                MoneyTo:Number(payload)
            }    
        case "CHANGE_LIMIT_CATEGORY":
            return{
                ...state,
                Category:payload
            }    
        case "CHANGE_LIMIT_FINAL":
            return{
                ...state,
                filters:payload,
                statusFilter:false
            }    
        default:
           return state
    }
}

export default reducer;