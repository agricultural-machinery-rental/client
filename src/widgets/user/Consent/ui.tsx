import {
  StConsent,
  StConsentWrap,
  StConsentTitle,
  StConsentList,
  StConsentItem,
  StConsentItemDot,
} from './styled';

export const Consent = () => {
  return (
    <StConsent>
      <StConsentWrap>
        <StConsentTitle>Согласие на обработку персональных данных</StConsentTitle>
        <StConsentList>
          <StConsentItem>
            Предоставляя свои персональные данные Пользователь даёт согласие на обработку, хранение
            и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных
            данных» от 27.07.2006 г. в следующих целях:
          </StConsentItem>

          <StConsentItemDot>Осуществление клиентской поддержки</StConsentItemDot>
          <StConsentItemDot>
            Получения Пользователем информации о маркетинговых событиях
          </StConsentItemDot>
          <StConsentItemDot>
            Проведения аудита и прочих внутренних исследований с целью повышения качества
            предоставляемых услуг.
          </StConsentItemDot>

          <StConsentItem>
            Под персональными данными подразумевается любая информация личного характера,
            позволяющая установить личность Пользователя/Покупателя такая как:
          </StConsentItem>

          <StConsentItemDot>Фамилия, Имя, Отчество</StConsentItemDot>

          <StConsentItemDot>Дата рождения</StConsentItemDot>

          <StConsentItemDot>Контактный телефон</StConsentItemDot>

          <StConsentItemDot>Почтовый адрес</StConsentItemDot>

          <StConsentItemDot>Осуществление клиентской поддержки</StConsentItemDot>
          <StConsentItem>
            Персональные данные Пользователей хранятся исключительно на электронных носителях и
            обрабатываются с использованием автоматизированных систем, за исключением случаев, когда
            неавтоматизированная обработка персональных данных необходима в связи с исполнением
            требований законодательства.
          </StConsentItem>
          <StConsentItem>
            Компания обязуется не передавать полученные персональные данные третьим лицам, за
            исключением следующих случаев:
          </StConsentItem>
          <StConsentItemDot>
            По запросам уполномоченных органов государственной власти РФ только по основаниям и в
            порядке, установленным законодательством РФ
          </StConsentItemDot>
          <StConsentItemDot>Осуществление клиентской поддержки</StConsentItemDot>
          <StConsentItem>
            Компания оставляет за собой право вносить изменения в одностороннем порядке в настоящие
            правила, при условии, что изменения не противоречат действующему законодательству РФ.
            Изменения условий настоящих правил вступают в силу после их публикации на Сайте.
          </StConsentItem>
        </StConsentList>
      </StConsentWrap>
    </StConsent>
  );
};
