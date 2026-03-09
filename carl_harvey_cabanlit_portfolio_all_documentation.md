# Carl Harvey Cabanlit - Portfolio

## Project Description
gusto ko gumawa ng personal portfolio website. target audience ko ay mga client na gusto magpa gawa or develop ng systems. sa key features, gusto ko lagyan ng mga accomplished projects or mga app na nagawa ko. wala akong idea kung ano pa ang mga dapat or kailangan ilagay

## Product Requirements Document
# Product Requirements Document (PRD): Carl Harvey Cabanlit - Personal Portfolio Website

## 1. Introduction

### 1.1 Purpose of this Document
This Product Requirements Document (PRD) outlines the goals, features, scope, and technical specifications for the development of Carl Harvey Cabanlit's personal portfolio website. This website will serve as a professional showcase to attract potential clients interested in custom system development, personal websites, or portfolio creation services.

### 1.2 Project Goals
1.  Establish a professional online presence for Carl Harvey Cabanlit.
2.  Attract potential clients (Small Business Owners, specific industry players, and individuals needing custom web/portfolio solutions).
3.  Clearly showcase technical capabilities through detailed project case studies.
4.  Provide clear pathways for client engagement (meeting booking, direct inquiry, resume download).

### 1.3 Target Audience
*   Small Business Owners seeking custom software solutions.
*   Industry-specific clients requiring specialized application development.
*   Individuals or professionals needing custom personal websites or portfolios built.

## 2. Features and Requirements

### 2.1 Core Sections (Must Have)
| Feature ID | Section Name | Description | Requirements/Details |
| :--- | :--- | :--- | :--- |
| FEA-001 | Home/Landing Page | Introduction to Carl Cabanlit and a strong call-to-action (CTA). | Must include a professional headline/tagline and immediate access to key sections (Projects, Services). |
| FEA-002 | About Me / Bio | Detailed professional background, skills summary, and philosophy. | Must be engaging and tailored to build client trust. |
| FEA-003 | Services Offered | Clear listing of development services provided. | Must detail service scope (e.g., custom application development, frontend/backend development, portfolio creation). |
| FEA-004 | Project Showcase (Portfolio) | Display of accomplished projects/apps developed by Carl. | See Section 2.2 for detailed requirements. |
| FEA-005 | Resume/CV Access | Easy access to the professional resume. | Must provide a direct, one-click download link for the resume in PDF format. |
| FEA-006 | Contact & Engagement | Mechanisms for potential clients to initiate contact. | Must support direct inquiry form submission and meeting scheduling integration (See Section 2.3). |

### 2.2 Project Showcase (Portfolio) Requirements
The portfolio section is critical for attracting development clients. Each project entry must include the following mandatory elements:

| Detail | Requirement |
| :--- | :--- |
| Project Title | Clear identification of the project. |
| Client/School Name | Identification of the client (if non-confidential) or the educational context. |
| Short Description | A brief, compelling summary of what the project is/does. |
| Technologies Used | A list or badge display of the tech stack (Languages, Frameworks, Databases). |
| Live Demo Link | A functional URL to a deployed version (if available and appropriate). |
| Visual Media | At least one high-quality screenshot or a short embedded video walkthrough. |
| Business Impact | A brief explanation of the value delivered (e.g., increased efficiency, solved a specific problem). |

### 2.3 Contact and Engagement Requirements
The system must support multiple engagement methods:
1.  **Direct Inquiry Form:** A standard contact form capturing Name, Email, Subject, and Message.
2.  **Meeting Booking Integration:** The ability to embed or link directly to a scheduling tool (e.g., Calendly, Google Meet appointment slot).
3.  **Resume Download:** Direct link to download the CV/Portfolio PDF (FEA-005).

### 2.4 Content Management Requirements
The website **MUST** include a Content Management System (CMS) capability to allow Carl Harvey Cabanlit to update project details, service descriptions, and bio content without requiring developer intervention.

## 3. Technical Specifications

### 3.1 Hosting and Domain
*   **Domain:** No custom domain purchase is required. The site must be deployable on a **free-tier hosting solution** (e.g., GitHub Pages, Netlify Free Tier, Vercel Hobby Plan, or equivalent).
*   **Subdomain:** The final URL will utilize the host provider's default subdomain structure (e.g., `carl-portfolio.netlify.app`).

