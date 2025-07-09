# Romantic Birthday Website

## Overview

This is a full-stack web application built to create a romantic birthday website with animated timelines, floating elements, and personalized content. The application uses a modern React frontend with TypeScript and a Node.js/Express backend, styled with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-based sessions (connect-pg-simple)
- **Development**: Hot reloading with Vite integration

### Key Design Decisions
1. **Monorepo Structure**: Client, server, and shared code in one repository
2. **TypeScript Throughout**: Type safety across the entire stack
3. **Modern UI**: shadcn/ui provides accessible, customizable components
4. **Animation-First**: Framer Motion for engaging user experience
5. **Love Theme**: Custom CSS variables for consistent romantic theming

## Key Components

### Frontend Components
- **HeroSection**: Animated landing section with typing animation
- **TimelineSection**: Scrollable timeline with relationship milestones
- **FloatingElements**: Animated background elements for visual appeal
- **TypingAnimation**: Dynamic text animation cycling through phrases
- **TimelineItem**: Individual timeline entries with hover effects

### Backend Components
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Routes**: Express route handlers (currently minimal setup)
- **Database Schema**: User model with Drizzle ORM

### Shared Components
- **Schema**: Zod validation schemas shared between client and server
- **Types**: TypeScript types for consistent data structures

## Data Flow

1. **Client Rendering**: React components render with initial state
2. **Animation System**: Framer Motion handles scroll-triggered animations
3. **API Communication**: React Query manages server state and caching
4. **Database Operations**: Drizzle ORM with PostgreSQL for data persistence
5. **Session Management**: PostgreSQL-based sessions for user authentication

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **eslint**: Code linting
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Mode
- Vite dev server for frontend hot reloading
- tsx for TypeScript execution on backend
- Integrated development with Replit tooling

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Static file serving in production mode
- Development-specific Replit integration

### Database Management
- Drizzle Kit for schema migrations
- PostgreSQL dialect with Neon Database
- Migrations stored in `./migrations` directory
- Schema defined in `./shared/schema.ts`

The application follows a clean architecture with clear separation between presentation, business logic, and data layers. The romantic theme is implemented through custom CSS variables and carefully chosen animations that create an engaging, love-themed user experience.