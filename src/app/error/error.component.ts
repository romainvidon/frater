import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() input: string;
  @Input() error: string;
  
  constructor() { }

  ngOnInit() {}

}
