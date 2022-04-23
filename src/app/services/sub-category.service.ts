import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategoryDto } from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiServerUrl = environment.apiBaseUrl;

  public choixmenu : string  = 'A';

  public dataForm:  FormGroup;

  listData : SubCategoryDto[];

  formData:  SubCategoryDto;

  constructor(private http: HttpClient) {
  }

  /********************* SubCategoryDto ******************/

  public getSubCategoryDtos(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/all`);
  }

  public getALLSuCategoryDtosOrderByIdDesc(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/searchAllSubCategoriesOrderByIdDesc`);
  }

  public getSubCategoryDtoById(subCatId: number): Observable<SubCategoryDto> {
    return this.http.get<SubCategoryDto>(`${this.apiServerUrl}/subcategories/findById/${subCatId}`);
  }

  public addSubCategoryDto(subCatDto: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.post<SubCategoryDto>(`${this.apiServerUrl}/subcategories/create`, subCatDto);
  }

  public updateSubCategoryDto(subCatId: number, subCatDto: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.put<SubCategoryDto>(`${this.apiServerUrl}/subcategories/update/${subCatId}`, subCatDto);
  }

  public deleteSubCategoryDto(subCatId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/subcategories/delete/${subCatId}`);
  }

}
