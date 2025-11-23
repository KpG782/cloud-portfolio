# Components Architecture

This directory contains all React components for the Cloud Computing Portfolio dashboard, organized by responsibility following best practices for component-based architecture.

## Directory Structure

```
components/
├── ui/                    # Reusable UI components
│   ├── StatusIndicator.tsx    # Status display with pulse animation
│   ├── MetricBar.tsx          # Progress bar for metrics
│   ├── StatCard.tsx           # Statistics card with icon
│   ├── ServiceCard.tsx        # Service/project card
│   └── index.ts               # Barrel export
├── sections/              # Page section components
│   ├── Header.tsx             # Top navigation header
│   ├── StatsGrid.tsx          # Dashboard statistics grid
│   ├── InfrastructureOverview.tsx  # Infrastructure cards
│   ├── ServicesDashboard.tsx  # Services status display
│   ├── FooterSummary.tsx      # Footer summary section
│   └── index.ts               # Barrel export
```

## Component Categories

### UI Components (`/ui`)

**Purpose**: Reusable, presentational components used throughout the application.

- **StatusIndicator**: Displays operational status with animated pulse
  - Props: `status: "running" | "down"`
  - Usage: Service status badges

- **MetricBar**: Animated progress bar for metrics
  - Props: `label: string, value: number, color: string`
  - Usage: CPU, Memory, Disk I/O visualization

- **StatCard**: Dashboard statistic card with icon and trend
  - Props: `stat: Stat`
  - Usage: Services, Response Time, Requests, Uptime cards

- **ServiceCard**: Complete service/project card with all details
  - Props: `project: Project`
  - Usage: Display individual service information with metrics, tech stack, and links

### Section Components (`/sections`)

**Purpose**: Larger composite components that make up page sections.

- **Header**: Sticky navigation header with branding and real-time clock
  - Props: `currentTime: string, mounted: boolean`
  - Features: Logo, title, clock, system status

- **StatsGrid**: Grid layout of statistics cards
  - Props: `stats: Stat[]`
  - Layout: Responsive grid (1-4 columns)

- **InfrastructureOverview**: Infrastructure provider cards
  - Props: None (static data)
  - Displays: AWS, Docker, VPS information

- **ServicesDashboard**: Main services listing with cards
  - Props: `projects: Project[], currentTime: string, mounted: boolean`
  - Layout: 2-column grid with service cards

- **FooterSummary**: Summary statistics footer
  - Props: None (static data)
  - Displays: Total projects, providers, containers, uptime

## Data Layer (`/lib`)

### Types (`lib/types.ts`)
TypeScript interfaces for type safety:
- `Project`: Service/project data structure
- `Stat`: Dashboard statistic structure

### Data (`lib/data.ts`)
Centralized data exports:
- `projects`: Array of all deployed projects
- `stats`: Dashboard statistics array

## Design Principles

### 1. **Separation of Concerns**
- UI components are pure presentational
- Section components handle composition
- Data layer manages state and content

### 2. **Type Safety**
- Full TypeScript coverage
- Strict interface definitions
- No `any` types

### 3. **Reusability**
- Components accept props for flexibility
- No hard-coded data in UI components
- Barrel exports for clean imports

### 4. **Performance**
- Server Components where possible
- Client Components only when needed (`"use client"`)
- Optimized re-renders with proper keys

### 5. **Maintainability**
- Clear naming conventions
- Single responsibility per component
- Well-documented props and usage

## Usage Example

```tsx
// Old approach (all in one file)
export default function Page() {
  // 600+ lines of mixed logic and UI
}

// New approach (component-based)
import { Header, StatsGrid, ServicesDashboard } from "@/components/sections";
import { projects, stats } from "@/lib/data";

export default function Page() {
  return (
    <div>
      <Header currentTime={time} mounted={mounted} />
      <StatsGrid stats={stats} />
      <ServicesDashboard projects={projects} />
    </div>
  );
}
```

## Benefits

✅ **Easy to Test**: Each component can be tested in isolation
✅ **Easy to Update**: Change one component without affecting others
✅ **Easy to Reuse**: Import components anywhere in the app
✅ **Easy to Read**: Small, focused files instead of monolithic code
✅ **Easy to Scale**: Add new components without refactoring existing code

## Component Guidelines

### When creating new components:

1. **Choose the right category**:
   - Small, reusable → `/ui`
   - Page section → `/sections`

2. **Define TypeScript interfaces**:
   ```tsx
   interface MyComponentProps {
     title: string;
     data: DataType;
   }
   ```

3. **Keep components focused**:
   - One responsibility per component
   - Under 100 lines when possible

4. **Use proper naming**:
   - PascalCase for components
   - Descriptive, not generic names

5. **Export from index.ts**:
   ```ts
   export { MyComponent } from "./MyComponent";
   ```

## Migration Notes

This structure was created from a monolithic `page.tsx` (600+ lines) following best practices for:
- Component-based architecture
- Separation of concerns
- Type safety with TypeScript
- Maintainability and scalability

All project information matches the README documentation with accurate URLs, descriptions, and infrastructure details.
