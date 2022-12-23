import React from 'react'
import Dahyun from '../img/Dahyunn.jpg'
import Dahyunnie from '../img/Dahyun.jpg'

function Card() {
  return (
    <div className="card">
        <img src={Dahyunnie} alt=''/>
        <div className="card-body">
            <h4 className="card-title text-center">Texto de h4</h4>
            <p className="card-text text-center">textoprueba</p>
        </div>
        <img src={Dahyun} alt=''/>
    </div>
  )
}

export default Card