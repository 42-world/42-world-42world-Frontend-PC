import MypageButton from 'components/pages/Mypage/components/MypageButton';
import { ModalPortal, profilePhotoUtils } from 'components/pages/Mypage/utils';

import { useRef } from 'react';
import { StyledCharSelectModal } from 'components/pages/Mypage/styles';
import useClickOutside from '../hooks/useClickOutside';

const CharSelectModal = ({ userInfo, handleClickChar, handleClickClose }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, handleClickClose);

  return (
    <ModalPortal>
      <StyledCharSelectModal>
        <div className="char-select-modal-container" ref={modalRef}>
          <h2>캐릭터 선택</h2>
          <hr />
          <div className="char-select-inner">
            <ul className="char-list">
              {profilePhotoUtils.PROFILE_LIST.map(char => (
                <li key={char.id}>
                  <button onClick={() => handleClickChar(char.id)}>
                    <img
                      className={char.id === userInfo.character ? 'selected' : ''}
                      alt="profile"
                      src={'/assets/CharacterWhiteBG/' + char.image}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <MypageButton onClick={handleClickClose}>닫기</MypageButton>
          </div>
        </div>
      </StyledCharSelectModal>
    </ModalPortal>
  );
};

export default CharSelectModal;
