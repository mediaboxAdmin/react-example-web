import { Dialog } from "primereact/dialog"

const PopUp = ({ openDialog, setOpenDialog }) => {




    return (
        <Dialog
            header="Popup demo"
            visible={openDialog}
            onHide={() => setOpenDialog(!openDialog)}
        >

        </Dialog>
    )
}

export default PopUp