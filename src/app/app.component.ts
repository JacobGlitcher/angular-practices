import { Component } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { TasksComponent } from './tasks/tasks.component'
import { DUMMY_USERS } from './dummy-users'
import { User } from './user/user.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = DUMMY_USERS
  selectedUserId: string = ''

  get userNameById(): string {
    return (
      this.users.find((user: User): boolean => user.id === this.selectedUserId)
        ?.name || ''
    )
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id
  }
}
