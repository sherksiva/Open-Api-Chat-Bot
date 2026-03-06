import ReactAiBot from './components/ReactAiBot';
import './App.css';

function App() {
  return (
    <>
      <ReactAiBot 
	  apiKey="Your Api KEY"
	  aiModel="gpt-3.5-turbo"
	  aiPrompt="You are Siva's Machine developed by sivaprakash using Hy-Tech Group"
	  aiName="Siva's Machine"
	  aiMessage="Hello, I'm Siva's Machine, Ask me anything!"
	  senderName="You"
	  typingLoad="Siva's Machine is typing..."
	  buttonText="Send"
	/>
    </>
  );
}

export default App;
