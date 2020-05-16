import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchSubject: BehaviorSubject<Array<String>>;
  public searchItems: Observable<Array<String>>;
  constructor(private http: HttpClient) {
    this.searchSubject = new BehaviorSubject<Array<String>>([]);
    this.searchItems = this.searchSubject.asObservable();
  }

  public get searchItemsValue(): Array<String> {
    return this.searchSubject.value;
  } 

  searchWithTerm(term) {
    return this.http.post<any>(`${environment.apiEndpoint}/search`, { term })
      .pipe(map(items => {
        this.searchSubject.next(items);
        return items;
      }))
  }
}
