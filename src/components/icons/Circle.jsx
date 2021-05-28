import React from 'react'

const Circle = ({
    fill = '#F2EBD3'
}) => {
    return (
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill={fill}
            viewBox="0 0 34.76 34.76" >
                <g>
                <path d="M17.38,34.76c-9.583,0-17.379-7.796-17.379-17.38S7.797,0,17.38,0s17.379,7.796,17.379,17.38S26.963,34.76,17.38,34.76z
                    M17.38,6.495c-6.002,0-10.885,4.882-10.885,10.885s4.883,10.885,10.885,10.885s10.885-4.882,10.885-10.885
                    S23.382,6.495,17.38,6.495z"/>
                </g>
        </svg>

    )
}

export default Circle
