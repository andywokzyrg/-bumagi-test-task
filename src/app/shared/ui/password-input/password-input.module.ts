import {NgModule} from "@angular/core";
import {PasswordInputComponent} from "./password-input.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [PasswordInputComponent],
    exports: [PasswordInputComponent],
    imports: [CommonModule]
})
export class PasswordInputModule {}
