import Header from "./components/Header"
import IntroSection from "./components/IntroSection"
import RulesSection from './components/RulesSection'
import TabsSection from "./components/TabsSection"
import WaysSection from './components/WaysSection'
import FeedBackSection from "./components/FeedBackSection"
import { useState } from "react"

export default function App() {
  const [tab, setTab] = useState('feedback')

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
        
      </main> 
    </>
  )
}


