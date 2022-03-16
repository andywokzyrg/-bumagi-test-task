import {NgModule} from "@angular/core";
import {NotificationItemComponent} from "./notification-item.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [NotificationItemComponent],
    exports: [NotificationItemComponent],
    imports: [CommonModule]
})
export class NotificationItemModule {}
