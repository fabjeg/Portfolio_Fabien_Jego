import { useTranslation } from 'react-i18next';
import { InfoBox } from '../infosBox/infos-box';
import './style.css';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="section about">
      <h3 className="h3-title" id='about'>
        {t('aboutTitle')}
      </h3>
      <article className='article-about'>
        {t('aboutContent')}
      </article>
      <InfoBox />
    </div>
  );
}
