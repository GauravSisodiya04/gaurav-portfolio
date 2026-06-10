export const colors = {
    brand: {
      primary: '#0066cc',
      primaryHover: '#0052a3',
      primarySubtle: '#e6f0ff',
    },
    neutral: {
      0: '#ffffff',
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    status: {
      success: '#2d9e5f',
      successSubtle: '#e6f7ee',
      warning: '#d97706',
      warningSubtle: '#fef3cd',
      error: '#dc2626',
      errorSubtle: '#fde8e8',
      info: '#0066cc',
      infoSubtle: '#e6f0ff',
    },
  } as const
  
  export const spacing = {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
  } as const
  
  export const typography = {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs:   '0.75rem',
      sm:   '0.875rem',
      base: '1rem',
      lg:   '1.125rem',
      xl:   '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      regular:  400,
      medium:   500,
      semibold: 600,
      bold:     700,
    },
    lineHeight: {
      tight:   1.25,
      snug:    1.375,
      normal:  1.5,
      relaxed: 1.625,
    },
    letterSpacing: {
      tight:  '-0.025em',
      normal: '0em',
      wide:   '0.025em',
      wider:  '0.05em',
    },
  } as const