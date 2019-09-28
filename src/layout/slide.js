import React from 'react'

function Slide({ children }) {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'palevioletred',
      }}>
      {children}
    </main>
  )
}

export default Slide;