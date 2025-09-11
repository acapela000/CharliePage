## 🚀Charlie Thao's Portfolio Website
### 📋Project Overview
This is a modern portfolio website built with Next.js that showcases a developer's projects, skills, and experience. The site features a clean, responsive design with interactive elements and dynamic content.

### 🛠️Tech Stack
#### Frontend
- ⚛️Next.js - React framework for server-side rendering and static site generation
- ⚛️React - JavaScript library for building user interfaces
- 📘TypeScript - Strongly typed programming language that builds on JavaScript
- 🎨Tailwind CSS - Utility-first CSS framework
#### UI Components
- 🔍Lucide React - Icon library
- 🌟Atropos - 3D touch-slider library for parallax effect cards
- 🧩Shadcn UI - UI component library (Badge, Dialog, etc.)
#### Data Fetching
🔄GitHub API - Used to fetch GitHub activity data
### 📁Project Structure
```markdown
src/
├── app/                 # App Router pages and layouts
│   ├── about/           # About page
│   ├── api/             # API routes
│   │   └── github/      # GitHub API endpoints
│   └── page.tsx         # Homepage
├── components/          # Reusable React components
│   ├── ui/              # UI components (shadcn)
│   ├── atropos-card.tsx # Interactive 3D card component
│   ├── certifications.tsx # Certifications display component
│   ├── github-activity.tsx # GitHub activity component
│   ├── project-grid.tsx # Projects display grid
│   └── ...
├── lib/                 # Utility functions and shared code
│   └── utils.ts         # Helper functions
└── ...
public/                  # Static assets
```
### ✨Key Features
#### 1. 🎮Interactive Project Grid
✅ Displays projects in a responsive bento-style grid
✅ Projects have color themes and support various size formats
✅ Modal dialogs show detailed project information
✅ Links to live demos and GitHub repositories
#### 2. 🔄GitHub Activity Integration
✅ Fetches and displays recent GitHub activity
✅ Uses custom API endpoint to manage GitHub API requests
#### 3. 📱Responsive Design
✅ Mobile-first approach with responsive layouts
✅ Adapts to different screen sizes and devices
#### 4. 📊Dynamic Content
✅ Projects data structure allows for easy addition/modification
✅ Supports various content sections (certifications, languages, skills)
#### 5. 🌟3D Interactive Card
✅ Uses Atropos library for parallax effect card
✅ Creates engaging visual element on the homepage

### 🔄Data Flow
#### 1. 📝Static Data
- Project information is defined in `page.tsx`
- Each project includes title, description, technologies, image, and links
#### 2. 🔌GitHub API Integration
- Client requests GitHub activity data from `/api/github` endpoint
- Server-side API route fetches data from GitHub API using authentication
- Data is returned to client and displayed in the GitHub activity component
#### 3. 👆User Interactions
- User can click on projects to view details in a modal dialog
- Navigation links in header for different sections of the site
- External links to social media profiles and contact information
### 📄Page Structure
#### 🏠Homepage (`src/app/page.tsx`)
- Header with navigation links
- Hero section with Atropos 3D card
- Project grid showcasing various projects
- GitHub activity section
- Skills and certifications sections
- Footer with contact information
#### 👤About Page (`src/app/about/page.tsx`)
- Personal information and profile
- Tabbed interface for:
  + About Me section with bio
  + Work Experience timeline (in progress)
### 🔗API Endpoints
#### 🔄GitHub API (`src/app/api/github/route.ts`)
- Method: GET `/api/github`
- Purpose: Fetch GitHub activity data
- Response: JSON with recent GitHub events and contributions
### 🚀Deployment
The application is designed to be deployed on Vercel, which offers seamless integration with Next.js projects. The deployment process is streamlined with automatic previews for pull requests and continuous deployment from the main branch.
### 🏁Getting Started
To run the project locally, follow these steps:
```markdown
# Install dependencies
npm install

# Run development server
npm run dev
```
Visit http://localhost:3000 to view the site.
### 🔐Environment Variables
Create a `.env.local` file in the root directory and add the following variables:
```plaintext
GITHUB_TOKEN=your_github_personal_access_token
```
### 🤝Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the existing style and includes appropriate tests if applicable.
### 📜License
This project is licensed under the MIT License. See the LICENSE file for details.
### 🔮Future Enhancements
#### Database Integration
✅ Currently using static data and GitHub API
🔲 Plan to integrate MongoDB/Supabase for dynamic content management
🔲 Store projects, blog posts, and user interactions in database
🔲 Implement admin dashboard for content updates
#### Additional Features
🔲 Complete the Work Experience section with a timeline component
🔲 Add blog functionality to share articles and tutorials
🔲 Implement dark mode for better accessibility
🔲 Optimize performance and SEO further
🔲 Expand project filtering and categorization options
🔲 Integrate more social media platforms
🔲 Add animations and transitions for enhanced user experience
🔲 Implement a contact form for direct inquiries
🔲 Add internationalization support for multiple languages
🔲 Incorporate user testimonials and reviews
🔲 Enhance accessibility features for better usability
🔲 Integrate analytics to track user interactions and site performance
### 🎯Conclusion
This portfolio website serves as a comprehensive showcase of a my skills and projects. With its modern design, interactive elements, and dynamic content, it provides an engaging experience for visitors and potential employers. The use of Next.js and various libraries ensures a robust and scalable application that can be easily maintained and expanded in the future.