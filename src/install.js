import which from 'which';

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

function findNpm() {
  var npms = process.platform === 'win32' ? ['tnpm.cmd', 'cnpm.cmd', 'npm.cmd'] : ['tnpm', 'cnpm', 'npm'];
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i];
    } catch (e) {
    }
  }
  throw new Error('please install npm');
}

function findYarn() {
  var yarn = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  try {
    which.sync(yarn);
    console.log('Find yarn installed. Use yarn first.');
    return yarn;
  } catch (e) { }
}

export default function (done) {
  const yarn = findYarn();
  if (yarn) {
    runCmd(which.sync(yarn), [], function () {
      runCmd(which.sync(yarn), ['add', 'dva'], function () {
        console.log(yarn + ' install end');
        done();
      });
    });
  } else {
    const npm = findNpm();
    runCmd(which.sync(npm), ['install'], function () {
      runCmd(which.sync(npm), ['install', 'dva', '--save'], function () {
        console.log(npm + ' install end');
        done();
      });
    });
  }
};