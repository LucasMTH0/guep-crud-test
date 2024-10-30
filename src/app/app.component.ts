import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatabaseService} from './services/database/database.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'guep-crud-test';

  constructor(private databaseService: DatabaseService){
    this.databaseService.initializeDatabase();
  }

}
