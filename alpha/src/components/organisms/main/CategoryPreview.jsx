import { useState, useEffect } from "react";
import styled from "styled-components";

import ArticlePreview from "./ArticlePreview";
import { HiThumbUp } from "react-icons/hi";

import { rem } from "../../../styles/rem";
import { ArticleService } from "../../../network";

const CategoryPreview = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const fetch = async () => {
    const response = await ArticleService.getArticlesByCategoryId(category.id);
    setArticles(response.data);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  if (!articles) return <></>;
  return (
    <CategoryPreviewWrapper>
      <div className="title">
        <div className="title-left">
          <HiThumbUp />
          <h2>{category.name}</h2>
        </div>
        <button className="more">{"더 보기 >"}</button>
      </div>
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          likeCount={article.likeCount}
          commentCount={article.commentCount}
        />
      ))}
    </CategoryPreviewWrapper>
  );
};

const CategoryPreviewWrapper = styled.div`
  background: white;

  width: ${rem(362)};
  margin: ${rem(10)};
  height: ${rem(126)};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${rem(10)};

  .title {
    padding: ${rem(8)} ${rem(8)};
    display: flex;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;

      svg {
        font-size: ${rem(16)};
        margin-right: ${rem(6)};
      }

      h2 {
        font-size: ${rem(16)};
      }
    }

    .more {
      border: none;
      background: transparent;
    }

    .more: hover {
      cursor: pointer;
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
  }
`;

export default CategoryPreview;
