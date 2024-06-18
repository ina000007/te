import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Note } from '../model/Note';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addNote(note: Note){
    return this.http.post(environment.apiUrl, note);
  }

  getNotes():Observable<Array<Note>>{
    return this.http.get<Array<Note>>(environment.apiUrl);
  }

  deleteNote(id: string){
    // return this.http.delete(environment.apiUrl+'/'+id);
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }

  updateNote(note: Note){
    // return this.http.delete(environment.apiUrl+'/'+id);
    return this.http.put(`${environment.apiUrl}/${note.id}`, note);
  }
}
