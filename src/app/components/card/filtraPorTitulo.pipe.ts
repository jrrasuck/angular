import { Pipe } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe {
    transform(fotos: Array<FotoComponent>, inputDoUsuario) {
        return fotos.filter((foto) => {
            return foto.titulo.toLowerCase().includes(inputDoUsuario.toLowerCase())
        })
    }
}