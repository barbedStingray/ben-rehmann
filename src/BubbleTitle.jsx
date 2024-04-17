import React from 'react'

const BubbleTitle = ({ letter, animation, rotate, entry }) => {
    return (
        <div className='projectEntry' 
            data-aos={entry}
            data-aos-duration="3000"
        >
            <div className='projectLetter'
                style={{ animation: animation }}
            >
                <div className='letterDiv'
                    style={{ transform: rotate }}
                >
                    <div className='bubble' >
                        <p className='marginAdjust projectOveride'>{letter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BubbleTitle
