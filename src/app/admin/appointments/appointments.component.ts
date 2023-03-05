import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  datatable: any;
  categoryListDTO: CategoryDto[];

  constructor(private crudApi: CategoryService) { }

  ngOnInit(): void {
    const table: any = $('table');
    this.datatable = table.DataTable();
    this.getAllCategoriesDTOsOrderDesc();
  }

  getAllCategoriesDTOsOrderDesc() {
    this.crudApi.getCategorieDTOsOrderByIdDesc().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTO = response;
      }
    )
  }

}
