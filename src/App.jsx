import { useState } from 'react';

function App() {
  const name = "<Paulo/>";
  const a = "{BINARIO}";
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0); 

  const handleChange = (event) => {
    const numericValue = event.target.value.replace(/[^01\s]/g, ''); 
    setInputValue(numericValue);
  };


  const handleClick = () => {
    let num = inputValue.toString();
    const arr = num.split("").reverse().filter(element => element.trim() !== "").map(element => parseInt(element));
    let acum = 0;

    for(let i = 0; i < arr.length; i++){
      acum += (arr[i] * Math.pow(2, i));
    }

    setValue(acum)
    

  };

  return (
    <>
      <div className="bg-black select-none">
        
        <div className="parent h-screen flex flex-col items-center justify-center transition-all duration-200"> 
        <h1 className='p-5 text-4xl font-extrabold text-white text-center cursor-pointer hover:scale-110 transition-all duration-300'>CONVERTIDOR <span className='bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text animate-pulse'>{a}</span></h1>   
          <div className="child min-[320px]:h-60 min-[320px]:w-80 sm:h-[24rem] sm:w-[32rem] rounded-lg shadow-md bg-[#ffffff] flex flex-col items-center justify-center">
            <h1 className='py-10 font-bold font-mono text-2xl'>Resultado: {value}</h1>
            <div className="content p-5">
              <input 
                type="text" 
                className='sm:h-[3rem] sm:w-[15rem] min-[320px]:h-[2rem] min-[320px]:w-[9rem] text-2xl bg-white border-2 rounded-lg border-[#3c8a62] border-opacity-50 outline-none px-2 font-mono' 
                value={inputValue} 
                onChange={handleChange} 
              />
            </div>
            <button 
              className='bg-green-600 w-[6rem] h-[2rem] rounded-md hover:scale-95 hover:bg-green-800 transition-all duration-300 font-bold text-sm text-green-100 hover:text-green-950' 
              onClick={handleClick} 
            >
              Convertir
            </button>
            <p className='py-10 font-bold text-sm font-mono'>{name}</p>
          </div>
        </div>
      </div>      
    </>
  );
}

export default App;
