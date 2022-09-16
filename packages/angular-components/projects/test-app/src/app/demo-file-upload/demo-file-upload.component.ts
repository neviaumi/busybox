import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ButtonComponent,
  FileUploadComponent,
  PreviewImageComponent,
} from '@busybox/ngx-components';

type fileUploadOnChange = (value: string) => void;
@Component({
  imports: [CommonModule, FileUploadComponent, PreviewImageComponent],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadInputComponent,
    },
  ],
  selector: 'app-file-upload-input',
  standalone: true,
  template: `
    <section class="tw-flex tw-flex-col tw-justify-center">
      <ngx-preview-image
        *ngIf="value"
        [value]="value"
        data-testid="demo"
      ></ngx-preview-image>
      <ngx-file-upload
        data-testid="demo"
        accept="image/*"
        (upload)="onFileUpload($event)"
      >
        Click to upload
      </ngx-file-upload>
    </section>
  `,
})
export class FileUploadInputComponent implements ControlValueAccessor {
  value = '';

  onTouched: Function = () => {};

  disabled = false;

  onChange: fileUploadOnChange = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: fileUploadOnChange): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFileUpload(file: File) {
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        this.onTouched();
        this.onChange(reader.result as string);
        this.value = reader.result as string;
      },
      false,
    );
    reader.readAsDataURL(file);
  }
}

@Component({
  imports: [
    JsonPipe,
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    FileUploadInputComponent,
  ],
  selector: 'app-demo-file-upload',
  standalone: true,
  template: `
    <form [formGroup]="demoForm" (ngSubmit)="onSubmit()">
      <app-file-upload-input
        formControlName="uploadImage"
      ></app-file-upload-input>
      <ngx-button [buttonType]="'submit'">Submit</ngx-button>
    </form>
    <pre *ngIf="value">
      {{ value }}
    </pre
    >
  `,
})
export class DemoFileUploadComponent {
  value: any = null;

  demoForm = new FormGroup({
    uploadImage: new FormControl(),
  });

  onSubmit() {
    this.value = JSON.stringify(this.demoForm.value, null, 4);
  }
}
