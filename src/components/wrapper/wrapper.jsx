import { Footer } from '../footer/footer'
import { About } from '../about/about'
import { Background } from '../bacground/background'
import { Competence } from '../competence/competence'
// import { Form } from '../form/form'
import { Project } from '../project/project'
import { Started } from '../started/started'
import './style.css'
import { FormTest } from '../form/form-test'

export function Wrapper () {
    return (
        <div className="wrapper">
            <Background/>
            <Started/>
            <About/>
            <Competence/>
            <Project/>
            {/* <Form/> */}
            <FormTest/>
            <Footer/>
        </div>
    )
}