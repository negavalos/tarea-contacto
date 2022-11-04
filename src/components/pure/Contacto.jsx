import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { StatusContact } from '../../models/contact.class';

//Style 
import '../../styles/task.scss';


const ContactoComponent = ({ statusContact, complete, remove }) => {
    
    
    useEffect(() => {
        console.log('Created Contact');
        return () => {
            console.log(`Contact: ${statusContact.name}`);
        };
    }, [statusContact]);
    function contactCompleteIcon() {
        if (statusContact.status) {
            return (<i class="bi bi-circle-fill" style={{color: 'green'}}> Online  </i>)

        }else{
            return (<i class="bi bi-circle-fill" style={{color: 'Red'}}> Offline   </i>)
        }
    }
    

    return (
        <tr className='fw-normal' >
            <th>
                <span className='ms-2'>{statusContact.surname}, { statusContact.name } </span>
            </th>
            <td className='align-middle'>
                <span>{statusContact.numero}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {contactCompleteIcon()}
               
            </td>
            <td>
            <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(statusContact)}></i>
            </td>
        </tr>
        
    );
};


ContactoComponent.propTypes = {
    statusContact: PropTypes.instanceOf(StatusContact),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactoComponent;
