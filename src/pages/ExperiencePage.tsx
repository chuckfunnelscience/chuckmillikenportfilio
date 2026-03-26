import ApiIcon from '@mui/icons-material/Api'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import DevicesIcon from '@mui/icons-material/Devices'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const capabilityCards = [
  {
    icon: IntegrationInstructionsIcon,
    title: 'Languages & Frameworks',
    items: ['JavaScript, TypeScript', 'React, Next.js, Svelte/SvelteKit', 'Node.js, Express'],
  },
  {
    icon: ApiIcon,
    title: 'Apps & Data',
    items: ['REST, GraphQL (working knowledge)', 'SQL/NoSQL, Firebase', 'WordPress, ACF, Elementor'],
  },
  {
    icon: CloudQueueIcon,
    title: 'Platforms',
    items: ['AWS, GCP, Vercel, Netlify', 'Docker basics, Linux', 'CI/CD and GitHub workflows'],
  },
  {
    icon: DevicesIcon,
    title: 'UX & Delivery',
    items: ['Responsive UI engineering', 'SEO/SEM and conversion tracking', 'Performance and accessibility'],
  },
]

const timeline = [
  {
    period: 'JAN 2019 - PRESENT',
    company: 'FUNNEL SCIENCE, LLC',
    role: 'FULL STACK WEB DEVELOPER',
    bullets: [
      'Delivered multiple client-facing applications using React and Next.js, including an eCommerce platform (ERP phase one) and a real-time auction platform with pre-auction bidding and live clerking.',
      'Built Svelte/SvelteKit applications: logistics communication platform, cryptocurrency trading app, and storage auction website.',
      'Designed Node.js/Express APIs for crypto trading and logistics products; built a WebSocket service to decouple real-time events between React/Next.js frontend and LAMP backend.',
      'Created WordPress plugins with Svelte and PHP (interactive calculators, camp-registration listing integrations).',
      'Developed JavaScript tracking scripts to consolidate third-party analytics and route data into internal SaaS forms and Salesforce.',
      'Led modernization of internal SaaS into a mobile-first PWA; rebuilt responsive UI and shipped to Google Play and Microsoft Store.',
      'Built and migrated WordPress sites on client-provided hosting and in-house servers; supported Elementor/Divi workflows.',
      'Managed SEO/SEM operations; executed Google Ads and Bing Ads campaigns with internal conversion tracking and CRM analytics.',
      'Deployed FreePBX VoIP with Sangoma phones, migrated POTS numbers to Twilio, configured IVR; later delivered a similar call-center deployment for a client.',
      'Supported internal infrastructure: network, ISP, Wi-Fi, endpoints, office equipment, NAS, and remote employees.',
    ],
    tags: ['React', 'Next.js', 'Svelte', 'SvelteKit', 'Node.js', 'Express', 'WordPress', 'LAMP', 'WebSockets', 'Firebase', 'GitHub', 'And A Lot More...'],
  },
  {
    period: 'JUL 2011 - DEC 2018',
    company: 'ADFINITY.BIZ',
    role: 'WEB DEVELOPER',
    bullets: [
      'Built, redesigned, and maintained WordPress sites using Genesis Theme Framework, ACF, and popular plugins.',
      'Customized layouts with hand-written HTML/CSS/JS; ensured cross-browser compatibility.',
      'Supported SEO initiatives (on-page optimization, content/structure improvements).',
      'Executed digital marketing support (social media, email campaigns, advertising).',
      'Administered web servers, security, and configuration via WHM/cPanel.',
    ],
    tags: ['WordPress', 'Genesis', 'ACF', 'HTML/CSS/JS', 'WHM/cPanel', 'SEO', 'Digital Marketing', 'Google Ads', 'Bing Ads'],
  },
  {
    period: 'JUL 2007 - DEC 2010',
    company: 'COOKIES BY DESIGN',
    role: 'WEB DEVELOPER / ADMINISTRATOR',
    bullets: [
      'Maintained corporate website and product catalog; delivered ongoing content, layout, and SEO updates.',
      'Built an intranet portal for franchise communication.',
      'Produced email marketing campaigns and ensured HTML compatibility across clients.',
      'Created and optimized product imagery; reported on web/email performance and supported SEM campaigns (Google, Yahoo, MSN).',
    ],
    tags: ['HTML/CSS', 'Email Marketing', 'CMS Tooling', 'SEO', 'SEM', 'Google Ads', 'Yahoo Ads', 'MSN Ads'],
  },
]

