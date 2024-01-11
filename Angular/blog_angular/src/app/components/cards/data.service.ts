import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getMockData() {
    return [
      {
        id: 1,
        title: 'Sabor em Cada Mordida: Descubra a Magia das Especiarias',
        text: 'Se aventurar na culinária vai muito além de ingredientes comuns. Em nosso mais recente artigo, mergulhe no fascinante universo das especiarias e descubra como elas podem transformar suas receitas em verdadeiras obras-primas culinárias.',
        img: 'https://media.istockphoto.com/id/1389857295/pt/foto/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.jpg?s=1024x1024&w=is&k=20&c=_hOZynLurKbuj3YXmydOPfmkE2WULjY18O4RvPiBgUA=',
      },
      {
        id: 2,
        title:
          'Cozinha Simples, Sabores Surpreendentes: Receitas de 5 Ingredientes',
        text: 'Às vezes, menos é mais na cozinha! Apresentamos uma seleção exclusiva de receitas que exigem apenas cinco ingredientes, sem abrir mão do sabor. Prepare-se para uma experiência culinária descomplicada e deliciosa.',
        img: 'https://media.istockphoto.com/id/1371938299/pt/foto/african-american-family-at-home.jpg?s=1024x1024&w=is&k=20&c=SkntGEBvFHPXsvwcHdmcFxEufZBDwLeuBaDbuAiLrUY=',
      },
      {
        id: 3,
        title: 'Do Campo à Mesa: Conheça a Revolução da Culinária Sustentável',
        text: 'Explore o movimento crescente da culinária sustentável e como chefs visionários estão transformando ingredientes locais em pratos extraordinários. Descubra como suas escolhas na cozinha podem ter um impacto positivo no planeta.',
        img: 'https://media.istockphoto.com/id/1297236904/pt/foto/handsome-young-man-tasting-sauce-with-a-mixing-spoon-in-a-kitchen.jpg?s=1024x1024&w=is&k=20&c=OW2aRKdy5zDWtxnxu-HJSNJ8et2SmkLZWsXX89ygPzY=',
      },
      {
        id: 4,
        title: ' A Arte do Churrasco: Segredos para um Churrasco Perfeito',
        text: 'No mundo da culinária, o churrasco é uma arte que transcende fronteiras. Em nosso novo artigo, compartilhamos dicas de especialistas para garantir que cada churrasco seja uma experiência inesquecível. Prepare-se para acender as brasas e surpreender seus convidados.',
        img: 'https://media.istockphoto.com/id/1030512264/pt/foto/family-having-a-barbecue-party-in-their-garden.jpg?s=1024x1024&w=is&k=20&c=Gk6ArVasJUdLvHUR-e4RkVRGnuPaN-Z0JjZcSzyFF5Q=',
      },
      {
        id: 5,
        title: 'A Jornada do Café: Dos Grãos à Xícara',
        text: 'Embarque em uma jornada sensorial pelo universo do café, desde a colheita dos grãos até a preparação da xícara perfeita. Descubra os segredos por trás do aroma e sabor dessa bebida que conquistou corações ao redor do mundo.',
        img: 'https://media.istockphoto.com/id/1359027832/pt/foto/young-woman-enjoying-in-smell-of-fresh-coffee-in-a-cafe.jpg?s=1024x1024&w=is&k=20&c=ms48Nw3uyKMr5KabaDCM9nrAo2nnHSVxW1ubxbVBcks=',
      },
      {
        id: 6,
        title:
          'Culinária Internacional em Casa: Receitas Autênticas ao Seu Alcance',
        text: 'Viaje através do paladar com nossas receitas autênticas de diversas cozinhas internacionais. Desvende os segredos por trás de pratos icônicos e traga um toque global para a sua própria cozinha. A aventura culinária aguarda!',
        img: 'https://media.istockphoto.com/id/1131749859/pt/foto/global-hunger-issue.jpg?s=1024x1024&w=is&k=20&c=YxsqEz_lw-XIdr5BaB4M7h_hfXgHUoo-PKDtK1HFZYU=',
      },
    ];
  }
}
