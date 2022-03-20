import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get('https://bumagi-frontend-test.herokuapp.com/users?status=1', {observe: 'response'})
    }
}
