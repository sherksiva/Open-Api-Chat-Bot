# ReactJS Chatbot OpenAI

This simple ReactJS project that I created is an AI Chatbot that uses apiKey from OpenAI.
You can check for your reference.

<img src="https://github.com/sherksiva/sherksiva.github.io/blob/master/assets/sample_screenshot.png" />

If you need it feel free to clone it and use it.

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
import ReactAiBot from './components/ReactAiBot';
```
**Call Component**

```sh
<ReactAiBot apiKey="your apiKey" />
```
**Code Example (App.js)**
```
import ReactAiBot from './components/ReactAiBot';
import './App.css';

function App() {
  return (
    <>
      <ReactAiBot apiKey="your apiKey" />
    </>
  );
}

export default App;
```


