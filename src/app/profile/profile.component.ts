import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  userId: String;
  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(params =>
        this.userService.findUserById(params['userId'])
          .then(user => {
            this.user = user;
          })
      );
  }

}
