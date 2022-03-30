import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {LoginData} from "../shared/interfaces";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
    isErrorVisible: boolean = false

    constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    }

    form = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    })

    showError() {
        this.form.reset()
        this.isErrorVisible = true
    }

    hideError() {
        this.isErrorVisible = false
    }

    submit() {
        const user: LoginData = {
            login: this.form.value.login,
            password: this.form.value.password
        }

        this.auth.login(user).subscribe(() => {
            this.form.reset()
            this.router.navigate(['users'])
        }, () => this.showError())
    }
}
