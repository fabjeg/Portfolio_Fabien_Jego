import { Footer } from '../footer/footer'
import { About } from '../about/about'
import { Background } from '../bacground/background'
import { Competence } from '../competence/competence'
import { Project } from '../project/project'
import { Started } from '../started/started'
import './style.css'
import { Form } from '../form/form'
import { Trainning } from '../training/training'

export function Wrapper () {
    return (
        <div className="wrapper">
            <Background/>
            <Started/>
            <About/>
            <Trainning/>
            <Competence/>
            <Project/>
            <Form/>
            <Footer/>
        </div>
    )
}