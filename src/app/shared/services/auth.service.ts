import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginData} from "../interfaces";
import {tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    token!: string | null

    login(user: LoginData): any {
        return this.http.post('https://bumagi-frontend-test.herokuapp.com/auth', user, {observe: 'response'})
            .pipe(
                tap(response => {
                    this.token = response.headers.get('Authorization')!.replace(/token/, "").trim()
                    localStorage.setItem('Authorization', this.token)
                })
            )
    }
}
