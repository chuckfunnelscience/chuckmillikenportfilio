import { Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { PortfolioGallery } from '../components/PortfolioGallery'
import { applicationProjects } from '../data/portfolioData'

export function ApplicationPortfolioPage() {
  useEffect(() => {
    document.title = 'Application Portfolio – Chuck Milliken'
  }, [])

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
      <Stack spacing={3}>
        <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em', color: 'secondary.main' }}>
          PORTFOLIO // APPLICATIONS
        </Typography>
        <Typography variant="h1">Application Portfolio</Typography>
        <Typography>
          This page presents a curated set of production applications spanning live auctions, SaaS products, and industry-specific communication tools. In fact, this website is a React application built with TypeScript, Material UI, and React Router. I thought it would be fitting to build my portfolio site as an application project, and I hope it serves as a testament to my skills and attention to detail.
        </Typography>

        <Stack spacing={2.2}>
          {applicationProjects.map((project) => (
            <Card key={project.title}>
              <CardContent sx={{ display: 'grid', gap: 2 }}>
                <Typography variant="h5">{project.title}</Typography>
                <Stack spacing={1.2} sx={{ mt: 0.5 }}>
                  {project.summary.map((para, i) => (
                    <Typography key={i}>{para}</Typography>
                  ))}
                </Stack>
                <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
                  {project.stack}
                </Typography>
                <PortfolioGallery images={project.images} />
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
