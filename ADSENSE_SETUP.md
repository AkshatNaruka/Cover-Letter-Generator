# Google AdSense Integration Configuration

This document explains how to configure the Google AdSense integration that has been added to the Cover Letter Generator.

## Setup Instructions

### 1. Get Your AdSense Publisher ID
1. Sign up for Google AdSense at https://www.adsense.google.com
2. Complete the application and get your account approved
3. Note your Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXXX)

### 2. Configure Publisher ID
Replace all instances of `ca-pub-XXXXXXXXXXXXXXXXX` in `index.html` with your actual Publisher ID:

**Line 54:** AdSense script tag
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_PUBLISHER_ID"
     crossorigin="anonymous"></script>
```

**All ad unit containers:** Replace `data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"` with your Publisher ID

### 3. Configure Ad Slot IDs
After creating ad units in your AdSense dashboard, replace `XXXXXXXXX` with actual slot IDs:

- **Header Banner Ad** (line ~140): `data-ad-slot="YOUR_SLOT_ID"`
- **Form/Preview Separator Ad** (line ~275): `data-ad-slot="YOUR_SLOT_ID"`
- **Features Tab Ad** (line ~345): `data-ad-slot="YOUR_SLOT_ID"`
- **Resources Tab Ad** (line ~545): `data-ad-slot="YOUR_SLOT_ID"`
- **Footer Banner Ad** (line ~575): `data-ad-slot="YOUR_SLOT_ID"`

## Ad Placement Locations

1. **Header Banner**: After the hero section, before navigation
2. **Form Separator**: Between the form section and preview section
3. **Features Tab**: In the features content area
4. **Resources Tab**: In the resources content area
5. **Footer Banner**: Before the site footer

## Responsive Design

All ad containers are fully responsive and include:
- Mobile-friendly sizing
- Proper margins and padding
- Integration with the existing design theme
- Dark mode compatibility

## Performance Considerations

- AdSense script loads asynchronously to not block page rendering
- DNS prefetching is enabled for `pagead2.googlesyndication.com`
- Ad containers have minimum heights to prevent layout shift

## Testing

Before going live:
1. Test with AdSense test ads first
2. Verify ads display correctly on all devices
3. Check that ads don't interfere with form functionality
4. Ensure proper spacing and visual integration

## Notes

- The implementation uses responsive ad units (`data-full-width-responsive="true"`)
- Ad containers have subtle borders and hover effects that match the site design
- All ads are placed in non-intrusive locations to maintain user experience