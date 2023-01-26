import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'invapp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(UserComponent) user!: UserComponent;

  ngAfterContentInit(): void {
    this.user.userName = 'Muhammad Noman Ajmal'
  }
}
