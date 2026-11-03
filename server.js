import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 8080;
const DIST_DIR = path.join(__dirname, "dist");
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ico": "image/x-icon",
};

function resolveFile(urlPath) {
  const safePath = decodeURIComponent(urlPath.split("?")[0]);
  const distCandidate = path.join(DIST_DIR, safePath);
  if (fs.existsSync(distCandidate) && fs.statSync(distCandidate).isFile()) {
    return distCandidate;
  }
  const publicCandidate = path.join(PUBLIC_DIR, safePath);
  if (fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
    return publicCandidate;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const reqUrl = req.url || "/";
  let filePath = resolveFile(reqUrl === "/" ? "/index.html" : reqUrl);

  if (!filePath) {
    filePath = resolveFile("/index.html");
  }

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stat = fs.statSync(filePath);
  const range = req.headers.range;

  if (range && ext === ".mp4") {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    const chunksize = end - start + 1;
    const stream = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": contentType,
    });
    stream.pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Length": stat.size,
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Embroidered Garden server running at http://localhost:${PORT}`);
});

