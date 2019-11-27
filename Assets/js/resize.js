remark.macros.resize = function (altText, width, height) {
  var url = this;
  return '<img alt="' + altText + '" src="' + url + '" style="width: ' + width + '; height: ' + height + '" />';
};