export function ExperiencePage() {
  useEffect(() => {
    document.title = 'Experience – Chuck Milliken'
  }, [])

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={8}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em', color: 'secondary.main' }}>
                SYSTEM_CORE // PROFILE
              </Typography>
              <Box>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.55rem' }, lineHeight: 0.93 }}>
                  ENGINEERING
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.55rem' },
                    lineHeight: 0.93,
                    color: 'secondary.main',
                  }}
                >
                  DIGITAL IMPACT.
                </Typography>
              </Box>
              <Typography>
                Full-stack web developer with 7+ years delivering production web applications,
                client platforms, and internal SaaS tools. Deep experience across JavaScript,
                TypeScript, React, Next.js, and WordPress.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="React" size="small" />
                <Chip label="Next.js" size="small" />
                <Chip label="Svelte" size="small" />
                <Chip label="SvelteKit" size="small" />
                <Chip label="JavaScript" size="small" />
                <Chip label="TypeScript" size="small" />
                <Chip label="Node.js" size="small" />
                <Chip label="Express.js" size="small" />
                <Chip label="WordPress" size="small" />
                <Chip label="Prompt Engineering" size="small" />
                <Chip label="CD/CI" size="small" />
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                minHeight: 320,
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                backgroundColor: alpha('#192540', 0.52),
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 40px rgba(222,229,255,0.08)',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  position: 'absolute',
                  right: { xs: 8, md: -18 },
                  top: { xs: 18, md: 66 },
                  transform: { xs: 'none', md: 'rotate(90deg)' },
                  transformOrigin: 'top right',
                  color: 'primary.main',
                }}
              >
                LIVE_PROFILE_STREAM
              </Typography>
              <CardContent sx={{ position: 'relative', pt: 24 }}>
                <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
                  CURRENT_STATUS
                </Typography>
                <Typography variant="h6">CHANGING THE DIGITAL WORLD ONE APP AT A TIME.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            bgcolor: '#091328',
            borderRadius: 2,
            px: { xs: 2, md: 3 },
            py: { xs: 3.5, md: 4.5 },
          }}
        >
          <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={1.5}>
            <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em' }}>
              SYSTEM_CAPABILITIES
            </Typography>
            <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em' }}>
              VERSION 3.0.6 // NOW_2026
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            TECHNICAL BACKGROUND
          </Typography>

          <Grid container spacing={2}>
            {capabilityCards.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundImage: 'none',
                    border: 'none',
                    bgcolor: '#0f1930',
                    boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.4 }}>
                      <item.icon fontSize="small" color="secondary" />
                      <Typography variant="subtitle2">{item.title}</Typography>
                    </Stack>
                    <Stack spacing={0.7}>
                      <Box
                        component="ul"
                        sx={{ m: 0, pl: 2.5, '& li + li': { mt: 0.7 } }}
                      >
                        {item.items.map((point) => (
                          <Typography component="li" key={point} sx={{ fontSize: '0.88rem' }}>
                            {point}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Stack>
        </Box>

        <Stack spacing={4}>
          <Stack alignItems="center" spacing={1}>
            <Typography variant="subtitle2" sx={{ letterSpacing: '0.12em', color: 'secondary.main' }}>
              EVOLUTION_PATH // TIMELINE
            </Typography>
            <Typography variant="h2" sx={{ textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
              PROFESSIONAL EXPERIENCE
            </Typography>
          </Stack>

          <Box sx={{ position: 'relative' }}>
            <Stack spacing={3.5}>
              {timeline.map((entry, idx) => {
                const leftAligned = idx % 2 === 0
                return (
                  <Box
                    key={entry.company}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '1fr 40px 1fr' },
                      alignItems: 'start',
                      gap: 2,
                    }}
                  >
                    <Box sx={{ order: { xs: 2, md: leftAligned ? 1 : 3 } }}>
                      <Card
                        sx={{
                          backgroundImage: 'none',
                          border: 'none',
                          bgcolor: '#0f1930',
                          boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
                        }}
                      >
                        <CardContent>
                          <Typography variant="subtitle2">{entry.period}</Typography>
                          <Typography variant="h5" sx={{ mt: 0.6 }}>{entry.company}</Typography>
                          <Typography variant="subtitle2" sx={{ mt: 0.4, color: 'secondary.main' }}>
                            {entry.role}
                          </Typography>
                          <Stack spacing={1.2} sx={{ mt: 1.6 }}>
                            {entry.bullets.map((bullet) => (
                              <Typography key={bullet} sx={{ fontSize: '0.9rem' }}>
                                {bullet}
                              </Typography>
                            ))}
                          </Stack>
                          <Stack direction="row" spacing={0.8} sx={{ mt: 1.8 }} flexWrap="wrap" useFlexGap>
                            {entry.tags.map((tag) => (
                              <Chip key={tag} label={tag} size="small" />
                            ))}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Box>

                    <Box
                      sx={{
                        order: { xs: 1, md: 2 },
                        display: 'flex',
                        justifyContent: 'center',
                        pt: { xs: 0, md: 6 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: idx % 2 === 0 ? 'secondary.main' : 'primary.main',
                          boxShadow: '0 0 26px rgba(83,221,252,0.45)',
                        }}
                      />
                    </Box>

                    <Box sx={{ order: { xs: 3, md: leftAligned ? 3 : 1 } }} />
                  </Box>
                )
              })}
            </Stack>
          </Box>
        </Stack>

        <Card
          sx={{
            borderRadius: 3,
            backgroundImage: 'none',
            border: 'none',
            bgcolor: '#091328',
            boxShadow: 'inset 0 1px 0 rgba(163,166,255,0.08)',
          }}
        >
          <CardContent sx={{ py: { xs: 4, md: 5 }, textAlign: 'center' }}>
            <Typography variant="h4">READY TO BUILD THE NEXT ITERATION?</Typography>
            <Typography sx={{ mt: 1.4, maxWidth: 700, mx: 'auto' }}>
              I am currently open to new opportunities and high-impact frontend/full-stack
              collaborations. Let&apos;s discuss your development needs.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.6} justifyContent="center" sx={{ mt: 3 }}>
              <Button component={NavLink} to="/contact" variant="contained">
                Initiate Contact
              </Button>
              <Button component={NavLink} to="/application-portfolio" variant="outlined">
                View Projects
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  )
}
