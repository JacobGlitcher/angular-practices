import { Component, EventEmitter, Input, Output } from '@angular/core'

import { User } from './user.interface'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User
  @Output() selectUser = new EventEmitter<string>()

  get avatarSrc(): string {
    return `assets/users/${this.user.avatar}`
  }

  get altText(): string {
    return `${this.user.name} Avatar`
  }

  onSelectUser(): void {
    this.selectUser.emit(this.user.id)
  }
}
