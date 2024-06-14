import { Button } from 'primereact/button'
import React, { useState } from 'react'
import PopUp from './PopUp'
import Simple from './Simple'
import Charts from './Charts'

const Main = () => {

  const [openDialog, setOpenDialog] = useState(false)

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const currentProps = {
    openDialog,
    setOpenDialog
  }

  return (
    <>
      <Button label="Afficher pop" icon="pi pi-external-link" onClick={handleOpenDialog} />
      <PopUp {...currentProps} />
      <Simple />
      <Charts />


    </>
  )
}

export default Main