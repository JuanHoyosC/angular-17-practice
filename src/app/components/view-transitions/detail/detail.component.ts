import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image, ImageService } from '../../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnChanges{
  @Input() id: string = '';
  image: Image | undefined = {} as Image;

  constructor(private imageService: ImageService, private router: Router){}

  ngOnChanges() {
    //Use cache
    this.image = this.imageService.getImageFromImages(this.id);
    if(!this.image) {
      this.imageService.getImageFromDB(this.id).subscribe(this.image);
    }
  }

  goBack() {
    this.router.navigateByUrl('/view-transition');
  }
}
