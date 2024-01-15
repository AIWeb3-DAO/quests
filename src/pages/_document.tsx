import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from '@/components/ui/ThemeProvide'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
      <body>
        <Main />
        <NextScript />
      </body>
      </ThemeProvider>
    </Html>
  )
}
