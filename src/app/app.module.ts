import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from './app.routes';
import { MainComponent } from './main/main.component';
import { SynchronizeComponent } from './synchronize/synchronize.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SidebarComponent,
        SynchronizeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule
    ]
})
export class AppModule { }
