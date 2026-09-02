# Real-Time Payments Map

A Phase 1 Proof of Concept for exploring real-time payment infrastructure across key global markets.

The application combines an interactive global map, payment-rail metadata, maturity filtering, infrastructure intelligence, and downloadable sample data in a Real Rails-style dashboard.

## Overview

The Real-Time Payments Map tracks five payment systems:

| Country | Payment System | Code | Launch Year | Region | Maturity |
|---|---|---|---:|---|---|
| United States | FedNow | US | 2023 | North America | Emerging |
| India | UPI | IN | 2016 | Asia | Mature |
| United Kingdom | Faster Payments | UK | 2008 | Europe | Mature |
| Singapore | FAST | SG | 2014 | Asia | Mature |
| Brazil | Pix | BR | 2020 | South America | Mature |

## Features

### Interactive Global Map
- Interactive Leaflet-based world map
- Payment-system markers by country
- Green markers for mature rails
- Orange markers for emerging rails
- Click markers to view payment-system details

### Intelligence Layer
- "Why This Matters" infrastructure context
- "Who Controls the Rail" governance context
- Payment rail summary metrics
- Maturity-based infrastructure view

### Interactive Filtering
- All
- Mature
- Emerging
- Filter updates the map and payment-system cards without a full page refresh

### Sample Data Download
The dashboard includes a downloadable CSV containing the structured payment-rail dataset used by the application.

## Dashboard

The interface follows the Real Rails dashboard approach with:

- Dark terminal-style visual design
- Interactive visualization as the main stage
- 70/30 main-stage and intelligence-sidebar structure
- Functional maturity filters
- Intelligence panels
- Downloadable sample dataset

## Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Leaflet

### Backend / Data
- FastAPI
- Python
- Pandas
- Structured payment-rail data

## Project Structure

```text
POC-5-Real-Time-Payments-Map-Dhanusha/
│
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── architecture/
│
├── screenshots/
│
├── Map.tsx
├── main.py
├── globals.css
├── package.json
├── README.md
└── .gitignore
