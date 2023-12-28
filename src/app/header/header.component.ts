import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this._activatedRoute.snapshot.url[0].path);
  }
}
