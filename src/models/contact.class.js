export class StatusContact {
    name = '';
    surname = '';
    numero = '';
    status = false;

    constructor(name, surname, numero, status){
        this.name = name;
        this.surname = surname;
        this.numero = numero;
        this.status = status;
    }
}