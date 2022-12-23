import React from 'react'
import Dahyun from '../img/Dahyunn.jpg'
import Dahyunnie from '../img/Dahyun.jpg'

function Card() {
  return (
    <div className="card bg-transparent">
        <img src={Dahyunnie} alt=''/>
        <div className="card-body bg-transparent">
            <h4 className="card-title text-center ">Toda una Reina</h4>
            <p className="card-text text-center ">Te amo bella </p>
        </div>
        <img src={Dahyun} alt=''/>
    </div>
  )
}

export default Card