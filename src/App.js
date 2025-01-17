import React from 'react'
import Home from './Home'

function cust1(){
  const el=document.getElementById('greet');
  const txt=el.textContent;
  const arr=txt.split('');
  arr.map(item=><p>item</p>);
}
export default function App() {
  return (
    <Home/>
  )
}