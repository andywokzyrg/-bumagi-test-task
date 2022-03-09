import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login (user: User): Observable<any> {
        return this.http.post('https://bumagi-frontend-test.herokuapp.com/auth', user)
    }
}
