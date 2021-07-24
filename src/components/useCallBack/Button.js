import React from 'react'

const Button = ({handleClick, children}) => {
    console.log('Rendering Button -',children);
    return (
        <div style={{padding:'12px'}}>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
