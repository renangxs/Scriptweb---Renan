import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'renan';
  quebra = 'teste';
  imagem = "https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179__340.jpg";

  pessoa = {
    nome:"rita",
    idade:20,
    altura: 1.76
   };
   
   carro = {
       cor: "",
       marca: "",
       modelo: "a"
   }

   minhaImagem = [
    {foto: "https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179__340.jpg"},
    {foto: "https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg"},
    {foto: "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg"},
    {foto: "https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg"},
    {foto: "https://cdn.pixabay.com/photo/2022/10/03/13/16/houses-7495861__340.jpg"}
   ]

   meuCliente = [
    {nome: "Marcus", idade: 20},
    {nome: "carlos", idade: 88},
    {nome: "pedro", idade: 36}
   ]
}

