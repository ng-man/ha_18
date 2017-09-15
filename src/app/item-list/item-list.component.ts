import { Component, OnInit } from '@angular/core';
import { ItemComponent } from 'app/item/item.component';
import { DataService } from 'app/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [DataService]
})

export class ItemListComponent implements OnInit {

  itemsList: Array<object> = [];
  // currentRoute: any = '';

  constructor( private dataService: DataService, 
               private activatedRoute: ActivatedRoute, )  {  }

  ngOnInit() {
    this.itemsList = this.dataService.getItems();
//    this.currentRoute = this.activatedRoute.snapshot.url.join('');
  }



}
