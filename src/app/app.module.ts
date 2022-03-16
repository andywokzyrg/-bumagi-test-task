import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {InputModule} from "./shared/ui/input/input.module";
import {ButtonModule} from "./shared/ui/button/button.module";
import {UserItemModule} from "./shared/components/user-item/user-item.module";
import {PasswordInputModule} from "./shared/ui/password-input/password-input.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TabItemModule} from "./shared/components/tab-item/tab-item.module";
import {NotificationItemModule} from "./shared/components/notification-item/notification-item.module";

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
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        InputModule,
        ButtonModule,
        UserItemModule,
        PasswordInputModule,
        TabItemModule,
        NotificationItemModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
