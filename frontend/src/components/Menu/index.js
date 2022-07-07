import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiEdit, FiServer } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { Aside, Container } from './styles'

const Menu = () =>{
    const [navbar, setNavBar] = useState(false)
    return(
        <>
        <Container>
        {navbar?
        <Aside>
            <button onClick={()=> setNavBar(!navbar)}> 
                <AiOutlineClose/>
            </button>
            <ul>
            <Link to="/"><li> 
                <FiServer />
                <h4>   show professionals  </h4> 
                </li> </Link>
            <Link to="/register-new" >  <li> 
                <FiEdit />
                <h4>  new profissional  </h4> 
                </li> </Link>
            <Link> <li>
                <FiEdit />
                <h4>new Professional's type  </h4>
            </li> </Link>
            </ul>
        </Aside>:

        <button onClick={()=> setNavBar(!navbar)} >
            <FaBars style={{color: 'black'}} size={48}/>
        </button>
        }
        </Container>
        </>
    )
}

export default Menu;