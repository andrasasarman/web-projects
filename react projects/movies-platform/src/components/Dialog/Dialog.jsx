import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export default function Dialog({ title, success, reject, showDialog, successButton, cancelButton }){
    const dialogTemplate = 
    <>
    { showDialog && <div className='fixed inset-0 flex justify-center items-center bg-black'>
    <section>
        <p>Are you sure you want to delete {title}?</p>
        <button onClick={success}>{successButton}</button>
        <button onClick={reject}>{cancelButton}</button>
    </section>
    </div>}
    </>
    return (
        <>
            {
                createPortal(dialogTemplate, document.body)
            }
        </>
    );
}

Dialog.propTypes = {
    title: PropTypes.string,
    success: PropTypes.func,
    reject: PropTypes.func,
    showDialog: PropTypes.bool,
    setShowDialog: PropTypes.func,
    successButton: PropTypes.string,
    cancelButton: PropTypes.string
}