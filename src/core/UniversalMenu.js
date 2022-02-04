import React from 'react';
import MainMenu from './MainMenu';
import { Link } from 'react-router-dom';

const UniversalMenu = () => {
  return <>
      <div className="container-fluid main_menu_bar">
         <div className="container">
         <div className="container-fluid">
        <div className="row d-flex align-items-center">
            <div className="col-md-3" style={{paddingLeft:0,paddingRight:0}}>
            <div className="menu-bar d-flex align-items-center  ">
            <i className="fas fa-bars"></i> 
            <h4 className=''>Browse Categories</h4>
            </div>
            </div>
            <div className="col-md-7 menu_divide">
                <MainMenu/>
            </div>
            <div className="col-md-2 d-flex justify-content-end seller_button">
              <Link to="/signin">Be a Seller</Link>
            </div>
        </div>
     </div>
         </div>
     </div>
  </>;
};

export default UniversalMenu;
