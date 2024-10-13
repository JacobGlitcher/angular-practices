import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';

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
  selectedUser: WritableSignal<User> = signal(this.getRandomUser())

  avatarSrc: Signal<string> = computed(() => `assets/users/${this.selectedUser().avatar}`)
  altText: Signal<string> = computed(() => `${this.selectedUser().name} Avatar`)

  private getRandomUser(): User {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }

  onSelectUser(): void {
    this.selectedUser.set(this.getRandomUser());
  }
}
