import React from 'react'
import Button  from '@mui/material/Button'

const commonButton = ({color,size,disabled,sx,varient,children}) => {
  return (
    <Button
        color = {color}
        size = {size}
        disabled = {disabled}
        sx = {sx}
        varient = {varient}
    >
      {children}
    </Button>
  )
}

export default commonButton