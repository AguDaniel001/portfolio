import React from 'react'

function Icon({text, className}) {
  return (
    <div className={className}><i>{text}</i></div>
  )
}

export default Icon