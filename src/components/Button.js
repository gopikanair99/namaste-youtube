import React from 'react'

const Button = ({name}) => {
  return (
    <div className="bg-slate-200 rounded-lg px-2 py-1 m-2 text-center text-pretty">
        {name}
    </div>
  )
}

export default Button