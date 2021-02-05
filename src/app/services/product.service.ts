import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/products";

  constructor(
    private httpClient: HttpClient
  ) { }

  getProductsList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  updateMultipleProducts(products: any): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/updateMultipleProd`, products);
  }

  deleteProduct(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getProductsByType(productType: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/productType/${productType}`);
  }

  getProductsScreenWide(screenWide: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/productScreenWide/${screenWide}`);
  }

  getProductsByPrice(minPrice: number, maxPrice: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/price/${minPrice}/${maxPrice}`);
  }

  getProductsByManufacturer(manufacturer: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/manufacturer/${manufacturer}`);
  }

  getProductsBySortType(sortType: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/sort/${sortType}`);
  }

  getProductTypesList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseURL}/productTypes`);
  }

}
