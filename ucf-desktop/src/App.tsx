import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Blocks } from './blocks'

function App() {
  const [file, setFile] = useState({
    content: null as object | null,
    handle: null as FileSystemFileHandle | null
  })
  useEffect(() => {
    console.log(file)
  }, [file])

  return (
    <div className='bg-neutral-600 w-full h-full flex flex-col'>
      <Toolbar file={file} setFile={setFile} />
      {file.content && <div className='flex flex-row flex-1'>
        <div className='sidebar-left p-4'>
          <div className='text-xl text-white'>{file.content?.docinfo?.title}</div>
          <div className='text-white'>Modified: {new Date(file.content?.docinfo?.modified.date).toLocaleString()}</div>
        </div>
        <div className='flex-1 p-8 gap-4 flex flex-col'>
          {file.content?.pages.map((page, index) => {
            return (
              <div className='page'>
                {
                  page.blocks.map((block: any, index: number) => {
                    return Blocks?.[block.type]?.view?.render({ content: block.content })
                  })
                }
              </div>
            )
          })}
        </div>
      </div>}
    </div>
  )
}

function Toolbar({ file, setFile }: { file: { content: string | null, handle: FileSystemFileHandle | null }, setFile: (file: { content: string | null, handle: FileSystemFileHandle | null }) => void }) {
  return (
    <div className='toolbar-stack'>
      <div className='toolbar'>
        <div className='toolbar-section'>
          <button className='toolbar-button font-medium' onClick={async () => {
            const fileHandle = await window.showOpenFilePicker({
              types: [
                {
                  description: "Universal Content Format (UCF)",
                  accept: {
                    "application/ucf": [".ucf"]
                  }
                }
              ]
            })
            const hfile = fileHandle[0]
            const fileContent = await hfile.getFile()
            const fileText = await fileContent.text()
            const json = JSON.parse(fileText)
            setFile({
              content: json,
              handle: hfile
            })
          }}>
            <img src="icons/open.svg" className='w-5 h-5' alt="Create" />
            Open
          </button>
          <button className='toolbar-button font-medium'>
            <img src="icons/create.svg" className='w-5 h-5' alt="Create" />
            Create
          </button>
        </div>
        <div className='toolbar-separator' />
        <div className='toolbar-section flex-1'>
          <div className='pl-2 text-lg'>
            {file.handle?.name}
          </div>
        </div>
        <div className='toolbar-separator' />
        <div className='toolbar-section'>
          <div className='pl-2 text-lg'>
            {file.handle?.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
