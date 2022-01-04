import React from 'react'

function Item({isLager, data}) {
    return (
        <fragment className="flex flex-col items-center">
            <div className={`bg-gray-300 rounded m-10 ${isLager ? "min-w-[250px] min-h-[300px]"  : "min-w-[200px] min-h-[250px]"}`}>
                
            </div>
            {data && (
                <div>
                    <h2 className="text-xl font-medium text-[#662D91]">{data.heading}</h2>
                    <p className="w-[200px] text-gray-400">{data.description}</p>
                    <hr className="mb-3" />
                    <button className="w-[200px] py-2 rounded-[2.25rem] btnShadow">Read More</button>
                </div>
            )}
        </fragment>
    )
}

export default Item
