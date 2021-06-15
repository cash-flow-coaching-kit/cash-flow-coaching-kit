import { OFFLINE_VID_DATA } from '../src/static/offline-url-data.mjs'
import youtubedl from 'youtube-dl'
import fs from 'fs'

const download = async (url, fullFilePath, dir) => {
  
  let output = fullFilePath + '.mp4'

  const video = await youtubedl(url,
    // Optional arguments passed to youtube-dl.
    ['--format=18'])

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
  })

  video.pipe(fs.createWriteStream(output, { flags: 'a' }))
}

const downloadVid = () => {

  const dir = './public/offline-data/vid/'

  OFFLINE_VID_DATA && OFFLINE_VID_DATA.forEach(item => {
    download(item.url, dir + item.filename, dir)
  })
}

downloadVid()
