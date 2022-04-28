import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entry.resource';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-save-entry',
  templateUrl: './save-entry.component.html',
  styleUrls: ['./save-entry.component.css']
})
export abstract class SaveEntryComponent implements OnInit {

  protected entry: Entry;

  constructor(private router: Router) { }

  protected abstract loadEntry(): Promise<Entry>
  protected abstract onSave(): any;
  protected abstract getSaveButtonText(): string;

  ngOnInit(): void {
    this.loadEntry().then(entry => this.entry = entry);
  }

  protected navigateToEntries() {
    this.router.navigate(['/entries'])
  }
}
