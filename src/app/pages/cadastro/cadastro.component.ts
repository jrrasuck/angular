import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';

import { FotoService } from '../../services/Foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent
  formCadastro: FormGroup

  constructor(private formBuilder: FormBuilder
    , private fotoService: FotoService
    , private rota: ActivatedRoute
    , private roteamento: Router) {

    this.foto = new FotoComponent();
    this.formCadastro = formBuilder.group({
      url: ['', Validators.required],
      titulo: ['', Validators.required],
      descricao: ['', ],
    })
  
  }

  ngOnInit() {

    this.rota.params.subscribe((parametros) => {
      const idFoto = parametros.id

      if (idFoto) {
        this.fotoService.pegaFotoPorId(idFoto)
        .subscribe((responseDoServer: HttpResponse<FotoComponent>) => {
          this.foto = responseDoServer.body
        })
      }

    })

  }

  cadastraFoto(event: Event) {
    event.preventDefault();
    console.log("cadastrando...", this.foto)    

    if (!this.foto._id) {
      this.fotoService.cadastrar(this.foto)
        .subscribe(
          (response) => {
            console.log('Retorno do servidor', response)
            this.foto = new FotoComponent()
          }
        )
    } else {
      this.fotoService.alterar(this.foto._id, this.foto)
        .subscribe(() => {
          console.log('Foto alterada com sucesso')
          this.roteamento.navigate(['/'])
        })
    }
    
  }

}
