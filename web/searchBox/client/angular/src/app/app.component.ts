import { Component } from '@angular/core';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-app';
  searchItems: Array<String>;

  constructor(private searchService: SearchService) {
    this.searchItems = new Array();
  }

  onSearchBoxSubmit(term) {
    this.searchService.searchWithTerm(term)
      .subscribe(items => {
        this.searchItems = items;
      }, error => {
        // this.error = error;
        // this.loading = false;
      })
  }
}
