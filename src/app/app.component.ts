import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

buttonActive1:boolean;
buttonActive2:boolean;

refer(){
  this.buttonActive1=false;
  this.buttonActive2=true;
}
apply(){
  this.buttonActive1=true;
  this.buttonActive2=false;
}

  pictures = [
    {
      id: 1,
      identity:'#56078',
      h4: '.net Developer',
      content:'MAS',
      experience:'1-3 years',
      country:"Minnestona,USA",
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 2,
      identity:'#56079',
      content:'MAS',
      experience:'3-5 years',
      country:"Bangalore,India",
      h4: 'Project Lead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 3,
      identity:'#56080',
      content:'MAS',
      experience:'5-8 years',
      country:"Minnestona,USA",
      h4: 'MicrosoftLead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 4,
      identity:'#56081',
      content:'MAS',
      experience:'10+ years',
      country:"Yokihama,JAPAN",
      h4: 'AzureLead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 5,
      // identity:'#56082',
      h4: '.net Developer',
      content:'MAS',
      experience:'1-3 years',
      country:"Minnestona,USA",
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 6,
      // identity:'#56083',
      content:'MAS',
      experience:'3-5 years',
      country:"Bangalore,India",
      h4: 'Project Lead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 7,
      // identity:'#56084',
      content:'MAS',
      experience:'5-8 years',
      country:"Minnestona,USA",
      h4: 'MicrosoftLead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      button:'REFER',
      button2:'APPLY'
    },
    {
      id: 8,
      // identity:'#56085',
      content:'MAS',
      experience:'10+ years',
      country:"Yokihama,JAPAN",
      h4: 'AzureLead',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      button:'REFER',
      button2:'APPLY'
    },
  ];

}
