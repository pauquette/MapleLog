export class Link {
    public href: string;
}

export class EntryLinks {
    update: Link;
    delete: Link;
}

export class Entry {
    id: number;
    name: string;
    gallons: number;
    sugar_content: number;
    location: string;
    timestamp: string;
    links: EntryLinks

    public constructor() {}

    public static fromJson(json: any): Entry {
        const entry = new Entry();
        entry.deserialize(json);
        return entry;
    }

    public deserialize(json: any) {
        this.name = json.name;
        this.gallons = json.gallons;
        this.sugar_content = json.sugar_content;
        this.location = json.location;
        this.timestamp = json.timestamp;
    }

    public serialize(): any {
        return {
            'name': this.name,
            'gallons': this.gallons,
            'sugar_content': this.sugar_content,
            'location': this.location,
            'timestamp': this.timestamp
        }
    }
}