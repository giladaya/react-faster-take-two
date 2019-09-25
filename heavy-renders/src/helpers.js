
export function updateStats(
  id, // the "id" prop of the Profiler tree that has just committed
  _phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  _startTime, // when React began rendering this update
  _commitTime, // when React committed this update
  _interactions // the Set of interactions belonging to this update
) {
  console.log(`${id} update: ${actualDuration.toFixed(3)}ms`);
}

// Recursive calculate Fibonacci numbers
// Intentionally inefficient ( O(2^n) )
export function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}