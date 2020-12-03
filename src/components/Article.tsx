import { Article as ArticleType } from 'types/Article';

type ArticleProps = {
  article: ArticleType,
  setArticle: (args0: null) => void,
}

const Article = ({ article, setArticle }: ArticleProps) => {


  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <div className="flex justify-end">
            <button type="button" onClick={() => setArticle(null)} className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Back
    </button>
          </div>
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{article.source.name}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h3>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img className="rounded-lg shadow-lg object-cover object-center" src={article.urlToImage} alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376" />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <svg className="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  <span className="ml-2">{article.author}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{article.description}</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;
