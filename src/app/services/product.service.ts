import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';
  listData : ProductDto[];

  formData:  FormGroup;

  constructor(private http: HttpClient) {
  }


  /************   ProductDto  ***************/

  public getProductDtos(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/all`);
  }

  public getProductDtosOrderByIdDesc(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchAllProductOrderByIdDesc`);
  }

  public getProductDtoById(articleId: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/findById/${articleId}`);
  }

  public getProductDtoByReference(reference: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/searchbyReference/${reference}`);
  }

  public addProductDto(prodDto: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.apiServerUrl}/products/create`, prodDto);
  }

  public addProductDtoWithPhoto(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/createWithFile`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public addProductDtoWithPhotoInFolder(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/createWithFileInFolder`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }


  public updateProductDto(articleId: number, prodDto: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.apiServerUrl}/products/update/${articleId}`, prodDto);
  }

  public uploadPhotoProductDto(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiServerUrl+'/products/uploadArticlePhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public uploadPhotoProductDtoInFolder(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiServerUrl+'/products/uploadArticlePhotoInFolder/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getPhotoArticle() {
    return this.http.get(`${this.apiServerUrl}/products/photoArticle`);
  }

  public deleteProductDto(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete/${articleId}`);
  }


  incrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite++;

  }

  decrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite--;

  }


}
