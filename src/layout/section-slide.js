import React from 'react'

function SectionSlide({ children }) {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'tomato',
      }}>
      {children}
    </main>
  )
}

export default SectionSlide;