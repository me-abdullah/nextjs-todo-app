interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
                <div className="modal-box">
                    {children}
                    <div className="modal-action">
                        <button onClick={() => setModalOpen(false)} className="btn btn-neutral">
                            Close!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
