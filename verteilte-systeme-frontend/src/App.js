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

  //TODO: Change filler languages to actual languages
  const supportedLanguages = ['EN', 'DE', 'FR', 'ES', 'RU'];

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    //TODO: Sprache umstellen in der UI
  }

  return (
    <div className='language-picker'>
      <label className="languageLabel">Language:</label>
      <select
        className='LanguageSelectButton'
        value={selectedLanguage}
        onChange={(e) => selectLanguage(e.target.value)}
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

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
    <LoginSite />
  );
}

export default App;
