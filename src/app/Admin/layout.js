import React from 'react';
import Sidebar from '../compoments/extrass/Sidebar';
// import Sidebar from '../components/extrass/Sidebar';


const Adminlayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar Column */}
        <div className="col-12 col-md-3 col-lg-2 bg-light p-0">
          <Sidebar />
        </div>

        {/* Main Content Column */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
