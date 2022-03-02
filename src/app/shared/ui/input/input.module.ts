import {NgModule} from "@angular/core";
import {InputComponent} from "./input.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [InputComponent],
    exports: [InputComponent],
    imports: [CommonModule]
})
export class InputModule {}
