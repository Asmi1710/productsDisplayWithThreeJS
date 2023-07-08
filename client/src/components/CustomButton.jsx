import React from 'react'

const CustomButton = ({type, title, handleClick, customStyles, color}) => {


    const btnStyle= (type)=>{
        if(type==='filled')
        {
            return {
                backgroundColor: color,
                color: "#ffffff"
            }
        }
    }

    console.log("btn values", customStyles);
    return (
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            onClick={handleClick}
            style={btnStyle(type)}
        >{title}
        </button>
    )
}

export default CustomButton