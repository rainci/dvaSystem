import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

const MenuSide = ({ menuData }) => {
  const [html, setHtml] = useState('');

  const renderHtml = (data = []) => {
    return data && data.map(({ id, title, link, type, children } = {}) => {
      if (type === 'title' && children && children.length) {
        return (
          <SubMenu key={id} title={title} >
            {renderHtml(children)}
          </SubMenu>
        )
      } else {
        return <Item key={id}><Link to={link}>{title}</Link></Item>
      }
    })
  }

  useEffect(() => {
    setHtml(renderHtml(menuData))
  }, [menuData])
  return (
    <Menu
      defaultSelectedKeys={[1]}
      defaultOpenKeys={['1']}
      mode="inline"
      theme="dark"
    >
      {html}
    </Menu>
  );
};

export default MenuSide;
