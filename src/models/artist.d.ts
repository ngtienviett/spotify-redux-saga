interface Artist {
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  name: string;
  popularity: number;
  genres: string[];
}