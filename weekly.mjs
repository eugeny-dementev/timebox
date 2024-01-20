import { drawBrainDump } from "./drawBrainDump.mjs";
import { drawDots } from "./drawDots.mjs";
import { drawTopSection } from "./drawTopSection.mjs";
import { prepareDoc } from "./jspdf.factory.mjs";
import { startX, startY, endY, endX, sectionW, approximateLabelH } from "./constants.mjs";
import { drawPlanner } from "./drawPlanner.mjs";

export function getWeeklyDoc({
  cellSize = 9.5,
}) {
  const doc = prepareDoc();


  // Top priorities
  const tpBottomY = drawTopSection(doc, startX, startY, sectionW, cellSize)


  // Brain dump
  const bdY = tpBottomY + cellSize - approximateLabelH;
  const bdH = endY - tpBottomY;
  drawBrainDump(doc, startX, bdY, sectionW, bdH);
  drawDots(doc, startX, bdY + approximateLabelH, sectionW, bdH, cellSize);

  // Weekly planner
  const pSectionX = startX + sectionW + cellSize;
  doc.text(pSectionX, startY, "Week:");
  const pLabelY = startY + approximateLabelH;
  const pLabelX = pSectionX + 10.5;
  doc.line(pLabelX, pLabelY, endX, pLabelY);
  const pSectionY = pLabelY + cellSize;
  const pSectionH = endY - pSectionY + cellSize;

  drawPlanner(doc, pSectionX, pSectionY, sectionW, pSectionH, 1, 7, cellSize);

  return doc;
}
