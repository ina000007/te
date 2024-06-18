import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(private service: DataService) { }

  @Input()
  notes: Array<Note> =  [];
  ngOnInit(): void {
    
  }

  @Output()
  deleteEvent = new EventEmitter();

  deleteItem(id: string){
    this.deleteEvent.emit(id);
  }

}
