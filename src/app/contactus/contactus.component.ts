import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IContactus, ContactusserviceService } from '../services/contactusservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactusdetails: IContactus[] = [];
  successMessage="Form Submitted Succesfull";
  isOpen=false;

  constructor(private contactusservice:ContactusserviceService){}

  closemessage(){
    this.isOpen=false;
  }

  onSubmit(form: NgForm) {
    this.contactusdetails.push({
      fullName: form.value.fullName,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    });
    console.log(this.contactusdetails);
    form.reset();

    this.contactusservice.postContactus(this.contactusdetails).subscribe((data)=>{
      if(data==true){
        this.isOpen=true;
      }
      else{
        this.isOpen=false;
      }
    })

  }

}
