import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
    input = new FormControl()
    onChange: any
    onTouch: any

    constructor() {
    }

    ngOnInit(): void {
        this.input.valueChanges.subscribe((value) => {
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
        this.input.setValue(value)
    }
}
