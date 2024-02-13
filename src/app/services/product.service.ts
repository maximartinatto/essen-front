import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";
import { ProductDto } from "../models/product.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productURL = environment.productsURL

    constructor(
        private http: HttpClient
    ) {}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.productURL)
    }

    getProductId(id: number): Observable<ProductDto>{
        return this.http.get<ProductDto>(`${this.productURL}/${id}`)
    }

    createProduct(product: Product): Observable<Product>{
        return this.http.post<Product>(`${this.productURL}`, product)
    }

    updateProduct(product: Product, id: number): Observable<Product>{
        return this.http.patch<Product>(`${this.productURL}/${id}`, product)
    }

    deleteProduct(id: number): Observable<Product>{
        return this.http.delete<Product>(`${this.productURL}/${id}`)
    }

}