import React from 'react'


const Footer = ({ children }) => {

return (
  <footer style={{
    paddingLeft: '20px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    fontSize: '10px',
    fontFamily: 'monospace',
    color: '#b8b8b8'
    }}>
    © {new Date().getFullYear()} Ottilia Westerlund 
  </footer>)

}
export default Footer
