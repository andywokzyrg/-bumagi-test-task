import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/interfaces";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AuthPageComponent),
        multi: true
    }]
})
export class AuthPageComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    }

    form = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    })

    ngOnInit(): void {

    }

    submit() {
        const user: User = {
            login: this.form.value.login,
            password: this.form.value.password
        }

        this.auth.login(user).subscribe(() => {
            this.form.reset()
            this.router.navigate(['users'])
        }, () => this.form.reset())
    }
}
