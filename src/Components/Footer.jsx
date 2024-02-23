import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
   
    <div><br /><br /><br /><br /><br />
           <MDBFooter className='bg-light text-center text-white'>
        <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2024 Copyright:
        <a className='text-white' href='/'>
          Timer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer