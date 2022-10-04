import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

function init() {
  Sentry.init({
    dsn: 'https://1cc0a85ffd104524a05d3acf0bd55992@o1431692.ingest.sentry.io/6782752',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

function log(error) {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}

export default logger