### 3.2 Technology Stack (Recommendation/Decision Area)
*   **Frontend:** Selection of a modern, performance-focused framework is preferred to demonstrate technical competency.
    *   *Recommendation:* React (Next.js/Gatsby) or Vue (Nuxt.js) for robust component structure, or a static site generator (SSG) approach for superior speed on free tiers.
*   **Backend/CMS:** Given the requirement for a self-managed CMS on a free tier, a headless CMS solution is strongly recommended (e.g., Strapi hosted on a free service, Contentful, or leveraging Markdown/JSON files managed via Git if the chosen framework supports simple static site building).
*   **Language:** JavaScript/TypeScript is the expected primary language.

### 3.3 Performance and Responsiveness
*   **Responsiveness:** The design **MUST** be fully responsive and optimized for excellent viewing experiences across desktop monitors, tablets, and small mobile devices (smartphones).
*   **Performance:** Pages must load quickly. Optimization techniques (image compression, asset bundling) should be prioritized, especially considering free-tier hosting limitations. Target a high Lighthouse performance score (>80).

## 4. Design and User Experience (UX)

### 4.1 Design Approach
*   The design will be **custom-created** by Carl Harvey Cabanlit. No reliance on off-the-shelf templates is permitted.
*   The style should be professional, modern, and reflective of high-quality technical execution.

### 4.2 Visual Requirements
*   The design must prioritize clear hierarchy, ensuring that the Project Showcase (FEA-004) and Contact options (FEA-006) are easily accessible.
*   Color palette and typography should be chosen to maintain readability across all sections.

## 5. Project Management and Success Metrics

### 5.1 Timeline and Budget
*   **Timeline:** To be determined in the planning phase based on the selected technology stack and resource allocation.
*   **Budget:** Target to utilize free-tier hosting and development tools only, minimizing operational costs initially.

### 5.2 Success Metrics
*   Successful deployment to a free hosting platform.
*   All required sections (FEA-001 to FEA-006) are fully functional.
*   CMS is functional and allows for easy content updates by the owner.
*   Positive feedback received regarding professionalism and clarity of showcased work.

## Technology Stack
## TECHNOLOGY STACK RECOMMENDATIONS FOR CARL HARVEY CABANLIT - PORTFOLIO

This document outlines the recommended technology stack for the Carl Harvey Cabanlit Portfolio website, considering the goal of attracting clients, showcasing projects, and operating within a free hosting tier.

### 1. Frontend Development (User Interface & Experience)

**Recommended Stack:** React (or Next.js for SEO benefits) + Tailwind CSS

| Technology | Recommendation/Justification |
|---|---|
| **Framework/Library** | **React (or Next.js)**. React provides a component-based architecture, making complex UI elements (like project cards and interactive contact forms) manageable. If Search Engine Optimization (SEO) for client discovery is critical, **Next.js** (which uses React) is highly recommended as it offers Server-Side Rendering (SSR) or Static Site Generation (SSG). |
| **Styling** | **Tailwind CSS**. This utility-first CSS framework is excellent for rapidly building custom, responsive designs (meeting the requirement for desktop/small device responsiveness) without needing to invent custom CSS classes from scratch. It aligns well with the desire to create a unique style. |
| **Language** | **JavaScript/TypeScript**. TypeScript is recommended for larger, more complex single-page applications (SPAs) or if the portfolio might grow into a complex system, as it adds static typing safety. |

### 2. Backend Development & Content Management

Given the requirement for Content Management (CMS) functionality and the preference for free hosting tiers, a headless approach is strongly suggested.

**Recommended Stack:** Headless CMS (Strapi/Contentful/Sanity) + Static Site Generation (SSG) via Next.js

| Technology | Recommendation/Justification |
|---|---|
| **Content Management System (CMS)** | **Headless CMS (e.g., Strapi - self-hosted free tier, or Contentful/Sanity - generous free tiers)**. This allows the developer to manage project details, services, and bio content separately from the frontend code. This directly addresses the "Content Management: oo" requirement. |
| **API Layer** | If using a self-hosted CMS like Strapi, a simple REST or GraphQL API will serve content to the Next.js frontend. If using managed headless CMSs, they provide their own API endpoint. |
| **Database (if self-hosting CMS)** | **SQLite or PostgreSQL (via free tier cloud provider)**. If Strapi is chosen, SQLite is easy for local development; for deployment, a free-tier PostgreSQL instance might be necessary depending on the hosting environment. |

### 3. Deployment & Hosting (Focusing on Free Tiers)

