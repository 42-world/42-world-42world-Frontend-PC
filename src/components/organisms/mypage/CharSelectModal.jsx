import { useState } from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { useRecoilState } from "recoil";

import { ModalContainer } from "../../atoms/Modal";
import profileUtils from "./utils/profileUtils";
import { UserService } from "../../../network";
import { MypageButton } from "../../atoms/Mypage";
import { userState } from "../../../store/user";

const CharSelectModal = ({ isOpen, setIsOpen }) => {
  //const curUser = auth.curUser;
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [charID, setCharID] = useState(userInfo ? userInfo[0].character : 0);

  const handleClickChar = async (e, id) => {
    e.preventDefault();
    try {
      const response = await UserService.updateUser({ character: id });
      window.alert("캐릭터 변경 완료");
      console.log(response);
      setCharID(id);
      setUserInfo([{ ...userInfo[0], character: id }]);
      //auth.setIsLoading(true);
    } catch (e) {
      console.log(e);
      window.alert("캐릭터 변경 실패, 관리자에게 문의하세요");
    }
  };

  const handleClickBtn = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <CharSelectContainer>
        <h1>캐릭터 선택</h1>
        <hr />
        <div>
          <div className="char-list">
            {profileUtils.PROFILE_LIST.map((char) => (
              <div key={char.id} onClick={(e) => handleClickChar(e, char.id)}>
                <img
                  className={char.id === charID ? "selected" : ""}
                  alt="profile"
                  src={PICTURE_DIR + char.image}
                />
              </div>
            ))}
          </div>
          <MypageButton onClick={handleClickBtn}>닫기</MypageButton>
        </div>
      </CharSelectContainer>
    </Modal>
  );
};

const CharSelectContainer = styled(ModalContainer)`
  width: 40%;

  &:focus {
    outline: none;
    border: none;
  }

  h1 {
    margin: 0.6rem 0.1rem 0.6rem 0.5rem;
    font-size: 1.6rem;
  }
  hr {
    color: ${(props) => props.theme.LineGray1};
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;

    .char-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.3rem;
      & > div {
        display: block;
        margin: 0.3rem;
        &:hover {
          cursor: pointer;
        }
      }
      img {
        width: 5rem;
        border: 2px solid black;
        border-radius: 4px;
        &:not(.selected) {
          filter: brightness(50%);
        }
      }
    }
  }
  ${(props) => props.theme.mobileSize} {
    width: 70%;
  }
`;

export default CharSelectModal;
