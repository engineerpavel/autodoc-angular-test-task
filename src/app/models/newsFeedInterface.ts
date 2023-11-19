export interface NewsFeedArrInterface {
  news: [NewsFeedInterface];
}

export interface NewsFeedInterface {
  categoryType: string;
  description: string;
  fullUrl: string;
  id: number;
  publishedDate: string;
  title: string;
  titleImageUrl: string;
  url: string;
}

export interface NewsDetailInterface {
  id: number;
  title: string;
  description: string;
  text: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}
