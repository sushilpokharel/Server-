import React, { useEffect } from 'react'

export default function ErrorModal({ open, onClose }){
  useEffect(()=>{
    if(!open) return
    const id = setTimeout(()=> onClose(), 4000)
    return ()=>clearTimeout(id)
  },[open,onClose])

  if(!open) return null

  return (
    <div className="error-modal-backdrop" role="dialog" aria-modal="true">
      <div className="error-modal-card">
        <div className="warning-icon big" aria-hidden>
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <div className="error-body">
          <div className="error-head">❌ Error 503 – Service Unavailable</div>
          <div className="error-sub">The server is temporarily unable to handle your request. Please try again later.</div>
        </div>
        <div className="modal-actions">
          <button className="btn small" onClick={()=>{ onClose(); window.location.reload() }}>🔄 Try Again</button>
          <button className="btn small ghost" onClick={()=>{ onClose(); window.location.href='/' }}>⬅️ Go Home</button>
        </div>
      </div>
    </div>
  )
}
