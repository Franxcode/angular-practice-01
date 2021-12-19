import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

    public deshabilitar = false;
    public mensaje: string = 'No se ha agregado ninguna persona';
    public titulo: string = '';

    agregarPersona(){
        this.mensaje = 'Persona agregada';
    }

    // Documentacion Event Binding
    // modificarTitulo(event: Event){
    //     console.log('Entrando a metodo modificar Titulo');
        
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}