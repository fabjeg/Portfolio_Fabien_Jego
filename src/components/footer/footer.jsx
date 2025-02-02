import { ButtonScrollTop } from '../buttons/button-scrool-top';
import './style.css';

export function Footer() {
    const logos = [
        'fa fa-github',
        'fa fa-linkedin-square'
    ];

    return (
        <div className="container-footer">
            <div className="containerLogo">
            {logos.map((logoClass, index) => (
                <div key={index} className="logo_footer">
                    <span className={logoClass}></span>
                </div>
            ))}
                </div>
            <ButtonScrollTop />
        </div>
    );
}