Since the budget is zero/free tier only, the architecture must favor static assets or serverless functions.

| Technology | Recommendation/Justification |
|---|---|
| **Platform** | **Vercel or Netlify**. Both platforms offer exceptional free tiers optimized for hosting modern JavaScript frameworks (like Next.js/React). They integrate seamlessly with Git repositories (GitHub). |
| **CI/CD** | **Git (GitHub)**. All code must be managed via Git. Vercel/Netlify will automatically build and deploy the site upon every push to the main branch. |
| **Domain** | **Subdomain on Vercel/Netlify (e.g., carlharvey.vercel.app)**. This meets the requirement of not wanting to purchase a domain name initially. |

### 4. Backend Functionality (Contact & Engagement)

The requirements include booking meetings, direct inquiries, and PDF downloads. These require specific services that can run within a free tier environment.

| Feature | Recommended Technology/Service | Justification |
|---|---|---|
| **Contact Forms (Inquiries)** | **Netlify Forms or Formspree**. These services handle backend form submission without needing to build and maintain a dedicated Node.js server, making them perfect for free hosting. |
| **Meeting Booking Integration** | **Calendly Embed**. Instead of building a complex scheduling backend, embedding a free Calendly widget directly into the contact section is the most efficient solution. |
| **Resume/Portfolio PDF Download** | **Direct link to a file hosted on the same static platform (Vercel/Netlify)**. PDFs are static assets and require no server-side processing for delivery. |

### 5. Performance and Technical Requirements Summary

| Requirement | Implemented Technology | Impact |
|---|---|---|
| Responsive Design | Tailwind CSS | Ensures excellent display across desktops and small devices. |
| Content Management | Headless CMS | Allows easy updates to projects, services, and bio without redeploying core code structure. |
| Project Showcase Details | Static Pages/CMS Integration | Data points (Client Name, Business Impact, Tech Used) are structured within the CMS and rendered via React components. |
| Free Hosting | Vercel/Netlify | Optimized for deploying static or Jamstack sites efficiently on free plans. |

### Tech Stack Overview Table

| Category | Primary Technology | Secondary/Supporting Technology | Role |
|---|---|---|---|
| **Core Framework** | React (via Next.js) | JavaScript/TypeScript | Rendering dynamic UI components and managing application state. |
| **Styling/Design** | Tailwind CSS | | Rapid, responsive custom styling. |
| **Data Source (CMS)** | Headless CMS (e.g., Strapi/Contentful) | GraphQL/REST API | Manages portfolio content, service descriptions, and bio data. |
| **Deployment/Hosting** | Vercel or Netlify | Git (GitHub) | Free, fast hosting with automated CI/CD pipeline. |
| **Interactivity** | Netlify Forms / Calendly Embed | HTML/JavaScript | Handling inquiries and scheduling meetings without a dedicated server. |

## Project Structure
PROJECTSTRUCTURE: Carl Harvey Cabanlit - Portfolio

1. OVERVIEW

This document outlines the proposed file and folder structure for the Carl Harvey Cabanlit Personal Portfolio website. The structure is designed to be modular, scalable, and maintainable, supporting the required sections (About Me, Services, Projects, Contact) and catering to the target audience of potential clients (small business owners, specific industries, individuals needing web development).

2. ROOT DIRECTORY STRUCTURE

The root directory will contain the core files and the main organization folders.

/
├── .gitignore
├── README.md
├── index.html
├── LICENSE
├── assets/
├── css/
├── js/
├── pages/
└── projects/

3. DETAILED DIRECTORY BREAKDOWN

3.1. ROOT LEVEL FILES

*   index.html: The main entry point of the portfolio, serving as the landing page. It will contain the primary navigation and initial overview sections (e.g., Hero, brief Services summary).
*   README.md: Project overview, setup instructions, technology stack summary, and goals.
*   .gitignore: Specifies files and directories to be ignored by Git version control (e.g., node_modules if applicable, local development files).
*   LICENSE: Details regarding the use and distribution of the portfolio code (e.g., MIT License).

3.2. /assets/ Directory

This directory houses all static media files that are not CSS or JavaScript.

/assets/
├── images/
│   ├── profile/
│   │   └── profile_picture.webp (or .jpg/.png)
│   ├── project_thumbnails/ (Screenshots or small preview images for project cards)
│   └── logos/ (Client logos if available/permitted, or technology stack icons)
├── videos/ (For any project demonstrations or introductory videos)
└── docs/ (For downloadable resume/portfolio PDF)
    └── resume_carl_h_cabanlit.pdf

