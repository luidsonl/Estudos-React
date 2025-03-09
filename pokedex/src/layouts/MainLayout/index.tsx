import { ReactNode, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserConfigService from "../../services/UserConfigService";
import '../../styles/constants.css';
import '../../styles/reset.css'

interface Types {
  children?: ReactNode;
}

function MainLayout({ children }: Types) {
  const [theme, setTheme]= useState<string>();

  useEffect(()=>{
    async function setup(){
      const theme = UserConfigService.getTheme()
      setTheme(theme);
    }

    setup();
  },[])

  return (
    <div className={theme}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
