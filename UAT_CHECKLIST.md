# UAT Checklist

## Project Information

**Project Name:** Real-Time Payments Map  
**PoC Number:** PoC-5  
**Author:** Dhanusha Cherian  
**Repository:** https://github.com/dhanushacherian/POC-5-Real-Time-Payments-Map-Dhanusha  
**Live Application:** https://poc-5-real-time-payments-map-dhanus.vercel.app  

## Filters Tested

**Status: PASS**

Tested:

- All filter
- Mature filter
- Emerging filter

The filters update the map and payment-system cards without a full page refresh.

## Tooltips Tested

**Status: NOT APPLICABLE**

Payment-system details are provided through interactive map marker popups rather than separate tooltips.

## Loading States Tested

**Status: PASS**

The production application loads successfully and the interactive map renders correctly.

## Interactions Tested

**Status: PASS**

The following interactions were tested:

- Leaflet map interaction
- Map zoom controls
- Payment-system marker selection
- Marker popup details
- All filter
- Mature filter
- Emerging filter
- Sample-data download

## Navigation Tested

**Status: NOT APPLICABLE**

The proof of concept uses a single-page dashboard and does not contain multi-page application navigation.

## Responsiveness Tested

**Status: PASS**

The dashboard layout was reviewed at desktop widths and adjusted to prevent horizontal overflow. The main stage and intelligence sidebar remain visible and usable.

## Edge Cases Tested

**Status: PASS**

The following basic edge condition was verified:

- Filtering to Emerging displays only the available emerging rail.
- Filtering to Mature displays only the available mature rails.
- The application handles an empty filtered result with a user-facing message.

## Error Handling Tested

**Status: PASS**

Production build errors encountered during development were resolved, including the Leaflet browser-rendering issue. The final Vercel deployment builds successfully and the production application loads correctly.

## Data Correctness Verified

**Status: YES**

The five payment systems displayed in the dashboard were checked against the structured project dataset.

Verified systems:

- FedNow
- UPI
- Faster Payments
- FAST
- Pix

## User Workflow Validated

**Status: YES**

The primary workflow was validated:

1. Open the production dashboard.
2. View payment systems on the map.
3. Select a map marker.
4. Inspect payment-system details.
5. Apply a maturity filter.
6. Review the filtered map and cards.
7. Download the sample dataset.

## Issues Identified

During development, issues were identified with:

- Leaflet server-side rendering
- Global CSS loading
- Horizontal layout overflow
- Dashboard/sidebar structure
- README formatting

## Issues Resolved

- Implemented client-side Leaflet loading.
- Corrected App Router layout and global CSS loading.
- Fixed responsive width and overflow.
- Implemented the 70/30 dashboard structure.
- Added intelligence panels.
- Added functional maturity filters.
- Added sample-data download.
- Corrected README formatting.

## Known Limitations

- The current proof of concept contains five payment systems.
- The dataset is a structured proof-of-concept dataset rather than a continuously updated production feed.
- There is no automated end-to-end UAT test suite.

## UAT Status

**PASS**
