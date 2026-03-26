import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CodeIcon from '@mui/icons-material/Code'
import { Box, Button, Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const statCards = [
  { label: 'Experience', value: '7+ YRS' },
  { label: 'Stack', value: 'JS/TS' },
  { label: 'Status', value: 'ACTIVE' },
]

export function HomePage() {
  useEffect(() => {
    document.title = 'Chuck Milliken – Full Stack Web Developer'
  }, [])

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(83,221,252,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(83,221,252,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 }, position: 'relative' }}>
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <Chip label="SYSTEM_INITIALIZED" size="small" />
                <Typography variant="subtitle2">LOC: FAIRVIEW, TX</Typography>
              </Stack>

              <Box>
                <Typography variant="h1">CHARLES</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(2.2rem, 6.2vw, 4.5rem)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.045em',
                    color: 'primary.main',
                    fontStyle: 'italic',
                  }}
                >
                  "CHUCK" MILLIKEN
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ color: 'text.primary', letterSpacing: '0.08em' }}>
                FULL STACK WEB DEVELOPER
              </Typography>

              <Typography sx={{ maxWidth: 620 }}>
                Full-stack web developer with 7+ years delivering production web applications,
                client platforms, and internal SaaS tools. Deep experience across
                JavaScript/TypeScript, React, Next.js, Svelte, and WordPress.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={NavLink} to="/application-portfolio" variant="contained" endIcon={<ArrowOutwardIcon />}>
                  View Portfolio
                </Button>
                <Button component={NavLink} to="/experience" variant="outlined">
                  Experience
                </Button>
              </Stack>

              <Grid container spacing={2}>
                {statCards.map((card) => (
                  <Grid key={card.label} size={{ xs: 12, sm: 4 }}>
                    <Card>
                      <CardContent>
                        <Typography variant="subtitle2">{card.label}</Typography>
                        <Typography variant="h5" sx={{ mt: 1 }}>{card.value}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                borderRadius: 3,
                p: { xs: 2, sm: 3 },
                position: 'relative',
                minHeight: { xs: 320, sm: 460 },
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 65% 18%, rgba(163,166,255,0.48), transparent 52%), radial-gradient(circle at 50% 72%, rgba(83,221,252,0.16), transparent 58%)',
                  opacity: 0.9,
                }}
              />
              <Card
                sx={{
                  position: 'relative',
                  width: '100%',
                  bgcolor: 'rgba(15,25,48,0.84)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <CardContent>
                  <Box
                    component="img"
                    src="/img/stylized-chuck-milliken.png"
                    alt="Stylized portrait of Chuck Milliken"
                    sx={{
                      width: '100%',
                      display: 'block',
                      maxHeight: { xs: 300, sm: 360 },
                      objectFit: 'contain',
                      objectPosition: 'center top',
                      mb: 2,
                    }}
                  />
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CodeIcon color="secondary" fontSize="small" />
                    <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
                      CORE_TECH
                    </Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ mt: 1 }}>REACT_NEXTJS_SVELTE</Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
