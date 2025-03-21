/** @format */

const fs = require("fs");
const path = require("path");

const links = JSON.parse(fs.readFileSync("links.json", "utf8"));

links.forEach(({ paths, url, title, description }) => {
    paths.forEach(linkPath => {
        const htmlContent = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
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
    <p>正在前往 <a href="${url}">${title}</a></p>
</body>
</html>`;
        fs.writeFileSync(`${linkPath}.html`, htmlContent, "utf8");
    });
});

console.log("HTML files generated successfully.");
