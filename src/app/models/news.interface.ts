export interface NewsArrInterface {
  news: [NewsInterface];
}

export interface NewsInterface {
  categoryType: string;
  description: string;
  fullUrl: string;
  id: number;
  publishedDate: string;
  title: string;
  titleImageUrl: string;
  url: string;
}
