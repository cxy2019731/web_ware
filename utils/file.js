/*
 * @Author: itmanyong
 * @Date: 2021-04-08 16:16:33
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 16:19:16
 * @FilePath: \工具\自我工具\file.js
 */
/**
 * file、blob转化为dataUrl
 * @param {blob} file file、blob
 */
function fileToDataURL(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  // reader 读取文件成功的回调
  reader.onload = function (e) {
    return reader.result;
  };
}

/**
 * dataURL(base64) 转化成 Blob(二进制)对象
 * @param {dataUrl} fileDataURL dataUrl
 * @returns
 */
function dataURLToBlob(fileDataURL) {
  let arr = fileDataURL.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
/**
 * File, Blob 文件数据绘制到 canvas
 * @param {blob} fileDataURL blob
 * @returns
 */
function fileAndBlobToCanvas(fileDataURL) {
  let img = new Image();
  img.src = fileDataURL;
  let canvas = document.createElement("canvas");
  if (!canvas.getContext) {
    alert("浏览器不支持canvas");
    return;
  }
  let ctx = canvas.getContext("2d");
  document.getElementById("container").appendChild(canvas);
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}
/**
 * 从canvas中获取文件dataUrl
 * @returns dataUrl
 */
function canvasToDataURL() {
  let canvas = document.createElement("canvas");
  let canvasDataURL = canvas.toDataURL("image/png", 1.0);
  return canvasDataURL;
}
