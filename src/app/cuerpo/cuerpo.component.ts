import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona.model';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  formulario!: FormGroup;
  personas: Persona[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  guardarPersona(): void {
    if (this.formulario.valid) {
      const nuevaPersona = new Persona(
        this.formulario.value.cedula,
        this.formulario.value.nombre,
        this.formulario.value.apellido,
        this.formulario.value.fecha
      );
      this.personas.push(nuevaPersona);
      this.formulario.reset();
    }
  }
}
