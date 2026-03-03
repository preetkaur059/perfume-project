import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h1 className="text-[#e2f2b0] text-[4.5rem]  font-allura md:text-[4.5rem] text-[3rem]">
                {props.highlight}
            </h1>
        </div>
    )
}

export default Heading
