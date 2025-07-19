import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection"
import RulesSection from './components/RulesSection'
import TabsSection from "./components/TabsSection"
import WaysSection from './components/WaysSection'
import FeedBackSection from "./components/FeedBackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"

export default function App() {
  const [tab, setTab] = useState('main')

  return (
    <>
      <Header/>
     <main>
        <IntroSection/>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && <>
          <RulesSection/>
          <WaysSection/>
        </>}

        {tab === 'feedback' && <FeedBackSection/>}

        {tab === 'effect' && <EffectSection/>}
        
      </main> 
    </>
  )
}


