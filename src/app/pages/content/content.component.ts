import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  imgContent:string = ""
  titleContent:string = ""
  descriptionContent:string = ""
  dataContent:string = ""

  // esse componente não aparece para fora do programa
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id"))

      this.colocarValorNosComponentes(this.id)
  }

  colocarValorNosComponentes(id:string | null){
    const resultado = dataFake.filter(article => article.id === id )[0]

    this.imgContent = resultado.image
    this.titleContent = resultado.title
    this.descriptionContent = resultado.description
    this.dataContent = resultado.data
  }

}


