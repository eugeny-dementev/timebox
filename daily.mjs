import { prepareDoc } from "./jspdf.factory.mjs";
import { drawTopSection } from "./drawTopSection.mjs";
import { drawBrainDump } from "./drawBrainDump.mjs";
import { drawDots } from "./drawDots.mjs";
import { startY, startX, sectionW, endY, endX, approximateLabelH } from "./constants.mjs";
import { drawDailyPlanner } from "./drawDailyPlanner.mjs";

export function getDailyDoc({
  cellSize = 9.5,
  startingHour = 8,
}) {
  const doc = prepareDoc();


  // Top priorities
  const tpBottomY = drawTopSection(doc, startX, startY, sectionW, cellSize)


  // Brain dump
  const bdY = tpBottomY + cellSize - approximateLabelH;
  const bdH = endY - tpBottomY;
  drawBrainDump(doc, startX, bdY, sectionW, bdH);
  drawDots(doc, startX, bdY + approximateLabelH, sectionW, bdH, cellSize);

  const pSectionX = startX + sectionW + cellSize;
  doc.text(pSectionX, startY, "Date:");
  const pLabelY = startY + approximateLabelH;
  const pLabelX = pSectionX + 10.5;
  doc.line(pLabelX, pLabelY, endX, pLabelY);
  const pSectionY = pLabelY + cellSize;
  const pSectionH = endY - pSectionY + cellSize;

  // Half hour labels with approxmimate coordinates
  doc.text(100, 21, ":00");
  doc.text(124, 21, ":30");

  // Draw daily planning section with 30 mintues split for 19 hours of the day starting with 08:00
  drawDailyPlanner(doc, pSectionX, pSectionY, sectionW, pSectionH, 8, 19);

  return doc;
}
