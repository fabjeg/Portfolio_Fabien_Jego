import { useTranslation } from 'react-i18next';
import { InfoBox } from '../infosBox/infos-box';
import './style.css';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="section about" id='about'>
      <h3 className="h3-title">
        {t('aboutTitle')}
      </h3>
      <article className='article-about'>
        {t('aboutContent')}
        <br/>
      </article>
      <InfoBox />
    </div>
  );
}
