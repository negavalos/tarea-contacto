import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { StatusContact } from '../../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const numeroRef  = useRef();

    function addContact(e) {
        e.preventDefault();
        const newContact = new StatusContact(
            nameRef.current.value,
            surnameRef.current.value,
            numeroRef.current.value,
            true
        );
        add(newContact);
        
    }
    return (
        <div>
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4' >
                <div className='form-outline flex-fill'>
                    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre del contacto' />
                    <input ref={surnameRef} id='inputdSurname' type='text' className='form-control form-control-lg' required placeholder='Apellido del contacto'/>
                    <input ref={numeroRef} id='inputNumero' type='number' className='form-control form-control-lg' required placeholder='Numero del contacto'/>
                    <button type='submit' className='btn btn-success btn-lg ms-1'>
                    Agregar contacto
                    </button>
                </div>
                
            </form>
        </div>
    );
}
ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
