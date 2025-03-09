import { useEffect, useState } from "react";
import BlogConfigService from "../../services/BlogConfigService";
import MenuTypes from "../../types/MenuTypes";
import { Link } from 'react-router-dom';
import './style.css';
import SearchBar from "../SearchBar";



function Header() {
  const [blogName, setBlogName] = useState<string>()
  const [menuItems, setMenuItems] = useState<MenuTypes>()
  
  useEffect(() => {
      async function setup() {
        const blogName = await BlogConfigService.getBlogName();
        setBlogName(blogName);
        const menuItems = await BlogConfigService.getMainMenuItems();
        if(menuItems){
          setMenuItems(menuItems);
        }else{
          setMenuItems({name: 'empty', items: []})
        }
        
      }
  
      setup();
    }, []);


  return (
    <header id="main-menu">
      <nav className="main-menu-inner">
        <div className="main-menu-top">
        {
          blogName?
          (
            <h1 className="blog-title">{blogName}</h1>
          ):
          (
            <div>Carregando</div>
          )
        }
        <SearchBar />
        </div>
        
        {
          menuItems?
          (
            <ul className="menu-list">
              {menuItems.items.map((item, index)=>(
                <li className="menu-item" key={index}>
                  <Link 
                    to={item.path} 
                    key={item.path}
                    className={window.location.pathname === item.path ? 'active' : ''}
                  >{item.title}</Link>
                </li>
              ))}
            </ul>
          ):
          (
            <div>Carregando</div>
          )
        }
        
      </nav>
    </header>
  );
}

export default Header;
