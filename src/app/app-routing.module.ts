import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {UsersPageComponent} from "./users-page/users-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";

const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'auth', component: AuthPageComponent},
    {path: 'users', component: UsersPageComponent},
    {path: 'edit', component: EditPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
