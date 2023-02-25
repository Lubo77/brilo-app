import React from "react"

export default function Box(props) {
    return (
        <a href="#" className="box box--person" target="_blank">
            <div className="box__image">
                <img src={props.item.image} alt="box image" />
            </div>
            <div className="box__content">
                <h4 className="box__title">{props.item.title}</h4>
                <p className="box__perex">{props.item.perex}</p>
            </div>
        </a> 
    )
}