import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BenchMarkEntity } from '../models/bench-mark.entity';

@Injectable({
  providedIn: 'root'
})
export class BenchMarkService {

  private url: string = `${environment.API_URL}/bm`;

  constructor(private readonly http: HttpClient) { }

  listAll(): Observable<BenchMarkEntity[]> {
    return this.http.get<BenchMarkEntity[]>(this.url);
  }

  listById(id: number): Observable<BenchMarkEntity> {
    return this.http.get<BenchMarkEntity>(`${this.url}/${id}`);
  }

  add(object: BenchMarkEntity): Observable<any> {
    return this.http.post<BenchMarkEntity>(this.url, object);
  }

  update(object: BenchMarkEntity): Observable<any> {
    return this.http.put<BenchMarkEntity>(this.url, object);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<string>(`${this.url}/${id}`);
  }

}
