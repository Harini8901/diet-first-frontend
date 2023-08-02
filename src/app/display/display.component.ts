import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  allImages:any=[];
  resImages:any=[];

  constructor(private http:HttpClient){}

  ngOnInit(){
  this.getImage();

  }
  public getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:1234/prd/all')
      .subscribe(
        res => {
          console.log(res);
          this.allImages = res;
          //for (let i = 0; i < this.allImages.length; i++) {
            //this.resImages[i]="data:image/jpeg;base64,"+
            //this.allImages[i].image;
          //}
          //console.log(this.resImages[0]);
          
        //  this.base64Data = this.retrieveResonse.picByte;
          //this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}

