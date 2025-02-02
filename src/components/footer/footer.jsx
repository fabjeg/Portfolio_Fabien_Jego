import { ButtonScrollTop } from '../buttons/button-scrool-top';
import './style.css';

export function Footer() {
    const logos = [
        { class: 'fa fa-github', url: 'https://github.com/fabjeg' },
        { class: 'fa fa-linkedin-square', url: 'https://www.linkedin.com/in/fabien-jego-2b286230a/' }
    ];

    return (
        <div className="container-footer">
            <div className="containerLogo">
                {logos.map((logo, index) => (
                    <div key={index} className="logo_footer">
                        <a href={logo.url} target="_blank" rel="noopener noreferrer">
                            <span className={logo.class}></span>
                        </a>
                    </div>
                ))}
            </div>
            <ButtonScrollTop />
        </div>
    );
}
