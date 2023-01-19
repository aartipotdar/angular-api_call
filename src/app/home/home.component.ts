import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient,
    private router: Router, private spinner: NgxSpinnerService){}

  keyPressAlphaNumeric(event:any){
    var labelInput = String.fromCharCode(event.keyCode);
    if(/[a-zA-Z0-9]/.test(labelInput)){
      return true;
    } else{
      event.preventDefault();
      return false;
    }
  }
    
  onSubmit(){
  fetch('https://us-central1-stroller-patrol-v3-prod.cloudfunctions.net/app/user/fbdeletion/status', {
        method: 'POST',
        body: JSON.stringify({
            "confirmationCode" : "4L2NIEMM"
        }),
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        }
      }).then(res => {
        return res.json();
      })
      
      .then(json => {console.log(json);
      //   this.spinner.show();
      //   setTimeout(() => {
      //   this.spinner.hide();
      // }, 5000);
      })

      .catch(error => console.error(error));
      this.spinner.show();
        setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/response']);  
      }, 5000);
        
    }
    
}
