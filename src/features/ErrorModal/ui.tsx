import { StErrorModal, StErrorModalTitle, StErrorModalText } from './styled';

export const ErrorModal = () => {
  const error = new Error('Очень жаль! Проблемы с интернетом :(');
  return (
    <StErrorModal>
      <StErrorModalTitle>{error.message}</StErrorModalTitle>

      <StErrorModalText>
        Пожалуйста, проверьте ваше интернет - соединение или попробуйте позже.
      </StErrorModalText>
    </StErrorModal>
  );
};
