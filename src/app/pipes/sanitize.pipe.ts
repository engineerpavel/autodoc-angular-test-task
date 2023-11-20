import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
  standalone: true
})
/**
 * Позвращает "безопасный" HTML
 */
export class SanitizePipe implements PipeTransform {
  sanitizer = inject(DomSanitizer);

  transform(rawData: string | undefined): SafeHtml {
    if (rawData === undefined) return '';
    return this.sanitizer.bypassSecurityTrustHtml(rawData);
  }
}
