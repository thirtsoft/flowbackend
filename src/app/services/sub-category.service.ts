import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategoryDto } from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /**
   * SubCategoryDTO
   */

  public getAllSubcategorieDTOs(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/all`);
  }

  public getAllSubcategorieDTOsOrderByIdDesc(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/searchAllSubCategoriesOrderByIdDesc`);
  }

  public getSubCategoryDTOById(scatId: number): Observable<SubCategoryDto> {
    return this.http.get<SubCategoryDto>(`${this.apiServerUrl}/subcategories/findById/${scatId}`);
  }

  public addSubCategoryDTO(subCategory: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.post<SubCategoryDto>(`${this.apiServerUrl}/subcategories/create`, subCategory);
  }

  public updateSubCategoryDTO(scatId: number, subCategory: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.put<SubCategoryDto>(`${this.apiServerUrl}/subcategories/update/${scatId}`, subCategory);
  }

  public getSubCategoryDTOByCategoryId(catId: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/subcategories/searchSubcategoryByCategoryId/${catId}`);
  }

  public deleteSubCategoryDTO(subCatId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/subcategories/delete/${subCatId}`);
  }

}
