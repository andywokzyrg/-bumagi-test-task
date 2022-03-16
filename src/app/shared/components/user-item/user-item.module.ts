import {NgModule} from "@angular/core";
import {UserItemComponent} from "./user-item.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [UserItemComponent],
    exports: [UserItemComponent],
    imports: [CommonModule]
})
export class UserItemModule {
}
