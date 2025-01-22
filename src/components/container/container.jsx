import { Header } from '../header/header'
import { MobileNavbar } from '../header/mobilNavbar'
import { Wrapper } from '../wrapper/wrapper'
import './style.css'

export function Container () {
    return (
        <div className="container">
            <Header/>
            <MobileNavbar/>
            <Wrapper/>
        </div>
    )
}