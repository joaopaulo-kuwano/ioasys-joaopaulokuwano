export interface IBook {
  authors: string[],
  title: string
  description: string
  pageCount: number
  category: string
  imageUrl: string
  language: string
  isbn10: string
  isbn13: string
  publisher: string
  published: number
  id: string
}

export const MockBook: IBook = {
  authors: [],
  title: '',
  description: '',
  pageCount: 0,
  category: '',
  imageUrl: '',
  language: '',
  isbn10: '',
  isbn13: '',
  publisher: '',
  published: 0,
  id: '',
};
