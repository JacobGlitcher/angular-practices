import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get avatarSrc(): string {
    return `assets/users/${this.avatar}`
  }

  get altText(): string {
    return `${this.name} Avatar`
  }

  onSelectUser(): void {
  }
}
