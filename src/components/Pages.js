import Menu from '@mui/icons-material/Menu'
import { MenuItem, Typography } from '@mui/material'
import React from 'react'

function Pages() {
    const menu = ["home","about","contect","help"]
  return (
    <div>
       <Menu id="menu-appbar" open={"open"} sx={{ display: { xs: 'block'}, }} >
             {
              menu.map((page)=>(
                <MenuItem>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))
             }
            </Menu>
    </div>
  )
}

export default Pages