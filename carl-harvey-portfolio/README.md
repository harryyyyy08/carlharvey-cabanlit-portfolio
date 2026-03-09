# Carl Harvey Cabanlit - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase projects and attract potential clients.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Project Showcase**: Interactive project cards with detailed modal views
- **Contact Forms**: Functional contact form with meeting scheduling integration
- **Resume Download**: One-click resume download functionality
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **TypeScript**: Type-safe development for better code quality

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel/Netlify free tier hosting

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── layout/            # Layout components (Header, Footer, Layout)
│   ├── sections/          # Page sections (Hero, About, Services, etc.)
│   └── ui/               # Reusable UI components
├── data/                 # Static data and content
├── types/                # TypeScript type definitions
└── assets/               # Static assets (images, docs, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carl-harvey-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env-example.txt .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Contact Form Service
NEXT_PUBLIC_CONTACT_FORM_URL=

# Meeting Booking Service (Calendly)
NEXT_PUBLIC_CALENDLY_URL=

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Environment Variables

Create a `.env.local` file in the root directory and configure the following:

- `NEXT_PUBLIC_CONTACT_FORM_URL`: Your contact form service endpoint (Formspree, Netlify Forms, etc.)
- `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly scheduling link
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

### Adding Your Content

1. **Personal Information**: Edit `src/data/content.ts` to update your personal details
2. **Projects**: Modify the `projects` array in `src/data/content.ts`
3. **Services**: Update the `services` array in `src/data/content.ts`
4. **Profile Photo**: Add your photo to `public/assets/images/profile/`
5. **Resume**: Add your resume PDF to `public/assets/docs/`
6. **Project Screenshots**: Add project images to `public/assets/images/project_thumbnails/`

## 🎨 Customization

### Colors and Styling

The project uses a professional color scheme with blue as the primary accent. You can customize colors in `tailwind.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for fast loading
- **Image Optimization**: WebP format and lazy loading
- **Bundle Size**: Optimized for fast initial load

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js and Tailwind CSS
