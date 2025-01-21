import { Header } from '../header/header'
import { Wrapper } from '../wrapper/wrapper'
import './style.css'

export function Container () {
    return (
        <div className="container">
            <Header/>
            <Wrapper/>
        </div>
    )
}