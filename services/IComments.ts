// Generated by https://quicktype.io

export interface IComments {
  id: number;
  post: number;
  parent: number;
  author: number;
  author_name: string;
  author_url: string;
  date: string;
  date_gmt: string;
  content: Content;
  link: string;
  status: string;
  type: string;
  author_avatar_urls: { [key: string]: string };
  meta: any[];
  _links: ICommentLinks;
  _embedded: Embedded;
}

export interface Embedded {
  up: EmbeddedUp[];
}

export interface EmbeddedUp {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  _links: UpLinks;
}

export interface UpLinks {
  self: Collection[];
  collection: Collection[];
  about: Collection[];
  author: Author[];
  replies: Author[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": Author[];
  "wp:attachment": Collection[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Collection {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Content {
  rendered: string;
}

export interface ICommentLinks {
  self: Collection[];
  collection: Collection[];
  up: LinksUp[];
}

export interface LinksUp {
  embeddable: boolean;
  post_type: string;
  href: string;
}
