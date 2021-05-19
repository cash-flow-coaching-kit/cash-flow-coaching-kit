import puppeteer from "puppeteer";
import {  OFFLINE_GOV_DATA } from '../src/static/offline-url-data.mjs'

// we're using async/await - so we need an async function, that we can run
const run = async (url, filename, dir) => {

  // open the browser and prepare a page
  const browser = await puppeteer.launch({
        headless: true
    })
  const page = await browser.newPage()
  
  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
      width: 1280,
      height: 800
  })

  await page.goto(url, {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0
})
  await page.screenshot({
      path: dir + filename + '.png',
      fullPage: true
  })

  // close the browser 
  await browser.close();
};


// run the async function
const downloadDoc = () => {

  const dir = './public/offline-data/doc/'

  OFFLINE_GOV_DATA && OFFLINE_GOV_DATA.forEach(item => {
    run(item.url, item.filename, dir)
  })

}

downloadDoc()

