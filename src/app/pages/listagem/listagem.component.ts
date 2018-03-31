import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/Foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  texto: string = 'Caelum Photo Gallery';
  fotos: FotoComponent[] = []

  constructor(private httpClient: HttpClient, private fotoService: FotoService) {
    console.log("construtor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.fotoService.lista()    
    .subscribe((dados: FotoComponent[]) => {
      console.log('Retornou', dados)
      this.fotos = dados
    })
  }

  removeFoto(idFoto) {

    /*console.log("Removendo...", idFoto)
    const fotosAtualizadas = this.fotos.filter((foto) => {
      if (foto._id == idFoto) {
        return false;
      }
      return true;
    })
    this.fotos = fotosAtualizadas;*/

    this.fotoService
      .deletar(idFoto)
      .subscribe((resposta) => {
        console.log(resposta)
        console.log("Removendo...", idFoto)
        const fotosAtualizadas = this.fotos.filter((foto) => {
          if (foto._id == idFoto) {
            return false;
          }
          return true;
        })
        this.fotos = fotosAtualizadas;

      })

  }

}
