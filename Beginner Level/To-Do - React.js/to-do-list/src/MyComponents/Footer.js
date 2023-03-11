import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
    <p className='text-center'>&copy; Nikhil Sharma - My TodosList</p>
    </footer>
  )
}
