import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'items-list',
    pathMatch: 'full'
  },
  { path: 'items-list', 
    component: ItemListComponent
  },
//    children: [ 
      { 
        path: 'items-list/item/:id/:status', 
        component: ItemComponent 
      },
      { 
        path: '**', 
        component: PageNotFoundComponent 
      }
// ]
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    PageNotFoundComponent,
    ItemListComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



