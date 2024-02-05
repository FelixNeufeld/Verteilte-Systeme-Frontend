import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const UserNameInput = () => {
  return(
    <div className="text-input-container">
            <input type="text" placeholder="Username" className='UserNameInput'></input>
    </div>
  )
}

const LanguagePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const supportedLanguages = ['EN', 'DE', 'FR', 'ES', 'RU'];

  const toggleLanguageList = () => {
    setIsOpen(!isOpen);
  }

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    //TODO: Sprache umstellen in der UI
  }

  return(
    <div className='language-picker'>
      <label className="languageLabel">Language:</label>
      <button className='LanguageSelectButton' onClick={toggleLanguageList}>
        <span>{selectLanguage}</span>
      </button>
      {isOpen && (
        <ul className="language-list">
          {supportedLanguages.map((language) => {
            <li key={language} onClick={() => selectLanguage(language)}>
              {language}
            </li>
          })}
        </ul>
      )}
    </div>
  )
}

const EnterChatButton = () => {
  //TODO: functionality
  return(
  <div className='buttonContainer'>
    <button className="EnterChatButton">Enter chat</button>
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
  return (
    <LoginSite></LoginSite>
  );
}

export default App;
