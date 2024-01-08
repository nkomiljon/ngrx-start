import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { login } from "./login-page.actions";



@Component({
    selector: 'app-login-page',
    standalone: true,
    template: ``
})
export class LoginPageComponent {

    constructor(private store: Store) { } 
    
    onSubmit(username: string, password: string) {
        this.store.dispatch(login({ username: username, password: password }));
    }
}