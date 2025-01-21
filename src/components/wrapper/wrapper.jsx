import { About } from '../about/about'
import { Background } from '../bacground/background'
import { Started } from '../started/started'
import './style.css'

export function Wrapper () {
    return (
        <div className="wrapper">
            <Background/>
            <Started/>
            <About/>
        </div>
    )
}