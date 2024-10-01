/* eslint-disable no-unused-vars */
export function calculateStars(totalStar, numberOfReview) {
  const result = totalStar / numberOfReview;
  const adjustResult = result.toFixed(2);

  return adjustResult;
}
