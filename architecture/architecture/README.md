# Architecture

## Application Architecture

The Real-Time Payments Map is a Next.js application that visualizes
instant payment schemes across different countries.

### Main Flow

User
↓
Next.js Application
↓
Payment Scheme Data
↓
Maturity Filter
↓
Filtered Schemes
↓
Interactive Leaflet Map
↓
Scheme Details and Timeline

## Main Components

- Next.js
- React
- TypeScript
- React Leaflet
- Leaflet
- OpenStreetMap

## Intelligence Layer

The application converts payment infrastructure data into useful
geographic intelligence by showing:

- Country
- Payment scheme
- Launch year
- Maturity level
- Geographic location

Users can filter payment schemes by maturity level and understand
the global development of real-time payment infrastructure.

## Data Flow

Payment scheme dataset
        ↓
Application state
        ↓
Maturity filtering
        ↓
PaymentMap component
        ↓
Interactive geographic visualization
