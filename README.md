## About the Desktop app version of digital Cash Flow Coaching Kit

This is the Desktop version of the Cash Flow Coaching Kit. This is created using Electron. This project uses Github Action with deployment packages deployed to aws.

## Local dev development

1. Add the following in .env

```
REACT_APP_SUPPORT_EMAIL
REACT_APP_AWS_CONTENT_DELIVERY_URL
REACT_APP_GA_ID
REACT_APP_APPLEID
REACT_APP_APPLEIDPASS
WIN_CSC_LINK
WIN_CSC_KEY_PASSWORD
```

Make sure file `dev-app-update.yml` is in the same location as electron.js

uncomment following code from electron.js

    // If dev - for dev testing

    // // if (isDev) {
    //   // dev/debugging
    //   autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
    //     Object.defineProperty(app, 'isPackaged', {
    //   get() {
    //     return true;
    //   }
    // });
    // }

"electron:package": "electron-builder -c.extraMetadata.main=build/electron.js -mw --publish always", <-- change from always to never
"afterSign": "assets/mac/notarize.js", <-- remove this line

## Code signing and auto update

repo needs to be public and there has to be a more recent version and version with number greater than current (installed version).

Mac requires code signing before auto update will work.

Mac's p12 certificate is generated using `developerID-application-export.p12` and `developerID-installer-export.p12`

Run the following 2 lines and update the p12 filename with the filename of your certificate
`base64 -i my-exported-cert.p12 -o envValue.txt`
`cat envValue.txt | pbcopy`

and paste into github secret or .env (remove the extra empty line at the end)

aws -
setup s3 private, link to cloudfront and create an iam and attach to iam policy (with permission similar to below)

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "cloudfront:*",
            "Resource": [
                "arn:aws:cloudfront::<cloudfrontId>:distribution/<distributionId>"
            ]
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::<s3 bucket name>",
                "arn:aws:s3:::<s3 bucket name>/*"
            ]
        },
        {
            "Sid": "VisualEditor2",
            "Effect": "Allow",
            "Action": "s3:ListAllMyBuckets",
            "Resource": "*"
        }
    ]
}
```

## How to run this

2. Run the following

```
yarn
yarn electron:package
```

- A dist folder with download packages for mac or windows are generated and can be uploaded to aws s3 bucket with cloudfront setup.

## Github Action deployment

1. Create the following secret keys in github.

```
APP_SUPPORT_EMAIL
APP_AWS_CONTENT_DELIVERY_URL
APP_GA_ID
APPLE_ID
APPLE_ID_ASP
WIN_SIGN_CERT
WIN_SIGN_PASS
```

## Uploading to s3

- move via github action into `latest` folder, following command might be handy for using aws cli to move from latest to the correct folders

`aws s3 cp s3://dcfck/latest/mac/Cash\ Flow\ Coaching\ Kit.dmg s3://dcfck/mac/`

`aws s3 cp s3://dcfck/latest/win/Cash\ Flow\ Coaching\ Kit.exe s3://dcfck/win/`
