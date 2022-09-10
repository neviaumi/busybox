import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroFolderPlus } from '@ng-icons/heroicons/outline';

import { generateTestIdWithPrefix } from '../../test-helpers/test-id';
import { ButtonComponent } from '../button/button.component';
import { Variant } from '../variant';

@Component({
  imports: [CommonModule, NgIconComponent, ButtonComponent],
  providers: [provideIcons({ heroFolderPlus })],
  selector: 'ngx-file-upload',
  standalone: true,
  styles: [],
  template: `
    <input
      (change)="onFileUpload()"
      type="file"
      class="tw-hidden"
      [attr.accept]="acceptFileType"
      [attr.data-testid]="testId + '-hidden-input'"
      #hiddenUploadInput
    />
    <ngx-button
      (click)="triggerFileUpload()"
      [data-testid]="testId"
      buttonType="button"
      [variant]="Variant.Secondary"
    >
      <span class="tw-flex tw-items-center tw-justify-center tw-gap-0.5">
        <ng-icon name="heroFolderPlus"></ng-icon>
        <ng-content></ng-content>
      </span>
    </ngx-button>
  `,
})
export class FileUploadComponent {
  @Input() 'data-testid' = '';

  Variant = Variant;

  @ViewChild('hiddenUploadInput')
  hiddenUploadInput?: ElementRef<HTMLInputElement>;

  @Output() upload: EventEmitter<File> = new EventEmitter<File>();

  @Input() acceptFileType = '*';

  triggerFileUpload() {
    this.hiddenUploadInput?.nativeElement.click();
  }

  async onFileUpload() {
    const target = this.hiddenUploadInput?.nativeElement;
    const uploadFile = target?.files?.item(0);
    if (!uploadFile) return;
    this.upload.emit(uploadFile);
  }

  get testId() {
    return generateTestIdWithPrefix({
      id: this['data-testid'],
      prefix: 'ngx-file-upload',
    });
  }
}
