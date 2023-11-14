import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  ACCESS_KEY: string = 'vW9zMo3j5cYJ2ZTs3OUR1qO7AtQqKw1W1a9Hc41Jg0k';
  images: Image[] = [];

  private http = inject(HttpClient);

  constructor() { }

  getImages() {
    this.http.get<Image[]>(`https://api.unsplash.com/photos/?client_id=${this.ACCESS_KEY}`).subscribe((response) => {
      this.images = response;
    })
  }

  getImageFromDB(id: string) {
    return this.http.get<Image>(`https://api.unsplash.com/photos/${id}/?client_id=${this.ACCESS_KEY}`);
  }

  getImageFromImages(id: string) {
    return this.images.find((image: Image) => image.id === id);
  }
}

export interface Image {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: ImageLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  user: User;
}

export interface ImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface TopicSubmissions {
  wallpapers?: ArchitectureInterior;
  "architecture-interior"?: ArchitectureInterior;
  "street-photography"?: ArchitectureInterior;
  film?: ArchitectureInterior;
  "textures-patterns"?: ArchitectureInterior;
  "business-work"?: ArchitectureInterior;
  travel?: ArchitectureInterior;
}

export interface ArchitectureInterior {
  status: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
