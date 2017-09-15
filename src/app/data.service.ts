import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

itemDetails: Object;  
itemsList: Array<object> = [
    { id: 1, 
      title: 'Nokia 3310', 
      description: '6.1 cm (2.4") polarised and curved screen for better readability in sunlight \
      2 MP camera with LED flash for simple snaps \
      2G connectivity for calling and texting \
      All-new UI with nods to the original \
      Awesome battery life, with up to 22 hours talk time \
      Beautiful push buttons and iconic, shaped design', 
      price: '55$',
      imgUrl: 'assets/img/nokia_3310.jpg' 
    },

    { id: 2, 
      title: 'Headphone Behringer HPX2000', 
      description: 'The HPX2000 boats a high-definition bass and crystal-clear highs. Its flip and foldable round shells and ultra-rugged headband design promise perfect wearer comfort.', 
      price: '24$',
      imgUrl: 'assets/img/302434_RB_00_FB.EPS_150.jpg' },

    { id: 3, 
      title: 'Action Camera', 
      description: '2.0 inch LCD Screen Action Camera which allows you to view real time HD pictures and videos on a larger screen \
      AKASO EK5000 action camera comes with 2 rechargeable 900mAh batteries, which can double recording time and enjoyment for you. \
      Capture stunning 1080P 30fps / 720P 60fps video that sharper and more lifelike with 12MP Burst photos \
      Built-In WIFI Action Camera signal ranges up to 10 meters.', 
      price: '50$',
      imgUrl: 'assets/img/51AwEtjrXwL._SL150_.jpg' 
    },

    { id: 4, 
      title: 'DJI Spark Alpine Drone', 
      description: 'QUICK LAUNCH. With Face Aware, Spark lifts off from your hand by recognizing your face. It takes off and hovers in place within seconds of powering on.\
      SIMPLE CONTROL.\
      CREATE WITH EASE. Intelligent Flight Modes and intuitive controls help you create cinematic aerial videos with just a few taps. \
      EDIT AND SHARE.', 
      price: '520$',
      imgUrl: 'assets/img/41R6GRpm0pL._SL150_.jpg' 
    }
]

getItems(): Array<object> {
  return this.itemsList;
} 

getItemById(id:number): Object {
  // this.itemsList.forEach(function(item) {
  //   console.log(item['id']);
  // });
  console.log('from data service: ', id);
  return this.itemsList[id-1];
}

constructor() { }

}
