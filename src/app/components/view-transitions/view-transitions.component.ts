import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-transitions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-tranticions.component.html',
  styleUrl: './view-transitions.component.css'
})
export class ViewTransitionsComponent {

  constructor(public imageService: ImageService) {
    this.imageService.getImages();
  }

}
