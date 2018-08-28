export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data!</title>
            <meta name="viewport" content="width=device-width">
            <link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}