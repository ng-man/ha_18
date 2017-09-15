import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [DataService]
})
export class ItemComponent implements OnInit {

 itemDetails: Object;
 curStatus: string;

  constructor( private dataService: DataService, 
               private activatedRoute: ActivatedRoute
              ) {}

  ngOnInit() {
    var currentId: number,
        status: string;
    this.activatedRoute.params.forEach(function(item) {
      currentId = item.id;
      status = item.status;
    })
    this.itemDetails = this.dataService.getItemById(currentId);
    this.curStatus = status;
  }

}
