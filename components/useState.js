import { useState } from "react";




export default function EmojiCounter(){
    const [numer, setContador] = useState(0);
    return (
        <>
        <h1>{numer} </h1>
        <button onClick={() =>{setContador(numer + 1)
        ;} }>add 1 wasas</button>
        </>
        )
}




//la prueba
//temas de eventos, importación, props mucho react








/*
export default function EmojiIncrementor(){
    const [emojiString , setEmojiString] = useState("😖");
    return (
        <>
        <h1>{emojiString} </h1>
        <button onClick={() =>{
            setEmojiString(prevEmoji => prevEmoji + "😖");
            setEmojiString(prevEmoji => prevEmoji + "😖😖");
            setEmojiString(prevEmoji => prevEmoji+ "😖😖😖");
        } }>add 3 wasas</button>
        </>
        )}; */
//convertir esas funciones flechaa a una función nomal

//

//batching
//si esque un set envía a otra funcion el batching no se ejecuta pq no lo reconoce 









