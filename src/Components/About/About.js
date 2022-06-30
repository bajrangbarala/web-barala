import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Fabout from './Fabout'
import Sabout from './Sabout'

function About() {
  return (
    <>
      <Box style={{ display: 'flex' }}>
        <Fabout />
        <Sabout />
      </Box>
      <Box>
        <Link to="./User/anil">anil</Link><br/>
        <Link to="./User/peter">peter</Link>
      </Box>
    </>
  )
}

export default About