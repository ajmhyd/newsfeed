import Head from 'next/head'
import Header from 'components/Header';
import ArticleList from 'components/ArticleList';
import Article from 'components/Article';
import { useState } from 'react';
import { Article as ArticleType } from 'types/Article';

export default function Home() {
  const [article, setArticle] = useState<ArticleType | null>(null);
  return (
    <div>
      <Head>
        <title>NewsFeed </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto max-w-3xl pt-6">
        {article ? (
          <Article article={article} setArticle={setArticle} />
        ) : (
            <ArticleList setArticle={setArticle} />
          )}
      </div>
    </div>
  )
}
