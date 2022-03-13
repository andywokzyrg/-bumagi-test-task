import {NgModule} from "@angular/core";
import {UserItemComponent} from "./user-item.component";
import {CommonModule} from "@angular/common";
import {SelectModule} from "../../ui/select/select.module";

@NgModule({
    declarations: [UserItemComponent],
    exports: [UserItemComponent],
    imports: [CommonModule, SelectModule]
})
export class UserItemModule {
}
