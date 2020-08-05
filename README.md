## About the digital Cash Flow Coaching Kit

This is an Open Source copy of the digital Cash Flow Coaching Kit (dCFCK), as found at (https://cashflowcoachingkit.com.au)[https://cashflowcoachingkit.com.au]

You can use the kit to:

- Check the health of your business
- Learn about business management
- Understand cash flow
- Explore practical ways to improve cash flow
- Plan and track improvements

The kit does not save information between sessions. Use the export function regularly to save your progress.

## How to run this

- The dCFCK can run using a standard Node.js server running Node.js 12.x.
- The original dCFCK is hosted on Platform.sh. The repository includes configuration files to run it under your own account.

---

## Environment variables

The help dialog contains a link to a support email. To add this email, add the following item to a `.env`

```
REACT_APP_SUPPORT_EMAIL=<email>
REACT_APP_GTM_CONTAINER_ID=<GTM-0000000>
REACT_APP_GTM_DATA_LAYER_NAME=<dataLayer>
```

<small>Remember to restart your dev server once added.</small>
