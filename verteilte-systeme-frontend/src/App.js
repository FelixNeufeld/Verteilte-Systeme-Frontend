import './App.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const UserNameInput = ({ onUsernameChange }) => {
  const { t } = useTranslation();
  const handleChange = (event) => {
    const newUsername = event.target.value;
    onUsernameChange(newUsername);
  }

  return(
    <div className="text-input-container">
            <input type="text" placeholder={t('username')} onChange={handleChange} className='UserNameInput'></input>
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

const EnterChatButton = ({ disabled }) => {
  const { t } = useTranslation();

  const handleRouting = () => {
    window.location.href = '/chat/' + i18n.language;
  }
  return(
  <div className='buttonContainer'>
    <button className="EnterChatButton" onClick={handleRouting} disabled={disabled}>{t('enter')}</button>
  </div>
  )
}

const LoginSite = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return(
    <div className='Background'>
      <div className='LoginBackground'>
        <UserNameInput onUsernameChange={handleUsernameChange}></UserNameInput>
        <LanguagePicker></LanguagePicker>
        <EnterChatButton disabled={!username}></EnterChatButton>
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
