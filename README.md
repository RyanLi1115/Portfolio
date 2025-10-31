# Portfolio Website

A modern, minimalist portfolio website built with Next.js, featuring interactive 3D effects and a clean white design theme.

## 🚀 Features

### Interactive Components
- **SVG Mask Effect**: Mouse-following text reveal animation on hover
- **3D Pin Cards**: Interactive 3D rotating cards for project showcase
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion

### Design System
- **Typography**: Custom font system with Inter (sans-serif) and VT323 (display)
- **Color Palette**: Clean white theme with carefully selected grays
- **Spacing**: Consistent spacing system using Tailwind CSS
- **Components**: Reusable UI components following design principles

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Next.js Font Optimization (Inter, VT323)

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with fonts and navbar
│   ├── page.tsx             # Home page with hero and gallery sections
│   └── not-found.tsx         # 404 error page
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       # Global navigation header
│   └── ui/
│       ├── 3d-pin.tsx       # Interactive 3D pin card component
│       ├── gallery-pins.tsx # Gallery section with pin cards
│       └── svg-mask-effect.tsx # Mouse-following text reveal effect
├── lib/
│   └── fonts.ts             # Font configuration (Inter, VT323)
├── public/
│   ├── homePage.jpg         # Personal profile image (excluded from git)
│   ├── homepageExperience.png # Professional experience screenshot (excluded from git)
│   └── sdg.jpg              # SDG project image (excluded from git)
├── docs/
│   ├── Design.md            # Design system specifications
│   └── Structure.md         # Project structure documentation
├── tailwind.config.ts       # Tailwind configuration with custom design tokens
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Typography
- **Main Font**: Inter (clean, modern sans-serif)
- **Display Font**: VT323 (retro pixel font for headers)

### Colors
- **Background**: Pure white (#FFFFFF)
- **Text Primary**: Dark gray (#111111)
- **Text Secondary**: Medium gray (#111111)
- **Interactive**: Light gray (#999999)
- **Borders**: Subtle gray (#EAEAEA)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RyanLi1115/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images** (Required)
   Since personal images are excluded from the repository, you need to add them manually.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Sections

### Home Page (`/`)
- **Hero Section**: Interactive SVG mask effect with personal introduction
- **Profile Image**: Circular photo with shadow and border effects
- **Gallery Section**: Two 3D pin cards showcasing professional experience and projects

### Navigation
- **Home**: Return to homepage
- **Experience**: Professional work history
- **Projects**: Personal and academic projects
- **Education**: Academic background
- **Contact**: Contact information and links

## 🎯 Key Components

### SVG Mask Effect
Interactive text reveal effect that follows mouse movement:
- Default state: Shows brief introduction
- Hover state: Reveals detailed information with blue highlights
- Smooth transitions and responsive design

### 3D Pin Cards
Interactive project showcase cards:
- 3D rotation animation on hover
- Clickable links to external projects
- Professional experience and personal projects
- Responsive layout (vertical on mobile, horizontal on desktop)

### Wrobble Cards
A card effect that translates and scales on mousemove, perfect for feature cards.

### Navigation Bar
Global header with:
- Personal branding
- Responsive navigation menu
- Pixel font styling for retro aesthetic
- Smooth hover transitions

## 🎨 Customization

### Adding New Projects
1. Add project images to `/public/`
2. Update `gallery-pins.tsx` with new project data
3. Modify card content, titles, and links

### Styling Changes
- **Colors**: Update `tailwind.config.ts` color palette
- **Typography**: Modify font sizes in `tailwind.config.ts`
- **Spacing**: Adjust spacing values in design system
- **Components**: Customize individual component styles

### Adding New Pages
1. Create new route in `/app/` directory
2. Update navigation in `Navbar.tsx`
3. Follow existing page structure and styling

## 📦 Dependencies

### Core
- `next`: React framework
- `react`: UI library
- `typescript`: Type safety

### Styling & Animation
- `tailwindcss`: Utility-first CSS framework
- `framer-motion`: Animation library
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixing

### Fonts
- `@next/font`: Font optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Railway**: Deploy with Docker
- **Custom Server**: Build and serve static files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ryan Yiran Li**
- Full-stack developer
- [LinkedIn Profile](https://www.linkedin.com/in/ryan-li-5b594a361/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions:
- Email: ryanlii1115@gmail.com
- LinkedIn: https://www.linkedin.com/in/ryan-li-5b594a361/
- Website: ryanli.online

