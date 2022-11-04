import React, { useState, useEffect } from 'react';
import { StatusContact } from '../../models/contact.class';
import ContactoComponent from '../pure/Contacto';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {
    const defaultContact1 = new StatusContact('Nelson', 'Avalos', '34343434443', false);
    const defaultContact2 = new StatusContact('Gabriel', 'Senada', '43434243244', true);
    const defaultContact3 = new StatusContact('Javier', 'Biglia', '43324343242', false);

    const [statuscontacts, setContactos] = useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading  , setloading] = useState(true);

    useEffect(() => {
        console.log('Contac state has been modified');
        setloading(false)
        return () => {
            console.log(' Contact component is going to ');
        };
    }, [statuscontacts]);

    function compleContact(statusContact) {
        console.log('Complete this contact: ', statusContact);
        const index = statuscontacts.indexOf(statusContact);
        const temContacto = [...statuscontacts];
        temContacto[index].status = !temContacto[index].status;

        setContactos(temContacto);
    }
    function deleteContact(statusContact) {
        console.log('Complete this contact: ', statusContact);
        const index = statuscontacts.indexOf(statusContact);
        const temContacto = [...statuscontacts];
        temContacto.splice(index,1);
        setContactos(temContacto);
    }
    function addContact(statusContact) {
        console.log('Delete this task: ', statusContact);
        const index = statuscontacts.indexOf(statusContact);
        const temContacto = [...statuscontacts];
        temContacto.push(statusContact);
        setContactos(temContacto);
    }
    

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p3' style={{background: 'green', color: 'white', font: 'bold'}}>
                        <h5>
                        Tus Contactos
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px' } }>
                        <table >
                            <thead>
                                <tr>
                                    <th scope='col-4'>
                                    Nombre                  
                                    </th>
                                    <th scope='col-4'>Numero</th>
                                    <th scope='col-4'>Conectado</th>
                                    <th scope='col-4'>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statuscontacts.map((statusContact, index) =>{
                                    return(
                                        <ContactoComponent key={index} statusContact={statusContact} complete={compleContact} remove={deleteContact}></ContactoComponent>
                                    )
                                   }
                                  )
                                }
                               
                            </tbody>
                        </table>
                    </div>
                    <ContactForm add={addContact}></ContactForm>
                </div>
                
            </div>
            
        </div>
    );
};




export default ContactList;