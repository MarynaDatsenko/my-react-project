import { useToggle } from "../hooks/useToggle";

const ComponentA = ( => {
    const { isOpen, open, close } = useToggle ();

    return (
        <>
        <button onClick={openModal}>Open modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />   
        </>
    )
})