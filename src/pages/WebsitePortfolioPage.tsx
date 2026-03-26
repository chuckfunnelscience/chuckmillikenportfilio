import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { websiteProjects } from '../data/portfolioData'

export function WebsitePortfolioPage() {
  const [heroProject, secondaryProject, tertiaryProject, ...remainingProjects] = websiteProjects
  const [isElementorModalOpen, setIsElementorModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Website Portfolio – Chuck Milliken'
  }, [])

  const stackTags = ['WORDPRESS', 'ELEMENTOR', 'ACF', 'WOOCOMMERCE']

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
      <Stack spacing={5}>
        <Grid container spacing={3} alignItems="start">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={1.8}>
              <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em', color: 'secondary.main' }}>
                PORTFOLIO // WORDPRESS
              </Typography>
              <Typography variant="h1">Website Portfolio</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography sx={{ mt: { xs: 0, md: 5 }, maxWidth: 560 }}>
              With over 15 years of specialized experience in WordPress development, this
              portfolio presents a curated selection of websites delivered over the past 7 years
              for a diverse clientele and business goals.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card
              sx={{
                height: '100%',
                border: 'none',
                bgcolor: '#0f1930',
                boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
              }}
            >
              <Box
                component="img"
                src={heroProject.images[0]?.thumbnailSrc ?? heroProject.images[0]?.src}
                alt={heroProject.images[0]?.alt || heroProject.name}
                sx={{ width: '100%', height: { xs: 220, md: 400 }, objectFit: 'cover', display: 'block' }}
              />
              <CardContent>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  {heroProject.name}
                </Typography>
                <Stack direction="row" spacing={0.8} sx={{ mt: 1.1 }} flexWrap="wrap" useFlexGap>
                  <Chip size="small" label="WORDPRESS" />
                  <Chip size="small" label="ELEMENTOR" />
                  <Chip size="small" label="CUSTOM_THEME" />
                </Stack>
                <Typography sx={{ mt: 1.4, maxWidth: 840 }}>
                  {heroProject.tagline}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={heroProject.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  endIcon={<OpenInNewIcon fontSize="small" aria-hidden="true" />}
                  aria-label={`Visit ${heroProject.name} (opens in new tab)`}
                >
                  Visit Site
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              sx={{
                height: '100%',
                border: 'none',
                bgcolor: alpha('#192540', 0.56),
                backdropFilter: 'blur(18px)',
                boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
              }}
            >
              <Box
                component="img"
                src={secondaryProject.images[0]?.thumbnailSrc ?? secondaryProject.images[0]?.src}
                alt={secondaryProject.images[0]?.alt || secondaryProject.name}
                sx={{ width: '100%', height: { xs: 220, md: 300 }, objectFit: 'cover', display: 'block' }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  {secondaryProject.name}
                </Typography>
                <Typography sx={{ mt: 1.2 }}>{secondaryProject.tagline}</Typography>
                <Chip size="small" label="CLIENT_DELIVERY" sx={{ mt: 1.2 }} />
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={secondaryProject.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  endIcon={<OpenInNewIcon fontSize="small" aria-hidden="true" />}
                  aria-label={`Visit ${secondaryProject.name} (opens in new tab)`}
                >
                  Visit Site
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                border: 'none',
                bgcolor: '#0f1930',
                boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
              }}
            >
              <Box
                component="img"
                src={tertiaryProject.images[0]?.thumbnailSrc ?? tertiaryProject.images[0]?.src}
                alt={tertiaryProject.images[0]?.alt || tertiaryProject.name}
                sx={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  {tertiaryProject.name}
                </Typography>
                <Typography sx={{ mt: 1.2 }}>{tertiaryProject.tagline}</Typography>
                <Chip size="small" label="WEBSITE_BUILD" sx={{ mt: 1.2 }} />
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={tertiaryProject.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  endIcon={<OpenInNewIcon fontSize="small" aria-hidden="true" />}
                  aria-label={`Visit ${tertiaryProject.name} (opens in new tab)`}
                >
                  Visit Site
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              sx={{
                height: '100%',
                border: 'none',
                bgcolor: '#091328',
                boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 }, minHeight: { md: 220 } }}>
                <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em', color: 'secondary.main' }}>
                  WHY ELEMENTOR?
                </Typography>
                <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                  BUILD FOR CLIENT OWNERSHIP
                </Typography>
                <Typography sx={{ mt: 1.4, maxWidth: 640 }}>
                  I advocate for delivering websites that clients can confidently update without
                  coding. Elementor enables practical handoff while still supporting advanced,
                  production-ready implementations.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ mt: 2.4 }}
                  onClick={() => setIsElementorModalOpen(true)}
                  aria-label="Read more about why I use Elementor"
                  aria-haspopup="dialog"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            bgcolor: '#091328',
            px: { xs: 2, md: 3 },
            py: { xs: 2.5, md: 3.2 },
            borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            {stackTags.map((tag) => (
              <Grid key={tag} size={{ xs: 6, md: 3 }}>
                <Typography variant="subtitle2" sx={{ color: 'secondary.main', letterSpacing: '0.12em' }}>
                  {tag}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack spacing={2}>
          <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em' }}>
            Websites
          </Typography>
          <Grid container spacing={2}>
            {remainingProjects.map((site) => (
              <Grid key={site.url} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    border: 'none',
                    bgcolor: '#0f1930',
                    boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
                  }}
                >
                  <Box
                    component="img"
                    src={site.images[0]?.thumbnailSrc ?? site.images[0]?.src}
                    alt={site.images[0]?.alt || site.name}
                    sx={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }}
                  />
                  <CardContent sx={{ pb: 1 }}>
                    <Typography variant="h6">{site.name}</Typography>
                    <Typography sx={{ mt: 0.8, fontSize: '0.92rem' }}>{site.tagline}</Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      endIcon={<OpenInNewIcon fontSize="small" aria-hidden="true" />}
                      aria-label={`Visit ${site.name} (opens in new tab)`}
                    >
                      Visit Site
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>

      <Dialog
        open={isElementorModalOpen}
        onClose={() => setIsElementorModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pr: 6 }}>
          Why Elementor?
          <IconButton
            onClick={() => setIsElementorModalOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'text.secondary' }}
            aria-label="Close modal"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'grid', gap: 2.2, pb: 3.2 }}>
          <Typography>
            It has come to my attention that there is a prevailing sentiment among certain
            WordPress developers regarding the use of page builders, such as Elementor, for
            website development.
          </Typography>
          <Typography sx={{ fontStyle: 'italic', color: 'primary.main' }}>
            "True developers utilize ACF to craft custom Gutenberg-based themes, and so on..."
          </Typography>
          <Typography>
            Is that truly the most efficient use of your time? Personally, I find this approach
            problematic, as I have a range of projects to complete.
          </Typography>
          <Typography>
            I advocate for delivering a final product that enables the client to make
            modifications without requiring coding knowledge or deciphering the intricacies of the
            website you developed. While some page builders may have limitations, Elementor stands
            out as one of the most user-friendly options available, catering to both novice users
            and experienced professionals alike.
          </Typography>
          <Typography>
            Ultimately, you will be able to transfer complete ownership of the website to the
            client, giving them the autonomy to decide who will manage it moving forward. This
            approach fosters trust and increases the likelihood that they will engage you for
            ongoing maintenance services.
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  )
}
