// types/global.d.ts

export {};

declare global {
  interface IPost {
    id: number;
    title: string;
    body: string;
  }

  interface Manga {
    title: string;
    description: string;
    image: string;
    latestChapter: string;
  }

  interface SearchManga {
    title: string;
  }
}
