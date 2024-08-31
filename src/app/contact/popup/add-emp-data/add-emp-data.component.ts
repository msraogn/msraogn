import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/store/services/home.service';

@Component({
  selector: 'app-add-emp-data',
  templateUrl: './add-emp-data.component.html',
  styleUrls: ['./add-emp-data.component.less']
})
export class AddEmpDataComponent {
  empForm = new FormGroup({
    DesignName: new FormControl('', Validators.required),
    DesignDescription: new FormControl('', Validators.required),
  });
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private myLoginService: HomeService
  ) { }

  onSubmitClick(): void {
    if (this.empForm.valid) {
      this.myLoginService.insertDesignData(this.empForm.value).subscribe((res) => {
        if (res) {
          alert('Suceesss');
        }
      });
      this.dialogRef.close();
    }
  }
  
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    // if (file) {
    //   this.uploadService.upload(file).subscribe(
    //     (event: any) => {
    //       if (event.type === HttpEventType.UploadProgress) {
    //         this.progressInfos[idx].value = Math.round(
    //           (100 * event.loaded) / event.total
    //         );
    //       } else if (event instanceof HttpResponse) {
    //         const msg = 'Uploaded the file successfully: ' + file.name;
    //         this.message.push(msg);
    //         this.imageInfos = this.uploadService.getFiles();
    //       }
    //     },
    //     (err: any) => {
    //       this.progressInfos[idx].value = 0;
    //       const msg = 'Could not upload the file: ' + file.name;
    //       this.message.push(msg);
    //     }
    //   );
    // }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
}
