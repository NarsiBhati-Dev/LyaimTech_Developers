import { Geist, Geist_Mono, Alex_Brush, Alegreya_SC, Aleo,  Abril_Fatface, Agbalumo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush", // Define a CSS variable for Alex Brush
  subsets: ["latin"],
  weight: "400", // Alex Brush typically uses a regular weight
});

const abrilFatface = Abril_Fatface({
  subsets: ['latin'], // Choose subsets based on your project
  weight: '400', // Customize weights if needed
  variable: '--font-abril'
});

const agbalumo = Agbalumo({
  subsets: ['latin'], // Specify subsets as needed
  weight: '400', // Choose font weights as applicable
  variable: '--font-agbalumo'
});

const alegreyaSC = Alegreya_SC({
  subsets: ['latin'], // Specify subsets
  variable: '--font-alegreya-sc', // Create a CSS variable for the font
  weight: ['400', '500', '700'], // Specify font weights you need
});

const aleo = Aleo({
  subsets: ['latin'], // Specify the subset
  weight: ['300', '400', '700'], // Include font weights you need
  variable: '--font-aleo', // Create a CSS variable for the font
});

export const metadata = {
  title: "Lyaim Tech Fantasy",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} ${alegreyaSC.variable} ${aleo.variable}  ${abrilFatface.variable} ${agbalumo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
