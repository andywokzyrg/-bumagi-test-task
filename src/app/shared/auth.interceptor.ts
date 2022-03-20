import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('Authorization')

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `token ${token}`
                }
            })
        }

        return next.handle(request)
    }

}