3.3. /css/ Directory

Contains all stylesheets. A modular approach is recommended, especially given the custom design preference.

/css/
├── main.css (or style.css): Core global styles, typography, reset/normalize.
├── layout.css: Styles governing overall structure (header, footer, grid systems).
├── components.css: Styles for reusable UI elements (buttons, navigation bar, cards).
└── responsive.css (or incorporated into main.css): Media queries to ensure performance across desktop and small devices.

3.4. /js/ Directory

Contains all client-side JavaScript files.

/js/
├── main.js: Initialization scripts, general DOM manipulation, navigation toggles.
├── navigation.js: Logic for responsive menus, smooth scrolling.
├── contactForm.js (or validation.js): Scripts related to form handling, validation, and potential AJAX submissions (even if targeting a free/simple backend setup or using a service link).
└── projectFilter.js: Logic for sorting or filtering the displayed projects if implemented.

3.5. /pages/ Directory (For Detailed Sections)

Since the site is primarily a single-page application (SPA) feel using anchors/scrolling, dedicated HTML pages might be used mainly for SEO or if a specific section needs independent loading. However, for simplicity with free hosting, these might primarily be sections within index.html. If separate pages are preferred:

/pages/
├── about.html (Detailed Bio/About Me content)
├── services.html (Detailed breakdown of services offered)
├── contact.html (Full contact form/booking instructions)

*Note: If implementing as a true SPA experience, these sections will likely be rendered via JavaScript or simply exist as named `id` sections within `index.html` to allow smooth navigation.*

3.6. /projects/ Directory

This directory is intended for detailed project documentation or source files if required. Given the requirement to showcase project details (description, client, tech stack, impact), structure is crucial here.

/projects/
├── project_a_name/ (e.g., inventory_management_system)
│   ├── details.html (If a dedicated page per project is needed)
│   ├── project_a_details.js (Optional: Specific project data loaded via JS)
│   └── screenshots/
│       ├── demo_desktop.webp
│       └── impact_chart.png
├── project_b_name/
│   └── ...
└── project_data.json (Alternative: A centralized JSON file listing all projects' metadata for dynamic rendering via JS)

4. IMPLEMENTATION NOTES

4.1. Performance and Responsiveness:
The structure separates concerns (CSS, JS, Assets) which aids in efficient loading and optimization. All images in /assets/images/ should be optimized (e.g., WebP format).

4.2. Content Management (CMS):
Since no specific CMS was chosen and the domain is free, the "CMS" functionality will be achieved by either:
a) Manually editing `index.html` (Simple approach).
b) Using a centralized data file (like `project_data.json` in /projects/) which is fetched by `main.js` to render the content dynamically (More flexible for updates).

4.3. Contact and Engagement:
The structure supports downloadable assets in /assets/docs/ (Resume) and provides hooks in /js/ for handling contact form submissions, even if linking to a free third-party service (like Formspree or Netlify Forms placeholder) rather than a dedicated backend server.

## Database Schema Design
SCHEMADESIGN: Portfolio Website Database Structure

1. Introduction

This document outlines the proposed database schema design for the "Carl Harvey Cabanlit - Portfolio" website. The design focuses on efficiently managing content, project showcases, services offered, and contact information necessary to attract potential clients (small business owners, industry-specific clients, and individuals seeking portfolio development). Since the client prefers a free tier setup, this design assumes a lightweight database solution (e.g., SQLite for local development, or a free-tier relational database if available later).

2. Entity Relationship Diagram (Conceptual Overview)

The primary entities identified are:
*   User (Admin/Owner Management - implicit, or for basic content settings)
*   Project (Showcasing accomplished work)
*   Service (Detailing offered solutions)
*   ContactInquiry (Managing direct messages)
*   MeetingBooking (Managing scheduled appointments)
*   ResumeAsset (Managing downloadable files)

3. Detailed Schema Design (Table Structures)

