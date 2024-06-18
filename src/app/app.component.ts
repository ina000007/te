import { Component, OnInit } from '@angular/core';
import { Note } from './model/Note';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'keep';
  // noteItem: any;
  // getNoteItem(item:any){
  //   this.noteItem = item;
  // }

  constructor(private service: DataService) { }
  noteList: Array<Note> = [];
  itemNote!: Note;

  getNoteItem(item: any) {
    this.itemNote = item;
    this.noteList.push(item);
  }

  deleteItem(id: any) {
    this.service.deleteNote(id).subscribe(data => {
      this.noteList = this.noteList.filter(item => item.id != id);
    });
  }


  ngOnInit(): void {
    this.service.getNotes().subscribe(data => {
      console.log(data);
      this.noteList = data;
    });
  }
}
