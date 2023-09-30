import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /**
   * ProductDTO
   */

  public getALLProductDTOs(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/all`);
  }

  public getAllActivesProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-all-active-products`);
  } 

  public getProductDTOById(prodId: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/findById/${prodId}`);
  }

  public addProductDTO(prodDto: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.apiServerUrl}/products/create`, prodDto);
  }

  public addProductDTOWithPhoto(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/create-with-file`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public addProductDtoWithPhotoInFolder(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/create-with-file-In-folder`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public updateProductDTO(prodId: number, prodDTO: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.apiServerUrl}/products/update/${prodId}`, prodDTO);
  }

  public getPhotoProductDTO() {
    return this.http.get(`${this.apiServerUrl}/products/photoProduct`);
  }

  public getPhotoProductInFolder() {
    return this.http.get(`${this.apiServerUrl}/products/photoProductInFolder`);
  }

  public uploadPhotoProductDTO(file: File, idProduct: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('photoProduct', file);
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/uploadProductPhoto/${idProduct}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public uploadPhotoOfProductInFolder(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/uploadProductPhotoInFolder/${id}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


  public incrementQuantityProductDTO(prodDTO: ProductDto) {
    prodDTO.quantity++;
  }

  public decrementQuantityProductDTO(prodDTO: ProductDto) {
    prodDTO.quantity--;
  }

  public deleteProductDTO(prodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete-product/${prodId}`);
  }
}               
