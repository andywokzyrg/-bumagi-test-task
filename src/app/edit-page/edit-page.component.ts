import {Component, Input, OnInit} from '@angular/core';
import {User} from "../shared/interfaces";
import {EditPageOverlayService} from "../shared/services/edit-page-overlay.service";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
    @Input() user!: User

    constructor(private overlay: EditPageOverlayService, private fb: FormBuilder) {
    }

    form = this.fb.group({
        name: ['', Validators.required],
        fname: ['', Validators.required],
        mname: ['', Validators.required],
        status: ['', Validators.required]
    })

    closeOverlay() {
        this.overlay.close()
    }

    ngOnInit(): void {
    }

    submit() {
        this.overlay.close()
    }
}
