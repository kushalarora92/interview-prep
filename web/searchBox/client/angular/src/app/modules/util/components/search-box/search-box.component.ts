import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'util-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;
  submitted: boolean;
  @Output() onSubmitEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.onSubmitEvent.emit(this.f.searchText.value);
  }
}
