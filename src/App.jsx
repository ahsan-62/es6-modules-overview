
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Watch from './components/watch/Watch'

function App() {

  // const watches=[
  //   {id:1, name:"Samsung Watch", price:2000},
  //   {id:2, name:"Apple Watch", price:2000},
  //   {id:3, name:"Xiaomi Watch", price:2000}
  // ]

  // const watches=[
  //   {
  //     "id": 1,
  //     "name": "Rolex Submariner",
  //     "price": 10000 
  //   },
  //   {
  //     "id": 2,
  //     "name": "Omega Speedmaster Moonwatch",
  //     "price": 7000 
  //   },
  //   {
  //     "id": 3,
  //     "name": "Seiko Prospex Marinemaster",
  //     "price": 3000 
  //   },
  //   {
  //     "id": 4,
  //     "name": "Casio G-Shock GWG-1000",
  //     "price": 500 
  //   },
  //   {
  //     "id": 5,
  //     "name": "Apple Watch Series 8",
  //     "price": 400 
  //   }
  // ]

  const[watches,setWatches]=useState([]);

  // useEffect(()=>{
  //   fetch('watches.json')
  //   .then(res=>res.json())
  //   .then(data=>setWatches(data))
  // },[])

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ahsan-62/watches-data/main/watchesdata.json")
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])


  return (
    <>
    
      <h1>Vite + React</h1>
     {
      watches.map(watch=> <Watch watch={watch} key={watch.id} ></Watch>)
     }
    </>
  )
}

export default App
