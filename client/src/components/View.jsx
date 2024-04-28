import React, { useState } from 'react'

function View({ OpenedModalId, handleCloseModal }) {
    const handleClose = () => {
        handleCloseModal()
    }

    if(!OpenedModalId){
        return null;
    }
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-body-color/90 z-50 `}>
            hello {OpenedModalId}
            <button onClick={handleClose} className='bg-main-color px-2 '>Close</button>
        </div>
    )
}

export default View