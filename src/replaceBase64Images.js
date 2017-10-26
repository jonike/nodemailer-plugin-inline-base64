var replaceBase64Images = function(html, getCid) {
  //Replace html base64 images
  var result = html.replace(/(<img[\s\S]*? src=['"])data:(image\/(?:png|jpe?g|gif));base64,([\s\S]*?)(['"][\s\S]*?>)/g, function(g, start, mimeType, base64, end) {
    return start + 'cid:' + getCid(mimeType, base64) + end;
  });

  //Replace css base64 images
  return result.replace(/(url\(['"]?)data:(image\/(?:png|jpe?g|gif));base64,([\s\S]*?)(['"]?\))/g, function(g, start, mimeType, base64, end) {
    return start + 'cid:' + getCid(mimeType, base64) + end;
  });
};

module.exports = replaceBase64Images;
