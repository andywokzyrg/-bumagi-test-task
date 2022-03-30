import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces";

export enum LoadedUserTypes {
    Active = 0,
    Stopped = 1,
    Blocked = 2,
    All = 3
}

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
    @Input() user!: User
    currentStatus!: string

    constructor() {
    }

    ngOnInit(): void {
        this.changeCurrentStatus()
    }

    changeCurrentStatus() {
        switch (this.user.status) {
            case 0: this.currentStatus = 'Активен'
                break
            case 1: this.currentStatus = 'Приостановлен'
                break
            case 2: this.currentStatus = 'Заблокирован'
                break
        }
    }

}
