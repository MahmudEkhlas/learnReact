import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [length, setlength] = useState(8);
  const [numallow, setnumallow] = useState(false);
  const [characterallow, setcharallow] = useState(false);
  const [password, setpassword] = useState("");

  //use ref hook
  const passref = useRef(null)

  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str += "0123456789";
    if (characterallow) str += "!@#$%^&*()_+=[]{}~`-";
    for (let i = 1; i <= length; i++) {
      let charind = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charind)
    }
    setpassword(pass);

  }, [length, numallow, characterallow, setpassword]);

  const copyPassword = useCallback(() =>{
    passref.current?.select();
    window.navigator.clipboard.write(password);
  },[password]);

useEffect(() =>{passgen();}, [length,numallow,characterallow,passgen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 text-2xl">
          Password generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black bg-white"
            placeholder="Password"
            ref={passref}
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0'
          onClick={copyPassword}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8} max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numallow}
              id='numId'
              onChange={() => {
                setnumallow((prev) => !prev)
              }}
            />
            <label htmlFor="numId">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterallow}
              id='charId'
              onChange={() => {
                setcharallow((prev) => !prev)
              }}
            />
            <label htmlFor="charId">Charcters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
