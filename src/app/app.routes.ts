import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SynchronizeComponent } from './synchronize/synchronize.component';
import { CantosComponent } from './cantos/cantos.component';
import { SetsComponent } from './sets/sets.component';
import { AddCantoComponent } from './add-canto/add-canto.component';
import { AddSetComponent } from './add-set/add-set.component';

export const routes: Routes = [
    { path: '', component: MainComponent , children: [
        { path: 'cantos', component: CantosComponent},
        { path: 'sets', component: SetsComponent},
        { path: 'addCanto', component: AddCantoComponent},
        { path: 'addSet', component: AddSetComponent},
        { path: 'synchronize', component: SynchronizeComponent}
      ]},
    { path: 'synch', component: SynchronizeComponent }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(
        routes,
        { enableTracing: true }// <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule { }
