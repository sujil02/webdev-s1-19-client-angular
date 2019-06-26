import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    websites: []
  };

  constructor(private router: Router,
              private userService: UserService) {
  }


  ngOnInit() {
  }

  register(user) {
    console.log(user);
    this.userService.register(user)
      .then(response => response.json())
      .then(users => {
        console.log(users);
        if (users != null) {
          this.router.navigate(['login']);
          window.alert('User successfully registered');
        }
      });
  }
}
