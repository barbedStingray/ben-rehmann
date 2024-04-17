import React from 'react'

const Project = ({ image, URL, desc }) => {

    console.log('desc', desc[0]);

    return (
        <div className='projectSquare'>
            <div className='titlePhoto' data-aos='fade-right'>
                <img alt='witchesTodo photo' src={image} className='projectImage' />
            </div>
            <div className='buttonDesc'>
                <div className='bubbleDiv' data-aos='fade-left'>
                    <a href={URL}>
                        <div className='bubble'>
                            <p>View</p>
                        </div>
                    </a>
                </div>
                <div className='projectDescription' data-aos='fade-right'>
                    {desc.map((item, i) => (
                            <p>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
