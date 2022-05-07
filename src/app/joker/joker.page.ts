import { Component, OnInit } from '@angular/core';
import { DceuService } from '../Services/dceu.service';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.page.html',
  styleUrls: ['./joker.page.scss'],
})
export class JokerPage implements OnInit {
  DceuData: any = [];
  constructor(private dceuService: DceuService) { }

  //Read data of Ratings into data array
  ngOnInit() {
    this.dceuService.GetJokerData().subscribe(
      (data) => {
        this.DceuData = data.Ratings;
        console.log(this.DceuData);
      });
  }

}
