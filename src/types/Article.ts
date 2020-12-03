export type Article = {
  author: string | null,
  content: string | null,
  description: string | null,
  publishedAt: string | null,
  source: {
    id: string | null,
    name: string | null,
  },
  title: string | null,
  url: string | null,
  urlToImage: string | null,
}
