// types/global.d.ts

export {};

declare global {
  interface IPost {
    id: number;
    title: string;
    body: string;
  }

  interface Manga {
    id: string;
    title: string;
    description?: string;
    image: string;
    latestChapter: string;
    releaseDate: string;
    status: string;
    genres: string[];
    chapters: ChapterManga[];
  }

  interface SearchManga {
    id: string;
    title: string;
    img: string;
  }

  interface ChapterManga {
    id: string;
    title: string;
    chapterNumber: string;
    volumeNumber?: string;
    pages: number;
  }
}
