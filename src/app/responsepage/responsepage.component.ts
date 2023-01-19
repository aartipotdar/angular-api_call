import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-responsepage',
  templateUrl: './responsepage.component.html',
  styleUrls: ['./responsepage.component.css']
})
export class ResponsepageComponent {
  constructor(private route: Router){}

  goback(){
    this.route.navigate(['']);
  }
}
