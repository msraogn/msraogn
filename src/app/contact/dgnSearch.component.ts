import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddEmpDataComponent } from './popup/add-emp-data/add-emp-data.component';
import { MyLoginService } from '../services/login.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dgnSearch',
  templateUrl: './dgnSearch.component.html',
  styleUrls: ['./dgnSearch.component.less'],
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule,MatSortModule]
})

export class DgnSearchComponent implements OnInit {
  @Input() contactValue: string='';

  displayedColumns: string[] = ['DesignID', 'DesignName', 'DesignDescription', 'delete', 'Icon'];
  dataSource: any;
  designResults:any;
  @ViewChild(MatPaginator, { static:  true }) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(public dialog: MatDialog, private router: Router, private myLoginService:MyLoginService){
  }

  ngOnInit() {
    this.subscribeGetDesignsDetails()
  }

  ngAfterViewInit() {
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteClick(id: number) {
    this.myLoginService.deleteDesigns(id).subscribe(result => {
      if(result) {
        this.subscribeGetDesignsDetails();
      }
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddEmpDataComponent, {
      data: {name: 'madhu'},
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  viewClick(event:any) {
    this.router.navigate(["designview", event.DesignName]);
  }
  
  subscribeGetDesignsDetails() {
    this.myLoginService.getDesignsData().subscribe(result => {
      this.designResults = result[0];
      this.dataSource = new MatTableDataSource<any>(this.designResults);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    });
  }

}
