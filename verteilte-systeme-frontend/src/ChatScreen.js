import './ChatScreen.css';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { useParams } from 'react-router-dom';

//TODO: Nachrichten an Server schicken, Nachrichten erhalten, Member der Liste hinzufügen, Anpassen wann die Ampel umstellt


//TODO: Delete
const initialMembers = [
  { id: 1, username: 'User1', language: 'GER' },
  { id: 2, username: 'User2', language: 'EN' },
  { id: 3, username: 'User3', language: 'FR' },
];

//TODO: Delete
const initialMessages = [
  { id: 1, sender: 'User1', content: 'Hallo!', sentiment: "positive" },
  { id: 2, sender: 'Bot', content: 'Hallo! Wie kann ich Ihnen helfen?', sentiment: "positive" },
  { id: 3, sender: 'User2', content: 'Ich habe eine Frage zu Ihrem Produkt.', sentiment: "negative" },
];

const ChatWindow = ({messages}) => {
  useEffect(() => {

  }, [messages])

    return (
      <div className="chatWindowContainer">
        <div className="chatMessages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender === 'Bot' ? 'botMessage' : 'userMessage'}`}>
              <span className="sender">{message.sender}: </span>
              {message.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

const MessageInput = () => {
  const { t } = useTranslation();

  const sendToServer = () => {
      //TODO: Nachricht muss an den Server gesendet werden
  };

    return (
      <div className='messageInputContainer'>
            <div className="inputContainer">
              <input type="text" placeholder={t('type')} className="messageInput"></input>
            </div>
            <div className="SendButtonContainer">
                <button className='sendButton' onClick={sendToServer}>{t('send')}</button>
            </div>
          </div>
        )
}

const ChatMemberList = ({members}) => {
  useEffect(() => {

  }, [members])

  //TODO: Members müssen der Liste hinzugefügt werden sobald sie beitreten, muss nicht in dieser Komponente passieren

      return (
        <div className="chatMembersListContainer">
          <div className="membersList">
            {members.map((member) => (
              <div key={member.id} className="member">
                {`${member.username} - ${member.language}`}
              </div>
            ))}
          </div>
        </div>
      );
    };

  const TrafficLight = ({messages}) => {
    const [color, setColor] = useState('y');
    const [mood, setMood] = useState(0);

    const changeToGreen = useCallback(() => {
      setColor('g');
    }, []);

    const changeToYellow = useCallback(() => {
      setColor('y');
    }, []);

    const changeToRed = useCallback(() => {
      setColor('r');
    },[]);

    const calculateAllMessages = useCallback(() => {
      setMood(prevMood => {
        let newMood = 0;
        messages.forEach((message) => {
          if (message.sentiment === 'positive') {
            newMood += 1;
          } else if (message.sentiment === 'negative') {
            newMood -= 1;
          }
        });
        return newMood;
      });
    },[messages, setMood]);

    const changeColorOnMood = useCallback(() => {
      //TODO: Wertegrenzen müssen verändert werden
      if(mood > 0){
        changeToGreen();
      }
      else if(mood < 0){
        changeToRed();
      }
      else if(mood === 0){
        changeToYellow();
      }
    }, [mood, changeToGreen, changeToRed, changeToYellow]);

    useEffect(() => {
      calculateAllMessages();
      changeColorOnMood();
    });

    useEffect(() => {
      setMood(prevMood => {
        return prevMood+1
      });

      changeColorOnMood();
    }, [messages, changeColorOnMood])

      return (
        <div className="trafficLightContainer">
            <div className={`redLight ${color === 'r' ? 'redActive' : ''}`}></div>
            <div className={`yellowLight ${color === 'y' ? 'yellowActive' : ''}`}></div>
            <div className={`greenLight ${color === 'g' ? 'greenActive' : ''}`}></div>
        </div>
      )
  };


    function ChatScreen() {
      const { language } = useParams();
      const [messages, setMessages] = useState(initialMessages);
      const [members, setMembers] = useState(initialMembers);

      const addMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      };

      useEffect(() => {
        document.title = "Chat";
        i18n.changeLanguage(language);
      }, [language]);

        return (
          <div className='Background'>
            <div className="flexContainer">
              <div className='LanguageAndMemberContainer'>
                <TrafficLight messages={messages}/>
                <ChatMemberList members={members}/>
              </div>
              <div className="chatWindowAndInputContainer">
                <ChatWindow messages={messages} />
                <MessageInput/>
              </div>
            </div>
          </div>
        );
      }
      
 
  export default ChatScreen;