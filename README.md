# ReactJS Chatbot OpenAI

This simple ReactJS project which created with use of OpenAI API.
For your reference.

<img src="https://github.com/sherksiva/sherksiva.github.io/blob/master/assets/sample_screenshot.png" />

If you need it feel free to clone it and use it.

## Installation
```sh
git clone https://github.com/sherksiva/Open-AI-Chat-Bot
cd Open-AI-Chat-Bot
npm install

```

## Components

Go to the `src` folder and copy the `components` folder and its contents to your react project.

**Import Components**

```sh
import ReactAiBot from './components/ReactAiBot';
```
**Use like below**

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