### Table: `Projects` (For Accomplished Projects Showcase)

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| project\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique identifier for the project. |
| title | VARCHAR(255) | NOT NULL | The title of the project. |
| short\_description | TEXT | NOT NULL | Brief summary displayed in listings. |
| detailed\_description | MEDIUMTEXT | | In-depth details about the scope and solution. |
| client\_name | VARCHAR(150) | | Name of the client or institution (e.g., School/Company). |
| client\_type | ENUM('Individual', 'Small Business', 'Institution') | | Categorization of the client. |
| business\_impact | TEXT | | Description of the positive outcome or results achieved. |
| live\_demo\_link | VARCHAR(512) | | URL to the live application/demo. |
| github\_repo\_link | VARCHAR(512) | | Link to source code repository (optional). |
| screenshot\_path | VARCHAR(512) | | File path or URL for the main screenshot/image. |
| video\_embed\_code | TEXT | | Embed code for video walkthroughs (if applicable). |
| date\_completed | DATE | NOT NULL | Date the project was finished. |

### Table: `ProjectTechnologies` (Junction Table for Many-to-Many Relationship)

This table links projects to the technologies used, allowing multiple technologies per project and vice-versa.

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| project\_tech\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique ID. |
| project\_id | INT | FOREIGN KEY (References Projects) | The project being described. |
| technology\_name | VARCHAR(100) | NOT NULL | The name of the technology (e.g., React, MySQL, Laravel). |
| technology\_type | ENUM('Frontend', 'Backend', 'Database', 'Deployment') | | Classification of the tech. |

### Table: `Services` (For Services Offered Section)

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| service\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique identifier for the service. |
| title | VARCHAR(150) | NOT NULL | Name of the service (e.g., Custom Web App Development). |
| icon\_class | VARCHAR(50) | | Class name for displaying an icon (e.g., FontAwesome class). |
| short\_description | VARCHAR(255) | NOT NULL | A one-sentence summary. |
| detailed\_description | TEXT | | Full details on the scope and methodology. |
| is\_featured | BOOLEAN | DEFAULT 0 | Whether to highlight this service prominently. |

### Table: `ContactInquiries` (For Direct Messages)

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| inquiry\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique identifier for the inquiry. |
| sender\_name | VARCHAR(150) | NOT NULL | Name provided by the sender. |
| sender\_email | VARCHAR(255) | NOT NULL | Email address for reply. |
| subject | VARCHAR(255) | | Subject line of the message. |
| message\_body | TEXT | NOT NULL | The content of the message. |
| received\_at | DATETIME | NOT NULL | Timestamp of receipt. |
| status | ENUM('New', 'Reviewed', 'Replied') | DEFAULT 'New' | Internal tracking status. |

### Table: `MeetingBookings` (For Scheduled Meetings)

Assuming the client needs to track booking requests, even if the actual scheduling happens externally (e.g., via Calendly integration).

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| booking\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique identifier for the booking request. |
| requester\_name | VARCHAR(150) | NOT NULL | Name of the person requesting the meeting. |
| requester\_email | VARCHAR(255) | NOT NULL | Contact email. |
| requested\_time\_slot | VARCHAR(255) | NOT NULL | The requested time/date (may need flexibility based on the external tool). |
| preferred\_contact\_method | VARCHAR(100) | | How the client prefers to be contacted (Email, Call). |
| purpose | TEXT | | Reason for the meeting request. |
| booked\_at | DATETIME | NOT NULL | Timestamp of the submission. |
| confirmation\_status | ENUM('Pending', 'Confirmed', 'Cancelled') | DEFAULT 'Pending' | Internal status. |

### Table: `ResumeAssets` (For Downloadable Files)

Since the client wants to offer a PDF download, this table manages the file metadata.

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| asset\_id | INT | PRIMARY KEY, AUTO\_INCREMENT | Unique identifier. |
| asset\_type | ENUM('ResumePDF', 'PortfolioPDF', 'OtherDocument') | NOT NULL | Type of file being stored. |
| file\_name | VARCHAR(255) | NOT NULL | Original filename. |
| storage\_path | VARCHAR(512) | NOT NULL | The relative or absolute path where the file is stored (critical for free hosting constraints). |
| version | VARCHAR(50) | | Version/Date of the document (e.g., v1.2 - Q3 2024). |
| is\_current | BOOLEAN | DEFAULT 1 | Flags the active version for download links. |

4. Relationship Summary

*   **Projects** <--> **ProjectTechnologies**: Many-to-Many via `ProjectTechnologies` junction table. This supports detailed technology stacking per project.
*   **ContactInquiries**: One-to-Zero/One relationship with the implied Admin/User table (for tracking replies).
*   **MeetingBookings**: One-to-Zero/One relationship with the implied Admin/User table (for tracking confirmation).
*   **ResumeAssets**: One-to-One relationship for the primary resume PDF download.

