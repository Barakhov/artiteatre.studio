import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE = new URL("../public", import.meta.url).pathname;

async function convert(src, dest, resizeOptions, quality = 80) {
  const before = statSync(src).size;
  await sharp(src)
    .resize(resizeOptions)
    .webp({ quality })
    .toFile(dest);
  const after = statSync(dest).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${src.split("/public/")[1]} → ${dest.split("/public/")[1]}  (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB, -${pct}%)`);
}

// 1. Slideshow — keep at 1200×900, quality 80
const slideshowDir = join(BASE, "galleries/verano-hero");
const slideshowFiles = readdirSync(slideshowDir).filter(f => f.endsWith(".jpg"));
console.log(`\n── Slideshow (${slideshowFiles.length} files) ──`);
for (const file of slideshowFiles) {
  await convert(
    join(slideshowDir, file),
    join(slideshowDir, file.replace(".jpg", ".webp")),
    { width: 1200, height: 900, fit: "cover" }
  );
}

// 2. Materia images — resize to max 800px wide, quality 82
const materiaFiles = ["verano-arte.jpg", "verano-teatro.jpg", "verano-naturaleza.jpg", "verano-mas.jpg"];
console.log(`\n── Materia images (${materiaFiles.length} files) ──`);
for (const file of materiaFiles) {
  await convert(
    join(BASE, "assets", file),
    join(BASE, "assets", file.replace(".jpg", ".webp")),
    { width: 800, fit: "inside", withoutEnlargement: true },
    82
  );
}

// 3. Gallery images — max 1200px on longer side, quality 80
const galleryFiles = readdirSync(join(BASE, "assets"))
  .filter(f => f.match(/^\d+\.jpg$/));
console.log(`\n── Gallery images (${galleryFiles.length} files) ──`);
for (const file of galleryFiles.sort((a, b) => parseInt(a) - parseInt(b))) {
  await convert(
    join(BASE, "assets", file),
    join(BASE, "assets", file.replace(".jpg", ".webp")),
    { width: 1200, height: 1200, fit: "inside", withoutEnlargement: true },
    80
  );
}

// 4. Teacher portraits — already small, just convert, quality 82
const teacherFiles = ["nadia-profe.jpg", "niura-profe.jpg", "raquel-profe.jpg"];
console.log(`\n── Teacher portraits (${teacherFiles.length} files) ──`);
for (const file of teacherFiles) {
  await convert(
    join(BASE, "assets", file),
    join(BASE, "assets", file.replace(".jpg", ".webp")),
    { width: 400, fit: "inside", withoutEnlargement: true },
    82
  );
}

console.log("\n✓ Done");
