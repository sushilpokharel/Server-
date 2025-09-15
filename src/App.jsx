import React, { useState, useEffect, useCallback } from 'react'
import MaintenancePage from './pages/MaintenancePage'
import ErrorPage from './pages/ErrorPage'
import ErrorModal from './components/ErrorModal'

export default function App(){
  // Toggle mode here: 'maintenance' or 'error' (persisted)
  const [mode, setMode] = useState(()=>{
    try{
      return localStorage.getItem('site-mode') || 'maintenance'
    }catch{
      return 'maintenance'
    }
  })
  const [showErrorModal, setShowErrorModal] = useState(false)
  // typing-triggered error feedback is enabled by default
  const [keypressEnabled] = useState(true)

  const onKey = useCallback((e)=>{
    if(!keypressEnabled) return
    // ignore modifier-only presses
    if(e.key.length>1 && e.key !== 'Enter' && e.key !== 'Backspace') return
    setShowErrorModal(true)
  },[keypressEnabled])

  useEffect(()=>{
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onKey])

  useEffect(()=>{
    // Persist and update document title depending on mode
    try{ localStorage.setItem('site-mode', mode) }catch{}
    if(mode === 'maintenance') document.title = 'Maintenance Mode | Coming Soon'
    else document.title = 'Error 503 | Site Unavailable'
  },[mode])

  return (
    <div>
      <div className="mode-toggle">
        <div className="toggle-pill" role="tablist" aria-label="Mode toggle">
          <button role="tab" aria-selected={mode==='maintenance'} className={`pill ${mode==='maintenance' ? 'on':''}`} onClick={()=>setMode('maintenance')}>Maintenance</button>
          <button role="tab" aria-selected={mode==='error'} className={`pill ${mode==='error' ? 'on':''}`} onClick={()=>setMode('error')}>Error</button>
          <div className={`pill-indicator ${mode==='error' ? 'right':''}`} aria-hidden />
        </div>
      </div>

      {mode === 'maintenance' ? <MaintenancePage/> : <ErrorPage/>}

      <ErrorModal open={showErrorModal} onClose={()=>setShowErrorModal(false)} />
    </div>
  )
}
