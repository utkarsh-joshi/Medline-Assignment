import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  footerText:string = "Copyright © 2019 Medline Industries, Inc. All rights reserved.";
  ngOnInit(): void {
  }

}
