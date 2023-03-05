import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../../common-service.service';
import * as $ from 'jquery';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  speciality = [];
  modalRef: BsModalRef;
  errorMessage: string;
  name;
  id;
  key;
  
  categoryListDTO: CategoryDto[];
  categoryformDTO = new CategoryDto();
  editForm: FormGroup;

  p: number = 1;
  searchText;

  constructor(
    private commonService: CommonServiceService,
    private crudApi: CategoryService,
    private modalService: BsModalService,
//    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getSpecialityList();
    this.getListCategoriesDTOsOrderDesc();
    this.formInit();
  }

  formInit() {
    /*
    this.editForm = this.fb.group({
      id: [''],
      categoryName: [''],
      description: [''],
    }) */
  }

  getSpecialityList() {
    this.commonService.getSpeciality().subscribe(
      (data: any[]) => {
        this.speciality = data;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getListCategoriesDTOsOrderDesc() {
    this.crudApi.getCategorieDTOsOrderByIdDesc().subscribe(
      (data: CategoryDto[]) => {
        this.categoryListDTO = data;
        console.log(data);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  /*
  getListCategoriesDTOsOrderDesc() {
    this.crudApi.getCategorieDTOsOrderByIdDesc().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTO = response;
      }
    )
  }*/

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
    // this.name = "";
    // this.id = "";
    // this.key = "";
  }

  editModal(template: TemplateRef<any>, special: CategoryDto) {
    this.id = special.id;
    // this.name = data[0].speciality;
    // this.id = data[0].id;
    // this.key = data[0].key;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });

    this.editForm.patchValue({
      id: special.id,
      categoryName: special.categoryName,
      description: special.description
    });
  }

  deleteModal(template: TemplateRef<any>, special) {
    this.id = special.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    this.crudApi.addCategoryDto(this.categoryformDTO).subscribe(
      response => {
        this.modalRef.hide();
        this.getListCategoriesDTOsOrderDesc();
      }
    );
    // let count = this.speciality.reverse()[0]['key'] + 1;
    // let id = this.speciality.reverse()[0]['id'] + 1
    // let params = {
    //   id : id,
    //   key : count,
    //   speciality : this.name
    // }
    // this.commonService.createSpeciality(params).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getSpecialityList();
    // })
    this.modalRef.hide();
    this.categoryformDTO = null;
  }

  update() {
    this.crudApi.updateCategoryDto(this.editForm.value.id, this.editForm.value)
    .subscribe((response) => {
      this.modalRef.hide();
      this.getListCategoriesDTOsOrderDesc();
    });
    this.modalRef.hide();
  }

  /*
  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    }; */
    // this.commonService.updateSpeciality(params,this.id).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getSpecialityList();
    // });
    /*
    this.modalRef.hide();
  }*/

  deleteCategory() {
    this.categoryListDTO = this.categoryListDTO.filter((a) => a.id !== this.id);
    this.crudApi.deleteCategoryDto(this.id).subscribe((data) => {
      this.modalRef.hide();
      this.getListCategoriesDTOsOrderDesc();
    });
  }

  deleteSpeciality() {
    this.speciality = this.speciality.filter((a) => a.id !== this.id);
    this.commonService.deleteSpeciality(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getSpecialityList();
    });
  }

  decline() {
    this.modalRef.hide();
  }

  btnColor() {
    document.getElementById('btn-yes').style.backgroundColor = '#00d0f1';
    document.getElementById('btn-yes').style.border = '1px solid #00d0f1';
    document.getElementById('btn-yes').style.color = '#fff';

    document.getElementById('btn-no').style.backgroundColor = '#fff';
    document.getElementById('btn-no').style.border = '1px solid #fff';
    document.getElementById('btn-no').style.color = '#000';
  }

  btnColorNo() {
    document.getElementById('btn-no').style.backgroundColor = '#00d0f1';
    document.getElementById('btn-no').style.border = '1px solid #00d0f1';
    document.getElementById('btn-no').style.color = '#fff';

    document.getElementById('btn-yes').style.backgroundColor = '#fff';
    document.getElementById('btn-yes').style.border = '1px solid #fff';
    document.getElementById('btn-yes').style.color = '#000';
  }
}
