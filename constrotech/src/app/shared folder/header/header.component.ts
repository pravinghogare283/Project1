import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public getDataFromBackend: any;
  public abc: any;
  subheader1: any;
  subheader2: any;
  subheader3: any;
  public Home: any = 'Home';
  public Services: any = 'Services';
  public Protfolio: any = 'Protfolio';
  homevalue: any;
  servicevalue: any;
  protofoliovalue: any;
  
  public city:any=['Select City','Pune','Mumbai']

  constructor(private ser: MainserviceService, private route: Router) {
    this.getAllData();

  }
  date= new Date();
  ngOnInit(): void {
  }
  getAllData() {
    this.ser.getData().subscribe((res: any) => {
      console.log(res);
      this.getDataFromBackend = res;
      this.subheader1 = res[0].subHeader
      console.log(this.subheader1);
      this.subheader2 = res[1].subHeader;
      console.log(this.subheader2);
      this.subheader3 = res[2].subHeader;
      console.log(this.subheader3)
    })

  }
  changeEvent() {
    console.log(this.homevalue);

    if (this.homevalue == 'About us') {
      this.route.navigate(['about'])
    } else {
      if (this.homevalue == 'Home') {
        this.route.navigate(['home'])
      } else {
        if (this.homevalue == 'Future work') {
          this.route.navigate(['future'])
        } else {
          if (this.homevalue == "offers") {
            this.route.navigate(["offers"])
          }
        }
      }
    }
  }
  serviceEvent() {

    console.log(this.servicevalue);

    if(this.servicevalue == "Architectural Design"){
      this.route.navigate(['architectural-design'])
    }else{
      if(this.servicevalue == "Construction Consultant"){
        this.route.navigate(['construction-consultant'])
      }else{
        if (this.servicevalue == "Architectural Design") {
          this.route.navigate(['architecturaldesign'])
        }else{
          if (this.servicevalue == "Design and Construction") {
            this.route.navigate(['designconstruction'])
          }else{
            if (this.servicevalue == "Green building") {
              this.route.navigate(['greenbuilding'])
            }else{
              if (this.servicevalue == "House Renovation") {
                this.route.navigate(['houserenovation'])
              }else{
                if (this.servicevalue == "Resconstruction Service") {
                  this.route.navigate(['resconstructionservice'])
                }
              }
            }
          }
        }
      }
  }


   }
  protofolioEvent() {
      console.log(this.protofoliovalue)

      if (this.protofoliovalue == "Commercial") {
        this.route.navigate(['commercial'])
      }else{
        if (this.protofoliovalue == "Education") {
          this.route.navigate(['education'])
        }
      }if (this.protofoliovalue == "Industrial") {
        this.route.navigate(["industrial"])
      }else{
if (this.protofoliovalue == "Residential") {
  this.route.navigate(['residential'])
  
}
      }
  }
}
