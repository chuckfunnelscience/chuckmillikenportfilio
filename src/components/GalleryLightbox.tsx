import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogContent, IconButton, Stack } from '@mui/material'
import type { GalleryImage } from './PortfolioGallery'

type GalleryLightboxProps = {
  open: boolean
  image: GalleryImage | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function GalleryLightbox({ open, image, onClose, onPrevious, onNext }: GalleryLightboxProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={false} fullScreen aria-label="Image gallery viewer">
      <DialogContent sx={{ p: 0, bgcolor: '#060e20', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'fixed', right: 12, top: 12, zIndex: 10, color: 'text.primary', bgcolor: 'rgba(6,14,32,0.7)' }}
          aria-label="Close gallery"
        >
          <CloseIcon />
        </IconButton>

        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ flex: 1, minHeight: 0 }}>
          <IconButton
            onClick={onPrevious}
            sx={{ color: 'text.primary', m: 1, flexShrink: 0, position: 'sticky', top: '50vh', alignSelf: 'flex-start', mt: 'calc(50vh - 24px)' }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box sx={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', p: 2 }}>
            {image ? (
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            ) : null}
          </Box>

          <IconButton
            onClick={onNext}
            sx={{ color: 'text.primary', m: 1, flexShrink: 0, position: 'sticky', top: '50vh', alignSelf: 'flex-start', mt: 'calc(50vh - 24px)' }}
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
