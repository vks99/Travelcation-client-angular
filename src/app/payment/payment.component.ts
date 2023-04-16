import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPayment, PaymentService } from '../services/payment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{


  name: string | null = null;
  price: number | null = null;

  // constructor(private paymentservice:PaymentService){}
  constructor(private route: ActivatedRoute, private paymentservice:PaymentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.price = +params['price'];
    });
    console.log(this.name);
    console.log(this.price);
  }

  paymentdetails: IPayment[] = [];
  successMessage="Payment Done Succesfully";
  isOpen=false;

  closemessage(){
    this.isOpen=false;
  }


  submitPayment(form: NgForm){
    console.log(this.name);
    console.log(this.price);
    this.paymentdetails.push({
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      country: form.value.country,
      city: form.value.city,
      zipcode: form.value.zipcode,
      email: form.value.email,
      phone: form.value.phone,
      cardname: form.value.cardname,
      cardnumber: form.value.cardnumber,
      monthYear: form.value.monthYear,
      cvv: form.value.cvv,
      destinationName: form.value.destinationName,
      destinationPrice: form.value.destinationPrice,
    });
    console.log(this.paymentdetails);
    form.reset();

    this.paymentservice.postPayment(this.paymentdetails).subscribe((data)=>{
      if(data==true){
        this.isOpen=true;
      }
      else{
        this.isOpen=false;
      }
    })
  }
}
