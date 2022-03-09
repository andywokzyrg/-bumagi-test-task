import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordInputComponent),
            multi: true
        }
    ]
})
export class PasswordInputComponent implements OnInit, ControlValueAccessor {
    @ViewChild('input') passwordInput: ElementRef | undefined;
    @Input() placeholder!: string;
    onTouch: any
    onChange: any
    password = new FormControl()

    togglePassword () {
        if (this.passwordInput?.nativeElement.type === 'text') {
            this.passwordInput.nativeElement.type = 'password'
        } else {
            this.passwordInput!.nativeElement.type = 'text'
        }
    }

    constructor() {
    }

    ngOnInit(): void {
        this.password.valueChanges.subscribe((value) => {
            if (this.onChange) {
                this.onChange(value)
            }
        })
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn
    }

    writeValue(value: any): void {
        this.password.setValue(value)
    }
}
