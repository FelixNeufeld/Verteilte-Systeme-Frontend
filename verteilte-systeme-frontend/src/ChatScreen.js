import './ChatScreen.css';

const ChatWindow = () => {
    // Sample messages, TODO: Make dynamic
    const messages = [
      { id: 1, sender: 'User1', content: 'Hallo!' },
      { id: 2, sender: 'Bot', content: 'Hallo! Wie kann ich Ihnen helfen?' },
      { id: 3, sender: 'User2', content: 'Ich habe eine Frage zu Ihrem Produkt.' },
    ];
  
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
        return (
          <div className='messageInputContainer'>
            <div className="inputContainer">
              <input type="text" placeholder='type something...' className="messageInput"></input>
            </div>
            <div className="SendButtonContainer">
              <button className='sendButton'>Send</button>
            </div>
          </div>
        )
      }

const ChatMemberList = () => {
    //Demodata TODO: make dynamic
    const members = [
        { id: 1, username: 'User1', language: 'GER' },
        { id: 2, username: 'User2', language: 'EN' },
        { id: 3, username: 'User3', language: 'FR' },
      ];

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


    function ChatScreen() {
        return (
          <div className='Background'>
            <div className="flexContainer">
              <ChatMemberList />
              <div className="chatWindowAndInputContainer">
                <ChatWindow />
                <MessageInput />
              </div>
            </div>
          </div>
        );
      }
      
 
  export default ChatScreen;