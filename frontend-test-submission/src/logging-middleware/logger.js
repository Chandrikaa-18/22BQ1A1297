const logger = {
  logPageView: function (pageName) {
    console.log(`[Page View] ${pageName}`);
  },

  logClick: function (elementName) {
    console.log(`[Click] ${elementName}`);
  },

  logButtonClick: function (buttonName) {
    console.log(`[Button Click] ${buttonName}`);
  },

  logApiRequest: function (endpoint, method) {
    console.log(`[API Request] ${method.toUpperCase()} ${endpoint}`);
  },

  logApiResponse: function (endpoint, status) {
    console.log(`[API Response] ${endpoint} - Status: ${status}`);
  },

  logError: function (message, error) {
    console.error(`[Error] ${message}`, error);
  }
};

export default logger;
