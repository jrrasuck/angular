import { Component, Input } from '@angular/core'

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html'
})
export class TituloComponent {
  @Input() texto
}