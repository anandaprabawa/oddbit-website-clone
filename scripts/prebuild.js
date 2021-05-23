/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const APP_ENV = process.env.APP_ENV // `production` or `development`
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets')

// Handle copying robots file
const robotsFileName =
  APP_ENV === 'production' ? 'robots.prod.txt' : 'robots.txt'
const robotsSource = path.join(ASSETS_DIR, 'robots', robotsFileName)
const robotsDest = path.join(__dirname, '..', 'public', 'robots.txt')
fs.copyFileSync(robotsSource, robotsDest)
console.log('File "robots.txt" copied')
