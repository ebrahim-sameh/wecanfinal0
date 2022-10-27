import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "./app-context";

const AppProvider = (props) => {

  const {i18n} = useTranslation();
  const [lang, setLang] = useState('en');

  // =================== Set Language := ======================== //

  const setLanguage = (language) => {
    window.localStorage.setItem('lang', language);
    setLang(language);
    i18n.changeLanguage(language);
  }

  // const setEnLang = () => {
  //   setLanguage('en');
  //   document.dir = 'ltr';
  //   document.getElementsByTagName('html')[0].setAttribute("lang", "en");
  // };
  const setToggleLang = () => {
    if(lang === 'en') {
      setLanguage('ar');
      document.dir = 'rtl';
      document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
    }else {
      setLanguage('en');
      document.dir = 'ltr';
      document.getElementsByTagName('html')[0].setAttribute("lang", "en");
    }
  };

  useEffect(()=>{
    const localLangauge = localStorage.getItem('lang');
    if(localLangauge) {
      setLanguage(localLangauge);
      if(localLangauge === 'en') {
        document.dir = 'ltr';
        document.getElementsByTagName('html')[0].setAttribute("lang", "en");
      }else {
        document.dir = 'rtl';
        document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
      }
    }    
  },[]);




  return(
    <AppContext.Provider value={{
      lang: lang,
      toggleLang: setToggleLang,
    }}>
        {props.children}
    </AppContext.Provider>
  )
};

export default AppProvider