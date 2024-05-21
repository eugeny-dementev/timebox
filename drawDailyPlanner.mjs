import { drawDots } from "./drawDots.mjs";
import { prepareHoursIterator } from "./hoursLabels.factory.mjs";

export function drawDailyPlanner(doc, x, y, w, h, startingHour = 8, hours = 19) {
  doc.rect(x, y, w, h);

  const cellSize = h / hours;

  // draw separation line for hour hours labels 
  // with the same width as row height (cell size)
  const hoursX = x + cellSize
  doc.line(hoursX, y, hoursX, y + h);

  // draw  separation line between half hour rows
  const halfHourW = (w - cellSize) / 2;
  const halfHourX = x + cellSize + halfHourW;
  doc.line(halfHourX, y, halfHourX, y + h);

  const hourLabelX = x + cellSize / 2 - 2; // approxmimate coordinate for hour label X coordinate
  const hourLabelYShift = cellSize / 2 + 1; // approxmimate shift for hour label Y coordinate

  const getHourLabel = prepareHoursIterator(startingHour);

  for (let r = 0; r < hours; r++) {
    const hourLabelY = y + cellSize * r + hourLabelYShift;
    doc.text(hourLabelX, hourLabelY, getHourLabel());

    const rowY = y + cellSize * r;

    if (r != 0) {
      doc.line(x, rowY, x + w, rowY)
    }

    drawDots(doc, x + cellSize, rowY, halfHourW, cellSize, cellSize);
    drawDots(doc, x + cellSize + halfHourW, rowY, halfHourW, cellSize, cellSize);
  }
}

export function drawDailyPlanner2(doc, x, y, w, h, startingHour = 8, hours = 19) {
  doc.rect(x, y, w, h);

  const cellSize = h / hours;

  // draw separation line for hour hours labels 
  // with the same width as row height (cell size)
  const hoursX = x + cellSize
  doc.line(hoursX, y, hoursX, y + h);

  // draw  separation line between half hour rows
  const hourW = w - cellSize;

  const hourLabelX = x + cellSize / 2 - 2; // approxmimate coordinate for hour label X coordinate
  const hourLabelYShift = cellSize / 2 + 1; // approxmimate shift for hour label Y coordinate

  const getHourLabel = prepareHoursIterator(startingHour);

  for (let r = 0; r < hours; r++) {
    const hourLabelY = y + cellSize * r + hourLabelYShift;
    doc.text(hourLabelX, hourLabelY, getHourLabel());

    const rowY = y + cellSize * r;

    if (r != 0) {
      doc.line(x, rowY, hoursX, rowY)
    }

    if (r !== hours - 1) drawDots(doc, x + cellSize, rowY + cellSize - cellSize/4, hourW, cellSize / 2, cellSize / 2);
    drawDots(doc, x + cellSize, rowY, hourW, cellSize, cellSize);
  }
}
