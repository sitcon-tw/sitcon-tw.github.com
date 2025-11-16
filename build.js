/** @format */

const fs = require("fs");
const path = require("path");

const links = JSON.parse(fs.readFileSync("links.json", "utf8"));

links.forEach(({ paths, url, title, description }) => {
    paths.forEach(linkPath => {
        const htmlContent = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NPVBCDZ');</script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=${url}">
    <title>${title || "Redirecting..."}</title>
    <meta name="description" content="SITCON (Students’ Information Technology Conference) 是發源自臺灣、由學生自主舉辦的計算機年會與資訊社群。${
        description || ""
    }">
    <meta property="og:title" content="${title || "Redirecting..."}">
    <meta property="og:description" content="${description || ""}">
    <meta property="og:url" content="${url}">
    <link rel="canonical" href="${url}">
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPVBCDZ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <p>正在前往 <a href="${url}">${title}</a></p>
</body>
</html>`;
        fs.mkdirSync(linkPath, { recursive: true });
        fs.writeFileSync(path.join(linkPath, "index.html"), htmlContent, "utf8");
    });
});

console.log("HTML files generated successfully.");
