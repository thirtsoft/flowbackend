import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /**
   *      CategoryDTO
   */


  public getAllActivesCategoriesDTOs(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/search-all-active-categories`);
  }

  public getCategoryDTOById(catId: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/findById/${catId}`);
  }

  public addCategoryDTO(catDTO: CategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(`${this.apiServerUrl}/categories/create`, catDTO);
  }

  public updateCategoryDTO(catId: number, catDTO: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(`${this.apiServerUrl}/categories/update/${catId}`, catDTO);
  }

  public deleteCategoryDTO(catId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categories/delete-category/${catId}`);
  }

}
