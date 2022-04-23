import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiServerUrl = environment.apiBaseUrl;

  public choixmenu : string  = 'A';

  public dataForm:  FormGroup;

  listData : CategoryDto[];

  constructor(private http: HttpClient) {
  }

  /***************************** CategoryDTO    *************/

  public getCategorieDTOs(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/all`);
  }

  public getCategorieDTOsOrderByIdDesc(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/searchAllCategoriesOrderByIdDesc`);
  }

  public getCategoryDtoById(categoryId: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/findById/${categoryId}`);
  }

  public getCategoryDtoByDesignation(designation: string): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/${designation}`);
  }

  public addCategoryDto(categoryDTO: CategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(`${this.apiServerUrl}/categories/create`, categoryDTO);
  }

  public updateCategoryDto(categoryId: number, categoryDTO: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(`${this.apiServerUrl}/categories/update/${categoryId}`, categoryDTO);
  }

  public deleteCategoryDto(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categories/delete/${categoryId}`);
  }

}
