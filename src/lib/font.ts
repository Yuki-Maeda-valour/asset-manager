import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const fonts = {
  rubik,
}

export const globalStyles = `
  :root {
    --font-rubik: ${fonts.rubik.style.fontFamily};
  }
`
