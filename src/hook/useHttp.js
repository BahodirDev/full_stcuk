import React, { useCallback } from 'react';

function useHttp(props) {
  const request = useCallback(async(url,method="GET",body=null,headers={"Content-type":"application/json"})=>{
    try {
        const response = await fetch(url,{method,body,headers});
        if(!response.ok){
            throw new Error(`Error is assigned in ${response.url} and ${response.status}`);

        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
  },[])
  return {request}
}

export default useHttp;