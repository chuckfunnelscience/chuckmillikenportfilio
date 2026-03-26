import { Button, Container, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found – Chuck Milliken'
  }, [])

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 14 }, textAlign: 'center' }}>
      <Stack spacing={2.4} alignItems="center">
        <Typography variant="subtitle2">404</Typography>
        <Typography variant="h2">Signal Lost</Typography>
        <Typography>The requested page could not be found in this deployment.</Typography>
        <Button component={NavLink} to="/" variant="contained">
          Return Home
        </Button>
      </Stack>
    </Container>
  )
}
