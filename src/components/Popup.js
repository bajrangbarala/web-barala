import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button } from '@mui/material';
// import { useState } from 'react';
const Popup = () => {
    const [open, setOpen] = React.useState(false);

    const opendialog = () => setOpen(true);
    const closedialog = () => setOpen(false);
    

  return (
    <div className='user'>
        <AccountCircleIcon onClick={opendialog} />
        <Dialog open={open}>
            <DialogTitle>Webnitter</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                Lorem ipsum is placeholder text commonly used in the graphic, 
                print, and publishing industries for previewing layouts 
                and visual mockups.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='secondary'>Agree</Button>
                <Button variant='contained' onClick={closedialog} >cancel</Button>
                
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default Popup