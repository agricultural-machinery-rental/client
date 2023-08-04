import {
  StCompanyInfo,
  StCompanyInfoWrap,
  StHeadingCompanyInfo,
  StSubHeadingCompanyInfo,
  StParagraph,
  StAdvantagesList,
  StAdvantagesListWrap,
  StAdvantageItem,
  AboutImageWrap,
} from './styled';
import { AboutImage } from '@/entities/AboutImage';
import { aboutImageData, type TAboutImage } from '@/shared/api/AboutImage';

export const Info = () => {
  return (
    <StCompanyInfo>
      <StCompanyInfoWrap>
        <StHeadingCompanyInfo>О компании</StHeadingCompanyInfo>
        <StParagraph>Добро пожаловать в Агропарк!</StParagraph>
        <StParagraph>
          Наша компания специализируется на предоставлении сельскохозяйственной техники в аренду. Мы
          гордимся тем, что уже более 15 лет помогаем фермерам и аграрным предприятиям улучшать их
          производственные процессы и повышать эффективность работы.
        </StParagraph>
        <StParagraph>
          Наша компания предоставляет широкий ассортимент сельскохозяйственной техники для аренды,
          включая тракторы, комбайны, сеялки, опрыскиватели и многое другое. Вся наша техника
          оборудована передовыми технологиями, что позволяет справляться с разнообразными задачами
          на поле.
        </StParagraph>

        <StSubHeadingCompanyInfo>
          Преимущества аренды сельскохозяйственной техники у нас:
        </StSubHeadingCompanyInfo>

        <StAdvantagesListWrap>
          <AboutImageWrap>
            {aboutImageData.map((item: TAboutImage, index) => (
              <AboutImage image={item.image} key={`item-${index}`} />
            ))}
          </AboutImageWrap>

          <StAdvantagesList>
            <StAdvantageItem>
              Гибкие условия аренды: Мы предлагаем разнообразные варианты аренды, которые
              адаптированы под потребности каждого клиента. Вы можете выбрать срок аренды, который
              лучше всего подходит для вашего проекта.
            </StAdvantageItem>
            <StAdvantageItem>
              Качественная и надежная техника: Весь наш парк сельскохозяйственной техники регулярно
              проходит обслуживание и проверку, чтобы гарантировать отличную работоспособность и
              минимальные риски поломок на поле.
            </StAdvantageItem>
            <StAdvantageItem>
              Профессиональное обслуживание: Наша команда опытных специалистов всегда готова помочь
              вам с выбором и настройкой необходимой техники, а также предоставить консультации и
              техническую поддержку в процессе аренды.
            </StAdvantageItem>
            <StAdvantageItem>
              Экономическая выгода: Аренда сельскохозяйственной техники у нас позволяет сократить
              капитальные затраты на покупку нового оборудования и сосредоточиться на производстве
              сельскохозяйственной продукции.
            </StAdvantageItem>
            <StAdvantageItem>
              Бесперебойная работа: Надежность нашей техники обеспечивает плавную и бесперебойную
              работу на поле, что помогает сэкономить время и увеличить урожайность.
            </StAdvantageItem>
          </StAdvantagesList>
        </StAdvantagesListWrap>

        <StParagraph>
          Выбирая нашу компанию для аренды сельскохозяйственной техники, вы получаете надежного
          партнера, готового поддержать вас на каждом этапе вашей деятельности. Мы стремимся к
          вашему успеху и росту, и готовы вместе с вами достичь новых высот в сельском хозяйстве.
          Обратитесь к нам уже сегодня и узнайте, как мы можем помочь вам оптимизировать ваше
          сельскохозяйственное производство!
        </StParagraph>
      </StCompanyInfoWrap>
    </StCompanyInfo>
  );
};
