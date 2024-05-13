import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  constructor (private apiService: ApiService) {}

setCountryData(event: any) {
  console.log("event", event.target.id);
  this.apiService.fetchCountryInfo(event.target.id).subscribe(data => console.log(data))
}

}
