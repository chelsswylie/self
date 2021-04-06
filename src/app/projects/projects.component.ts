import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  names: string;

  constructor(private starWarsService) {}

  ngOnInit(): void {
    this.starWarsService.getNames().subscribe((data: any) => {
      this.names = data.response.names;
    });
  }
}
