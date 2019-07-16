import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {

  constructor() { }

  onClick(team1 : string,team2: string){
    console.log(team1);
  }

  onSubmit(){
    console.log('sum');
  }
  ngOnInit() {
  }

}
