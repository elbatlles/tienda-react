import React from 'react'
import '../styles/components/Header.css'
interface Props {
    
  }
const Header: React.FC<Props> = (props) => {
   
    return (
        <div className="Header">
             <h1 className="Header-title">PlatziConf Merch</h1>
             <div className="Header-checkout">
                 Checkout
             </div>
        </div>
    )
}

export default Header
