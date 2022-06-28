import { Box } from '@mui/material'
import React from 'react'
import Fabout from './Fabout'
import Sabout from './Sabout'

function About() {
  return (
    <>
      <Box style={{ display: 'flex' }}>
        <Fabout />
        <Sabout />
      </Box>
    </>
  )
}

export default About