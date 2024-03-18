import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-matchup',
  standalone: true,
  imports: [],
  templateUrl: './matchup.component.html',
  styleUrl: './matchup.component.scss'
})
export class MatchupComponent {
  character!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.character = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
