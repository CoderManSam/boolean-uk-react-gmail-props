import { useState } from 'react'

import initialEmails from './data/emails'

import {Header} from './components/Header.jsx'
import { LeftMenu } from './components/LeftMenu'
import { Emails } from './components/Emails'

import './styles/app.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />
      <LeftMenu 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        emails={emails}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <main className="emails">
        <Emails 
          filteredEmails={filteredEmails}
          setEmails={setEmails}
        />
      </main>
    </div>
  )
}

export default App
