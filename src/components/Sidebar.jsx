import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import "../assets/Sidebar.css";
import { useLocation } from 'react-router-dom';

const sideBarMenu = [
  {
    title: <p>Home</p>,
    icon: <p>i</p>,
    link: "/",
  }, {
    title: <p>Insert</p>,
    icon: <p>i</p>,
    link: "/insert",
  },
  {
    title: <p>Navigate</p>,
    icon: <p>i</p>,
    link: "/insert",
  },
  {
    title: <p>Insert</p>,
    icon: <p>i</p>,
    link: "/insert",
  },
]

const Sidebar = () => {
  const location = useLocation();
  return (
      <div className='Sidebar'>
        <Nav as="ul" className='List flex-column' activeKey={location.pathname}>
          {sideBarMenu.map((item,i) => (
            <Nav.Item>
              <Nav.Link href={item.link} key={i} className="Row d-flex flex-row rounded-2 m-1">
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
  )
}

export default Sidebar;