import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DonationService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Users
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  // Donations
  addDonation(donation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/donations`, donation);
  }

  getAllDonations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/donations`);
  }

  getUserDonations(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/donations/${username}`);
  }

  updateDonation(id: string, donation: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/donations/${id}`, donation);
  }

  deleteDonation(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/donations/${id}`);
  }
}
