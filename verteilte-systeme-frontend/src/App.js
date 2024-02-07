import './App.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';


const UserNameInput = () => {
  const { t } = useTranslation();

  return(
    <div className="text-input-container">
            <input type="text" placeholder={t('username')} className='UserNameInput'></input>
    </div>
  )
}

export const LanguagePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  //TODO: Change filler languages to actual languages
  const supportedLanguages = ['en', 'de', 'fr', 'es', 'ru'];

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    changeLanguage(language);
  };

  return (
    <div className='language-picker'>
      <label className="languageLabel">{t('language')}</label>
      <select
        className='LanguageSelectButton'
        value={selectedLanguage}
        onChange={(e) => selectLanguage(e.target.value)}
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

const EnterChatButton = () => {
  const { t } = useTranslation();

  const handleRouting = () => {
    window.location.href = '/chat';
  }
  return(
  <div className='buttonContainer'>
    <button className="EnterChatButton" onClick={handleRouting}>{t('enter')}</button>
  </div>
  )
}

const LoginSite = () => {
  return(
    <div className='Background'>
      <div className='LoginBackground'>
        <UserNameInput></UserNameInput>
        <LanguagePicker></LanguagePicker>
        <EnterChatButton></EnterChatButton>
      </div>
    </div>
  )
}

function App() {

  useEffect(() => {
    document.title = "Chat login";
  }, []);

  return (
    <LoginSite />
  );
}

export default App;
