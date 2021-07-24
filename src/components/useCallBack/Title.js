import React from 'react'

const Title = () => {
    console.log('Rendering Title');
    return (
        <div style={{fontWeight: 'bold',padding:'22px'}}>
           Title: useCallback Hook
        </div>
    )
}

export default React.memo(Title)
