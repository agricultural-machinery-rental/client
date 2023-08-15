import { StErrorModal, StErrorModalTitle, StErrorModalText } from './styled';

export const ErrorModal = () => {
  return (
    <StErrorModal>
      <StErrorModalTitle>Очень жаль! Проблемы с интернетом </StErrorModalTitle>
      <StErrorModalText>
        Пожалуйста, проверьте ваше интернет - соединение или попробуйте позже.
      </StErrorModalText>
    </StErrorModal>
  );
};
