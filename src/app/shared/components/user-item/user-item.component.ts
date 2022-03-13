import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
    @Input() avatar: string | undefined
    @Input() username: string | undefined
    @Input() balance: string | undefined

    constructor() {
    }

    ngOnInit(): void {
    }

}
