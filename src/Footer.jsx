import React from "react";
import{ CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import { CDBFooter } from 'cdbreact';
import logo from "../src/Assets/logo.png";
const Footer = () => {
    return(
        <div className="font-face-gm" >
            <footer className="w-100 bg-light text-center "> <div className='w-100 bg-blue text-center'>
    <CDBFooter className="shadow" >
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src={logo}
                width="125px"
              />
              
            </a>
          </CDBBox>
          <CDBBox display="flex"  style={{ width: '50%' }} justifyContent="between">
            <CDBBox>
              <CDBBox flex="column" display="flex"  style={{ color: 'white', cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Home </CDBFooterLink>
                <CDBFooterLink href="/">Features</CDBFooterLink>
                <CDBFooterLink href="/">Projects</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
             
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">About Us</CDBFooterLink>
                <CDBFooterLink href="/">Clients & Feedback</CDBFooterLink>
                <CDBFooterLink href="/">Contact Us</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">
              <CDBBox display="flex" flex="row"   style={{ cursor: 'pointer', justifyContent: "space-between", padding: '0' }}>
                <CDBFooterLink href="/">Terms & Conditions</CDBFooterLink>
                <CDBFooterLink  style={{marginLeft:"1rem"}} href="/"> Privacy Policy    </CDBFooterLink>
                <CDBFooterLink  style={{marginLeft:"1rem"}}href="/">  Cookies Policy   </CDBFooterLink>
                 <CDBFooterLink  style={{marginLeft:"1rem"}}href="/"> Copyrights    </CDBFooterLink>
              </CDBBox></small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    </div>

            </footer>
        </div>
    )
};

export default Footer;
