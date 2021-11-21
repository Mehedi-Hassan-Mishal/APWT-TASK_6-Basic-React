import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
           <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh"}}>
               <div>
                   <h1>Home Page</h1>
               </div>
           </div>
           <Footer />
        </div>
    );
};

export default Home;