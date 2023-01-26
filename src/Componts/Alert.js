import React from 'react'

function Alert(props) {
  return ( props.Alertm &&
    <>
   <div className={`container my-3 alert  alert-${props.Alertm.type} alert-dismissible fade show`} role="alert">
    <strong>{props.Alertm.type}</strong> : {props.Alertm.msg}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  </>
  )
}

export default Alert