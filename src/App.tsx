import { useState } from 'react'

import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import TextArea from './components/TextArea'
import HocrDisplay from './components/HocrDisplay';

function App() {

  const [hocrString, setHocrString] = useState("");

  return (
    <div className="py-6 px-2 md:px-4 h-screen flex flex-col gap-6">
      <h1 className="text-center">HOCR Visualizer</h1>
      <div className="grid grid-cols-2 flex-grow gap-2">
        <TextArea placeholder="paste hocr string here" value={hocrString} setValue={setHocrString} />
        <HocrDisplay hocrString={hocrString} />
      </div>
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <div className="flex gap-2 items-center">
          <div>Made with</div>
          <FaHeart className="text-red-500" />
          <div>by <a href="https://github.com/JanikSpies/" className="text-purple-400">Janik</a></div>
        </div>
        <a href="https://github.com/JanikSpies/hocr-visualizer"><FaGithub size={24} /></a>
      </div>

    </div>
  )
}

export default App
