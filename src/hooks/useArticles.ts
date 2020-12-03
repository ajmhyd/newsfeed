import { useQuery } from 'react-query';
import axios from 'axios';
import { Article } from 'types/Article';

const getArticles = async () => {
  const { data } = await axios.get('/api/news');
  return data;
}

type Articles = {
  articles: Article[],
}
type Error = {
  message: string,
}

export default function useArticles() {
  return useQuery<Articles, Error>('articles', getArticles);
}
