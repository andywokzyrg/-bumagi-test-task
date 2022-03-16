import {NgModule} from "@angular/core";
import {TabItemComponent} from "./tab-item.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [TabItemComponent],
    exports: [TabItemComponent],
    imports: [CommonModule]
})
export class TabItemModule {}
