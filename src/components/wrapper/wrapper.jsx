import { Footer } from '../footer/footer'
import { About } from '../about/about'
import { Background } from '../background/background'
import { Competence } from '../competence/competence'
import { Project } from '../project/project'
import { Started } from '../started/started'
import './style.css'
import { Form } from '../form/form'
import { Training } from '../training/training'

export function Wrapper () {
    return (
        <div className="wrapper">
            <Background/>
            <Started/>
            <About/>
            <Training/>
            <Competence/>
            <Project/>
            <Form/>
            <Footer/>
        </div>
    )
}