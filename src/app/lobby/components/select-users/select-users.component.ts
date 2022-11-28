import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { UserService } from 'src/app/entrance/services/user-service/user.service';
import { User } from 'src/app/model/user.interface';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.component.html',
  styleUrls: ['./select-users.component.scss'],
})
export class SelectUsersComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() addUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() removeUser: EventEmitter<User> = new EventEmitter<User>();

  searchUsername = new FormControl();
  filteredUsers: User[] = [];
  selectedUser: User = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.searchUsername.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((username: string) =>
          this.userService
            .findByUsername(username)
            .pipe(tap((users: User[]) => (this.filteredUsers = users)))
        )
      )
      .subscribe();
  }

  addUserToForm() {
    this.addUser.emit(this.selectedUser);
    this.filteredUsers = [];
    this.selectedUser = {} as User;
    this.searchUsername.setValue(null);
  }

  removeUserFromForm(user: User) {
    this.removeUser.emit(user);
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  displayFn(user: User): any | string {
    if (user) {
      return user.username;
    } else {
      return '';
    }
  }
}
