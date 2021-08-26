interface ArtistList{
  href: string;
  items: Artist[];
  limit: number;
  next: string | null;
  offset: number;
  preivous: string | null;
  total: number;
}