import React from 'react'

const BubbleTitle = ({ letter, animation, rotate, entry, duration }) => {



    return (
        <div className='projectEntry' 
            data-aos={entry}
            data-aos-duration={duration}
        >
            <div className='projectLetter'
                style={{ animation: animation }}
            >
                <div className='letterDiv'
                    style={{ transform: rotate }}
                >
                    <div className='bubble' 
                        // style={{ color: 'white' }}
                    >
                        <p className='marginAdjust projectOveride'>{letter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BubbleTitle
