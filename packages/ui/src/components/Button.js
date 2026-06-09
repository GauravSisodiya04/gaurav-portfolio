import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ label, onClick, variant = 'primary' }) {
    return (_jsx("button", { onClick: onClick, style: {
            background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
            color: variant === 'primary' ? '#fff' : '#111',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
        }, children: label }));
}
