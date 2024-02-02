
// Function to check if a given SVG element represents a heading
function isHeadingElement(element) {
  const ariaLabel = element.getAttribute("aria-label") || "";
  const lowerAriaLabel = ariaLabel.toLowerCase();

  const minHeightH1 = 31.999999999999996;
  const minHeightH2 = 25.599999999999998;
  const minHeightBody = 17.599999999999998;

  const elementHeight = parseFloat(element.getAttribute("height")) || 0;

  // H2 days heading check
  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const isDayOfWeek = daysOfWeek.some((day) => lowerAriaLabel.includes(day));

  // H1 months heading check
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const isMonth = months.some((month) => lowerAriaLabel.includes(month));

  const isH1 = isMonth && elementHeight >= minHeightH1;
  const isH2 = isDayOfWeek && elementHeight >= minHeightH2;
  const isNotInBody = !isDayOfWeek && !isMonth && elementHeight >= minHeightBody;

  if (isH1) {
    // Heading 1 logic
    console.log("Heading 1:", lowerAriaLabel);
  } else if (isH2) {
    // Heading 2 logic
    console.log("Heading 2:", lowerAriaLabel);
  } else if (isNotInBody) {
    // Body content logic
    console.log("Body content:", lowerAriaLabel);
  }

  return isH1 || isH2;
}

const parentDivs = document.querySelectorAll(".kix-rotatingtilemanager-content");
parentDivs.forEach((parentDiv) => {
  const pageDivs = parentDiv.querySelectorAll(".kix-page-paginated");
  const svgParentDiv = PageDivs.querySelector(".kix-canvas-tile-content");

  pageDivs.forEach((pageDiv) => {
    const svgElement = pageDiv.querySelector("svg");
    const groupedElements = svgElement ? svgElement.querySelectorAll('g[data-section-type="body"][role="paragraph"]') : [];

    groupedElements.forEach((groupedElement) => {
      const isHeading = Array.from(groupedElement.children).some((child) => isHeadingElement(child));
      if (isHeading) {
        groupedElement.classList.add("taggable-entry-heading-group");
      } else {
        groupedElement.classList.add("taggable-entry-paragraph-group"); 
      }
    });
  });
});
