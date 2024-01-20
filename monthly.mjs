import { prepareDoc } from "./jspdf.factory.mjs";
import { startX, startY, sectionW, endY, endX, approximateLabelH } from "./constants.mjs";
import { drawDots } from "./drawDots.mjs";
import { drawTopSection } from "./drawTopSection.mjs";
import { drawBrainDump } from "./drawBrainDump.mjs";
import { drawPlanner } from "./drawPlanner.mjs";

/**
 * @param {number} [cellSize=9.5] 
 * @param monthlySplit: day | week - how planning section should be split, by 30 days or by 4 weeks
 */
export function getMonthlyDoc({
  cellSize = 9.5,
  monthlySplit,
}) {
  const doc = prepareDoc();


  // Top priorities
  const tpBottomY = drawTopSection(doc, startX, startY, sectionW, cellSize)


  // Brain dump
  const bdY = tpBottomY + cellSize - approximateLabelH;
  const bdH = endY - tpBottomY;
  drawBrainDump(doc, startX, bdY, sectionW, bdH);
  drawDots(doc, startX, bdY + approximateLabelH, sectionW, bdH, cellSize);


  // Monthly planner
  const pSectionX = startX + sectionW + cellSize;
  doc.text(pSectionX, startY, "Month:");
  const pLabelY = startY + approximateLabelH;
  const pLabelX = pSectionX + 12.5;
  doc.line(pLabelX, pLabelY, endX, pLabelY);
  const pSectionY = pLabelY + cellSize;
  const pSectionH = endY - pSectionY + cellSize;

  if (monthlySplit == 'week') {
    drawPlanner(doc, pSectionX, pSectionY, sectionW, pSectionH, 1, 4, cellSize);
  } else if (monthlySplit == 'day') {
    drawPlanner(doc, pSectionX, pSectionY, sectionW, pSectionH, 2, 15, cellSize);
  }

  return doc;
}
