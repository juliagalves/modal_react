import styles from "./Modal.module.css"

function Modal({isOpen, toggleModal}){
    
    if(isOpen){
        return(
            <div className={styles.background_style}>
                <div className={styles.modal_style}>
                    <h1>Hello World!</h1>
                    <button onClick={toggleModal}>Fechar</button>
                </div>
                
            </div>
        )
    }

    return null

}

export default Modal