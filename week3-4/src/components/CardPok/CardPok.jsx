import React from 'react'

const CardPok = ({ id, name, type, img}) => {
    return (
        <div className="alldiv">
            <img src={img} className="imgpokedex"/>
            <h3 className="h3name">{name}</h3>
            <h3 className="h3type">Type: {type}</h3>
            <button id={id}  className="addfav">Add to favs</button>
        </div>
    )
}
export default CardPok