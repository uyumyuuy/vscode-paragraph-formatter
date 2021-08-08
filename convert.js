function format(text) {
  text = text.replace(/^\s+/gm, "");
  text = text.replace(/\s+$/gm, "");
  text = text.replace(/-[\r\n]+/g, "");
  text = text.replace(/(?<!([.?":]))[\r\n]+/g, " ");

  return text;
}

module.exports.format = format;
