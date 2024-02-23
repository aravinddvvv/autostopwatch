import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        <img
                            src='https://i.gifer.com/7kfO.gif'
                            height='65'
                            width='82'
                            alt=''
                            loading=''
                        />
               <b>Ti</b> <b style={{color:"red"}}>mer</b>
             
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header