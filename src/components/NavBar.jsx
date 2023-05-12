import React from 'react';
import { useState } from 'react';
import {Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

const NavBar = () => {
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
                    <DropdownToggle caret>PlayLists</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </div>
    );
};

export default NavBar;