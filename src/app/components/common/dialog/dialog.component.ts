import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  fromPage: any;
  title:string = "";
  message:string = "";
  username:string = "";
  phone:string = "";
  email:string = "";
  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: any,private router: Router) {
    this.fromPage = data;
   }

  ngOnInit(): void {
    // alert(JSON.stringify(this.data));
    this.title = this.data.title;
    this.message = this.data.message;
    this.username = this.data.firstName + " " + this.data.lastName;
    this.phone = this.data.phone;
    this.email = this.data.email;
  }
  close(){
      this.dialogRef.close();
  }
  onClickOk(){
    this.dialogRef.close();
  }
}
