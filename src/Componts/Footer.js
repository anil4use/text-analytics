import React from 'react'




const Footer = (props) => <footer className="page-footer font-small blue pt-4">
  <footer className={` bg-${props.Mode} text-center text-lg-left text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>
    <div className="container-fluid text-center text-md-left">
      <div className="row  ">
        <div className='my-4'>  &copy; {new Date().getFullYear()} Copyright:{' '}
          ANIL: All rights reserved.</div>
      </div>
    </div>


  </footer>
</footer>

export default Footer