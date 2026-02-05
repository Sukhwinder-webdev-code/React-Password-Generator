import { useCallback, useState } from 'react'
import './App.css'
import PasswordGenerator from './assets/components/PasswordGenerator'
import { useEffect } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [charAllowed, setCharAllowed] = useState(false);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [passwrd, setPassword] = useState('');
  const [showCopy, setShowCopy] = useState(false);
  

  const passWordHandle = useCallback(() => {
    let pass = "";
    let strData = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (NumAllowed) strData += '0123456789';
    if (charAllowed) strData += '!"£$%^&*@~#`';
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * strData.length);
      pass += strData.charAt(char);
    }
    setPassword(pass);


  }, [length, charAllowed, NumAllowed, setPassword])


  useEffect(() => { passWordHandle(); }, [length, NumAllowed, charAllowed]);

  const copyPasswordToClipboard = async (pas) => {
    await navigator.clipboard.writeText(pas);
    setShowCopy(true);

    setTimeout(() => {
      setShowCopy(false);
    }, 2000);
  }




  return (
    <>
      <PasswordGenerator pass={passwrd} setLength={setLength} length={length} NumAllowed={NumAllowed} setnumAllowed={setNumAllowed} setCharAllowed={setCharAllowed} copy={copyPasswordToClipboard} showCopy={showCopy}/>
    </>
  )
}

export default App
