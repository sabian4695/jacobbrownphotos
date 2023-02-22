import { HTML, Head, Main, NextScript } from 'next/Document'

export default function Document() {
  return(
    <Html lang="en">
      <Head/>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Jacob Brown Photos - Canal Winchester, Ohio Professional Photographer. Book me for professional headshots, family photos, senior photos, product photos, pet photos, baby photos, and much more."
    />
    <meta name=”robots” content="index, follow">
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Jacob Brown Photos - Canal Winchester, Ohio Photographer</title>
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) {
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
