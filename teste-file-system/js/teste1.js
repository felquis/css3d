'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

function onInitFs(fs) {
  console.log('Opened file system: ', fs);

  // file:///C:/Users/Ofelquis/Pictures/1343678375515613.jpg
}

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}

// window.requestFileSystem(window.TEMPORARY, 5*1024*1024 /*5MB*/, onInitFs, errorHandler);

window.requestFileSystem(window.TEMPORARY, 5*1024*1024, function(fs) {

  var $result = document.getElementById('result');

  var saveInputFile = function () {
    document.querySelector('#input').onchange = function(e) {
      var file = this.files[0];

      if (file.type != 'text/html') {

        alert('Aceita apenas arquivos .html');

        return false;
      }

      // removeAllFiles();

        (function(f) {
          fs.root.getFile(file.name, {create: true, exclusive: true}, function(fileEntry) {
              fileEntry.createWriter(function(fileWriter) {
                fileWriter.write(f); // Note: write() can take a File or Blob object.

                readDirectory();
              }, errorHandler);
        }, errorHandler);
        })(file);
    };
  }

  saveInputFile();

  var readDirectory = function () {
    var dirReader = fs.root.createReader();

    dirReader.readEntries(function (re) {

      for (var i = re.length - 1; i >= 0; i--) {
        $result.innerHTML = '<iframe src="'+ re[i].toURL() +'"></iframe>';
      };
    });
  }

  readDirectory();

  var removeAllFiles = function () {
    var dirReader = fs.root.createReader();

    dirReader.readEntries(function (res) {
      for (var i = res.length - 1; i >= 0; i--) {
        if (res[i].isFile) {
          res[i].remove(function (e) {
            console.log('Removendo outros arquivos temporarios');
          }, function () {
            console.log('Remover Err', e);
            debugger;
          });

        }
      };
    });
  }

  // removeAllFiles();
}, errorHandler);
