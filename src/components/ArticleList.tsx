import { Article } from 'types/Article';
import { format } from 'date-fns';
import useArticles from 'hooks/useArticles';

type ArticleListProps = {
  setArticle: (arg0: Article) => void,
}

const ArticleList = ({ setArticle }: ArticleListProps) => {
  const { status, data, error } = useArticles();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">{
        status === 'loading' ? (
          "Loading..."
        ) : (
            status === 'error' ? (
              <span>Error: {error.message}</span>
            ) : (
                <>
                  {data.articles.map((article: Article) => (
                    <li key={article.url} onClick={() => setArticle(article)}>
                      <a className="block hover:bg-gray-50">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                          <div className="min-w-0 flex-1 flex items-center">
                            <div className="flex-shrink-0">
                              {article.urlToImage ? (
                                <img className="h-14 w-14 rounded" src={article.urlToImage} />
                              ) : (
                                  <img className="h-14 w-14 rounded" />
                                )}
                            </div>
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                              <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">{article.title}</p>
                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                  </svg>
                                  <span className="truncate">{article.author}</span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">

                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              <p>
                                <span>{format(new Date(article.publishedAt), 'MM/dd/yyyy')}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </>
              )
          )
      }
      </ul>
    </div>
  )
}

export default ArticleList;
