import React from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
        color: variant === 'primary' ? '#fff' : '#111',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}
