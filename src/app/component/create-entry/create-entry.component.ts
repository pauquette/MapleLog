import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'src/app/entry.resource';
import { EntryService } from 'src/app/service/entry.service';
import { SaveEntryComponent } from '../save-entry/save-entry.component';

@Component({
  selector: 'create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent extends SaveEntryComponent {

  constructor(
    private entryService: EntryService,
    router: Router
  ) { super(router); }

  protected loadEntry(): Promise<Entry> {
      const entry = new Entry();
      entry.sugar_content = 0.0;
      return Promise.resolve(entry)
  }

  protected onSave() {
    this.entryService.createEntry(this.entry)
    .then(order => this.navigateToEntries());
  }

  protected getSaveButtonText(): string {
      return 'Create';
  }
}
