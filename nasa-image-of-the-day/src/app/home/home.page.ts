import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  imageData:any;
  selectedDate: any;

  constructor(private nasaService:NasaService) {
  }
  
  
  ngOnInit(){
    this.nasaService.getImageOfTheDay().subscribe((data)=>{
      this.imageData=data;
    });
  }

  ngOnInit2(date:Date){
    this.nasaService.getImageByDate(date).subscribe((data)=>{
      this.imageData=data;
    })
  }
  onSubmit() {
    if (this.selectedDate) {
      this.ngOnInit2(this.selectedDate);
    } else {
      alert('Por favor, selecciona una fecha.');
    }
  }

}
