import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { BackendServcieService } from './backend/backend-servcie.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'bank-list';
  displayedColumns: string[] = ['bank_id', 'bank_name', 'branch', 'ifsc'];

  dataSource = new MatTableDataSource<any>();

  //default selected 
  selectedCity : any = "MUMBAI"

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _service: BackendServcieService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBankListofCity(this.selectedCity);
  }

  getBankListofCity(city){
    this.dataSource.data = []
    this._service.getBankLists(city).subscribe(data => {
      if (data) {
        console.log(data)
        this.dataSource.data = data
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getBankLists(event){
    console.log("event",event);
    let selectedCity = event.value;
    console.log("selected City",selectedCity);
    this.getBankListofCity(selectedCity);
  }
}