5. Content Management Strategy

All primary content (Projects, Services, About Me text blocks, and ResumeAssets metadata) will be stored in the database. This fulfills the requirement for Content Management (CMS functionality) and allows the owner to update showcases without redeploying the core application code, regardless of the chosen framework.

6. Performance and Responsiveness Notes

The schema is normalized to reduce redundancy (e.g., separating technologies). While this schema supports complex data retrieval, performance optimization (caching, indexing on frequently searched fields like `title` or `received_at`) will be managed at the application layer rather than being strictly enforced at the schema level, given the initial requirement for a simple, free-tier deployment.

## User Flow
USERFLOW DOCUMENTATION: CARL HARVEY CABANLIT - PORTFOLIO

VERSION 1.0
DATE: OCTOBER 26, 2023

1. INTRODUCTION
This User Flow Document outlines the primary user journeys for the Carl Harvey Cabanlit Personal Portfolio website. The target audience consists primarily of potential clients (Small Business Owners, specific industries, and individuals seeking custom web development/portfolio creation) interested in hiring Carl for system development projects. The flows prioritize clear presentation of services, showcased projects, and frictionless contact mechanisms.

2. CORE USER GOALS
A user visiting the portfolio has one or more of the following primary goals:
A. Assess Carl's capabilities and technical expertise.
B. Understand the services Carl offers.
C. Review past work/projects.
D. Initiate contact or schedule an engagement.

3. USER FLOW DIAGRAM (DESCRIPTIVE)

3.1. FLOW A: THE EXPLORER (Assessing Capabilities & Projects)

START (Entry Point: Homepage/Landing Page)
|
V
STEP 1: Initial Impression & Navigation
    - User sees a concise professional introduction and clear primary navigation links (Home, About, Services, Projects, Contact).
    - ACTION: User clicks on "Projects" or scrolls down to the featured projects section.
|
V
STEP 2: Projects Review (Key Interest Area)
    - User lands on the dedicated Projects page or scrolls to the Showcase section.
    - Interaction Pattern: Projects are presented in a visually appealing card format (given the custom design preference).
    - ACTION: User clicks on a specific project card to view detailed information.
|
V
STEP 3: Detailed Project View (Modal or Dedicated Page)
    - Wireframe Description: Clean layout showcasing Screenshots/Video, Short Description, Client/School, Technologies Used, and crucially, the Business Impact achieved.
    - Interaction Pattern: Includes a "Back to Projects List" link or closes the modal.
    - ACTION: User is satisfied with the project details and navigates to the "Services" section or directly to "Contact."
|
V
STEP 4: Reviewing Services Offered
    - User navigates to the Services page.
    - Wireframe Description: List of core service offerings (e.g., Custom Web Development, System Consultation, Portfolio Creation) with brief explanations.
    - ACTION: User decides if Carl's offerings align with their needs.
|
V
STEP 5: Final Assessment (About Me/Resume Check)
    - User navigates to "About Me" to understand background/bio or downloads the Resume/Portfolio PDF.
    - Interaction Pattern: Resume download link must be prominent.
|
V
END (User proceeds to Contact Flow B)

3.2. FLOW B: THE DIRECT INQUIRER (Contact & Engagement)

START (Entry Point: Contact Page or Contact Button after Flow A)
|
V
STEP 1: Contact Method Selection
    - Wireframe Description: Clear presentation of three main contact pathways: 1) Book a Meeting (Scheduling Link), 2) Direct Inquiry Form, 3) Download Resume.
    - User Goal: To engage Carl directly.
|
V
STEP 2A: Booking a Meeting (Preferred Engagement)
    - Interaction Pattern: If Carl uses a scheduling tool (e.g., Calendly), the user is redirected or embedded directly to select a slot.
    - SUCCESS: Booking Confirmation Page/Email.
|
V
STEP 2B: Sending a Direct Inquiry
    - Wireframe Description: Simple Contact Form requiring Name, Email, Subject, and a detailed Message box (Client Project Scope description).
    - Input Validation: Basic required field checks.
    - SUCCESS: Submission triggers a success message ("Thank you, I will respond within 24 hours.") and sends an email to Carl.
|
V
STEP 2C: Resume Download (Offline Evaluation)
    - Interaction Pattern: Direct link to the hosted PDF file.
    - SUCCESS: File download initiated.
