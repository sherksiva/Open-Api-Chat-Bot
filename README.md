# ReactJS Chatbot OpenAI

This simple ReactJS project that I created is an AI Chatbot that uses apiKey from OpenAI.
You can check for your reference.

<img src="https://github.com/sherksiva/sherksiva.github.io/blob/master/assets/sample_screenshot.png" />

Also I am using HyTechAI repo and added my modification, If you need it feel free to clone it and use it.

## Installation
```sh
git clone https://github.com/sherksiva/Open-AI-Chat-Bot
cd Open-AI-Chat-Bot
npm install

```

## Components Only

Go to the `src` folder and copy the `components` folder and its contents to your react project.

**Impport components**

```sh
import HyTechAi from './components/HyTechAI';
```
**Call Component**

```sh
<HyTechAi apiKey="your apiKey" />
```
**Code Example (App.js)**
```
import HyTechAi from './components/HyTechAI';
import './App.css';

function App() {
  return (
    <>
      <HyTechAi apiKey="your apiKey" />
    </>
  );
}

export default App;
```
## Customization

| Atribute | Description |
|:---------|:-----------|
|apiKey=""|You can get apiKey on the official openAI website: <a href="https://openai.com/">GET API KEY</a>|
|aiModel=""|Required to use GPT-3 or GPT-4 models: <a href="https://platform.openai.com/docs/models/overview">View Models</a>|
|aiPrompt=""|You can give commands to your bot|
|aiName=""|Change your bot name|
|aiMessage=""|Greet the user before asking a question|
|senderName=""|Change user name|
|typingLoad=""|Changing text Bot is typing...|
|buttonText=""|Change the submit button text|


