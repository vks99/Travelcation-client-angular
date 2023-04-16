import { Component, OnInit } from '@angular/core';
import { Package, DestinationService } from '../services/destination.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  packages: Package[] = [];
  imgurl: string[] = [
    "assets/DestinationImages/destinationindia.jpg",
    "assets/DestinationImages/DestinationCanada.jpg",
    "assets/DestinationImages/DestinationSwitzerland.jpg",
    "assets/DestinationImages/DestinationEgypt.jpg",
    "assets/DestinationImages/DestinationLondon.jpg",
    "assets/DestinationImages/DestinationAustralia.jpg",
  ];
  // selectedDestination = '';
  // price = 0;

  selectedDestination: string = '';
  price: number = 0;

  constructor(private destinationervice:DestinationService, private router: Router) { }

  ngOnInit(): void {
    // this.http.get<Package[]>('http://localhost:8000/packages').subscribe(
    //   res => {
    //     this.packages = res;
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
    this.destinationervice.getDestination().subscribe((data)=>{
      console.log(data);
      this.packages = data;
      console.log(this.packages);
    })
  }     

  navigateTo(name: string, price: number): void {
    console.log(name);
    console.log(price);
    this.router.navigateByUrl('/Payment?name=' + name + '&price=' + price);
  }
  

  // 
  
  // handleDestinationChange(selectedValue: string): void {
  //   console.log(selectedValue);
  //   this.selectedDestination = selectedValue;
  
  //   switch (selectedValue) {
  //     case "Bali":
  //       this.price = 1000;
  //       break;
  //     case "Maldives":
  //       this.price = 1500;
  //       break;
  //     case "Bangkok":
  //       this.price = 2000;
  //       break;
  //     default:
  //       this.price = 0;
  //       break;
  //   }
  // }
  
  // handlePriceChange(event: any): void {
  //   this.price = event.target.value;
  //   console.log(this.price);
  // }

  updatePrice(): void {
    switch (this.selectedDestination) {
      case 'Bali':
        this.price = 1000;
        break;
      case 'Maldives':
        this.price = 2000;
        break;
      case 'Bangkok':
        this.price = 3000;
        break;
      default:
        this.price = 100;
        break;
    }
    console.log(this.selectedDestination);
    console.log(this.price);
  }    
}
