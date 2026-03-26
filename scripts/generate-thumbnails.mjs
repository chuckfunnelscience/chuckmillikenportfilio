import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const srcRoot = join(__dirname, '..', 'public', 'img')
const destRoot = join(__dirname, '..', 'public', 'img', 'thumbs')

// Portfolio gallery cells are 1:1 squares; website cards are wide landscape.
function resizeOptions(srcPath) {
  const rel = relative(srcRoot, srcPath).replace(/\\/g, '/')
  if (rel.startsWith('websites/')) {
    // Cards render up to ~960px wide × 400px tall with objectFit:cover
    return { width: 960, height: 400, fit: 'cover', position: 'top' }
  }
  // Portfolio gallery grid cells are square
  return { width: 400, height: 400, fit: 'cover', position: 'top' }
}

async function processDir(srcDir, destDir) {
  const entries = await readdir(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.name === 'thumbs') continue
    const srcPath = join(srcDir, entry.name)
    const destPath = join(destDir, entry.name)
    if (entry.isDirectory()) {
      await mkdir(destPath, { recursive: true })
      await processDir(srcPath, destPath)
    } else if (/\.(png|jpe?g|webp|avif)$/i.test(entry.name)) {
      let skip = false
      try {
        const [srcStat, destStat] = await Promise.all([stat(srcPath), stat(destPath)])
        if (destStat.mtimeMs >= srcStat.mtimeMs) skip = true
      } catch {
        // dest doesn't exist yet
      }
      if (skip) continue
      await mkdir(destDir, { recursive: true })
      await sharp(srcPath)
        .resize(resizeOptions(srcPath))
        .toFile(destPath)
      console.log(`  thumbnail: ${destPath.replace(join(__dirname, '..'), '')}`)
    }
  }
}

console.log('Generating thumbnails...')
await processDir(srcRoot, destRoot)
console.log('Done.')
