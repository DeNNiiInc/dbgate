function isProApp() {
  return true;
}

function checkLicense(license) {
  return { status: 'ok', type: 'premium' };
}

module.exports = {
  isProApp,
  checkLicense,
};