|
V
END (Contact Complete)

4. WIREFRAME DESCRIPTION & INTERACTION PATTERNS (General)

4.1. RESPONSIVENESS & PERFORMANCE
    - Requirement: Must be fully responsive (Mobile/Tablet/Desktop).
    - Interaction Pattern: Implement a hamburger menu for primary navigation on smaller viewports. All image assets (screenshots/videos) must be optimized for fast loading, acknowledging the need for high performance despite the free hosting constraint.

4.2. HOMEPAGE/LANDING
    - Content Focus: Strong headline (Value Proposition), Call-to-Action (View Projects / Contact Me), and immediate visibility of 2-3 featured projects.
    - Interaction: Scroll-based presentation of sections (About Snippet -> Services Snippet -> Projects Gallery).

4.3. NAVIGATION STRUCTURE (Global)
    - Links: Home, About Me, Services, Projects, Contact.
    - Interaction: Sticky navigation header for easy access across all pages/sections.

4.4. PROJECT SHOWCASE DETAILS (Interaction Focus)
    - Elements Displayed: Large Screenshot/Embedded Video, Client/Source (e.g., School Project), Tech Stack (tags/badges), and Business Impact statement.
    - Key Interaction: Links to Live Demo (if available) must open in a new tab to prevent users from leaving the portfolio site prematurely.

4.5. CONTENT MANAGEMENT (CMS Integration)
    - Assumption: Since CMS is requested (implied maintenance), the structure must support easy updating of project details, service descriptions, and bio without heavy code redeployment. (This affects the chosen technical stack, though the *user flow* remains constant).

5. TECHNICAL CONSIDERATIONS (Impact on Flow)
    - Domain/Hosting: Use of free tier hosting implies reliance on platforms like GitHub Pages, Netlify Free Tier, or Vercel Free Tier. This reinforces the need for lightweight design and optimization to maintain performance expectations.
    - Technology Stack: The chosen stack (e.g., React/Next.js or static site generator like Hugo/Jekyll) must facilitate the structured presentation of project data necessary for the detailed project views described in Flow A.

6. REVIEW AND APPROVAL
(To be completed by Carl Harvey Cabanlit)
[ ] Reviewed and Accepted User Flow Paths.
[ ] Design Preferences noted and incorporated into visual structure assumptions.
[ ] Contact/Engagement points verified.

## Styling Guidelines
# STYLING GUIDELINES DOCUMENT: Carl Harvey Cabanlit - Portfolio

## 1. Design Philosophy and Guiding Principles

This portfolio aims to establish Carl Harvey Cabanlit as a professional, capable, and modern system developer/web developer. Since the target audience includes small business owners and clients seeking custom solutions, the design must balance creativity with corporate professionalism and clarity.

**Core Principles:**

1.  **Clarity Over Complexity:** Information regarding services, projects, and contact must be immediately accessible.
2.  **Professional Modernism:** Employ modern design aesthetics (clean lines, ample whitespace) while avoiding overly trendy or distracting elements.
3.  **Demonstration of Skill:** The styling itself should subtly showcase an understanding of good UI/UX, acting as a small, tangible example of competence.
4.  **Accessibility (Minimum Standard):** Ensure sufficient color contrast and readable typography across all devices.

## 2. Color Palette

The palette should evoke trust, intelligence, and technical proficiency. Given the desire for a unique style, we will focus on a high-contrast, monochromatic base accented by a single, strong primary color.

**Primary Color (Accent):**
*   **Purpose:** Used for Calls-to-Action (CTAs), active links, important highlights, and progress indicators.
*   **Recommendation:** A deep, technical blue or a vibrant, confident teal.
    *   *Example:* `#007BFF` (Standard Professional Blue) or `#17A2B8` (Technical Teal)
    *   *Usage Limit:* Keep below 15% of the visual surface area.

**Neutral Palette (Base):**
*   **Background (Light Mode Default):** Off-White or very light gray to reduce eye strain compared to pure white.
    *   *Example:* `#F8F9FA`
*   **Primary Text/Headings:** Near-black for strong contrast.
    *   *Example:* `#212529`
*   **Secondary Text/Subtle Dividers:** Medium Gray for supporting information (e.g., project descriptions, footer text).
    *   *Example:* `#6C757D`

**System/Status Colors (Limited Use):**
*   Error/Alert: Red (`#DC3545`)
*   Success/Completion: Green (`#28A745`)

