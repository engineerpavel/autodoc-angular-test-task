import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NewsAddComponent } from './components/news-add/news-add.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NewsAddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        // using status here for transition
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(400, style({ opacity: 0 }))])
    ])
  ]
})
export class AppComponent {
  showPopup = false;

  /**
   * Закрыть попап
   */
  onClosePopup(): void {
    this.showPopup = false;
  }

  /**
   * Показать попап добавления новости
   */
  onShowPopup(): void {
    this.showPopup = true;
  }
}
