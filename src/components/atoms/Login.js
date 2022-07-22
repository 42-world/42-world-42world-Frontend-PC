import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
`;
export const Main = styled.main`
  width: 350px;
`;
// export const Box = styled.div`
//   padding: 10px 0;
//   margin-bottom: 10px;
//   background: #fff;
//   border: 1px solid #dbdbdb;
//   text-align: center;
// `;
export const Logo = styled.img`
  margin: 22px auto 12px;
  height: 60px;
`;
export const Form = styled.form`
  margin-top: 24px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`;
export const InputText = styled.input`
  padding-left: 8px;
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  & + & {
    //인접형제결합자 : InputText(&는 현재 쓰는 성분)
    margin-top: 6px;
  }
`;
export const BtnSubmit = styled.button`
  margin: 8px 0;
  padding: 5px 9px;
  background: #ffc000;
  color: #000;
  border: transparent;
  border-radius: 4px;
  font-weight: bold;
`;

export const SignupWrapper = styled.div`
  padding: 15px 0;
  font-size: 14px;
  a {
    color: #ffc000;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const Alert = styled.div`
  p {
    margin: 10px;
    font-weight: 700;
    .Important {
      color: var(--primary-point);
    }
  }
  @media screen and (min-width: 960px) {
    font-size: 16px;
  }

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const BtnSeoul = styled.button`
  width: 77%;
  padding: 12px 9px;

  background: #2a2d38;
  color: #fff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (min-width: 960px) {
    font-size: 16px;
  }
  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;
