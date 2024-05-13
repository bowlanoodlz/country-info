import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  countryData: any = {};

  constructor (private apiService: ApiService) {}

setCountryData(event: any) {
  //console.log("event", event.target.id);
  this.apiService.setCountryInfo(event.target.id).subscribe((data: any) => {
    //console.log(data)
    this.countryData = {
      ...data,
      state:event.target.getAttribute("title")
    }
  })
}

}
