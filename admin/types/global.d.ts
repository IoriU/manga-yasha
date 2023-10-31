// types/global.d.ts

export {};

declare global {
  interface Manga {
    id: string;
    title?: string;
    description?: string;
    image?: string;
    releaseDate?: string;
    status?: string;
    genres?: string[];
    chapters?: ChapterManga[];
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

  interface PageManga {
    img: string;
    page: number;
  }
}
