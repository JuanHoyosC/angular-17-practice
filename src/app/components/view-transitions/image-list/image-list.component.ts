import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent {

  constructor(public imageService: ImageService, private router: Router) {}

  goToImage(id: string) {
    this.router.navigateByUrl('view-transition/detail/' + id);    
  }
}
