import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { endpoint } from "./environment"

@Component({
  selector: 'app-root',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fg: FormGroup
  title = 'app-frontend';
  http = inject(HttpClient);
  users: any[] = []


  constructor() {
    this.fg = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
    });

    this.onList();
  }

  onAdd() {
    const value = this.fg.value;

    this.http.post(`${endpoint}/add`, value).subscribe((res) => {
      this.fg.reset();
      this.onList();
    })
  }

  onList() {
    this.http.get<any[]>(`${endpoint}/list`).subscribe((res: any[]) => {
      this.users = res
    })
  }
}


