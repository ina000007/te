import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { DataService } from 'src/app/services/data.service';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  noteTitle: string='';
  noteText: string='';
  constructor(private service: DataService) { }

  @Output()
  addEvent = new EventEmitter();

  ngOnInit(): void {
  }

  AddNote(){
    if(this.noteText!='' || this.noteTitle!=''){
      let note: Note = {id:uuid(), title: this.noteTitle, text:this.noteText};
      this.service.addNote(note).subscribe(data => {
        console.log(data);
        this.addEvent.emit(data);
      });
      this.noteText='';
      this.noteTitle='';
    }
  }
}
