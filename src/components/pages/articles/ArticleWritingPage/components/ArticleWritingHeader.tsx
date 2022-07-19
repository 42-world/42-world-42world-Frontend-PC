/** @jsxImportSource @emotion/react */

import { useGetCategory } from '@root/common/hooks/api/category';
import { isEmpty } from '@root/common/utils';
import { useMemo } from 'react';
import {
  WritingInputState,
  WritingInputStateAction,
  WritingInputStateEnum,
} from '@components/pages/articles/common/types';

import { css } from '@emotion/react';

interface ArticleWritingHeaderProps {
  state: WritingInputState;
  dispatch: React.Dispatch<WritingInputStateAction>;
  articleId?: number;
}

const ArticleWritingHeader = ({ state, dispatch, articleId }: ArticleWritingHeaderProps) => {
  const { categories } = useGetCategory();
  const writeableCategories = useMemo(() => categories?.filter(category => category.isArticleWritable), [categories]);
  const isEdit = !isEmpty(articleId);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: WritingInputStateEnum.CHANGE_INPUT, name: 'categoryId', value: parseInt(e.target.value) });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: WritingInputStateEnum.CHANGE_INPUT, name: 'title', value: e.target.value });
  };

  return (
    <div css={articleWritingHeader}>
      <select css={categoryListSelector} name="category" id="category" value={state.categoryId} onChange={handleChangeCategory} disabled={isEdit}>
        {writeableCategories?.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input css={articleTitle} name="title" value={state.title} onChange={handleChangeTitle} maxLength={42} placeholder="제목을 입력하세요"/>
    </div>
  );
};

const articleWritingHeader = css`
  display: flex;
  flex-direction: column;
`;

const categoryListSelector = css`
  width: max-content;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const articleTitle = css`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export default ArticleWritingHeader;
