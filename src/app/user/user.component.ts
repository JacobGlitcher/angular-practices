import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  private randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

  selectedUser: User = DUMMY_USERS[this.randomIndex]

  get avatarSrc(): string {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  get altText(): string {
    return `${this.selectedUser.name} Avatar`;
  }

  onSelectUser(): void {
    console.log('clicked!')
  }
}
