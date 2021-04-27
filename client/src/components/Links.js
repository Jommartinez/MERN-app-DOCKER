import React from 'react'
import { Link } from 'react-router-dom'


const Links = () => {
  
        return (
            <>
                <ul>
                    <li>
                        <Link to="/products/list">
                            List products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/create">
                            Create product
                        </Link>
                    </li>
                </ul>
               
                
            </>
        )
    
}

export default Links