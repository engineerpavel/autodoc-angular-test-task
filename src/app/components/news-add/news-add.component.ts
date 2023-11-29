import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [CommonModule, ImagePreviewComponent],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsAddComponent {
  @Output()
  close = new EventEmitter<void>();
  cdr = inject(ChangeDetectorRef);
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
          this.cdr.markForCheck();
        };
        reader.readAsDataURL(imgFile);
        console.log('загрузили файл');
      }
    }
  }

  /**
   * Удалить выбранное изображение
   */
  onDeletePreview(): void {
    this.preview = '';
  }
}
