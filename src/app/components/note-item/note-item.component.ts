import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  constructor(private service: DataService) { }
  
  @Input()
  note!: Note;
  ngOnInit(): void {
  }

  @Output()
  deleteEvent = new EventEmitter();

  deleteNote(id: string){
    this.deleteEvent.emit(id);
  }

}
