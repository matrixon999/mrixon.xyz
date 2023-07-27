import Content from '@/components/Content'
import FancyCard from '@/components/FancyCard'
import SideBar from '@/components/sidebar'

export default function Home() {
  return (
    <main>
      <SideBar />
      <Content>
        <div className="text-center pt-20">
          <h1 className="pb-10 text-5xl font-extrabold">Projects</h1>
          <p>WIP</p>
          <p>Still have a lot of old projects to throw on github and add here</p>
        </div>
        <div className="flex items-start pt-20 justify-center bg-zinc-700">
          <div className="flex flex-col items-center bg-zinc-700">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <FancyCard title="Chip-8 Emulator" img="/chip8.png" dst="https://github.com/matrixon999/Chip8-Emulator">
                <p>Simple Chip-8 emulator written in C++</p>
                <p>Code available on github</p>
                <p>Will soon compile to WASM and make available to use here</p>
              </FancyCard>
              <FancyCard title="Explanguage" img="/explanguage.png" dst="http://explanguage.mrixon.xyz/">
                <p>Language learning site that uses Large Language Model AI for explanations and Morpheme analysis to break down definitions and grammar rules</p>
                <p>Currently WIP with many more languages and features to be added</p>
              </FancyCard>
            </div>
          </div>
        </div>
      </Content>
    </main>
  )
}
