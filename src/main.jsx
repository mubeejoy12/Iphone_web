import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import * as Sentry from "@sentry/react";


// Sentry.init({
//   dsn: "https://ed5349e38b2033867d22759e2bdefa0b@o4508307656409088.ingest.us.sentry.io/4508307658768384",

//   integrations: [
//     Sentry.browserTracingIntegration(),
//     // Sentry.metrics.startMetricAggregation(),
//     Sentry.reactRouterV3BrowserTracingIntegration({
//       useEffct: React.useEffect,
//     }),
//     Sentry.replayIntegration(),
//   ],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
//   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
