// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\header-bg-img\\Slider-3-mob.jpg":[["Slider-3-mob.ec78a5b3.jpg","images/header-bg-img/Slider-3-mob.jpg"],"images/header-bg-img/Slider-3-mob.jpg"],"./..\\images\\header-bg-img\\Slider-3-mob@2x.jpg":[["Slider-3-mob@2x.eb2166b5.jpg","images/header-bg-img/Slider-3-mob@2x.jpg"],"images/header-bg-img/Slider-3-mob@2x.jpg"],"./..\\images\\header-bg-img\\Slider-3-mob@3x.jpg":[["Slider-3-mob@3x.f831d292.jpg","images/header-bg-img/Slider-3-mob@3x.jpg"],"images/header-bg-img/Slider-3-mob@3x.jpg"],"./..\\images\\header-bg-img\\Slider-2-mob.jpg":[["Slider-2-mob.4237757e.jpg","images/header-bg-img/Slider-2-mob.jpg"],"images/header-bg-img/Slider-2-mob.jpg"],"./..\\images\\header-bg-img\\Slider-2-mob@2x.jpg":[["Slider-2-mob@2x.3a3ec777.jpg","images/header-bg-img/Slider-2-mob@2x.jpg"],"images/header-bg-img/Slider-2-mob@2x.jpg"],"./..\\images\\header-bg-img\\Slider-2-mob@3x.jpg":[["Slider-2-mob@3x.eeb9adfc.jpg","images/header-bg-img/Slider-2-mob@3x.jpg"],"images/header-bg-img/Slider-2-mob@3x.jpg"],"./..\\images\\header-bg-img\\Slider-1-mob.jpg":[["Slider-1-mob.36879238.jpg","images/header-bg-img/Slider-1-mob.jpg"],"images/header-bg-img/Slider-1-mob.jpg"],"./..\\images\\header-bg-img\\Slider-1-mob@2x.jpg":[["Slider-1-mob@2x.bdc47a9d.jpg","images/header-bg-img/Slider-1-mob@2x.jpg"],"images/header-bg-img/Slider-1-mob@2x.jpg"],"./..\\images\\header-bg-img\\Slider-1-mob@3x.jpg":[["Slider-1-mob@3x.af7b004a.jpg","images/header-bg-img/Slider-1-mob@3x.jpg"],"images/header-bg-img/Slider-1-mob@3x.jpg"],"./..\\images\\header-bg-img\\Slider-3-tab.jpg":[["Slider-3-tab.cae920f8.jpg","images/header-bg-img/Slider-3-tab.jpg"],"images/header-bg-img/Slider-3-tab.jpg"],"./..\\images\\header-bg-img\\Slider-3-tab@2x.jpg":[["Slider-3-tab@2x.3aa1ff3d.jpg","images/header-bg-img/Slider-3-tab@2x.jpg"],"images/header-bg-img/Slider-3-tab@2x.jpg"],"./..\\images\\header-bg-img\\Slider-3-tab@3x.jpg":[["Slider-3-tab@3x.059c5791.jpg","images/header-bg-img/Slider-3-tab@3x.jpg"],"images/header-bg-img/Slider-3-tab@3x.jpg"],"./..\\images\\header-bg-img\\Slider-2-tab.jpg":[["Slider-2-tab.7752d846.jpg","images/header-bg-img/Slider-2-tab.jpg"],"images/header-bg-img/Slider-2-tab.jpg"],"./..\\images\\header-bg-img\\Slider-2-tab@2x.jpg":[["Slider-2-tab@2x.3b0d08a5.jpg","images/header-bg-img/Slider-2-tab@2x.jpg"],"images/header-bg-img/Slider-2-tab@2x.jpg"],"./..\\images\\header-bg-img\\Slider-2-tab@3x.jpg":[["Slider-2-tab@3x.7e62ad3b.jpg","images/header-bg-img/Slider-2-tab@3x.jpg"],"images/header-bg-img/Slider-2-tab@3x.jpg"],"./..\\images\\header-bg-img\\Slider-1-tab.jpg":[["Slider-1-tab.1d3e09c0.jpg","images/header-bg-img/Slider-1-tab.jpg"],"images/header-bg-img/Slider-1-tab.jpg"],"./..\\images\\header-bg-img\\Slider-1-tab@2x.jpg":[["Slider-1-tab@2x.a5b0128b.jpg","images/header-bg-img/Slider-1-tab@2x.jpg"],"images/header-bg-img/Slider-1-tab@2x.jpg"],"./..\\images\\header-bg-img\\Slider-1-tab@3x.jpg":[["Slider-1-tab@3x.1d2a6f0e.jpg","images/header-bg-img/Slider-1-tab@3x.jpg"],"images/header-bg-img/Slider-1-tab@3x.jpg"],"./..\\images\\header-bg-img\\Slider-3.jpg":[["Slider-3.ccf04475.jpg","images/header-bg-img/Slider-3.jpg"],"images/header-bg-img/Slider-3.jpg"],"./..\\images\\header-bg-img\\Slider-3@2x.jpg":[["Slider-3@2x.b0577944.jpg","images/header-bg-img/Slider-3@2x.jpg"],"images/header-bg-img/Slider-3@2x.jpg"],"./..\\images\\header-bg-img\\Slider-3@3x.jpg":[["Slider-3@3x.94b7ddc7.jpg","images/header-bg-img/Slider-3@3x.jpg"],"images/header-bg-img/Slider-3@3x.jpg"],"./..\\images\\header-bg-img\\Slider-2.jpg":[["Slider-2.ffbe3dee.jpg","images/header-bg-img/Slider-2.jpg"],"images/header-bg-img/Slider-2.jpg"],"./..\\images\\header-bg-img\\Slider-2@2x.jpg":[["Slider-2@2x.f6db1dc9.jpg","images/header-bg-img/Slider-2@2x.jpg"],"images/header-bg-img/Slider-2@2x.jpg"],"./..\\images\\header-bg-img\\Slider-2@3x.jpg":[["Slider-2@3x.38ebe59d.jpg","images/header-bg-img/Slider-2@3x.jpg"],"images/header-bg-img/Slider-2@3x.jpg"],"./..\\images\\header-bg-img\\Slider-1.jpg":[["Slider-1.6e60e95f.jpg","images/header-bg-img/Slider-1.jpg"],"images/header-bg-img/Slider-1.jpg"],"./..\\images\\header-bg-img\\Slider-1@2x.jpg":[["Slider-1@2x.0a4c0eaf.jpg","images/header-bg-img/Slider-1@2x.jpg"],"images/header-bg-img/Slider-1@2x.jpg"],"./..\\images\\header-bg-img\\Slider-1@3x.jpg":[["Slider-1@3x.ee326923.jpg","images/header-bg-img/Slider-1@3x.jpg"],"images/header-bg-img/Slider-1@3x.jpg"],"./..\\images\\price-images\\imgmob1.png":[["imgmob1.a80f30bb.png","images/price-images/imgmob1.png"],"images/price-images/imgmob1.png"],"./..\\images\\price-images\\imgmob2.png":[["imgmob2.337797ef.png","images/price-images/imgmob2.png"],"images/price-images/imgmob2.png"],"./..\\images\\price-images\\imgtabl1.png":[["imgtabl1.bb9fd2d2.png","images/price-images/imgtabl1.png"],"images/price-images/imgtabl1.png"],"./..\\images\\price-images\\imgtabl2.png":[["imgtabl2.942f2ae0.png","images/price-images/imgtabl2.png"],"images/price-images/imgtabl2.png"],"./..\\images\\price-images\\imgdesk1.png":[["imgdesk1.5e6e3d16.png","images/price-images/imgdesk1.png"],"images/price-images/imgdesk1.png"],"./..\\images\\price-images\\imgdesk2.png":[["imgdesk2.d8be5bd6.png","images/price-images/imgdesk2.png"],"images/price-images/imgdesk2.png"],"./..\\images\\barbbgfooter.png":[["barbbgfooter.718ac056.png","images/barbbgfooter.png"],"images/barbbgfooter.png"],"./..\\images\\barbtablet.png":[["barbtablet.41c05c61.png","images/barbtablet.png"],"images/barbtablet.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "17749" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map