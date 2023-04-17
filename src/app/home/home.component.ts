import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HomeService, Idest, TravelGuides, Feedback } from '../services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {
      provide: CarouselConfig, 
      useValue: { interval: 10000, noPause: true, showIndicators: true }
    }
  ]
})
export class HomeComponent {
   
  destinations: Idest[] = []
  travelGuides: TravelGuides[] = []
 
  successMessage: string = '';
  isFormOpen: boolean = false;
  feedbackForm1: FormGroup;

  isLoggedIn = false;

  //Images of destination:
  destinationImages = [
    {imgurl:'assets/Home/image1.jpeg'},
    {imgurl: 'assets/Home/image1.jpeg'},
    {imgurl: 'assets/Home/image3.jpeg'}
  ]
  //Images of travelguides
  travelGuideImages = [
    {guideimageUrl: 'assets/Home/sarada_img.jpg'},
    {guideimageUrl: 'assets/Home/vikas_image1.jpg'},
    {guideimageUrl: 'assets/Home/sethu_madhav_image1.jpg'},
    {guideimageUrl: 'assets/Home/suzhang.jpeg'}
  ]


  constructor(private homeService: HomeService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.feedbackForm1 = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      feedback: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.homeService.getHome_Destinations().subscribe((data) => {
     this.destinations = data;
    });
     this.homeService.getTravelGuides_Details().subscribe((data) => {
      this.travelGuides = data;
    });

    this.authService.isLoggedIn$.subscribe((res) => (this.isLoggedIn = res));
  }

  submitFeedback1() {
    if (this.feedbackForm1.valid) {
      console.log(this.feedbackForm1);
      this.homeService.postFeedbackForm(this.feedbackForm1.value).subscribe(response => {
        console.log(response);
      this.successMessage = 'Feedback submitted successfully';
      }, error => {
        console.log(error);
        // add any error message
      });
    }
    
    this.feedbackForm1.reset();
  }

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
  
  closeMessage() {
    this.successMessage = ''; // reset the success message
  }

  
}
