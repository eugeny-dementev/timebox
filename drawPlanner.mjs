import { drawDots } from "./drawDots.mjs";

export function drawPlanner(doc, x, y, w, h, cols, rows, cellSize) {
  doc.rect(x, y, w, h); // Table rectangle

  const columnWidth = w / cols;

  // Draw planning section vertical separation lines
  for (let i = 1; i < cols; i++) {
    doc.line(
      x + i * columnWidth,
      y,
      x + i * columnWidth,
      y + h,
    );
  }

  const rowHeight = h / rows;

  // Draw planning section horizontal separation lines
  for (let j = 1; j < rows; j++) {
    doc.line(
      x,
      y + j * rowHeight,
      x + w,
      y + j * rowHeight,
    );
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      drawDots(
        doc,
        x + columnWidth * i,
        y + rowHeight * j,
        columnWidth,
        rowHeight,
        cellSize
      );
    }
  }
}

