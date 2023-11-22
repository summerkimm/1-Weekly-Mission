import * as S from "./Modal.style";
import Button from 'components/Button';
import closeIcon from "assets/images/closeImg.svg";

function Modal() {
  return(
    <>
      <S.ModalBackdrop></S.ModalBackdrop>
      <S.ModalContainer>
        <S.ModalCloseButton src={closeIcon} alt="모달창 닫기" />
        <S.ModalWrapper>
          <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
          <Button>추가하기</Button>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
}

export default Modal;