import React from 'react'
import { Typography } from '@material-ui/core'

export default function FooterCopyright () {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Typography>
      © Copyright { currentYear() } | Luca Di Bello 
    </Typography>    
  )
}