import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-dialog',
  templateUrl: './terms-dialog.component.html',
  styleUrls: ['./terms-dialog.component.css']
})
export class TermsDialogComponent implements OnInit {
  termosAceitos: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
