function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.substr(0, maxLength).concat("...");
  }
}
