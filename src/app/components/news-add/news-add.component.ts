import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [CommonModule, ImagePreviewComponent, ReactiveFormsModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsAddComponent {
  @Output()
  close = new EventEmitter<void>();
  cdr = inject(ChangeDetectorRef);
  preview = '';
  newsForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    text: new FormControl('', { nonNullable: true }),
    image: new FormControl('', { nonNullable: true })
  });

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
          this.preview = e.target.result;
          this.cdr.markForCheck();
        };
        reader.readAsDataURL(imgFile);
      }
    }
  }

  /**
   * Удалить выбранное изображение
   */
  onDeletePreview(): void {
    this.preview = '';
    this.newsForm.get('image')?.reset();
  }
}
