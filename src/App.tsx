import { useState } from 'react'
import Button from './components/Button'
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
      <div className="flex flex-col w-fit gap-3">
        <Button label="Press me" />
        <Button variant="secondary" label="Press me" />
      </div>

    </div>
  )
}

export default App
