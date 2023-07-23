import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MyLoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-emp-data',
  templateUrl: './add-emp-data.component.html',
  styleUrls: ['./add-emp-data.component.less']
})
export class AddEmpDataComponent {
  empForm = new FormGroup({
    DesignName: new FormControl(''),
    DesignNumber: new FormControl(''),
  });
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private myLoginService: MyLoginService
  ) {}
  
  onSubmitClick(): void {
    console.log(this.empForm.value);
    this.myLoginService.insertDesignData(this.empForm.value);
    this.dialogRef.close();
  }
}
