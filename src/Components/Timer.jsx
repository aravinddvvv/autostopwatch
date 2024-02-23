import React, { useEffect, useState } from 'react'

import { MDBBtn } from 'mdb-react-ui-kit';

function Timer() {
    
    const[sec,setSec]=useState(0)
    const[min,setMin]=useState(0)
    var timer;
 useEffect(()=>{
  timer=setInterval(()=>{
setSec(sec+1);

if(sec===59){
  setMin(min+1);
  setSec(0);
}
},500);

return()=>clearInterval(timer);
 })

function stop(){
  clearInterval(timer);
};
function reset(){
  setSec(0);
  setMin(0);
}


  





  return (

    
     <div className='container'style={{height:"50vh", width:"330px" , }}> 

    
        <center>
        <div>
   <p id='casio'> <b style={{color:"white"}}>CASIO</b></p>
      <MDBBtn  rounded className='raju' color='dark'>
       
      </MDBBtn> &nbsp;&nbsp;&nbsp;&nbsp;
      <MDBBtn  rounded className='raju' color='dark'>
        
      </MDBBtn> 
        </div>
       <div className='text'>
        <h1>{min<10?"0"+min:min+1} : {sec<10?"0"+sec:sec+1}</h1>
        <p ><b>Min</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Sec</b></p>

       </div> 
        </center> <br /><br />
        <div className='buttu'>
            <center>
        <MDBBtn onClick={reset} rounded color='dark'>
        Restart
      </MDBBtn>&nbsp;&nbsp;
      <MDBBtn onClick={stop} rounded className='mx-2' color='danger'>
        Stop
      </MDBBtn> <br /><br />
      <MDBBtn  rounded className='raju' color='dark'>
       
      </MDBBtn> &nbsp;&nbsp;&nbsp;&nbsp;
      <MDBBtn  rounded className='raju' color='dark'>
        
      </MDBBtn> 
      
</center>
        </div>

    </div>
 
  )
}

export default Timer