## 3. Typography

Typography must prioritize readability across different screen sizes and technical contexts.

**Font Selection Strategy:** A professional sans-serif pairing is recommended—one font for headings (offering strong presence) and one highly readable font for body copy.

### A. Headings (H1, H2, H3)

*   **Purpose:** Titles, section headers (e.g., About Me, Services, Projects). Must convey authority.
*   **Recommendation:** A clean, geometric sans-serif like **Poppins** or **Inter**.
*   **Usage:**
    *   H1 (Page Title): Large, bold weight.
    *   H2 (Section Titles): Moderately large, used consistently to structure the page flow.
    *   H3 (Project Titles, Sub-sections): Smaller, used for specific elements within a section.

### B. Body Text and Interface Elements (P, Links, Navigation)

*   **Purpose:** Readability for service descriptions, bio, and project details.
*   **Recommendation:** A highly readable, default system font stack or a humanist sans-serif like **Roboto** or **Open Sans**.
*   **Usage:**
    *   Body copy should maintain a minimum font size of 16px (desktop) to 15px (mobile) for primary content.
    *   Line height should be generous (1.5 to 1.7) to aid scanning.

## 4. Layout and Spacing (UI/UX Principles)

The layout must accommodate the free-tier hosting constraints (implying simpler static deployment) while maintaining a premium feel.

### A. Whitespace (Negative Space)

*   **Principle:** Generous whitespace is crucial for a modern, professional look and aids scannability for busy clients.
*   **Implementation:** Increase padding around major content blocks (H1 sections, project cards) significantly more than is standard in basic templates. Use vertical rhythm to separate sections clearly.

### B. Responsiveness (Performance Expectation)

*   **Mobile-First Approach:** Design decisions must prioritize the experience on small devices first, ensuring performance is optimized (crucial for free hosting environments).
*   **Breakpoints:** Standard breakpoints should be defined, but the layout should utilize fluid sizing (`%` or `vw`) where possible, rather than relying solely on fixed pixel widths.
*   **Navigation:** A hamburger menu or condensed navigation pattern is mandatory for mobile views.

### C. Imagery and Iconography

*   **Project Showcase:** Screenshots/videos must be high quality but optimized for fast loading. Use minimal, professional iconography (e.g., icons for "Live Demo," "GitHub," "Technologies Used").
*   **Icon Style:** Lineal, flat, or minimally filled icons matching the overall aesthetic. Avoid overly detailed or skeuomorphic icons.
*   **Profile Image:** The "About Me" section requires a professional, high-quality headshot that reinforces the brand identity.

## 5. Component Styling Guidelines

These rules govern reusable UI elements, particularly important for the Project Showcase and Contact sections.

### A. Project Cards (Showcase Items)

*   **Structure:** Each project should reside in a visually distinct card component.
*   **Visuals:** Use subtle shadows (elevation) to lift the card off the background, suggesting interactivity.
*   **Information Hierarchy:**
    1.  Project Title (H3, Bold)
    2.  Client/Context (Secondary Text)
    3.  Technologies Used (Taggable, smaller font)
    4.  Action Links (Primary Accent Color for "Live Demo").
*   **Business Impact:** This section must be clearly highlighted, perhaps using a slightly different background color or a bordered box within the card to draw the client's eye.

### B. Calls to Action (CTAs)

CTAs must clearly guide the client toward engagement (Meeting Booking, Direct Inquiry, PDF Download).

*   **Primary CTA (e.g., "Book a Consultation"):** Solid fill using the Primary Accent Color. High contrast against the background.
*   **Secondary CTA (e.g., "Download Resume"):** Ghost button (transparent background, border in Primary Accent Color) or simple text link styled distinctively.

### C. Contact Forms / Booking Widget

*   **Input Fields:** Clean, minimalist design. Borders should be light gray when inactive, turning to the Primary Accent Color on focus. Labels should be persistent (not disappearing placeholders) to aid accessibility for small business owners reviewing details.

## 6. Design Review Checklist (Self-Assessment)

Before launch, review against these points:

1.  Is the contrast ratio sufficient for all text (WCAG AA minimum)?
2.  Are the primary accent colors used sparingly and only for key actions?
3.  Does the design scale gracefully down to standard mobile widths?
4.  Are the project showcases easy to scan for key information (Tech Stack, Impact)?
5.  Is the overall feeling professional, trustworthy, and modern?
