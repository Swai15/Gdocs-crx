// Check if svg element is a heading
function isHeadingElement(element) {
  const ariaLabel = element.getAttribute("aria-label") || "";
  const lowerAriaLabel = ariaLabel.toLowerCase();

  // H2 days heading check
  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const isDayOfWeek = daysOfWeek.some((day) => lowerAriaLabel.includes(day));

  // H1 months heading check
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const isMonth = months.some((month) => lowerAriaLabel.includes(month));
}
