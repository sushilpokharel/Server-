import React from 'react'

export default function ErrorPage(){
  function reload(){ window.location.reload() }
  function goHome(){ window.location.href = '/' }

  return (
    <div className="page-wrap">
      <div className="center-card error polished">
        <div className="meta-row">
          <div className="badge error-badge">503</div>
          <div className="small-note">Service temporarily unavailable</div>
        </div>

        <div className="warning-icon" aria-hidden>
          <svg viewBox="0 0 24 24" width="88" height="88" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>

        <h1 className="title error-title">Error 503 – Service Unavailable</h1>
        <p className="subtitle">The server is temporarily unable to handle your request. Please try again later.</p>

        <div className="actions">
          <button className="btn" onClick={reload}>🔄 Try Again</button>
          <button className="btn ghost" onClick={goHome}>⬅️ Go Back Home</button>
        </div>
      </div>
    </div>
  )
}
