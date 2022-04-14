import {Component, OnInit} from '@angular/core';
import {UsersService} from "../shared/services/users.service";
import {Observable} from "rxjs";
import {User} from "../shared/interfaces";
import {EditPageOverlayService} from "../shared/services/edit-page-overlay.service";

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
    users$: Observable<User[]> | undefined

    constructor(private usersService: UsersService, private overlay: EditPageOverlayService) {
    }

    openOverlay() {
        this.overlay.open()
    }

    ngOnInit(): void {
        this.users$ = this.usersService.getAll()
        console.log(this.users$)
    }

    showAllUsers() {
        this.users$ = this.usersService.getAll()
    }

    showActiveUsers() {
        this.users$ = this.usersService.getActive()
    }

    showBlockedUsers() {
            this.users$ = this.usersService.getBlocked()
    }
}
