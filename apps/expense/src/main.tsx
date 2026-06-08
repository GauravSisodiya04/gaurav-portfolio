import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button} from '@portfolio/ui';

function App() {
  return (
    <div>
      <h1>Expense Intelligence Platform</h1>
      <Button label="Add Expense" onClick={()=> {console.log('clicked')} } />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
