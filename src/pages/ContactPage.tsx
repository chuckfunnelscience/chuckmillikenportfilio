import SendIcon from '@mui/icons-material/Send'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type ContactPayload = {
  fullName: string
  companyName: string
  email: string
  phoneNumber: string
  message: string
}

type TouchedFields = Partial<Record<keyof ContactPayload, boolean>>

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgodedv'

function isEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value)
}

function getErrors(data: ContactPayload) {
  const next: Partial<Record<keyof ContactPayload, string>> = {}
  if (!data.fullName.trim()) next.fullName = 'Full name is required.'
  if (!data.companyName.trim()) next.companyName = 'Company name is required.'
  if (!data.email.trim()) next.email = 'Email address is required.'
  else if (!isEmail(data.email)) next.email = 'Enter a valid email address.'
  if (!data.message.trim()) next.message = 'Message is required.'
  return next
}

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [touched, setTouched] = useState<TouchedFields>({})
  const [data, setData] = useState<ContactPayload>({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  useEffect(() => {
    document.title = 'Contact – Chuck Milliken'
  }, [])

  const errors = useMemo(() => getErrors(data), [data])

  const hasErrors = Object.keys(errors).length > 0

  function isFieldError(field: keyof ContactPayload) {
    return Boolean(errors[field]) && (submitAttempted || Boolean(touched[field]))
  }

  function onBlur(field: keyof ContactPayload) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const fieldSx = {
    '& .MuiInputBase-root': {
      backgroundColor: '#000000',
      px: 1.25,
      pt: 0.6,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      '&:before': {
        borderBottomColor: alpha('#6063ee', 0.4),
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: alpha('#a3a6ff', 0.7),
      },
      '&:after': {
        borderBottomColor: '#6063ee',
      },
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.72rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: alpha('#a3aac4', 0.9),
    },
    '& .MuiFormHelperText-root': {
      ml: 0,
    },
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)
    if (hasErrors) {
      setStatus('error')
      setErrorMessage('Please fix the highlighted fields and try again.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          companyName: data.companyName,
          email: data.email,
          phoneNumber: data.phoneNumber || undefined,
          message: data.message,
          _subject: `Portfolio inquiry from ${data.fullName} at ${data.companyName}`,
        }),
      })

      if (!response.ok) {
        const responseBody: { errors?: Array<{ message?: string }> } = await response.json().catch(() => ({}))
        const firstError = responseBody.errors?.[0]?.message
        throw new Error(firstError || 'Unable to submit right now. Please try again later.')
      }

      setStatus('success')
      setSubmitAttempted(false)
      setTouched({})
      setData({
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed unexpectedly.')
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3.4}>
            <Typography variant="subtitle2" sx={{ color: 'secondary.main', letterSpacing: '0.12em' }}>
              SYSTEM_STATUS: ONLINE
            </Typography>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '4.2rem' }, lineHeight: 0.95 }}>
                LET&apos;S BUILD
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.6rem', md: '4.2rem' },
                  lineHeight: 0.95,
                  color: 'primary.main',
                }}
              >
                SOMETHING
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '4.2rem' }, lineHeight: 0.95 }}>
                LEGENDARY.
              </Typography>
            </Box>
            <Typography sx={{ maxWidth: 540 }}>
              Full-stack web developer with 7+ years delivering production web applications, client platforms, and internal SaaS tools. Deep experience across JavaScript/TypeScript, React, Next.js, Svelte, and WordPress.
            </Typography>

            <Box>
              <Typography variant="subtitle2">DIRECT_CHANNEL</Typography>
              <Typography
                component="a"
                href="mailto:drright71@protonmail.com"
                variant="h6"
                sx={{ mt: 0.8, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                drright71@protonmail.com
              </Typography>
            </Box>

            <Card
              sx={{
                maxWidth: 420,
                border: 'none',
                bgcolor: '#091328',
                boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>Office Location</Typography>
                <Typography sx={{ mt: 1 }}>Fairview, TX &amp; Remote Worldwide</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 3,
              border: 'none',
              bgcolor: alpha('#192540', 0.6),
              backdropFilter: 'blur(20px)',
              position: 'relative',
              boxShadow: '0 0 40px rgba(222,229,255,0.08), inset 0 1px 0 rgba(163,166,255,0.08)',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                position: 'absolute',
                right: { xs: 10, md: -16 },
                top: { xs: 20, md: 78 },
                transform: { xs: 'none', md: 'rotate(90deg)' },
                transformOrigin: 'top right',
                color: 'primary.main',
                letterSpacing: '0.12em',
              }}
            >
              LIVE_TRANSMISSION_PANEL
            </Typography>
            <CardContent sx={{ p: { xs: 2.2, sm: 4 } }}>
              <Box component="form" noValidate onSubmit={onSubmit}>
                <Stack spacing={2.4}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="FULL_NAME"
                    placeholder="John Doe"
                    InputLabelProps={{ shrink: true }}
                    value={data.fullName}
                    error={isFieldError('fullName')}
                    helperText={isFieldError('fullName') ? errors.fullName : undefined}
                    onChange={(event) => setData((prev) => ({ ...prev, fullName: event.target.value }))}
                    onBlur={() => onBlur('fullName')}
                    required
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    variant="standard"
                    label="COMPANY_NAME"
                    placeholder="Acme Corp"
                    InputLabelProps={{ shrink: true }}
                    value={data.companyName}
                    error={isFieldError('companyName')}
                    helperText={isFieldError('companyName') ? errors.companyName : undefined}
                    onChange={(event) => setData((prev) => ({ ...prev, companyName: event.target.value }))}
                    onBlur={() => onBlur('companyName')}
                    required
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    variant="standard"
                    label="EMAIL_ADDRESS"
                    type="email"
                    placeholder="john@example.com"
                    InputLabelProps={{ shrink: true }}
                    value={data.email}
                    error={isFieldError('email')}
                    helperText={isFieldError('email') ? errors.email : undefined}
                    onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))}
                    onBlur={() => onBlur('email')}
                    required
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    variant="standard"
                    label="PHONE_NUMBER (OPTIONAL)"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    InputLabelProps={{ shrink: true }}
                    value={data.phoneNumber}
                    onChange={(event) => setData((prev) => ({ ...prev, phoneNumber: event.target.value }))}
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    variant="standard"
                    multiline
                    minRows={5}
                    label="MESSAGE"
                    placeholder="Describe your technical requirements or goals..."
                    InputLabelProps={{ shrink: true }}
                    value={data.message}
                    error={isFieldError('message')}
                    helperText={isFieldError('message') ? errors.message : undefined}
                    onChange={(event) => setData((prev) => ({ ...prev, message: event.target.value }))}
                    onBlur={() => onBlur('message')}
                    required
                    sx={fieldSx}
                  />

                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    style={{ display: 'none' }}
                  />

                  <Box role="status" aria-live="polite" aria-atomic="true">
                    {status === 'success' ? (
                      <Alert severity="success">Message sent. I will reply as soon as possible.</Alert>
                    ) : null}
                    {status === 'error' ? <Alert severity="error">{errorMessage}</Alert> : null}
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={status === 'submitting'}
                    aria-busy={status === 'submitting'}
                    sx={{ py: 1.4 }}
                  >
                    {status === 'submitting' ? 'TRANSMITTING...' : 'INITIALIZE_TRANSMISSION'}
                  </Button>

                  <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                    ENCRYPTED TRANSMISSION // SECURE_SOCKET_LAYER
                  </Typography>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
