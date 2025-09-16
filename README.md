# Edward Guillen Portfolio

A modern, responsive portfolio website built with Next.js, featuring smooth animations, GSAP, and a custom deployment setup for production hosting.

## 🌐 Live Website

**https://edwardguillen.com**

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Modern UI**: Clean, professional design with custom components
- **Performance Optimized**: Next.js 15 with static generation
- **Production Ready**: Custom Node.js server with PM2 process management

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Styling**: CSS Modules
- **Animations**: GSAP with ScrollTrigger
- **Icons**: React Icons
- **Deployment**: Custom Node.js server + PM2
- **Hosting**: Plesk with Git integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (managed with nodenv)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/helloluma/edwardguillen.git
   cd edwardguillen
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.js            # Homepage
│   ├── about/             # About page
│   ├── case-studies/      # Case studies
│   └── [project]/         # Individual project pages
├── components/             # Reusable components
│   ├── AnimatedButton/    # Custom button with GSAP animations
│   ├── Nav/               # Navigation component
│   ├── Footer/            # Footer component
│   └── ...                # Other components
└── hooks/                 # Custom React hooks
    └── useViewTransition.js
```

## 🎨 Components

### AnimatedButton
Custom button component with GSAP animations and responsive hiding capabilities.

**Props:**
- `label`: Button text
- `route`: Navigation route
- `className`: Additional CSS classes (supports `hide-on-mobile`)
- `animate`: Enable/disable animations
- `animateOnScroll`: Trigger animations on scroll
- `delay`: Animation delay

**Example:**
```jsx
<AnimatedButton
  label="Learn More"
  route="/about"
  className="hide-on-mobile"
  animateOnScroll={false}
  delay={1.15}
/>
```

## 🚀 Deployment

### Production Setup
The project includes custom deployment configuration for production hosting:

- **`app.js`**: Custom Node.js server
- **`ecosystem.config.js`**: PM2 process manager configuration
- **`package-production.json`**: Production-optimized dependencies

### Automatic Deployment
The project is configured for automatic deployment via Plesk Git integration:

1. Push changes to the `main` branch
2. Plesk automatically pulls the latest code
3. Runs deployment actions:
   - `npm install --legacy-peer-deps`
   - `npm run build`
   - `npx pm2 restart edwardguillen`

## 📱 Responsive Design

- **Desktop**: Full feature set with all animations
- **Tablet**: Optimized layout and interactions
- **Mobile**: Streamlined experience with hidden elements (e.g., "Learn More" button)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Making Changes

1. **Local Development**: Make changes and test locally
2. **Commit Changes**: `git add . && git commit -m "Description"`
3. **Push to GitHub**: `git push origin main`
4. **Automatic Deployment**: Changes deploy automatically to production

## 📄 License

This project is private and proprietary to Edward Guillen.

## 🤝 Contributing

This is a personal portfolio project. For any questions or suggestions, please contact Edward Guillen directly.

---

**Built with ❤️ by Edward Guillen**