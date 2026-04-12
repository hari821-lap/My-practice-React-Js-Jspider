import React from 'react'
import './SingleCard.css'
import myntra from '../../../assets/Images/1_1Wgf9O-RorIenC59I48Cvg.png'

const SingleCard = () => {
    return (
        <>
            <div className="singlecard">
                <div>
                    <img src={myntra} alt="Myntra" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo consequuntur perspiciatis voluptatum illo! Delectus optio iste, 
                    quisquam quis eos eligendi saepe, est autem itaque
                     voluptatibus sunt expedita ullam?</p>
            </div>

        </>
    )
}

export default SingleCard
