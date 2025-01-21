import { InfoBox } from '../infosBox/infos-box'
import './style.css'

export function About () {
    return (
        <div className="section">
            <h3 className="h3-title">
                About
            </h3>
            <article className='article-about'>Je suis actuellement à la recherche de nouvelles opportunités
          professionnelles et je suis ouvert aux collaborations pour des projets
          créatifs et engageants. Si vous êtes à la recherche d&apos;un développeur
          enthousiaste, rigoureux et prêt à relever des défis, je serais honoré
          de rejoindre votre équipe et de contribuer activement à vos projets.</article>
          <InfoBox/>
        </div>
    )
}