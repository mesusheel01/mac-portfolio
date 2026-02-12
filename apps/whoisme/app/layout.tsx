import { Inter, Roboto_Mono, Rubik_Iso, Share_Tech_Mono, Sono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/theme/ThemeProvider';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });
const rubikIso = Rubik_Iso({ weight: "400", subsets: ['latin'], variable: '--font-rubik-iso' });
const sono = Sono({ subsets: ['latin'], variable: '--font-sono' });
const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-tech-mono' })

export default function RootLayout({ children }: {
  children: React.ReactNode

}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${rubikIso.variable}`}>
      <ThemeProvider>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}