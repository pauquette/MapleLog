import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Entry } from 'src/app/entry.resource';
import { EntryService } from 'src/app/service/entry.service';
import { SaveEntryComponent } from '../save-entry/save-entry.component';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent extends SaveEntryComponent {

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    router: Router
  ) { super(router); }

  protected loadEntry(): Promise<Entry> {
      return new Promise<Entry>(resolver => {
        this.route.paramMap
        .pipe(switchMap(params => this.entryService.getEntry(+params.get('id')!)))
        .subscribe(entry => resolver(entry))
      });
  }

  protected onSave() {
    this.entryService.updateEntry(this.entry).then(entry => this.navigateToEntries());
  }

  protected getSaveButtonText(): string {
      return 'Update';
  }
}
