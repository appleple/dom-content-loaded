module.exports = function (handler) {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
};