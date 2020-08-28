import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DialogComponent } from 'src/app/components/common/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
 
  userRegistrationForm = new FormGroup({

    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    phone : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email])

  });

  constructor(public matDialog: MatDialog) { }
    
  formData : any;

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.userRegistrationForm.invalid){
      Object.keys(this.userRegistrationForm.controls).forEach(field => {
        // console.log(field);
        const control = this.userRegistrationForm.get(field);     
        control.markAsTouched({ onlySelf: true });       
      });
    }else{
      // alert(JSON.stringify(this.userRegistrationForm.value));
      let userData = JSON.parse(JSON.stringify(this.userRegistrationForm.value));

      userData.title = "User Information";
      userData.message = "User has been created succesfully with the below details";
      console.log(userData);

     
   

    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = userData;

    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DialogComponent, dialogConfig);
     
    }

   
  
  }
  
}
