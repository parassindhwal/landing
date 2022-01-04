import React from 'react'
import Item from './Item'

function Section({sub, topic, isLager, data}) {
    return (
        <div className="text-center pt-8 space-y-2" id={topic}>
            <h4 className="text-xs text-[#662D91]">{sub}</h4>
            <h2 className="text-3xl text-[#662D91]">{topic}</h2>
            <div className="flex align-center justify-center flex-wrap">
                <Item isLager={isLager} data={data}/>
                <Item isLager={isLager} data={data}/>
                <Item isLager={isLager} data={data}/>
                <Item isLager={isLager} data={data}/>
            </div>
        </div>
    )
}

export default Section
