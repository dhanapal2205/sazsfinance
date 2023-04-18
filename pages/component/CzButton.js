import React from 'react'

const CzButton = ({ label, onClick }) => {
    return (
        <div>  <button onClick={onClick} >{label ? label : "Submit"}</button></div>
    )
}

export default CzButton