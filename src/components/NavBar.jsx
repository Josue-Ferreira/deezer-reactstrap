import React from 'react';
import { useState } from 'react';
import {Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { FaTrashAlt } from "react-icons/fa";

const NavBar = ({playList, setPlayList}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div style={{margin: '10px'}}>
            <Nav>
                <NavItem>
                    <NavLink
                    active
                    href="#"
                    >
                    Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                    Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    disabled
                    href="#"
                    >
                    Disabled Link
                    </NavLink>
                </NavItem>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>PlayList</DropdownToggle>
                    <DropdownMenu>
                        {playList.map((album,i) => (
                            <DropdownItem 
                                key={album.title_short} 
                                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                            >
                                    <img src={album.album.cover_small} alt="" />
                                    {album.title_short}
                                    <FaTrashAlt 
                                        onClick={() => setPlayList([...playList.filter(albumToSet => (albumToSet.id != album.id))])}
                                        style={{padding: '3px'}}
                                    />
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </div>
    );
};

export default NavBar;