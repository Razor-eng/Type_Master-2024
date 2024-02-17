import { useState } from "react";
import Home from "./pages/Home";
import { easeInOut, motion } from "framer-motion";

const App = () => {
  const [time, setTime] = useState(30)
  const [modal, setModal] = useState(true)
  const [message, setMessage] = useState(0);

  setTimeout(
    function () {
      setMessage(1);
    }, 6000);

  return (
    <>
      {
        modal ?
          (
            <>
              {
                !message &&
                <>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: easeInOut }}
                    className="text-[320px] text-purple-500"
                  >
                    TYPO
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, delay: 2, ease: easeInOut }}
                    className="text-[100px] text-blue-500"
                  >
                    Test your Typing Skills
                  </motion.h1>
                </>
              }
              {
                message &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, delay: .8, ease: easeInOut }}
                  className="border-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-white border-2 p-10"
                >
                  <h1 className=" text-2xl text-white">Select the time:</h1>
                  <div className="flex justify-between mt-3">
                    <button onClick={() => { setTime(30); setModal(false) }} className="shadow-md shadow-white border-gray-600 w-fit transition-all ease-in-out border-2 p-1 text-white hover:border-gray-400 hover:text-gray-500 active:scale-95 hover:scale-110 cursor-pointer">30s</button>
                    <button onClick={() => { setTime(60); setModal(false) }} className="shadow-md shadow-white border-gray-600 w-fit transition-all ease-in-out border-2 p-1 text-white hover:border-gray-400 hover:text-gray-500 active:scale-95 hover:scale-110 cursor-pointer">60s</button>
                    <button onClick={() => { setTime(90); setModal(false) }} className="shadow-md shadow-white border-gray-600 w-fit transition-all ease-in-out border-2 p-1 text-white hover:border-gray-400 hover:text-gray-500 active:scale-95 hover:scale-110 cursor-pointer">90s</button>
                  </div>
                </motion.div >
              }
            </>
          )
          :
          (
            <Home time={time} />
          )
      }
    </>
  )
}

export default App;