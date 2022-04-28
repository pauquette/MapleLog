import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entry.resource';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EntryService } from 'src/app/service/entry.service';


@Component({
  selector: 'entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: Entry[] = [];
  searchDescription: string;

  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit(): void {
    this.retreiveEntries();
  }

  private retreiveEntries() {
    this.entryService.getEntries()
    .then(entries => this.entries = entries)
  }

  public deleteEntry(entry: Entry) {
    this.entryService.deleteEntry(entry)
    .then(() => this.retreiveEntries())
  }

  public editEntry(entry: Entry) {
    this.router.navigate(['/entries', entry.id, 'edit'])
  }

  public createEntry() {
    this.router.navigate(['/entries/create'])
  }
}
