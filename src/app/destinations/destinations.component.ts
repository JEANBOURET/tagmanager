import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  countryName: string;
  countryCode: string;
}

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  public countries: Country[] = [
    {id: 1, countryName: 'México', countryCode: 'MX'},
    {id: 2, countryName: 'USA', countryCode: 'US'},
    {id: 3, countryName: 'Canadá', countryCode: 'CA'},
  ] 

  constructor() { }

  ngOnInit(): void {
    window['dataLayer'].push({country: localStorage.getItem('country')});
  }

  public onClick(countryCode) {
    window['dataLayer'].push({country: countryCode});
  }

}
