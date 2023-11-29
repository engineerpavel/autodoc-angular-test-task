import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsAddComponent {
  @Output()
  close = new EventEmitter<void>();
  preview = '';

  /**
   * Обработчик выбора изображения
   * @param event
   */
  selectImage(event: Event): void {
    const imgFiles = (event.target as HTMLInputElement).files;
    if (imgFiles) {
      const imgFile = imgFiles.item(0);
      if (imgFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
        reader.readAsDataURL(imgFile);
        console.log('загрузили файл');
      }
    }
  }
}
