forward-logs-shared.ts:95 [HMR] connected
installHook.js:1 A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload globalError={[...]} webSocket={WebSocket} staticIndicatorState={{pathname:null, ...}}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/ai" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <__next_root_layout_boundary__>
                    <SegmentViewNode type="layout" pagePath="layout.tsx">
                      <SegmentTrieNode>
                      <link>
                      <script>
                      <RootLayout>
                        <html lang="en">
                          <body
                            className="plus_jakarta_sans_bf415f8b-module__78vYIG__variable space_grotesk_1d8c5cc8-modu..."
                            style={{fontFamily:"var(--font..."}}
-                           __processed_ffa9de3a-61c0-46fa-b63b-2f936bf6f829__="true"
-                           bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWll..."
                          >
                  ...

overrideMethod @ installHook.js:1
error @ intercept-console-error.ts:42
(anonymous) @ react-dom-client.development.js:5729
runWithFiberInDEV @ react-dom-client.development.js:984
emitPendingHydrationWarnings @ react-dom-client.development.js:5728
completeWork @ react-dom-client.development.js:12860
runWithFiberInDEV @ react-dom-client.development.js:987
completeUnitOfWork @ react-dom-client.development.js:19131
performUnitOfWork @ react-dom-client.development.js:19012
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<body>
RootLayout @ layout.tsx:29
initializeElement @ react-server-dom-turbopack-client.browser.development.js:1933
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4592
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
getOutlinedModel @ react-server-dom-turbopack-client.browser.development.js:2322
parseModelString @ react-server-dom-turbopack-client.browser.development.js:2712
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4523
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
resolveModelChunk @ react-server-dom-turbopack-client.browser.development.js:1664
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4422
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
<RootLayout>
initializeFakeTask @ react-server-dom-turbopack-client.browser.development.js:3372
initializeDebugInfo @ react-server-dom-turbopack-client.browser.development.js:3397
initializeDebugChunk @ react-server-dom-turbopack-client.browser.development.js:1764
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4371
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
"use server"
ResponseInstance @ react-server-dom-turbopack-client.browser.development.js:2767
createResponseFromOptions @ react-server-dom-turbopack-client.browser.development.js:4628
exports.createFromReadableStream @ react-server-dom-turbopack-client.browser.development.js:5032
module evaluation @ app-index.tsx:211
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateModuleFromParent @ dev-base.ts:162
commonJsRequire @ runtime-utils.ts:389
(anonymous) @ app-next-turbopack.ts:11
(anonymous) @ app-bootstrap.ts:79
loadScriptsInSequence @ app-bootstrap.ts:23
appBootstrap @ app-bootstrap.ts:61
module evaluation @ app-next-turbopack.ts:10
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateRuntimeModule @ dev-base.ts:128
registerChunk @ runtime-backend-dom.ts:57
await in registerChunk
registerChunk @ dev-base.ts:1149
(anonymous) @ dev-backend-dom.ts:126
(anonymous) @ dev-backend-dom.ts:126
AIServicesHero.tsx:214 [clip-debug] {text: 'AI Development', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Strategy & Advisory', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Autonomous Agents', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Custom AI Solutions', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Predictive Analysis', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Visual Intelligence', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Operational AI & MLOps', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Ethical AI Governance', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 288, H: 400, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 320 Q 288 340 273.9 354.1 L 242.1 385."}
AIServicesHero.tsx:214 [clip-debug] {text: 'AI DevelopmentWe design and implement cutting-edge artificia', W: 288, H: 626.7999877929688, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 546.7999877929688 Q 288 566.7999877929"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Reactive Machines (Level 1 AI)Simple AI that reacts to input', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Limited Memory AI (Level 2 AI)Learns from past data and shor', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Theory of Mind AI (Level 3 AI)Understands emotions, beliefs,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Self-Aware AI (Level 4 AI)Consciousness and self-awareness (', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Narrow AI (Weak AI)Specialized for one task.Example: Face re', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'General AI (AGI)Understands and learns anything a human can.', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Superintelligent AI (ASI)Surpasses human intelligence (hypot', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Machine LearningSystems that learn from data.Includes superv', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Deep LearningNeural networks with many layers.Used for visio', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Natural Language Processing (NLP)Understands and generates h', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Computer VisionInterprets images and video.Object detection,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Robotics / Autonomous SystemsRobots, drones, and automation ', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Reactive Machines (Level 1 AI)Simple AI that reacts to input', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Limited Memory AI (Level 2 AI)Learns from past data and shor', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Theory of Mind AI (Level 3 AI)Understands emotions, beliefs,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Self-Aware AI (Level 4 AI)Consciousness and self-awareness (', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Narrow AI (Weak AI)Specialized for one task.Example: Face re', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'General AI (AGI)Understands and learns anything a human can.', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Superintelligent AI (ASI)Surpasses human intelligence (hypot', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Machine LearningSystems that learn from data.Includes superv', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Deep LearningNeural networks with many layers.Used for visio', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Natural Language Processing (NLP)Understands and generates h', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Computer VisionInterprets images and video.Object detection,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Robotics / Autonomous SystemsRobots, drones, and automation ', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:205 [clip-debug] {text: 'FinTechAI enables predictive analytics for fraud detection, ', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'HealthTechAI-driven diagnostics, personalized treatment plan', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'RetailAI-powered inventory management, customer behavior ana', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'ManufacturingAI optimizes supply chains, predictive maintena', W: 137.77500915527344, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 113.77500915527344 0 Q 137.77500915527344 0 137.7750091552734"}
AIServicesHero.tsx:205 [clip-debug] {text: 'EducationAI enhances personalized learning, adaptive assessm', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:205 [clip-debug] {text: 'TransportationAI enables autonomous vehicles, route optimiza', W: 140.0124969482422, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 116.01249694824219 0 Q 140.0124969482422 0 140.0124969482422 "}
AIServicesHero.tsx:205 [clip-debug] {text: 'EnergyAI optimizes energy consumption, predictive analytics ', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:205 [clip-debug] {text: 'Real EstateAI-driven property valuation, market analysis, an', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:214 [clip-debug] {text: 'InsuranceAI enhances risk assessment, claims processing, and', W: 132, H: 245.60000610351562, useSmall: false, pPreview: "path('M 80 0 L 108 0 Q 132 0 132 24 L 132 165.60000610351562 Q 132 185.600006103"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 256, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 176 Q 136 196 121.9 210.1 L 90.1 241.9"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 256, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 176 Q 136 196 121.9 210.1 L 90.1 241.9"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 288, H: 320, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 240 Q 288 260 273.9 274.1 L 242.1 305."}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 512, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 432 Q 136 452 121.9 466.1 L 90.1 497.9"}
AIServicesHero.tsx:214 [clip-debug] {text: 'What IT consulting services does your company provide?We pro', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How do you ensure data security during project execution?Dat', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Can you customize solutions for specific business needs?Abso', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'What industries do you have experience working with?We have ', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How long does a typical IT consulting project take?Project t', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Do you offer ongoing support after project completion?Yes, w', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How do you approach digital transformation for enterprises?O', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'What makes your IT consultancy different from others?Our dif', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
installHook.js:1 Image with src "/photo-1518770660439-4636190af475.avif" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes
overrideMethod @ installHook.js:1
overrideMethod @ forward-logs-shared.ts:95
warnOnce @ warn-once.ts:6
(anonymous) @ image-component.tsx:130
Promise.then
handleLoading @ image-component.tsx:77
(anonymous) @ image-component.tsx:233
applyRef @ use-merged-ref.ts:55
(anonymous) @ use-merged-ref.ts:42
commitAttachRef @ react-dom-client.development.js:13936
runWithFiberInDEV @ react-dom-client.development.js:984
safelyAttachRef @ react-dom-client.development.js:13954
commitLayoutEffectOnFiber @ react-dom-client.development.js:15121
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15063
flushLayoutEffects @ react-dom-client.development.js:19568
commitRoot @ react-dom-client.development.js:19333
commitRootWhenReady @ react-dom-client.development.js:18176
performWorkOnRoot @ react-dom-client.development.js:18052
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<img>
exports.jsx @ react-jsx-runtime.development.js:342
(anonymous) @ image-component.tsx:259
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateForwardRef @ react-dom-client.development.js:10057
beginWork @ react-dom-client.development.js:12473
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<ForwardRef>
exports.jsx @ react-jsx-runtime.development.js:342
(anonymous) @ image-component.tsx:412
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateForwardRef @ react-dom-client.development.js:10057
beginWork @ react-dom-client.development.js:12473
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<ForwardRef>
exports.jsxDEV @ react-jsx-dev-runtime.development.js:342
Airippleapnnel @ airippleapnnel.tsx:144
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateFunctionComponent @ react-dom-client.development.js:10499
beginWork @ react-dom-client.development.js:12083
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
"use client"
AIPage @ page.tsx:15
initializeElement @ react-server-dom-turbopack-client.browser.development.js:1933
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4592
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
getOutlinedModel @ react-server-dom-turbopack-client.browser.development.js:2322
parseModelString @ react-server-dom-turbopack-client.browser.development.js:2712
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4523
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
resolveModelChunk @ react-server-dom-turbopack-client.browser.development.js:1664
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4422
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
<AIPage>
Function.all @ VM8648 <anonymous>:1
Function.all @ VM8648 <anonymous>:1
initializeFakeTask @ react-server-dom-turbopack-client.browser.development.js:3372
initializeDebugInfo @ react-server-dom-turbopack-client.browser.development.js:3397
initializeDebugChunk @ react-server-dom-turbopack-client.browser.development.js:1764
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4371
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
"use server"
ResponseInstance @ react-server-dom-turbopack-client.browser.development.js:2767
createResponseFromOptions @ react-server-dom-turbopack-client.browser.development.js:4628
exports.createFromReadableStream @ react-server-dom-turbopack-client.browser.development.js:5032
module evaluation @ app-index.tsx:211
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateModuleFromParent @ dev-base.ts:162
commonJsRequire @ runtime-utils.ts:389
(anonymous) @ app-next-turbopack.ts:11
(anonymous) @ app-bootstrap.ts:79
loadScriptsInSequence @ app-bootstrap.ts:23
appBootstrap @ app-bootstrap.ts:61
module evaluation @ app-next-turbopack.ts:10
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateRuntimeModule @ dev-base.ts:128
registerChunk @ runtime-backend-dom.ts:57
await in registerChunk
registerChunk @ dev-base.ts:1149
(anonymous) @ dev-backend-dom.ts:126
(anonymous) @ dev-backend-dom.ts:126
installHook.js:1 Image with src "/pexels-pavel-danilyuk-8294604.jpg" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes
overrideMethod @ installHook.js:1
overrideMethod @ forward-logs-shared.ts:95
warnOnce @ warn-once.ts:6
(anonymous) @ image-component.tsx:130
Promise.then
handleLoading @ image-component.tsx:77
(anonymous) @ image-component.tsx:233
applyRef @ use-merged-ref.ts:55
(anonymous) @ use-merged-ref.ts:42
commitAttachRef @ react-dom-client.development.js:13936
runWithFiberInDEV @ react-dom-client.development.js:984
safelyAttachRef @ react-dom-client.development.js:13954
commitLayoutEffectOnFiber @ react-dom-client.development.js:15121
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15097
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14986
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:14981
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15202
recursivelyTraverseLayoutEffects @ react-dom-client.development.js:16368
commitLayoutEffectOnFiber @ react-dom-client.development.js:15063
flushLayoutEffects @ react-dom-client.development.js:19568
commitRoot @ react-dom-client.development.js:19333
commitRootWhenReady @ react-dom-client.development.js:18176
performWorkOnRoot @ react-dom-client.development.js:18052
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<img>
exports.jsx @ react-jsx-runtime.development.js:342
(anonymous) @ image-component.tsx:259
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateForwardRef @ react-dom-client.development.js:10057
beginWork @ react-dom-client.development.js:12473
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<ForwardRef>
exports.jsx @ react-jsx-runtime.development.js:342
(anonymous) @ image-component.tsx:412
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateForwardRef @ react-dom-client.development.js:10057
beginWork @ react-dom-client.development.js:12473
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
<ForwardRef>
exports.jsxDEV @ react-jsx-dev-runtime.development.js:342
Airippleapnnel @ airippleapnnel.tsx:268
react_stack_bottom_frame @ react-dom-client.development.js:28016
renderWithHooksAgain @ react-dom-client.development.js:8082
renderWithHooks @ react-dom-client.development.js:7994
updateFunctionComponent @ react-dom-client.development.js:10499
beginWork @ react-dom-client.development.js:12083
runWithFiberInDEV @ react-dom-client.development.js:984
performUnitOfWork @ react-dom-client.development.js:18995
workLoopConcurrentByScheduler @ react-dom-client.development.js:18989
renderRootConcurrent @ react-dom-client.development.js:18971
performWorkOnRoot @ react-dom-client.development.js:17832
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20382
performWorkUntilDeadline @ scheduler.development.js:45
"use client"
AIPage @ page.tsx:15
initializeElement @ react-server-dom-turbopack-client.browser.development.js:1933
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4592
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
getOutlinedModel @ react-server-dom-turbopack-client.browser.development.js:2322
parseModelString @ react-server-dom-turbopack-client.browser.development.js:2712
(anonymous) @ react-server-dom-turbopack-client.browser.development.js:4523
initializeModelChunk @ react-server-dom-turbopack-client.browser.development.js:1820
resolveModelChunk @ react-server-dom-turbopack-client.browser.development.js:1664
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4422
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
<AIPage>
Function.all @ VM8648 <anonymous>:1
Function.all @ VM8648 <anonymous>:1
initializeFakeTask @ react-server-dom-turbopack-client.browser.development.js:3372
initializeDebugInfo @ react-server-dom-turbopack-client.browser.development.js:3397
initializeDebugChunk @ react-server-dom-turbopack-client.browser.development.js:1764
processFullStringRow @ react-server-dom-turbopack-client.browser.development.js:4371
processFullBinaryRow @ react-server-dom-turbopack-client.browser.development.js:4282
processBinaryChunk @ react-server-dom-turbopack-client.browser.development.js:4495
progress @ react-server-dom-turbopack-client.browser.development.js:4767
"use server"
ResponseInstance @ react-server-dom-turbopack-client.browser.development.js:2767
createResponseFromOptions @ react-server-dom-turbopack-client.browser.development.js:4628
exports.createFromReadableStream @ react-server-dom-turbopack-client.browser.development.js:5032
module evaluation @ app-index.tsx:211
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateModuleFromParent @ dev-base.ts:162
commonJsRequire @ runtime-utils.ts:389
(anonymous) @ app-next-turbopack.ts:11
(anonymous) @ app-bootstrap.ts:79
loadScriptsInSequence @ app-bootstrap.ts:23
appBootstrap @ app-bootstrap.ts:61
module evaluation @ app-next-turbopack.ts:10
(anonymous) @ dev-base.ts:244
runModuleExecutionHooks @ dev-base.ts:278
instantiateModule @ dev-base.ts:238
getOrInstantiateRuntimeModule @ dev-base.ts:128
registerChunk @ runtime-backend-dom.ts:57
await in registerChunk
registerChunk @ dev-base.ts:1149
(anonymous) @ dev-backend-dom.ts:126
(anonymous) @ dev-backend-dom.ts:126
AIServicesHero.tsx:214 [clip-debug] {text: 'AI Development', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Strategy & Advisory', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Autonomous Agents', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Custom AI Solutions', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Predictive Analysis', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Visual Intelligence', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Operational AI & MLOps', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Ethical AI Governance', W: 136, H: 88, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 8 Q 136 28 121.9 42.1 L 90.1 73.9 Q 76"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 288, H: 400, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 320 Q 288 340 273.9 354.1 L 242.1 385."}
AIServicesHero.tsx:214 [clip-debug] {text: 'AI DevelopmentWe design and implement cutting-edge artificia', W: 288, H: 626.7999877929688, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 546.7999877929688 Q 288 566.7999877929"}
AIServicesHero.tsx:214 [clip-debug] {text: 'Reactive Machines (Level 1 AI)Simple AI that reacts to input', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Limited Memory AI (Level 2 AI)Learns from past data and shor', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Theory of Mind AI (Level 3 AI)Understands emotions, beliefs,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Self-Aware AI (Level 4 AI)Consciousness and self-awareness (', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Narrow AI (Weak AI)Specialized for one task.Example: Face re', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'General AI (AGI)Understands and learns anything a human can.', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Superintelligent AI (ASI)Surpasses human intelligence (hypot', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Machine LearningSystems that learn from data.Includes superv', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Deep LearningNeural networks with many layers.Used for visio', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Natural Language Processing (NLP)Understands and generates h', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Computer VisionInterprets images and video.Object detection,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Robotics / Autonomous SystemsRobots, drones, and automation ', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Reactive Machines (Level 1 AI)Simple AI that reacts to input', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Limited Memory AI (Level 2 AI)Learns from past data and shor', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Theory of Mind AI (Level 3 AI)Understands emotions, beliefs,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Self-Aware AI (Level 4 AI)Consciousness and self-awareness (', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Narrow AI (Weak AI)Specialized for one task.Example: Face re', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'General AI (AGI)Understands and learns anything a human can.', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Superintelligent AI (ASI)Surpasses human intelligence (hypot', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Machine LearningSystems that learn from data.Includes superv', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Deep LearningNeural networks with many layers.Used for visio', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Natural Language Processing (NLP)Understands and generates h', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Computer VisionInterprets images and video.Object detection,', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Robotics / Autonomous SystemsRobots, drones, and automation ', W: 365.2124938964844, H: 200, useSmall: false, pPreview: "path('M 80 0 L 341.2124938964844 0 Q 365.2124938964844 0 365.2124938964844 24 L "}
AIServicesHero.tsx:205 [clip-debug] {text: 'FinTechAI enables predictive analytics for fraud detection, ', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'HealthTechAI-driven diagnostics, personalized treatment plan', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'RetailAI-powered inventory management, customer behavior ana', W: 132, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 245.39999389648438 Q 132 250.3"}
AIServicesHero.tsx:205 [clip-debug] {text: 'ManufacturingAI optimizes supply chains, predictive maintena', W: 137.77500915527344, H: 262.3999938964844, useSmall: true, pPreview: "path('M 17 0 \n   L 113.77500915527344 0 Q 137.77500915527344 0 137.7750091552734"}
AIServicesHero.tsx:205 [clip-debug] {text: 'EducationAI enhances personalized learning, adaptive assessm', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:205 [clip-debug] {text: 'TransportationAI enables autonomous vehicles, route optimiza', W: 140.0124969482422, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 116.01249694824219 0 Q 140.0124969482422 0 140.0124969482422 "}
AIServicesHero.tsx:205 [clip-debug] {text: 'EnergyAI optimizes energy consumption, predictive analytics ', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:205 [clip-debug] {text: 'Real EstateAI-driven property valuation, market analysis, an', W: 132, H: 245.60000610351562, useSmall: true, pPreview: "path('M 17 0 \n   L 108 0 Q 132 0 132 24 \n   L 132 228.60000610351562 Q 132 233.6"}
AIServicesHero.tsx:214 [clip-debug] {text: 'InsuranceAI enhances risk assessment, claims processing, and', W: 132, H: 245.60000610351562, useSmall: false, pPreview: "path('M 80 0 L 108 0 Q 132 0 132 24 L 132 165.60000610351562 Q 132 185.600006103"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 256, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 176 Q 136 196 121.9 210.1 L 90.1 241.9"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 256, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 176 Q 136 196 121.9 210.1 L 90.1 241.9"}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 288, H: 320, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 240 Q 288 260 273.9 274.1 L 242.1 305."}
AIServicesHero.tsx:214 [clip-debug] {text: '', W: 136, H: 512, useSmall: false, pPreview: "path('M 80 0 L 112 0 Q 136 0 136 24 L 136 432 Q 136 452 121.9 466.1 L 90.1 497.9"}
AIServicesHero.tsx:214 [clip-debug] {text: 'What IT consulting services does your company provide?We pro', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How do you ensure data security during project execution?Dat', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Can you customize solutions for specific business needs?Abso', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}H: 76W: 288pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "text: "Can you customize solutions for specific business needs?Abso"useSmall: false[[Prototype]]: Object
AIServicesHero.tsx:214 [clip-debug] {text: 'What industries do you have experience working with?We have ', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How long does a typical IT consulting project take?Project t', W: 288, H: 76, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 -4 Q 288 16 273.9 30.1 L 242.1 61.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'Do you offer ongoing support after project completion?Yes, w', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'How do you approach digital transformation for enterprises?O', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
AIServicesHero.tsx:214 [clip-debug] {text: 'What makes your IT consultancy different from others?Our dif', W: 288, H: 102, useSmall: false, pPreview: "path('M 80 0 L 264 0 Q 288 0 288 24 L 288 22 Q 288 42 273.9 56.1 L 242.1 87.9 Q "}
