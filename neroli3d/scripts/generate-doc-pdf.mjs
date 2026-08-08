import fs from "node:fs";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const root = process.cwd();
const inputPath = path.join(root, "docs", "Documentacion_Neroli3D.md");
const outputPath = path.join(root, "docs", "Documentacion_Neroli3D.pdf");

function normalizeMarkdown(markdown) {
  return markdown
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return line.replace("### ", "");
      if (line.startsWith("## ")) return line.replace("## ", "");
      if (line.startsWith("# ")) return line.replace("# ", "");
      if (line.startsWith("- ")) return `• ${line.slice(2)}`;
      return line;
    })
    .join("\n");
}

function wrapLine(text, maxChars) {
  if (!text) return [""];

  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

async function generate() {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`No se encontro el archivo de entrada: ${inputPath}`);
  }

  const markdown = fs.readFileSync(inputPath, "utf8");
  const plainText = normalizeMarkdown(markdown);

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 56;
  const fontSize = 11;
  const lineHeight = 15;
  const maxChars = 95;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const draw = (text, options = {}) => {
    page.drawText(text, {
      x: margin,
      y,
      size: options.size ?? fontSize,
      font,
      color: options.color ?? rgb(0, 0, 0),
    });
    y -= options.lineHeight ?? lineHeight;
  };

  draw("Documentacion del Proyecto Neroli3D", {
    size: 16,
    lineHeight: 24,
    color: rgb(0.12, 0.12, 0.12),
  });
  draw(`Fecha de generacion: ${new Date().toISOString().slice(0, 10)}`, {
    size: 10,
    lineHeight: 20,
    color: rgb(0.35, 0.35, 0.35),
  });

  const lines = plainText.split("\n");

  for (const rawLine of lines) {
    const wrapped = wrapLine(rawLine, maxChars);

    for (const line of wrapped) {
      if (y < margin) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
      draw(line);
    }

    if (rawLine.trim() === "") {
      if (y < margin) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
      y -= 6;
    }
  }

  const bytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, bytes);

  console.log(`PDF generado en: ${outputPath}`);
}

generate().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
