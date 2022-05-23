import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public aboutus:any='ABOUT US';
public companylinks:any='COMPANY LINKS';
public contactinfo:any='CONTACT INFO';
public phoneno:any='+1 718-999-3939';
public email:any='contact@construction.com'
public footeradress:any="1379 Shoreline Parkway, Mountain View, CA 94043, United States";
  constructor() { }

  ngOnInit(): void {
  }

}
