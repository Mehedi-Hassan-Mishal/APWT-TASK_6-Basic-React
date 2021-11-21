import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
        <NavBar />
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh"}}>
               <div>
                   <h1>Contact Page</h1>
               </div>
           </div>
           <Footer />
        </div>
    );
};

export default Contact;