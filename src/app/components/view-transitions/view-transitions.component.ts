import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-transitions',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './view-tranticions.component.html',
  styleUrl: './view-transitions.component.css'
})
export class ViewTransitionsComponent {

  constructor(public imageService: ImageService) {
    this.imageService.getImages();
  }

}
