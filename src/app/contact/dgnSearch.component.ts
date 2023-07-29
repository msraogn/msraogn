import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddEmpDataComponent } from './popup/add-emp-data/add-emp-data.component';
import { MyLoginService } from '../services/login.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-dgnSearch',
  templateUrl: './dgnSearch.component.html',
  styleUrls: ['./dgnSearch.component.less'],
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule]
})

export class DgnSearchComponent implements OnInit {
  @Input() contactValue: string='';

  displayedColumns: string[] = ['DesignName', 'DesignDescription'];
  dataSource: any;
  designResults:any;
  @ViewChild(MatPaginator, { static:  true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private myLoginService:MyLoginService){
  }

  ngOnInit() {
    this.subscribeGetDesignsDetails()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddEmpDataComponent, {
      data: {name: 'madhu'},
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  subscribeGetDesignsDetails() {
    this.myLoginService.getDesignsData().subscribe(result => {
      this.designResults = result[0];
      this.dataSource = new MatTableDataSource<any>(this.designResults);
      this.dataSource.paginator = this.paginator;
    });
  }

}
