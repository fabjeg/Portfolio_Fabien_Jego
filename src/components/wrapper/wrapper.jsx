import { About } from '../about/about'
import { Background } from '../bacground/background'
import { Competence } from '../competence/competence'
import { Project } from '../project/project'
import { Started } from '../started/started'
import './style.css'

export function Wrapper () {
    return (
        <div className="wrapper">
            <Background/>
            <Started/>
            <About/>
            <Competence/>
            <Project/>
        </div>
    )
}