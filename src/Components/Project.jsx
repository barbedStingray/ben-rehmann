import React from 'react'

const Project = ({ image, URL, desc }) => {

    console.log('desc', desc[0]);

    return (
        <div className='projectSquare'>
            <div className='titlePhoto'
                data-aos='fade-right'
                // data-aos-delay='800'
                data-aos-duration='1000'
            >
                <img 
                    alt='project photo' 
                    src={image} 
                    className='projectImage'
                    // style={{ filter: "grayscale(100%)" }}
                />
            </div>
            <div className='buttonDesc'>
                <div className='bubbleDiv'
                    data-aos='fade-left'
                    // data-aos-delay='800'
                    data-aos-duration='1000'
                >
                    <a href={URL} target='_blank'>
                        <div className='bubble'>
                            <p className='marginAdjust'>View</p>
                        </div>
                    </a>
                </div>
                <div className='projectDescription'
                    data-aos='fade-right'
                    // data-aos-delay='800'
                    data-aos-duration='1000'
                >
                    {desc.map((item, i) => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
