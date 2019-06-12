# Puppeteer utils
Use puppeteer to save pdf, screenshots, etc

## Usage
 - `npm ci`

```
# setting up sandbox:
export CHROME_DEVEL_SANDBOX=$(pwd)/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/chrome_sandbox`
sudo chown root:root $CHROME_DEVEL_SANDBOX`
sudo chmod 4755 $CHROME_DEVEL_SANDBOX`
```
- `npm run save-pdf --url <url> --savePath <path>` - saves url to pdf at given path

