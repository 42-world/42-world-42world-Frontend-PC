import { useQuery } from 'react-query';
import { ArticleService2 } from '@root/network';
import { Article } from '@network/types/Article';
import { Meta } from '@network/types/Pagination';

export const SEARCH_URL = '/search';
export const SEARCHES_URL = '/searches';

type GetSearchResults = (
  query: string,
  pageNumber?: number,
  enable?: boolean,
) => { isError: boolean; articles: Article[]; meta?: Meta };

export const getSearchResults: GetSearchResults = (query, pageNumber = 1, enable = false) => {
  const { isError, data } = useQuery(
    [SEARCHES_URL, query, pageNumber],
    () => ArticleService2.getArticleSearch({ q: query, page: pageNumber }),
    {
      enabled: enable,
    },
  );

  return { isError, articles: data?.data ?? [], meta: data?.meta };
};
