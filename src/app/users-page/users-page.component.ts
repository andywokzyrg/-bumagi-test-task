import {Component, OnInit} from '@angular/core';
import {UsersService} from "../shared/services/users.service";

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
    users: any
    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.getAllUsers()
    }

    getAllUsers() {
        this.usersService.getAll().subscribe(response => this.users = response)
        console.log(this.users)
    }
}
