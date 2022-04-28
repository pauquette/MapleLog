import { Injectable } from '@angular/core'
import { Entry } from '../entry.resource'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class EntryService {

    private entriesURL = 'http://localhost:8080/entry'
    private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Accepts': 'application/json', 'Content-Type': 'application/json'})

    public constructor(private http: HttpClient) {}

    public getEntries(): Promise<Entry[]> {
        return this.http.get(this.entriesURL, {headers: this.headers})
        .toPromise()
        .then(response => Entry.fromJson(response))
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Could not complete requested service operation', error);
        return Promise.reject(error.message || error);
    }

    public deleteEntry(entry: Entry): Promise<void> {
        return this.http.delete(entry.links.delete.href, {headers: this.headers})
        .toPromise()
        .then(response => null)
        .catch(this.handleError)
    }

    public getEntry(id: number): Promise<Entry> {
        return this.http.get(`${this.entriesURL}/${id}`, {headers: this.headers})
        .toPromise()
        .then(this.convertResponseToEntryResource)
        .catch(this.handleError)
    }

    private convertResponseToEntryResource(response: any): Entry {
        return Entry.fromJson(response.json)
    }

    public updateEntry(entry: Entry): Promise<Entry> {
        return this.http.post(entry.links.update.href, JSON.stringify(entry.serialize), {headers: this.headers})
        .toPromise()
        .then(this.convertResponseToEntryResource)
        .catch(this.handleError)
    }

    public createEntry(entry: Entry): Promise<Entry> {
        return this.http.post(`${this.entriesURL}`, JSON.stringify(entry.serialize), {headers: this.headers})
        .toPromise()
        .then(this.convertResponseToEntryResource)
        .catch(this.handleError)
    }
}