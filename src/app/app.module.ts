import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryService } from './service/entry.service';
import { SaveOrderComponent } from './component/save-order/save-order.component';
import { EntriesComponent } from './component/entries/entries.component';
import { SaveEntryComponent } from './component/save-entry/save-entry.component';
import { CreateEntryComponent } from './component/create-entry/create-entry.component';
import { EditEntryComponent } from './component/edit-entry/edit-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveOrderComponent,
    EntriesComponent,
    SaveEntryComponent,
    CreateEntryComponent,
    EditEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
