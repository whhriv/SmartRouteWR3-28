import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import GoogleMapsLink from './Mapping/GoogleMapsLink'

export default function Footer() {

    let timeDuration = JSON.parse(sessionStorage.getItem("FooterTime"));
    // let waypoints = JSON.parse(sessionStorage.getItem("waypoints"));

    // let waypoints = JSON.parse(sessionStorage.getItem("waypoints"));




  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='footer'>
        <MDBRow>
          <MDBCol size='auto' className='mt-0 mb-4 mb-md-0'>
           
              <GoogleMapsLink /> 
              </MDBCol>
              <MDBCol>
                <div>
              <span className="timeDuration ">Route Time: {timeDuration}</span>
            </div>
          </MDBCol>
          {/* <MDBCol><p className="timeDuration ">Route Time: {timeDuration}</p></MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
