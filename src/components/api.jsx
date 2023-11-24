import React from 'react'

export default function api() {
    const getUsers=()=>{
        return fetch("http://localhost:3000/eleves",{type: "GET",}).then((res)=> res.json());
    };
    
  return {
    getUsers,
    }
}


