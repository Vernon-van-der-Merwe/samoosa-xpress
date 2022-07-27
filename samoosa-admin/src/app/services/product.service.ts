import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  async create(product: Product) {
    const result = await this.http.post(`${environment.functionsUrl}/product-create`, product)
    return result
  }

  async get(id: string) {
    const result = await this.http.post(`${environment.functionsUrl}/product`, id)
    return result
  }

  getAll() {
    return this.http.get<Product[]>(`${environment.functionsUrl}/product`)
  }

  async update(product: Product) {
    const result = await this.http.post(`${environment.functionsUrl}/product-update`, product)
    return result
  }

  async delete(id: string) {
    const result = await this.http.post(`${environment.functionsUrl}/product-remove`, id)
    return result
  }
}
