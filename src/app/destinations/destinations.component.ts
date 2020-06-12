import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  countryName: string;
  countryCode: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  public countries: Country[] = [
    {id: 1, countryName: 'México', countryCode: 'MX', description: 'Méxiconota 1​ (Acerca de este sonido [ˈmexiko]), oficialmente Estados Unidos Mexicanos,18​19​20​21​ es un país soberano ubicado en la parte meridional de América del Norte con capital en la Ciudad de México.22​ Políticamente es una república representativa, democrática, federal y laica, compuesta por 32 entidades federativas (31 estados y la capital federal).2', img: 'https://media.gettyimages.com/photos/independence-monument-mexico-city-picture-id1064279806?s=612x612'},
    {id: 2, countryName: 'USA', countryCode: 'US', description: 'Estados Unidosnota 2​ (en inglés, United States, cuya abreviatura en inglés es US y en español es EE. UU.),nota 3​ oficialmente Estados Unidos de América (United States of America, cuya sigla oficial en inglés es USA y su contraparte en español es EUA),13​ es un país soberano constituido en república federal constitucional compuesta por cincuenta estados y un distrito federal.', img: 'https://www.gannett-cdn.com/media/2018/12/15/USATODAY/usatsports/MotleyFool-TMOT-657f0436-21e9af86.jpg'},
    {id: 3, countryName: 'Canadá', countryCode: 'CA', description: 'Canadá (en inglés: Canada, pron. AFI: /ˈkænədə/; en francés: Canada, pron. AFI: /kanada/) es un país soberano de América del Norte, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto.', img: 'https://dam.ngenespanol.com/wp-content/uploads/2019/05/Toronto-cielo.png'},
  ]; 

  constructor() { }

  ngOnInit(): void {
    window['dataLayer'].push({country: localStorage.getItem('country')});
  }

  public onClick(countryCode) {
    window['dataLayer'].push({country: countryCode});
  }

}
