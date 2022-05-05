import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters: any;
  continents: any;

  constructor(private publicservice: PublicService) {}

  ngOnInit(): void {
    this.getCharacters();
    this.getContinents();
  }
  getCharacters() {
    this.publicservice.getCharacters().subscribe(
      (response) => (this.characters = response),
      (error) => console.log(error)
    );
  }
  getContinents() {
    this.publicservice.getContinents().subscribe(
      (response) => (this.continents = response),
      (error) => console.log(error)
    );
  }
}
