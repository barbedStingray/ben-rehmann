import React from 'react'

const Bubble = ({ name, div, entry, animation, rotate }) => {
    return (
        <div
            data-aos={entry}
            data-aos-duration='1000'
        >
            <div className={div}
                style={{ transform: rotate }}

            >
                <div className='bubble'
                    style={{ animation: animation }}
                >
                    <p className='marginAdjust'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Bubble
