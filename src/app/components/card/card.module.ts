import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { FiltraPorTituloPipe } from './filtraPorTitulo.pipe'
 
@NgModule({
   declarations: [ CardComponent, FiltraPorTituloPipe ],
   exports: [ CardComponent, FiltraPorTituloPipe ]
})
export class CardModule { }