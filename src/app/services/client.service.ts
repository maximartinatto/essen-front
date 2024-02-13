import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment } from "../interfaces/payment";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    clientURL = environment.clientURL

    constructor(
        private readonly http: HttpClient
    ) {}

    createClient (client: Payment): Observable<Payment>{
        return this.http.post<Payment>(this.clientURL, client)
    }

    getClients(): Observable<Payment[]>{
        return this.http.get<Payment[]>(this.clientURL)
    }
    deleteClient(id: number): Observable<Payment>{
        return this.http.delete<Payment>(`${this.clientURL}/${id}`)
    }
}