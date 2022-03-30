import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../interfaces";

@Injectable({providedIn: 'root'})
export class UsersService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<User[]> {
        return this.http.get('https://bumagi-frontend-test.herokuapp.com/users', {observe: 'response'})
            .pipe(
                map((response: any) => {
                    return Array.from(response.body)
                })
            )
    }

    getBlocked(): Observable<User[]> {
        return this.http.get('https://bumagi-frontend-test.herokuapp.com/users?status=2', {observe: 'response'})
            .pipe(map((response: any) => {
                return Array.from(response.body)
            }))
    }

    getActive(): Observable<User[]> {
        return this.http.get('https://bumagi-frontend-test.herokuapp.com/users?status=0', {observe: 'response'})
            .pipe(map((response: any) => {
                return Array.from(response.body)
            }))
    }
}


