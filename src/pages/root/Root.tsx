import React, { useEffect } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';

export const Root = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const isRoot = location.pathname == "/"    

    
    useEffect(()=>{
        if(isRoot){
            navigate(`/wsataa-dasboard`)
          }
    },[])
  return null
}

