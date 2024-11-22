import React, {useState} from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';

function Navigation({active, setActive}) {
    

    return (
        <NavStyled>
            <div className = "user-con">
                <img src={avatar} alt = ""/>
                <div className="text">
                    <h2> Mahaa </h2>
                    <p>Money Money MONEY</p>
                </div>
            </div>
            <ul className='menu-items'>
                {menuItems.map((item) => {
                    return <li 
                    key={item.id}
                    onClick = {() => setActive(item.id)}
                    className = {active === item.id ? 'active': ''}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className='bottom-nav'>
                
                <li>
                    {signout} Sign Out
                </li>
            </div>
        
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    min-height: 100vh;  /* Ensure full height */
    background: rgba(252, 246, 249, 0.95);  /* Increase opacity */
    border: 3px solid #000;  /* Dark border for visibility */
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    z-index: 10;
    position: relative;
    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf69;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
        }
        h2{
            color: rgba(34,34,96,1);

        }
        p{
            color: rgba(34,34,96,0.6);
        }
    }
    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34,34,96,.6);
            padding-left: 1 rem;
            position: relative;
            i {
                color: rgba(34,34,96,0.6);
                font-size: 1.4 rem;
                transition: all .4s ease-in-out;
            }

        }

    }
    .active {
        color: rgba(34,34,96,1) !important;
        i {
            color: rgba(34,34,96,1) !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }

    }
`;


export default Navigation;