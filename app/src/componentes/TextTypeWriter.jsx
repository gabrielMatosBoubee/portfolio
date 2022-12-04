import React, { useState } from 'react'
import { useEffect } from 'react';

function TextTypeWriter({text}) {
    const first_text = text

  const [text1, setText1] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  const textState = ["istyping", "isdeleting"];
const [typing, setTyping] = useState(textState[0]);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      }
      else if (text1 === first_text && typing === "istyping"){
        sleep(2000).then(()=>{
        setTyping(textState[1])
        })
      }
      else if ( (text1 === first_text && typing==="isdeleting") || typing === "isdeleting" ) {
        setText1(first_text.slice(0, text1.length - 1));
        if(text1.length<=2){
            setTyping(textState[0])
        }
      }
    }, 100);
  
  return () => clearTimeout(timeout);
}, [text1, typing]);

  return (
  <h2 className="blinking-cursor">I am a <strong style={{'color': 'red'}}>{text1}</strong></h2>
  );
}

// I take all this componente from https://blog.logrocket.com/code-block-typewriter-effect-react/#building-typewriter-effect

export default TextTypeWriter;
