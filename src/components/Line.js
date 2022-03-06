import React from 'react'

const Line = () => {

    const MyStyle = {
        backgroundColor: "#121415",
        height: "1px",
        width: "100%",
        margin: "5vmax 5.4vmax 5vmax 5.4vmax"
// margin: "2rem 1rem"
    }

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <div className='line' style={MyStyle }></div>
        </div>
    )
}

export default Line
