import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _baseUrl = 'https://fakestoreapi.com';

  public getProducts(): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/products`);
  }

  public getProductById(id: number): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/products/${id}`);
  }

  public addProduct(product: any): Observable<any> {
    return this._http.post<any>(`${this._baseUrl}/products`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this._http.put<any>(
      `${this._baseUrl}/products/${product.id}`,
      product,
    );
  }

  removeProduct(id: number): Observable<any> {
    return this._http.delete<any>(`${this._baseUrl}/products/${id}`);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this._http.get<any>(
      `${this._baseUrl}/products/category/${category}`,
    );
  }
}
