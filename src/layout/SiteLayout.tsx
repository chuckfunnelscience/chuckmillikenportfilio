import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'App Dev', to: '/application-portfolio' },
  { label: 'WordPress', to: '/website-portfolio' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export function SiteLayout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Skip-to-content link — visible only when focused via keyboard */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2, minHeight: '74px !important' }}>
          <Typography
            component={NavLink}
            to="/"
            aria-label="Chuck Milliken – home"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            CHUCK_MILLIKEN
          </Typography>

          <Box component="nav" aria-label="Main navigation" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={1}>
              {navLinks.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  variant="text"
                  sx={{
                    color: 'text.secondary',
                    '&.active': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={0.5}>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/charles-milliken-iv/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/chuckfunnelscience"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>

        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: { xs: 'flex', md: 'none' },
            px: 2,
            pb: 1.4,
            gap: 1,
            flexWrap: 'wrap',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          {navLinks.map((item) => (
            <Button
              key={`${item.to}-mobile`}
              component={NavLink}
              to={item.to}
              size="small"
              variant="outlined"
              sx={{
                color: 'text.secondary',
                '&.active': {
                  color: 'secondary.main',
                  borderColor: 'secondary.main',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </AppBar>

      <Box id="main-content" component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 2,
          mt: 6,
          bgcolor: 'rgba(6,14,32,0.72)',
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="subtitle2">© 2026 Charles Milliken // Full Stack Web Developer</Typography>
          <Box component="nav" aria-label="Footer navigation">
            <Stack direction="row" spacing={2}>
              {navLinks.map((item) => (
                <Typography
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={{
                    textDecoration: 'none',
                    color: 'text.secondary',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    '&.active': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
