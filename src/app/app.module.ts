import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {InputModule} from "./shared/ui/input/input.module";
import {ButtonModule} from "./shared/ui/button/button.module";
import {UserItemModule} from "./shared/components/user-item/user-item.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    UsersPageComponent,
    EditPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputModule,
        ButtonModule,
        UserItemModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
