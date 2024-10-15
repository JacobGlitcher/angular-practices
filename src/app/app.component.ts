import { Component } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { DUMMY_USERS } from './dummy-users'
import { User } from './user/user.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = DUMMY_USERS

  onSelectUser(id: string): void {
    console.log(id)
  }
}
