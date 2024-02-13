import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Catalog } from "../interfaces/catalog";

@Injectable({
    providedIn: 'root'
})

export class CatalogService {
    catalogURL = environment.catalogURL

    constructor(private http: HttpClient) {}

    getCatalog(): Observable<Catalog[]>{
        return this.http.get<Catalog[]>(this.catalogURL)
    }
    getCatalogById(id: number): Observable<Catalog>{
        return this.http.get<Catalog>(`${this.catalogURL}/${id}`)
    }
}