import React from 'react'

const Title = (props)=>{
    return (
        <div className="base_title">
            <div className="main">{props.main}</div>
            <div className="center">{props.center}</div>
            <div className="desc">{props.desc}</div>
        </div>
    )
}


export default Title
