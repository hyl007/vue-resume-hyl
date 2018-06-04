// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({8:[function(require,module,exports) {
Vue.component('main-app', {
    props: ['resume', 'editShow'],
    data: function data() {
        return {
            resume_: null
        };
    },
    created: function created() {
        this.resume_ = this.resume;
    },

    watch: {
        resume_: function resume_() {
            this.$emit('edit-change', this.resume_);
        },
        resume: function resume() {
            this.resume_ = this.resume;
        }
    },
    methods: {
        addSkill: function addSkill() {
            this.resume.skills.push({ name: 'css', description: '技能描述' });
        },
        addProject: function addProject() {
            this.resume.projects.push({ name: '项目名称', description: '项目描述' });
        },
        removeSkill: function removeSkill(index) {
            this.resume.skills.splice(index, 1);
        },
        removeProject: function removeProject(index) {
            this.resume.projects.splice(index, 1);
        }
    },
    template: '\n    <main>\n    <div class="container">\n        <div class="row">\n            <div class="col-xs-12 col-md-12 text-name">\n                <h2 v-show="!editShow">{{resume.name}}</h2>\n                <div class="input-group input-group-lg" v-show="editShow">\n                    <span class="input-group-addon" id="sizing-addon1">\u59D3\u540D</span>\n                    <input type="text" class="form-control" aria-describedby="sizing-addon1" v-model="resume_.name">\n                </div>\n                <h4 v-show="!editShow">\n                    {{resume.gender}}|{{resume.birthday}}|{{resume.home}}\n                </h4>\n                <div class="input-group input-group-sm" v-show="editShow">\n                    <span class="input-group-addon" id="sizing-addon3">\u6027\u522B</span>\n                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.gender">\n                </div>\n                <div class="input-group input-group-sm" v-show="editShow">\n                    <span class="input-group-addon" id="sizing-addon3">\u5E74\u9F84</span>\n                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.birthday">\n                </div>\n                <div class="input-group input-group-sm" v-show="editShow">\n                    <span class="input-group-addon" id="sizing-addon3">\u5BB6\u4E61</span>\n                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.home">\n                </div>\n                <h4 class="col-xs-12 col-sm-12 col-md-12" v-show="!editShow"><span>{{resume.job}}</span></h4>\n                <div class="input-group input-group-sm" v-show="editShow">\n                    <span class="input-group-addon" id="sizing-addon3">\u804C\u4F4D</span>\n                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.job">\n                </div>\n            </div>\n        </div>\n        <!--******-->\n        <div class="row">\n            <div class="col-xs-12 col-md-12 information"><h2>\u8054\u7CFB</h2></div>\n        </div>\n        <div class="row informationList">\n            <div class="col-xs-12 col-md-12">\n                <ul>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                        <svg class="icon" aria-hidden="true">\n                                <use xlink:href="#icon-phone"></use>\n                        </svg>\n                            {{resume.phone}}\n                        </span>\n                        <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">\u624B\u673A</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.phone">\n                        </div>\n                    </li>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                        <svg class="icon" aria-hidden="true">\n                                <use xlink:href="#icon-qq-copy"></use>\n                            </svg>\n                        {{resume.qq}}\n                        </span>\n                         <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">QQ</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.qq">\n                         </div>\n                    </li>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                         <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-weixin"></use>\n                        </svg>\n                        {{resume.weiXin}}\n                        </span>\n                        <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">\u5FAE\u4FE1</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.weiXin">\n                         </div>\n                    </li>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                         <svg class="icon" aria-hidden="true">\n                                <use xlink:href="#icon-email"></use>\n                        </svg>\n                        {{resume.email}}\n                        </span>\n                        <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">\u90AE\u7BB1</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.email">\n                         </div>\n                    </li>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                        <svg class="icon" aria-hidden="true">\n                                <use xlink:href="#icon-boke"></use>\n                        </svg>\n                        {{resume.blog}}\n                        </span>\n                        <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">\u535A\u5BA2</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.blog">\n                         </div>\n                    </li>\n                    <li class="col-xs-12 col-sm-6 col-md-2">\n                        <span v-show="!editShow">\n                        <svg class="icon" aria-hidden="true">\n                                <use xlink:href="#icon-github"></use>\n                        </svg>\n                        {{resume.gitHub}}\n                        </span>\n                        <div class="input-group" v-show="editShow">\n                            <span class="input-group-addon" id="sizing-addon2">gitHub</span>\n                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.gitHub">\n                         </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <!--******-->\n        <div class="row">\n            <div class="col-xs-12 col-md-12 text-name">\n                <h2>\u6280\u80FD</h2>\n            </div>\n        </div>\n        <div class="row skill">\n            <div v-for="(skill,index) in resume.skills" class="col-sm-6 col-md-4">\n                <div class="panel panel-success" v-show="!editShow">\n                    <div class="panel-heading"><a href="#">{{skill.name}}</a></div>\n                    <div class="panel-body">\n                        {{skill.description}}\n                    </div>\n                </div>\n                <div class="panel panel-success x" v-show="editShow">\n                    <span class="removeX" v-if="index>=3" @click="removeSkill(index)">x</span>\n                    <div class="panel-heading"><span><input type="text" v-model="skill.name"></span></div>\n                    <div class="panel-body">\n                        <input v-model="skill.description">\n                    </div>\n                </div>\n            </div>\n            <button type="button" class="btn btn-primary btn-lg btn-block" v-show="editShow" @click="addSkill">\u6DFB\u52A0\u6280\u80FD</button>\n        </div>\n        <!--******-->\n        <div class="row">\n            <div class="col-xs-12 col-md-12 text-name">\n                <h2>\u4F5C\u54C1</h2>\n            </div>\n        </div>\n        <div class="row">\n            <div v-for="(project,index) in resume.projects" class="col-sm-12 col-md-6">\n                <div class="panel panel-success" v-show="!editShow">\n                    <div class="panel-heading">{{project.name}}</div>\n                    <div class="panel-body">\n                        {{project.description}}\n                    </div>\n                </div>\n                <div class="panel panel-success x" v-show="editShow">\n                    <span class="removeX" v-if="index>=4" @click="removeProject(index)">x</span>\n                    <div class="panel-heading"><span><input type="text" v-model="project.name"></div>\n                    <div class="panel-body">\n                        <textarea rows="4" cols="57" v-model="project.description"></textarea>\n                    </div>\n                </div>\n            </div>\n            <button type="button" class="btn btn-primary btn-lg btn-block" v-show="editShow" @click="addProject">\u6DFB\u52A0\u9879\u76EE</button>\n        </div>\n    </div>\n</main>\n    '
});
},{}],14:[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51590' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[14,8], null)
//# sourceMappingURL=/main-router.330b90f7.map