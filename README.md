#Live-link : https://play-store-next-js-2xfh.vercel.app/

# Play Store Next.js

A modern Play Store clone built with Next.js 16, React 19, and Tailwind CSS. Browse apps, install/uninstall them, and track your dashboard metrics in real-time.

## Features

✨ **Core Features:**
- 📱 **Browse Apps** - Explore all available applications with filters and search
- 💾 **Install/Uninstall** - One-click app installation with loading states
- 📊 **Dashboard** - Real-time dashboard with install stats, storage usage, and ratings
- 📋 **Installation Manager** - View and manage installed apps with uninstall support
- 🎨 **Responsive Design** - Seamlessly works on mobile, tablet, and desktop

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.2.2 + DaisyUI 5.5.19
- **Icons:** React Icons 5.6.0
- **State Management:** React Context API
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── Dashboard/           # Dashboard feature module
│   │   ├── Home/                # Home page components
│   │   ├── Navbar/              # Navigation bar
│   │   ├── Footer/              # Footer
│   │   └── ...
│   ├── Context/
│   │   └── AppInstallContext.jsx # Global install state
│   ├── Apps/                    # Apps listing page
│   ├── Installation/            # Installed apps page
│   ├── DashBoard/               # Dashboard page
│   ├── layout.js                # Root layout with providers
│   ├── page.js                  # Home page entry
│   └── globals.css              # Global styles
├── lib/
│   └── providers/               # Provider setup
└── public/
    └── data.json                # App data mock
```

## Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd play-store-next-js
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**
No environment variables required for basic usage.

## Getting Started

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## Pages & Routes

- **`/`** - Home page with hero, score stats, and featured apps
- **`/Apps`** - Browse all available applications
- **`/Apps/[slug]`** - App detail page with install button
- **`/Installation`** - Manage installed applications
- **`/DashBoard`** - Dashboard with stats and recommendations

## How to Use

### Installing an App
1. Navigate to `/Apps`
2. Browse the app catalog
3. Click on an app card to view details
4. Click "Install Now" button
5. Wait for the installation to complete
6. View your installed app in the Dashboard or Installation page

### Managing Apps
- **Dashboard** (`/DashBoard`) - Quick overview of all installed apps with metrics
- **Installation** (`/Installation`) - Detailed list with uninstall functionality

### Context API

The app uses a global `AppInstallContext` to manage installed apps state:

```javascript
const { installedApps, setInstalledApps } = useContext(AppInstallContext);
```

## Data Source

App data is stored in `public/data.json` with the following structure:

```json
{
  "id": 1,
  "title": "App Name",
  "companyName": "Company",
  "description": "App description",
  "image": "image-url",
  "size": 80,
  "reviews": "172000K",
  "ratingAvg": 4.5,
  "downloads": "5000M",
  "ratings": [...]
}
```

## Styling

The project uses **Tailwind CSS** with custom color palette:

- Primary: `#0B2945` (dark blue)
- Accent: `#14c886` (green)
- Background: `#f5f5f5`, `#f6f8fb`

## Responsive Design

- **Mobile:** `sm:` breakpoint (640px)
- **Tablet:** `md:` breakpoint (768px)
- **Desktop:** `lg:` breakpoint (1024px)

Mobile and desktop views are separate components for optimal UX.

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

**Build Configuration** (`vercel.json`):
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### Other Hosting

Works with any Node.js hosting provider. Ensure:
- Node.js 18+ is installed
- Environment set to production
- Build command: `npm run build`
- Start command: `npm start`

## Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the repository.
