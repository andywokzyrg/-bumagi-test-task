import {Component, Input, OnInit} from '@angular/core';
import {User} from "../shared/interfaces";


@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
    @Input() user!: User

    constructor() {
    }

    ngOnInit(): void {
    }

}
