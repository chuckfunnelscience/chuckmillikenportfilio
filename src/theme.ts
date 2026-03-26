import { alpha, createTheme } from '@mui/material/styles'

const midnight = '#060e20'
const electricIndigo = '#a3a6ff'
const cyberCyan = '#53ddfc'
const digitalOrchid = '#c180ff'
const onSurface = '#e3e9ff'
const onSurfaceVariant = '#a3aac4'
const surfaceContainerLow = '#091328'
const surfaceContainer = '#0f1930'
const surfaceContainerHigh = '#192540'
const outlineVariant = '#40485d'

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: electricIndigo,
    },
    secondary: {
      main: cyberCyan,
    },
    info: {
      main: digitalOrchid,
    },
    background: {
      default: midnight,
      paper: surfaceContainer,
    },
    text: {
      primary: onSurface,
      secondary: onSurfaceVariant,
    },
    divider: alpha(outlineVariant, 0.2),
  },
  spacing: 8,
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.04em',
      color: onSurface,
    },
    h2: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    subtitle2: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: onSurfaceVariant,
    },
    body1: {
      color: onSurfaceVariant,
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.03em',
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(surfaceContainerHigh, 0.6),
          backdropFilter: 'blur(20px)',
          boxShadow: 'none',
          borderBottom: `1px solid ${alpha(outlineVariant, 0.2)}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 22,
          paddingBlock: 10,
        },
        containedPrimary: {
          backgroundImage: `linear-gradient(135deg, ${electricIndigo}, ${digitalOrchid})`,
          color: '#080e24',
          boxShadow: `0 0 40px ${alpha(electricIndigo, 0.08)}`,
          '&:hover': {
            backgroundImage: `linear-gradient(135deg, ${digitalOrchid}, ${electricIndigo})`,
            boxShadow: `0 0 48px ${alpha(electricIndigo, 0.14)}`,
          },
        },
        outlined: {
          borderColor: alpha(outlineVariant, 0.4),
          backgroundColor: alpha(surfaceContainerLow, 0.66),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(surfaceContainer, 0.95),
          backgroundImage: `linear-gradient(180deg, ${alpha(electricIndigo, 0.12)} 0%, transparent 18%)`,
          border: `1px solid ${alpha(outlineVariant, 0.18)}`,
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#000000',
            '& fieldset': {
              borderColor: alpha(outlineVariant, 0.4),
            },
            '&:hover fieldset': {
              borderColor: alpha(electricIndigo, 0.5),
            },
            '&.Mui-focused fieldset': {
              borderColor: electricIndigo,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: alpha(surfaceContainerHigh, 0.88),
          border: `1px solid ${alpha(cyberCyan, 0.18)}`,
        },
      },
    },
  },
})
