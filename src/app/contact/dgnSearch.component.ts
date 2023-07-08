import { Component, Input } from '@angular/core';
import { PeriodicElement } from '../constant';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddEmpDataComponent } from './popup/add-emp-data/add-emp-data.component';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];

@Component({
  selector: 'app-dgnSearch',
  templateUrl: './dgnSearch.component.html',
  styleUrls: ['./dgnSearch.component.less'],
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule, MatInputModule, MatIconModule]
})

export class DgnSearchComponent {
  @Input() contactValue: string='';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog){

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
}
