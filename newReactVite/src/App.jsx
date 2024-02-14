import { useState } from 'react';
import './App.css'
import { InputBox, PasswordGenerator, Card } from './components';
import useCurrencyInfo from './customHooks/useCurrencyInfo';

// function App() {

//   return (
//     <>
//       {/* <h5 className="bg-green-400 p-3 rounded mb-4">Hello Sachida</h5>
//       <Card userName="Sachida" btnText="Button from Props" />
//       <Card userName="Vicky Sharma" /> */}

//       <PasswordGenerator />
//     </>
//   )
// }


function App() {

  const [amout, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapFromTo = () => {
    let temp = from;
    setFrom(to),
    setTo(temp);
  }

  const convertAmount = () => {
    setConvertedAmount(amout * currencyInfo[to]);
  }
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amout={amout}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amout)}
                onAmountChange={(amout) => setAmount(amout)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapFromTo}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amout={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
