import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { Box, Stack } from '@mui/material'
import { lazy, Suspense, useMemo, useState } from 'react'

const GalleryLightbox = lazy(() =>
  import('./GalleryLightbox').then((m) => ({ default: m.GalleryLightbox })),
)

export type GalleryImage = {
  src: string
  alt: string
  thumbnailSrc?: string
}

type PortfolioGalleryProps = {
  images: GalleryImage[]
}

export function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const hasImages = images.length > 0
  const currentImage = useMemo(() => {
    if (activeIndex === null) return null
    return images[activeIndex]
  }, [activeIndex, images])

  if (!hasImages) {
    return null
  }

  function openImage(index: number) {
    setActiveIndex(index)
  }

  function closeImage() {
    setActiveIndex(null)
  }

  function goPrevious() {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  function goNext() {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)' },
          gap: 0.75,
          mt: 1,
        }}
      >
          {images.map((image, index) => (
            <Box
              key={image.src}
              component="button"
              type="button"
              onClick={() => openImage(index)}
              aria-label={`View full size: ${image.alt}`}
              sx={{
                p: 0,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#091328',
                borderRadius: 1,
                overflow: 'hidden',
                position: 'relative',
                height: 0,
                paddingBottom: '100%',
                '&:hover .gallery-overlay': {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={image.thumbnailSrc ?? image.src}
                alt={image.alt}
                loading="lazy"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Stack
                className="gallery-overlay"
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(6, 14, 32, 0.66)',
                  opacity: 0,
                  transition: 'opacity 160ms ease',
                }}
              >
                <OpenInFullIcon fontSize="small" sx={{ color: 'secondary.main' }} />
              </Stack>
            </Box>
          ))}
        </Box>

      <Suspense fallback={null}>
        <GalleryLightbox
          open={activeIndex !== null}
          image={currentImage}
          onClose={closeImage}
          onPrevious={goPrevious}
          onNext={goNext}
        />
      </Suspense>
    </>
  )
}
