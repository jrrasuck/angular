import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';

import { FotoService } from '../../services/Foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent

  constructor(private fotoService: FotoService) {
    this.foto = new FotoComponent();
  }

  ngOnInit() {
  }

  cadastraFoto(event: Event) {
    event.preventDefault();
    console.log("cadastrando...", this.foto)    

    this.fotoService.cadastrar(this.foto)
    .subscribe(
      (response) => {
        console.log('Retorno do servidor', response)
        this.foto = new FotoComponent()
      }
    )
  }

}
