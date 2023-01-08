export interface IPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
      media_details: { sizes: { medium: { source_url: string } } };
    }[];
  };
}
