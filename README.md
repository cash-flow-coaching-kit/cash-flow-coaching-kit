## About the Desktop app version of digital Cash Flow Coaching Kit

This is the Desktop version of the Cash Flow Coaching Kit, functionality should be almost the same as the web version. This is created using Electron. This project has been created to be hosted on aws.

## How to build this yourself

1. Create a new .env file with the relevant Environment Variables

```

REACT_APP_SUPPORT_EMAIL=<email>
REACT_APP_AWS_PROJECT_REGION=
REACT_APP_AWS_CONTENT_DELIVERY_BUCKET=
REACT_APP_AWS_CONTENT_DELIVERY_URL=
REACT_APP_AWS_CLOUDFRONT_ID=
REACT_APP_GA_ID=

```

2. Run the following (require Mac):

```
yarn
yarn electron:package
```

## How to run this

- A dist folder with download packages for mac or windows are generated and can be uploaded to aws s3 bucket with cloudfront setup. This is reflected on the web version of Cash Flow Coaching Kit.

## Uploading to s3

- Make sure the filename you are loading has the version number removed, make sure the filename stays the same as the one you are replacing
