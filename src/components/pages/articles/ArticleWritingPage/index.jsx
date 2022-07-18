import { useState } from 'react';
import styled from 'styled-components';
import qs from 'qs';

import { Container } from '@root/components/atoms/global';
import WritingContent from './WritingContent';
import Board from '../common/Board';
import WritingContentOld from './WritingContentOld';

const ArticleWritingPage = () => {
  const { queryCategoryId } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const [categoryId, setCategoryId] = useState(queryCategoryId);

  return (
    <Board categoryId={categoryId}>
      <WritingBlock>
        <div className="block writing_block">
          <WritingContentOld />
          <WritingContent />
        </div>
      </WritingBlock>
    </Board>
  );
};

const WritingBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  & > .block {
    margin: 0 0.8rem;
    width: 100%;
  }
  .category_block {
    width: 12rem;
    min-width: 12rem;
  }
  .writing_block {
    max-width: calc(100% - 15.2rem - 9rem - 1.6rem);
    & > div {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 1020px) {
    .writing_block {
      max-width: calc(100% - 15.2rem);
      & > div {
        margin-bottom: 1.5rem;
      }
    }
  }

  ${props => props.theme.mobileSize} {
    margin-top: 0;
    .category_block {
      display: none;
    }
    .writing_block {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`;

export default ArticleWritingPage;
