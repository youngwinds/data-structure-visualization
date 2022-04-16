/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/data-structure-visualization/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "s5Qh");
/******/ })
/************************************************************************/
/******/ ({

/***/ "B9mN":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/node-libs-browser/mock/process.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ "oNVP");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "MK2L":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/umi/node_modules/regenerator-runtime/runtime.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "NqAY":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/process.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: cwd, env, platform */
/*! exports used: cwd, env, platform */
/*! ModuleConcatenation bailout: Module uses injected variables (process) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return platform; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "SMqw");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var safeProcess; // Native sandbox environment

if (typeof _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* globals */ "a"].vscode !== 'undefined' && typeof _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* globals */ "a"].vscode.process !== 'undefined') {
  var sandboxProcess = _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* globals */ "a"].vscode.process;
  safeProcess = {
    get platform() {
      return sandboxProcess.platform;
    },

    get arch() {
      return sandboxProcess.arch;
    },

    get env() {
      return sandboxProcess.env;
    },

    cwd: function cwd() {
      return sandboxProcess.cwd();
    }
  };
} // Native node.js environment
else if (typeof process !== 'undefined') {
    safeProcess = {
      get platform() {
        return process.platform;
      },

      get arch() {
        return process.arch;
      },

      get env() {
        return Object({"NODE_ENV":"production"});
      },

      cwd: function cwd() {
        return Object({"NODE_ENV":"production"})['VSCODE_CWD'] || process.cwd();
      }
    };
  } // Web environment
  else {
      safeProcess = {
        // Supported
        get platform() {
          return _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isWindows */ "e"] ? 'win32' : _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isMacintosh */ "c"] ? 'darwin' : 'linux';
        },

        get arch() {
          return undefined;
          /* arch is undefined in web */
        },

        // Unsupported
        get env() {
          return {};
        },

        cwd: function cwd() {
          return '/';
        }
      };
    }
/**
 * Provides safe access to the `cwd` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `/`.
 */


var cwd = safeProcess.cwd;
/**
 * Provides safe access to the `env` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `{}`.
 */

var env = safeProcess.env;
/**
 * Provides safe access to the `platform` property in node.js, sandboxed or web
 * environments.
 */

var platform = safeProcess.platform;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ "B9mN")))

/***/ }),

/***/ "RY7m":
/*!*************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator/index.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "MK2L");


/***/ }),

/***/ "SMqw":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/platform.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: globals, isWindows, isMacintosh, isLinux, isNative, isWeb, isIOS, userAgent, language, setTimeout0, OS, isLittleEndian, isChrome, isFirefox, isSafari, isEdge, isAndroid */
/*! exports used: globals, isLinux, isMacintosh, isWeb, isWindows, setTimeout0 */
/*! ModuleConcatenation bailout: Module uses injected variables (global, process) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMacintosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLinux; });
/* unused harmony export isNative */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isWeb; });
/* unused harmony export isIOS */
/* unused harmony export userAgent */
/* unused harmony export language */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setTimeout0; });
/* unused harmony export OS */
/* unused harmony export isLittleEndian */
/* unused harmony export isChrome */
/* unused harmony export isFirefox */
/* unused harmony export isSafari */
/* unused harmony export isEdge */
/* unused harmony export isAndroid */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _a;

var LANGUAGE_DEFAULT = 'en';
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isLinuxSnap = false;
var _isNative = false;
var _isWeb = false;
var _isElectron = false;
var _isIOS = false;
var _locale = undefined;
var _language = LANGUAGE_DEFAULT;
var _translationsConfigFile = undefined;
var _userAgent = undefined;
var globals = typeof self === 'object' ? self : typeof global === 'object' ? global : {};
var nodeProcess = undefined;

if (typeof globals.vscode !== 'undefined' && typeof globals.vscode.process !== 'undefined') {
  // Native environment (sandboxed)
  nodeProcess = globals.vscode.process;
} else if (typeof process !== 'undefined') {
  // Native environment (non-sandboxed)
  nodeProcess = process;
}

var isElectronProcess = typeof ((_a = nodeProcess === null || nodeProcess === void 0 ? void 0 : nodeProcess.versions) === null || _a === void 0 ? void 0 : _a.electron) === 'string';
var isElectronRenderer = isElectronProcess && (nodeProcess === null || nodeProcess === void 0 ? void 0 : nodeProcess.type) === 'renderer'; // Web environment

if (typeof navigator === 'object' && !isElectronRenderer) {
  _userAgent = navigator.userAgent;
  _isWindows = _userAgent.indexOf('Windows') >= 0;
  _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
  _isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
  _isLinux = _userAgent.indexOf('Linux') >= 0;
  _isWeb = true;
  _locale = navigator.language;
  _language = _locale;
} // Native environment
else if (typeof nodeProcess === 'object') {
    _isWindows = nodeProcess.platform === 'win32';
    _isMacintosh = nodeProcess.platform === 'darwin';
    _isLinux = nodeProcess.platform === 'linux';
    _isLinuxSnap = _isLinux && !!nodeProcess.env['SNAP'] && !!nodeProcess.env['SNAP_REVISION'];
    _isElectron = isElectronProcess;
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    var rawNlsConfig = nodeProcess.env['VSCODE_NLS_CONFIG'];

    if (rawNlsConfig) {
      try {
        var nlsConfig = JSON.parse(rawNlsConfig);
        var resolved = nlsConfig.availableLanguages['*'];
        _locale = nlsConfig.locale; // VSCode's default language is 'en'

        _language = resolved ? resolved : LANGUAGE_DEFAULT;
        _translationsConfigFile = nlsConfig._translationsConfigFile;
      } catch (e) {}
    }

    _isNative = true;
  } // Unknown environment
  else {
      console.error('Unable to resolve platform.');
    }

var _platform = 0
/* Web */
;

if (_isMacintosh) {
  _platform = 1
  /* Mac */
  ;
} else if (_isWindows) {
  _platform = 3
  /* Windows */
  ;
} else if (_isLinux) {
  _platform = 2
  /* Linux */
  ;
}

var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var isIOS = _isIOS;
var userAgent = _userAgent;
/**
 * The language used for the user interface. The format of
 * the string is all lower case (e.g. zh-tw for Traditional
 * Chinese)
 */

var language = _language;
/**
 * See https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#:~:text=than%204%2C%20then-,set%20timeout%20to%204,-.
 *
 * Works similarly to `setTimeout(0)` but doesn't suffer from the 4ms artificial delay
 * that browsers set when the nesting level is > 5.
 */

var setTimeout0 = function () {
  if (typeof globals.postMessage === 'function' && !globals.importScripts) {
    var pending = [];
    globals.addEventListener('message', function (e) {
      if (e.data && e.data.vscodeScheduleAsyncWork) {
        for (var i = 0, len = pending.length; i < len; i++) {
          var candidate = pending[i];

          if (candidate.id === e.data.vscodeScheduleAsyncWork) {
            pending.splice(i, 1);
            candidate.callback();
            return;
          }
        }
      }
    });
    var lastId = 0;
    return function (callback) {
      var myId = ++lastId;
      pending.push({
        id: myId,
        callback: callback
      });
      globals.postMessage({
        vscodeScheduleAsyncWork: myId
      }, '*');
    };
  }

  return function (callback) {
    return setTimeout(callback);
  };
}();
var OS = _isMacintosh || _isIOS ? 2
/* Macintosh */
: _isWindows ? 1
/* Windows */
: 3
/* Linux */
;
var _isLittleEndian = true;
var _isLittleEndianComputed = false;
function isLittleEndian() {
  if (!_isLittleEndianComputed) {
    _isLittleEndianComputed = true;
    var test = new Uint8Array(2);
    test[0] = 1;
    test[1] = 2;
    var view = new Uint16Array(test.buffer);
    _isLittleEndian = view[0] === (2 << 8) + 1;
  }

  return _isLittleEndian;
}
var isChrome = !!(userAgent && userAgent.indexOf('Chrome') >= 0);
var isFirefox = !!(userAgent && userAgent.indexOf('Firefox') >= 0);
var isSafari = !!(!isChrome && userAgent && userAgent.indexOf('Safari') >= 0);
var isEdge = !!(userAgent && userAgent.indexOf('Edg/') >= 0);
var isAndroid = !!(userAgent && userAgent.indexOf('Android') >= 0);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../@umijs/deps/compiled/webpack/4/global.js */ "y4hX"), __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ "B9mN")))

/***/ }),

/***/ "oNVP":
/*!*************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/path-browserify/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "B9mN")))

/***/ }),

/***/ "s5Qh":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/editor.worker.js + 75 modules ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: initialize */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/platform.js (<- Module uses injected variables (global, process)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/process.js (<- Module uses injected variables (process)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "initialize", function() { return /* binding */ editor_worker_initialize; });

// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/construct.js


function construct_construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/errors.js





// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var errors_ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);

    this.listeners = [];

    this.unexpectedErrorHandler = function (e) {
      setTimeout(function () {
        if (e.stack) {
          throw new Error(e.message + '\n\n' + e.stack);
        }

        throw e;
      }, 0);
    };
  }

  _createClass(ErrorHandler, [{
    key: "emit",
    value: function emit(e) {
      this.listeners.forEach(function (listener) {
        listener(e);
      });
    }
  }, {
    key: "onUnexpectedError",
    value: function onUnexpectedError(e) {
      this.unexpectedErrorHandler(e);
      this.emit(e);
    } // For external errors, we don't want the listeners to be called

  }, {
    key: "onUnexpectedExternalError",
    value: function onUnexpectedExternalError(e) {
      this.unexpectedErrorHandler(e);
    }
  }]);

  return ErrorHandler;
}();
var errorHandler = new errors_ErrorHandler();
function onUnexpectedError(e) {
  // ignore errors from cancelled promises
  if (!isCancellationError(e)) {
    errorHandler.onUnexpectedError(e);
  }

  return undefined;
}
function onUnexpectedExternalError(e) {
  // ignore errors from cancelled promises
  if (!isCancellationError(e)) {
    errorHandler.onUnexpectedExternalError(e);
  }

  return undefined;
}
function transformErrorForSerialization(error) {
  if (error instanceof Error) {
    var name = error.name,
        message = error.message;
    var stack = error.stacktrace || error.stack;
    return {
      $isError: true,
      name: name,
      message: message,
      stack: stack
    };
  } // return as is


  return error;
}
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */

function isCancellationError(error) {
  if (error instanceof errors_CancellationError) {
    return true;
  }

  return error instanceof Error && error.name === canceledName && error.message === canceledName;
} // !!!IMPORTANT!!!
// Do NOT change this class because it is also used as an API-type.

var errors_CancellationError = /*#__PURE__*/function (_Error) {
  _inherits(CancellationError, _Error);

  var _super = _createSuper(CancellationError);

  function CancellationError() {
    var _this;

    _classCallCheck(this, CancellationError);

    _this = _super.call(this, canceledName);
    _this.name = _this.message;
    return _this;
  }

  return CancellationError;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));
/**
 * @deprecated uses {@link CancellationError}
 */

function canceled() {
  var error = new Error(canceledName);
  error.name = error.message;
  return error;
}
function illegalArgument(name) {
  if (name) {
    return new Error("Illegal argument: ".concat(name));
  } else {
    return new Error('Illegal argument');
  }
}
function illegalState(name) {
  if (name) {
    return new Error("Illegal state: ".concat(name));
  } else {
    return new Error('Illegal state');
  }
}
var errors_NotSupportedError = /*#__PURE__*/function (_Error2) {
  _inherits(NotSupportedError, _Error2);

  var _super2 = _createSuper(NotSupportedError);

  function NotSupportedError(message) {
    var _this2;

    _classCallCheck(this, NotSupportedError);

    _this2 = _super2.call(this, 'NotSupported');

    if (message) {
      _this2.message = message;
    }

    return _this2;
  }

  return NotSupportedError;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/get.js

function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/functional.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function once(fn) {
  var _this = this;

  var didCall = false;
  var result;
  return function () {
    if (didCall) {
      return result;
    }

    didCall = true;
    result = fn.apply(_this, arguments);
    return result;
  };
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("RY7m");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/iterator.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var iterator_Iterable;

(function (Iterable) {
  var _marked = /*#__PURE__*/regenerator_default.a.mark(single),
      _marked2 = /*#__PURE__*/regenerator_default.a.mark(filter),
      _marked3 = /*#__PURE__*/regenerator_default.a.mark(map),
      _marked4 = /*#__PURE__*/regenerator_default.a.mark(concat),
      _marked5 = /*#__PURE__*/regenerator_default.a.mark(concatNested),
      _marked6 = /*#__PURE__*/regenerator_default.a.mark(slice);

  function is(thing) {
    return thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
  }

  Iterable.is = is;

  var _empty = Object.freeze([]);

  function empty() {
    return _empty;
  }

  Iterable.empty = empty;

  function single(element) {
    return regenerator_default.a.wrap(function single$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return element;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  Iterable.single = single;

  function from(iterable) {
    return iterable || _empty;
  }

  Iterable.from = from;

  function isEmpty(iterable) {
    return !iterable || iterable[Symbol.iterator]().next().done === true;
  }

  Iterable.isEmpty = isEmpty;

  function first(iterable) {
    return iterable[Symbol.iterator]().next().value;
  }

  Iterable.first = first;

  function some(iterable, predicate) {
    var _iterator = _createForOfIteratorHelper(iterable),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        if (predicate(element)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  Iterable.some = some;

  function find(iterable, predicate) {
    var _iterator2 = _createForOfIteratorHelper(iterable),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;

        if (predicate(element)) {
          return element;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return undefined;
  }

  Iterable.find = find;

  function filter(iterable, predicate) {
    var _iterator3, _step3, element;

    return regenerator_default.a.wrap(function filter$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator3 = _createForOfIteratorHelper(iterable);
            _context2.prev = 1;

            _iterator3.s();

          case 3:
            if ((_step3 = _iterator3.n()).done) {
              _context2.next = 10;
              break;
            }

            element = _step3.value;

            if (!predicate(element)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 8;
            return element;

          case 8:
            _context2.next = 3;
            break;

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);

            _iterator3.e(_context2.t0);

          case 15:
            _context2.prev = 15;

            _iterator3.f();

            return _context2.finish(15);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2, null, [[1, 12, 15, 18]]);
  }

  Iterable.filter = filter;

  function map(iterable, fn) {
    var index, _iterator4, _step4, element;

    return regenerator_default.a.wrap(function map$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            index = 0;
            _iterator4 = _createForOfIteratorHelper(iterable);
            _context3.prev = 2;

            _iterator4.s();

          case 4:
            if ((_step4 = _iterator4.n()).done) {
              _context3.next = 10;
              break;
            }

            element = _step4.value;
            _context3.next = 8;
            return fn(element, index++);

          case 8:
            _context3.next = 4;
            break;

          case 10:
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);

            _iterator4.e(_context3.t0);

          case 15:
            _context3.prev = 15;

            _iterator4.f();

            return _context3.finish(15);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _marked3, null, [[2, 12, 15, 18]]);
  }

  Iterable.map = map;

  function concat() {
    var _len,
        iterables,
        _key,
        _i,
        _iterables,
        iterable,
        _iterator5,
        _step5,
        element,
        _args4 = arguments;

    return regenerator_default.a.wrap(function concat$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len = _args4.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
              iterables[_key] = _args4[_key];
            }

            _i = 0, _iterables = iterables;

          case 2:
            if (!(_i < _iterables.length)) {
              _context4.next = 24;
              break;
            }

            iterable = _iterables[_i];
            _iterator5 = _createForOfIteratorHelper(iterable);
            _context4.prev = 5;

            _iterator5.s();

          case 7:
            if ((_step5 = _iterator5.n()).done) {
              _context4.next = 13;
              break;
            }

            element = _step5.value;
            _context4.next = 11;
            return element;

          case 11:
            _context4.next = 7;
            break;

          case 13:
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](5);

            _iterator5.e(_context4.t0);

          case 18:
            _context4.prev = 18;

            _iterator5.f();

            return _context4.finish(18);

          case 21:
            _i++;
            _context4.next = 2;
            break;

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked4, null, [[5, 15, 18, 21]]);
  }

  Iterable.concat = concat;

  function concatNested(iterables) {
    var _iterator6, _step6, iterable, _iterator7, _step7, element;

    return regenerator_default.a.wrap(function concatNested$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _iterator6 = _createForOfIteratorHelper(iterables);
            _context5.prev = 1;

            _iterator6.s();

          case 3:
            if ((_step6 = _iterator6.n()).done) {
              _context5.next = 24;
              break;
            }

            iterable = _step6.value;
            _iterator7 = _createForOfIteratorHelper(iterable);
            _context5.prev = 6;

            _iterator7.s();

          case 8:
            if ((_step7 = _iterator7.n()).done) {
              _context5.next = 14;
              break;
            }

            element = _step7.value;
            _context5.next = 12;
            return element;

          case 12:
            _context5.next = 8;
            break;

          case 14:
            _context5.next = 19;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](6);

            _iterator7.e(_context5.t0);

          case 19:
            _context5.prev = 19;

            _iterator7.f();

            return _context5.finish(19);

          case 22:
            _context5.next = 3;
            break;

          case 24:
            _context5.next = 29;
            break;

          case 26:
            _context5.prev = 26;
            _context5.t1 = _context5["catch"](1);

            _iterator6.e(_context5.t1);

          case 29:
            _context5.prev = 29;

            _iterator6.f();

            return _context5.finish(29);

          case 32:
          case "end":
            return _context5.stop();
        }
      }
    }, _marked5, null, [[1, 26, 29, 32], [6, 16, 19, 22]]);
  }

  Iterable.concatNested = concatNested;

  function reduce(iterable, reducer, initialValue) {
    var value = initialValue;

    var _iterator8 = _createForOfIteratorHelper(iterable),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var element = _step8.value;
        value = reducer(value, element);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return value;
  }

  Iterable.reduce = reduce;
  /**
   * Returns an iterable slice of the array, with the same semantics as `array.slice()`.
   */

  function slice(arr, from) {
    var to,
        _args6 = arguments;
    return regenerator_default.a.wrap(function slice$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            to = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : arr.length;

            if (from < 0) {
              from += arr.length;
            }

            if (to < 0) {
              to += arr.length;
            } else if (to > arr.length) {
              to = arr.length;
            }

          case 3:
            if (!(from < to)) {
              _context6.next = 9;
              break;
            }

            _context6.next = 6;
            return arr[from];

          case 6:
            from++;
            _context6.next = 3;
            break;

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _marked6);
  }

  Iterable.slice = slice;
  /**
   * Consumes `atMost` elements from iterable and returns the consumed elements,
   * and an iterable for the rest of the elements.
   */

  function consume(iterable) {
    var atMost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var consumed = [];

    if (atMost === 0) {
      return [consumed, iterable];
    }

    var iterator = iterable[Symbol.iterator]();

    for (var i = 0; i < atMost; i++) {
      var next = iterator.next();

      if (next.done) {
        return [consumed, Iterable.empty()];
      }

      consumed.push(next.value);
    }

    return [consumed, _defineProperty({}, Symbol.iterator, function () {
      return iterator;
    })];
  }

  Iterable.consume = consume;
  /**
   * Returns whether the iterables are the same length and all items are
   * equal using the comparator function.
   */

  function equals(a, b) {
    var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (at, bt) {
      return at === bt;
    };
    var ai = a[Symbol.iterator]();
    var bi = b[Symbol.iterator]();

    while (true) {
      var an = ai.next();
      var bn = bi.next();

      if (an.done !== bn.done) {
        return false;
      } else if (an.done) {
        return true;
      } else if (!comparator(an.value, bn.value)) {
        return false;
      }
    }
  }

  Iterable.equals = equals;
})(iterator_Iterable || (iterator_Iterable = {}));
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js







/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Enables logging of potentially leaked disposables.
 *
 * A disposable is considered leaked if it is not disposed or not registered as the child of
 * another disposable. This tracking is very simple an only works for classes that either
 * extend Disposable or use a DisposableStore. This means there are a lot of false positives.
 */

var TRACK_DISPOSABLES = false;
var disposableTracker = null;
function setDisposableTracker(tracker) {
  disposableTracker = tracker;
}

if (TRACK_DISPOSABLES) {
  var __is_disposable_tracked__ = '__is_disposable_tracked__';
  setDisposableTracker(new ( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "trackDisposable",
      value: function trackDisposable(x) {
        var stack = new Error('Potentially leaked disposable').stack;
        setTimeout(function () {
          if (!x[__is_disposable_tracked__]) {
            console.log(stack);
          }
        }, 3000);
      }
    }, {
      key: "setParent",
      value: function setParent(child, parent) {
        if (child && child !== lifecycle_Disposable.None) {
          try {
            child[__is_disposable_tracked__] = true;
          } catch (_a) {// noop
          }
        }
      }
    }, {
      key: "markAsDisposed",
      value: function markAsDisposed(disposable) {
        if (disposable && disposable !== lifecycle_Disposable.None) {
          try {
            disposable[__is_disposable_tracked__] = true;
          } catch (_a) {// noop
          }
        }
      }
    }, {
      key: "markAsSingleton",
      value: function markAsSingleton(disposable) {}
    }]);

    return _class;
  }())());
}

function trackDisposable(x) {
  disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.trackDisposable(x);
  return x;
}

function markAsDisposed(disposable) {
  disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.markAsDisposed(disposable);
}

function setParentOfDisposable(child, parent) {
  disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.setParent(child, parent);
}

function setParentOfDisposables(children, parent) {
  if (!disposableTracker) {
    return;
  }

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      disposableTracker.setParent(child, parent);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * Indicates that the given object is a singleton which does not need to be disposed.
*/


function markAsSingleton(singleton) {
  disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.markAsSingleton(singleton);
  return singleton;
}
var lifecycle_MultiDisposeError = /*#__PURE__*/function (_Error) {
  _inherits(MultiDisposeError, _Error);

  var _super = _createSuper(MultiDisposeError);

  function MultiDisposeError(errors) {
    var _this;

    _classCallCheck(this, MultiDisposeError);

    _this = _super.call(this, "Encountered errors while disposing of store. Errors: [".concat(errors.join(', '), "]"));
    _this.errors = errors;
    return _this;
  }

  return MultiDisposeError;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));
function isDisposable(thing) {
  return typeof thing.dispose === 'function' && thing.dispose.length === 0;
}
function lifecycle_dispose(arg) {
  if (iterator_Iterable.is(arg)) {
    var errors = [];

    var _iterator2 = _createForOfIteratorHelper(arg),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var d = _step2.value;

        if (d) {
          try {
            d.dispose();
          } catch (e) {
            errors.push(e);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      throw new lifecycle_MultiDisposeError(errors);
    }

    return Array.isArray(arg) ? [] : arg;
  } else if (arg) {
    arg.dispose();
    return arg;
  }
}
function combinedDisposable() {
  for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
    disposables[_key] = arguments[_key];
  }

  var parent = toDisposable(function () {
    return lifecycle_dispose(disposables);
  });
  setParentOfDisposables(disposables, parent);
  return parent;
}
function toDisposable(fn) {
  var self = trackDisposable({
    dispose: once(function () {
      markAsDisposed(self);
      fn();
    })
  });
  return self;
}
var lifecycle_DisposableStore = /*#__PURE__*/function () {
  function DisposableStore() {
    _classCallCheck(this, DisposableStore);

    this._toDispose = new Set();
    this._isDisposed = false;
    trackDisposable(this);
  }
  /**
   * Dispose of all registered disposables and mark this object as disposed.
   *
   * Any future disposables added to this object will be disposed of on `add`.
   */


  _createClass(DisposableStore, [{
    key: "dispose",
    value: function dispose() {
      if (this._isDisposed) {
        return;
      }

      markAsDisposed(this);
      this._isDisposed = true;
      this.clear();
    }
    /**
     * Returns `true` if this object has been disposed
     */

  }, {
    key: "isDisposed",
    get: function get() {
      return this._isDisposed;
    }
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */

  }, {
    key: "clear",
    value: function clear() {
      try {
        lifecycle_dispose(this._toDispose.values());
      } finally {
        this._toDispose.clear();
      }
    }
  }, {
    key: "add",
    value: function add(o) {
      if (!o) {
        return o;
      }

      if (o === this) {
        throw new Error('Cannot register a disposable on itself!');
      }

      setParentOfDisposable(o, this);

      if (this._isDisposed) {
        if (!DisposableStore.DISABLE_DISPOSED_WARNING) {
          console.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
        }
      } else {
        this._toDispose.add(o);
      }

      return o;
    }
  }]);

  return DisposableStore;
}();
lifecycle_DisposableStore.DISABLE_DISPOSED_WARNING = false;
var lifecycle_Disposable = /*#__PURE__*/function () {
  function Disposable() {
    _classCallCheck(this, Disposable);

    this._store = new lifecycle_DisposableStore();
    trackDisposable(this);
    setParentOfDisposable(this._store, this);
  }

  _createClass(Disposable, [{
    key: "dispose",
    value: function dispose() {
      markAsDisposed(this);

      this._store.dispose();
    }
  }, {
    key: "_register",
    value: function _register(o) {
      if (o === this) {
        throw new Error('Cannot register a disposable on itself!');
      }

      return this._store.add(o);
    }
  }]);

  return Disposable;
}();
lifecycle_Disposable.None = Object.freeze({
  dispose: function dispose() {}
});
/**
 * Manages the lifecycle of a disposable value that may be changed.
 *
 * This ensures that when the disposable value is changed, the previously held disposable is disposed of. You can
 * also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.
 */

var lifecycle_MutableDisposable = /*#__PURE__*/function () {
  function MutableDisposable() {
    _classCallCheck(this, MutableDisposable);

    this._isDisposed = false;
    trackDisposable(this);
  }

  _createClass(MutableDisposable, [{
    key: "value",
    get: function get() {
      return this._isDisposed ? undefined : this._value;
    },
    set: function set(value) {
      var _a;

      if (this._isDisposed || value === this._value) {
        return;
      }

      (_a = this._value) === null || _a === void 0 ? void 0 : _a.dispose();

      if (value) {
        setParentOfDisposable(value, this);
      }

      this._value = value;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.value = undefined;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _a;

      this._isDisposed = true;
      markAsDisposed(this);
      (_a = this._value) === null || _a === void 0 ? void 0 : _a.dispose();
      this._value = undefined;
    }
    /**
     * Clears the value, but does not dispose it.
     * The old value is returned.
    */

  }, {
    key: "clearAndLeak",
    value: function clearAndLeak() {
      var oldValue = this._value;
      this._value = undefined;

      if (oldValue) {
        setParentOfDisposable(oldValue, null);
      }

      return oldValue;
    }
  }]);

  return MutableDisposable;
}();
var lifecycle_ImmortalReference = /*#__PURE__*/function () {
  function ImmortalReference(object) {
    _classCallCheck(this, ImmortalReference);

    this.object = object;
  }

  _createClass(ImmortalReference, [{
    key: "dispose",
    value: function dispose() {}
  }]);

  return ImmortalReference;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/linkedList.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var linkedList_Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = Node.Undefined;
  this.prev = Node.Undefined;
};

linkedList_Node.Undefined = new linkedList_Node(undefined);
var linkedList_LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this._first = linkedList_Node.Undefined;
    this._last = linkedList_Node.Undefined;
    this._size = 0;
  }

  _createClass(LinkedList, [{
    key: "size",
    get: function get() {
      return this._size;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._first === linkedList_Node.Undefined;
    }
  }, {
    key: "clear",
    value: function clear() {
      var node = this._first;

      while (node !== linkedList_Node.Undefined) {
        var next = node.next;
        node.prev = linkedList_Node.Undefined;
        node.next = linkedList_Node.Undefined;
        node = next;
      }

      this._first = linkedList_Node.Undefined;
      this._last = linkedList_Node.Undefined;
      this._size = 0;
    }
  }, {
    key: "unshift",
    value: function unshift(element) {
      return this._insert(element, false);
    }
  }, {
    key: "push",
    value: function push(element) {
      return this._insert(element, true);
    }
  }, {
    key: "_insert",
    value: function _insert(element, atTheEnd) {
      var _this = this;

      var newNode = new linkedList_Node(element);

      if (this._first === linkedList_Node.Undefined) {
        this._first = newNode;
        this._last = newNode;
      } else if (atTheEnd) {
        // push
        var oldLast = this._last;
        this._last = newNode;
        newNode.prev = oldLast;
        oldLast.next = newNode;
      } else {
        // unshift
        var oldFirst = this._first;
        this._first = newNode;
        newNode.next = oldFirst;
        oldFirst.prev = newNode;
      }

      this._size += 1;
      var didRemove = false;
      return function () {
        if (!didRemove) {
          didRemove = true;

          _this._remove(newNode);
        }
      };
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this._first === linkedList_Node.Undefined) {
        return undefined;
      } else {
        var res = this._first.element;

        this._remove(this._first);

        return res;
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this._last === linkedList_Node.Undefined) {
        return undefined;
      } else {
        var res = this._last.element;

        this._remove(this._last);

        return res;
      }
    }
  }, {
    key: "_remove",
    value: function _remove(node) {
      if (node.prev !== linkedList_Node.Undefined && node.next !== linkedList_Node.Undefined) {
        // middle
        var anchor = node.prev;
        anchor.next = node.next;
        node.next.prev = anchor;
      } else if (node.prev === linkedList_Node.Undefined && node.next === linkedList_Node.Undefined) {
        // only node
        this._first = linkedList_Node.Undefined;
        this._last = linkedList_Node.Undefined;
      } else if (node.next === linkedList_Node.Undefined) {
        // last
        this._last = this._last.prev;
        this._last.next = linkedList_Node.Undefined;
      } else if (node.prev === linkedList_Node.Undefined) {
        // first
        this._first = this._first.next;
        this._first.prev = linkedList_Node.Undefined;
      } // done


      this._size -= 1;
    }
  }, {
    key: Symbol.iterator,
    value: /*#__PURE__*/regenerator_default.a.mark(function value() {
      var node;
      return regenerator_default.a.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              node = this._first;

            case 1:
              if (!(node !== linkedList_Node.Undefined)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return node.element;

            case 4:
              node = node.next;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }]);

  return LinkedList;
}();
// EXTERNAL MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__("SMqw");

// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var hasPerformanceNow = platform["a" /* globals */].performance && typeof platform["a" /* globals */].performance.now === 'function';
var stopwatch_StopWatch = /*#__PURE__*/function () {
  function StopWatch(highResolution) {
    _classCallCheck(this, StopWatch);

    this._highResolution = hasPerformanceNow && highResolution;
    this._startTime = this._now();
    this._stopTime = -1;
  }

  _createClass(StopWatch, [{
    key: "stop",
    value: function stop() {
      this._stopTime = this._now();
    }
  }, {
    key: "elapsed",
    value: function elapsed() {
      if (this._stopTime !== -1) {
        return this._stopTime - this._startTime;
      }

      return this._now() - this._startTime;
    }
  }, {
    key: "_now",
    value: function _now() {
      return this._highResolution ? platform["a" /* globals */].performance.now() : Date.now();
    }
  }], [{
    key: "create",
    value: function create() {
      var highResolution = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return new StopWatch(highResolution);
    }
  }]);

  return StopWatch;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/event.js













var event_Event;

(function (Event) {
  Event.None = function () {
    return lifecycle_Disposable.None;
  };
  /**
   * Given an event, returns another event which only fires once.
   */


  function _once(event) {
    return function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      // we need this, in case the event fires during the listener call
      var didFire = false;
      var result;
      result = event(function (e) {
        if (didFire) {
          return;
        } else if (result) {
          result.dispose();
        } else {
          didFire = true;
        }

        return listener.call(thisArgs, e);
      }, null, disposables);

      if (didFire) {
        result.dispose();
      }

      return result;
    };
  }

  Event.once = _once;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function _map(event, map) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (i) {
        return listener.call(thisArgs, map(i));
      }, null, disposables);
    });
  }

  Event.map = _map;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function _forEach(event, each) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (i) {
        each(i);
        listener.call(thisArgs, i);
      }, null, disposables);
    });
  }

  Event.forEach = _forEach;

  function _filter(event, filter) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (e) {
        return filter(e) && listener.call(thisArgs, e);
      }, null, disposables);
    });
  }

  Event.filter = _filter;
  /**
   * Given an event, returns the same event but typed as `Event<void>`.
   */

  function signal(event) {
    return event;
  }

  Event.signal = signal;

  function any() {
    for (var _len = arguments.length, events = new Array(_len), _key = 0; _key < _len; _key++) {
      events[_key] = arguments[_key];
    }

    return function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return combinedDisposable.apply(void 0, _toConsumableArray(events.map(function (event) {
        return event(function (e) {
          return listener.call(thisArgs, e);
        }, null, disposables);
      })));
    };
  }

  Event.any = any;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function _reduce(event, merge, initial) {
    var output = initial;
    return _map(event, function (e) {
      output = merge(output, e);
      return output;
    });
  }

  Event.reduce = _reduce;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function snapshot(event) {
    var listener;
    var emitter = new event_Emitter({
      onFirstListenerAdd: function onFirstListenerAdd() {
        listener = event(emitter.fire, emitter);
      },
      onLastListenerRemove: function onLastListenerRemove() {
        listener.dispose();
      }
    });
    return emitter.event;
  }

  function debouncedListener(event, listener, merge) {
    var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
    var leading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var output = undefined;
    var handle = undefined;
    var numDebouncedCalls = 0;
    return event(function (cur) {
      numDebouncedCalls++;
      output = merge(output, cur);

      if (leading && !handle) {
        listener(output);
        output = undefined;
      }

      clearTimeout(handle);
      handle = setTimeout(function () {
        var _output = output;
        output = undefined;
        handle = undefined;

        if (!leading || numDebouncedCalls > 1) {
          listener(_output);
        }

        numDebouncedCalls = 0;
      }, delay);
    });
  }

  Event.debouncedListener = debouncedListener;
  /**
   * @deprecated this leaks memory, {@link debouncedListener} or {@link DebounceEmitter} instead
   */

  function _debounce(event, merge) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var leading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var leakWarningThreshold = arguments.length > 4 ? arguments[4] : undefined;
    var subscription;
    var output = undefined;
    var handle = undefined;
    var numDebouncedCalls = 0;
    var emitter = new event_Emitter({
      leakWarningThreshold: leakWarningThreshold,
      onFirstListenerAdd: function onFirstListenerAdd() {
        subscription = event(function (cur) {
          numDebouncedCalls++;
          output = merge(output, cur);

          if (leading && !handle) {
            emitter.fire(output);
            output = undefined;
          }

          clearTimeout(handle);
          handle = setTimeout(function () {
            var _output = output;
            output = undefined;
            handle = undefined;

            if (!leading || numDebouncedCalls > 1) {
              emitter.fire(_output);
            }

            numDebouncedCalls = 0;
          }, delay);
        });
      },
      onLastListenerRemove: function onLastListenerRemove() {
        subscription.dispose();
      }
    });
    return emitter.event;
  }

  Event.debounce = _debounce;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function _latch(event) {
    var equals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a === b;
    };
    var firstCall = true;
    var cache;
    return _filter(event, function (value) {
      var shouldEmit = firstCall || !equals(value, cache);
      firstCall = false;
      cache = value;
      return shouldEmit;
    });
  }

  Event.latch = _latch;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function split(event, isT) {
    return [Event.filter(event, isT), Event.filter(event, function (e) {
      return !isT(e);
    })];
  }

  Event.split = split;
  /**
   * @deprecated DO NOT use, this leaks memory
   */

  function buffer(event) {
    var flushAfterTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var buffer = _buffer.slice();

    var listener = event(function (e) {
      if (buffer) {
        buffer.push(e);
      } else {
        emitter.fire(e);
      }
    });

    var flush = function flush() {
      if (buffer) {
        buffer.forEach(function (e) {
          return emitter.fire(e);
        });
      }

      buffer = null;
    };

    var emitter = new event_Emitter({
      onFirstListenerAdd: function onFirstListenerAdd() {
        if (!listener) {
          listener = event(function (e) {
            return emitter.fire(e);
          });
        }
      },
      onFirstListenerDidAdd: function onFirstListenerDidAdd() {
        if (buffer) {
          if (flushAfterTimeout) {
            setTimeout(flush);
          } else {
            flush();
          }
        }
      },
      onLastListenerRemove: function onLastListenerRemove() {
        if (listener) {
          listener.dispose();
        }

        listener = null;
      }
    });
    return emitter.event;
  }

  Event.buffer = buffer;

  var ChainableEvent = /*#__PURE__*/function () {
    function ChainableEvent(event) {
      _classCallCheck(this, ChainableEvent);

      this.event = event;
    }

    _createClass(ChainableEvent, [{
      key: "map",
      value: function map(fn) {
        return new ChainableEvent(_map(this.event, fn));
      }
    }, {
      key: "forEach",
      value: function forEach(fn) {
        return new ChainableEvent(_forEach(this.event, fn));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return new ChainableEvent(_filter(this.event, fn));
      }
    }, {
      key: "reduce",
      value: function reduce(merge, initial) {
        return new ChainableEvent(_reduce(this.event, merge, initial));
      }
    }, {
      key: "latch",
      value: function latch() {
        return new ChainableEvent(_latch(this.event));
      }
    }, {
      key: "debounce",
      value: function debounce(merge) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var leakWarningThreshold = arguments.length > 3 ? arguments[3] : undefined;
        return new ChainableEvent(_debounce(this.event, merge, delay, leading, leakWarningThreshold));
      }
    }, {
      key: "on",
      value: function on(listener, thisArgs, disposables) {
        return this.event(listener, thisArgs, disposables);
      }
    }, {
      key: "once",
      value: function once(listener, thisArgs, disposables) {
        return _once(this.event)(listener, thisArgs, disposables);
      }
    }]);

    return ChainableEvent;
  }();
  /**
   * @deprecated DO NOT use, this leaks memory
   */


  function chain(event) {
    return new ChainableEvent(event);
  }

  Event.chain = chain;

  function fromNodeEventEmitter(emitter, eventName) {
    var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (id) {
      return id;
    };

    var fn = function fn() {
      return result.fire(map.apply(void 0, arguments));
    };

    var onFirstListenerAdd = function onFirstListenerAdd() {
      return emitter.on(eventName, fn);
    };

    var onLastListenerRemove = function onLastListenerRemove() {
      return emitter.removeListener(eventName, fn);
    };

    var result = new event_Emitter({
      onFirstListenerAdd: onFirstListenerAdd,
      onLastListenerRemove: onLastListenerRemove
    });
    return result.event;
  }

  Event.fromNodeEventEmitter = fromNodeEventEmitter;

  function fromDOMEventEmitter(emitter, eventName) {
    var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (id) {
      return id;
    };

    var fn = function fn() {
      return result.fire(map.apply(void 0, arguments));
    };

    var onFirstListenerAdd = function onFirstListenerAdd() {
      return emitter.addEventListener(eventName, fn);
    };

    var onLastListenerRemove = function onLastListenerRemove() {
      return emitter.removeEventListener(eventName, fn);
    };

    var result = new event_Emitter({
      onFirstListenerAdd: onFirstListenerAdd,
      onLastListenerRemove: onLastListenerRemove
    });
    return result.event;
  }

  Event.fromDOMEventEmitter = fromDOMEventEmitter;

  function toPromise(event) {
    return new Promise(function (resolve) {
      return _once(event)(resolve);
    });
  }

  Event.toPromise = toPromise;

  function runAndSubscribe(event, handler) {
    handler(undefined);
    return event(function (e) {
      return handler(e);
    });
  }

  Event.runAndSubscribe = runAndSubscribe;

  function runAndSubscribeWithStore(event, handler) {
    var store = null;

    function run(e) {
      store === null || store === void 0 ? void 0 : store.dispose();
      store = new lifecycle_DisposableStore();
      handler(e, store);
    }

    run(undefined);
    var disposable = event(function (e) {
      return run(e);
    });
    return toDisposable(function () {
      disposable.dispose();
      store === null || store === void 0 ? void 0 : store.dispose();
    });
  }

  Event.runAndSubscribeWithStore = runAndSubscribeWithStore;
})(event_Event || (event_Event = {}));

var event_EventProfiling = /*#__PURE__*/function () {
  function EventProfiling(name) {
    _classCallCheck(this, EventProfiling);

    this._listenerCount = 0;
    this._invocationCount = 0;
    this._elapsedOverall = 0;
    this._name = "".concat(name, "_").concat(EventProfiling._idPool++);
  }

  _createClass(EventProfiling, [{
    key: "start",
    value: function start(listenerCount) {
      this._stopWatch = new stopwatch_StopWatch(true);
      this._listenerCount = listenerCount;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._stopWatch) {
        var elapsed = this._stopWatch.elapsed();

        this._elapsedOverall += elapsed;
        this._invocationCount += 1;
        console.info("did FIRE ".concat(this._name, ": elapsed_ms: ").concat(elapsed.toFixed(5), ", listener: ").concat(this._listenerCount, " (elapsed_overall: ").concat(this._elapsedOverall.toFixed(2), ", invocations: ").concat(this._invocationCount, ")"));
        this._stopWatch = undefined;
      }
    }
  }]);

  return EventProfiling;
}();

event_EventProfiling._idPool = 0;

var _globalLeakWarningThreshold = -1;

var event_LeakageMonitor = /*#__PURE__*/function () {
  function LeakageMonitor(customThreshold) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random().toString(18).slice(2, 5);

    _classCallCheck(this, LeakageMonitor);

    this.customThreshold = customThreshold;
    this.name = name;
    this._warnCountdown = 0;
  }

  _createClass(LeakageMonitor, [{
    key: "dispose",
    value: function dispose() {
      if (this._stacks) {
        this._stacks.clear();
      }
    }
  }, {
    key: "check",
    value: function check(listenerCount) {
      var _this = this;

      var threshold = _globalLeakWarningThreshold;

      if (typeof this.customThreshold === 'number') {
        threshold = this.customThreshold;
      }

      if (threshold <= 0 || listenerCount < threshold) {
        return undefined;
      }

      if (!this._stacks) {
        this._stacks = new Map();
      }

      var stack = new Error().stack.split('\n').slice(3).join('\n');
      var count = this._stacks.get(stack) || 0;

      this._stacks.set(stack, count + 1);

      this._warnCountdown -= 1;

      if (this._warnCountdown <= 0) {
        // only warn on first exceed and then every time the limit
        // is exceeded by 50% again
        this._warnCountdown = threshold * 0.5; // find most frequent listener and print warning

        var topStack;
        var topCount = 0;

        var _iterator = _createForOfIteratorHelper(this._stacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _ref3 = _step.value;

            var _ref2 = _slicedToArray(_ref3, 2);

            var _stack = _ref2[0];
            var _count = _ref2[1];

            if (!topStack || topCount < _count) {
              topStack = _stack;
              topCount = _count;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        console.warn("[".concat(this.name, "] potential listener LEAK detected, having ").concat(listenerCount, " listeners already. MOST frequent listener (").concat(topCount, "):"));
        console.warn(topStack);
      }

      return function () {
        var count = _this._stacks.get(stack) || 0;

        _this._stacks.set(stack, count - 1);
      };
    }
  }]);

  return LeakageMonitor;
}();
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private readonly _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */


var event_Emitter = /*#__PURE__*/function () {
  function Emitter(options) {
    _classCallCheck(this, Emitter);

    var _a;

    this._disposed = false;
    this._options = options;
    this._leakageMon = _globalLeakWarningThreshold > 0 ? new event_LeakageMonitor(this._options && this._options.leakWarningThreshold) : undefined;
    this._perfMon = ((_a = this._options) === null || _a === void 0 ? void 0 : _a._profName) ? new event_EventProfiling(this._options._profName) : undefined;
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */


  _createClass(Emitter, [{
    key: "event",
    get: function get() {
      var _this2 = this;

      if (!this._event) {
        this._event = function (listener, thisArgs, disposables) {
          var _a;

          if (!_this2._listeners) {
            _this2._listeners = new linkedList_LinkedList();
          }

          var firstListener = _this2._listeners.isEmpty();

          if (firstListener && _this2._options && _this2._options.onFirstListenerAdd) {
            _this2._options.onFirstListenerAdd(_this2);
          }

          var remove = _this2._listeners.push(!thisArgs ? listener : [listener, thisArgs]);

          if (firstListener && _this2._options && _this2._options.onFirstListenerDidAdd) {
            _this2._options.onFirstListenerDidAdd(_this2);
          }

          if (_this2._options && _this2._options.onListenerDidAdd) {
            _this2._options.onListenerDidAdd(_this2, listener, thisArgs);
          } // check and record this emitter for potential leakage


          var removeMonitor = (_a = _this2._leakageMon) === null || _a === void 0 ? void 0 : _a.check(_this2._listeners.size);
          var result = toDisposable(function () {
            if (removeMonitor) {
              removeMonitor();
            }

            if (!_this2._disposed) {
              remove();

              if (_this2._options && _this2._options.onLastListenerRemove) {
                var hasListeners = _this2._listeners && !_this2._listeners.isEmpty();

                if (!hasListeners) {
                  _this2._options.onLastListenerRemove(_this2);
                }
              }
            }
          });

          if (disposables instanceof lifecycle_DisposableStore) {
            disposables.add(result);
          } else if (Array.isArray(disposables)) {
            disposables.push(result);
          }

          return result;
        };
      }

      return this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */

  }, {
    key: "fire",
    value: function fire(event) {
      var _a, _b;

      if (this._listeners) {
        // put all [listener,event]-pairs into delivery queue
        // then emit all event. an inner/nested event might be
        // the driver of this
        if (!this._deliveryQueue) {
          this._deliveryQueue = new linkedList_LinkedList();
        }

        var _iterator2 = _createForOfIteratorHelper(this._listeners),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _listener = _step2.value;

            this._deliveryQueue.push([_listener, event]);
          } // start/stop performance insight collection

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        (_a = this._perfMon) === null || _a === void 0 ? void 0 : _a.start(this._deliveryQueue.size);

        while (this._deliveryQueue.size > 0) {
          var _this$_deliveryQueue$ = this._deliveryQueue.shift(),
              _this$_deliveryQueue$2 = _slicedToArray(_this$_deliveryQueue$, 2),
              listener = _this$_deliveryQueue$2[0],
              _event = _this$_deliveryQueue$2[1];

          try {
            if (typeof listener === 'function') {
              listener.call(undefined, _event);
            } else {
              listener[0].call(listener[1], _event);
            }
          } catch (e) {
            onUnexpectedError(e);
          }
        }

        (_b = this._perfMon) === null || _b === void 0 ? void 0 : _b.stop();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _a, _b, _c, _d, _e;

      if (!this._disposed) {
        this._disposed = true;
        (_a = this._listeners) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = this._deliveryQueue) === null || _b === void 0 ? void 0 : _b.clear();
        (_d = (_c = this._options) === null || _c === void 0 ? void 0 : _c.onLastListenerRemove) === null || _d === void 0 ? void 0 : _d.call(_c);
        (_e = this._leakageMon) === null || _e === void 0 ? void 0 : _e.dispose();
      }
    }
  }]);

  return Emitter;
}();
var event_PauseableEmitter = /*#__PURE__*/function (_Emitter) {
  _inherits(PauseableEmitter, _Emitter);

  var _super = _createSuper(PauseableEmitter);

  function PauseableEmitter(options) {
    var _this3;

    _classCallCheck(this, PauseableEmitter);

    _this3 = _super.call(this, options);
    _this3._isPaused = 0;
    _this3._eventQueue = new linkedList_LinkedList();
    _this3._mergeFn = options === null || options === void 0 ? void 0 : options.merge;
    return _this3;
  }

  _createClass(PauseableEmitter, [{
    key: "pause",
    value: function pause() {
      this._isPaused++;
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this._isPaused !== 0 && --this._isPaused === 0) {
        if (this._mergeFn) {
          // use the merge function to create a single composite
          // event. make a copy in case firing pauses this emitter
          var events = Array.from(this._eventQueue);

          this._eventQueue.clear();

          get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, this._mergeFn(events));
        } else {
          // no merging, fire each event individually and test
          // that this emitter isn't paused halfway through
          while (!this._isPaused && this._eventQueue.size !== 0) {
            get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, this._eventQueue.shift());
          }
        }
      }
    }
  }, {
    key: "fire",
    value: function fire(event) {
      if (this._listeners) {
        if (this._isPaused !== 0) {
          this._eventQueue.push(event);
        } else {
          get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, event);
        }
      }
    }
  }]);

  return PauseableEmitter;
}(event_Emitter);
var event_DebounceEmitter = /*#__PURE__*/function (_PauseableEmitter) {
  _inherits(DebounceEmitter, _PauseableEmitter);

  var _super2 = _createSuper(DebounceEmitter);

  function DebounceEmitter(options) {
    var _this4;

    _classCallCheck(this, DebounceEmitter);

    var _a;

    _this4 = _super2.call(this, options);
    _this4._delay = (_a = options.delay) !== null && _a !== void 0 ? _a : 100;
    return _this4;
  }

  _createClass(DebounceEmitter, [{
    key: "fire",
    value: function fire(event) {
      var _this5 = this;

      if (!this._handle) {
        this.pause();
        this._handle = setTimeout(function () {
          _this5._handle = undefined;

          _this5.resume();
        }, this._delay);
      }

      get_get(_getPrototypeOf(DebounceEmitter.prototype), "fire", this).call(this, event);
    }
  }]);

  return DebounceEmitter;
}(event_PauseableEmitter);
/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */

var event_EventBufferer = /*#__PURE__*/function () {
  function EventBufferer() {
    _classCallCheck(this, EventBufferer);

    this.buffers = [];
  }

  _createClass(EventBufferer, [{
    key: "wrapEvent",
    value: function wrapEvent(event) {
      var _this6 = this;

      return function (listener, thisArgs, disposables) {
        return event(function (i) {
          var buffer = _this6.buffers[_this6.buffers.length - 1];

          if (buffer) {
            buffer.push(function () {
              return listener.call(thisArgs, i);
            });
          } else {
            listener.call(thisArgs, i);
          }
        }, undefined, disposables);
      };
    }
  }, {
    key: "bufferEvents",
    value: function bufferEvents(fn) {
      var buffer = [];
      this.buffers.push(buffer);
      var r = fn();
      this.buffers.pop();
      buffer.forEach(function (flush) {
        return flush();
      });
      return r;
    }
  }]);

  return EventBufferer;
}();
/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */

var event_Relay = /*#__PURE__*/function () {
  function Relay() {
    var _this7 = this;

    _classCallCheck(this, Relay);

    this.listening = false;
    this.inputEvent = event_Event.None;
    this.inputEventListener = lifecycle_Disposable.None;
    this.emitter = new event_Emitter({
      onFirstListenerDidAdd: function onFirstListenerDidAdd() {
        _this7.listening = true;
        _this7.inputEventListener = _this7.inputEvent(_this7.emitter.fire, _this7.emitter);
      },
      onLastListenerRemove: function onLastListenerRemove() {
        _this7.listening = false;

        _this7.inputEventListener.dispose();
      }
    });
    this.event = this.emitter.event;
  }

  _createClass(Relay, [{
    key: "input",
    set: function set(event) {
      this.inputEvent = event;

      if (this.listening) {
        this.inputEventListener.dispose();
        this.inputEventListener = event(this.emitter.fire, this.emitter);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.inputEventListener.dispose();
      this.emitter.dispose();
    }
  }]);

  return Relay;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/types.js


/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
  return Array.isArray(array);
}
/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */

function isString(str) {
  return typeof str === 'string';
}
/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */

function isObject(obj) {
  // The method can't do a type cast since there are type (like strings) which
  // are subclasses of any put not positvely matched by the function. Hence type
  // narrowing results in wrong results.
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp) && !(obj instanceof Date);
}
/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */

function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj);
}
/**
 * @returns whether the provided parameter is a JavaScript Boolean or not.
 */

function isBoolean(obj) {
  return obj === true || obj === false;
}
/**
 * @returns whether the provided parameter is undefined.
 */

function isUndefined(obj) {
  return typeof obj === 'undefined';
}
/**
 * @returns whether the provided parameter is defined.
 */

function isDefined(arg) {
  return !isUndefinedOrNull(arg);
}
/**
 * @returns whether the provided parameter is undefined or null.
 */

function isUndefinedOrNull(obj) {
  return isUndefined(obj) || obj === null;
}
function assertType(condition, type) {
  if (!condition) {
    throw new Error(type ? "Unexpected type, expected '".concat(type, "'") : 'Unexpected type');
  }
}
/**
 * Asserts that the argument passed in is neither undefined nor null.
 */

function assertIsDefined(arg) {
  if (isUndefinedOrNull(arg)) {
    throw new Error('Assertion Failed: argument is undefined or null');
  }

  return arg;
}
/**
 * @returns whether the provided parameter is a JavaScript Function or not.
 */

function isFunction(obj) {
  return typeof obj === 'function';
}
function validateConstraints(args, constraints) {
  var len = Math.min(args.length, constraints.length);

  for (var i = 0; i < len; i++) {
    validateConstraint(args[i], constraints[i]);
  }
}
function validateConstraint(arg, constraint) {
  if (isString(constraint)) {
    if (typeof arg !== constraint) {
      throw new Error("argument does not match constraint: typeof ".concat(constraint));
    }
  } else if (isFunction(constraint)) {
    try {
      if (arg instanceof constraint) {
        return;
      }
    } catch (_a) {// ignore
    }

    if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
      return;
    }

    if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
      return;
    }

    throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
  }
}
function getAllPropertyNames(obj) {
  var res = [];
  var proto = Object.getPrototypeOf(obj);

  while (Object.prototype !== proto) {
    res = res.concat(Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
  }

  return res;
}
function getAllMethodNames(obj) {
  var methods = [];

  var _iterator = _createForOfIteratorHelper(getAllPropertyNames(obj)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;

      if (typeof obj[prop] === 'function') {
        methods.push(prop);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return methods;
}
function createProxyObject(methodNames, invoke) {
  var createProxyMethod = function createProxyMethod(method) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return invoke(method, args);
    };
  };

  var result = {};

  var _iterator2 = _createForOfIteratorHelper(methodNames),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var methodName = _step2.value;
      result[methodName] = createProxyMethod(methodName);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}
/**
 * Converts null to undefined, passes all other values through.
 */

function withNullAsUndefined(x) {
  return x === null ? undefined : x;
}
function assertNever(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unreachable';
  throw new Error(message);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/cache.js



/**
 * Uses a LRU cache to make a given parametrized function cached.
 * Caches just the last value.
 * The key must be JSON serializable.
*/
var cache_LRUCachedComputed = /*#__PURE__*/function () {
  function LRUCachedComputed(computeFn) {
    _classCallCheck(this, LRUCachedComputed);

    this.computeFn = computeFn;
    this.lastCache = undefined;
    this.lastArgKey = undefined;
  }

  _createClass(LRUCachedComputed, [{
    key: "get",
    value: function get(arg) {
      var key = JSON.stringify(arg);

      if (this.lastArgKey !== key) {
        this.lastArgKey = key;
        this.lastCache = this.computeFn(arg);
      }

      return this.lastCache;
    }
  }]);

  return LRUCachedComputed;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/lazy.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var lazy_Lazy = /*#__PURE__*/function () {
  function Lazy(executor) {
    _classCallCheck(this, Lazy);

    this.executor = executor;
    this._didRun = false;
  }
  /**
   * Get the wrapped value.
   *
   * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
   * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
   */


  _createClass(Lazy, [{
    key: "getValue",
    value: function getValue() {
      if (!this._didRun) {
        try {
          this._value = this.executor();
        } catch (err) {
          this._error = err;
        } finally {
          this._didRun = true;
        }
      }

      if (this._error) {
        throw this._error;
      }

      return this._value;
    }
    /**
     * Get the wrapped value without forcing evaluation.
     */

  }, {
    key: "rawValue",
    get: function get() {
      return this._value;
    }
  }]);

  return Lazy;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/strings.js





/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var strings_a;



function isFalsyOrWhitespace(str) {
  if (!str || typeof str !== 'string') {
    return true;
  }

  return str.trim().length === 0;
}
var _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */

function format(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length === 0) {
    return value;
  }

  return value.replace(_formatRegexp, function (match, group) {
    var idx = parseInt(group, 10);
    return isNaN(idx) || idx < 0 || idx >= args.length ? match : args[idx];
  });
}
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */

function strings_escape(html) {
  return html.replace(/[<>&]/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;';

      case '>':
        return '&gt;';

      case '&':
        return '&amp;';

      default:
        return match;
    }
  });
}
/**
 * Escapes regular expression characters in a given string
 */

function escapeRegExpCharacters(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */

function trim(haystack) {
  var needle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var trimmed = ltrim(haystack, needle);
  return rtrim(trimmed, needle);
}
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */

function ltrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }

  var needleLen = needle.length;

  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }

  var offset = 0;

  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }

  return haystack.substring(offset);
}
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */

function rtrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }

  var needleLen = needle.length,
      haystackLen = haystack.length;

  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }

  var offset = haystackLen,
      idx = -1;

  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);

    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }

    if (idx === 0) {
      return '';
    }

    offset = idx;
  }

  return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
  return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
function stripWildcards(pattern) {
  return pattern.replace(/\*/g, '');
}
function createRegExp(searchString, isRegex) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!searchString) {
    throw new Error('Cannot create regex from empty string');
  }

  if (!isRegex) {
    searchString = escapeRegExpCharacters(searchString);
  }

  if (options.wholeWord) {
    if (!/\B/.test(searchString.charAt(0))) {
      searchString = '\\b' + searchString;
    }

    if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
      searchString = searchString + '\\b';
    }
  }

  var modifiers = '';

  if (options.global) {
    modifiers += 'g';
  }

  if (!options.matchCase) {
    modifiers += 'i';
  }

  if (options.multiline) {
    modifiers += 'm';
  }

  if (options.unicode) {
    modifiers += 'u';
  }

  return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
  // Exit early if it's one of these special cases which are meant to match
  // against an empty string
  if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
    return false;
  } // We check against an empty string. If the regular expression doesn't advance
  // (e.g. ends in an endless loop) it will match an empty string.


  var match = regexp.exec('');
  return !!(match && regexp.lastIndex === 0);
}
function regExpFlags(regexp) {
  return (regexp.global ? 'g' : '') + (regexp.ignoreCase ? 'i' : '') + (regexp.multiline ? 'm' : '') + (regexp
  /* standalone editor compilation */
  .unicode ? 'u' : '');
}
function splitLines(str) {
  return str.split(/\r\n|\r|\n/);
}
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */

function firstNonWhitespaceIndex(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return i;
      }
  }

  return -1;
}
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */

function getLeadingWhitespace(str) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length;

  for (var i = start; i < end; i++) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return str.substring(start, i);
      }
  }

  return str.substring(start, end);
}
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */

function lastNonWhitespaceIndex(str) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : str.length - 1;

  for (var i = startIndex; i >= 0; i--) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return i;
      }
  }

  return -1;
}
function strings_compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function compareSubstring(a, b) {
  var aStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var aEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
  var bStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var bEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : b.length;

  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    var codeA = a.charCodeAt(aStart);
    var codeB = b.charCodeAt(bStart);

    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }

  var aLen = aEnd - aStart;
  var bLen = bEnd - bStart;

  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }

  return 0;
}
function compareIgnoreCase(a, b) {
  return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
function compareSubstringIgnoreCase(a, b) {
  var aStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var aEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
  var bStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var bEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : b.length;

  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    var codeA = a.charCodeAt(aStart);
    var codeB = b.charCodeAt(bStart);

    if (codeA === codeB) {
      // equal
      continue;
    }

    if (codeA >= 128 || codeB >= 128) {
      // not ASCII letters -> fallback to lower-casing strings
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    } // mapper lower-case ascii letter onto upper-case varinats
    // [97-122] (lower ascii) --> [65-90] (upper ascii)


    if (isLowerAsciiLetter(codeA)) {
      codeA -= 32;
    }

    if (isLowerAsciiLetter(codeB)) {
      codeB -= 32;
    } // compare both code points


    var diff = codeA - codeB;

    if (diff === 0) {
      continue;
    }

    return diff;
  }

  var aLen = aEnd - aStart;
  var bLen = bEnd - bStart;

  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }

  return 0;
}
function isLowerAsciiLetter(code) {
  return code >= 97
  /* a */
  && code <= 122
  /* z */
  ;
}
function isUpperAsciiLetter(code) {
  return code >= 65
  /* A */
  && code <= 90
  /* Z */
  ;
}
function equalsIgnoreCase(a, b) {
  return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}
function startsWithIgnoreCase(str, candidate) {
  var candidateLength = candidate.length;

  if (candidate.length > str.length) {
    return false;
  }

  return compareSubstringIgnoreCase(str, candidate, 0, candidateLength) === 0;
}
/**
 * @returns the length of the common prefix of the two strings.
 */

function commonPrefixLength(a, b) {
  var i,
      len = Math.min(a.length, b.length);

  for (i = 0; i < len; i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
      return i;
    }
  }

  return len;
}
/**
 * @returns the length of the common suffix of the two strings.
 */

function commonSuffixLength(a, b) {
  var i,
      len = Math.min(a.length, b.length);
  var aLastIndex = a.length - 1;
  var bLastIndex = b.length - 1;

  for (i = 0; i < len; i++) {
    if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
      return i;
    }
  }

  return len;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function isHighSurrogate(charCode) {
  return 0xD800 <= charCode && charCode <= 0xDBFF;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function isLowSurrogate(charCode) {
  return 0xDC00 <= charCode && charCode <= 0xDFFF;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function computeCodePoint(highSurrogate, lowSurrogate) {
  return (highSurrogate - 0xD800 << 10) + (lowSurrogate - 0xDC00) + 0x10000;
}
/**
 * get the code point that begins at offset `offset`
 */

function getNextCodePoint(str, len, offset) {
  var charCode = str.charCodeAt(offset);

  if (isHighSurrogate(charCode) && offset + 1 < len) {
    var nextCharCode = str.charCodeAt(offset + 1);

    if (isLowSurrogate(nextCharCode)) {
      return computeCodePoint(charCode, nextCharCode);
    }
  }

  return charCode;
}
/**
 * get the code point that ends right before offset `offset`
 */

function getPrevCodePoint(str, offset) {
  var charCode = str.charCodeAt(offset - 1);

  if (isLowSurrogate(charCode) && offset > 1) {
    var prevCharCode = str.charCodeAt(offset - 2);

    if (isHighSurrogate(prevCharCode)) {
      return computeCodePoint(prevCharCode, charCode);
    }
  }

  return charCode;
}

var strings_CodePointIterator = /*#__PURE__*/function () {
  function CodePointIterator(str) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, CodePointIterator);

    this._str = str;
    this._len = str.length;
    this._offset = offset;
  }

  _createClass(CodePointIterator, [{
    key: "offset",
    get: function get() {
      return this._offset;
    }
  }, {
    key: "setOffset",
    value: function setOffset(offset) {
      this._offset = offset;
    }
  }, {
    key: "prevCodePoint",
    value: function prevCodePoint() {
      var codePoint = getPrevCodePoint(this._str, this._offset);
      this._offset -= codePoint >= 65536
      /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
      ? 2 : 1;
      return codePoint;
    }
  }, {
    key: "nextCodePoint",
    value: function nextCodePoint() {
      var codePoint = getNextCodePoint(this._str, this._len, this._offset);
      this._offset += codePoint >= 65536
      /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
      ? 2 : 1;
      return codePoint;
    }
  }, {
    key: "eol",
    value: function eol() {
      return this._offset >= this._len;
    }
  }]);

  return CodePointIterator;
}();
var strings_GraphemeIterator = /*#__PURE__*/function () {
  function GraphemeIterator(str) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, GraphemeIterator);

    this._iterator = new strings_CodePointIterator(str, offset);
  }

  _createClass(GraphemeIterator, [{
    key: "offset",
    get: function get() {
      return this._iterator.offset;
    }
  }, {
    key: "nextGraphemeLength",
    value: function nextGraphemeLength() {
      var graphemeBreakTree = strings_GraphemeBreakTree.getInstance();
      var iterator = this._iterator;
      var initialOffset = iterator.offset;
      var graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());

      while (!iterator.eol()) {
        var offset = iterator.offset;
        var nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());

        if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
          // move iterator back
          iterator.setOffset(offset);
          break;
        }

        graphemeBreakType = nextGraphemeBreakType;
      }

      return iterator.offset - initialOffset;
    }
  }, {
    key: "prevGraphemeLength",
    value: function prevGraphemeLength() {
      var graphemeBreakTree = strings_GraphemeBreakTree.getInstance();
      var iterator = this._iterator;
      var initialOffset = iterator.offset;
      var graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());

      while (iterator.offset > 0) {
        var offset = iterator.offset;
        var prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());

        if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
          // move iterator back
          iterator.setOffset(offset);
          break;
        }

        graphemeBreakType = prevGraphemeBreakType;
      }

      return initialOffset - iterator.offset;
    }
  }, {
    key: "eol",
    value: function eol() {
      return this._iterator.eol();
    }
  }]);

  return GraphemeIterator;
}();
function nextCharLength(str, initialOffset) {
  var iterator = new strings_GraphemeIterator(str, initialOffset);
  return iterator.nextGraphemeLength();
}
function prevCharLength(str, initialOffset) {
  var iterator = new strings_GraphemeIterator(str, initialOffset);
  return iterator.prevGraphemeLength();
}
function getCharContainingOffset(str, offset) {
  if (offset > 0 && isLowSurrogate(str.charCodeAt(offset))) {
    offset--;
  }

  var endOffset = offset + nextCharLength(str, offset);
  var startOffset = endOffset - prevCharLength(str, endOffset);
  return [startOffset, endOffset];
}
/**
 * Generated using https://github.com/alexdima/unicode-utils/blob/main/rtl-test.js
 */

var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */

function containsRTL(str) {
  return CONTAINS_RTL.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */

function isBasicASCII(str) {
  return IS_BASIC_ASCII.test(str);
}
var UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/; // LINE SEPARATOR (LS) or PARAGRAPH SEPARATOR (PS)

/**
 * Returns true if `str` contains unusual line terminators, like LS or PS
 */

function containsUnusualLineTerminators(str) {
  return UNUSUAL_LINE_TERMINATORS.test(str);
}
function isFullWidthCharacter(charCode) {
  // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
  // http://jrgraphix.net/research/unicode_blocks.php
  //          2E80 - 2EFF   CJK Radicals Supplement
  //          2F00 - 2FDF   Kangxi Radicals
  //          2FF0 - 2FFF   Ideographic Description Characters
  //          3000 - 303F   CJK Symbols and Punctuation
  //          3040 - 309F   Hiragana
  //          30A0 - 30FF   Katakana
  //          3100 - 312F   Bopomofo
  //          3130 - 318F   Hangul Compatibility Jamo
  //          3190 - 319F   Kanbun
  //          31A0 - 31BF   Bopomofo Extended
  //          31F0 - 31FF   Katakana Phonetic Extensions
  //          3200 - 32FF   Enclosed CJK Letters and Months
  //          3300 - 33FF   CJK Compatibility
  //          3400 - 4DBF   CJK Unified Ideographs Extension A
  //          4DC0 - 4DFF   Yijing Hexagram Symbols
  //          4E00 - 9FFF   CJK Unified Ideographs
  //          A000 - A48F   Yi Syllables
  //          A490 - A4CF   Yi Radicals
  //          AC00 - D7AF   Hangul Syllables
  // [IGNORE] D800 - DB7F   High Surrogates
  // [IGNORE] DB80 - DBFF   High Private Use Surrogates
  // [IGNORE] DC00 - DFFF   Low Surrogates
  // [IGNORE] E000 - F8FF   Private Use Area
  //          F900 - FAFF   CJK Compatibility Ideographs
  // [IGNORE] FB00 - FB4F   Alphabetic Presentation Forms
  // [IGNORE] FB50 - FDFF   Arabic Presentation Forms-A
  // [IGNORE] FE00 - FE0F   Variation Selectors
  // [IGNORE] FE20 - FE2F   Combining Half Marks
  // [IGNORE] FE30 - FE4F   CJK Compatibility Forms
  // [IGNORE] FE50 - FE6F   Small Form Variants
  // [IGNORE] FE70 - FEFF   Arabic Presentation Forms-B
  //          FF00 - FFEF   Halfwidth and Fullwidth Forms
  //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
  //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
  // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
  // [IGNORE] FFF0 - FFFF   Specials
  return charCode >= 0x2E80 && charCode <= 0xD7AF || charCode >= 0xF900 && charCode <= 0xFAFF || charCode >= 0xFF01 && charCode <= 0xFF5E;
}
/**
 * A fast function (therefore imprecise) to check if code points are emojis.
 * Generated using https://github.com/alexdima/unicode-utils/blob/main/emoji-test.js
 */

function isEmojiImprecise(x) {
  return x >= 0x1F1E6 && x <= 0x1F1FF || x === 8986 || x === 8987 || x === 9200 || x === 9203 || x >= 9728 && x <= 10175 || x === 11088 || x === 11093 || x >= 127744 && x <= 128591 || x >= 128640 && x <= 128764 || x >= 128992 && x <= 129008 || x >= 129280 && x <= 129535 || x >= 129648 && x <= 129782;
} // -- UTF-8 BOM

var UTF8_BOM_CHARACTER = String.fromCharCode(65279
/* UTF8_BOM */
);
function startsWithUTF8BOM(str) {
  return !!(str && str.length > 0 && str.charCodeAt(0) === 65279
  /* UTF8_BOM */
  );
}
function containsUppercaseCharacter(target) {
  var ignoreEscapedChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!target) {
    return false;
  }

  if (ignoreEscapedChars) {
    target = target.replace(/\\./g, '');
  }

  return target.toLowerCase() !== target;
}
/**
 * Produces 'a'-'z', followed by 'A'-'Z'... followed by 'a'-'z', etc.
 */

function singleLetterHash(n) {
  var LETTERS_CNT = 90
  /* Z */
  - 65
  /* A */
  + 1;
  n = n % (2 * LETTERS_CNT);

  if (n < LETTERS_CNT) {
    return String.fromCharCode(97
    /* a */
    + n);
  }

  return String.fromCharCode(65
  /* A */
  + n - LETTERS_CNT);
}

function breakBetweenGraphemeBreakType(breakTypeA, breakTypeB) {
  // http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundary_Rules
  // !!! Let's make the common case a bit faster
  if (breakTypeA === 0
  /* Other */
  ) {
      // see https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakTest-13.0.0d10.html#table
      return breakTypeB !== 5
      /* Extend */
      && breakTypeB !== 7
      /* SpacingMark */
      ;
    } // Do not break between a CR and LF. Otherwise, break before and after controls.
  // GB3                                        CR × LF
  // GB4                       (Control | CR | LF) ÷
  // GB5                                           ÷ (Control | CR | LF)


  if (breakTypeA === 2
  /* CR */
  ) {
      if (breakTypeB === 3
      /* LF */
      ) {
          return false; // GB3
        }
    }

  if (breakTypeA === 4
  /* Control */
  || breakTypeA === 2
  /* CR */
  || breakTypeA === 3
  /* LF */
  ) {
      return true; // GB4
    }

  if (breakTypeB === 4
  /* Control */
  || breakTypeB === 2
  /* CR */
  || breakTypeB === 3
  /* LF */
  ) {
      return true; // GB5
    } // Do not break Hangul syllable sequences.
  // GB6                                         L × (L | V | LV | LVT)
  // GB7                                  (LV | V) × (V | T)
  // GB8                                 (LVT | T) × T


  if (breakTypeA === 8
  /* L */
  ) {
      if (breakTypeB === 8
      /* L */
      || breakTypeB === 9
      /* V */
      || breakTypeB === 11
      /* LV */
      || breakTypeB === 12
      /* LVT */
      ) {
          return false; // GB6
        }
    }

  if (breakTypeA === 11
  /* LV */
  || breakTypeA === 9
  /* V */
  ) {
      if (breakTypeB === 9
      /* V */
      || breakTypeB === 10
      /* T */
      ) {
          return false; // GB7
        }
    }

  if (breakTypeA === 12
  /* LVT */
  || breakTypeA === 10
  /* T */
  ) {
      if (breakTypeB === 10
      /* T */
      ) {
          return false; // GB8
        }
    } // Do not break before extending characters or ZWJ.
  // GB9                                           × (Extend | ZWJ)


  if (breakTypeB === 5
  /* Extend */
  || breakTypeB === 13
  /* ZWJ */
  ) {
      return false; // GB9
    } // The GB9a and GB9b rules only apply to extended grapheme clusters:
  // Do not break before SpacingMarks, or after Prepend characters.
  // GB9a                                          × SpacingMark
  // GB9b                                  Prepend ×


  if (breakTypeB === 7
  /* SpacingMark */
  ) {
      return false; // GB9a
    }

  if (breakTypeA === 1
  /* Prepend */
  ) {
      return false; // GB9b
    } // Do not break within emoji modifier sequences or emoji zwj sequences.
  // GB11    \p{Extended_Pictographic} Extend* ZWJ × \p{Extended_Pictographic}


  if (breakTypeA === 13
  /* ZWJ */
  && breakTypeB === 14
  /* Extended_Pictographic */
  ) {
      // Note: we are not implementing the rule entirely here to avoid introducing states
      return false; // GB11
    } // GB12                          sot (RI RI)* RI × RI
  // GB13                        [^RI] (RI RI)* RI × RI


  if (breakTypeA === 6
  /* Regional_Indicator */
  && breakTypeB === 6
  /* Regional_Indicator */
  ) {
      // Note: we are not implementing the rule entirely here to avoid introducing states
      return false; // GB12 & GB13
    } // GB999                                     Any ÷ Any


  return true;
}

var strings_GraphemeBreakTree = /*#__PURE__*/function () {
  function GraphemeBreakTree() {
    _classCallCheck(this, GraphemeBreakTree);

    this._data = getGraphemeBreakRawData();
  }

  _createClass(GraphemeBreakTree, [{
    key: "getGraphemeBreakType",
    value: function getGraphemeBreakType(codePoint) {
      // !!! Let's make 7bit ASCII a bit faster: 0..31
      if (codePoint < 32) {
        if (codePoint === 10
        /* LineFeed */
        ) {
            return 3
            /* LF */
            ;
          }

        if (codePoint === 13
        /* CarriageReturn */
        ) {
            return 2
            /* CR */
            ;
          }

        return 4
        /* Control */
        ;
      } // !!! Let's make 7bit ASCII a bit faster: 32..126


      if (codePoint < 127) {
        return 0
        /* Other */
        ;
      }

      var data = this._data;
      var nodeCount = data.length / 3;
      var nodeIndex = 1;

      while (nodeIndex <= nodeCount) {
        if (codePoint < data[3 * nodeIndex]) {
          // go left
          nodeIndex = 2 * nodeIndex;
        } else if (codePoint > data[3 * nodeIndex + 1]) {
          // go right
          nodeIndex = 2 * nodeIndex + 1;
        } else {
          // hit
          return data[3 * nodeIndex + 2];
        }
      }

      return 0
      /* Other */
      ;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!GraphemeBreakTree._INSTANCE) {
        GraphemeBreakTree._INSTANCE = new GraphemeBreakTree();
      }

      return GraphemeBreakTree._INSTANCE;
    }
  }]);

  return GraphemeBreakTree;
}();

strings_GraphemeBreakTree._INSTANCE = null;

function getGraphemeBreakRawData() {
  // generated using https://github.com/alexdima/unicode-utils/blob/main/grapheme-break.js
  return JSON.parse('[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]');
} //#endregion

/**
 * Computes the offset after performing a left delete on the given string,
 * while considering unicode grapheme/emoji rules.
*/


function getLeftDeleteOffset(offset, str) {
  if (offset === 0) {
    return 0;
  } // Try to delete emoji part.


  var emojiOffset = getOffsetBeforeLastEmojiComponent(offset, str);

  if (emojiOffset !== undefined) {
    return emojiOffset;
  } // Otherwise, just skip a single code point.


  var iterator = new strings_CodePointIterator(str, offset);
  iterator.prevCodePoint();
  return iterator.offset;
}

function getOffsetBeforeLastEmojiComponent(initialOffset, str) {
  // See https://www.unicode.org/reports/tr51/tr51-14.html#EBNF_and_Regex for the
  // structure of emojis.
  var iterator = new strings_CodePointIterator(str, initialOffset);
  var codePoint = iterator.prevCodePoint(); // Skip modifiers

  while (isEmojiModifier(codePoint) || codePoint === 65039
  /* emojiVariantSelector */
  || codePoint === 8419
  /* enclosingKeyCap */
  ) {
    if (iterator.offset === 0) {
      // Cannot skip modifier, no preceding emoji base.
      return undefined;
    }

    codePoint = iterator.prevCodePoint();
  } // Expect base emoji


  if (!isEmojiImprecise(codePoint)) {
    // Unexpected code point, not a valid emoji.
    return undefined;
  }

  var resultOffset = iterator.offset;

  if (resultOffset > 0) {
    // Skip optional ZWJ code points that combine multiple emojis.
    // In theory, we should check if that ZWJ actually combines multiple emojis
    // to prevent deleting ZWJs in situations we didn't account for.
    var optionalZwjCodePoint = iterator.prevCodePoint();

    if (optionalZwjCodePoint === 8205
    /* zwj */
    ) {
        resultOffset = iterator.offset;
      }
  }

  return resultOffset;
}

function isEmojiModifier(codePoint) {
  return 0x1F3FB <= codePoint && codePoint <= 0x1F3FF;
}

var noBreakWhitespace = '\xa0';
var strings_AmbiguousCharacters = /*#__PURE__*/function () {
  function AmbiguousCharacters(confusableDictionary) {
    _classCallCheck(this, AmbiguousCharacters);

    this.confusableDictionary = confusableDictionary;
  }

  _createClass(AmbiguousCharacters, [{
    key: "isAmbiguous",
    value: function isAmbiguous(codePoint) {
      return this.confusableDictionary.has(codePoint);
    }
    /**
     * Returns the non basic ASCII code point that the given code point can be confused,
     * or undefined if such code point does note exist.
     */

  }, {
    key: "getPrimaryConfusable",
    value: function getPrimaryConfusable(codePoint) {
      return this.confusableDictionary.get(codePoint);
    }
  }, {
    key: "getConfusableCodePoints",
    value: function getConfusableCodePoints() {
      return new Set(this.confusableDictionary.keys());
    }
  }], [{
    key: "getInstance",
    value: function getInstance(locales) {
      return AmbiguousCharacters.cache.get(Array.from(locales));
    }
  }, {
    key: "getLocales",
    value: function getLocales() {
      return AmbiguousCharacters._locales.getValue();
    }
  }]);

  return AmbiguousCharacters;
}();
strings_a = strings_AmbiguousCharacters;
strings_AmbiguousCharacters.ambiguousCharacterData = new lazy_Lazy(function () {
  // Generated using https://github.com/hediet/vscode-unicode-data
  // Stored as key1, value1, key2, value2, ...
  return JSON.parse('{\"_common\":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],\"_default\":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"cs\":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"de\":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"es\":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"fr\":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"it\":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"ja\":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],\"ko\":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"pl\":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"pt-BR\":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"qps-ploc\":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"ru\":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"tr\":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],\"zh-hans\":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],\"zh-hant\":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}');
});
strings_AmbiguousCharacters.cache = new cache_LRUCachedComputed(function (locales) {
  function arrayToMap(arr) {
    var result = new Map();

    for (var i = 0; i < arr.length; i += 2) {
      result.set(arr[i], arr[i + 1]);
    }

    return result;
  }

  function mergeMaps(map1, map2) {
    var result = new Map(map1);

    var _iterator = _createForOfIteratorHelper(map2),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ref3 = _step.value;

        var _ref2 = _slicedToArray(_ref3, 2);

        var key = _ref2[0];
        var value = _ref2[1];
        result.set(key, value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  }

  function intersectMaps(map1, map2) {
    if (!map1) {
      return map2;
    }

    var result = new Map();

    var _iterator2 = _createForOfIteratorHelper(map1),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _ref6 = _step2.value;

        var _ref5 = _slicedToArray(_ref6, 2);

        var key = _ref5[0];
        var value = _ref5[1];

        if (map2.has(key)) {
          result.set(key, value);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return result;
  }

  var data = strings_a.ambiguousCharacterData.getValue();

  var filteredLocales = locales.filter(function (l) {
    return !l.startsWith('_') && l in data;
  });

  if (filteredLocales.length === 0) {
    filteredLocales = ['_default'];
  }

  var languageSpecificMap = undefined;

  var _iterator3 = _createForOfIteratorHelper(filteredLocales),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var locale = _step3.value;

      var _map = arrayToMap(data[locale]);

      languageSpecificMap = intersectMaps(languageSpecificMap, _map);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var commonMap = arrayToMap(data['_common']);
  var map = mergeMaps(commonMap, languageSpecificMap);
  return new strings_AmbiguousCharacters(map);
});
strings_AmbiguousCharacters._locales = new lazy_Lazy(function () {
  return Object.keys(strings_AmbiguousCharacters.ambiguousCharacterData.getValue()).filter(function (k) {
    return !k.startsWith('_');
  });
});
var strings_InvisibleCharacters = /*#__PURE__*/function () {
  function InvisibleCharacters() {
    _classCallCheck(this, InvisibleCharacters);
  }

  _createClass(InvisibleCharacters, null, [{
    key: "getRawData",
    value: function getRawData() {
      // Generated using https://github.com/hediet/vscode-unicode-data
      return JSON.parse('[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]');
    }
  }, {
    key: "getData",
    value: function getData() {
      if (!this._data) {
        this._data = new Set(InvisibleCharacters.getRawData());
      }

      return this._data;
    }
  }, {
    key: "isInvisibleCharacter",
    value: function isInvisibleCharacter(codePoint) {
      return InvisibleCharacters.getData().has(codePoint);
    }
  }, {
    key: "codePoints",
    get: function get() {
      return InvisibleCharacters.getData();
    }
  }]);

  return InvisibleCharacters;
}();
strings_InvisibleCharacters._data = undefined;
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js






/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






var INITIALIZE = '$initialize';
var webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
  if (!platform["d" /* isWeb */]) {
    // running tests
    return;
  }

  if (!webWorkerWarningLogged) {
    webWorkerWarningLogged = true;
    console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq');
  }

  console.warn(err.message);
}

var simpleWorker_RequestMessage = function RequestMessage(vsWorker, req, method, args) {
  _classCallCheck(this, RequestMessage);

  this.vsWorker = vsWorker;
  this.req = req;
  this.method = method;
  this.args = args;
  this.type = 0
  /* Request */
  ;
};

var simpleWorker_ReplyMessage = function ReplyMessage(vsWorker, seq, res, err) {
  _classCallCheck(this, ReplyMessage);

  this.vsWorker = vsWorker;
  this.seq = seq;
  this.res = res;
  this.err = err;
  this.type = 1
  /* Reply */
  ;
};

var simpleWorker_SubscribeEventMessage = function SubscribeEventMessage(vsWorker, req, eventName, arg) {
  _classCallCheck(this, SubscribeEventMessage);

  this.vsWorker = vsWorker;
  this.req = req;
  this.eventName = eventName;
  this.arg = arg;
  this.type = 2
  /* SubscribeEvent */
  ;
};

var simpleWorker_EventMessage = function EventMessage(vsWorker, req, event) {
  _classCallCheck(this, EventMessage);

  this.vsWorker = vsWorker;
  this.req = req;
  this.event = event;
  this.type = 3
  /* Event */
  ;
};

var simpleWorker_UnsubscribeEventMessage = function UnsubscribeEventMessage(vsWorker, req) {
  _classCallCheck(this, UnsubscribeEventMessage);

  this.vsWorker = vsWorker;
  this.req = req;
  this.type = 4
  /* UnsubscribeEvent */
  ;
};

var simpleWorker_SimpleWorkerProtocol = /*#__PURE__*/function () {
  function SimpleWorkerProtocol(handler) {
    _classCallCheck(this, SimpleWorkerProtocol);

    this._workerId = -1;
    this._handler = handler;
    this._lastSentReq = 0;
    this._pendingReplies = Object.create(null);
    this._pendingEmitters = new Map();
    this._pendingEvents = new Map();
  }

  _createClass(SimpleWorkerProtocol, [{
    key: "setWorkerId",
    value: function setWorkerId(workerId) {
      this._workerId = workerId;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(method, args) {
      var _this = this;

      var req = String(++this._lastSentReq);
      return new Promise(function (resolve, reject) {
        _this._pendingReplies[req] = {
          resolve: resolve,
          reject: reject
        };

        _this._send(new simpleWorker_RequestMessage(_this._workerId, req, method, args));
      });
    }
  }, {
    key: "listen",
    value: function listen(eventName, arg) {
      var _this2 = this;

      var req = null;
      var emitter = new event_Emitter({
        onFirstListenerAdd: function onFirstListenerAdd() {
          req = String(++_this2._lastSentReq);

          _this2._pendingEmitters.set(req, emitter);

          _this2._send(new simpleWorker_SubscribeEventMessage(_this2._workerId, req, eventName, arg));
        },
        onLastListenerRemove: function onLastListenerRemove() {
          _this2._pendingEmitters["delete"](req);

          _this2._send(new simpleWorker_UnsubscribeEventMessage(_this2._workerId, req));

          req = null;
        }
      });
      return emitter.event;
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      if (!message || !message.vsWorker) {
        return;
      }

      if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
        return;
      }

      this._handleMessage(message);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(msg) {
      switch (msg.type) {
        case 1
        /* Reply */
        :
          return this._handleReplyMessage(msg);

        case 0
        /* Request */
        :
          return this._handleRequestMessage(msg);

        case 2
        /* SubscribeEvent */
        :
          return this._handleSubscribeEventMessage(msg);

        case 3
        /* Event */
        :
          return this._handleEventMessage(msg);

        case 4
        /* UnsubscribeEvent */
        :
          return this._handleUnsubscribeEventMessage(msg);
      }
    }
  }, {
    key: "_handleReplyMessage",
    value: function _handleReplyMessage(replyMessage) {
      if (!this._pendingReplies[replyMessage.seq]) {
        console.warn('Got reply to unknown seq');
        return;
      }

      var reply = this._pendingReplies[replyMessage.seq];
      delete this._pendingReplies[replyMessage.seq];

      if (replyMessage.err) {
        var err = replyMessage.err;

        if (replyMessage.err.$isError) {
          err = new Error();
          err.name = replyMessage.err.name;
          err.message = replyMessage.err.message;
          err.stack = replyMessage.err.stack;
        }

        reply.reject(err);
        return;
      }

      reply.resolve(replyMessage.res);
    }
  }, {
    key: "_handleRequestMessage",
    value: function _handleRequestMessage(requestMessage) {
      var _this3 = this;

      var req = requestMessage.req;

      var result = this._handler.handleMessage(requestMessage.method, requestMessage.args);

      result.then(function (r) {
        _this3._send(new simpleWorker_ReplyMessage(_this3._workerId, req, r, undefined));
      }, function (e) {
        if (e.detail instanceof Error) {
          // Loading errors have a detail property that points to the actual error
          e.detail = transformErrorForSerialization(e.detail);
        }

        _this3._send(new simpleWorker_ReplyMessage(_this3._workerId, req, undefined, transformErrorForSerialization(e)));
      });
    }
  }, {
    key: "_handleSubscribeEventMessage",
    value: function _handleSubscribeEventMessage(msg) {
      var _this4 = this;

      var req = msg.req;

      var disposable = this._handler.handleEvent(msg.eventName, msg.arg)(function (event) {
        _this4._send(new simpleWorker_EventMessage(_this4._workerId, req, event));
      });

      this._pendingEvents.set(req, disposable);
    }
  }, {
    key: "_handleEventMessage",
    value: function _handleEventMessage(msg) {
      if (!this._pendingEmitters.has(msg.req)) {
        console.warn('Got event for unknown req');
        return;
      }

      this._pendingEmitters.get(msg.req).fire(msg.event);
    }
  }, {
    key: "_handleUnsubscribeEventMessage",
    value: function _handleUnsubscribeEventMessage(msg) {
      if (!this._pendingEvents.has(msg.req)) {
        console.warn('Got unsubscribe for unknown req');
        return;
      }

      this._pendingEvents.get(msg.req).dispose();

      this._pendingEvents["delete"](msg.req);
    }
  }, {
    key: "_send",
    value: function _send(msg) {
      var transfer = [];

      if (msg.type === 0
      /* Request */
      ) {
          for (var i = 0; i < msg.args.length; i++) {
            if (msg.args[i] instanceof ArrayBuffer) {
              transfer.push(msg.args[i]);
            }
          }
        } else if (msg.type === 1
      /* Reply */
      ) {
          if (msg.res instanceof ArrayBuffer) {
            transfer.push(msg.res);
          }
        }

      this._handler.sendMessage(msg, transfer);
    }
  }]);

  return SimpleWorkerProtocol;
}();
/**
 * Main thread side
 */


var simpleWorker_SimpleWorkerClient = /*#__PURE__*/function (_Disposable) {
  _inherits(SimpleWorkerClient, _Disposable);

  var _super = _createSuper(SimpleWorkerClient);

  function SimpleWorkerClient(workerFactory, moduleId, host) {
    var _this5;

    _classCallCheck(this, SimpleWorkerClient);

    _this5 = _super.call(this);
    var lazyProxyReject = null;
    _this5._worker = _this5._register(workerFactory.create('vs/base/common/worker/simpleWorker', function (msg) {
      _this5._protocol.handleMessage(msg);
    }, function (err) {
      // in Firefox, web workers fail lazily :(
      // we will reject the proxy
      if (lazyProxyReject) {
        lazyProxyReject(err);
      }
    }));
    _this5._protocol = new simpleWorker_SimpleWorkerProtocol({
      sendMessage: function sendMessage(msg, transfer) {
        _this5._worker.postMessage(msg, transfer);
      },
      handleMessage: function handleMessage(method, args) {
        if (typeof host[method] !== 'function') {
          return Promise.reject(new Error('Missing method ' + method + ' on main thread host.'));
        }

        try {
          return Promise.resolve(host[method].apply(host, args));
        } catch (e) {
          return Promise.reject(e);
        }
      },
      handleEvent: function handleEvent(eventName, arg) {
        if (propertyIsDynamicEvent(eventName)) {
          var event = host[eventName].call(host, arg);

          if (typeof event !== 'function') {
            throw new Error("Missing dynamic event ".concat(eventName, " on main thread host."));
          }

          return event;
        }

        if (propertyIsEvent(eventName)) {
          var _event = host[eventName];

          if (typeof _event !== 'function') {
            throw new Error("Missing event ".concat(eventName, " on main thread host."));
          }

          return _event;
        }

        throw new Error("Malformed event name ".concat(eventName));
      }
    });

    _this5._protocol.setWorkerId(_this5._worker.getId()); // Gather loader configuration


    var loaderConfiguration = null;

    if (typeof platform["a" /* globals */].require !== 'undefined' && typeof platform["a" /* globals */].require.getConfig === 'function') {
      // Get the configuration from the Monaco AMD Loader
      loaderConfiguration = platform["a" /* globals */].require.getConfig();
    } else if (typeof platform["a" /* globals */].requirejs !== 'undefined') {
      // Get the configuration from requirejs
      loaderConfiguration = platform["a" /* globals */].requirejs.s.contexts._.config;
    }

    var hostMethods = getAllMethodNames(host); // Send initialize message

    _this5._onModuleLoaded = _this5._protocol.sendMessage(INITIALIZE, [_this5._worker.getId(), JSON.parse(JSON.stringify(loaderConfiguration)), moduleId, hostMethods]); // Create proxy to loaded code

    var proxyMethodRequest = function proxyMethodRequest(method, args) {
      return _this5._request(method, args);
    };

    var proxyListen = function proxyListen(eventName, arg) {
      return _this5._protocol.listen(eventName, arg);
    };

    _this5._lazyProxy = new Promise(function (resolve, reject) {
      lazyProxyReject = reject;

      _this5._onModuleLoaded.then(function (availableMethods) {
        resolve(simpleWorker_createProxyObject(availableMethods, proxyMethodRequest, proxyListen));
      }, function (e) {
        reject(e);

        _this5._onError('Worker failed to load ' + moduleId, e);
      });
    });
    return _this5;
  }

  _createClass(SimpleWorkerClient, [{
    key: "getProxyObject",
    value: function getProxyObject() {
      return this._lazyProxy;
    }
  }, {
    key: "_request",
    value: function _request(method, args) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6._onModuleLoaded.then(function () {
          _this6._protocol.sendMessage(method, args).then(resolve, reject);
        }, reject);
      });
    }
  }, {
    key: "_onError",
    value: function _onError(message, error) {
      console.error(message);
      console.info(error);
    }
  }]);

  return SimpleWorkerClient;
}(lifecycle_Disposable);

function propertyIsEvent(name) {
  // Assume a property is an event if it has a form of "onSomething"
  return name[0] === 'o' && name[1] === 'n' && isUpperAsciiLetter(name.charCodeAt(2));
}

function propertyIsDynamicEvent(name) {
  // Assume a property is a dynamic event (a method that returns an event) if it has a form of "onDynamicSomething"
  return /^onDynamic/.test(name) && isUpperAsciiLetter(name.charCodeAt(9));
}

function simpleWorker_createProxyObject(methodNames, invoke, proxyListen) {
  var createProxyMethod = function createProxyMethod(method) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return invoke(method, args);
    };
  };

  var createProxyDynamicEvent = function createProxyDynamicEvent(eventName) {
    return function (arg) {
      return proxyListen(eventName, arg);
    };
  };

  var result = {};

  var _iterator = _createForOfIteratorHelper(methodNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var methodName = _step.value;

      if (propertyIsDynamicEvent(methodName)) {
        result[methodName] = createProxyDynamicEvent(methodName);
        continue;
      }

      if (propertyIsEvent(methodName)) {
        result[methodName] = proxyListen(methodName, undefined);
        continue;
      }

      result[methodName] = createProxyMethod(methodName);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Worker side
 */


var simpleWorker_SimpleWorkerServer = /*#__PURE__*/function () {
  function SimpleWorkerServer(postMessage, requestHandlerFactory) {
    var _this7 = this;

    _classCallCheck(this, SimpleWorkerServer);

    this._requestHandlerFactory = requestHandlerFactory;
    this._requestHandler = null;
    this._protocol = new simpleWorker_SimpleWorkerProtocol({
      sendMessage: function sendMessage(msg, transfer) {
        postMessage(msg, transfer);
      },
      handleMessage: function handleMessage(method, args) {
        return _this7._handleMessage(method, args);
      },
      handleEvent: function handleEvent(eventName, arg) {
        return _this7._handleEvent(eventName, arg);
      }
    });
  }

  _createClass(SimpleWorkerServer, [{
    key: "onmessage",
    value: function onmessage(msg) {
      this._protocol.handleMessage(msg);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(method, args) {
      if (method === INITIALIZE) {
        return this.initialize(args[0], args[1], args[2], args[3]);
      }

      if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
        return Promise.reject(new Error('Missing requestHandler or method: ' + method));
      }

      try {
        return Promise.resolve(this._requestHandler[method].apply(this._requestHandler, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }, {
    key: "_handleEvent",
    value: function _handleEvent(eventName, arg) {
      if (!this._requestHandler) {
        throw new Error("Missing requestHandler");
      }

      if (propertyIsDynamicEvent(eventName)) {
        var event = this._requestHandler[eventName].call(this._requestHandler, arg);

        if (typeof event !== 'function') {
          throw new Error("Missing dynamic event ".concat(eventName, " on request handler."));
        }

        return event;
      }

      if (propertyIsEvent(eventName)) {
        var _event2 = this._requestHandler[eventName];

        if (typeof _event2 !== 'function') {
          throw new Error("Missing event ".concat(eventName, " on request handler."));
        }

        return _event2;
      }

      throw new Error("Malformed event name ".concat(eventName));
    }
  }, {
    key: "initialize",
    value: function initialize(workerId, loaderConfig, moduleId, hostMethods) {
      var _this8 = this;

      this._protocol.setWorkerId(workerId);

      var proxyMethodRequest = function proxyMethodRequest(method, args) {
        return _this8._protocol.sendMessage(method, args);
      };

      var proxyListen = function proxyListen(eventName, arg) {
        return _this8._protocol.listen(eventName, arg);
      };

      var hostProxy = simpleWorker_createProxyObject(hostMethods, proxyMethodRequest, proxyListen);

      if (this._requestHandlerFactory) {
        // static request handler
        this._requestHandler = this._requestHandlerFactory(hostProxy);
        return Promise.resolve(getAllMethodNames(this._requestHandler));
      }

      if (loaderConfig) {
        // Remove 'baseUrl', handling it is beyond scope for now
        if (typeof loaderConfig.baseUrl !== 'undefined') {
          delete loaderConfig['baseUrl'];
        }

        if (typeof loaderConfig.paths !== 'undefined') {
          if (typeof loaderConfig.paths.vs !== 'undefined') {
            delete loaderConfig.paths['vs'];
          }
        }

        if (typeof loaderConfig.trustedTypesPolicy !== undefined) {
          // don't use, it has been destroyed during serialize
          delete loaderConfig['trustedTypesPolicy'];
        } // Since this is in a web worker, enable catching errors


        loaderConfig.catchError = true;

        platform["a" /* globals */].require.config(loaderConfig);
      }

      return new Promise(function (resolve, reject) {
        // Use the global require to be sure to get the global config
        // ESM-comment-begin
        // 			const req = (globals.require || require);
        // ESM-comment-end
        // ESM-uncomment-begin
        var req = platform["a" /* globals */].require; // ESM-uncomment-end

        req([moduleId], function (module) {
          _this8._requestHandler = module.create(hostProxy);

          if (!_this8._requestHandler) {
            reject(new Error("No RequestHandler!"));
            return;
          }

          resolve(getAllMethodNames(_this8._requestHandler));
        }, reject);
      });
    }
  }]);

  return SimpleWorkerServer;
}();
/**
 * Called on the worker side
 */

function create(postMessage) {
  return new simpleWorker_SimpleWorkerServer(postMessage, null);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents information about a specific difference between two sequences.
 */
var diffChange_DiffChange = /*#__PURE__*/function () {
  /**
   * Constructs a new DiffChange with the given sequence information
   * and content.
   */
  function DiffChange(originalStart, originalLength, modifiedStart, modifiedLength) {
    _classCallCheck(this, DiffChange);

    //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
    this.originalStart = originalStart;
    this.originalLength = originalLength;
    this.modifiedStart = modifiedStart;
    this.modifiedLength = modifiedLength;
  }
  /**
   * The end point (exclusive) of the change in the original sequence.
   */


  _createClass(DiffChange, [{
    key: "getOriginalEnd",
    value: function getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */

  }, {
    key: "getModifiedEnd",
    value: function getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }]);

  return DiffChange;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/hash.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Return a hash value for an object.
 */

function hash(obj) {
  return doHash(obj, 0);
}
function doHash(obj, hashVal) {
  switch (typeof obj) {
    case 'object':
      if (obj === null) {
        return numberHash(349, hashVal);
      } else if (Array.isArray(obj)) {
        return arrayHash(obj, hashVal);
      }

      return objectHash(obj, hashVal);

    case 'string':
      return stringHash(obj, hashVal);

    case 'boolean':
      return booleanHash(obj, hashVal);

    case 'number':
      return numberHash(obj, hashVal);

    case 'undefined':
      return numberHash(937, hashVal);

    default:
      return numberHash(617, hashVal);
  }
}
function numberHash(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0; // hashVal * 31 + ch, keep as int32
}

function booleanHash(b, initialHashVal) {
  return numberHash(b ? 433 : 863, initialHashVal);
}

function stringHash(s, hashVal) {
  hashVal = numberHash(149417, hashVal);

  for (var i = 0, length = s.length; i < length; i++) {
    hashVal = numberHash(s.charCodeAt(i), hashVal);
  }

  return hashVal;
}

function arrayHash(arr, initialHashVal) {
  initialHashVal = numberHash(104579, initialHashVal);
  return arr.reduce(function (hashVal, item) {
    return doHash(item, hashVal);
  }, initialHashVal);
}

function objectHash(obj, initialHashVal) {
  initialHashVal = numberHash(181387, initialHashVal);
  return Object.keys(obj).sort().reduce(function (hashVal, key) {
    hashVal = stringHash(key, hashVal);
    return doHash(obj[key], hashVal);
  }, initialHashVal);
}

function leftRotate(value, bits) {
  var totalBits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
  // delta + bits = totalBits
  var delta = totalBits - bits; // All ones, expect `delta` zeros aligned to the right

  var mask = ~((1 << delta) - 1); // Join (value left-shifted `bits` bits) with (masked value right-shifted `delta` bits)

  return (value << bits | (mask & value) >>> delta) >>> 0;
}

function fill(dest) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dest.byteLength;
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  for (var i = 0; i < count; i++) {
    dest[index + i] = value;
  }
}

function leftPad(value, length) {
  var _char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

  while (value.length < length) {
    value = _char + value;
  }

  return value;
}

function toHexString(bufferOrValue) {
  var bitsize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;

  if (bufferOrValue instanceof ArrayBuffer) {
    return Array.from(new Uint8Array(bufferOrValue)).map(function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  return leftPad((bufferOrValue >>> 0).toString(16), bitsize / 4);
}
/**
 * A SHA1 implementation that works with strings and does not allocate.
 */

var hash_StringSHA1 = /*#__PURE__*/function () {
  function StringSHA1() {
    _classCallCheck(this, StringSHA1);

    this._h0 = 0x67452301;
    this._h1 = 0xEFCDAB89;
    this._h2 = 0x98BADCFE;
    this._h3 = 0x10325476;
    this._h4 = 0xC3D2E1F0;
    this._buff = new Uint8Array(64
    /* BLOCK_SIZE */
    + 3
    /* to fit any utf-8 */
    );
    this._buffDV = new DataView(this._buff.buffer);
    this._buffLen = 0;
    this._totalLen = 0;
    this._leftoverHighSurrogate = 0;
    this._finished = false;
  }

  _createClass(StringSHA1, [{
    key: "update",
    value: function update(str) {
      var strLen = str.length;

      if (strLen === 0) {
        return;
      }

      var buff = this._buff;
      var buffLen = this._buffLen;
      var leftoverHighSurrogate = this._leftoverHighSurrogate;
      var charCode;
      var offset;

      if (leftoverHighSurrogate !== 0) {
        charCode = leftoverHighSurrogate;
        offset = -1;
        leftoverHighSurrogate = 0;
      } else {
        charCode = str.charCodeAt(0);
        offset = 0;
      }

      while (true) {
        var codePoint = charCode;

        if (isHighSurrogate(charCode)) {
          if (offset + 1 < strLen) {
            var nextCharCode = str.charCodeAt(offset + 1);

            if (isLowSurrogate(nextCharCode)) {
              offset++;
              codePoint = computeCodePoint(charCode, nextCharCode);
            } else {
              // illegal => unicode replacement character
              codePoint = 65533
              /* UNICODE_REPLACEMENT */
              ;
            }
          } else {
            // last character is a surrogate pair
            leftoverHighSurrogate = charCode;
            break;
          }
        } else if (isLowSurrogate(charCode)) {
          // illegal => unicode replacement character
          codePoint = 65533
          /* UNICODE_REPLACEMENT */
          ;
        }

        buffLen = this._push(buff, buffLen, codePoint);
        offset++;

        if (offset < strLen) {
          charCode = str.charCodeAt(offset);
        } else {
          break;
        }
      }

      this._buffLen = buffLen;
      this._leftoverHighSurrogate = leftoverHighSurrogate;
    }
  }, {
    key: "_push",
    value: function _push(buff, buffLen, codePoint) {
      if (codePoint < 0x0080) {
        buff[buffLen++] = codePoint;
      } else if (codePoint < 0x0800) {
        buff[buffLen++] = 0b11000000 | (codePoint & 0b00000000000000000000011111000000) >>> 6;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000000000000000111111) >>> 0;
      } else if (codePoint < 0x10000) {
        buff[buffLen++] = 0b11100000 | (codePoint & 0b00000000000000001111000000000000) >>> 12;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000000000111111000000) >>> 6;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000000000000000111111) >>> 0;
      } else {
        buff[buffLen++] = 0b11110000 | (codePoint & 0b00000000000111000000000000000000) >>> 18;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000111111000000000000) >>> 12;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000000000111111000000) >>> 6;
        buff[buffLen++] = 0b10000000 | (codePoint & 0b00000000000000000000000000111111) >>> 0;
      }

      if (buffLen >= 64
      /* BLOCK_SIZE */
      ) {
          this._step();

          buffLen -= 64
          /* BLOCK_SIZE */
          ;
          this._totalLen += 64
          /* BLOCK_SIZE */
          ; // take last 3 in case of UTF8 overflow

          buff[0] = buff[64
          /* BLOCK_SIZE */
          + 0];
          buff[1] = buff[64
          /* BLOCK_SIZE */
          + 1];
          buff[2] = buff[64
          /* BLOCK_SIZE */
          + 2];
        }

      return buffLen;
    }
  }, {
    key: "digest",
    value: function digest() {
      if (!this._finished) {
        this._finished = true;

        if (this._leftoverHighSurrogate) {
          // illegal => unicode replacement character
          this._leftoverHighSurrogate = 0;
          this._buffLen = this._push(this._buff, this._buffLen, 65533
          /* UNICODE_REPLACEMENT */
          );
        }

        this._totalLen += this._buffLen;

        this._wrapUp();
      }

      return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
    }
  }, {
    key: "_wrapUp",
    value: function _wrapUp() {
      this._buff[this._buffLen++] = 0x80;
      fill(this._buff, this._buffLen);

      if (this._buffLen > 56) {
        this._step();

        fill(this._buff);
      } // this will fit because the mantissa can cover up to 52 bits


      var ml = 8 * this._totalLen;

      this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);

      this._buffDV.setUint32(60, ml % 4294967296, false);

      this._step();
    }
  }, {
    key: "_step",
    value: function _step() {
      var bigBlock32 = StringSHA1._bigBlock32;
      var data = this._buffDV;

      for (var j = 0; j < 64
      /* 16*4 */
      ; j += 4) {
        bigBlock32.setUint32(j, data.getUint32(j, false), false);
      }

      for (var _j = 64; _j < 320
      /* 80*4 */
      ; _j += 4) {
        bigBlock32.setUint32(_j, leftRotate(bigBlock32.getUint32(_j - 12, false) ^ bigBlock32.getUint32(_j - 32, false) ^ bigBlock32.getUint32(_j - 56, false) ^ bigBlock32.getUint32(_j - 64, false), 1), false);
      }

      var a = this._h0;
      var b = this._h1;
      var c = this._h2;
      var d = this._h3;
      var e = this._h4;
      var f, k;
      var temp;

      for (var _j2 = 0; _j2 < 80; _j2++) {
        if (_j2 < 20) {
          f = b & c | ~b & d;
          k = 0x5A827999;
        } else if (_j2 < 40) {
          f = b ^ c ^ d;
          k = 0x6ED9EBA1;
        } else if (_j2 < 60) {
          f = b & c | b & d | c & d;
          k = 0x8F1BBCDC;
        } else {
          f = b ^ c ^ d;
          k = 0xCA62C1D6;
        }

        temp = leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(_j2 * 4, false) & 0xffffffff;
        e = d;
        d = c;
        c = leftRotate(b, 30);
        b = a;
        a = temp;
      }

      this._h0 = this._h0 + a & 0xffffffff;
      this._h1 = this._h1 + b & 0xffffffff;
      this._h2 = this._h2 + c & 0xffffffff;
      this._h3 = this._h3 + d & 0xffffffff;
      this._h4 = this._h4 + e & 0xffffffff;
    }
  }]);

  return StringSHA1;
}();
hash_StringSHA1._bigBlock32 = new DataView(new ArrayBuffer(320)); // 80 * 4 = 320
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/diff/diff.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var diff_StringDiffSequence = /*#__PURE__*/function () {
  function StringDiffSequence(source) {
    _classCallCheck(this, StringDiffSequence);

    this.source = source;
  }

  _createClass(StringDiffSequence, [{
    key: "getElements",
    value: function getElements() {
      var source = this.source;
      var characters = new Int32Array(source.length);

      for (var i = 0, len = source.length; i < len; i++) {
        characters[i] = source.charCodeAt(i);
      }

      return characters;
    }
  }]);

  return StringDiffSequence;
}();
function stringDiff(original, modified, pretty) {
  return new diff_LcsDiff(new diff_StringDiffSequence(original), new diff_StringDiffSequence(modified)).ComputeDiff(pretty).changes;
} //
// The code below has been ported from a C# implementation in VS
//

var diff_Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "Assert",
    value: function Assert(condition, message) {
      if (!condition) {
        throw new Error(message);
      }
    }
  }]);

  return Debug;
}();
var diff_MyArray = /*#__PURE__*/function () {
  function MyArray() {
    _classCallCheck(this, MyArray);
  }

  _createClass(MyArray, null, [{
    key: "Copy",
    value:
    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    function Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
  }, {
    key: "Copy2",
    value: function Copy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
  }]);

  return MyArray;
}();
/**
 * A utility class which helps to create the set of DiffChanges from
 * a difference operation. This class accepts original DiffElements and
 * modified DiffElements that are involved in a particular change. The
 * MarkNextChange() method can be called to mark the separation between
 * distinct changes. At the end, the Changes property can be called to retrieve
 * the constructed changes.
 */

var diff_DiffChangeHelper = /*#__PURE__*/function () {
  /**
   * Constructs a new DiffChangeHelper for the given DiffSequences.
   */
  function DiffChangeHelper() {
    _classCallCheck(this, DiffChangeHelper);

    this.m_changes = [];
    this.m_originalStart = 1073741824
    /* MAX_SAFE_SMALL_INTEGER */
    ;
    this.m_modifiedStart = 1073741824
    /* MAX_SAFE_SMALL_INTEGER */
    ;
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
  }
  /**
   * Marks the beginning of the next change in the set of differences.
   */


  _createClass(DiffChangeHelper, [{
    key: "MarkNextChange",
    value: function MarkNextChange() {
      // Only add to the list if there is something to add
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Add the new change to our list
        this.m_changes.push(new diffChange_DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
      } // Reset for the next change


      this.m_originalCount = 0;
      this.m_modifiedCount = 0;
      this.m_originalStart = 1073741824
      /* MAX_SAFE_SMALL_INTEGER */
      ;
      this.m_modifiedStart = 1073741824
      /* MAX_SAFE_SMALL_INTEGER */
      ;
    }
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */

  }, {
    key: "AddOriginalElement",
    value: function AddOriginalElement(originalIndex, modifiedIndex) {
      // The 'true' start index is the smallest of the ones we've seen
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_originalCount++;
    }
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */

  }, {
    key: "AddModifiedElement",
    value: function AddModifiedElement(originalIndex, modifiedIndex) {
      // The 'true' start index is the smallest of the ones we've seen
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_modifiedCount++;
    }
    /**
     * Retrieves all of the changes marked by the class.
     */

  }, {
    key: "getChanges",
    value: function getChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Finish up on whatever is left
        this.MarkNextChange();
      }

      return this.m_changes;
    }
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */

  }, {
    key: "getReverseChanges",
    value: function getReverseChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Finish up on whatever is left
        this.MarkNextChange();
      }

      this.m_changes.reverse();
      return this.m_changes;
    }
  }]);

  return DiffChangeHelper;
}();
/**
 * An implementation of the difference algorithm described in
 * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
 */


var diff_LcsDiff = /*#__PURE__*/function () {
  /**
   * Constructs the DiffFinder
   */
  function LcsDiff(originalSequence, modifiedSequence) {
    var continueProcessingPredicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, LcsDiff);

    this.ContinueProcessingPredicate = continueProcessingPredicate;
    this._originalSequence = originalSequence;
    this._modifiedSequence = modifiedSequence;

    var _LcsDiff$_getElements = LcsDiff._getElements(originalSequence),
        _LcsDiff$_getElements2 = _slicedToArray(_LcsDiff$_getElements, 3),
        originalStringElements = _LcsDiff$_getElements2[0],
        originalElementsOrHash = _LcsDiff$_getElements2[1],
        originalHasStrings = _LcsDiff$_getElements2[2];

    var _LcsDiff$_getElements3 = LcsDiff._getElements(modifiedSequence),
        _LcsDiff$_getElements4 = _slicedToArray(_LcsDiff$_getElements3, 3),
        modifiedStringElements = _LcsDiff$_getElements4[0],
        modifiedElementsOrHash = _LcsDiff$_getElements4[1],
        modifiedHasStrings = _LcsDiff$_getElements4[2];

    this._hasStrings = originalHasStrings && modifiedHasStrings;
    this._originalStringElements = originalStringElements;
    this._originalElementsOrHash = originalElementsOrHash;
    this._modifiedStringElements = modifiedStringElements;
    this._modifiedElementsOrHash = modifiedElementsOrHash;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
  }

  _createClass(LcsDiff, [{
    key: "ElementsAreEqual",
    value: function ElementsAreEqual(originalIndex, newIndex) {
      if (this._originalElementsOrHash[originalIndex] !== this._modifiedElementsOrHash[newIndex]) {
        return false;
      }

      return this._hasStrings ? this._originalStringElements[originalIndex] === this._modifiedStringElements[newIndex] : true;
    }
  }, {
    key: "ElementsAreStrictEqual",
    value: function ElementsAreStrictEqual(originalIndex, newIndex) {
      if (!this.ElementsAreEqual(originalIndex, newIndex)) {
        return false;
      }

      var originalElement = LcsDiff._getStrictElement(this._originalSequence, originalIndex);

      var modifiedElement = LcsDiff._getStrictElement(this._modifiedSequence, newIndex);

      return originalElement === modifiedElement;
    }
  }, {
    key: "OriginalElementsAreEqual",
    value: function OriginalElementsAreEqual(index1, index2) {
      if (this._originalElementsOrHash[index1] !== this._originalElementsOrHash[index2]) {
        return false;
      }

      return this._hasStrings ? this._originalStringElements[index1] === this._originalStringElements[index2] : true;
    }
  }, {
    key: "ModifiedElementsAreEqual",
    value: function ModifiedElementsAreEqual(index1, index2) {
      if (this._modifiedElementsOrHash[index1] !== this._modifiedElementsOrHash[index2]) {
        return false;
      }

      return this._hasStrings ? this._modifiedStringElements[index1] === this._modifiedStringElements[index2] : true;
    }
  }, {
    key: "ComputeDiff",
    value: function ComputeDiff(pretty) {
      return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, pretty);
    }
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */

  }, {
    key: "_ComputeDiff",
    value: function _ComputeDiff(originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
      var quitEarlyArr = [false];
      var changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);

      if (pretty) {
        // We have to clean up the computed diff to be more intuitive
        // but it turns out this cannot be done correctly until the entire set
        // of diffs have been computed
        changes = this.PrettifyChanges(changes);
      }

      return {
        quitEarly: quitEarlyArr[0],
        changes: changes
      };
    }
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */

  }, {
    key: "ComputeDiffRecursive",
    value: function ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
      quitEarlyArr[0] = false; // Find the start of the differences

      while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
        originalStart++;
        modifiedStart++;
      } // Find the end of the differences


      while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
        originalEnd--;
        modifiedEnd--;
      } // In the special case where we either have all insertions or all deletions or the sequences are identical


      if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
        var changes;

        if (modifiedStart <= modifiedEnd) {
          diff_Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd'); // All insertions

          changes = [new diffChange_DiffChange(originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)];
        } else if (originalStart <= originalEnd) {
          diff_Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd'); // All deletions

          changes = [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, 0)];
        } else {
          diff_Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
          diff_Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd'); // Identical sequences - No differences

          changes = [];
        }

        return changes;
      } // This problem can be solved using the Divide-And-Conquer technique.


      var midOriginalArr = [0];
      var midModifiedArr = [0];
      var result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
      var midOriginal = midOriginalArr[0];
      var midModified = midModifiedArr[0];

      if (result !== null) {
        // Result is not-null when there was enough memory to compute the changes while
        // searching for the recursion point
        return result;
      } else if (!quitEarlyArr[0]) {
        // We can break the problem down recursively by finding the changes in the
        // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
        // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
        // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
        var leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
        var rightChanges = [];

        if (!quitEarlyArr[0]) {
          rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
        } else {
          // We didn't have time to finish the first half, so we don't have time to compute this half.
          // Consider the entire rest of the sequence different.
          rightChanges = [new diffChange_DiffChange(midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)];
        }

        return this.ConcatenateChanges(leftChanges, rightChanges);
      } // If we hit here, we quit early, and so can't return anything meaningful


      return [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)];
    }
  }, {
    key: "WALKTRACE",
    value: function WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
      var forwardChanges = null;
      var reverseChanges = null; // First, walk backward through the forward diagonals history

      var changeHelper = new diff_DiffChangeHelper();
      var diagonalMin = diagonalForwardStart;
      var diagonalMax = diagonalForwardEnd;
      var diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
      var lastOriginalIndex = -1073741824
      /* MIN_SAFE_SMALL_INTEGER */
      ;
      var historyIndex = this.m_forwardHistory.length - 1;

      do {
        // Get the diagonal index from the relative diagonal number
        var diagonal = diagonalRelative + diagonalForwardBase; // Figure out where we came from

        if (diagonal === diagonalMin || diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
          // Vertical line (the element is an insert)
          originalIndex = forwardPoints[diagonal + 1];
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;

          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }

          lastOriginalIndex = originalIndex;
          changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
          diagonalRelative = diagonal + 1 - diagonalForwardBase; //Setup for the next iteration
        } else {
          // Horizontal line (the element is a deletion)
          originalIndex = forwardPoints[diagonal - 1] + 1;
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;

          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }

          lastOriginalIndex = originalIndex - 1;
          changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
          diagonalRelative = diagonal - 1 - diagonalForwardBase; //Setup for the next iteration
        }

        if (historyIndex >= 0) {
          forwardPoints = this.m_forwardHistory[historyIndex];
          diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot

          diagonalMin = 1;
          diagonalMax = forwardPoints.length - 1;
        }
      } while (--historyIndex >= -1); // Ironically, we get the forward changes as the reverse of the
      // order we added them since we technically added them backwards


      forwardChanges = changeHelper.getReverseChanges();

      if (quitEarlyArr[0]) {
        // TODO: Calculate a partial from the reverse diagonals.
        //       For now, just assume everything after the midOriginal/midModified point is a diff
        var originalStartPoint = midOriginalArr[0] + 1;
        var modifiedStartPoint = midModifiedArr[0] + 1;

        if (forwardChanges !== null && forwardChanges.length > 0) {
          var lastForwardChange = forwardChanges[forwardChanges.length - 1];
          originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
          modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
        }

        reverseChanges = [new diffChange_DiffChange(originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)];
      } else {
        // Now walk backward through the reverse diagonals history
        changeHelper = new diff_DiffChangeHelper();
        diagonalMin = diagonalReverseStart;
        diagonalMax = diagonalReverseEnd;
        diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
        lastOriginalIndex = 1073741824
        /* MAX_SAFE_SMALL_INTEGER */
        ;
        historyIndex = deltaIsEven ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;

        do {
          // Get the diagonal index from the relative diagonal number
          var _diagonal = diagonalRelative + diagonalReverseBase; // Figure out where we came from


          if (_diagonal === diagonalMin || _diagonal < diagonalMax && reversePoints[_diagonal - 1] >= reversePoints[_diagonal + 1]) {
            // Horizontal line (the element is a deletion))
            originalIndex = reversePoints[_diagonal + 1] - 1;
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;

            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }

            lastOriginalIndex = originalIndex + 1;
            changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = _diagonal + 1 - diagonalReverseBase; //Setup for the next iteration
          } else {
            // Vertical line (the element is an insertion)
            originalIndex = reversePoints[_diagonal - 1];
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;

            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }

            lastOriginalIndex = originalIndex;
            changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = _diagonal - 1 - diagonalReverseBase; //Setup for the next iteration
          }

          if (historyIndex >= 0) {
            reversePoints = this.m_reverseHistory[historyIndex];
            diagonalReverseBase = reversePoints[0]; //We stored this in the first spot

            diagonalMin = 1;
            diagonalMax = reversePoints.length - 1;
          }
        } while (--historyIndex >= -1); // There are cases where the reverse history will find diffs that
        // are correct, but not intuitive, so we need shift them.


        reverseChanges = changeHelper.getChanges();
      }

      return this.ConcatenateChanges(forwardChanges, reverseChanges);
    }
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */

  }, {
    key: "ComputeRecursionPoint",
    value: function ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
      var originalIndex = 0,
          modifiedIndex = 0;
      var diagonalForwardStart = 0,
          diagonalForwardEnd = 0;
      var diagonalReverseStart = 0,
          diagonalReverseEnd = 0; // To traverse the edit graph and produce the proper LCS, our actual
      // start position is just outside the given boundary

      originalStart--;
      modifiedStart--; // We set these up to make the compiler happy, but they will
      // be replaced before we return with the actual recursion point

      midOriginalArr[0] = 0;
      midModifiedArr[0] = 0; // Clear out the history

      this.m_forwardHistory = [];
      this.m_reverseHistory = []; // Each cell in the two arrays corresponds to a diagonal in the edit graph.
      // The integer value in the cell represents the originalIndex of the furthest
      // reaching point found so far that ends in that diagonal.
      // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.

      var maxDifferences = originalEnd - originalStart + (modifiedEnd - modifiedStart);
      var numDiagonals = maxDifferences + 1;
      var forwardPoints = new Int32Array(numDiagonals);
      var reversePoints = new Int32Array(numDiagonals); // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
      // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)

      var diagonalForwardBase = modifiedEnd - modifiedStart;
      var diagonalReverseBase = originalEnd - originalStart; // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
      //    diagonal number (relative to diagonalForwardBase)
      // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
      //    diagonal number (relative to diagonalReverseBase)

      var diagonalForwardOffset = originalStart - modifiedStart;
      var diagonalReverseOffset = originalEnd - modifiedEnd; // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
      //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
      // The Even/Oddn-ness of this delta is important for determining when we should check for overlap

      var delta = diagonalReverseBase - diagonalForwardBase;
      var deltaIsEven = delta % 2 === 0; // Here we set up the start and end points as the furthest points found so far
      // in both the forward and reverse directions, respectively

      forwardPoints[diagonalForwardBase] = originalStart;
      reversePoints[diagonalReverseBase] = originalEnd; // Remember if we quit early, and thus need to do a best-effort result instead of a real result.

      quitEarlyArr[0] = false; // A couple of points:
      // --With this method, we iterate on the number of differences between the two sequences.
      //   The more differences there actually are, the longer this will take.
      // --Also, as the number of differences increases, we have to search on diagonals further
      //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
      // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
      //   is even and odd diagonals only when numDifferences is odd.

      for (var numDifferences = 1; numDifferences <= maxDifferences / 2 + 1; numDifferences++) {
        var furthestOriginalIndex = 0;
        var furthestModifiedIndex = 0; // Run the algorithm in the forward direction

        diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
        diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);

        for (var diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
          // STEP 1: We extend the furthest reaching point in the present diagonal
          // by looking at the diagonals above and below and picking the one whose point
          // is further away from the start point (originalStart, modifiedStart)
          if (diagonal === diagonalForwardStart || diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
            originalIndex = forwardPoints[diagonal + 1];
          } else {
            originalIndex = forwardPoints[diagonal - 1] + 1;
          }

          modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset; // Save the current originalIndex so we can test for false overlap in step 3

          var tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
          // so long as the elements are equal.

          while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
            originalIndex++;
            modifiedIndex++;
          }

          forwardPoints[diagonal] = originalIndex;

          if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
            furthestOriginalIndex = originalIndex;
            furthestModifiedIndex = modifiedIndex;
          } // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
          // and diagonal is in the range of reverse diagonals computed for numDifferences-1
          // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
          // then check for overlap.


          if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= numDifferences - 1) {
            if (originalIndex >= reversePoints[diagonal]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;

              if (tempOriginalIndex <= reversePoints[diagonal] && 1447
              /* MaxDifferencesHistory */
              > 0 && numDifferences <= 1447
              /* MaxDifferencesHistory */
              + 1) {
                // BINGO! We overlapped, and we have the full trace in memory!
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                // Either false overlap, or we didn't have enough memory for the full trace
                // Just return the recursion point
                return null;
              }
            }
          }
        } // Check to see if we should be quitting early, before moving on to the next iteration.


        var matchLengthOfLongest = (furthestOriginalIndex - originalStart + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;

        if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, matchLengthOfLongest)) {
          // We can't finish, so skip ahead to generating a result from what we have.
          quitEarlyArr[0] = true; // Use the furthest distance we got in the forward direction.

          midOriginalArr[0] = furthestOriginalIndex;
          midModifiedArr[0] = furthestModifiedIndex;

          if (matchLengthOfLongest > 0 && 1447
          /* MaxDifferencesHistory */
          > 0 && numDifferences <= 1447
          /* MaxDifferencesHistory */
          + 1) {
            // Enough of the history is in memory to walk it backwards
            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
          } else {
            // We didn't actually remember enough of the history.
            //Since we are quitting the diff early, we need to shift back the originalStart and modified start
            //back into the boundary limits since we decremented their value above beyond the boundary limit.
            originalStart++;
            modifiedStart++;
            return [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)];
          }
        } // Run the algorithm in the reverse direction


        diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
        diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);

        for (var _diagonal2 = diagonalReverseStart; _diagonal2 <= diagonalReverseEnd; _diagonal2 += 2) {
          // STEP 1: We extend the furthest reaching point in the present diagonal
          // by looking at the diagonals above and below and picking the one whose point
          // is further away from the start point (originalEnd, modifiedEnd)
          if (_diagonal2 === diagonalReverseStart || _diagonal2 < diagonalReverseEnd && reversePoints[_diagonal2 - 1] >= reversePoints[_diagonal2 + 1]) {
            originalIndex = reversePoints[_diagonal2 + 1] - 1;
          } else {
            originalIndex = reversePoints[_diagonal2 - 1];
          }

          modifiedIndex = originalIndex - (_diagonal2 - diagonalReverseBase) - diagonalReverseOffset; // Save the current originalIndex so we can test for false overlap

          var _tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
          // as long as the elements are equal.

          while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
            originalIndex--;
            modifiedIndex--;
          }

          reversePoints[_diagonal2] = originalIndex; // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
          // and diagonal is in the range of forward diagonals computed for numDifferences
          // then check for overlap.

          if (deltaIsEven && Math.abs(_diagonal2 - diagonalForwardBase) <= numDifferences) {
            if (originalIndex <= forwardPoints[_diagonal2]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;

              if (_tempOriginalIndex >= forwardPoints[_diagonal2] && 1447
              /* MaxDifferencesHistory */
              > 0 && numDifferences <= 1447
              /* MaxDifferencesHistory */
              + 1) {
                // BINGO! We overlapped, and we have the full trace in memory!
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                // Either false overlap, or we didn't have enough memory for the full trace
                // Just return the recursion point
                return null;
              }
            }
          }
        } // Save current vectors to history before the next iteration


        if (numDifferences <= 1447
        /* MaxDifferencesHistory */
        ) {
            // We are allocating space for one extra int, which we fill with
            // the index of the diagonal base index
            var temp = new Int32Array(diagonalForwardEnd - diagonalForwardStart + 2);
            temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
            diff_MyArray.Copy2(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
            this.m_forwardHistory.push(temp);
            temp = new Int32Array(diagonalReverseEnd - diagonalReverseStart + 2);
            temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
            diff_MyArray.Copy2(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
            this.m_reverseHistory.push(temp);
          }
      } // If we got here, then we have the full trace in history. We just have to convert it to a change list
      // NOTE: This part is a bit messy


      return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    }
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */

  }, {
    key: "PrettifyChanges",
    value: function PrettifyChanges(changes) {
      // Shift all the changes down first
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        var originalStop = i < changes.length - 1 ? changes[i + 1].originalStart : this._originalElementsOrHash.length;
        var modifiedStop = i < changes.length - 1 ? changes[i + 1].modifiedStart : this._modifiedElementsOrHash.length;
        var checkOriginal = change.originalLength > 0;
        var checkModified = change.modifiedLength > 0;

        while (change.originalStart + change.originalLength < originalStop && change.modifiedStart + change.modifiedLength < modifiedStop && (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) && (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
          var startStrictEqual = this.ElementsAreStrictEqual(change.originalStart, change.modifiedStart);
          var endStrictEqual = this.ElementsAreStrictEqual(change.originalStart + change.originalLength, change.modifiedStart + change.modifiedLength);

          if (endStrictEqual && !startStrictEqual) {
            // moving the change down would create an equal change, but the elements are not strict equal
            break;
          }

          change.originalStart++;
          change.modifiedStart++;
        }

        var mergedChangeArr = [null];

        if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
          changes[i] = mergedChangeArr[0];
          changes.splice(i + 1, 1);
          i--;
          continue;
        }
      } // Shift changes back up until we hit empty or whitespace-only lines


      for (var _i = changes.length - 1; _i >= 0; _i--) {
        var _change = changes[_i];
        var _originalStop = 0;
        var _modifiedStop = 0;

        if (_i > 0) {
          var prevChange = changes[_i - 1];
          _originalStop = prevChange.originalStart + prevChange.originalLength;
          _modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
        }

        var _checkOriginal = _change.originalLength > 0;

        var _checkModified = _change.modifiedLength > 0;

        var bestDelta = 0;

        var bestScore = this._boundaryScore(_change.originalStart, _change.originalLength, _change.modifiedStart, _change.modifiedLength);

        for (var delta = 1;; delta++) {
          var originalStart = _change.originalStart - delta;
          var modifiedStart = _change.modifiedStart - delta;

          if (originalStart < _originalStop || modifiedStart < _modifiedStop) {
            break;
          }

          if (_checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + _change.originalLength)) {
            break;
          }

          if (_checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + _change.modifiedLength)) {
            break;
          }

          var touchingPreviousChange = originalStart === _originalStop && modifiedStart === _modifiedStop;

          var score = (touchingPreviousChange ? 5 : 0) + this._boundaryScore(originalStart, _change.originalLength, modifiedStart, _change.modifiedLength);

          if (score > bestScore) {
            bestScore = score;
            bestDelta = delta;
          }
        }

        _change.originalStart -= bestDelta;
        _change.modifiedStart -= bestDelta;
        var _mergedChangeArr = [null];

        if (_i > 0 && this.ChangesOverlap(changes[_i - 1], changes[_i], _mergedChangeArr)) {
          changes[_i - 1] = _mergedChangeArr[0];
          changes.splice(_i, 1);
          _i++;
          continue;
        }
      } // There could be multiple longest common substrings.
      // Give preference to the ones containing longer lines


      if (this._hasStrings) {
        for (var _i2 = 1, len = changes.length; _i2 < len; _i2++) {
          var aChange = changes[_i2 - 1];
          var bChange = changes[_i2];
          var matchedLength = bChange.originalStart - aChange.originalStart - aChange.originalLength;
          var aOriginalStart = aChange.originalStart;
          var bOriginalEnd = bChange.originalStart + bChange.originalLength;
          var abOriginalLength = bOriginalEnd - aOriginalStart;
          var aModifiedStart = aChange.modifiedStart;
          var bModifiedEnd = bChange.modifiedStart + bChange.modifiedLength;
          var abModifiedLength = bModifiedEnd - aModifiedStart; // Avoid wasting a lot of time with these searches

          if (matchedLength < 5 && abOriginalLength < 20 && abModifiedLength < 20) {
            var t = this._findBetterContiguousSequence(aOriginalStart, abOriginalLength, aModifiedStart, abModifiedLength, matchedLength);

            if (t) {
              var _t = _slicedToArray(t, 2),
                  originalMatchStart = _t[0],
                  modifiedMatchStart = _t[1];

              if (originalMatchStart !== aChange.originalStart + aChange.originalLength || modifiedMatchStart !== aChange.modifiedStart + aChange.modifiedLength) {
                // switch to another sequence that has a better score
                aChange.originalLength = originalMatchStart - aChange.originalStart;
                aChange.modifiedLength = modifiedMatchStart - aChange.modifiedStart;
                bChange.originalStart = originalMatchStart + matchedLength;
                bChange.modifiedStart = modifiedMatchStart + matchedLength;
                bChange.originalLength = bOriginalEnd - bChange.originalStart;
                bChange.modifiedLength = bModifiedEnd - bChange.modifiedStart;
              }
            }
          }
        }
      }

      return changes;
    }
  }, {
    key: "_findBetterContiguousSequence",
    value: function _findBetterContiguousSequence(originalStart, originalLength, modifiedStart, modifiedLength, desiredLength) {
      if (originalLength < desiredLength || modifiedLength < desiredLength) {
        return null;
      }

      var originalMax = originalStart + originalLength - desiredLength + 1;
      var modifiedMax = modifiedStart + modifiedLength - desiredLength + 1;
      var bestScore = 0;
      var bestOriginalStart = 0;
      var bestModifiedStart = 0;

      for (var i = originalStart; i < originalMax; i++) {
        for (var j = modifiedStart; j < modifiedMax; j++) {
          var score = this._contiguousSequenceScore(i, j, desiredLength);

          if (score > 0 && score > bestScore) {
            bestScore = score;
            bestOriginalStart = i;
            bestModifiedStart = j;
          }
        }
      }

      if (bestScore > 0) {
        return [bestOriginalStart, bestModifiedStart];
      }

      return null;
    }
  }, {
    key: "_contiguousSequenceScore",
    value: function _contiguousSequenceScore(originalStart, modifiedStart, length) {
      var score = 0;

      for (var l = 0; l < length; l++) {
        if (!this.ElementsAreEqual(originalStart + l, modifiedStart + l)) {
          return 0;
        }

        score += this._originalStringElements[originalStart + l].length;
      }

      return score;
    }
  }, {
    key: "_OriginalIsBoundary",
    value: function _OriginalIsBoundary(index) {
      if (index <= 0 || index >= this._originalElementsOrHash.length - 1) {
        return true;
      }

      return this._hasStrings && /^\s*$/.test(this._originalStringElements[index]);
    }
  }, {
    key: "_OriginalRegionIsBoundary",
    value: function _OriginalRegionIsBoundary(originalStart, originalLength) {
      if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
        return true;
      }

      if (originalLength > 0) {
        var originalEnd = originalStart + originalLength;

        if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_ModifiedIsBoundary",
    value: function _ModifiedIsBoundary(index) {
      if (index <= 0 || index >= this._modifiedElementsOrHash.length - 1) {
        return true;
      }

      return this._hasStrings && /^\s*$/.test(this._modifiedStringElements[index]);
    }
  }, {
    key: "_ModifiedRegionIsBoundary",
    value: function _ModifiedRegionIsBoundary(modifiedStart, modifiedLength) {
      if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
        return true;
      }

      if (modifiedLength > 0) {
        var modifiedEnd = modifiedStart + modifiedLength;

        if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_boundaryScore",
    value: function _boundaryScore(originalStart, originalLength, modifiedStart, modifiedLength) {
      var originalScore = this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0;
      var modifiedScore = this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0;
      return originalScore + modifiedScore;
    }
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */

  }, {
    key: "ConcatenateChanges",
    value: function ConcatenateChanges(left, right) {
      var mergedChangeArr = [];

      if (left.length === 0 || right.length === 0) {
        return right.length > 0 ? right : left;
      } else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
        // Since we break the problem down recursively, it is possible that we
        // might recurse in the middle of a change thereby splitting it into
        // two changes. Here in the combining stage, we detect and fuse those
        // changes back together
        var result = new Array(left.length + right.length - 1);
        diff_MyArray.Copy(left, 0, result, 0, left.length - 1);
        result[left.length - 1] = mergedChangeArr[0];
        diff_MyArray.Copy(right, 1, result, left.length, right.length - 1);
        return result;
      } else {
        var _result = new Array(left.length + right.length);

        diff_MyArray.Copy(left, 0, _result, 0, left.length);
        diff_MyArray.Copy(right, 0, _result, left.length, right.length);
        return _result;
      }
    }
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */

  }, {
    key: "ChangesOverlap",
    value: function ChangesOverlap(left, right, mergedChangeArr) {
      diff_Debug.Assert(left.originalStart <= right.originalStart, 'Left change is not less than or equal to right change');
      diff_Debug.Assert(left.modifiedStart <= right.modifiedStart, 'Left change is not less than or equal to right change');

      if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
        var originalStart = left.originalStart;
        var originalLength = left.originalLength;
        var modifiedStart = left.modifiedStart;
        var modifiedLength = left.modifiedLength;

        if (left.originalStart + left.originalLength >= right.originalStart) {
          originalLength = right.originalStart + right.originalLength - left.originalStart;
        }

        if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
          modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
        }

        mergedChangeArr[0] = new diffChange_DiffChange(originalStart, originalLength, modifiedStart, modifiedLength);
        return true;
      } else {
        mergedChangeArr[0] = null;
        return false;
      }
    }
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */

  }, {
    key: "ClipDiagonalBound",
    value: function ClipDiagonalBound(diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
      if (diagonal >= 0 && diagonal < numDiagonals) {
        // Nothing to clip, its in range
        return diagonal;
      } // diagonalsBelow: The number of diagonals below the reference diagonal
      // diagonalsAbove: The number of diagonals above the reference diagonal


      var diagonalsBelow = diagonalBaseIndex;
      var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
      var diffEven = numDifferences % 2 === 0;

      if (diagonal < 0) {
        var lowerBoundEven = diagonalsBelow % 2 === 0;
        return diffEven === lowerBoundEven ? 0 : 1;
      } else {
        var upperBoundEven = diagonalsAbove % 2 === 0;
        return diffEven === upperBoundEven ? numDiagonals - 1 : numDiagonals - 2;
      }
    }
  }], [{
    key: "_isStringArray",
    value: function _isStringArray(arr) {
      return arr.length > 0 && typeof arr[0] === 'string';
    }
  }, {
    key: "_getElements",
    value: function _getElements(sequence) {
      var elements = sequence.getElements();

      if (LcsDiff._isStringArray(elements)) {
        var hashes = new Int32Array(elements.length);

        for (var i = 0, len = elements.length; i < len; i++) {
          hashes[i] = stringHash(elements[i], 0);
        }

        return [elements, hashes, true];
      }

      if (elements instanceof Int32Array) {
        return [[], elements, false];
      }

      return [[], new Int32Array(elements), false];
    }
  }, {
    key: "_getStrictElement",
    value: function _getStrictElement(sequence, index) {
      if (typeof sequence.getStrictElement === 'function') {
        return sequence.getStrictElement(index);
      }

      return null;
    }
  }]);

  return LcsDiff;
}();
// EXTERNAL MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/process.js
var process = __webpack_require__("NqAY");

// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/path.js





/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// NOTE: VSCode's copy of nodejs path library to be usable in common (non-node) namespace
// Copied from: https://github.com/nodejs/node/blob/v14.16.0/lib/path.js

/**
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var CHAR_UPPERCASE_A = 65;
/* A */

var CHAR_LOWERCASE_A = 97;
/* a */

var CHAR_UPPERCASE_Z = 90;
/* Z */

var CHAR_LOWERCASE_Z = 122;
/* z */

var CHAR_DOT = 46;
/* . */

var CHAR_FORWARD_SLASH = 47;
/* / */

var CHAR_BACKWARD_SLASH = 92;
/* \ */

var CHAR_COLON = 58;
/* : */

var CHAR_QUESTION_MARK = 63;
/* ? */

var path_ErrorInvalidArgType = /*#__PURE__*/function (_Error) {
  _inherits(ErrorInvalidArgType, _Error);

  var _super = _createSuper(ErrorInvalidArgType);

  function ErrorInvalidArgType(name, expected, actual) {
    var _this;

    _classCallCheck(this, ErrorInvalidArgType);

    // determiner: 'must be' or 'must not be'
    var determiner;

    if (typeof expected === 'string' && expected.indexOf('not ') === 0) {
      determiner = 'must not be';
      expected = expected.replace(/^not /, '');
    } else {
      determiner = 'must be';
    }

    var type = name.indexOf('.') !== -1 ? 'property' : 'argument';
    var msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " of type ").concat(expected);
    msg += ". Received type ".concat(typeof actual);
    _this = _super.call(this, msg);
    _this.code = 'ERR_INVALID_ARG_TYPE';
    return _this;
  }

  return ErrorInvalidArgType;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));

function validateString(value, name) {
  if (typeof value !== 'string') {
    throw new path_ErrorInvalidArgType(name, 'string', value);
  }
}

function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}

function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}

function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
} // Resolves . and .. elements in a path with directory names


function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code = 0;

  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i);
    } else if (isPathSeparator(code)) {
      break;
    } else {
      code = CHAR_FORWARD_SLASH;
    }

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) {// NOOP
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf(separator);

            if (lastSlashIndex === -1) {
              res = '';
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }

            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }

        if (allowAboveRoot) {
          res += res.length > 0 ? "".concat(separator, "..") : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += "".concat(separator).concat(path.slice(lastSlash + 1, i));
        } else {
          res = path.slice(lastSlash + 1, i);
        }

        lastSegmentLength = i - lastSlash - 1;
      }

      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }

  return res;
}

function _format(sep, pathObject) {
  if (pathObject === null || typeof pathObject !== 'object') {
    throw new path_ErrorInvalidArgType('pathObject', 'Object', pathObject);
  }

  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || "".concat(pathObject.name || '').concat(pathObject.ext || '');

  if (!dir) {
    return base;
  }

  return dir === pathObject.root ? "".concat(dir).concat(base) : "".concat(dir).concat(sep).concat(base);
}

var win32 = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedDevice = '';
    var resolvedTail = '';
    var resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1; i--) {
      var path = void 0;

      if (i >= 0) {
        path = i < 0 || arguments.length <= i ? undefined : arguments[i];
        validateString(path, 'path'); // Skip empty entries

        if (path.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        path = process["a" /* cwd */]();
      } else {
        // Windows has the concept of drive-specific current working
        // directories. If we've resolved a drive letter but not yet an
        // absolute path, get cwd for that drive, or the process cwd if
        // the drive cwd is not available. We're sure the device is not
        // a UNC path at this points, because UNC paths are always absolute.
        path = process["b" /* env */]["=".concat(resolvedDevice)] || process["a" /* cwd */](); // Verify that a cwd was found and that it actually points
        // to our drive. If not, default to the drive's root.

        if (path === undefined || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          path = "".concat(resolvedDevice, "\\");
        }
      }

      var len = path.length;
      var rootEnd = 0;
      var device = '';
      var isAbsolute = false;
      var code = path.charCodeAt(0); // Try to match a root

      if (len === 1) {
        if (isPathSeparator(code)) {
          // `path` contains just a path separator
          rootEnd = 1;
          isAbsolute = true;
        }
      } else if (isPathSeparator(code)) {
        // Possible UNC root
        // If we started with a separator, we know we at least have an
        // absolute path of some kind (UNC or otherwise)
        isAbsolute = true;

        if (isPathSeparator(path.charCodeAt(1))) {
          // Matched double path separator at beginning
          var j = 2;
          var last = j; // Match 1 or more non-path separators

          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            var firstPart = path.slice(last, j); // Matched!

            last = j; // Match 1 or more path separators

            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j < len && j !== last) {
              // Matched!
              last = j; // Match 1 or more non-path separators

              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }

              if (j === len || j !== last) {
                // We matched a UNC root
                device = "\\\\".concat(firstPart, "\\").concat(path.slice(last, j));
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        // Possible device root
        device = path.slice(0, 2);
        rootEnd = 2;

        if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
          // Treat separator following drive name as an absolute path
          // indicator
          isAbsolute = true;
          rootEnd = 3;
        }
      }

      if (device.length > 0) {
        if (resolvedDevice.length > 0) {
          if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            // This path points to another device so it is not applicable
            continue;
          }
        } else {
          resolvedDevice = device;
        }
      }

      if (resolvedAbsolute) {
        if (resolvedDevice.length > 0) {
          break;
        }
      } else {
        resolvedTail = "".concat(path.slice(rootEnd), "\\").concat(resolvedTail);
        resolvedAbsolute = isAbsolute;

        if (isAbsolute && resolvedDevice.length > 0) {
          break;
        }
      }
    } // At this point the path should be resolved to a full absolute path,
    // but handle relative paths to be safe (might happen when process.cwd()
    // fails)
    // Normalize the tail path


    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isPathSeparator);
    return resolvedAbsolute ? "".concat(resolvedDevice, "\\").concat(resolvedTail) : "".concat(resolvedDevice).concat(resolvedTail) || '.';
  },
  normalize: function normalize(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return '.';
    }

    var rootEnd = 0;
    var device;
    var isAbsolute = false;
    var code = path.charCodeAt(0); // Try to match a root

    if (len === 1) {
      // `path` contains just a single char, exit early to avoid
      // unnecessary work
      return isPosixPathSeparator(code) ? '\\' : path;
    }

    if (isPathSeparator(code)) {
      // Possible UNC root
      // If we started with a separator, we know we at least have an absolute
      // path of some kind (UNC or otherwise)
      isAbsolute = true;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          var firstPart = path.slice(last, j); // Matched!

          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              // Return the normalized version of the UNC root since there
              // is nothing left to process
              return "\\\\".concat(firstPart, "\\").concat(path.slice(last), "\\");
            }

            if (j !== last) {
              // We matched a UNC root with leftovers
              device = "\\\\".concat(firstPart, "\\").concat(path.slice(last, j));
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      device = path.slice(0, 2);
      rootEnd = 2;

      if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
        // Treat separator following drive name as an absolute path
        // indicator
        isAbsolute = true;
        rootEnd = 3;
      }
    }

    var tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, '\\', isPathSeparator) : '';

    if (tail.length === 0 && !isAbsolute) {
      tail = '.';
    }

    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
      tail += '\\';
    }

    if (device === undefined) {
      return isAbsolute ? "\\".concat(tail) : tail;
    }

    return isAbsolute ? "".concat(device, "\\").concat(tail) : "".concat(device).concat(tail);
  },
  isAbsolute: function isAbsolute(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return false;
    }

    var code = path.charCodeAt(0);
    return isPathSeparator(code) || // Possible device root
    len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
  },
  join: function join() {
    if (arguments.length === 0) {
      return '.';
    }

    var joined;
    var firstPart;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
      validateString(arg, 'path');

      if (arg.length > 0) {
        if (joined === undefined) {
          joined = firstPart = arg;
        } else {
          joined += "\\".concat(arg);
        }
      }
    }

    if (joined === undefined) {
      return '.';
    } // Make sure that the joined path doesn't start with two slashes, because
    // normalize() will mistake it for a UNC path then.
    //
    // This step is skipped when it is very clear that the user actually
    // intended to point at a UNC path. This is assumed when the first
    // non-empty string arguments starts with exactly two slashes followed by
    // at least one more non-slash character.
    //
    // Note that for normalize() to treat a path as a UNC path it needs to
    // have at least 2 components, so we don't filter for that here.
    // This means that the user can use join to construct UNC paths from
    // a server name and a share name; for example:
    //   path.join('//server', 'share') -> '\\\\server\\share\\')


    var needsReplace = true;
    var slashCount = 0;

    if (typeof firstPart === 'string' && isPathSeparator(firstPart.charCodeAt(0))) {
      ++slashCount;
      var firstLen = firstPart.length;

      if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;

        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) {
            ++slashCount;
          } else {
            // We matched a UNC path in the first part
            needsReplace = false;
          }
        }
      }
    }

    if (needsReplace) {
      // Find any more consecutive slashes we need to replace
      while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
        slashCount++;
      } // Replace the slashes if needed


      if (slashCount >= 2) {
        joined = "\\".concat(joined.slice(slashCount));
      }
    }

    return win32.normalize(joined);
  },
  // It will solve the relative path from `from` to `to`, for instance:
  //  from = 'C:\\orandea\\test\\aaa'
  //  to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  relative: function relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to) {
      return '';
    }

    var fromOrig = win32.resolve(from);
    var toOrig = win32.resolve(to);

    if (fromOrig === toOrig) {
      return '';
    }

    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();

    if (from === to) {
      return '';
    } // Trim any leading backslashes


    var fromStart = 0;

    while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
      fromStart++;
    } // Trim trailing backslashes (applicable to UNC paths only)


    var fromEnd = from.length;

    while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
      fromEnd--;
    }

    var fromLen = fromEnd - fromStart; // Trim any leading backslashes

    var toStart = 0;

    while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      toStart++;
    } // Trim trailing backslashes (applicable to UNC paths only)


    var toEnd = to.length;

    while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
      toEnd--;
    }

    var toLen = toEnd - toStart; // Compare paths to find the longest common path from root

    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i < length; i++) {
      var fromCode = from.charCodeAt(fromStart + i);

      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i;
      }
    } // We found a mismatch before the first common path separator was seen, so
    // return the original `to`.


    if (i !== length) {
      if (lastCommonSep === -1) {
        return toOrig;
      }
    } else {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `from` is the exact base path for `to`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
          return toOrig.slice(toStart + i + 1);
        }

        if (i === 2) {
          // We get here if `from` is the device root.
          // For example: from='C:\\'; to='C:\\foo'
          return toOrig.slice(toStart + i);
        }
      }

      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `to` is the exact base path for `from`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo'
          lastCommonSep = i;
        } else if (i === 2) {
          // We get here if `to` is the device root.
          // For example: from='C:\\foo\\bar'; to='C:\\'
          lastCommonSep = 3;
        }
      }

      if (lastCommonSep === -1) {
        lastCommonSep = 0;
      }
    }

    var out = ''; // Generate the relative path based on the path difference between `to` and
    // `from`

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
        out += out.length === 0 ? '..' : '\\..';
      }
    }

    toStart += lastCommonSep; // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts

    if (out.length > 0) {
      return "".concat(out).concat(toOrig.slice(toStart, toEnd));
    }

    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      ++toStart;
    }

    return toOrig.slice(toStart, toEnd);
  },
  toNamespacedPath: function toNamespacedPath(path) {
    // Note: this will *probably* throw somewhere.
    if (typeof path !== 'string') {
      return path;
    }

    if (path.length === 0) {
      return '';
    }

    var resolvedPath = win32.resolve(path);

    if (resolvedPath.length <= 2) {
      return path;
    }

    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      // Possible UNC root
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        var code = resolvedPath.charCodeAt(2);

        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          // Matched non-long UNC root, convert the path to a long UNC path
          return "\\\\?\\UNC\\".concat(resolvedPath.slice(2));
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
      // Matched device root, convert the path to a long UNC path
      return "\\\\?\\".concat(resolvedPath);
    }

    return path;
  },
  dirname: function dirname(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return '.';
    }

    var rootEnd = -1;
    var offset = 0;
    var code = path.charCodeAt(0);

    if (len === 1) {
      // `path` contains just a path separator, exit early to avoid
      // unnecessary work or a dot.
      return isPathSeparator(code) ? path : '.';
    } // Try to match a root


    if (isPathSeparator(code)) {
      // Possible UNC root
      rootEnd = offset = 1;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          // Matched!
          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              return path;
            }

            if (j !== last) {
              // We matched a UNC root with leftovers
              // Offset by 1 to include the separator after the UNC root to
              // treat it as a "normal root" on top of a (UNC) root
              rootEnd = offset = j + 1;
            }
          }
        }
      } // Possible device root

    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }

    var end = -1;
    var matchedSlash = true;

    for (var i = len - 1; i >= offset; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) {
      if (rootEnd === -1) {
        return '.';
      }

      end = rootEnd;
    }

    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined) {
      validateString(ext, 'ext');
    }

    validateString(path, 'path');
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i; // Check for a drive letter prefix so as not to mistake the following
    // path separator as an extra separator at the end of the path that can be
    // disregarded

    if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext === path) {
        return '';
      }

      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= start; --i) {
        var code = path.charCodeAt(i);

        if (isPathSeparator(code)) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }

      return path.slice(start, end);
    }

    for (i = path.length - 1; i >= start; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1) {
      return '';
    }

    return path.slice(start, end);
  },
  extname: function extname(path) {
    validateString(path, 'path');
    var start = 0;
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Check for a drive letter prefix so as not to mistake the following
    // path separator as an extra separator at the end of the path that can be
    // disregarded

    if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
      start = startPart = 2;
    }

    for (var i = path.length - 1; i >= start; --i) {
      var code = path.charCodeAt(i);

      if (isPathSeparator(code)) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: _format.bind(null, '\\'),
  parse: function parse(path) {
    validateString(path, 'path');
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };

    if (path.length === 0) {
      return ret;
    }

    var len = path.length;
    var rootEnd = 0;
    var code = path.charCodeAt(0);

    if (len === 1) {
      if (isPathSeparator(code)) {
        // `path` contains just a path separator, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = path;
        return ret;
      }

      ret.base = ret.name = path;
      return ret;
    } // Try to match a root


    if (isPathSeparator(code)) {
      // Possible UNC root
      rootEnd = 1;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          // Matched!
          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              rootEnd = j;
            } else if (j !== last) {
              // We matched a UNC root with leftovers
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      if (len <= 2) {
        // `path` contains just a drive root, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = path;
        return ret;
      }

      rootEnd = 2;

      if (isPathSeparator(path.charCodeAt(2))) {
        if (len === 3) {
          // `path` contains just a drive root, exit early to avoid
          // unnecessary work
          ret.root = ret.dir = path;
          return ret;
        }

        rootEnd = 3;
      }
    }

    if (rootEnd > 0) {
      ret.root = path.slice(0, rootEnd);
    }

    var startDot = -1;
    var startPart = rootEnd;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Get non-dir info

    for (; i >= rootEnd; --i) {
      code = path.charCodeAt(i);

      if (isPathSeparator(code)) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(startPart, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
      }
    } // If the directory is the root, use the entire root as the `dir` including
    // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
    // trailing slash (`C:\abc\def` -> `C:\abc`).


    if (startPart > 0 && startPart !== rootEnd) {
      ret.dir = path.slice(0, startPart - 1);
    } else {
      ret.dir = ret.root;
    }

    return ret;
  },
  sep: '\\',
  delimiter: ';',
  win32: null,
  posix: null
};
var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? i < 0 || arguments.length <= i ? undefined : arguments[i] : process["a" /* cwd */]();
      validateString(path, 'path'); // Skip empty entries

      if (path.length === 0) {
        continue;
      }

      resolvedPath = "".concat(path, "/").concat(resolvedPath);
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    } // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path


    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator);

    if (resolvedAbsolute) {
      return "/".concat(resolvedPath);
    }

    return resolvedPath.length > 0 ? resolvedPath : '.';
  },
  normalize: function normalize(path) {
    validateString(path, 'path');

    if (path.length === 0) {
      return '.';
    }

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH; // Normalize the path

    path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator);

    if (path.length === 0) {
      if (isAbsolute) {
        return '/';
      }

      return trailingSeparator ? './' : '.';
    }

    if (trailingSeparator) {
      path += '/';
    }

    return isAbsolute ? "/".concat(path) : path;
  },
  isAbsolute: function isAbsolute(path) {
    validateString(path, 'path');
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },
  join: function join() {
    if (arguments.length === 0) {
      return '.';
    }

    var joined;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
      validateString(arg, 'path');

      if (arg.length > 0) {
        if (joined === undefined) {
          joined = arg;
        } else {
          joined += "/".concat(arg);
        }
      }
    }

    if (joined === undefined) {
      return '.';
    }

    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to) {
      return '';
    } // Trim leading forward slashes.


    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) {
      return '';
    }

    var fromStart = 1;
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    var toLen = to.length - toStart; // Compare paths to find the longest common path from root

    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i < length; i++) {
      var fromCode = from.charCodeAt(fromStart + i);

      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      }
    }

    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `from` is the exact base path for `to`.
          // For example: from='/foo/bar'; to='/foo/bar/baz'
          return to.slice(toStart + i + 1);
        }

        if (i === 0) {
          // We get here if `from` is the root
          // For example: from='/'; to='/foo'
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `to` is the exact base path for `from`.
          // For example: from='/foo/bar/baz'; to='/foo/bar'
          lastCommonSep = i;
        } else if (i === 0) {
          // We get here if `to` is the root.
          // For example: from='/foo/bar'; to='/'
          lastCommonSep = 0;
        }
      }
    }

    var out = ''; // Generate the relative path based on the path difference between `to`
    // and `from`.

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? '..' : '/..';
      }
    } // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts.


    return "".concat(out).concat(to.slice(toStart + lastCommonSep));
  },
  toNamespacedPath: function toNamespacedPath(path) {
    // Non-op on posix systems
    return path;
  },
  dirname: function dirname(path) {
    validateString(path, 'path');

    if (path.length === 0) {
      return '.';
    }

    var hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var end = -1;
    var matchedSlash = true;

    for (var i = path.length - 1; i >= 1; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) {
      return hasRoot ? '/' : '.';
    }

    if (hasRoot && end === 1) {
      return '//';
    }

    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined) {
      validateString(ext, 'ext');
    }

    validateString(path, 'path');
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext === path) {
        return '';
      }

      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);

        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }

      return path.slice(start, end);
    }

    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1) {
      return '';
    }

    return path.slice(start, end);
  },
  extname: function extname(path) {
    validateString(path, 'path');
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0;

    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);

      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: _format.bind(null, '/'),
  parse: function parse(path) {
    validateString(path, 'path');
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };

    if (path.length === 0) {
      return ret;
    }

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var start;

    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }

    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Get non-dir info

    for (; i >= start; --i) {
      var code = path.charCodeAt(i);

      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      var _start = startPart === 0 && isAbsolute ? 1 : startPart;

      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(_start, end);
      } else {
        ret.name = path.slice(_start, startDot);
        ret.base = path.slice(_start, end);
        ret.ext = path.slice(startDot, end);
      }
    }

    if (startPart > 0) {
      ret.dir = path.slice(0, startPart - 1);
    } else if (isAbsolute) {
      ret.dir = '/';
    }

    return ret;
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};
posix.win32 = win32.win32 = win32;
posix.posix = win32.posix = posix;
var normalize = process["c" /* platform */] === 'win32' ? win32.normalize : posix.normalize;
var path_resolve = process["c" /* platform */] === 'win32' ? win32.resolve : posix.resolve;
var relative = process["c" /* platform */] === 'win32' ? win32.relative : posix.relative;
var dirname = process["c" /* platform */] === 'win32' ? win32.dirname : posix.dirname;
var path_basename = process["c" /* platform */] === 'win32' ? win32.basename : posix.basename;
var extname = process["c" /* platform */] === 'win32' ? win32.extname : posix.extname;
var path_sep = process["c" /* platform */] === 'win32' ? win32.sep : posix.sep;
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/uri.js






var _encodeTable;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;

function _validateUri(ret, _strict) {
  // scheme, must be set
  if (!ret.scheme && _strict) {
    throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"".concat(ret.authority, "\", path: \"").concat(ret.path, "\", query: \"").concat(ret.query, "\", fragment: \"").concat(ret.fragment, "\"}"));
  } // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
  // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )


  if (ret.scheme && !_schemePattern.test(ret.scheme)) {
    throw new Error('[UriError]: Scheme contains illegal characters.');
  } // path, http://tools.ietf.org/html/rfc3986#section-3.3
  // If a URI contains an authority component, then the path component
  // must either be empty or begin with a slash ("/") character.  If a URI
  // does not contain an authority component, then the path cannot begin
  // with two slash characters ("//").


  if (ret.path) {
    if (ret.authority) {
      if (!_singleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
    } else {
      if (_doubleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
  }
} // for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning


function _schemeFix(scheme, _strict) {
  if (!scheme && !_strict) {
    return 'file';
  }

  return scheme;
} // implements a bit of https://tools.ietf.org/html/rfc3986#section-5


function _referenceResolution(scheme, path) {
  // the slash-character is our 'default base' as we don't
  // support constructing URIs relative to other URIs. This
  // also means that we alter and potentially break paths.
  // see https://tools.ietf.org/html/rfc3986#section-5.1.4
  switch (scheme) {
    case 'https':
    case 'http':
    case 'file':
      if (!path) {
        path = _slash;
      } else if (path[0] !== _slash) {
        path = _slash + path;
      }

      break;
  }

  return path;
}

var uri_empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 * ```txt
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 * ```
 */

var uri_URI = /*#__PURE__*/function () {
  /**
   * @internal
   */
  function URI(schemeOrData, authority, path, query, fragment) {
    var _strict = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, URI);

    if (typeof schemeOrData === 'object') {
      this.scheme = schemeOrData.scheme || uri_empty;
      this.authority = schemeOrData.authority || uri_empty;
      this.path = schemeOrData.path || uri_empty;
      this.query = schemeOrData.query || uri_empty;
      this.fragment = schemeOrData.fragment || uri_empty; // no validation because it's this URI
      // that creates uri components.
      // _validateUri(this);
    } else {
      this.scheme = _schemeFix(schemeOrData, _strict);
      this.authority = authority || uri_empty;
      this.path = _referenceResolution(this.scheme, path || uri_empty);
      this.query = query || uri_empty;
      this.fragment = fragment || uri_empty;

      _validateUri(this, _strict);
    }
  }

  _createClass(URI, [{
    key: "fsPath",
    get: // ---- filesystem path -----------------------

    /**
     * Returns a string representing the corresponding file system path of this URI.
     * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
     * platform specific path separator.
     *
     * * Will *not* validate the path for invalid characters and semantics.
     * * Will *not* look at the scheme of this URI.
     * * The result shall *not* be used for display purposes but for accessing a file on disk.
     *
     *
     * The *difference* to `URI#path` is the use of the platform specific separator and the handling
     * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
     *
     * ```ts
        const u = URI.parse('file://server/c$/folder/file.txt')
        u.authority === 'server'
        u.path === '/shares/c$/file.txt'
        u.fsPath === '\\server\c$\folder\file.txt'
    ```
     *
     * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
     * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
     * with URIs that represent files on disk (`file` scheme).
     */
    function get() {
      // if (this.scheme !== 'file') {
      // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
      // }
      return uriToFsPath(this, false);
    } // ---- modify to new -------------------------

  }, {
    key: "with",
    value: function _with(change) {
      if (!change) {
        return this;
      }

      var scheme = change.scheme,
          authority = change.authority,
          path = change.path,
          query = change.query,
          fragment = change.fragment;

      if (scheme === undefined) {
        scheme = this.scheme;
      } else if (scheme === null) {
        scheme = uri_empty;
      }

      if (authority === undefined) {
        authority = this.authority;
      } else if (authority === null) {
        authority = uri_empty;
      }

      if (path === undefined) {
        path = this.path;
      } else if (path === null) {
        path = uri_empty;
      }

      if (query === undefined) {
        query = this.query;
      } else if (query === null) {
        query = uri_empty;
      }

      if (fragment === undefined) {
        fragment = this.fragment;
      } else if (fragment === null) {
        fragment = uri_empty;
      }

      if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
        return this;
      }

      return new uri_Uri(scheme, authority, path, query, fragment);
    } // ---- parse & validate ------------------------

    /**
     * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */

  }, {
    key: "toString",
    value: // ---- printing/externalize ---------------------------

    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    function toString() {
      var skipEncoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _asFormatted(this, skipEncoding);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this;
    }
  }], [{
    key: "isUri",
    value: function isUri(thing) {
      if (thing instanceof URI) {
        return true;
      }

      if (!thing) {
        return false;
      }

      return typeof thing.authority === 'string' && typeof thing.fragment === 'string' && typeof thing.path === 'string' && typeof thing.query === 'string' && typeof thing.scheme === 'string' && typeof thing.fsPath === 'string' && typeof thing["with"] === 'function' && typeof thing.toString === 'function';
    }
  }, {
    key: "parse",
    value: function parse(value) {
      var _strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var match = _regexp.exec(value);

      if (!match) {
        return new uri_Uri(uri_empty, uri_empty, uri_empty, uri_empty, uri_empty);
      }

      return new uri_Uri(match[2] || uri_empty, percentDecode(match[4] || uri_empty), percentDecode(match[5] || uri_empty), percentDecode(match[7] || uri_empty), percentDecode(match[9] || uri_empty), _strict);
    }
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */

  }, {
    key: "file",
    value: function file(path) {
      var authority = uri_empty; // normalize to fwd-slashes on windows,
      // on other systems bwd-slashes are valid
      // filename character, eg /f\oo/ba\r.txt

      if (platform["e" /* isWindows */]) {
        path = path.replace(/\\/g, _slash);
      } // check for authority as used in UNC shares
      // or use the path as given


      if (path[0] === _slash && path[1] === _slash) {
        var idx = path.indexOf(_slash, 2);

        if (idx === -1) {
          authority = path.substring(2);
          path = _slash;
        } else {
          authority = path.substring(2, idx);
          path = path.substring(idx) || _slash;
        }
      }

      return new uri_Uri('file', authority, path, uri_empty, uri_empty);
    }
  }, {
    key: "from",
    value: function from(components) {
      var result = new uri_Uri(components.scheme, components.authority, components.path, components.query, components.fragment);

      _validateUri(result, true);

      return result;
    }
    /**
     * Join a URI path with path fragments and normalizes the resulting path.
     *
     * @param uri The input URI.
     * @param pathFragment The path fragment to add to the URI path.
     * @returns The resulting URI.
     */

  }, {
    key: "joinPath",
    value: function joinPath(uri) {
      if (!uri.path) {
        throw new Error("[UriError]: cannot call joinPath on URI without path");
      }

      var newPath;

      for (var _len = arguments.length, pathFragment = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        pathFragment[_key - 1] = arguments[_key];
      }

      if (platform["e" /* isWindows */] && uri.scheme === 'file') {
        var _paths$win;

        newPath = URI.file((_paths$win = win32).join.apply(_paths$win, [uriToFsPath(uri, true)].concat(pathFragment))).path;
      } else {
        var _paths$posix;

        newPath = (_paths$posix = posix).join.apply(_paths$posix, [uri.path].concat(pathFragment));
      }

      return uri["with"]({
        path: newPath
      });
    }
  }, {
    key: "revive",
    value: function revive(data) {
      if (!data) {
        return data;
      } else if (data instanceof URI) {
        return data;
      } else {
        var result = new uri_Uri(data);
        result._formatted = data.external;
        result._fsPath = data._sep === _pathSepMarker ? data.fsPath : null;
        return result;
      }
    }
  }]);

  return URI;
}();

var _pathSepMarker = platform["e" /* isWindows */] ? 1 : undefined; // This class exists so that URI is compatible with vscode.Uri (API).


var uri_Uri = /*#__PURE__*/function (_URI) {
  _inherits(Uri, _URI);

  var _super = _createSuper(Uri);

  function Uri() {
    var _this;

    _classCallCheck(this, Uri);

    _this = _super.apply(this, arguments);
    _this._formatted = null;
    _this._fsPath = null;
    return _this;
  }

  _createClass(Uri, [{
    key: "fsPath",
    get: function get() {
      if (!this._fsPath) {
        this._fsPath = uriToFsPath(this, false);
      }

      return this._fsPath;
    }
  }, {
    key: "toString",
    value: function toString() {
      var skipEncoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!skipEncoding) {
        if (!this._formatted) {
          this._formatted = _asFormatted(this, false);
        }

        return this._formatted;
      } else {
        // we don't cache that
        return _asFormatted(this, true);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var res = {
        $mid: 1
        /* Uri */

      }; // cached state

      if (this._fsPath) {
        res.fsPath = this._fsPath;
        res._sep = _pathSepMarker;
      }

      if (this._formatted) {
        res.external = this._formatted;
      } // uri components


      if (this.path) {
        res.path = this.path;
      }

      if (this.scheme) {
        res.scheme = this.scheme;
      }

      if (this.authority) {
        res.authority = this.authority;
      }

      if (this.query) {
        res.query = this.query;
      }

      if (this.fragment) {
        res.fragment = this.fragment;
      }

      return res;
    }
  }]);

  return Uri;
}(uri_URI); // reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2


var encodeTable = (_encodeTable = {}, _defineProperty(_encodeTable, 58
/* Colon */
, '%3A'), _defineProperty(_encodeTable, 47
/* Slash */
, '%2F'), _defineProperty(_encodeTable, 63
/* QuestionMark */
, '%3F'), _defineProperty(_encodeTable, 35
/* Hash */
, '%23'), _defineProperty(_encodeTable, 91
/* OpenSquareBracket */
, '%5B'), _defineProperty(_encodeTable, 93
/* CloseSquareBracket */
, '%5D'), _defineProperty(_encodeTable, 64
/* AtSign */
, '%40'), _defineProperty(_encodeTable, 33
/* ExclamationMark */
, '%21'), _defineProperty(_encodeTable, 36
/* DollarSign */
, '%24'), _defineProperty(_encodeTable, 38
/* Ampersand */
, '%26'), _defineProperty(_encodeTable, 39
/* SingleQuote */
, '%27'), _defineProperty(_encodeTable, 40
/* OpenParen */
, '%28'), _defineProperty(_encodeTable, 41
/* CloseParen */
, '%29'), _defineProperty(_encodeTable, 42
/* Asterisk */
, '%2A'), _defineProperty(_encodeTable, 43
/* Plus */
, '%2B'), _defineProperty(_encodeTable, 44
/* Comma */
, '%2C'), _defineProperty(_encodeTable, 59
/* Semicolon */
, '%3B'), _defineProperty(_encodeTable, 61
/* Equals */
, '%3D'), _defineProperty(_encodeTable, 32
/* Space */
, '%20'), _encodeTable);

function encodeURIComponentFast(uriComponent, allowSlash) {
  var res = undefined;
  var nativeEncodePos = -1;

  for (var pos = 0; pos < uriComponent.length; pos++) {
    var code = uriComponent.charCodeAt(pos); // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3

    if (code >= 97
    /* a */
    && code <= 122
    /* z */
    || code >= 65
    /* A */
    && code <= 90
    /* Z */
    || code >= 48
    /* Digit0 */
    && code <= 57
    /* Digit9 */
    || code === 45
    /* Dash */
    || code === 46
    /* Period */
    || code === 95
    /* Underline */
    || code === 126
    /* Tilde */
    || allowSlash && code === 47
    /* Slash */
    ) {
      // check if we are delaying native encode
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
        nativeEncodePos = -1;
      } // check if we write into a new string (by default we try to return the param)


      if (res !== undefined) {
        res += uriComponent.charAt(pos);
      }
    } else {
      // encoding needed, we need to allocate a new string
      if (res === undefined) {
        res = uriComponent.substr(0, pos);
      } // check with default table first


      var escaped = encodeTable[code];

      if (escaped !== undefined) {
        // check if we are delaying native encode
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        } // append escaped variant to result


        res += escaped;
      } else if (nativeEncodePos === -1) {
        // use native encode only when needed
        nativeEncodePos = pos;
      }
    }
  }

  if (nativeEncodePos !== -1) {
    res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
  }

  return res !== undefined ? res : uriComponent;
}

function encodeURIComponentMinimal(path) {
  var res = undefined;

  for (var pos = 0; pos < path.length; pos++) {
    var code = path.charCodeAt(pos);

    if (code === 35
    /* Hash */
    || code === 63
    /* QuestionMark */
    ) {
        if (res === undefined) {
          res = path.substr(0, pos);
        }

        res += encodeTable[code];
      } else {
      if (res !== undefined) {
        res += path[pos];
      }
    }
  }

  return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */


function uriToFsPath(uri, keepDriveLetterCasing) {
  var value;

  if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
    // unc path: file://shares/c$/far/boo
    value = "//".concat(uri.authority).concat(uri.path);
  } else if (uri.path.charCodeAt(0) === 47
  /* Slash */
  && (uri.path.charCodeAt(1) >= 65
  /* A */
  && uri.path.charCodeAt(1) <= 90
  /* Z */
  || uri.path.charCodeAt(1) >= 97
  /* a */
  && uri.path.charCodeAt(1) <= 122
  /* z */
  ) && uri.path.charCodeAt(2) === 58
  /* Colon */
  ) {
      if (!keepDriveLetterCasing) {
        // windows drive letter: file:///c:/far/boo
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
      } else {
        value = uri.path.substr(1);
      }
    } else {
    // other path
    value = uri.path;
  }

  if (platform["e" /* isWindows */]) {
    value = value.replace(/\//g, '\\');
  }

  return value;
}
/**
 * Create the external version of a uri
 */

function _asFormatted(uri, skipEncoding) {
  var encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
  var res = '';
  var scheme = uri.scheme,
      authority = uri.authority,
      path = uri.path,
      query = uri.query,
      fragment = uri.fragment;

  if (scheme) {
    res += scheme;
    res += ':';
  }

  if (authority || scheme === 'file') {
    res += _slash;
    res += _slash;
  }

  if (authority) {
    var idx = authority.indexOf('@');

    if (idx !== -1) {
      // <user>@<auth>
      var userinfo = authority.substr(0, idx);
      authority = authority.substr(idx + 1);
      idx = userinfo.indexOf(':');

      if (idx === -1) {
        res += encoder(userinfo, false);
      } else {
        // <user>:<pass>@<auth>
        res += encoder(userinfo.substr(0, idx), false);
        res += ':';
        res += encoder(userinfo.substr(idx + 1), false);
      }

      res += '@';
    }

    authority = authority.toLowerCase();
    idx = authority.indexOf(':');

    if (idx === -1) {
      res += encoder(authority, false);
    } else {
      // <auth>:<port>
      res += encoder(authority.substr(0, idx), false);
      res += authority.substr(idx);
    }
  }

  if (path) {
    // lower-case windows drive letters in /C:/fff or C:/fff
    if (path.length >= 3 && path.charCodeAt(0) === 47
    /* Slash */
    && path.charCodeAt(2) === 58
    /* Colon */
    ) {
        var code = path.charCodeAt(1);

        if (code >= 65
        /* A */
        && code <= 90
        /* Z */
        ) {
            path = "/".concat(String.fromCharCode(code + 32), ":").concat(path.substr(3)); // "/c:".length === 3
          }
      } else if (path.length >= 2 && path.charCodeAt(1) === 58
    /* Colon */
    ) {
        var _code = path.charCodeAt(0);

        if (_code >= 65
        /* A */
        && _code <= 90
        /* Z */
        ) {
            path = "".concat(String.fromCharCode(_code + 32), ":").concat(path.substr(2)); // "/c:".length === 3
          }
      } // encode the rest of the path


    res += encoder(path, true);
  }

  if (query) {
    res += '?';
    res += encoder(query, false);
  }

  if (fragment) {
    res += '#';
    res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
  }

  return res;
} // --- decode


function decodeURIComponentGraceful(str) {
  try {
    return decodeURIComponent(str);
  } catch (_a) {
    if (str.length > 3) {
      return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
    } else {
      return str;
    }
  }
}

var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

function percentDecode(str) {
  if (!str.match(_rEncodedAsHex)) {
    return str;
  }

  return str.replace(_rEncodedAsHex, function (match) {
    return decodeURIComponentGraceful(match);
  });
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/position.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A position in the editor.
 */
var position_Position = /*#__PURE__*/function () {
  function Position(lineNumber, column) {
    _classCallCheck(this, Position);

    this.lineNumber = lineNumber;
    this.column = column;
  }
  /**
   * Create a new position from this position.
   *
   * @param newLineNumber new line number
   * @param newColumn new column
   */


  _createClass(Position, [{
    key: "with",
    value: function _with() {
      var newLineNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
      var newColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;

      if (newLineNumber === this.lineNumber && newColumn === this.column) {
        return this;
      } else {
        return new Position(newLineNumber, newColumn);
      }
    }
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */

  }, {
    key: "delta",
    value: function delta() {
      var deltaLineNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var deltaColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this["with"](this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    }
    /**
     * Test if this position equals other position
     */

  }, {
    key: "equals",
    value: function equals(other) {
      return Position.equals(this, other);
    }
    /**
     * Test if position `a` equals position `b`
     */

  }, {
    key: "isBefore",
    value:
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    function isBefore(other) {
      return Position.isBefore(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */

  }, {
    key: "isBeforeOrEqual",
    value:
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    function isBeforeOrEqual(other) {
      return Position.isBeforeOrEqual(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */

  }, {
    key: "clone",
    value:
    /**
     * Clone this position.
     */
    function clone() {
      return new Position(this.lineNumber, this.column);
    }
    /**
     * Convert to a human-readable representation.
     */

  }, {
    key: "toString",
    value: function toString() {
      return '(' + this.lineNumber + ',' + this.column + ')';
    } // ---

    /**
     * Create a `Position` from an `IPosition`.
     */

  }], [{
    key: "equals",
    value: function equals(a, b) {
      if (!a && !b) {
        return true;
      }

      return !!a && !!b && a.lineNumber === b.lineNumber && a.column === b.column;
    }
  }, {
    key: "isBefore",
    value: function isBefore(a, b) {
      if (a.lineNumber < b.lineNumber) {
        return true;
      }

      if (b.lineNumber < a.lineNumber) {
        return false;
      }

      return a.column < b.column;
    }
  }, {
    key: "isBeforeOrEqual",
    value: function isBeforeOrEqual(a, b) {
      if (a.lineNumber < b.lineNumber) {
        return true;
      }

      if (b.lineNumber < a.lineNumber) {
        return false;
      }

      return a.column <= b.column;
    }
    /**
     * A function that compares positions, useful for sorting
     */

  }, {
    key: "compare",
    value: function compare(a, b) {
      var aLineNumber = a.lineNumber | 0;
      var bLineNumber = b.lineNumber | 0;

      if (aLineNumber === bLineNumber) {
        var aColumn = a.column | 0;
        var bColumn = b.column | 0;
        return aColumn - bColumn;
      }

      return aLineNumber - bLineNumber;
    }
  }, {
    key: "lift",
    value: function lift(pos) {
      return new Position(pos.lineNumber, pos.column);
    }
    /**
     * Test if `obj` is an `IPosition`.
     */

  }, {
    key: "isIPosition",
    value: function isIPosition(obj) {
      return obj && typeof obj.lineNumber === 'number' && typeof obj.column === 'number';
    }
  }]);

  return Position;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/range.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */

var range_Range = /*#__PURE__*/function () {
  function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
    _classCallCheck(this, Range);

    if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
      this.startLineNumber = endLineNumber;
      this.startColumn = endColumn;
      this.endLineNumber = startLineNumber;
      this.endColumn = startColumn;
    } else {
      this.startLineNumber = startLineNumber;
      this.startColumn = startColumn;
      this.endLineNumber = endLineNumber;
      this.endColumn = endColumn;
    }
  }
  /**
   * Test if this range is empty.
   */


  _createClass(Range, [{
    key: "isEmpty",
    value: function isEmpty() {
      return Range.isEmpty(this);
    }
    /**
     * Test if `range` is empty.
     */

  }, {
    key: "containsPosition",
    value:
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    function containsPosition(position) {
      return Range.containsPosition(this, position);
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */

  }, {
    key: "containsRange",
    value:
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    function containsRange(range) {
      return Range.containsRange(this, range);
    }
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */

  }, {
    key: "strictContainsRange",
    value:
    /**
     * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
     */
    function strictContainsRange(range) {
      return Range.strictContainsRange(this, range);
    }
    /**
     * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
     */

  }, {
    key: "plusRange",
    value:
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    function plusRange(range) {
      return Range.plusRange(this, range);
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */

  }, {
    key: "intersectRanges",
    value:
    /**
     * A intersection of the two ranges.
     */
    function intersectRanges(range) {
      return Range.intersectRanges(this, range);
    }
    /**
     * A intersection of the two ranges.
     */

  }, {
    key: "equalsRange",
    value:
    /**
     * Test if this range equals other.
     */
    function equalsRange(other) {
      return Range.equalsRange(this, other);
    }
    /**
     * Test if range `a` equals `b`.
     */

  }, {
    key: "getEndPosition",
    value:
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    function getEndPosition() {
      return Range.getEndPosition(this);
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */

  }, {
    key: "getStartPosition",
    value:
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    function getStartPosition() {
      return Range.getStartPosition(this);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */

  }, {
    key: "toString",
    value:
    /**
     * Transform to a user presentable string representation.
     */
    function toString() {
      return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    }
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */

  }, {
    key: "setEndPosition",
    value: function setEndPosition(endLineNumber, endColumn) {
      return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    }
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */

  }, {
    key: "setStartPosition",
    value: function setStartPosition(startLineNumber, startColumn) {
      return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    }
    /**
     * Create a new empty range using this range's start position.
     */

  }, {
    key: "collapseToStart",
    value: function collapseToStart() {
      return Range.collapseToStart(this);
    }
    /**
     * Create a new empty range using this range's start position.
     */

  }], [{
    key: "isEmpty",
    value: function isEmpty(range) {
      return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
    }
  }, {
    key: "containsPosition",
    value: function containsPosition(range, position) {
      if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
        return false;
      }

      if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
        return false;
      }

      if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
        return false;
      }

      return true;
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return false.
     * @internal
     */

  }, {
    key: "strictContainsPosition",
    value: function strictContainsPosition(range, position) {
      if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
        return false;
      }

      if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
        return false;
      }

      if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "containsRange",
    value: function containsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
        return false;
      }

      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "strictContainsRange",
    value: function strictContainsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
        return false;
      }

      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "plusRange",
    value: function plusRange(a, b) {
      var startLineNumber;
      var startColumn;
      var endLineNumber;
      var endColumn;

      if (b.startLineNumber < a.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = b.startColumn;
      } else if (b.startLineNumber === a.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = Math.min(b.startColumn, a.startColumn);
      } else {
        startLineNumber = a.startLineNumber;
        startColumn = a.startColumn;
      }

      if (b.endLineNumber > a.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = b.endColumn;
      } else if (b.endLineNumber === a.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = Math.max(b.endColumn, a.endColumn);
      } else {
        endLineNumber = a.endLineNumber;
        endColumn = a.endColumn;
      }

      return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    }
  }, {
    key: "intersectRanges",
    value: function intersectRanges(a, b) {
      var resultStartLineNumber = a.startLineNumber;
      var resultStartColumn = a.startColumn;
      var resultEndLineNumber = a.endLineNumber;
      var resultEndColumn = a.endColumn;
      var otherStartLineNumber = b.startLineNumber;
      var otherStartColumn = b.startColumn;
      var otherEndLineNumber = b.endLineNumber;
      var otherEndColumn = b.endColumn;

      if (resultStartLineNumber < otherStartLineNumber) {
        resultStartLineNumber = otherStartLineNumber;
        resultStartColumn = otherStartColumn;
      } else if (resultStartLineNumber === otherStartLineNumber) {
        resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
      }

      if (resultEndLineNumber > otherEndLineNumber) {
        resultEndLineNumber = otherEndLineNumber;
        resultEndColumn = otherEndColumn;
      } else if (resultEndLineNumber === otherEndLineNumber) {
        resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
      } // Check if selection is now empty


      if (resultStartLineNumber > resultEndLineNumber) {
        return null;
      }

      if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
        return null;
      }

      return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    }
  }, {
    key: "equalsRange",
    value: function equalsRange(a, b) {
      return !!a && !!b && a.startLineNumber === b.startLineNumber && a.startColumn === b.startColumn && a.endLineNumber === b.endLineNumber && a.endColumn === b.endColumn;
    }
  }, {
    key: "getEndPosition",
    value: function getEndPosition(range) {
      return new position_Position(range.endLineNumber, range.endColumn);
    }
  }, {
    key: "getStartPosition",
    value: function getStartPosition(range) {
      return new position_Position(range.startLineNumber, range.startColumn);
    }
  }, {
    key: "collapseToStart",
    value: function collapseToStart(range) {
      return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    } // ---

  }, {
    key: "fromPositions",
    value: function fromPositions(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
      return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    }
  }, {
    key: "lift",
    value: function lift(range) {
      if (!range) {
        return null;
      }

      return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Test if `obj` is an `IRange`.
     */

  }, {
    key: "isIRange",
    value: function isIRange(obj) {
      return obj && typeof obj.startLineNumber === 'number' && typeof obj.startColumn === 'number' && typeof obj.endLineNumber === 'number' && typeof obj.endColumn === 'number';
    }
    /**
     * Test if the two ranges are touching in any way.
     */

  }, {
    key: "areIntersectingOrTouching",
    value: function areIntersectingOrTouching(a, b) {
      // Check if `a` is before `b`
      if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn) {
        return false;
      } // Check if `b` is before `a`


      if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn) {
        return false;
      } // These ranges must intersect


      return true;
    }
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */

  }, {
    key: "areIntersecting",
    value: function areIntersecting(a, b) {
      // Check if `a` is before `b`
      if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn) {
        return false;
      } // Check if `b` is before `a`


      if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn) {
        return false;
      } // These ranges must intersect


      return true;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */

  }, {
    key: "compareRangesUsingStarts",
    value: function compareRangesUsingStarts(a, b) {
      if (a && b) {
        var aStartLineNumber = a.startLineNumber | 0;
        var bStartLineNumber = b.startLineNumber | 0;

        if (aStartLineNumber === bStartLineNumber) {
          var aStartColumn = a.startColumn | 0;
          var bStartColumn = b.startColumn | 0;

          if (aStartColumn === bStartColumn) {
            var aEndLineNumber = a.endLineNumber | 0;
            var bEndLineNumber = b.endLineNumber | 0;

            if (aEndLineNumber === bEndLineNumber) {
              var aEndColumn = a.endColumn | 0;
              var bEndColumn = b.endColumn | 0;
              return aEndColumn - bEndColumn;
            }

            return aEndLineNumber - bEndLineNumber;
          }

          return aStartColumn - bStartColumn;
        }

        return aStartLineNumber - bStartLineNumber;
      }

      var aExists = a ? 1 : 0;
      var bExists = b ? 1 : 0;
      return aExists - bExists;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */

  }, {
    key: "compareRangesUsingEnds",
    value: function compareRangesUsingEnds(a, b) {
      if (a.endLineNumber === b.endLineNumber) {
        if (a.endColumn === b.endColumn) {
          if (a.startLineNumber === b.startLineNumber) {
            return a.startColumn - b.startColumn;
          }

          return a.startLineNumber - b.startLineNumber;
        }

        return a.endColumn - b.endColumn;
      }

      return a.endLineNumber - b.endLineNumber;
    }
    /**
     * Test if the range spans multiple lines.
     */

  }, {
    key: "spansMultipleLines",
    value: function spansMultipleLines(range) {
      return range.endLineNumber > range.startLineNumber;
    }
  }]);

  return Range;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;

function _computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
  var diffAlgo = new diff_LcsDiff(originalSequence, modifiedSequence, continueProcessingPredicate);
  return diffAlgo.ComputeDiff(pretty);
}

var diffComputer_LineSequence = /*#__PURE__*/function () {
  function LineSequence(lines) {
    _classCallCheck(this, LineSequence);

    var startColumns = [];
    var endColumns = [];

    for (var i = 0, length = lines.length; i < length; i++) {
      startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
      endColumns[i] = getLastNonBlankColumn(lines[i], 1);
    }

    this.lines = lines;
    this._startColumns = startColumns;
    this._endColumns = endColumns;
  }

  _createClass(LineSequence, [{
    key: "getElements",
    value: function getElements() {
      var elements = [];

      for (var i = 0, len = this.lines.length; i < len; i++) {
        elements[i] = this.lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
      }

      return elements;
    }
  }, {
    key: "getStrictElement",
    value: function getStrictElement(index) {
      return this.lines[index];
    }
  }, {
    key: "getStartLineNumber",
    value: function getStartLineNumber(i) {
      return i + 1;
    }
  }, {
    key: "getEndLineNumber",
    value: function getEndLineNumber(i) {
      return i + 1;
    }
  }, {
    key: "createCharSequence",
    value: function createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
      var charCodes = [];
      var lineNumbers = [];
      var columns = [];
      var len = 0;

      for (var index = startIndex; index <= endIndex; index++) {
        var lineContent = this.lines[index];
        var startColumn = shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1;
        var endColumn = shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1;

        for (var col = startColumn; col < endColumn; col++) {
          charCodes[len] = lineContent.charCodeAt(col - 1);
          lineNumbers[len] = index + 1;
          columns[len] = col;
          len++;
        }
      }

      return new diffComputer_CharSequence(charCodes, lineNumbers, columns);
    }
  }]);

  return LineSequence;
}();

var diffComputer_CharSequence = /*#__PURE__*/function () {
  function CharSequence(charCodes, lineNumbers, columns) {
    _classCallCheck(this, CharSequence);

    this._charCodes = charCodes;
    this._lineNumbers = lineNumbers;
    this._columns = columns;
  }

  _createClass(CharSequence, [{
    key: "getElements",
    value: function getElements() {
      return this._charCodes;
    }
  }, {
    key: "getStartLineNumber",
    value: function getStartLineNumber(i) {
      return this._lineNumbers[i];
    }
  }, {
    key: "getStartColumn",
    value: function getStartColumn(i) {
      return this._columns[i];
    }
  }, {
    key: "getEndLineNumber",
    value: function getEndLineNumber(i) {
      return this._lineNumbers[i];
    }
  }, {
    key: "getEndColumn",
    value: function getEndColumn(i) {
      return this._columns[i] + 1;
    }
  }]);

  return CharSequence;
}();

var diffComputer_CharChange = /*#__PURE__*/function () {
  function CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
    _classCallCheck(this, CharChange);

    this.originalStartLineNumber = originalStartLineNumber;
    this.originalStartColumn = originalStartColumn;
    this.originalEndLineNumber = originalEndLineNumber;
    this.originalEndColumn = originalEndColumn;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedStartColumn = modifiedStartColumn;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.modifiedEndColumn = modifiedEndColumn;
  }

  _createClass(CharChange, null, [{
    key: "createFromDiffChange",
    value: function createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
      var originalStartLineNumber;
      var originalStartColumn;
      var originalEndLineNumber;
      var originalEndColumn;
      var modifiedStartLineNumber;
      var modifiedStartColumn;
      var modifiedEndLineNumber;
      var modifiedEndColumn;

      if (diffChange.originalLength === 0) {
        originalStartLineNumber = 0;
        originalStartColumn = 0;
        originalEndLineNumber = 0;
        originalEndColumn = 0;
      } else {
        originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
        originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
        originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
      }

      if (diffChange.modifiedLength === 0) {
        modifiedStartLineNumber = 0;
        modifiedStartColumn = 0;
        modifiedEndLineNumber = 0;
        modifiedEndColumn = 0;
      } else {
        modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
        modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
        modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      }

      return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    }
  }]);

  return CharChange;
}();

function postProcessCharChanges(rawChanges) {
  if (rawChanges.length <= 1) {
    return rawChanges;
  }

  var result = [rawChanges[0]];
  var prevChange = result[0];

  for (var i = 1, len = rawChanges.length; i < len; i++) {
    var currChange = rawChanges[i];
    var originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
    var modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength); // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true

    var matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);

    if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
      // Merge the current change into the previous one
      prevChange.originalLength = currChange.originalStart + currChange.originalLength - prevChange.originalStart;
      prevChange.modifiedLength = currChange.modifiedStart + currChange.modifiedLength - prevChange.modifiedStart;
    } else {
      // Add the current change
      result.push(currChange);
      prevChange = currChange;
    }
  }

  return result;
}

var diffComputer_LineChange = /*#__PURE__*/function () {
  function LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
    _classCallCheck(this, LineChange);

    this.originalStartLineNumber = originalStartLineNumber;
    this.originalEndLineNumber = originalEndLineNumber;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.charChanges = charChanges;
  }

  _createClass(LineChange, null, [{
    key: "createFromDiffResult",
    value: function createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
      var originalStartLineNumber;
      var originalEndLineNumber;
      var modifiedStartLineNumber;
      var modifiedEndLineNumber;
      var charChanges = undefined;

      if (diffChange.originalLength === 0) {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
        originalEndLineNumber = 0;
      } else {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
        originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
      }

      if (diffChange.modifiedLength === 0) {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
        modifiedEndLineNumber = 0;
      } else {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
        modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      }

      if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
        // Compute character changes for diff chunks of at most 20 lines...
        var originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
        var modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);

        var rawChanges = _computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;

        if (shouldPostProcessCharChanges) {
          rawChanges = postProcessCharChanges(rawChanges);
        }

        charChanges = [];

        for (var i = 0, length = rawChanges.length; i < length; i++) {
          charChanges.push(diffComputer_CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
        }
      }

      return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    }
  }]);

  return LineChange;
}();

var diffComputer_DiffComputer = /*#__PURE__*/function () {
  function DiffComputer(originalLines, modifiedLines, opts) {
    _classCallCheck(this, DiffComputer);

    this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
    this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
    this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
    this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
    this.originalLines = originalLines;
    this.modifiedLines = modifiedLines;
    this.original = new diffComputer_LineSequence(originalLines);
    this.modified = new diffComputer_LineSequence(modifiedLines);
    this.continueLineDiff = createContinueProcessingPredicate(opts.maxComputationTime);
    this.continueCharDiff = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5000)); // never run after 5s for character changes...
  }

  _createClass(DiffComputer, [{
    key: "computeDiff",
    value: function computeDiff() {
      if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
        // empty original => fast path
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
          return {
            quitEarly: false,
            changes: []
          };
        }

        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: 1,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: this.modified.lines.length,
            charChanges: [{
              modifiedEndColumn: 0,
              modifiedEndLineNumber: 0,
              modifiedStartColumn: 0,
              modifiedStartLineNumber: 0,
              originalEndColumn: 0,
              originalEndLineNumber: 0,
              originalStartColumn: 0,
              originalStartLineNumber: 0
            }]
          }]
        };
      }

      if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
        // empty modified => fast path
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: this.original.lines.length,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: 1,
            charChanges: [{
              modifiedEndColumn: 0,
              modifiedEndLineNumber: 0,
              modifiedStartColumn: 0,
              modifiedStartLineNumber: 0,
              originalEndColumn: 0,
              originalEndLineNumber: 0,
              originalStartColumn: 0,
              originalStartLineNumber: 0
            }]
          }]
        };
      }

      var diffResult = _computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);

      var rawChanges = diffResult.changes;
      var quitEarly = diffResult.quitEarly; // The diff is always computed with ignoring trim whitespace
      // This ensures we get the prettiest diff

      if (this.shouldIgnoreTrimWhitespace) {
        var lineChanges = [];

        for (var i = 0, length = rawChanges.length; i < length; i++) {
          lineChanges.push(diffComputer_LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }

        return {
          quitEarly: quitEarly,
          changes: lineChanges
        };
      } // Need to post-process and introduce changes where the trim whitespace is different
      // Note that we are looping starting at -1 to also cover the lines before the first change


      var result = [];
      var originalLineIndex = 0;
      var modifiedLineIndex = 0;

      for (var _i = -1
      /* !!!! */
      , len = rawChanges.length; _i < len; _i++) {
        var nextChange = _i + 1 < len ? rawChanges[_i + 1] : null;
        var originalStop = nextChange ? nextChange.originalStart : this.originalLines.length;
        var modifiedStop = nextChange ? nextChange.modifiedStart : this.modifiedLines.length;

        while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
          var originalLine = this.originalLines[originalLineIndex];
          var modifiedLine = this.modifiedLines[modifiedLineIndex];

          if (originalLine !== modifiedLine) {
            // These lines differ only in trim whitespace
            // Check the leading whitespace
            {
              var originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
              var modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);

              while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                var originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                var modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);

                if (originalChar !== modifiedChar) {
                  break;
                }

                originalStartColumn--;
                modifiedStartColumn--;
              }

              if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
              }
            } // Check the trailing whitespace

            {
              var originalEndColumn = getLastNonBlankColumn(originalLine, 1);
              var modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
              var originalMaxColumn = originalLine.length + 1;
              var modifiedMaxColumn = modifiedLine.length + 1;

              while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                var _originalChar = originalLine.charCodeAt(originalEndColumn - 1);

                var _modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);

                if (_originalChar !== _modifiedChar) {
                  break;
                }

                originalEndColumn++;
                modifiedEndColumn++;
              }

              if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
              }
            }
          }

          originalLineIndex++;
          modifiedLineIndex++;
        }

        if (nextChange) {
          // Emit the actual change
          result.push(diffComputer_LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          originalLineIndex += nextChange.originalLength;
          modifiedLineIndex += nextChange.modifiedLength;
        }
      }

      return {
        quitEarly: quitEarly,
        changes: result
      };
    }
  }, {
    key: "_pushTrimWhitespaceCharChange",
    value: function _pushTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
        // Merged into previous
        return;
      }

      var charChanges = undefined;

      if (this.shouldComputeCharChanges) {
        charChanges = [new diffComputer_CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
      }

      result.push(new diffComputer_LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    }
  }, {
    key: "_mergeTrimWhitespaceCharChange",
    value: function _mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      var len = result.length;

      if (len === 0) {
        return false;
      }

      var prevChange = result[len - 1];

      if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
        // Don't merge with inserts/deletes
        return false;
      }

      if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
        prevChange.originalEndLineNumber = originalLineNumber;
        prevChange.modifiedEndLineNumber = modifiedLineNumber;

        if (this.shouldComputeCharChanges && prevChange.charChanges) {
          prevChange.charChanges.push(new diffComputer_CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
        }

        return true;
      }

      return false;
    }
  }]);

  return DiffComputer;
}();

function getFirstNonBlankColumn(txt, defaultValue) {
  var r = firstNonWhitespaceIndex(txt);

  if (r === -1) {
    return defaultValue;
  }

  return r + 1;
}

function getLastNonBlankColumn(txt, defaultValue) {
  var r = lastNonWhitespaceIndex(txt);

  if (r === -1) {
    return defaultValue;
  }

  return r + 2;
}

function createContinueProcessingPredicate(maximumRuntime) {
  if (maximumRuntime === 0) {
    return function () {
      return true;
    };
  }

  var startTime = Date.now();
  return function () {
    return Date.now() - startTime < maximumRuntime;
  };
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/arrays.js





/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return array[array.length - (1 + n)];
}
function tail2(arr) {
  if (arr.length === 0) {
    throw new Error('Invalid tail call');
  }

  return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function arrays_equals(one, other) {
  var itemEquals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
    return a === b;
  };

  if (one === other) {
    return true;
  }

  if (!one || !other) {
    return false;
  }

  if (one.length !== other.length) {
    return false;
  }

  for (var i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }

  return true;
}
function binarySearch(array, key, comparator) {
  var low = 0,
      high = array.length - 1;

  while (low <= high) {
    var mid = (low + high) / 2 | 0;
    var comp = comparator(array[mid], key);

    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -(low + 1);
}
/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */

function findFirstInSorted(array, p) {
  var low = 0,
      high = array.length;

  if (high === 0) {
    return 0; // no children
  }

  while (low < high) {
    var mid = Math.floor((low + high) / 2);

    if (p(array[mid])) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
function quickSelect(nth, data, compare) {
  nth = nth | 0;

  if (nth >= data.length) {
    throw new TypeError('invalid index');
  }

  var pivotValue = data[Math.floor(data.length * Math.random())];
  var lower = [];
  var higher = [];
  var pivots = [];

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      var val = compare(value, pivotValue);

      if (val < 0) {
        lower.push(value);
      } else if (val > 0) {
        higher.push(value);
      } else {
        pivots.push(value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (nth < lower.length) {
    return quickSelect(nth, lower, compare);
  } else if (nth < lower.length + pivots.length) {
    return pivots[0];
  } else {
    return quickSelect(nth - (lower.length + pivots.length), higher, compare);
  }
}
function groupBy(data, compare) {
  var result = [];
  var currentGroup = undefined;

  var _iterator2 = _createForOfIteratorHelper(data.slice(0).sort(compare)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;

      if (!currentGroup || compare(currentGroup[0], element) !== 0) {
        currentGroup = [element];
        result.push(currentGroup);
      } else {
        currentGroup.push(element);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}
/**
 * @returns New array with all falsy values removed. The original array IS NOT modified.
 */

function coalesce(array) {
  return array.filter(function (e) {
    return !!e;
  });
}
/**
 * @returns false if the provided object is an array and not empty.
 */

function isFalsyOrEmpty(obj) {
  return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
  return Array.isArray(obj) && obj.length > 0;
}
/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equality by returning an alternate value for each.
 */

function distinct(array) {
  var keyFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  var seen = new Set();
  return array.filter(function (element) {
    var key = keyFn(element);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}
function findLast(arr, predicate) {
  var idx = lastIndex(arr, predicate);

  if (idx === -1) {
    return undefined;
  }

  return arr[idx];
}
function lastIndex(array, fn) {
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    if (fn(element)) {
      return i;
    }
  }

  return -1;
}
function firstOrDefault(array, notFoundValue) {
  return array.length > 0 ? array[0] : notFoundValue;
}
function flatten(arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
}
function arrays_range(arg, to) {
  var from = typeof to === 'number' ? arg : 0;

  if (typeof to === 'number') {
    from = arg;
  } else {
    from = 0;
    to = arg;
  }

  var result = [];

  if (from <= to) {
    for (var i = from; i < to; i++) {
      result.push(i);
    }
  } else {
    for (var _i = from; _i > to; _i--) {
      result.push(_i);
    }
  }

  return result;
}
/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */

function arrayInsert(target, insertIndex, insertArr) {
  var before = target.slice(0, insertIndex);
  var after = target.slice(insertIndex);
  return before.concat(insertArr, after);
}
/**
 * Pushes an element to the start of the array, if found.
 */

function pushToStart(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
    arr.unshift(value);
  }
}
/**
 * Pushes an element to the end of the array, if found.
 */

function pushToEnd(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
    arr.push(value);
  }
}
function asArray(x) {
  return Array.isArray(x) ? x : [x];
}
/**
 * Insert the new items in the array.
 * @param array The original array.
 * @param start The zero-based location in the array from which to start inserting elements.
 * @param newItems The items to be inserted
 */

function insertInto(array, start, newItems) {
  var startIdx = getActualStartIndex(array, start);
  var originalLength = array.length;
  var newItemsLength = newItems.length;
  array.length = originalLength + newItemsLength; // Move the items after the start index, start from the end so that we don't overwrite any value.

  for (var i = originalLength - 1; i >= startIdx; i--) {
    array[i + newItemsLength] = array[i];
  }

  for (var _i2 = 0; _i2 < newItemsLength; _i2++) {
    array[_i2 + startIdx] = newItems[_i2];
  }
}
/**
 * Removes elements from an array and inserts new elements in their place, returning the deleted elements. Alternative to the native Array.splice method, it
 * can only support limited number of items due to the maximum call stack size limit.
 * @param array The original array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @returns An array containing the elements that were deleted.
 */

function splice(array, start, deleteCount, newItems) {
  var index = getActualStartIndex(array, start);
  var result = array.splice(index, deleteCount);
  insertInto(array, index, newItems);
  return result;
}
/**
 * Determine the actual start index (same logic as the native splice() or slice())
 * If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
 * If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.
 * @param array The target array.
 * @param start The operation index.
 */

function getActualStartIndex(array, start) {
  return start < 0 ? Math.max(start + array.length, 0) : Math.min(start, array.length);
}

function compareBy(selector, comparator) {
  return function (a, b) {
    return comparator(selector(a), selector(b));
  };
}
/**
 * The natural order on numbers.
*/

var numberComparator = function numberComparator(a, b) {
  return a - b;
};
/**
 * Returns the first item that is equal to or greater than every other item.
*/

function findMaxBy(items, comparator) {
  if (items.length === 0) {
    return undefined;
  }

  var max = items[0];

  for (var i = 1; i < items.length; i++) {
    var item = items[i];

    if (comparator(item, max) > 0) {
      max = item;
    }
  }

  return max;
}
/**
 * Returns the last item that is equal to or greater than every other item.
*/

function findLastMaxBy(items, comparator) {
  if (items.length === 0) {
    return undefined;
  }

  var max = items[0];

  for (var i = 1; i < items.length; i++) {
    var item = items[i];

    if (comparator(item, max) >= 0) {
      max = item;
    }
  }

  return max;
}
/**
 * Returns the first item that is equal to or less than every other item.
*/

function findMinBy(items, comparator) {
  return findMaxBy(items, function (a, b) {
    return -comparator(a, b);
  });
}
var arrays_ArrayQueue = /*#__PURE__*/function () {
  /**
   * Constructs a queue that is backed by the given array. Runtime is O(1).
  */
  function ArrayQueue(items) {
    _classCallCheck(this, ArrayQueue);

    this.items = items;
    this.firstIdx = 0;
    this.lastIdx = this.items.length - 1;
  }
  /**
   * Consumes elements from the beginning of the queue as long as the predicate returns true.
   * If no elements were consumed, `null` is returned. Has a runtime of O(result.length).
  */


  _createClass(ArrayQueue, [{
    key: "takeWhile",
    value: function takeWhile(predicate) {
      // P(k) := k <= this.lastIdx && predicate(this.items[k])
      // Find s := min { k | k >= this.firstIdx && !P(k) } and return this.data[this.firstIdx...s)
      var startIdx = this.firstIdx;

      while (startIdx < this.items.length && predicate(this.items[startIdx])) {
        startIdx++;
      }

      var result = startIdx === this.firstIdx ? null : this.items.slice(this.firstIdx, startIdx);
      this.firstIdx = startIdx;
      return result;
    }
    /**
     * Consumes elements from the end of the queue as long as the predicate returns true.
     * If no elements were consumed, `null` is returned.
     * The result has the same order as the underlying array!
    */

  }, {
    key: "takeFromEndWhile",
    value: function takeFromEndWhile(predicate) {
      // P(k) := this.firstIdx >= k && predicate(this.items[k])
      // Find s := max { k | k <= this.lastIdx && !P(k) } and return this.data(s...this.lastIdx]
      var endIdx = this.lastIdx;

      while (endIdx >= 0 && predicate(this.items[endIdx])) {
        endIdx--;
      }

      var result = endIdx === this.lastIdx ? null : this.items.slice(endIdx + 1, this.lastIdx + 1);
      this.lastIdx = endIdx;
      return result;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.items[this.firstIdx];
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var result = this.items[this.firstIdx];
      this.firstIdx++;
      return result;
    }
  }, {
    key: "takeCount",
    value: function takeCount(count) {
      var result = this.items.slice(this.firstIdx, this.firstIdx + count);
      this.firstIdx += count;
      return result;
    }
  }]);

  return ArrayQueue;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/uint.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function toUint8(v) {
  if (v < 0) {
    return 0;
  }

  if (v > 255
  /* MAX_UINT_8 */
  ) {
      return 255
      /* MAX_UINT_8 */
      ;
    }

  return v | 0;
}
function toUint32(v) {
  if (v < 0) {
    return 0;
  }

  if (v > 4294967295
  /* MAX_UINT_32 */
  ) {
      return 4294967295
      /* MAX_UINT_32 */
      ;
    }

  return v | 0;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/model/prefixSumComputer.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var prefixSumComputer_PrefixSumComputer = /*#__PURE__*/function () {
  function PrefixSumComputer(values) {
    _classCallCheck(this, PrefixSumComputer);

    this.values = values;
    this.prefixSum = new Uint32Array(values.length);
    this.prefixSumValidIndex = new Int32Array(1);
    this.prefixSumValidIndex[0] = -1;
  }

  _createClass(PrefixSumComputer, [{
    key: "insertValues",
    value: function insertValues(insertIndex, _insertValues) {
      insertIndex = toUint32(insertIndex);
      var oldValues = this.values;
      var oldPrefixSum = this.prefixSum;
      var insertValuesLen = _insertValues.length;

      if (insertValuesLen === 0) {
        return false;
      }

      this.values = new Uint32Array(oldValues.length + insertValuesLen);
      this.values.set(oldValues.subarray(0, insertIndex), 0);
      this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
      this.values.set(_insertValues, insertIndex);

      if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = insertIndex - 1;
      }

      this.prefixSum = new Uint32Array(this.values.length);

      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }

      return true;
    }
  }, {
    key: "setValue",
    value: function setValue(index, value) {
      index = toUint32(index);
      value = toUint32(value);

      if (this.values[index] === value) {
        return false;
      }

      this.values[index] = value;

      if (index - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = index - 1;
      }

      return true;
    }
  }, {
    key: "removeValues",
    value: function removeValues(startIndex, count) {
      startIndex = toUint32(startIndex);
      count = toUint32(count);
      var oldValues = this.values;
      var oldPrefixSum = this.prefixSum;

      if (startIndex >= oldValues.length) {
        return false;
      }

      var maxCount = oldValues.length - startIndex;

      if (count >= maxCount) {
        count = maxCount;
      }

      if (count === 0) {
        return false;
      }

      this.values = new Uint32Array(oldValues.length - count);
      this.values.set(oldValues.subarray(0, startIndex), 0);
      this.values.set(oldValues.subarray(startIndex + count), startIndex);
      this.prefixSum = new Uint32Array(this.values.length);

      if (startIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = startIndex - 1;
      }

      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }

      return true;
    }
  }, {
    key: "getTotalSum",
    value: function getTotalSum() {
      if (this.values.length === 0) {
        return 0;
      }

      return this._getPrefixSum(this.values.length - 1);
    }
    /**
     * Returns the sum of the first `index + 1` many items.
     * @returns `SUM(0 <= j <= index, values[j])`.
     */

  }, {
    key: "getPrefixSum",
    value: function getPrefixSum(index) {
      if (index < 0) {
        return 0;
      }

      index = toUint32(index);
      return this._getPrefixSum(index);
    }
  }, {
    key: "_getPrefixSum",
    value: function _getPrefixSum(index) {
      if (index <= this.prefixSumValidIndex[0]) {
        return this.prefixSum[index];
      }

      var startIndex = this.prefixSumValidIndex[0] + 1;

      if (startIndex === 0) {
        this.prefixSum[0] = this.values[0];
        startIndex++;
      }

      if (index >= this.values.length) {
        index = this.values.length - 1;
      }

      for (var i = startIndex; i <= index; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
      }

      this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
      return this.prefixSum[index];
    }
  }, {
    key: "getIndexOf",
    value: function getIndexOf(sum) {
      sum = Math.floor(sum); // Compute all sums (to get a fully valid prefixSum)

      this.getTotalSum();
      var low = 0;
      var high = this.values.length - 1;
      var mid = 0;
      var midStop = 0;
      var midStart = 0;

      while (low <= high) {
        mid = low + (high - low) / 2 | 0;
        midStop = this.prefixSum[mid];
        midStart = midStop - this.values[mid];

        if (sum < midStart) {
          high = mid - 1;
        } else if (sum >= midStop) {
          low = mid + 1;
        } else {
          break;
        }
      }

      return new prefixSumComputer_PrefixSumIndexOfResult(mid, sum - midStart);
    }
  }]);

  return PrefixSumComputer;
}();
/**
 * {@link getIndexOf} has an amortized runtime complexity of O(1).
 *
 * ({@link PrefixSumComputer.getIndexOf} is just  O(log n))
*/

var prefixSumComputer_ConstantTimePrefixSumComputer = /*#__PURE__*/function () {
  function ConstantTimePrefixSumComputer(values) {
    _classCallCheck(this, ConstantTimePrefixSumComputer);

    this._values = values;
    this._isValid = false;
    this._validEndIndex = -1;
    this._prefixSum = [];
    this._indexBySum = [];
  }
  /**
   * @returns SUM(0 <= j < values.length, values[j])
   */


  _createClass(ConstantTimePrefixSumComputer, [{
    key: "getTotalSum",
    value: function getTotalSum() {
      this._ensureValid();

      return this._indexBySum.length;
    }
    /**
     * Returns the sum of the first `count` many items.
     * @returns `SUM(0 <= j < count, values[j])`.
     */

  }, {
    key: "getPrefixSum",
    value: function getPrefixSum(count) {
      this._ensureValid();

      if (count === 0) {
        return 0;
      }

      return this._prefixSum[count - 1];
    }
    /**
     * @returns `result`, such that `getPrefixSum(result.index) + result.remainder = sum`
     */

  }, {
    key: "getIndexOf",
    value: function getIndexOf(sum) {
      this._ensureValid();

      var idx = this._indexBySum[sum];
      var viewLinesAbove = idx > 0 ? this._prefixSum[idx - 1] : 0;
      return new prefixSumComputer_PrefixSumIndexOfResult(idx, sum - viewLinesAbove);
    }
  }, {
    key: "removeValues",
    value: function removeValues(start, deleteCount) {
      this._values.splice(start, deleteCount);

      this._invalidate(start);
    }
  }, {
    key: "insertValues",
    value: function insertValues(insertIndex, insertArr) {
      this._values = arrayInsert(this._values, insertIndex, insertArr);

      this._invalidate(insertIndex);
    }
  }, {
    key: "_invalidate",
    value: function _invalidate(index) {
      this._isValid = false;
      this._validEndIndex = Math.min(this._validEndIndex, index - 1);
    }
  }, {
    key: "_ensureValid",
    value: function _ensureValid() {
      if (this._isValid) {
        return;
      }

      for (var i = this._validEndIndex + 1, len = this._values.length; i < len; i++) {
        var value = this._values[i];
        var sumAbove = i > 0 ? this._prefixSum[i - 1] : 0;
        this._prefixSum[i] = sumAbove + value;

        for (var j = 0; j < value; j++) {
          this._indexBySum[sumAbove + j] = i;
        }
      } // trim things


      this._prefixSum.length = this._values.length;
      this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1]; // mark as valid

      this._isValid = true;
      this._validEndIndex = this._values.length - 1;
    }
  }, {
    key: "setValue",
    value: function setValue(index, value) {
      if (this._values[index] === value) {
        // no change
        return;
      }

      this._values[index] = value;

      this._invalidate(index);
    }
  }]);

  return ConstantTimePrefixSumComputer;
}();
var prefixSumComputer_PrefixSumIndexOfResult = function PrefixSumIndexOfResult(index, remainder) {
  _classCallCheck(this, PrefixSumIndexOfResult);

  this.index = index;
  this.remainder = remainder;
  this._prefixSumIndexOfResultBrand = undefined;
  this.index = index;
  this.remainder = remainder;
};
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var mirrorTextModel_MirrorTextModel = /*#__PURE__*/function () {
  function MirrorTextModel(uri, lines, eol, versionId) {
    _classCallCheck(this, MirrorTextModel);

    this._uri = uri;
    this._lines = lines;
    this._eol = eol;
    this._versionId = versionId;
    this._lineStarts = null;
    this._cachedTextValue = null;
  }

  _createClass(MirrorTextModel, [{
    key: "dispose",
    value: function dispose() {
      this._lines.length = 0;
    }
  }, {
    key: "version",
    get: function get() {
      return this._versionId;
    }
  }, {
    key: "getText",
    value: function getText() {
      if (this._cachedTextValue === null) {
        this._cachedTextValue = this._lines.join(this._eol);
      }

      return this._cachedTextValue;
    }
  }, {
    key: "onEvents",
    value: function onEvents(e) {
      if (e.eol && e.eol !== this._eol) {
        this._eol = e.eol;
        this._lineStarts = null;
      } // Update my lines


      var changes = e.changes;

      var _iterator = _createForOfIteratorHelper(changes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var change = _step.value;

          this._acceptDeleteRange(change.range);

          this._acceptInsertText(new position_Position(change.range.startLineNumber, change.range.startColumn), change.text);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._versionId = e.versionId;
      this._cachedTextValue = null;
    }
  }, {
    key: "_ensureLineStarts",
    value: function _ensureLineStarts() {
      if (!this._lineStarts) {
        var eolLength = this._eol.length;
        var linesLength = this._lines.length;
        var lineStartValues = new Uint32Array(linesLength);

        for (var i = 0; i < linesLength; i++) {
          lineStartValues[i] = this._lines[i].length + eolLength;
        }

        this._lineStarts = new prefixSumComputer_PrefixSumComputer(lineStartValues);
      }
    }
    /**
     * All changes to a line's text go through this method
     */

  }, {
    key: "_setLineText",
    value: function _setLineText(lineIndex, newValue) {
      this._lines[lineIndex] = newValue;

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.setValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
      }
    }
  }, {
    key: "_acceptDeleteRange",
    value: function _acceptDeleteRange(range) {
      if (range.startLineNumber === range.endLineNumber) {
        if (range.startColumn === range.endColumn) {
          // Nothing to delete
          return;
        } // Delete text on the affected line


        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));

        return;
      } // Take remaining text on last line and append it to remaining text on first line


      this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1)); // Delete middle lines


      this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
      }
    }
  }, {
    key: "_acceptInsertText",
    value: function _acceptInsertText(position, insertText) {
      if (insertText.length === 0) {
        // Nothing to insert
        return;
      }

      var insertLines = splitLines(insertText);

      if (insertLines.length === 1) {
        // Inserting text on one line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0] + this._lines[position.lineNumber - 1].substring(position.column - 1));

        return;
      } // Append overflowing text from first line to the end of text to insert


      insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1); // Delete overflowing text from first line and insert text on first line

      this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0]); // Insert new lines & store lengths


      var newLengths = new Uint32Array(insertLines.length - 1);

      for (var i = 1; i < insertLines.length; i++) {
        this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);

        newLengths[i - 1] = insertLines[i].length + this._eol.length;
      }

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.insertValues(position.lineNumber, newLengths);
      }
    }
  }]);

  return MirrorTextModel;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */

function createWordRegExp() {
  var allowInWords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var source = '(-?\\d*\\.\\d\\w*)|([^';

  var _iterator = _createForOfIteratorHelper(USUAL_WORD_SEPARATORS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sep = _step.value;

      if (allowInWords.indexOf(sep) >= 0) {
        continue;
      }

      source += '\\' + sep;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  source += '\\s]+)';
  return new RegExp(source, 'g');
} // catches numbers (including floating numbers) in the first group, and alphanum in the second


var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
  var result = DEFAULT_WORD_REGEXP;

  if (wordDefinition && wordDefinition instanceof RegExp) {
    if (!wordDefinition.global) {
      var flags = 'g';

      if (wordDefinition.ignoreCase) {
        flags += 'i';
      }

      if (wordDefinition.multiline) {
        flags += 'm';
      }

      if (wordDefinition.unicode) {
        flags += 'u';
      }

      result = new RegExp(wordDefinition.source, flags);
    } else {
      result = wordDefinition;
    }
  }

  result.lastIndex = 0;
  return result;
}
var _defaultConfig = {
  maxLen: 1000,
  windowSize: 15,
  timeBudget: 150
};
function getWordAtText(column, wordDefinition, text, textOffset) {
  var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _defaultConfig;

  if (text.length > config.maxLen) {
    // don't throw strings that long at the regexp
    // but use a sub-string in which a word must occur
    var start = column - config.maxLen / 2;

    if (start < 0) {
      start = 0;
    } else {
      textOffset += start;
    }

    text = text.substring(start, column + config.maxLen / 2);
    return getWordAtText(column, wordDefinition, text, textOffset, config);
  }

  var t1 = Date.now();
  var pos = column - 1 - textOffset;
  var prevRegexIndex = -1;
  var match = null;

  for (var i = 1;; i++) {
    // check time budget
    if (Date.now() - t1 >= config.timeBudget) {
      break;
    } // reset the index at which the regexp should start matching, also know where it
    // should stop so that subsequent search don't repeat previous searches


    var regexIndex = pos - config.windowSize * i;
    wordDefinition.lastIndex = Math.max(0, regexIndex);

    var thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);

    if (!thisMatch && match) {
      // stop: we have something
      break;
    }

    match = thisMatch; // stop: searched at start

    if (regexIndex <= 0) {
      break;
    }

    prevRegexIndex = regexIndex;
  }

  if (match) {
    var result = {
      word: match[0],
      startColumn: textOffset + 1 + match.index,
      endColumn: textOffset + 1 + match.index + match[0].length
    };
    wordDefinition.lastIndex = 0;
    return result;
  }

  return null;
}

function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
  var match;

  while (match = wordDefinition.exec(text)) {
    var matchIndex = match.index || 0;

    if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
      return match;
    } else if (stopPos > 0 && matchIndex > stopPos) {
      return null;
    }
  }

  return null;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A fast character classifier that uses a compact array for ASCII values.
 */

var characterClassifier_CharacterClassifier = /*#__PURE__*/function () {
  function CharacterClassifier(_defaultValue) {
    _classCallCheck(this, CharacterClassifier);

    var defaultValue = toUint8(_defaultValue);
    this._defaultValue = defaultValue;
    this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
    this._map = new Map();
  }

  _createClass(CharacterClassifier, [{
    key: "set",
    value: function set(charCode, _value) {
      var value = toUint8(_value);

      if (charCode >= 0 && charCode < 256) {
        this._asciiMap[charCode] = value;
      } else {
        this._map.set(charCode, value);
      }
    }
  }, {
    key: "get",
    value: function get(charCode) {
      if (charCode >= 0 && charCode < 256) {
        return this._asciiMap[charCode];
      } else {
        return this._map.get(charCode) || this._defaultValue;
      }
    }
  }], [{
    key: "_createAsciiMap",
    value: function _createAsciiMap(defaultValue) {
      var asciiMap = new Uint8Array(256);

      for (var i = 0; i < 256; i++) {
        asciiMap[i] = defaultValue;
      }

      return asciiMap;
    }
  }]);

  return CharacterClassifier;
}();
var characterClassifier_CharacterSet = /*#__PURE__*/function () {
  function CharacterSet() {
    _classCallCheck(this, CharacterSet);

    this._actual = new characterClassifier_CharacterClassifier(0
    /* False */
    );
  }

  _createClass(CharacterSet, [{
    key: "add",
    value: function add(charCode) {
      this._actual.set(charCode, 1
      /* True */
      );
    }
  }, {
    key: "has",
    value: function has(charCode) {
      return this._actual.get(charCode) === 1
      /* True */
      ;
    }
  }]);

  return CharacterSet;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languages/linkComputer.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var linkComputer_Uint8Matrix = /*#__PURE__*/function () {
  function Uint8Matrix(rows, cols, defaultValue) {
    _classCallCheck(this, Uint8Matrix);

    var data = new Uint8Array(rows * cols);

    for (var i = 0, len = rows * cols; i < len; i++) {
      data[i] = defaultValue;
    }

    this._data = data;
    this.rows = rows;
    this.cols = cols;
  }

  _createClass(Uint8Matrix, [{
    key: "get",
    value: function get(row, col) {
      return this._data[row * this.cols + col];
    }
  }, {
    key: "set",
    value: function set(row, col, value) {
      this._data[row * this.cols + col] = value;
    }
  }]);

  return Uint8Matrix;
}();
var linkComputer_StateMachine = /*#__PURE__*/function () {
  function StateMachine(edges) {
    _classCallCheck(this, StateMachine);

    var maxCharCode = 0;
    var maxState = 0
    /* Invalid */
    ;

    for (var i = 0, len = edges.length; i < len; i++) {
      var _edges$i = _slicedToArray(edges[i], 3),
          from = _edges$i[0],
          chCode = _edges$i[1],
          to = _edges$i[2];

      if (chCode > maxCharCode) {
        maxCharCode = chCode;
      }

      if (from > maxState) {
        maxState = from;
      }

      if (to > maxState) {
        maxState = to;
      }
    }

    maxCharCode++;
    maxState++;
    var states = new linkComputer_Uint8Matrix(maxState, maxCharCode, 0
    /* Invalid */
    );

    for (var _i = 0, _len = edges.length; _i < _len; _i++) {
      var _edges$_i = _slicedToArray(edges[_i], 3),
          _from = _edges$_i[0],
          _chCode = _edges$_i[1],
          _to = _edges$_i[2];

      states.set(_from, _chCode, _to);
    }

    this._states = states;
    this._maxCharCode = maxCharCode;
  }

  _createClass(StateMachine, [{
    key: "nextState",
    value: function nextState(currentState, chCode) {
      if (chCode < 0 || chCode >= this._maxCharCode) {
        return 0
        /* Invalid */
        ;
      }

      return this._states.get(currentState, chCode);
    }
  }]);

  return StateMachine;
}(); // State machine for http:// or https:// or file://

var _stateMachine = null;

function getStateMachine() {
  if (_stateMachine === null) {
    _stateMachine = new linkComputer_StateMachine([[1
    /* Start */
    , 104
    /* h */
    , 2
    /* H */
    ], [1
    /* Start */
    , 72
    /* H */
    , 2
    /* H */
    ], [1
    /* Start */
    , 102
    /* f */
    , 6
    /* F */
    ], [1
    /* Start */
    , 70
    /* F */
    , 6
    /* F */
    ], [2
    /* H */
    , 116
    /* t */
    , 3
    /* HT */
    ], [2
    /* H */
    , 84
    /* T */
    , 3
    /* HT */
    ], [3
    /* HT */
    , 116
    /* t */
    , 4
    /* HTT */
    ], [3
    /* HT */
    , 84
    /* T */
    , 4
    /* HTT */
    ], [4
    /* HTT */
    , 112
    /* p */
    , 5
    /* HTTP */
    ], [4
    /* HTT */
    , 80
    /* P */
    , 5
    /* HTTP */
    ], [5
    /* HTTP */
    , 115
    /* s */
    , 9
    /* BeforeColon */
    ], [5
    /* HTTP */
    , 83
    /* S */
    , 9
    /* BeforeColon */
    ], [5
    /* HTTP */
    , 58
    /* Colon */
    , 10
    /* AfterColon */
    ], [6
    /* F */
    , 105
    /* i */
    , 7
    /* FI */
    ], [6
    /* F */
    , 73
    /* I */
    , 7
    /* FI */
    ], [7
    /* FI */
    , 108
    /* l */
    , 8
    /* FIL */
    ], [7
    /* FI */
    , 76
    /* L */
    , 8
    /* FIL */
    ], [8
    /* FIL */
    , 101
    /* e */
    , 9
    /* BeforeColon */
    ], [8
    /* FIL */
    , 69
    /* E */
    , 9
    /* BeforeColon */
    ], [9
    /* BeforeColon */
    , 58
    /* Colon */
    , 10
    /* AfterColon */
    ], [10
    /* AfterColon */
    , 47
    /* Slash */
    , 11
    /* AlmostThere */
    ], [11
    /* AlmostThere */
    , 47
    /* Slash */
    , 12
    /* End */
    ]]);
  }

  return _stateMachine;
}

var _classifier = null;

function getClassifier() {
  if (_classifier === null) {
    _classifier = new characterClassifier_CharacterClassifier(0
    /* None */
    ); // allow-any-unicode-next-line

    var FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…';

    for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
      _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1
      /* ForceTermination */
      );
    }

    var CANNOT_END_WITH_CHARACTERS = '.,;';

    for (var _i2 = 0; _i2 < CANNOT_END_WITH_CHARACTERS.length; _i2++) {
      _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(_i2), 2
      /* CannotEndIn */
      );
    }
  }

  return _classifier;
}

var linkComputer_LinkComputer = /*#__PURE__*/function () {
  function LinkComputer() {
    _classCallCheck(this, LinkComputer);
  }

  _createClass(LinkComputer, null, [{
    key: "_createLink",
    value: function _createLink(classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
      // Do not allow to end link in certain characters...
      var lastIncludedCharIndex = linkEndIndex - 1;

      do {
        var chCode = line.charCodeAt(lastIncludedCharIndex);
        var chClass = classifier.get(chCode);

        if (chClass !== 2
        /* CannotEndIn */
        ) {
            break;
          }

        lastIncludedCharIndex--;
      } while (lastIncludedCharIndex > linkBeginIndex); // Handle links enclosed in parens, square brackets and curlys.


      if (linkBeginIndex > 0) {
        var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
        var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);

        if (charCodeBeforeLink === 40
        /* OpenParen */
        && lastCharCodeInLink === 41
        /* CloseParen */
        || charCodeBeforeLink === 91
        /* OpenSquareBracket */
        && lastCharCodeInLink === 93
        /* CloseSquareBracket */
        || charCodeBeforeLink === 123
        /* OpenCurlyBrace */
        && lastCharCodeInLink === 125
        /* CloseCurlyBrace */
        ) {
          // Do not end in ) if ( is before the link start
          // Do not end in ] if [ is before the link start
          // Do not end in } if { is before the link start
          lastIncludedCharIndex--;
        }
      }

      return {
        range: {
          startLineNumber: lineNumber,
          startColumn: linkBeginIndex + 1,
          endLineNumber: lineNumber,
          endColumn: lastIncludedCharIndex + 2
        },
        url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
      };
    }
  }, {
    key: "computeLinks",
    value: function computeLinks(model) {
      var stateMachine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getStateMachine();
      var classifier = getClassifier();
      var result = [];

      for (var i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
        var line = model.getLineContent(i);
        var len = line.length;
        var j = 0;
        var linkBeginIndex = 0;
        var linkBeginChCode = 0;
        var state = 1
        /* Start */
        ;
        var hasOpenParens = false;
        var hasOpenSquareBracket = false;
        var inSquareBrackets = false;
        var hasOpenCurlyBracket = false;

        while (j < len) {
          var resetStateMachine = false;
          var chCode = line.charCodeAt(j);

          if (state === 13
          /* Accept */
          ) {
              var chClass = void 0;

              switch (chCode) {
                case 40
                /* OpenParen */
                :
                  hasOpenParens = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 41
                /* CloseParen */
                :
                  chClass = hasOpenParens ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 91
                /* OpenSquareBracket */
                :
                  inSquareBrackets = true;
                  hasOpenSquareBracket = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 93
                /* CloseSquareBracket */
                :
                  inSquareBrackets = false;
                  chClass = hasOpenSquareBracket ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 123
                /* OpenCurlyBrace */
                :
                  hasOpenCurlyBracket = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 125
                /* CloseCurlyBrace */
                :
                  chClass = hasOpenCurlyBracket ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */

                case 39
                /* SingleQuote */
                :
                  chClass = linkBeginChCode === 34
                  /* DoubleQuote */
                  || linkBeginChCode === 96
                  /* BackTick */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 34
                /* DoubleQuote */
                :
                  chClass = linkBeginChCode === 39
                  /* SingleQuote */
                  || linkBeginChCode === 96
                  /* BackTick */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 96
                /* BackTick */
                :
                  chClass = linkBeginChCode === 39
                  /* SingleQuote */
                  || linkBeginChCode === 34
                  /* DoubleQuote */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 42
                /* Asterisk */
                :
                  // `*` terminates a link if the link began with `*`
                  chClass = linkBeginChCode === 42
                  /* Asterisk */
                  ? 1
                  /* ForceTermination */
                  : 0
                  /* None */
                  ;
                  break;

                case 124
                /* Pipe */
                :
                  // `|` terminates a link if the link began with `|`
                  chClass = linkBeginChCode === 124
                  /* Pipe */
                  ? 1
                  /* ForceTermination */
                  : 0
                  /* None */
                  ;
                  break;

                case 32
                /* Space */
                :
                  // ` ` allow space in between [ and ]
                  chClass = inSquareBrackets ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                default:
                  chClass = classifier.get(chCode);
              } // Check if character terminates link


              if (chClass === 1
              /* ForceTermination */
              ) {
                  result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                  resetStateMachine = true;
                }
            } else if (state === 12
          /* End */
          ) {
              var _chClass = void 0;

              if (chCode === 91
              /* OpenSquareBracket */
              ) {
                  // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                  hasOpenSquareBracket = true;
                  _chClass = 0
                  /* None */
                  ;
                } else {
                _chClass = classifier.get(chCode);
              } // Check if character terminates link


              if (_chClass === 1
              /* ForceTermination */
              ) {
                  resetStateMachine = true;
                } else {
                state = 13
                /* Accept */
                ;
              }
            } else {
            state = stateMachine.nextState(state, chCode);

            if (state === 0
            /* Invalid */
            ) {
                resetStateMachine = true;
              }
          }

          if (resetStateMachine) {
            state = 1
            /* Start */
            ;
            hasOpenParens = false;
            hasOpenSquareBracket = false;
            hasOpenCurlyBracket = false; // Record where the link started

            linkBeginIndex = j + 1;
            linkBeginChCode = chCode;
          }

          j++;
        }

        if (state === 13
        /* Accept */
        ) {
            result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
          }
      }

      return result;
    }
  }]);

  return LinkComputer;
}();
/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */

function linkComputer_computeLinks(model) {
  if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
    // Unknown caller!
    return [];
  }

  return linkComputer_LinkComputer.computeLinks(model);
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/inplaceReplaceSupport.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inplaceReplaceSupport_BasicInplaceReplace = /*#__PURE__*/function () {
  function BasicInplaceReplace() {
    _classCallCheck(this, BasicInplaceReplace);

    this._defaultValueSet = [['true', 'false'], ['True', 'False'], ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'], ['public', 'protected', 'private']];
  }

  _createClass(BasicInplaceReplace, [{
    key: "navigateValueSet",
    value: function navigateValueSet(range1, text1, range2, text2, up) {
      if (range1 && text1) {
        var result = this.doNavigateValueSet(text1, up);

        if (result) {
          return {
            range: range1,
            value: result
          };
        }
      }

      if (range2 && text2) {
        var _result = this.doNavigateValueSet(text2, up);

        if (_result) {
          return {
            range: range2,
            value: _result
          };
        }
      }

      return null;
    }
  }, {
    key: "doNavigateValueSet",
    value: function doNavigateValueSet(text, up) {
      var numberResult = this.numberReplace(text, up);

      if (numberResult !== null) {
        return numberResult;
      }

      return this.textReplace(text, up);
    }
  }, {
    key: "numberReplace",
    value: function numberReplace(value, up) {
      var precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
      var n1 = Number(value);
      var n2 = parseFloat(value);

      if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
        if (n1 === 0 && !up) {
          return null; // don't do negative
          //			} else if(n1 === 9 && up) {
          //				return null; // don't insert 10 into a number
        } else {
          n1 = Math.floor(n1 * precision);
          n1 += up ? precision : -precision;
          return String(n1 / precision);
        }
      }

      return null;
    }
  }, {
    key: "textReplace",
    value: function textReplace(value, up) {
      return this.valueSetsReplace(this._defaultValueSet, value, up);
    }
  }, {
    key: "valueSetsReplace",
    value: function valueSetsReplace(valueSets, value, up) {
      var result = null;

      for (var i = 0, len = valueSets.length; result === null && i < len; i++) {
        result = this.valueSetReplace(valueSets[i], value, up);
      }

      return result;
    }
  }, {
    key: "valueSetReplace",
    value: function valueSetReplace(valueSet, value, up) {
      var idx = valueSet.indexOf(value);

      if (idx >= 0) {
        idx += up ? +1 : -1;

        if (idx < 0) {
          idx = valueSet.length - 1;
        } else {
          idx %= valueSet.length;
        }

        return valueSet[idx];
      }

      return null;
    }
  }]);

  return BasicInplaceReplace;
}();
inplaceReplaceSupport_BasicInplaceReplace.INSTANCE = new inplaceReplaceSupport_BasicInplaceReplace();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/cancellation.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var shortcutEvent = Object.freeze(function (callback, context) {
  var handle = setTimeout(callback.bind(context), 0);
  return {
    dispose: function dispose() {
      clearTimeout(handle);
    }
  };
});
var cancellation_CancellationToken;

(function (CancellationToken) {
  function isCancellationToken(thing) {
    if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
      return true;
    }

    if (thing instanceof cancellation_MutableToken) {
      return true;
    }

    if (!thing || typeof thing !== 'object') {
      return false;
    }

    return typeof thing.isCancellationRequested === 'boolean' && typeof thing.onCancellationRequested === 'function';
  }

  CancellationToken.isCancellationToken = isCancellationToken;
  CancellationToken.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: event_Event.None
  });
  CancellationToken.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: shortcutEvent
  });
})(cancellation_CancellationToken || (cancellation_CancellationToken = {}));

var cancellation_MutableToken = /*#__PURE__*/function () {
  function MutableToken() {
    _classCallCheck(this, MutableToken);

    this._isCancelled = false;
    this._emitter = null;
  }

  _createClass(MutableToken, [{
    key: "cancel",
    value: function cancel() {
      if (!this._isCancelled) {
        this._isCancelled = true;

        if (this._emitter) {
          this._emitter.fire(undefined);

          this.dispose();
        }
      }
    }
  }, {
    key: "isCancellationRequested",
    get: function get() {
      return this._isCancelled;
    }
  }, {
    key: "onCancellationRequested",
    get: function get() {
      if (this._isCancelled) {
        return shortcutEvent;
      }

      if (!this._emitter) {
        this._emitter = new event_Emitter();
      }

      return this._emitter.event;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._emitter) {
        this._emitter.dispose();

        this._emitter = null;
      }
    }
  }]);

  return MutableToken;
}();

var cancellation_CancellationTokenSource = /*#__PURE__*/function () {
  function CancellationTokenSource(parent) {
    _classCallCheck(this, CancellationTokenSource);

    this._token = undefined;
    this._parentListener = undefined;
    this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
  }

  _createClass(CancellationTokenSource, [{
    key: "token",
    get: function get() {
      if (!this._token) {
        // be lazy and create the token only when
        // actually needed
        this._token = new cancellation_MutableToken();
      }

      return this._token;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (!this._token) {
        // save an object by returning the default
        // cancelled token when cancellation happens
        // before someone asks for the token
        this._token = cancellation_CancellationToken.Cancelled;
      } else if (this._token instanceof cancellation_MutableToken) {
        // actually cancel
        this._token.cancel();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var cancel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (cancel) {
        this.cancel();
      }

      if (this._parentListener) {
        this._parentListener.dispose();
      }

      if (!this._token) {
        // ensure to initialize with an empty token if we had none
        this._token = cancellation_CancellationToken.None;
      } else if (this._token instanceof cancellation_MutableToken) {
        // actually dispose
        this._token.dispose();
      }
    }
  }]);

  return CancellationTokenSource;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var keyCodes_KeyCodeStrMap = /*#__PURE__*/function () {
  function KeyCodeStrMap() {
    _classCallCheck(this, KeyCodeStrMap);

    this._keyCodeToStr = [];
    this._strToKeyCode = Object.create(null);
  }

  _createClass(KeyCodeStrMap, [{
    key: "define",
    value: function define(keyCode, str) {
      this._keyCodeToStr[keyCode] = str;
      this._strToKeyCode[str.toLowerCase()] = keyCode;
    }
  }, {
    key: "keyCodeToStr",
    value: function keyCodeToStr(keyCode) {
      return this._keyCodeToStr[keyCode];
    }
  }, {
    key: "strToKeyCode",
    value: function strToKeyCode(str) {
      return this._strToKeyCode[str.toLowerCase()] || 0
      /* Unknown */
      ;
    }
  }]);

  return KeyCodeStrMap;
}();

var uiMap = new keyCodes_KeyCodeStrMap();
var userSettingsUSMap = new keyCodes_KeyCodeStrMap();
var userSettingsGeneralMap = new keyCodes_KeyCodeStrMap();
var EVENT_KEY_CODE_MAP = new Array(230);
var NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {};
var scanCodeIntToStr = [];
var scanCodeStrToInt = Object.create(null);
var scanCodeLowerCaseStrToInt = Object.create(null);
/**
 * -1 if a ScanCode => KeyCode mapping depends on kb layout.
 */

var IMMUTABLE_CODE_TO_KEY_CODE = [];
/**
 * -1 if a KeyCode => ScanCode mapping depends on kb layout.
 */

var IMMUTABLE_KEY_CODE_TO_CODE = [];

for (var keyCodes_i = 0; keyCodes_i <= 193
/* MAX_VALUE */
; keyCodes_i++) {
  IMMUTABLE_CODE_TO_KEY_CODE[keyCodes_i] = -1
  /* DependsOnKbLayout */
  ;
}

for (var common_keyCodes_i = 0; common_keyCodes_i <= 126
/* MAX_VALUE */
; common_keyCodes_i++) {
  IMMUTABLE_KEY_CODE_TO_CODE[common_keyCodes_i] = -1
  /* DependsOnKbLayout */
  ;
}

(function () {
  // See https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
  // See https://github.com/microsoft/node-native-keymap/blob/master/deps/chromium/keyboard_codes_win.h
  var empty = '';
  var mappings = [// keyCodeOrd, immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel
  [0, 1, 0
  /* None */
  , 'None', 0
  /* Unknown */
  , 'unknown', 0, 'VK_UNKNOWN', empty, empty], [0, 1, 1
  /* Hyper */
  , 'Hyper', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 2
  /* Super */
  , 'Super', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 3
  /* Fn */
  , 'Fn', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 4
  /* FnLock */
  , 'FnLock', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 5
  /* Suspend */
  , 'Suspend', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 6
  /* Resume */
  , 'Resume', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 7
  /* Turbo */
  , 'Turbo', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 8
  /* Sleep */
  , 'Sleep', 0
  /* Unknown */
  , empty, 0, 'VK_SLEEP', empty, empty], [0, 1, 9
  /* WakeUp */
  , 'WakeUp', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [31, 0, 10
  /* KeyA */
  , 'KeyA', 31
  /* KeyA */
  , 'A', 65, 'VK_A', empty, empty], [32, 0, 11
  /* KeyB */
  , 'KeyB', 32
  /* KeyB */
  , 'B', 66, 'VK_B', empty, empty], [33, 0, 12
  /* KeyC */
  , 'KeyC', 33
  /* KeyC */
  , 'C', 67, 'VK_C', empty, empty], [34, 0, 13
  /* KeyD */
  , 'KeyD', 34
  /* KeyD */
  , 'D', 68, 'VK_D', empty, empty], [35, 0, 14
  /* KeyE */
  , 'KeyE', 35
  /* KeyE */
  , 'E', 69, 'VK_E', empty, empty], [36, 0, 15
  /* KeyF */
  , 'KeyF', 36
  /* KeyF */
  , 'F', 70, 'VK_F', empty, empty], [37, 0, 16
  /* KeyG */
  , 'KeyG', 37
  /* KeyG */
  , 'G', 71, 'VK_G', empty, empty], [38, 0, 17
  /* KeyH */
  , 'KeyH', 38
  /* KeyH */
  , 'H', 72, 'VK_H', empty, empty], [39, 0, 18
  /* KeyI */
  , 'KeyI', 39
  /* KeyI */
  , 'I', 73, 'VK_I', empty, empty], [40, 0, 19
  /* KeyJ */
  , 'KeyJ', 40
  /* KeyJ */
  , 'J', 74, 'VK_J', empty, empty], [41, 0, 20
  /* KeyK */
  , 'KeyK', 41
  /* KeyK */
  , 'K', 75, 'VK_K', empty, empty], [42, 0, 21
  /* KeyL */
  , 'KeyL', 42
  /* KeyL */
  , 'L', 76, 'VK_L', empty, empty], [43, 0, 22
  /* KeyM */
  , 'KeyM', 43
  /* KeyM */
  , 'M', 77, 'VK_M', empty, empty], [44, 0, 23
  /* KeyN */
  , 'KeyN', 44
  /* KeyN */
  , 'N', 78, 'VK_N', empty, empty], [45, 0, 24
  /* KeyO */
  , 'KeyO', 45
  /* KeyO */
  , 'O', 79, 'VK_O', empty, empty], [46, 0, 25
  /* KeyP */
  , 'KeyP', 46
  /* KeyP */
  , 'P', 80, 'VK_P', empty, empty], [47, 0, 26
  /* KeyQ */
  , 'KeyQ', 47
  /* KeyQ */
  , 'Q', 81, 'VK_Q', empty, empty], [48, 0, 27
  /* KeyR */
  , 'KeyR', 48
  /* KeyR */
  , 'R', 82, 'VK_R', empty, empty], [49, 0, 28
  /* KeyS */
  , 'KeyS', 49
  /* KeyS */
  , 'S', 83, 'VK_S', empty, empty], [50, 0, 29
  /* KeyT */
  , 'KeyT', 50
  /* KeyT */
  , 'T', 84, 'VK_T', empty, empty], [51, 0, 30
  /* KeyU */
  , 'KeyU', 51
  /* KeyU */
  , 'U', 85, 'VK_U', empty, empty], [52, 0, 31
  /* KeyV */
  , 'KeyV', 52
  /* KeyV */
  , 'V', 86, 'VK_V', empty, empty], [53, 0, 32
  /* KeyW */
  , 'KeyW', 53
  /* KeyW */
  , 'W', 87, 'VK_W', empty, empty], [54, 0, 33
  /* KeyX */
  , 'KeyX', 54
  /* KeyX */
  , 'X', 88, 'VK_X', empty, empty], [55, 0, 34
  /* KeyY */
  , 'KeyY', 55
  /* KeyY */
  , 'Y', 89, 'VK_Y', empty, empty], [56, 0, 35
  /* KeyZ */
  , 'KeyZ', 56
  /* KeyZ */
  , 'Z', 90, 'VK_Z', empty, empty], [22, 0, 36
  /* Digit1 */
  , 'Digit1', 22
  /* Digit1 */
  , '1', 49, 'VK_1', empty, empty], [23, 0, 37
  /* Digit2 */
  , 'Digit2', 23
  /* Digit2 */
  , '2', 50, 'VK_2', empty, empty], [24, 0, 38
  /* Digit3 */
  , 'Digit3', 24
  /* Digit3 */
  , '3', 51, 'VK_3', empty, empty], [25, 0, 39
  /* Digit4 */
  , 'Digit4', 25
  /* Digit4 */
  , '4', 52, 'VK_4', empty, empty], [26, 0, 40
  /* Digit5 */
  , 'Digit5', 26
  /* Digit5 */
  , '5', 53, 'VK_5', empty, empty], [27, 0, 41
  /* Digit6 */
  , 'Digit6', 27
  /* Digit6 */
  , '6', 54, 'VK_6', empty, empty], [28, 0, 42
  /* Digit7 */
  , 'Digit7', 28
  /* Digit7 */
  , '7', 55, 'VK_7', empty, empty], [29, 0, 43
  /* Digit8 */
  , 'Digit8', 29
  /* Digit8 */
  , '8', 56, 'VK_8', empty, empty], [30, 0, 44
  /* Digit9 */
  , 'Digit9', 30
  /* Digit9 */
  , '9', 57, 'VK_9', empty, empty], [21, 0, 45
  /* Digit0 */
  , 'Digit0', 21
  /* Digit0 */
  , '0', 48, 'VK_0', empty, empty], [3, 1, 46
  /* Enter */
  , 'Enter', 3
  /* Enter */
  , 'Enter', 13, 'VK_RETURN', empty, empty], [9, 1, 47
  /* Escape */
  , 'Escape', 9
  /* Escape */
  , 'Escape', 27, 'VK_ESCAPE', empty, empty], [1, 1, 48
  /* Backspace */
  , 'Backspace', 1
  /* Backspace */
  , 'Backspace', 8, 'VK_BACK', empty, empty], [2, 1, 49
  /* Tab */
  , 'Tab', 2
  /* Tab */
  , 'Tab', 9, 'VK_TAB', empty, empty], [10, 1, 50
  /* Space */
  , 'Space', 10
  /* Space */
  , 'Space', 32, 'VK_SPACE', empty, empty], [83, 0, 51
  /* Minus */
  , 'Minus', 83
  /* Minus */
  , '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'], [81, 0, 52
  /* Equal */
  , 'Equal', 81
  /* Equal */
  , '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'], [87, 0, 53
  /* BracketLeft */
  , 'BracketLeft', 87
  /* BracketLeft */
  , '[', 219, 'VK_OEM_4', '[', 'OEM_4'], [89, 0, 54
  /* BracketRight */
  , 'BracketRight', 89
  /* BracketRight */
  , ']', 221, 'VK_OEM_6', ']', 'OEM_6'], [88, 0, 55
  /* Backslash */
  , 'Backslash', 88
  /* Backslash */
  , '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'], [0, 0, 56
  /* IntlHash */
  , 'IntlHash', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [80, 0, 57
  /* Semicolon */
  , 'Semicolon', 80
  /* Semicolon */
  , ';', 186, 'VK_OEM_1', ';', 'OEM_1'], [90, 0, 58
  /* Quote */
  , 'Quote', 90
  /* Quote */
  , '\'', 222, 'VK_OEM_7', '\'', 'OEM_7'], [86, 0, 59
  /* Backquote */
  , 'Backquote', 86
  /* Backquote */
  , '`', 192, 'VK_OEM_3', '`', 'OEM_3'], [82, 0, 60
  /* Comma */
  , 'Comma', 82
  /* Comma */
  , ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'], [84, 0, 61
  /* Period */
  , 'Period', 84
  /* Period */
  , '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'], [85, 0, 62
  /* Slash */
  , 'Slash', 85
  /* Slash */
  , '/', 191, 'VK_OEM_2', '/', 'OEM_2'], [8, 1, 63
  /* CapsLock */
  , 'CapsLock', 8
  /* CapsLock */
  , 'CapsLock', 20, 'VK_CAPITAL', empty, empty], [59, 1, 64
  /* F1 */
  , 'F1', 59
  /* F1 */
  , 'F1', 112, 'VK_F1', empty, empty], [60, 1, 65
  /* F2 */
  , 'F2', 60
  /* F2 */
  , 'F2', 113, 'VK_F2', empty, empty], [61, 1, 66
  /* F3 */
  , 'F3', 61
  /* F3 */
  , 'F3', 114, 'VK_F3', empty, empty], [62, 1, 67
  /* F4 */
  , 'F4', 62
  /* F4 */
  , 'F4', 115, 'VK_F4', empty, empty], [63, 1, 68
  /* F5 */
  , 'F5', 63
  /* F5 */
  , 'F5', 116, 'VK_F5', empty, empty], [64, 1, 69
  /* F6 */
  , 'F6', 64
  /* F6 */
  , 'F6', 117, 'VK_F6', empty, empty], [65, 1, 70
  /* F7 */
  , 'F7', 65
  /* F7 */
  , 'F7', 118, 'VK_F7', empty, empty], [66, 1, 71
  /* F8 */
  , 'F8', 66
  /* F8 */
  , 'F8', 119, 'VK_F8', empty, empty], [67, 1, 72
  /* F9 */
  , 'F9', 67
  /* F9 */
  , 'F9', 120, 'VK_F9', empty, empty], [68, 1, 73
  /* F10 */
  , 'F10', 68
  /* F10 */
  , 'F10', 121, 'VK_F10', empty, empty], [69, 1, 74
  /* F11 */
  , 'F11', 69
  /* F11 */
  , 'F11', 122, 'VK_F11', empty, empty], [70, 1, 75
  /* F12 */
  , 'F12', 70
  /* F12 */
  , 'F12', 123, 'VK_F12', empty, empty], [0, 1, 76
  /* PrintScreen */
  , 'PrintScreen', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [79, 1, 77
  /* ScrollLock */
  , 'ScrollLock', 79
  /* ScrollLock */
  , 'ScrollLock', 145, 'VK_SCROLL', empty, empty], [7, 1, 78
  /* Pause */
  , 'Pause', 7
  /* PauseBreak */
  , 'PauseBreak', 19, 'VK_PAUSE', empty, empty], [19, 1, 79
  /* Insert */
  , 'Insert', 19
  /* Insert */
  , 'Insert', 45, 'VK_INSERT', empty, empty], [14, 1, 80
  /* Home */
  , 'Home', 14
  /* Home */
  , 'Home', 36, 'VK_HOME', empty, empty], [11, 1, 81
  /* PageUp */
  , 'PageUp', 11
  /* PageUp */
  , 'PageUp', 33, 'VK_PRIOR', empty, empty], [20, 1, 82
  /* Delete */
  , 'Delete', 20
  /* Delete */
  , 'Delete', 46, 'VK_DELETE', empty, empty], [13, 1, 83
  /* End */
  , 'End', 13
  /* End */
  , 'End', 35, 'VK_END', empty, empty], [12, 1, 84
  /* PageDown */
  , 'PageDown', 12
  /* PageDown */
  , 'PageDown', 34, 'VK_NEXT', empty, empty], [17, 1, 85
  /* ArrowRight */
  , 'ArrowRight', 17
  /* RightArrow */
  , 'RightArrow', 39, 'VK_RIGHT', 'Right', empty], [15, 1, 86
  /* ArrowLeft */
  , 'ArrowLeft', 15
  /* LeftArrow */
  , 'LeftArrow', 37, 'VK_LEFT', 'Left', empty], [18, 1, 87
  /* ArrowDown */
  , 'ArrowDown', 18
  /* DownArrow */
  , 'DownArrow', 40, 'VK_DOWN', 'Down', empty], [16, 1, 88
  /* ArrowUp */
  , 'ArrowUp', 16
  /* UpArrow */
  , 'UpArrow', 38, 'VK_UP', 'Up', empty], [78, 1, 89
  /* NumLock */
  , 'NumLock', 78
  /* NumLock */
  , 'NumLock', 144, 'VK_NUMLOCK', empty, empty], [108, 1, 90
  /* NumpadDivide */
  , 'NumpadDivide', 108
  /* NumpadDivide */
  , 'NumPad_Divide', 111, 'VK_DIVIDE', empty, empty], [103, 1, 91
  /* NumpadMultiply */
  , 'NumpadMultiply', 103
  /* NumpadMultiply */
  , 'NumPad_Multiply', 106, 'VK_MULTIPLY', empty, empty], [106, 1, 92
  /* NumpadSubtract */
  , 'NumpadSubtract', 106
  /* NumpadSubtract */
  , 'NumPad_Subtract', 109, 'VK_SUBTRACT', empty, empty], [104, 1, 93
  /* NumpadAdd */
  , 'NumpadAdd', 104
  /* NumpadAdd */
  , 'NumPad_Add', 107, 'VK_ADD', empty, empty], [3, 1, 94
  /* NumpadEnter */
  , 'NumpadEnter', 3
  /* Enter */
  , empty, 0, empty, empty, empty], [94, 1, 95
  /* Numpad1 */
  , 'Numpad1', 94
  /* Numpad1 */
  , 'NumPad1', 97, 'VK_NUMPAD1', empty, empty], [95, 1, 96
  /* Numpad2 */
  , 'Numpad2', 95
  /* Numpad2 */
  , 'NumPad2', 98, 'VK_NUMPAD2', empty, empty], [96, 1, 97
  /* Numpad3 */
  , 'Numpad3', 96
  /* Numpad3 */
  , 'NumPad3', 99, 'VK_NUMPAD3', empty, empty], [97, 1, 98
  /* Numpad4 */
  , 'Numpad4', 97
  /* Numpad4 */
  , 'NumPad4', 100, 'VK_NUMPAD4', empty, empty], [98, 1, 99
  /* Numpad5 */
  , 'Numpad5', 98
  /* Numpad5 */
  , 'NumPad5', 101, 'VK_NUMPAD5', empty, empty], [99, 1, 100
  /* Numpad6 */
  , 'Numpad6', 99
  /* Numpad6 */
  , 'NumPad6', 102, 'VK_NUMPAD6', empty, empty], [100, 1, 101
  /* Numpad7 */
  , 'Numpad7', 100
  /* Numpad7 */
  , 'NumPad7', 103, 'VK_NUMPAD7', empty, empty], [101, 1, 102
  /* Numpad8 */
  , 'Numpad8', 101
  /* Numpad8 */
  , 'NumPad8', 104, 'VK_NUMPAD8', empty, empty], [102, 1, 103
  /* Numpad9 */
  , 'Numpad9', 102
  /* Numpad9 */
  , 'NumPad9', 105, 'VK_NUMPAD9', empty, empty], [93, 1, 104
  /* Numpad0 */
  , 'Numpad0', 93
  /* Numpad0 */
  , 'NumPad0', 96, 'VK_NUMPAD0', empty, empty], [107, 1, 105
  /* NumpadDecimal */
  , 'NumpadDecimal', 107
  /* NumpadDecimal */
  , 'NumPad_Decimal', 110, 'VK_DECIMAL', empty, empty], [92, 0, 106
  /* IntlBackslash */
  , 'IntlBackslash', 92
  /* IntlBackslash */
  , 'OEM_102', 226, 'VK_OEM_102', empty, empty], [58, 1, 107
  /* ContextMenu */
  , 'ContextMenu', 58
  /* ContextMenu */
  , 'ContextMenu', 93, empty, empty, empty], [0, 1, 108
  /* Power */
  , 'Power', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 109
  /* NumpadEqual */
  , 'NumpadEqual', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [71, 1, 110
  /* F13 */
  , 'F13', 71
  /* F13 */
  , 'F13', 124, 'VK_F13', empty, empty], [72, 1, 111
  /* F14 */
  , 'F14', 72
  /* F14 */
  , 'F14', 125, 'VK_F14', empty, empty], [73, 1, 112
  /* F15 */
  , 'F15', 73
  /* F15 */
  , 'F15', 126, 'VK_F15', empty, empty], [74, 1, 113
  /* F16 */
  , 'F16', 74
  /* F16 */
  , 'F16', 127, 'VK_F16', empty, empty], [75, 1, 114
  /* F17 */
  , 'F17', 75
  /* F17 */
  , 'F17', 128, 'VK_F17', empty, empty], [76, 1, 115
  /* F18 */
  , 'F18', 76
  /* F18 */
  , 'F18', 129, 'VK_F18', empty, empty], [77, 1, 116
  /* F19 */
  , 'F19', 77
  /* F19 */
  , 'F19', 130, 'VK_F19', empty, empty], [0, 1, 117
  /* F20 */
  , 'F20', 0
  /* Unknown */
  , empty, 0, 'VK_F20', empty, empty], [0, 1, 118
  /* F21 */
  , 'F21', 0
  /* Unknown */
  , empty, 0, 'VK_F21', empty, empty], [0, 1, 119
  /* F22 */
  , 'F22', 0
  /* Unknown */
  , empty, 0, 'VK_F22', empty, empty], [0, 1, 120
  /* F23 */
  , 'F23', 0
  /* Unknown */
  , empty, 0, 'VK_F23', empty, empty], [0, 1, 121
  /* F24 */
  , 'F24', 0
  /* Unknown */
  , empty, 0, 'VK_F24', empty, empty], [0, 1, 122
  /* Open */
  , 'Open', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 123
  /* Help */
  , 'Help', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 124
  /* Select */
  , 'Select', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 125
  /* Again */
  , 'Again', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 126
  /* Undo */
  , 'Undo', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 127
  /* Cut */
  , 'Cut', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 128
  /* Copy */
  , 'Copy', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 129
  /* Paste */
  , 'Paste', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 130
  /* Find */
  , 'Find', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 131
  /* AudioVolumeMute */
  , 'AudioVolumeMute', 112
  /* AudioVolumeMute */
  , 'AudioVolumeMute', 173, 'VK_VOLUME_MUTE', empty, empty], [0, 1, 132
  /* AudioVolumeUp */
  , 'AudioVolumeUp', 113
  /* AudioVolumeUp */
  , 'AudioVolumeUp', 175, 'VK_VOLUME_UP', empty, empty], [0, 1, 133
  /* AudioVolumeDown */
  , 'AudioVolumeDown', 114
  /* AudioVolumeDown */
  , 'AudioVolumeDown', 174, 'VK_VOLUME_DOWN', empty, empty], [105, 1, 134
  /* NumpadComma */
  , 'NumpadComma', 105
  /* NUMPAD_SEPARATOR */
  , 'NumPad_Separator', 108, 'VK_SEPARATOR', empty, empty], [110, 0, 135
  /* IntlRo */
  , 'IntlRo', 110
  /* ABNT_C1 */
  , 'ABNT_C1', 193, 'VK_ABNT_C1', empty, empty], [0, 1, 136
  /* KanaMode */
  , 'KanaMode', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 0, 137
  /* IntlYen */
  , 'IntlYen', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 138
  /* Convert */
  , 'Convert', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 139
  /* NonConvert */
  , 'NonConvert', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 140
  /* Lang1 */
  , 'Lang1', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 141
  /* Lang2 */
  , 'Lang2', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 142
  /* Lang3 */
  , 'Lang3', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 143
  /* Lang4 */
  , 'Lang4', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 144
  /* Lang5 */
  , 'Lang5', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 145
  /* Abort */
  , 'Abort', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 146
  /* Props */
  , 'Props', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 147
  /* NumpadParenLeft */
  , 'NumpadParenLeft', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 148
  /* NumpadParenRight */
  , 'NumpadParenRight', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 149
  /* NumpadBackspace */
  , 'NumpadBackspace', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 150
  /* NumpadMemoryStore */
  , 'NumpadMemoryStore', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 151
  /* NumpadMemoryRecall */
  , 'NumpadMemoryRecall', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 152
  /* NumpadMemoryClear */
  , 'NumpadMemoryClear', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 153
  /* NumpadMemoryAdd */
  , 'NumpadMemoryAdd', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 154
  /* NumpadMemorySubtract */
  , 'NumpadMemorySubtract', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 155
  /* NumpadClear */
  , 'NumpadClear', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 156
  /* NumpadClearEntry */
  , 'NumpadClearEntry', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [5, 1, 0
  /* None */
  , empty, 5
  /* Ctrl */
  , 'Ctrl', 17, 'VK_CONTROL', empty, empty], [4, 1, 0
  /* None */
  , empty, 4
  /* Shift */
  , 'Shift', 16, 'VK_SHIFT', empty, empty], [6, 1, 0
  /* None */
  , empty, 6
  /* Alt */
  , 'Alt', 18, 'VK_MENU', empty, empty], [57, 1, 0
  /* None */
  , empty, 57
  /* Meta */
  , 'Meta', 0, 'VK_COMMAND', empty, empty], [5, 1, 157
  /* ControlLeft */
  , 'ControlLeft', 5
  /* Ctrl */
  , empty, 0, 'VK_LCONTROL', empty, empty], [4, 1, 158
  /* ShiftLeft */
  , 'ShiftLeft', 4
  /* Shift */
  , empty, 0, 'VK_LSHIFT', empty, empty], [6, 1, 159
  /* AltLeft */
  , 'AltLeft', 6
  /* Alt */
  , empty, 0, 'VK_LMENU', empty, empty], [57, 1, 160
  /* MetaLeft */
  , 'MetaLeft', 57
  /* Meta */
  , empty, 0, 'VK_LWIN', empty, empty], [5, 1, 161
  /* ControlRight */
  , 'ControlRight', 5
  /* Ctrl */
  , empty, 0, 'VK_RCONTROL', empty, empty], [4, 1, 162
  /* ShiftRight */
  , 'ShiftRight', 4
  /* Shift */
  , empty, 0, 'VK_RSHIFT', empty, empty], [6, 1, 163
  /* AltRight */
  , 'AltRight', 6
  /* Alt */
  , empty, 0, 'VK_RMENU', empty, empty], [57, 1, 164
  /* MetaRight */
  , 'MetaRight', 57
  /* Meta */
  , empty, 0, 'VK_RWIN', empty, empty], [0, 1, 165
  /* BrightnessUp */
  , 'BrightnessUp', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 166
  /* BrightnessDown */
  , 'BrightnessDown', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 167
  /* MediaPlay */
  , 'MediaPlay', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 168
  /* MediaRecord */
  , 'MediaRecord', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 169
  /* MediaFastForward */
  , 'MediaFastForward', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 170
  /* MediaRewind */
  , 'MediaRewind', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [114, 1, 171
  /* MediaTrackNext */
  , 'MediaTrackNext', 119
  /* MediaTrackNext */
  , 'MediaTrackNext', 176, 'VK_MEDIA_NEXT_TRACK', empty, empty], [115, 1, 172
  /* MediaTrackPrevious */
  , 'MediaTrackPrevious', 120
  /* MediaTrackPrevious */
  , 'MediaTrackPrevious', 177, 'VK_MEDIA_PREV_TRACK', empty, empty], [116, 1, 173
  /* MediaStop */
  , 'MediaStop', 121
  /* MediaStop */
  , 'MediaStop', 178, 'VK_MEDIA_STOP', empty, empty], [0, 1, 174
  /* Eject */
  , 'Eject', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [117, 1, 175
  /* MediaPlayPause */
  , 'MediaPlayPause', 122
  /* MediaPlayPause */
  , 'MediaPlayPause', 179, 'VK_MEDIA_PLAY_PAUSE', empty, empty], [0, 1, 176
  /* MediaSelect */
  , 'MediaSelect', 123
  /* LaunchMediaPlayer */
  , 'LaunchMediaPlayer', 181, 'VK_MEDIA_LAUNCH_MEDIA_SELECT', empty, empty], [0, 1, 177
  /* LaunchMail */
  , 'LaunchMail', 124
  /* LaunchMail */
  , 'LaunchMail', 180, 'VK_MEDIA_LAUNCH_MAIL', empty, empty], [0, 1, 178
  /* LaunchApp2 */
  , 'LaunchApp2', 125
  /* LaunchApp2 */
  , 'LaunchApp2', 183, 'VK_MEDIA_LAUNCH_APP2', empty, empty], [0, 1, 179
  /* LaunchApp1 */
  , 'LaunchApp1', 0
  /* Unknown */
  , empty, 0, 'VK_MEDIA_LAUNCH_APP1', empty, empty], [0, 1, 180
  /* SelectTask */
  , 'SelectTask', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 181
  /* LaunchScreenSaver */
  , 'LaunchScreenSaver', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 182
  /* BrowserSearch */
  , 'BrowserSearch', 115
  /* BrowserSearch */
  , 'BrowserSearch', 170, 'VK_BROWSER_SEARCH', empty, empty], [0, 1, 183
  /* BrowserHome */
  , 'BrowserHome', 116
  /* BrowserHome */
  , 'BrowserHome', 172, 'VK_BROWSER_HOME', empty, empty], [112, 1, 184
  /* BrowserBack */
  , 'BrowserBack', 117
  /* BrowserBack */
  , 'BrowserBack', 166, 'VK_BROWSER_BACK', empty, empty], [113, 1, 185
  /* BrowserForward */
  , 'BrowserForward', 118
  /* BrowserForward */
  , 'BrowserForward', 167, 'VK_BROWSER_FORWARD', empty, empty], [0, 1, 186
  /* BrowserStop */
  , 'BrowserStop', 0
  /* Unknown */
  , empty, 0, 'VK_BROWSER_STOP', empty, empty], [0, 1, 187
  /* BrowserRefresh */
  , 'BrowserRefresh', 0
  /* Unknown */
  , empty, 0, 'VK_BROWSER_REFRESH', empty, empty], [0, 1, 188
  /* BrowserFavorites */
  , 'BrowserFavorites', 0
  /* Unknown */
  , empty, 0, 'VK_BROWSER_FAVORITES', empty, empty], [0, 1, 189
  /* ZoomToggle */
  , 'ZoomToggle', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 190
  /* MailReply */
  , 'MailReply', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 191
  /* MailForward */
  , 'MailForward', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], [0, 1, 192
  /* MailSend */
  , 'MailSend', 0
  /* Unknown */
  , empty, 0, empty, empty, empty], // See https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
  // If an Input Method Editor is processing key input and the event is keydown, return 229.
  [109, 1, 0
  /* None */
  , empty, 109
  /* KEY_IN_COMPOSITION */
  , 'KeyInComposition', 229, empty, empty, empty], [111, 1, 0
  /* None */
  , empty, 111
  /* ABNT_C2 */
  , 'ABNT_C2', 194, 'VK_ABNT_C2', empty, empty], [91, 1, 0
  /* None */
  , empty, 91
  /* OEM_8 */
  , 'OEM_8', 223, 'VK_OEM_8', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_CLEAR', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_KANA', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_HANGUL', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_JUNJA', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_FINAL', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_HANJA', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_KANJI', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_CONVERT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_NONCONVERT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_ACCEPT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_MODECHANGE', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_SELECT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_PRINT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_EXECUTE', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_SNAPSHOT', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_HELP', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_APPS', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_PROCESSKEY', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_PACKET', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_DBE_SBCSCHAR', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_DBE_DBCSCHAR', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_ATTN', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_CRSEL', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_EXSEL', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_EREOF', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_PLAY', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_ZOOM', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_NONAME', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_PA1', empty, empty], [0, 1, 0
  /* None */
  , empty, 0
  /* Unknown */
  , empty, 0, 'VK_OEM_CLEAR', empty, empty]];
  var seenKeyCode = [];
  var seenScanCode = [];

  for (var _i2 = 0, _mappings = mappings; _i2 < _mappings.length; _i2++) {
    var mapping = _mappings[_i2];

    var _mapping = _slicedToArray(mapping, 10),
        _keyCodeOrd = _mapping[0],
        immutable = _mapping[1],
        scanCode = _mapping[2],
        scanCodeStr = _mapping[3],
        keyCode = _mapping[4],
        keyCodeStr = _mapping[5],
        eventKeyCode = _mapping[6],
        vkey = _mapping[7],
        usUserSettingsLabel = _mapping[8],
        generalUserSettingsLabel = _mapping[9];

    if (!seenScanCode[scanCode]) {
      seenScanCode[scanCode] = true;
      scanCodeIntToStr[scanCode] = scanCodeStr;
      scanCodeStrToInt[scanCodeStr] = scanCode;
      scanCodeLowerCaseStrToInt[scanCodeStr.toLowerCase()] = scanCode;

      if (immutable) {
        IMMUTABLE_CODE_TO_KEY_CODE[scanCode] = keyCode;

        if (keyCode !== 0
        /* Unknown */
        && keyCode !== 3
        /* Enter */
        && keyCode !== 5
        /* Ctrl */
        && keyCode !== 4
        /* Shift */
        && keyCode !== 6
        /* Alt */
        && keyCode !== 57
        /* Meta */
        ) {
          IMMUTABLE_KEY_CODE_TO_CODE[keyCode] = scanCode;
        }
      }
    }

    if (!seenKeyCode[keyCode]) {
      seenKeyCode[keyCode] = true;

      if (!keyCodeStr) {
        throw new Error("String representation missing for key code ".concat(keyCode, " around scan code ").concat(scanCodeStr));
      }

      uiMap.define(keyCode, keyCodeStr);
      userSettingsUSMap.define(keyCode, usUserSettingsLabel || keyCodeStr);
      userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel || usUserSettingsLabel || keyCodeStr);
    }

    if (eventKeyCode) {
      EVENT_KEY_CODE_MAP[eventKeyCode] = keyCode;
    }

    if (vkey) {
      NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[vkey] = keyCode;
    }
  } // Manually added due to the exclusion above (due to duplication with NumpadEnter)


  IMMUTABLE_KEY_CODE_TO_CODE[3
  /* Enter */
  ] = 46
  /* Enter */
  ;
})();

var KeyCodeUtils;

(function (KeyCodeUtils) {
  function toString(keyCode) {
    return uiMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toString = toString;

  function fromString(key) {
    return uiMap.strToKeyCode(key);
  }

  KeyCodeUtils.fromString = fromString;

  function toUserSettingsUS(keyCode) {
    return userSettingsUSMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;

  function toUserSettingsGeneral(keyCode) {
    return userSettingsGeneralMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;

  function fromUserSettings(key) {
    return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
  }

  KeyCodeUtils.fromUserSettings = fromUserSettings;

  function toElectronAccelerator(keyCode) {
    if (keyCode >= 93
    /* Numpad0 */
    && keyCode <= 108
    /* NumpadDivide */
    ) {
        // [Electron Accelerators] Electron is able to parse numpad keys, but unfortunately it
        // renders them just as regular keys in menus. For example, num0 is rendered as "0",
        // numdiv is rendered as "/", numsub is rendered as "-".
        //
        // This can lead to incredible confusion, as it makes numpad based keybindings indistinguishable
        // from keybindings based on regular keys.
        //
        // We therefore need to fall back to custom rendering for numpad keys.
        return null;
      }

    switch (keyCode) {
      case 16
      /* UpArrow */
      :
        return 'Up';

      case 18
      /* DownArrow */
      :
        return 'Down';

      case 15
      /* LeftArrow */
      :
        return 'Left';

      case 17
      /* RightArrow */
      :
        return 'Right';
    }

    return uiMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toElectronAccelerator = toElectronAccelerator;
})(KeyCodeUtils || (KeyCodeUtils = {}));

function KeyChord(firstPart, secondPart) {
  var chordPart = (secondPart & 0x0000FFFF) << 16 >>> 0;
  return (firstPart | chordPart) >>> 0;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js





/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */

var selection_Selection = /*#__PURE__*/function (_Range) {
  _inherits(Selection, _Range);

  var _super = _createSuper(Selection);

  function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
    var _this;

    _classCallCheck(this, Selection);

    _this = _super.call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn);
    _this.selectionStartLineNumber = selectionStartLineNumber;
    _this.selectionStartColumn = selectionStartColumn;
    _this.positionLineNumber = positionLineNumber;
    _this.positionColumn = positionColumn;
    return _this;
  }
  /**
   * Transform to a human-readable representation.
   */


  _createClass(Selection, [{
    key: "toString",
    value: function toString() {
      return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    }
    /**
     * Test if equals other selection.
     */

  }, {
    key: "equalsSelection",
    value: function equalsSelection(other) {
      return Selection.selectionsEqual(this, other);
    }
    /**
     * Test if the two selections are equal.
     */

  }, {
    key: "getDirection",
    value:
    /**
     * Get directions (LTR or RTL).
     */
    function getDirection() {
      if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
        return 0
        /* LTR */
        ;
      }

      return 1
      /* RTL */
      ;
    }
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */

  }, {
    key: "setEndPosition",
    value: function setEndPosition(endLineNumber, endColumn) {
      if (this.getDirection() === 0
      /* LTR */
      ) {
          return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }

      return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    }
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return new position_Position(this.positionLineNumber, this.positionColumn);
    }
    /**
     * Get the position at the start of the selection.
    */

  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      return new position_Position(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */

  }, {
    key: "setStartPosition",
    value: function setStartPosition(startLineNumber, startColumn) {
      if (this.getDirection() === 0
      /* LTR */
      ) {
          return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }

      return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    } // ----

    /**
     * Create a `Selection` from one or two positions
     */

  }], [{
    key: "selectionsEqual",
    value: function selectionsEqual(a, b) {
      return a.selectionStartLineNumber === b.selectionStartLineNumber && a.selectionStartColumn === b.selectionStartColumn && a.positionLineNumber === b.positionLineNumber && a.positionColumn === b.positionColumn;
    }
  }, {
    key: "fromPositions",
    value: function fromPositions(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
      return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    }
    /**
     * Creates a `Selection` from a range, given a direction.
     */

  }, {
    key: "fromRange",
    value: function fromRange(range, direction) {
      if (direction === 0
      /* LTR */
      ) {
          return new Selection(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
        } else {
        return new Selection(range.endLineNumber, range.endColumn, range.startLineNumber, range.startColumn);
      }
    }
    /**
     * Create a `Selection` from an `ISelection`.
     */

  }, {
    key: "liftSelection",
    value: function liftSelection(sel) {
      return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    }
    /**
     * `a` equals `b`.
     */

  }, {
    key: "selectionsArrEqual",
    value: function selectionsArrEqual(a, b) {
      if (a && !b || !a && b) {
        return false;
      }

      if (!a && !b) {
        return true;
      }

      if (a.length !== b.length) {
        return false;
      }

      for (var i = 0, len = a.length; i < len; i++) {
        if (!this.selectionsEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }
    /**
     * Test if `obj` is an `ISelection`.
     */

  }, {
    key: "isISelection",
    value: function isISelection(obj) {
      return obj && typeof obj.selectionStartLineNumber === 'number' && typeof obj.selectionStartColumn === 'number' && typeof obj.positionLineNumber === 'number' && typeof obj.positionColumn === 'number';
    }
    /**
     * Create with a direction.
     */

  }, {
    key: "createWithDirection",
    value: function createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction) {
      if (direction === 0
      /* LTR */
      ) {
          return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }

      return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    }
  }]);

  return Selection;
}(range_Range);
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/objects.js


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function deepClone(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof RegExp) {
    // See https://github.com/microsoft/TypeScript/issues/10990
    return obj;
  }

  var result = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && typeof obj[key] === 'object') {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  });
  return result;
}
function deepFreeze(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  var stack = [obj];

  while (stack.length > 0) {
    var _obj = stack.shift();

    Object.freeze(_obj);

    for (var key in _obj) {
      if (_hasOwnProperty.call(_obj, key)) {
        var prop = _obj[key];

        if (typeof prop === 'object' && !Object.isFrozen(prop)) {
          stack.push(prop);
        }
      }
    }
  }

  return obj;
}
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function cloneAndChange(obj, changer) {
  return _cloneAndChange(obj, changer, new Set());
}

function _cloneAndChange(obj, changer, seen) {
  if (isUndefinedOrNull(obj)) {
    return obj;
  }

  var changed = changer(obj);

  if (typeof changed !== 'undefined') {
    return changed;
  }

  if (isArray(obj)) {
    var r1 = [];

    var _iterator = _createForOfIteratorHelper(obj),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var e = _step.value;
        r1.push(_cloneAndChange(e, changer, seen));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return r1;
  }

  if (isObject(obj)) {
    if (seen.has(obj)) {
      throw new Error('Cannot clone recursive data-structure');
    }

    seen.add(obj);
    var r2 = {};

    for (var i2 in obj) {
      if (_hasOwnProperty.call(obj, i2)) {
        r2[i2] = _cloneAndChange(obj[i2], changer, seen);
      }
    }

    seen["delete"](obj);
    return r2;
  }

  return obj;
}
/**
 * Copies all properties of source into destination. The optional parameter "overwrite" allows to control
 * if existing properties on the destination should be overwritten or not. Defaults to true (overwrite).
 */


function mixin(destination, source) {
  var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!isObject(destination)) {
    return source;
  }

  if (isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (key in destination) {
        if (overwrite) {
          if (isObject(destination[key]) && isObject(source[key])) {
            mixin(destination[key], source[key], overwrite);
          } else {
            destination[key] = source[key];
          }
        }
      } else {
        destination[key] = source[key];
      }
    });
  }

  return destination;
}
function objects_equals(one, other) {
  if (one === other) {
    return true;
  }

  if (one === null || one === undefined || other === null || other === undefined) {
    return false;
  }

  if (typeof one !== typeof other) {
    return false;
  }

  if (typeof one !== 'object') {
    return false;
  }

  if (Array.isArray(one) !== Array.isArray(other)) {
    return false;
  }

  var i;
  var key;

  if (Array.isArray(one)) {
    if (one.length !== other.length) {
      return false;
    }

    for (i = 0; i < one.length; i++) {
      if (!objects_equals(one[i], other[i])) {
        return false;
      }
    }
  } else {
    var oneKeys = [];

    for (key in one) {
      oneKeys.push(key);
    }

    oneKeys.sort();
    var otherKeys = [];

    for (key in other) {
      otherKeys.push(key);
    }

    otherKeys.sort();

    if (!objects_equals(oneKeys, otherKeys)) {
      return false;
    }

    for (i = 0; i < oneKeys.length; i++) {
      if (!objects_equals(one[oneKeys[i]], other[oneKeys[i]])) {
        return false;
      }
    }
  }

  return true;
}
function getOrDefault(obj, fn, defaultValue) {
  var result = fn(obj);
  return typeof result === 'undefined' ? defaultValue : result;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/model.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Vertical Lane in the overview ruler of the editor.
 */

var OverviewRulerLane;

(function (OverviewRulerLane) {
  OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
  OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
  OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
  OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
/**
 * Position in the minimap to render the decoration.
 */


var MinimapPosition;

(function (MinimapPosition) {
  MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
  MinimapPosition[MinimapPosition["Gutter"] = 2] = "Gutter";
})(MinimapPosition || (MinimapPosition = {}));

var InjectedTextCursorStops;

(function (InjectedTextCursorStops) {
  InjectedTextCursorStops[InjectedTextCursorStops["Both"] = 0] = "Both";
  InjectedTextCursorStops[InjectedTextCursorStops["Right"] = 1] = "Right";
  InjectedTextCursorStops[InjectedTextCursorStops["Left"] = 2] = "Left";
  InjectedTextCursorStops[InjectedTextCursorStops["None"] = 3] = "None";
})(InjectedTextCursorStops || (InjectedTextCursorStops = {}));

var model_TextModelResolvedOptions = /*#__PURE__*/function () {
  /**
   * @internal
   */
  function TextModelResolvedOptions(src) {
    _classCallCheck(this, TextModelResolvedOptions);

    this._textModelResolvedOptionsBrand = undefined;
    this.tabSize = Math.max(1, src.tabSize | 0);
    this.indentSize = src.tabSize | 0;
    this.insertSpaces = Boolean(src.insertSpaces);
    this.defaultEOL = src.defaultEOL | 0;
    this.trimAutoWhitespace = Boolean(src.trimAutoWhitespace);
    this.bracketPairColorizationOptions = src.bracketPairColorizationOptions;
  }
  /**
   * @internal
   */


  _createClass(TextModelResolvedOptions, [{
    key: "equals",
    value: function equals(other) {
      return this.tabSize === other.tabSize && this.indentSize === other.indentSize && this.insertSpaces === other.insertSpaces && this.defaultEOL === other.defaultEOL && this.trimAutoWhitespace === other.trimAutoWhitespace && objects_equals(this.bracketPairColorizationOptions, other.bracketPairColorizationOptions);
    }
    /**
     * @internal
     */

  }, {
    key: "createChangeEvent",
    value: function createChangeEvent(newOpts) {
      return {
        tabSize: this.tabSize !== newOpts.tabSize,
        indentSize: this.indentSize !== newOpts.indentSize,
        insertSpaces: this.insertSpaces !== newOpts.insertSpaces,
        trimAutoWhitespace: this.trimAutoWhitespace !== newOpts.trimAutoWhitespace
      };
    }
  }]);

  return TextModelResolvedOptions;
}();
var model_FindMatch =
/**
 * @internal
 */
function FindMatch(range, matches) {
  _classCallCheck(this, FindMatch);

  this._findMatchBrand = undefined;
  this.range = range;
  this.matches = matches;
};
/**
 * @internal
 */

var model_ValidAnnotatedEditOperation = function ValidAnnotatedEditOperation(identifier, range, text, forceMoveMarkers, isAutoWhitespaceEdit, _isTracked) {
  _classCallCheck(this, ValidAnnotatedEditOperation);

  this.identifier = identifier;
  this.range = range;
  this.text = text;
  this.forceMoveMarkers = forceMoveMarkers;
  this.isAutoWhitespaceEdit = isAutoWhitespaceEdit;
  this._isTracked = _isTracked;
};
/**
 * @internal
 */

var model_SearchData = function SearchData(regex, wordSeparators, simpleSearch) {
  _classCallCheck(this, SearchData);

  this.regex = regex;
  this.wordSeparators = wordSeparators;
  this.simpleSearch = simpleSearch;
};
/**
 * @internal
 */

var model_ApplyEditsResult = function ApplyEditsResult(reverseEdits, changes, trimAutoWhitespaceLineNumbers) {
  _classCallCheck(this, ApplyEditsResult);

  this.reverseEdits = reverseEdits;
  this.changes = changes;
  this.trimAutoWhitespaceLineNumbers = trimAutoWhitespaceLineNumbers;
};
/**
 * @internal
 */

function shouldSynchronizeModel(model) {
  return !model.isTooLargeForSyncing() && !model.isForSimpleWidget;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/async.js






/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __asyncValues = undefined && undefined.__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};






function isThenable(obj) {
  return !!obj && typeof obj.then === 'function';
}
function createCancelablePromise(callback) {
  var source = new cancellation_CancellationTokenSource();
  var thenable = callback(source.token);
  var promise = new Promise(function (resolve, reject) {
    var subscription = source.token.onCancellationRequested(function () {
      subscription.dispose();
      source.dispose();
      reject(new errors_CancellationError());
    });
    Promise.resolve(thenable).then(function (value) {
      subscription.dispose();
      source.dispose();
      resolve(value);
    }, function (err) {
      subscription.dispose();
      source.dispose();
      reject(err);
    });
  });
  return new ( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "cancel",
      value: function cancel() {
        source.cancel();
      }
    }, {
      key: "then",
      value: function then(resolve, reject) {
        return promise.then(resolve, reject);
      }
    }, {
      key: "catch",
      value: function _catch(reject) {
        return this.then(undefined, reject);
      }
    }, {
      key: "finally",
      value: function _finally(onfinally) {
        return promise["finally"](onfinally);
      }
    }]);

    return _class;
  }())();
}
function raceCancellation(promise, token, defaultValue) {
  return new Promise(function (resolve, reject) {
    var ref = token.onCancellationRequested(function () {
      ref.dispose();
      resolve(defaultValue);
    });
    promise.then(resolve, reject)["finally"](function () {
      return ref.dispose();
    });
  });
}
/**
 * A helper to prevent accumulation of sequential async tasks.
 *
 * Imagine a mail man with the sole task of delivering letters. As soon as
 * a letter submitted for delivery, he drives to the destination, delivers it
 * and returns to his base. Imagine that during the trip, N more letters were submitted.
 * When the mail man returns, he picks those N letters and delivers them all in a
 * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
 *
 * The throttler implements this via the queue() method, by providing it a task
 * factory. Following the example:
 *
 * 		const throttler = new Throttler();
 * 		const letters = [];
 *
 * 		function deliver() {
 * 			const lettersToDeliver = letters;
 * 			letters = [];
 * 			return makeTheTrip(lettersToDeliver);
 * 		}
 *
 * 		function onLetterReceived(l) {
 * 			letters.push(l);
 * 			throttler.queue(deliver);
 * 		}
 */

var async_Throttler = /*#__PURE__*/function () {
  function Throttler() {
    _classCallCheck(this, Throttler);

    this.activePromise = null;
    this.queuedPromise = null;
    this.queuedPromiseFactory = null;
  }

  _createClass(Throttler, [{
    key: "queue",
    value: function queue(promiseFactory) {
      var _this = this;

      if (this.activePromise) {
        this.queuedPromiseFactory = promiseFactory;

        if (!this.queuedPromise) {
          var onComplete = function onComplete() {
            _this.queuedPromise = null;

            var result = _this.queue(_this.queuedPromiseFactory);

            _this.queuedPromiseFactory = null;
            return result;
          };

          this.queuedPromise = new Promise(function (resolve) {
            _this.activePromise.then(onComplete, onComplete).then(resolve);
          });
        }

        return new Promise(function (resolve, reject) {
          _this.queuedPromise.then(resolve, reject);
        });
      }

      this.activePromise = promiseFactory();
      return new Promise(function (resolve, reject) {
        _this.activePromise.then(function (result) {
          _this.activePromise = null;
          resolve(result);
        }, function (err) {
          _this.activePromise = null;
          reject(err);
        });
      });
    }
  }]);

  return Throttler;
}();

var timeoutDeferred = function timeoutDeferred(timeout, fn) {
  var scheduled = true;
  var handle = setTimeout(function () {
    scheduled = false;
    fn();
  }, timeout);
  return {
    isTriggered: function isTriggered() {
      return scheduled;
    },
    dispose: function dispose() {
      clearTimeout(handle);
      scheduled = false;
    }
  };
};

var microtaskDeferred = function microtaskDeferred(fn) {
  var scheduled = true;
  queueMicrotask(function () {
    if (scheduled) {
      scheduled = false;
      fn();
    }
  });
  return {
    isTriggered: function isTriggered() {
      return scheduled;
    },
    dispose: function dispose() {
      scheduled = false;
    }
  };
};
/** Can be passed into the Delayed to defer using a microtask */


var MicrotaskDelay = Symbol('MicrotaskDelay');
/**
 * A helper to delay (debounce) execution of a task that is being requested often.
 *
 * Following the throttler, now imagine the mail man wants to optimize the number of
 * trips proactively. The trip itself can be long, so he decides not to make the trip
 * as soon as a letter is submitted. Instead he waits a while, in case more
 * letters are submitted. After said waiting period, if no letters were submitted, he
 * decides to make the trip. Imagine that N more letters were submitted after the first
 * one, all within a short period of time between each other. Even though N+1
 * submissions occurred, only 1 delivery was made.
 *
 * The delayer offers this behavior via the trigger() method, into which both the task
 * to be executed and the waiting period (delay) must be passed in as arguments. Following
 * the example:
 *
 * 		const delayer = new Delayer(WAITING_PERIOD);
 * 		const letters = [];
 *
 * 		function letterReceived(l) {
 * 			letters.push(l);
 * 			delayer.trigger(() => { return makeTheTrip(); });
 * 		}
 */

var async_Delayer = /*#__PURE__*/function () {
  function Delayer(defaultDelay) {
    _classCallCheck(this, Delayer);

    this.defaultDelay = defaultDelay;
    this.deferred = null;
    this.completionPromise = null;
    this.doResolve = null;
    this.doReject = null;
    this.task = null;
  }

  _createClass(Delayer, [{
    key: "trigger",
    value: function trigger(task) {
      var _this2 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultDelay;
      this.task = task;
      this.cancelTimeout();

      if (!this.completionPromise) {
        this.completionPromise = new Promise(function (resolve, reject) {
          _this2.doResolve = resolve;
          _this2.doReject = reject;
        }).then(function () {
          _this2.completionPromise = null;
          _this2.doResolve = null;

          if (_this2.task) {
            var _task = _this2.task;
            _this2.task = null;
            return _task();
          }

          return undefined;
        });
      }

      var fn = function fn() {
        var _a;

        _this2.deferred = null;
        (_a = _this2.doResolve) === null || _a === void 0 ? void 0 : _a.call(_this2, null);
      };

      this.deferred = delay === MicrotaskDelay ? microtaskDeferred(fn) : timeoutDeferred(delay, fn);
      return this.completionPromise;
    }
  }, {
    key: "isTriggered",
    value: function isTriggered() {
      var _a;

      return !!((_a = this.deferred) === null || _a === void 0 ? void 0 : _a.isTriggered());
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.cancelTimeout();

      if (this.completionPromise) {
        if (this.doReject) {
          this.doReject(new errors_CancellationError());
        }

        this.completionPromise = null;
      }
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      var _a;

      (_a = this.deferred) === null || _a === void 0 ? void 0 : _a.dispose();
      this.deferred = null;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.cancel();
    }
  }]);

  return Delayer;
}();
/**
 * A helper to delay execution of a task that is being requested often, while
 * preventing accumulation of consecutive executions, while the task runs.
 *
 * The mail man is clever and waits for a certain amount of time, before going
 * out to deliver letters. While the mail man is going out, more letters arrive
 * and can only be delivered once he is back. Once he is back the mail man will
 * do one more trip to deliver the letters that have accumulated while he was out.
 */

var async_ThrottledDelayer = /*#__PURE__*/function () {
  function ThrottledDelayer(defaultDelay) {
    _classCallCheck(this, ThrottledDelayer);

    this.delayer = new async_Delayer(defaultDelay);
    this.throttler = new async_Throttler();
  }

  _createClass(ThrottledDelayer, [{
    key: "trigger",
    value: function trigger(promiseFactory, delay) {
      var _this3 = this;

      return this.delayer.trigger(function () {
        return _this3.throttler.queue(promiseFactory);
      }, delay);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.delayer.dispose();
    }
  }]);

  return ThrottledDelayer;
}();
function async_timeout(millis, token) {
  if (!token) {
    return createCancelablePromise(function (token) {
      return async_timeout(millis, token);
    });
  }

  return new Promise(function (resolve, reject) {
    var handle = setTimeout(function () {
      disposable.dispose();
      resolve();
    }, millis);
    var disposable = token.onCancellationRequested(function () {
      clearTimeout(handle);
      disposable.dispose();
      reject(new errors_CancellationError());
    });
  });
}
function disposableTimeout(handler) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer = setTimeout(handler, timeout);
  return toDisposable(function () {
    return clearTimeout(timer);
  });
}
function async_first(promiseFactories) {
  var shouldStop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (t) {
    return !!t;
  };
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var index = 0;
  var len = promiseFactories.length;

  var loop = function loop() {
    if (index >= len) {
      return Promise.resolve(defaultValue);
    }

    var factory = promiseFactories[index++];
    var promise = Promise.resolve(factory());
    return promise.then(function (result) {
      if (shouldStop(result)) {
        return Promise.resolve(result);
      }

      return loop();
    });
  };

  return loop();
}
var async_TimeoutTimer = /*#__PURE__*/function () {
  function TimeoutTimer(runner, timeout) {
    _classCallCheck(this, TimeoutTimer);

    this._token = -1;

    if (typeof runner === 'function' && typeof timeout === 'number') {
      this.setIfNotSet(runner, timeout);
    }
  }

  _createClass(TimeoutTimer, [{
    key: "dispose",
    value: function dispose() {
      this.cancel();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._token !== -1) {
        clearTimeout(this._token);
        this._token = -1;
      }
    }
  }, {
    key: "cancelAndSet",
    value: function cancelAndSet(runner, timeout) {
      var _this4 = this;

      this.cancel();
      this._token = setTimeout(function () {
        _this4._token = -1;
        runner();
      }, timeout);
    }
  }, {
    key: "setIfNotSet",
    value: function setIfNotSet(runner, timeout) {
      var _this5 = this;

      if (this._token !== -1) {
        // timer is already set
        return;
      }

      this._token = setTimeout(function () {
        _this5._token = -1;
        runner();
      }, timeout);
    }
  }]);

  return TimeoutTimer;
}();
var async_IntervalTimer = /*#__PURE__*/function () {
  function IntervalTimer() {
    _classCallCheck(this, IntervalTimer);

    this._token = -1;
  }

  _createClass(IntervalTimer, [{
    key: "dispose",
    value: function dispose() {
      this.cancel();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._token !== -1) {
        clearInterval(this._token);
        this._token = -1;
      }
    }
  }, {
    key: "cancelAndSet",
    value: function cancelAndSet(runner, interval) {
      this.cancel();
      this._token = setInterval(function () {
        runner();
      }, interval);
    }
  }]);

  return IntervalTimer;
}();
var async_RunOnceScheduler = /*#__PURE__*/function () {
  function RunOnceScheduler(runner, delay) {
    _classCallCheck(this, RunOnceScheduler);

    this.timeoutToken = -1;
    this.runner = runner;
    this.timeout = delay;
    this.timeoutHandler = this.onTimeout.bind(this);
  }
  /**
   * Dispose RunOnceScheduler
   */


  _createClass(RunOnceScheduler, [{
    key: "dispose",
    value: function dispose() {
      this.cancel();
      this.runner = null;
    }
    /**
     * Cancel current scheduled runner (if any).
     */

  }, {
    key: "cancel",
    value: function cancel() {
      if (this.isScheduled()) {
        clearTimeout(this.timeoutToken);
        this.timeoutToken = -1;
      }
    }
    /**
     * Cancel previous runner (if any) & schedule a new runner.
     */

  }, {
    key: "schedule",
    value: function schedule() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeout;
      this.cancel();
      this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    }
  }, {
    key: "delay",
    get: function get() {
      return this.timeout;
    },
    set: function set(value) {
      this.timeout = value;
    }
    /**
     * Returns true if scheduled.
     */

  }, {
    key: "isScheduled",
    value: function isScheduled() {
      return this.timeoutToken !== -1;
    }
  }, {
    key: "onTimeout",
    value: function onTimeout() {
      this.timeoutToken = -1;

      if (this.runner) {
        this.doRun();
      }
    }
  }, {
    key: "doRun",
    value: function doRun() {
      if (this.runner) {
        this.runner();
      }
    }
  }]);

  return RunOnceScheduler;
}();
/**
 * Execute the callback the next time the browser is idle
 */

var async_runWhenIdle;

(function () {
  if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
    async_runWhenIdle = function runWhenIdle(runner) {
      Object(platform["f" /* setTimeout0 */])(function () {
        if (disposed) {
          return;
        }

        var end = Date.now() + 15; // one frame at 64fps

        runner(Object.freeze({
          didTimeout: true,
          timeRemaining: function timeRemaining() {
            return Math.max(0, end - Date.now());
          }
        }));
      });
      var disposed = false;
      return {
        dispose: function dispose() {
          if (disposed) {
            return;
          }

          disposed = true;
        }
      };
    };
  } else {
    async_runWhenIdle = function runWhenIdle(runner, timeout) {
      var handle = requestIdleCallback(runner, typeof timeout === 'number' ? {
        timeout: timeout
      } : undefined);
      var disposed = false;
      return {
        dispose: function dispose() {
          if (disposed) {
            return;
          }

          disposed = true;
          cancelIdleCallback(handle);
        }
      };
    };
  }
})();
/**
 * An implementation of the "idle-until-urgent"-strategy as introduced
 * here: https://philipwalton.com/articles/idle-until-urgent/
 */


var async_IdleValue = /*#__PURE__*/function () {
  function IdleValue(executor) {
    var _this6 = this;

    _classCallCheck(this, IdleValue);

    this._didRun = false;

    this._executor = function () {
      try {
        _this6._value = executor();
      } catch (err) {
        _this6._error = err;
      } finally {
        _this6._didRun = true;
      }
    };

    this._handle = async_runWhenIdle(function () {
      return _this6._executor();
    });
  }

  _createClass(IdleValue, [{
    key: "dispose",
    value: function dispose() {
      this._handle.dispose();
    }
  }, {
    key: "value",
    get: function get() {
      if (!this._didRun) {
        this._handle.dispose();

        this._executor();
      }

      if (this._error) {
        throw this._error;
      }

      return this._value;
    }
  }, {
    key: "isInitialized",
    get: function get() {
      return this._didRun;
    }
  }]);

  return IdleValue;
}();
/**
 * Creates a promise whose resolution or rejection can be controlled imperatively.
 */

var async_DeferredPromise = /*#__PURE__*/function () {
  function DeferredPromise() {
    var _this7 = this;

    _classCallCheck(this, DeferredPromise);

    this.rejected = false;
    this.resolved = false;
    this.p = new Promise(function (c, e) {
      _this7.completeCallback = c;
      _this7.errorCallback = e;
    });
  }

  _createClass(DeferredPromise, [{
    key: "isRejected",
    get: function get() {
      return this.rejected;
    }
  }, {
    key: "isSettled",
    get: function get() {
      return this.rejected || this.resolved;
    }
  }, {
    key: "complete",
    value: function complete(value) {
      var _this8 = this;

      return new Promise(function (resolve) {
        _this8.completeCallback(value);

        _this8.resolved = true;
        resolve();
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var _this9 = this;

      new Promise(function (resolve) {
        _this9.errorCallback(new errors_CancellationError());

        _this9.rejected = true;
        resolve();
      });
    }
  }]);

  return DeferredPromise;
}(); //#endregion
//#region Promises

var async_Promises;

(function (Promises) {
  /**
   * A drop-in replacement for `Promise.all` with the only difference
   * that the method awaits every promise to either fulfill or reject.
   *
   * Similar to `Promise.all`, only the first error will be returned
   * if any.
   */
  function settled(promises) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var firstError, result;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firstError = undefined;
              _context.next = 3;
              return Promise.all(promises.map(function (promise) {
                return promise.then(function (value) {
                  return value;
                }, function (error) {
                  if (!firstError) {
                    firstError = error;
                  }

                  return undefined; // do not rethrow so that other promises can settle
                });
              }));

            case 3:
              result = _context.sent;

              if (!(typeof firstError !== 'undefined')) {
                _context.next = 6;
                break;
              }

              throw firstError;

            case 6:
              return _context.abrupt("return", result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }

  Promises.settled = settled;
  /**
   * A helper to create a new `Promise<T>` with a body that is a promise
   * itself. By default, an error that raises from the async body will
   * end up as a unhandled rejection, so this utility properly awaits the
   * body and rejects the promise as a normal promise does without async
   * body.
   *
   * This method should only be used in rare cases where otherwise `async`
   * cannot be used (e.g. when callbacks are involved that require this).
   */

  function withAsyncBody(bodyFn) {
    var _this10 = this;

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(function (resolve, reject) {
      return __awaiter(_this10, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return bodyFn(resolve, reject);

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                reject(_context2.t0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }));
    });
  }

  Promises.withAsyncBody = withAsyncBody;
})(async_Promises || (async_Promises = {}));
/**
 * A rich implementation for an `AsyncIterable<T>`.
 */


var async_AsyncIterableObject = /*#__PURE__*/function () {
  function AsyncIterableObject(executor) {
    var _this11 = this;

    _classCallCheck(this, AsyncIterableObject);

    this._state = 0
    /* Initial */
    ;
    this._results = [];
    this._error = null;
    this._onStateChanged = new event_Emitter();
    queueMicrotask(function () {
      return __awaiter(_this11, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var _this12 = this;

        var writer;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                writer = {
                  emitOne: function emitOne(item) {
                    return _this12.emitOne(item);
                  },
                  emitMany: function emitMany(items) {
                    return _this12.emitMany(items);
                  },
                  reject: function reject(error) {
                    return _this12.reject(error);
                  }
                };
                _context3.prev = 1;
                _context3.next = 4;
                return Promise.resolve(executor(writer));

              case 4:
                this.resolve();
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                this.reject(_context3.t0);

              case 10:
                _context3.prev = 10;
                writer.emitOne = undefined;
                writer.emitMany = undefined;
                writer.reject = undefined;
                return _context3.finish(10);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7, 10, 15]]);
      }));
    });
  }

  _createClass(AsyncIterableObject, [{
    key: Symbol.asyncIterator,
    value: function value() {
      var _this13 = this;

      var i = 0;
      return {
        next: function next() {
          return __awaiter(_this13, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
            return regenerator_default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this._state === 2
                    /* DoneError */
                    )) {
                      _context4.next = 2;
                      break;
                    }

                    throw this._error;

                  case 2:
                    if (!(i < this._results.length)) {
                      _context4.next = 4;
                      break;
                    }

                    return _context4.abrupt("return", {
                      done: false,
                      value: this._results[i++]
                    });

                  case 4:
                    if (!(this._state === 1
                    /* DoneOK */
                    )) {
                      _context4.next = 6;
                      break;
                    }

                    return _context4.abrupt("return", {
                      done: true,
                      value: undefined
                    });

                  case 6:
                    _context4.next = 8;
                    return event_Event.toPromise(this._onStateChanged.event);

                  case 8:
                    if (true) {
                      _context4.next = 0;
                      break;
                    }

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      };
    }
  }, {
    key: "map",
    value: function map(mapFn) {
      return AsyncIterableObject.map(this, mapFn);
    }
  }, {
    key: "filter",
    value: function filter(filterFn) {
      return AsyncIterableObject.filter(this, filterFn);
    }
  }, {
    key: "coalesce",
    value: function coalesce() {
      return AsyncIterableObject.coalesce(this);
    }
  }, {
    key: "toPromise",
    value: function toPromise() {
      return AsyncIterableObject.toPromise(this);
    }
    /**
     * The value will be appended at the end.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */

  }, {
    key: "emitOne",
    value: function emitOne(value) {
      if (this._state !== 0
      /* Initial */
      ) {
          return;
        } // it is important to add new values at the end,
      // as we may have iterators already running on the array


      this._results.push(value);

      this._onStateChanged.fire();
    }
    /**
     * The values will be appended at the end.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */

  }, {
    key: "emitMany",
    value: function emitMany(values) {
      if (this._state !== 0
      /* Initial */
      ) {
          return;
        } // it is important to add new values at the end,
      // as we may have iterators already running on the array


      this._results = this._results.concat(values);

      this._onStateChanged.fire();
    }
    /**
     * Calling `resolve()` will mark the result array as complete.
     *
     * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */

  }, {
    key: "resolve",
    value: function resolve() {
      if (this._state !== 0
      /* Initial */
      ) {
          return;
        }

      this._state = 1
      /* DoneOK */
      ;

      this._onStateChanged.fire();
    }
    /**
     * Writing an error will permanently invalidate this iterable.
     * The current users will receive an error thrown, as will all future users.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */

  }, {
    key: "reject",
    value: function reject(error) {
      if (this._state !== 0
      /* Initial */
      ) {
          return;
        }

      this._state = 2
      /* DoneError */
      ;
      this._error = error;

      this._onStateChanged.fire();
    }
  }], [{
    key: "fromArray",
    value: function fromArray(items) {
      return new AsyncIterableObject(function (writer) {
        writer.emitMany(items);
      });
    }
  }, {
    key: "fromPromise",
    value: function fromPromise(promise) {
      var _this14 = this;

      return new AsyncIterableObject(function (emitter) {
        return __awaiter(_this14, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
          return regenerator_default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.t0 = emitter;
                  _context5.next = 3;
                  return promise;

                case 3:
                  _context5.t1 = _context5.sent;

                  _context5.t0.emitMany.call(_context5.t0, _context5.t1);

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
      });
    }
  }, {
    key: "fromPromises",
    value: function fromPromises(promises) {
      var _this15 = this;

      return new AsyncIterableObject(function (emitter) {
        return __awaiter(_this15, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
          var _this16 = this;

          return regenerator_default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return Promise.all(promises.map(function (p) {
                    return __awaiter(_this16, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
                      return regenerator_default.a.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              _context6.t0 = emitter;
                              _context6.next = 3;
                              return p;

                            case 3:
                              _context6.t1 = _context6.sent;
                              return _context6.abrupt("return", _context6.t0.emitOne.call(_context6.t0, _context6.t1));

                            case 5:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));
                  }));

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
      });
    }
  }, {
    key: "merge",
    value: function merge(iterables) {
      var _this17 = this;

      return new AsyncIterableObject(function (emitter) {
        return __awaiter(_this17, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
          var _this18 = this;

          return regenerator_default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return Promise.all(iterables.map(function (iterable) {
                    var iterable_1, iterable_1_1;
                    return __awaiter(_this18, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
                      var e_1, _a, item;

                      return regenerator_default.a.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              _context8.prev = 0;
                              iterable_1 = __asyncValues(iterable);

                            case 2:
                              _context8.next = 4;
                              return iterable_1.next();

                            case 4:
                              iterable_1_1 = _context8.sent;

                              if (iterable_1_1.done) {
                                _context8.next = 10;
                                break;
                              }

                              item = iterable_1_1.value;
                              emitter.emitOne(item);

                            case 8:
                              _context8.next = 2;
                              break;

                            case 10:
                              _context8.next = 15;
                              break;

                            case 12:
                              _context8.prev = 12;
                              _context8.t0 = _context8["catch"](0);
                              e_1 = {
                                error: _context8.t0
                              };

                            case 15:
                              _context8.prev = 15;
                              _context8.prev = 16;

                              if (!(iterable_1_1 && !iterable_1_1.done && (_a = iterable_1["return"]))) {
                                _context8.next = 20;
                                break;
                              }

                              _context8.next = 20;
                              return _a.call(iterable_1);

                            case 20:
                              _context8.prev = 20;

                              if (!e_1) {
                                _context8.next = 23;
                                break;
                              }

                              throw e_1.error;

                            case 23:
                              return _context8.finish(20);

                            case 24:
                              return _context8.finish(15);

                            case 25:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8, null, [[0, 12, 15, 25], [16,, 20, 24]]);
                    }));
                  }));

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
      });
    }
  }, {
    key: "map",
    value: function map(iterable, mapFn) {
      var _this19 = this;

      return new AsyncIterableObject(function (emitter) {
        return __awaiter(_this19, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee10() {
          var e_2, _a, iterable_2, iterable_2_1, item;

          return regenerator_default.a.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.prev = 0;
                  iterable_2 = __asyncValues(iterable);

                case 2:
                  _context10.next = 4;
                  return iterable_2.next();

                case 4:
                  iterable_2_1 = _context10.sent;

                  if (iterable_2_1.done) {
                    _context10.next = 10;
                    break;
                  }

                  item = iterable_2_1.value;
                  emitter.emitOne(mapFn(item));

                case 8:
                  _context10.next = 2;
                  break;

                case 10:
                  _context10.next = 15;
                  break;

                case 12:
                  _context10.prev = 12;
                  _context10.t0 = _context10["catch"](0);
                  e_2 = {
                    error: _context10.t0
                  };

                case 15:
                  _context10.prev = 15;
                  _context10.prev = 16;

                  if (!(iterable_2_1 && !iterable_2_1.done && (_a = iterable_2["return"]))) {
                    _context10.next = 20;
                    break;
                  }

                  _context10.next = 20;
                  return _a.call(iterable_2);

                case 20:
                  _context10.prev = 20;

                  if (!e_2) {
                    _context10.next = 23;
                    break;
                  }

                  throw e_2.error;

                case 23:
                  return _context10.finish(20);

                case 24:
                  return _context10.finish(15);

                case 25:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, null, [[0, 12, 15, 25], [16,, 20, 24]]);
        }));
      });
    }
  }, {
    key: "filter",
    value: function filter(iterable, filterFn) {
      var _this20 = this;

      return new AsyncIterableObject(function (emitter) {
        return __awaiter(_this20, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee11() {
          var e_3, _a, iterable_3, iterable_3_1, item;

          return regenerator_default.a.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  iterable_3 = __asyncValues(iterable);

                case 2:
                  _context11.next = 4;
                  return iterable_3.next();

                case 4:
                  iterable_3_1 = _context11.sent;

                  if (iterable_3_1.done) {
                    _context11.next = 10;
                    break;
                  }

                  item = iterable_3_1.value;

                  if (filterFn(item)) {
                    emitter.emitOne(item);
                  }

                case 8:
                  _context11.next = 2;
                  break;

                case 10:
                  _context11.next = 15;
                  break;

                case 12:
                  _context11.prev = 12;
                  _context11.t0 = _context11["catch"](0);
                  e_3 = {
                    error: _context11.t0
                  };

                case 15:
                  _context11.prev = 15;
                  _context11.prev = 16;

                  if (!(iterable_3_1 && !iterable_3_1.done && (_a = iterable_3["return"]))) {
                    _context11.next = 20;
                    break;
                  }

                  _context11.next = 20;
                  return _a.call(iterable_3);

                case 20:
                  _context11.prev = 20;

                  if (!e_3) {
                    _context11.next = 23;
                    break;
                  }

                  throw e_3.error;

                case 23:
                  return _context11.finish(20);

                case 24:
                  return _context11.finish(15);

                case 25:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, null, [[0, 12, 15, 25], [16,, 20, 24]]);
        }));
      });
    }
  }, {
    key: "coalesce",
    value: function coalesce(iterable) {
      return AsyncIterableObject.filter(iterable, function (item) {
        return !!item;
      });
    }
  }, {
    key: "toPromise",
    value: function toPromise(iterable) {
      var iterable_4, iterable_4_1;

      var e_4, _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee12() {
        var result, item;
        return regenerator_default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                result = [];
                _context12.prev = 1;
                iterable_4 = __asyncValues(iterable);

              case 3:
                _context12.next = 5;
                return iterable_4.next();

              case 5:
                iterable_4_1 = _context12.sent;

                if (iterable_4_1.done) {
                  _context12.next = 11;
                  break;
                }

                item = iterable_4_1.value;
                result.push(item);

              case 9:
                _context12.next = 3;
                break;

              case 11:
                _context12.next = 16;
                break;

              case 13:
                _context12.prev = 13;
                _context12.t0 = _context12["catch"](1);
                e_4 = {
                  error: _context12.t0
                };

              case 16:
                _context12.prev = 16;
                _context12.prev = 17;

                if (!(iterable_4_1 && !iterable_4_1.done && (_a = iterable_4["return"]))) {
                  _context12.next = 21;
                  break;
                }

                _context12.next = 21;
                return _a.call(iterable_4);

              case 21:
                _context12.prev = 21;

                if (!e_4) {
                  _context12.next = 24;
                  break;
                }

                throw e_4.error;

              case 24:
                return _context12.finish(21);

              case 25:
                return _context12.finish(16);

              case 26:
                return _context12.abrupt("return", result);

              case 27:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 13, 16, 26], [17,, 21, 25]]);
      }));
    }
  }]);

  return AsyncIterableObject;
}();
async_AsyncIterableObject.EMPTY = async_AsyncIterableObject.fromArray([]);
var async_CancelableAsyncIterableObject = /*#__PURE__*/function (_AsyncIterableObject) {
  _inherits(CancelableAsyncIterableObject, _AsyncIterableObject);

  var _super = _createSuper(CancelableAsyncIterableObject);

  function CancelableAsyncIterableObject(_source, executor) {
    var _this21;

    _classCallCheck(this, CancelableAsyncIterableObject);

    _this21 = _super.call(this, executor);
    _this21._source = _source;
    return _this21;
  }

  _createClass(CancelableAsyncIterableObject, [{
    key: "cancel",
    value: function cancel() {
      this._source.cancel();
    }
  }]);

  return CancelableAsyncIterableObject;
}(async_AsyncIterableObject);
function createCancelableAsyncIterable(callback) {
  var _this22 = this;

  var source = new cancellation_CancellationTokenSource();
  var innerIterable = callback(source.token);
  return new async_CancelableAsyncIterableObject(source, function (emitter) {
    return __awaiter(_this22, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee13() {
      var e_5, _a, subscription, innerIterable_1, innerIterable_1_1, item;

      return regenerator_default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              subscription = source.token.onCancellationRequested(function () {
                subscription.dispose();
                source.dispose();
                emitter.reject(new errors_CancellationError());
              });
              _context13.prev = 1;
              _context13.prev = 2;
              innerIterable_1 = __asyncValues(innerIterable);

            case 4:
              _context13.next = 6;
              return innerIterable_1.next();

            case 6:
              innerIterable_1_1 = _context13.sent;

              if (innerIterable_1_1.done) {
                _context13.next = 14;
                break;
              }

              item = innerIterable_1_1.value;

              if (!source.token.isCancellationRequested) {
                _context13.next = 11;
                break;
              }

              return _context13.abrupt("return");

            case 11:
              emitter.emitOne(item);

            case 12:
              _context13.next = 4;
              break;

            case 14:
              _context13.next = 19;
              break;

            case 16:
              _context13.prev = 16;
              _context13.t0 = _context13["catch"](2);
              e_5 = {
                error: _context13.t0
              };

            case 19:
              _context13.prev = 19;
              _context13.prev = 20;

              if (!(innerIterable_1_1 && !innerIterable_1_1.done && (_a = innerIterable_1["return"]))) {
                _context13.next = 24;
                break;
              }

              _context13.next = 24;
              return _a.call(innerIterable_1);

            case 24:
              _context13.prev = 24;

              if (!e_5) {
                _context13.next = 27;
                break;
              }

              throw e_5.error;

            case 27:
              return _context13.finish(24);

            case 28:
              return _context13.finish(19);

            case 29:
              subscription.dispose();
              source.dispose();
              _context13.next = 38;
              break;

            case 33:
              _context13.prev = 33;
              _context13.t1 = _context13["catch"](1);
              subscription.dispose();
              source.dispose();
              emitter.reject(_context13.t1);

            case 38:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[1, 33], [2, 16, 19, 29], [20,, 24, 28]]);
    }));
  });
} //#endregion
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/extpath.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function extpath_isPathSeparator(code) {
  return code === 47
  /* Slash */
  || code === 92
  /* Backslash */
  ;
}
/**
 * Takes a Windows OS path and changes backward slashes to forward slashes.
 * This should only be done for OS paths from Windows (or user provided paths potentially from Windows).
 * Using it on a Linux or MaxOS path might change it.
 */

function toSlashes(osPath) {
  return osPath.replace(/[\\/]/g, posix.sep);
}
/**
 * Takes a Windows OS path (using backward or forward slashes) and turns it into a posix path:
 * - turns backward slashes into forward slashes
 * - makes it absolute if it starts with a drive letter
 * This should only be done for OS paths from Windows (or user provided paths potentially from Windows).
 * Using it on a Linux or MaxOS path might change it.
 */

function toPosixPath(osPath) {
  if (osPath.indexOf('/') === -1) {
    osPath = toSlashes(osPath);
  }

  if (/^[a-zA-Z]:(\/|$)/.test(osPath)) {
    // starts with a drive letter
    osPath = '/' + osPath;
  }

  return osPath;
}
/**
 * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
 * `getRoot('files:///files/path') === files:///`,
 * or `getRoot('\\server\shares\path') === \\server\shares\`
 */

function getRoot(path) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : posix.sep;

  if (!path) {
    return '';
  }

  var len = path.length;
  var firstLetter = path.charCodeAt(0);

  if (extpath_isPathSeparator(firstLetter)) {
    if (extpath_isPathSeparator(path.charCodeAt(1))) {
      // UNC candidate \\localhost\shares\ddd
      //               ^^^^^^^^^^^^^^^^^^^
      if (!extpath_isPathSeparator(path.charCodeAt(2))) {
        var _pos = 3;
        var start = _pos;

        for (; _pos < len; _pos++) {
          if (extpath_isPathSeparator(path.charCodeAt(_pos))) {
            break;
          }
        }

        if (start !== _pos && !extpath_isPathSeparator(path.charCodeAt(_pos + 1))) {
          _pos += 1;

          for (; _pos < len; _pos++) {
            if (extpath_isPathSeparator(path.charCodeAt(_pos))) {
              return path.slice(0, _pos + 1) // consume this separator
              .replace(/[\\/]/g, sep);
            }
          }
        }
      }
    } // /user/far
    // ^


    return sep;
  } else if (isWindowsDriveLetter(firstLetter)) {
    // check for windows drive letter c:\ or c:
    if (path.charCodeAt(1) === 58
    /* Colon */
    ) {
        if (extpath_isPathSeparator(path.charCodeAt(2))) {
          // C:\fff
          // ^^^
          return path.slice(0, 2) + sep;
        } else {
          // C:
          // ^^
          return path.slice(0, 2);
        }
      }
  } // check for URI
  // scheme://authority/path
  // ^^^^^^^^^^^^^^^^^^^


  var pos = path.indexOf('://');

  if (pos !== -1) {
    pos += 3; // 3 -> "://".length

    for (; pos < len; pos++) {
      if (extpath_isPathSeparator(path.charCodeAt(pos))) {
        return path.slice(0, pos + 1); // consume this separator
      }
    }
  }

  return '';
}
/**
 * @deprecated please use `IUriIdentityService.extUri.isEqualOrParent` instead. If
 * you are in a context without services, consider to pass down the `extUri` from the
 * outside, or use `extUriBiasedIgnorePathCase` if you know what you are doing.
 */

function isEqualOrParent(base, parentCandidate, ignoreCase) {
  var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : path_sep;

  if (base === parentCandidate) {
    return true;
  }

  if (!base || !parentCandidate) {
    return false;
  }

  if (parentCandidate.length > base.length) {
    return false;
  }

  if (ignoreCase) {
    var beginsWith = startsWithIgnoreCase(base, parentCandidate);

    if (!beginsWith) {
      return false;
    }

    if (parentCandidate.length === base.length) {
      return true; // same path, different casing
    }

    var sepOffset = parentCandidate.length;

    if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
      sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
    }

    return base.charAt(sepOffset) === separator;
  }

  if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
    parentCandidate += separator;
  }

  return base.indexOf(parentCandidate) === 0;
}
function isWindowsDriveLetter(char0) {
  return char0 >= 65
  /* A */
  && char0 <= 90
  /* Z */
  || char0 >= 97
  /* a */
  && char0 <= 122
  /* z */
  ;
}
function isRootOrDriveLetter(path) {
  var pathNormalized = normalize(path);

  if (platform["e" /* isWindows */]) {
    if (path.length > 3) {
      return false;
    }

    return hasDriveLetter(pathNormalized) && (path.length === 2 || pathNormalized.charCodeAt(2) === 92
    /* Backslash */
    );
  }

  return pathNormalized === posix.sep;
}
function hasDriveLetter(path, continueAsWindows) {
  var isWindowsPath = continueAsWindows !== undefined ? continueAsWindows : platform["e" /* isWindows */];

  if (isWindowsPath) {
    return isWindowsDriveLetter(path.charCodeAt(0)) && path.charCodeAt(1) === 58
    /* Colon */
    ;
  }

  return false;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/map.js











var map_a, map_b;


var map_StringIterator = /*#__PURE__*/function () {
  function StringIterator() {
    _classCallCheck(this, StringIterator);

    this._value = '';
    this._pos = 0;
  }

  _createClass(StringIterator, [{
    key: "reset",
    value: function reset(key) {
      this._value = key;
      this._pos = 0;
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      this._pos += 1;
      return this;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this._pos < this._value.length - 1;
    }
  }, {
    key: "cmp",
    value: function cmp(a) {
      var aCode = a.charCodeAt(0);

      var thisCode = this._value.charCodeAt(this._pos);

      return aCode - thisCode;
    }
  }, {
    key: "value",
    value: function value() {
      return this._value[this._pos];
    }
  }]);

  return StringIterator;
}();
var map_ConfigKeysIterator = /*#__PURE__*/function () {
  function ConfigKeysIterator() {
    var _caseSensitive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, ConfigKeysIterator);

    this._caseSensitive = _caseSensitive;
  }

  _createClass(ConfigKeysIterator, [{
    key: "reset",
    value: function reset(key) {
      this._value = key;
      this._from = 0;
      this._to = 0;
      return this.next();
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this._to < this._value.length;
    }
  }, {
    key: "next",
    value: function next() {
      // this._data = key.split(/[\\/]/).filter(s => !!s);
      this._from = this._to;
      var justSeps = true;

      for (; this._to < this._value.length; this._to++) {
        var ch = this._value.charCodeAt(this._to);

        if (ch === 46
        /* Period */
        ) {
            if (justSeps) {
              this._from++;
            } else {
              break;
            }
          } else {
          justSeps = false;
        }
      }

      return this;
    }
  }, {
    key: "cmp",
    value: function cmp(a) {
      return this._caseSensitive ? compareSubstring(a, this._value, 0, a.length, this._from, this._to) : compareSubstringIgnoreCase(a, this._value, 0, a.length, this._from, this._to);
    }
  }, {
    key: "value",
    value: function value() {
      return this._value.substring(this._from, this._to);
    }
  }]);

  return ConfigKeysIterator;
}();
var map_PathIterator = /*#__PURE__*/function () {
  function PathIterator() {
    var _splitOnBackslash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var _caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, PathIterator);

    this._splitOnBackslash = _splitOnBackslash;
    this._caseSensitive = _caseSensitive;
  }

  _createClass(PathIterator, [{
    key: "reset",
    value: function reset(key) {
      this._from = 0;
      this._to = 0;
      this._value = key;
      this._valueLen = key.length;

      for (var pos = key.length - 1; pos >= 0; pos--, this._valueLen--) {
        var ch = this._value.charCodeAt(pos);

        if (!(ch === 47
        /* Slash */
        || this._splitOnBackslash && ch === 92
        /* Backslash */
        )) {
          break;
        }
      }

      return this.next();
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this._to < this._valueLen;
    }
  }, {
    key: "next",
    value: function next() {
      // this._data = key.split(/[\\/]/).filter(s => !!s);
      this._from = this._to;
      var justSeps = true;

      for (; this._to < this._valueLen; this._to++) {
        var ch = this._value.charCodeAt(this._to);

        if (ch === 47
        /* Slash */
        || this._splitOnBackslash && ch === 92
        /* Backslash */
        ) {
            if (justSeps) {
              this._from++;
            } else {
              break;
            }
          } else {
          justSeps = false;
        }
      }

      return this;
    }
  }, {
    key: "cmp",
    value: function cmp(a) {
      return this._caseSensitive ? compareSubstring(a, this._value, 0, a.length, this._from, this._to) : compareSubstringIgnoreCase(a, this._value, 0, a.length, this._from, this._to);
    }
  }, {
    key: "value",
    value: function value() {
      return this._value.substring(this._from, this._to);
    }
  }]);

  return PathIterator;
}();
var map_UriIterator = /*#__PURE__*/function () {
  function UriIterator(_ignorePathCasing) {
    _classCallCheck(this, UriIterator);

    this._ignorePathCasing = _ignorePathCasing;
    this._states = [];
    this._stateIdx = 0;
  }

  _createClass(UriIterator, [{
    key: "reset",
    value: function reset(key) {
      this._value = key;
      this._states = [];

      if (this._value.scheme) {
        this._states.push(1
        /* Scheme */
        );
      }

      if (this._value.authority) {
        this._states.push(2
        /* Authority */
        );
      }

      if (this._value.path) {
        this._pathIterator = new map_PathIterator(false, !this._ignorePathCasing(key));

        this._pathIterator.reset(key.path);

        if (this._pathIterator.value()) {
          this._states.push(3
          /* Path */
          );
        }
      }

      if (this._value.query) {
        this._states.push(4
        /* Query */
        );
      }

      if (this._value.fragment) {
        this._states.push(5
        /* Fragment */
        );
      }

      this._stateIdx = 0;
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      if (this._states[this._stateIdx] === 3
      /* Path */
      && this._pathIterator.hasNext()) {
        this._pathIterator.next();
      } else {
        this._stateIdx += 1;
      }

      return this;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this._states[this._stateIdx] === 3
      /* Path */
      && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
  }, {
    key: "cmp",
    value: function cmp(a) {
      if (this._states[this._stateIdx] === 1
      /* Scheme */
      ) {
          return compareIgnoreCase(a, this._value.scheme);
        } else if (this._states[this._stateIdx] === 2
      /* Authority */
      ) {
          return compareIgnoreCase(a, this._value.authority);
        } else if (this._states[this._stateIdx] === 3
      /* Path */
      ) {
          return this._pathIterator.cmp(a);
        } else if (this._states[this._stateIdx] === 4
      /* Query */
      ) {
          return strings_compare(a, this._value.query);
        } else if (this._states[this._stateIdx] === 5
      /* Fragment */
      ) {
          return strings_compare(a, this._value.fragment);
        }

      throw new Error();
    }
  }, {
    key: "value",
    value: function value() {
      if (this._states[this._stateIdx] === 1
      /* Scheme */
      ) {
          return this._value.scheme;
        } else if (this._states[this._stateIdx] === 2
      /* Authority */
      ) {
          return this._value.authority;
        } else if (this._states[this._stateIdx] === 3
      /* Path */
      ) {
          return this._pathIterator.value();
        } else if (this._states[this._stateIdx] === 4
      /* Query */
      ) {
          return this._value.query;
        } else if (this._states[this._stateIdx] === 5
      /* Fragment */
      ) {
          return this._value.fragment;
        }

      throw new Error();
    }
  }]);

  return UriIterator;
}();

var map_TernarySearchTreeNode = /*#__PURE__*/function () {
  function TernarySearchTreeNode() {
    _classCallCheck(this, TernarySearchTreeNode);

    this.height = 1;
  }

  _createClass(TernarySearchTreeNode, [{
    key: "rotateLeft",
    value: function rotateLeft() {
      var tmp = this.right;
      this.right = tmp.left;
      tmp.left = this;
      this.updateHeight();
      tmp.updateHeight();
      return tmp;
    }
  }, {
    key: "rotateRight",
    value: function rotateRight() {
      var tmp = this.left;
      this.left = tmp.right;
      tmp.right = this;
      this.updateHeight();
      tmp.updateHeight();
      return tmp;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      this.height = 1 + Math.max(this.heightLeft, this.heightRight);
    }
  }, {
    key: "balanceFactor",
    value: function balanceFactor() {
      return this.heightRight - this.heightLeft;
    }
  }, {
    key: "heightLeft",
    get: function get() {
      var _c, _d;

      return (_d = (_c = this.left) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0;
    }
  }, {
    key: "heightRight",
    get: function get() {
      var _c, _d;

      return (_d = (_c = this.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0;
    }
  }]);

  return TernarySearchTreeNode;
}();

var map_TernarySearchTree = /*#__PURE__*/function () {
  function TernarySearchTree(segments) {
    _classCallCheck(this, TernarySearchTree);

    this._iter = segments;
  }

  _createClass(TernarySearchTree, [{
    key: "clear",
    value: function clear() {
      this._root = undefined;
    }
  }, {
    key: "set",
    value: function set(key, element) {
      var iter = this._iter.reset(key);

      var node;

      if (!this._root) {
        this._root = new map_TernarySearchTreeNode();
        this._root.segment = iter.value();
      }

      var stack = []; // find insert_node

      node = this._root;

      while (true) {
        var val = iter.cmp(node.segment);

        if (val > 0) {
          // left
          if (!node.left) {
            node.left = new map_TernarySearchTreeNode();
            node.left.segment = iter.value();
          }

          stack.push([-1
          /* Left */
          , node]);
          node = node.left;
        } else if (val < 0) {
          // right
          if (!node.right) {
            node.right = new map_TernarySearchTreeNode();
            node.right.segment = iter.value();
          }

          stack.push([1
          /* Right */
          , node]);
          node = node.right;
        } else if (iter.hasNext()) {
          // mid
          iter.next();

          if (!node.mid) {
            node.mid = new map_TernarySearchTreeNode();
            node.mid.segment = iter.value();
          }

          stack.push([0
          /* Mid */
          , node]);
          node = node.mid;
        } else {
          break;
        }
      } // set value


      var oldElement = node.value;
      node.value = element;
      node.key = key; // balance

      for (var i = stack.length - 1; i >= 0; i--) {
        var _node = stack[i][1];

        _node.updateHeight();

        var bf = _node.balanceFactor();

        if (bf < -1 || bf > 1) {
          // needs rotate
          var d1 = stack[i][0];
          var d2 = stack[i + 1][0];

          if (d1 === 1
          /* Right */
          && d2 === 1
          /* Right */
          ) {
              //right, right -> rotate left
              stack[i][1] = _node.rotateLeft();
            } else if (d1 === -1
          /* Left */
          && d2 === -1
          /* Left */
          ) {
              // left, left -> rotate right
              stack[i][1] = _node.rotateRight();
            } else if (d1 === 1
          /* Right */
          && d2 === -1
          /* Left */
          ) {
              // right, left -> double rotate right, left
              _node.right = stack[i + 1][1] = stack[i + 1][1].rotateRight();
              stack[i][1] = _node.rotateLeft();
            } else if (d1 === -1
          /* Left */
          && d2 === 1
          /* Right */
          ) {
              // left, right -> double rotate left, right
              _node.left = stack[i + 1][1] = stack[i + 1][1].rotateLeft();
              stack[i][1] = _node.rotateRight();
            } else {
            throw new Error();
          } // patch path to parent


          if (i > 0) {
            switch (stack[i - 1][0]) {
              case -1
              /* Left */
              :
                stack[i - 1][1].left = stack[i][1];
                break;

              case 1
              /* Right */
              :
                stack[i - 1][1].right = stack[i][1];
                break;

              case 0
              /* Mid */
              :
                stack[i - 1][1].mid = stack[i][1];
                break;
            }
          } else {
            this._root = stack[0][1];
          }
        }
      }

      return oldElement;
    }
  }, {
    key: "get",
    value: function get(key) {
      var _c;

      return (_c = this._getNode(key)) === null || _c === void 0 ? void 0 : _c.value;
    }
  }, {
    key: "_getNode",
    value: function _getNode(key) {
      var iter = this._iter.reset(key);

      var node = this._root;

      while (node) {
        var val = iter.cmp(node.segment);

        if (val > 0) {
          // left
          node = node.left;
        } else if (val < 0) {
          // right
          node = node.right;
        } else if (iter.hasNext()) {
          // mid
          iter.next();
          node = node.mid;
        } else {
          break;
        }
      }

      return node;
    }
  }, {
    key: "has",
    value: function has(key) {
      var node = this._getNode(key);

      return !((node === null || node === void 0 ? void 0 : node.value) === undefined && (node === null || node === void 0 ? void 0 : node.mid) === undefined);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return this._delete(key, false);
    }
  }, {
    key: "deleteSuperstr",
    value: function deleteSuperstr(key) {
      return this._delete(key, true);
    }
  }, {
    key: "_delete",
    value: function _delete(key, superStr) {
      var _c;

      var iter = this._iter.reset(key);

      var stack = [];
      var node = this._root; // find node

      while (node) {
        var val = iter.cmp(node.segment);

        if (val > 0) {
          // left
          stack.push([-1
          /* Left */
          , node]);
          node = node.left;
        } else if (val < 0) {
          // right
          stack.push([1
          /* Right */
          , node]);
          node = node.right;
        } else if (iter.hasNext()) {
          // mid
          iter.next();
          stack.push([0
          /* Mid */
          , node]);
          node = node.mid;
        } else {
          break;
        }
      }

      if (!node) {
        // node not found
        return;
      }

      if (superStr) {
        // removing children, reset height
        node.left = undefined;
        node.mid = undefined;
        node.right = undefined;
        node.height = 1;
      } else {
        // removing element
        node.key = undefined;
        node.value = undefined;
      } // BST node removal


      if (!node.mid && !node.value) {
        if (node.left && node.right) {
          // full node
          var min = this._min(node.right);

          var _key = min.key,
              value = min.value,
              segment = min.segment;

          this._delete(min.key, false);

          node.key = _key;
          node.value = value;
          node.segment = segment;
        } else {
          // empty or half empty
          var newChild = (_c = node.left) !== null && _c !== void 0 ? _c : node.right;

          if (stack.length > 0) {
            var _stack = _slicedToArray(stack[stack.length - 1], 2),
                dir = _stack[0],
                parent = _stack[1];

            switch (dir) {
              case -1
              /* Left */
              :
                parent.left = newChild;
                break;

              case 0
              /* Mid */
              :
                parent.mid = newChild;
                break;

              case 1
              /* Right */
              :
                parent.right = newChild;
                break;
            }
          } else {
            this._root = newChild;
          }
        }
      } // AVL balance


      for (var i = stack.length - 1; i >= 0; i--) {
        var _node2 = stack[i][1];

        _node2.updateHeight();

        var bf = _node2.balanceFactor();

        if (bf > 1) {
          // right heavy
          if (_node2.right.balanceFactor() >= 0) {
            // right, right -> rotate left
            stack[i][1] = _node2.rotateLeft();
          } else {
            // right, left -> double rotate
            _node2.right = _node2.right.rotateRight();
            stack[i][1] = _node2.rotateLeft();
          }
        } else if (bf < -1) {
          // left heavy
          if (_node2.left.balanceFactor() <= 0) {
            // left, left -> rotate right
            stack[i][1] = _node2.rotateRight();
          } else {
            // left, right -> double rotate
            _node2.left = _node2.left.rotateLeft();
            stack[i][1] = _node2.rotateRight();
          }
        } // patch path to parent


        if (i > 0) {
          switch (stack[i - 1][0]) {
            case -1
            /* Left */
            :
              stack[i - 1][1].left = stack[i][1];
              break;

            case 1
            /* Right */
            :
              stack[i - 1][1].right = stack[i][1];
              break;

            case 0
            /* Mid */
            :
              stack[i - 1][1].mid = stack[i][1];
              break;
          }
        } else {
          this._root = stack[0][1];
        }
      }
    }
  }, {
    key: "_min",
    value: function _min(node) {
      while (node.left) {
        node = node.left;
      }

      return node;
    }
  }, {
    key: "findSubstr",
    value: function findSubstr(key) {
      var iter = this._iter.reset(key);

      var node = this._root;
      var candidate = undefined;

      while (node) {
        var val = iter.cmp(node.segment);

        if (val > 0) {
          // left
          node = node.left;
        } else if (val < 0) {
          // right
          node = node.right;
        } else if (iter.hasNext()) {
          // mid
          iter.next();
          candidate = node.value || candidate;
          node = node.mid;
        } else {
          break;
        }
      }

      return node && node.value || candidate;
    }
  }, {
    key: "findSuperstr",
    value: function findSuperstr(key) {
      var iter = this._iter.reset(key);

      var node = this._root;

      while (node) {
        var val = iter.cmp(node.segment);

        if (val > 0) {
          // left
          node = node.left;
        } else if (val < 0) {
          // right
          node = node.right;
        } else if (iter.hasNext()) {
          // mid
          iter.next();
          node = node.mid;
        } else {
          // collect
          if (!node.mid) {
            return undefined;
          } else {
            return this._entries(node.mid);
          }
        }
      }

      return undefined;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _iterator = _createForOfIteratorHelper(this),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var key = _ref2[0];
          var value = _ref2[1];
          callback(value, key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: Symbol.iterator,
    value: /*#__PURE__*/regenerator_default.a.mark(function value() {
      return regenerator_default.a.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this._entries(this._root), "t0", 1);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: "_entries",
    value: /*#__PURE__*/regenerator_default.a.mark(function _entries(node) {
      return regenerator_default.a.wrap(function _entries$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (node) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (!node.left) {
                _context2.next = 4;
                break;
              }

              return _context2.delegateYield(this._entries(node.left), "t0", 4);

            case 4:
              if (!node.value) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return [node.key, node.value];

            case 7:
              if (!node.mid) {
                _context2.next = 9;
                break;
              }

              return _context2.delegateYield(this._entries(node.mid), "t1", 9);

            case 9:
              if (!node.right) {
                _context2.next = 11;
                break;
              }

              return _context2.delegateYield(this._entries(node.right), "t2", 11);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _entries, this);
    })
  }], [{
    key: "forUris",
    value: function forUris() {
      var ignorePathCasing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return false;
      };
      return new TernarySearchTree(new map_UriIterator(ignorePathCasing));
    }
  }, {
    key: "forStrings",
    value: function forStrings() {
      return new TernarySearchTree(new map_StringIterator());
    }
  }, {
    key: "forConfigKeys",
    value: function forConfigKeys() {
      return new TernarySearchTree(new map_ConfigKeysIterator());
    }
  }]);

  return TernarySearchTree;
}();

var map_ResourceMapEntry = function ResourceMapEntry(uri, value) {
  _classCallCheck(this, ResourceMapEntry);

  this.uri = uri;
  this.value = value;
};

var map_ResourceMap = /*#__PURE__*/function () {
  function ResourceMap(mapOrKeyFn, toKey) {
    _classCallCheck(this, ResourceMap);

    this[map_a] = 'ResourceMap';

    if (mapOrKeyFn instanceof ResourceMap) {
      this.map = new Map(mapOrKeyFn.map);
      this.toKey = toKey !== null && toKey !== void 0 ? toKey : ResourceMap.defaultToKey;
    } else {
      this.map = new Map();
      this.toKey = mapOrKeyFn !== null && mapOrKeyFn !== void 0 ? mapOrKeyFn : ResourceMap.defaultToKey;
    }
  }

  _createClass(ResourceMap, [{
    key: "set",
    value: function set(resource, value) {
      this.map.set(this.toKey(resource), new map_ResourceMapEntry(resource, value));
      return this;
    }
  }, {
    key: "get",
    value: function get(resource) {
      var _c;

      return (_c = this.map.get(this.toKey(resource))) === null || _c === void 0 ? void 0 : _c.value;
    }
  }, {
    key: "has",
    value: function has(resource) {
      return this.map.has(this.toKey(resource));
    }
  }, {
    key: "size",
    get: function get() {
      return this.map.size;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.map.clear();
    }
  }, {
    key: "delete",
    value: function _delete(resource) {
      return this.map["delete"](this.toKey(resource));
    }
  }, {
    key: "forEach",
    value: function forEach(clb, thisArg) {
      if (typeof thisArg !== 'undefined') {
        clb = clb.bind(thisArg);
      }

      var _iterator2 = _createForOfIteratorHelper(this.map),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ref6 = _step2.value;

          var _ref5 = _slicedToArray(_ref6, 2);

          var _ = _ref5[0];
          var entry = _ref5[1];
          clb(entry.value, entry.uri, this);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "values",
    value: /*#__PURE__*/regenerator_default.a.mark(function values() {
      var _iterator3, _step3, entry;

      return regenerator_default.a.wrap(function values$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _iterator3 = _createForOfIteratorHelper(this.map.values());
              _context3.prev = 1;

              _iterator3.s();

            case 3:
              if ((_step3 = _iterator3.n()).done) {
                _context3.next = 9;
                break;
              }

              entry = _step3.value;
              _context3.next = 7;
              return entry.value;

            case 7:
              _context3.next = 3;
              break;

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);

              _iterator3.e(_context3.t0);

            case 14:
              _context3.prev = 14;

              _iterator3.f();

              return _context3.finish(14);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, values, this, [[1, 11, 14, 17]]);
    })
  }, {
    key: "keys",
    value: /*#__PURE__*/regenerator_default.a.mark(function keys() {
      var _iterator4, _step4, entry;

      return regenerator_default.a.wrap(function keys$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _iterator4 = _createForOfIteratorHelper(this.map.values());
              _context4.prev = 1;

              _iterator4.s();

            case 3:
              if ((_step4 = _iterator4.n()).done) {
                _context4.next = 9;
                break;
              }

              entry = _step4.value;
              _context4.next = 7;
              return entry.uri;

            case 7:
              _context4.next = 3;
              break;

            case 9:
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);

              _iterator4.e(_context4.t0);

            case 14:
              _context4.prev = 14;

              _iterator4.f();

              return _context4.finish(14);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, keys, this, [[1, 11, 14, 17]]);
    })
  }, {
    key: "entries",
    value: /*#__PURE__*/regenerator_default.a.mark(function entries() {
      var _iterator5, _step5, entry;

      return regenerator_default.a.wrap(function entries$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _iterator5 = _createForOfIteratorHelper(this.map.values());
              _context5.prev = 1;

              _iterator5.s();

            case 3:
              if ((_step5 = _iterator5.n()).done) {
                _context5.next = 9;
                break;
              }

              entry = _step5.value;
              _context5.next = 7;
              return [entry.uri, entry.value];

            case 7:
              _context5.next = 3;
              break;

            case 9:
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);

              _iterator5.e(_context5.t0);

            case 14:
              _context5.prev = 14;

              _iterator5.f();

              return _context5.finish(14);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, entries, this, [[1, 11, 14, 17]]);
    })
  }, {
    key: (map_a = Symbol.toStringTag, Symbol.iterator),
    value: /*#__PURE__*/regenerator_default.a.mark(function value() {
      var _iterator6, _step6, _ref9, _ref8, entry;

      return regenerator_default.a.wrap(function value$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _iterator6 = _createForOfIteratorHelper(this.map);
              _context6.prev = 1;

              _iterator6.s();

            case 3:
              if ((_step6 = _iterator6.n()).done) {
                _context6.next = 11;
                break;
              }

              _ref9 = _step6.value;
              _ref8 = _slicedToArray(_ref9, 2);
              entry = _ref8[1];
              _context6.next = 9;
              return [entry.uri, entry.value];

            case 9:
              _context6.next = 3;
              break;

            case 11:
              _context6.next = 16;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](1);

              _iterator6.e(_context6.t0);

            case 16:
              _context6.prev = 16;

              _iterator6.f();

              return _context6.finish(16);

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, value, this, [[1, 13, 16, 19]]);
    })
  }]);

  return ResourceMap;
}();

map_ResourceMap.defaultToKey = function (resource) {
  return resource.toString();
};

var map_LinkedMap = /*#__PURE__*/function () {
  function LinkedMap() {
    _classCallCheck(this, LinkedMap);

    this[map_b] = 'LinkedMap';
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
    this._state = 0;
  }

  _createClass(LinkedMap, [{
    key: "clear",
    value: function clear() {
      this._map.clear();

      this._head = undefined;
      this._tail = undefined;
      this._size = 0;
      this._state++;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this._head && !this._tail;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }, {
    key: "first",
    get: function get() {
      var _c;

      return (_c = this._head) === null || _c === void 0 ? void 0 : _c.value;
    }
  }, {
    key: "last",
    get: function get() {
      var _c;

      return (_c = this._tail) === null || _c === void 0 ? void 0 : _c.value;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this._map.has(key);
    }
  }, {
    key: "get",
    value: function get(key)
    /* None */
    {
      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var item = this._map.get(key);

      if (!item) {
        return undefined;
      }

      if (touch !== 0
      /* None */
      ) {
          this.touch(item, touch);
        }

      return item.value;
    }
  }, {
    key: "set",
    value: function set(key, value)
    /* None */
    {
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var item = this._map.get(key);

      if (item) {
        item.value = value;

        if (touch !== 0
        /* None */
        ) {
            this.touch(item, touch);
          }
      } else {
        item = {
          key: key,
          value: value,
          next: undefined,
          previous: undefined
        };

        switch (touch) {
          case 0
          /* None */
          :
            this.addItemLast(item);
            break;

          case 1
          /* AsOld */
          :
            this.addItemFirst(item);
            break;

          case 2
          /* AsNew */
          :
            this.addItemLast(item);
            break;

          default:
            this.addItemLast(item);
            break;
        }

        this._map.set(key, item);

        this._size++;
      }

      return this;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return !!this.remove(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var item = this._map.get(key);

      if (!item) {
        return undefined;
      }

      this._map["delete"](key);

      this.removeItem(item);
      this._size--;
      return item.value;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this._head && !this._tail) {
        return undefined;
      }

      if (!this._head || !this._tail) {
        throw new Error('Invalid list');
      }

      var item = this._head;

      this._map["delete"](item.key);

      this.removeItem(item);
      this._size--;
      return item.value;
    }
  }, {
    key: "forEach",
    value: function forEach(callbackfn, thisArg) {
      var state = this._state;
      var current = this._head;

      while (current) {
        if (thisArg) {
          callbackfn.bind(thisArg)(current.value, current.key, this);
        } else {
          callbackfn(current.value, current.key, this);
        }

        if (this._state !== state) {
          throw new Error("LinkedMap got modified during iteration.");
        }

        current = current.next;
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      var _iterator7;

      var map = this;
      var state = this._state;
      var current = this._head;
      var iterator = (_iterator7 = {}, _defineProperty(_iterator7, Symbol.iterator, function () {
        return iterator;
      }), _defineProperty(_iterator7, "next", function next() {
        if (map._state !== state) {
          throw new Error("LinkedMap got modified during iteration.");
        }

        if (current) {
          var result = {
            value: current.key,
            done: false
          };
          current = current.next;
          return result;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }), _iterator7);
      return iterator;
    }
  }, {
    key: "values",
    value: function values() {
      var _iterator8;

      var map = this;
      var state = this._state;
      var current = this._head;
      var iterator = (_iterator8 = {}, _defineProperty(_iterator8, Symbol.iterator, function () {
        return iterator;
      }), _defineProperty(_iterator8, "next", function next() {
        if (map._state !== state) {
          throw new Error("LinkedMap got modified during iteration.");
        }

        if (current) {
          var result = {
            value: current.value,
            done: false
          };
          current = current.next;
          return result;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }), _iterator8);
      return iterator;
    }
  }, {
    key: "entries",
    value: function entries() {
      var _iterator9;

      var map = this;
      var state = this._state;
      var current = this._head;
      var iterator = (_iterator9 = {}, _defineProperty(_iterator9, Symbol.iterator, function () {
        return iterator;
      }), _defineProperty(_iterator9, "next", function next() {
        if (map._state !== state) {
          throw new Error("LinkedMap got modified during iteration.");
        }

        if (current) {
          var result = {
            value: [current.key, current.value],
            done: false
          };
          current = current.next;
          return result;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }), _iterator9);
      return iterator;
    }
  }, {
    key: (map_b = Symbol.toStringTag, Symbol.iterator),
    value: function value() {
      return this.entries();
    }
  }, {
    key: "trimOld",
    value: function trimOld(newSize) {
      if (newSize >= this.size) {
        return;
      }

      if (newSize === 0) {
        this.clear();
        return;
      }

      var current = this._head;
      var currentSize = this.size;

      while (current && currentSize > newSize) {
        this._map["delete"](current.key);

        current = current.next;
        currentSize--;
      }

      this._head = current;
      this._size = currentSize;

      if (current) {
        current.previous = undefined;
      }

      this._state++;
    }
  }, {
    key: "addItemFirst",
    value: function addItemFirst(item) {
      // First time Insert
      if (!this._head && !this._tail) {
        this._tail = item;
      } else if (!this._head) {
        throw new Error('Invalid list');
      } else {
        item.next = this._head;
        this._head.previous = item;
      }

      this._head = item;
      this._state++;
    }
  }, {
    key: "addItemLast",
    value: function addItemLast(item) {
      // First time Insert
      if (!this._head && !this._tail) {
        this._head = item;
      } else if (!this._tail) {
        throw new Error('Invalid list');
      } else {
        item.previous = this._tail;
        this._tail.next = item;
      }

      this._tail = item;
      this._state++;
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      if (item === this._head && item === this._tail) {
        this._head = undefined;
        this._tail = undefined;
      } else if (item === this._head) {
        // This can only happen if size === 1 which is handled
        // by the case above.
        if (!item.next) {
          throw new Error('Invalid list');
        }

        item.next.previous = undefined;
        this._head = item.next;
      } else if (item === this._tail) {
        // This can only happen if size === 1 which is handled
        // by the case above.
        if (!item.previous) {
          throw new Error('Invalid list');
        }

        item.previous.next = undefined;
        this._tail = item.previous;
      } else {
        var next = item.next;
        var previous = item.previous;

        if (!next || !previous) {
          throw new Error('Invalid list');
        }

        next.previous = previous;
        previous.next = next;
      }

      item.next = undefined;
      item.previous = undefined;
      this._state++;
    }
  }, {
    key: "touch",
    value: function touch(item, _touch) {
      if (!this._head || !this._tail) {
        throw new Error('Invalid list');
      }

      if (_touch !== 1
      /* AsOld */
      && _touch !== 2
      /* AsNew */
      ) {
          return;
        }

      if (_touch === 1
      /* AsOld */
      ) {
          if (item === this._head) {
            return;
          }

          var next = item.next;
          var previous = item.previous; // Unlink the item

          if (item === this._tail) {
            // previous must be defined since item was not head but is tail
            // So there are more than on item in the map
            previous.next = undefined;
            this._tail = previous;
          } else {
            // Both next and previous are not undefined since item was neither head nor tail.
            next.previous = previous;
            previous.next = next;
          } // Insert the node at head


          item.previous = undefined;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (_touch === 2
      /* AsNew */
      ) {
          if (item === this._tail) {
            return;
          }

          var _next = item.next;
          var _previous = item.previous; // Unlink the item.

          if (item === this._head) {
            // next must be defined since item was not tail but is head
            // So there are more than on item in the map
            _next.previous = undefined;
            this._head = _next;
          } else {
            // Both next and previous are not undefined since item was neither head nor tail.
            _next.previous = _previous;
            _previous.next = _next;
          }

          item.next = undefined;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var data = [];
      this.forEach(function (value, key) {
        data.push([key, value]);
      });
      return data;
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(data) {
      this.clear();

      var _iterator10 = _createForOfIteratorHelper(data),
          _step7;

      try {
        for (_iterator10.s(); !(_step7 = _iterator10.n()).done;) {
          var _ref12 = _step7.value;

          var _ref11 = _slicedToArray(_ref12, 2);

          var key = _ref11[0];
          var _value = _ref11[1];
          this.set(key, _value);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }]);

  return LinkedMap;
}();
var map_LRUCache = /*#__PURE__*/function (_LinkedMap) {
  _inherits(LRUCache, _LinkedMap);

  var _super = _createSuper(LRUCache);

  function LRUCache(limit) {
    var _this;

    var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, LRUCache);

    _this = _super.call(this);
    _this._limit = limit;
    _this._ratio = Math.min(Math.max(0, ratio), 1);
    return _this;
  }

  _createClass(LRUCache, [{
    key: "limit",
    get: function get() {
      return this._limit;
    },
    set: function set(limit) {
      this._limit = limit;
      this.checkTrim();
    }
  }, {
    key: "get",
    value: function get(key)
    /* AsNew */
    {
      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return get_get(_getPrototypeOf(LRUCache.prototype), "get", this).call(this, key, touch);
    }
  }, {
    key: "peek",
    value: function peek(key) {
      return get_get(_getPrototypeOf(LRUCache.prototype), "get", this).call(this, key, 0
      /* None */
      );
    }
  }, {
    key: "set",
    value: function set(key, value) {
      get_get(_getPrototypeOf(LRUCache.prototype), "set", this).call(this, key, value, 2
      /* AsNew */
      );

      this.checkTrim();
      return this;
    }
  }, {
    key: "checkTrim",
    value: function checkTrim() {
      if (this.size > this._limit) {
        this.trimOld(Math.round(this._limit * this._ratio));
      }
    }
  }]);

  return LRUCache;
}(map_LinkedMap);
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/glob.js


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






var GLOBSTAR = '**';
var GLOB_SPLIT = '/';
var PATH_REGEX = '[/\\\\]'; // any slash or backslash

var NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash

var ALL_FORWARD_SLASHES = /\//g;

function starsToRegExp(starCount) {
  switch (starCount) {
    case 0:
      return '';

    case 1:
      return "".concat(NO_PATH_REGEX, "*?");
    // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)

    default:
      // Matches:  (Path Sep OR Path Val followed by Path Sep OR Path Sep followed by Path Val) 0-many times
      // Group is non capturing because we don't need to capture at all (?:...)
      // Overall we use non-greedy matching because it could be that we match too much
      return "(?:".concat(PATH_REGEX, "|").concat(NO_PATH_REGEX, "+").concat(PATH_REGEX, "|").concat(PATH_REGEX).concat(NO_PATH_REGEX, "+)*?");
  }
}

function splitGlobAware(pattern, splitChar) {
  if (!pattern) {
    return [];
  }

  var segments = [];
  var inBraces = false;
  var inBrackets = false;
  var curVal = '';

  var _iterator = _createForOfIteratorHelper(pattern),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _char = _step.value;

      switch (_char) {
        case splitChar:
          if (!inBraces && !inBrackets) {
            segments.push(curVal);
            curVal = '';
            continue;
          }

          break;

        case '{':
          inBraces = true;
          break;

        case '}':
          inBraces = false;
          break;

        case '[':
          inBrackets = true;
          break;

        case ']':
          inBrackets = false;
          break;
      }

      curVal += _char;
    } // Tail

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (curVal) {
    segments.push(curVal);
  }

  return segments;
}

function parseRegExp(pattern) {
  if (!pattern) {
    return '';
  }

  var regEx = ''; // Split up into segments for each slash found

  var segments = splitGlobAware(pattern, GLOB_SPLIT); // Special case where we only have globstars

  if (segments.every(function (s) {
    return s === GLOBSTAR;
  })) {
    regEx = '.*';
  } // Build regex over segments
  else {
      var previousSegmentWasGlobStar = false;
      segments.forEach(function (segment, index) {
        // Globstar is special
        if (segment === GLOBSTAR) {
          // if we have more than one globstar after another, just ignore it
          if (!previousSegmentWasGlobStar) {
            regEx += starsToRegExp(2);
            previousSegmentWasGlobStar = true;
          }

          return;
        } // States


        var inBraces = false;
        var braceVal = '';
        var inBrackets = false;
        var bracketVal = '';

        var _iterator2 = _createForOfIteratorHelper(segment),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _char2 = _step2.value;

            // Support brace expansion
            if (_char2 !== '}' && inBraces) {
              braceVal += _char2;
              continue;
            } // Support brackets


            if (inBrackets && (_char2 !== ']' || !bracketVal)
            /* ] is literally only allowed as first character in brackets to match it */
            ) {
                var res = void 0; // range operator

                if (_char2 === '-') {
                  res = _char2;
                } // negation operator (only valid on first index in bracket)
                else if ((_char2 === '^' || _char2 === '!') && !bracketVal) {
                    res = '^';
                  } // glob split matching is not allowed within character ranges
                  // see http://man7.org/linux/man-pages/man7/glob.7.html
                  else if (_char2 === GLOB_SPLIT) {
                      res = '';
                    } // anything else gets escaped
                    else {
                        res = escapeRegExpCharacters(_char2);
                      }

                bracketVal += res;
                continue;
              }

            switch (_char2) {
              case '{':
                inBraces = true;
                continue;

              case '[':
                inBrackets = true;
                continue;

              case '}':
                {
                  var choices = splitGlobAware(braceVal, ','); // Converts {foo,bar} => [foo|bar]

                  var braceRegExp = "(?:".concat(choices.map(function (c) {
                    return parseRegExp(c);
                  }).join('|'), ")");
                  regEx += braceRegExp;
                  inBraces = false;
                  braceVal = '';
                  break;
                }

              case ']':
                regEx += '[' + bracketVal + ']';
                inBrackets = false;
                bracketVal = '';
                break;

              case '?':
                regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)

                continue;

              case '*':
                regEx += starsToRegExp(1);
                continue;

              default:
                regEx += escapeRegExpCharacters(_char2);
            }
          } // Tail: Add the slash we had split on if there is more to come and the remaining pattern is not a globstar
          // For example if pattern: some/**/*.js we want the "/" after some to be included in the RegEx to prevent
          // a folder called "something" to match as well.
          // However, if pattern: some/**, we tolerate that we also match on "something" because our globstar behaviour
          // is to match 0-N segments.

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (index < segments.length - 1 && (segments[index + 1] !== GLOBSTAR || index + 2 < segments.length)) {
          regEx += PATH_REGEX;
        } // reset state


        previousSegmentWasGlobStar = false;
      });
    }

  return regEx;
} // regexes to check for trivial glob patterns that just check for String#endsWith


var T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something

var T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something

var T3 = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}

var T3_2 = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**

var T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else

var T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else

var CACHE = new map_LRUCache(10000); // bounded to 10000 elements

var FALSE = function FALSE() {
  return false;
};

var NULL = function NULL() {
  return null;
};

function parsePattern(arg1, options) {
  if (!arg1) {
    return NULL;
  } // Handle IRelativePattern


  var pattern;

  if (typeof arg1 !== 'string') {
    pattern = arg1.pattern;
  } else {
    pattern = arg1;
  } // Whitespace trimming


  pattern = pattern.trim(); // Check cache

  var patternKey = "".concat(pattern, "_").concat(!!options.trimForExclusions);
  var parsedPattern = CACHE.get(patternKey);

  if (parsedPattern) {
    return wrapRelativePattern(parsedPattern, arg1);
  } // Check for Trivials


  var match;

  if (T1.test(pattern)) {
    // common pattern: **/*.txt just need endsWith check
    var base = pattern.substr(4); // '**/*'.length === 4

    parsedPattern = function parsedPattern(path, basename) {
      return typeof path === 'string' && path.endsWith(base) ? pattern : null;
    };
  } else if (match = T2.exec(trimForExclusions(pattern, options))) {
    // common pattern: **/some.txt just need basename check
    parsedPattern = trivia2(match[1], pattern);
  } else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) {
    // repetition of common patterns (see above) {**/*.txt,**/*.png}
    parsedPattern = trivia3(pattern, options);
  } else if (match = T4.exec(trimForExclusions(pattern, options))) {
    // common pattern: **/something/else just need endsWith check
    parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
  } else if (match = T5.exec(trimForExclusions(pattern, options))) {
    // common pattern: something/else just need equals check
    parsedPattern = trivia4and5(match[1], pattern, false);
  } // Otherwise convert to pattern
  else {
      parsedPattern = toRegExp(pattern);
    } // Cache


  CACHE.set(patternKey, parsedPattern);
  return wrapRelativePattern(parsedPattern, arg1);
}

function wrapRelativePattern(parsedPattern, arg2) {
  if (typeof arg2 === 'string') {
    return parsedPattern;
  }

  return function (path, basename) {
    if (!isEqualOrParent(path, arg2.base, !platform["b" /* isLinux */])) {
      // skip glob matching if `base` is not a parent of `path`
      return null;
    } // Given we have checked `base` being a parent of `path`,
    // we can now remove the `base` portion of the `path`
    // and only match on the remaining path components


    return parsedPattern(path.substr(arg2.base.length + 1), basename);
  };
}

function trimForExclusions(pattern, options) {
  return options.trimForExclusions && pattern.endsWith('/**') ? pattern.substr(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
} // common pattern: **/some.txt just need basename check


function trivia2(base, originalPattern) {
  var slashBase = "/".concat(base);
  var backslashBase = "\\".concat(base);

  var parsedPattern = function parsedPattern(path, basename) {
    if (typeof path !== 'string') {
      return null;
    }

    if (basename) {
      return basename === base ? originalPattern : null;
    }

    return path === base || path.endsWith(slashBase) || path.endsWith(backslashBase) ? originalPattern : null;
  };

  var basenames = [base];
  parsedPattern.basenames = basenames;
  parsedPattern.patterns = [originalPattern];
  parsedPattern.allBasenames = basenames;
  return parsedPattern;
} // repetition of common patterns (see above) {**/*.txt,**/*.png}


function trivia3(pattern, options) {
  var parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(',').map(function (pattern) {
    return parsePattern(pattern, options);
  }).filter(function (pattern) {
    return pattern !== NULL;
  }), pattern);
  var n = parsedPatterns.length;

  if (!n) {
    return NULL;
  }

  if (n === 1) {
    return parsedPatterns[0];
  }

  var parsedPattern = function parsedPattern(path, basename) {
    for (var i = 0, _n = parsedPatterns.length; i < _n; i++) {
      if (parsedPatterns[i](path, basename)) {
        return pattern;
      }
    }

    return null;
  };

  var withBasenames = parsedPatterns.find(function (pattern) {
    return !!pattern.allBasenames;
  });

  if (withBasenames) {
    parsedPattern.allBasenames = withBasenames.allBasenames;
  }

  var allPaths = parsedPatterns.reduce(function (all, current) {
    return current.allPaths ? all.concat(current.allPaths) : all;
  }, []);

  if (allPaths.length) {
    parsedPattern.allPaths = allPaths;
  }

  return parsedPattern;
} // common patterns: **/something/else just need endsWith check, something/else just needs and equals check


function trivia4and5(targetPath, pattern, matchPathEnds) {
  var usingPosixSep = path_sep === posix.sep;
  var nativePath = usingPosixSep ? targetPath : targetPath.replace(ALL_FORWARD_SLASHES, path_sep);
  var nativePathEnd = path_sep + nativePath;
  var targetPathEnd = posix.sep + targetPath;
  var parsedPattern = matchPathEnds ? function (testPath, basename) {
    return typeof testPath === 'string' && (testPath === nativePath || testPath.endsWith(nativePathEnd) || !usingPosixSep && (testPath === targetPath || testPath.endsWith(targetPathEnd))) ? pattern : null;
  } : function (testPath, basename) {
    return typeof testPath === 'string' && (testPath === nativePath || !usingPosixSep && testPath === targetPath) ? pattern : null;
  };
  parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + targetPath];
  return parsedPattern;
}

function toRegExp(pattern) {
  try {
    var regExp = new RegExp("^".concat(parseRegExp(pattern), "$"));
    return function (path) {
      regExp.lastIndex = 0; // reset RegExp to its initial state to reuse it!

      return typeof path === 'string' && regExp.test(path) ? pattern : null;
    };
  } catch (error) {
    return NULL;
  }
}

function glob_match(arg1, path, hasSibling) {
  if (!arg1 || typeof path !== 'string') {
    return false;
  }

  return parse(arg1)(path, undefined, hasSibling);
}
function parse(arg1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!arg1) {
    return FALSE;
  } // Glob with String


  if (typeof arg1 === 'string' || isRelativePattern(arg1)) {
    var parsedPattern = parsePattern(arg1, options);

    if (parsedPattern === NULL) {
      return FALSE;
    }

    var resultPattern = function resultPattern(path, basename) {
      return !!parsedPattern(path, basename);
    };

    if (parsedPattern.allBasenames) {
      resultPattern.allBasenames = parsedPattern.allBasenames;
    }

    if (parsedPattern.allPaths) {
      resultPattern.allPaths = parsedPattern.allPaths;
    }

    return resultPattern;
  } // Glob with Expression


  return parsedExpression(arg1, options);
}
function isRelativePattern(obj) {
  var rp = obj;

  if (!rp) {
    return false;
  }

  return typeof rp.base === 'string' && typeof rp.pattern === 'string';
}

function parsedExpression(expression, options) {
  var parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression).map(function (pattern) {
    return parseExpressionPattern(pattern, expression[pattern], options);
  }).filter(function (pattern) {
    return pattern !== NULL;
  }));
  var n = parsedPatterns.length;

  if (!n) {
    return NULL;
  }

  if (!parsedPatterns.some(function (parsedPattern) {
    return !!parsedPattern.requiresSiblings;
  })) {
    if (n === 1) {
      return parsedPatterns[0];
    }

    var _resultExpression = function _resultExpression(path, basename) {
      for (var i = 0, _n2 = parsedPatterns.length; i < _n2; i++) {
        // Pattern matches path
        var result = parsedPatterns[i](path, basename);

        if (result) {
          return result;
        }
      }

      return null;
    };

    var _withBasenames = parsedPatterns.find(function (pattern) {
      return !!pattern.allBasenames;
    });

    if (_withBasenames) {
      _resultExpression.allBasenames = _withBasenames.allBasenames;
    }

    var _allPaths = parsedPatterns.reduce(function (all, current) {
      return current.allPaths ? all.concat(current.allPaths) : all;
    }, []);

    if (_allPaths.length) {
      _resultExpression.allPaths = _allPaths;
    }

    return _resultExpression;
  }

  var resultExpression = function resultExpression(path, base, hasSibling) {
    var name = undefined;

    for (var i = 0, _n3 = parsedPatterns.length; i < _n3; i++) {
      // Pattern matches path
      var parsedPattern = parsedPatterns[i];

      if (parsedPattern.requiresSiblings && hasSibling) {
        if (!base) {
          base = path_basename(path);
        }

        if (!name) {
          name = base.substr(0, base.length - extname(path).length);
        }
      }

      var result = parsedPattern(path, base, name, hasSibling);

      if (result) {
        return result;
      }
    }

    return null;
  };

  var withBasenames = parsedPatterns.find(function (pattern) {
    return !!pattern.allBasenames;
  });

  if (withBasenames) {
    resultExpression.allBasenames = withBasenames.allBasenames;
  }

  var allPaths = parsedPatterns.reduce(function (all, current) {
    return current.allPaths ? all.concat(current.allPaths) : all;
  }, []);

  if (allPaths.length) {
    resultExpression.allPaths = allPaths;
  }

  return resultExpression;
}

function parseExpressionPattern(pattern, value, options) {
  if (value === false) {
    return NULL; // pattern is disabled
  }

  var parsedPattern = parsePattern(pattern, options);

  if (parsedPattern === NULL) {
    return NULL;
  } // Expression Pattern is <boolean>


  if (typeof value === 'boolean') {
    return parsedPattern;
  } // Expression Pattern is <SiblingClause>


  if (value) {
    var when = value.when;

    if (typeof when === 'string') {
      var result = function result(path, basename, name, hasSibling) {
        if (!hasSibling || !parsedPattern(path, basename)) {
          return null;
        }

        var clausePattern = when.replace('$(basename)', name);
        var matched = hasSibling(clausePattern);
        return isThenable(matched) ? matched.then(function (m) {
          return m ? pattern : null;
        }) : matched ? pattern : null;
      };

      result.requiresSiblings = true;
      return result;
    }
  } // Expression is Anything


  return parsedPattern;
}

function aggregateBasenameMatches(parsedPatterns, result) {
  var basenamePatterns = parsedPatterns.filter(function (parsedPattern) {
    return !!parsedPattern.basenames;
  });

  if (basenamePatterns.length < 2) {
    return parsedPatterns;
  }

  var basenames = basenamePatterns.reduce(function (all, current) {
    var basenames = current.basenames;
    return basenames ? all.concat(basenames) : all;
  }, []);
  var patterns;

  if (result) {
    patterns = [];

    for (var i = 0, n = basenames.length; i < n; i++) {
      patterns.push(result);
    }
  } else {
    patterns = basenamePatterns.reduce(function (all, current) {
      var patterns = current.patterns;
      return patterns ? all.concat(patterns) : all;
    }, []);
  }

  var aggregate = function aggregate(path, basename) {
    if (typeof path !== 'string') {
      return null;
    }

    if (!basename) {
      var _i;

      for (_i = path.length; _i > 0; _i--) {
        var ch = path.charCodeAt(_i - 1);

        if (ch === 47
        /* Slash */
        || ch === 92
        /* Backslash */
        ) {
            break;
          }
      }

      basename = path.substr(_i);
    }

    var index = basenames.indexOf(basename);
    return index !== -1 ? patterns[index] : null;
  };

  aggregate.basenames = basenames;
  aggregate.patterns = patterns;
  aggregate.allBasenames = basenames;
  var aggregatedPatterns = parsedPatterns.filter(function (parsedPattern) {
    return !parsedPattern.basenames;
  });
  aggregatedPatterns.push(aggregate);
  return aggregatedPatterns;
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languageSelector.js


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function languageSelector_score(selector, candidateUri, candidateLanguage, candidateIsSynchronized) {
  if (Array.isArray(selector)) {
    // array -> take max individual value
    var ret = 0;

    var _iterator = _createForOfIteratorHelper(selector),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var filter = _step.value;
        var value = languageSelector_score(filter, candidateUri, candidateLanguage, candidateIsSynchronized);

        if (value === 10) {
          return value; // already at the highest
        }

        if (value > ret) {
          ret = value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ret;
  } else if (typeof selector === 'string') {
    if (!candidateIsSynchronized) {
      return 0;
    } // short-hand notion, desugars to
    // 'fooLang' -> { language: 'fooLang'}
    // '*' -> { language: '*' }


    if (selector === '*') {
      return 5;
    } else if (selector === candidateLanguage) {
      return 10;
    } else {
      return 0;
    }
  } else if (selector) {
    // filter -> select accordingly, use defaults for scheme
    var language = selector.language,
        pattern = selector.pattern,
        scheme = selector.scheme,
        hasAccessToAllModels = selector.hasAccessToAllModels; // TODO: microsoft/TypeScript#42768

    if (!candidateIsSynchronized && !hasAccessToAllModels) {
      return 0;
    }

    var _ret = 0;

    if (scheme) {
      if (scheme === candidateUri.scheme) {
        _ret = 10;
      } else if (scheme === '*') {
        _ret = 5;
      } else {
        return 0;
      }
    }

    if (language) {
      if (language === candidateLanguage) {
        _ret = 10;
      } else if (language === '*') {
        _ret = Math.max(_ret, 5);
      } else {
        return 0;
      }
    }

    if (pattern) {
      var normalizedPattern;

      if (typeof pattern === 'string') {
        normalizedPattern = pattern;
      } else {
        // Since this pattern has a `base` property, we need
        // to normalize this path first before passing it on
        // because we will compare it against `Uri.fsPath`
        // which uses platform specific separators.
        // Refs: https://github.com/microsoft/vscode/issues/99938
        normalizedPattern = Object.assign(Object.assign({}, pattern), {
          base: normalize(pattern.base)
        });
      }

      if (normalizedPattern === candidateUri.fsPath || glob_match(normalizedPattern, candidateUri.fsPath)) {
        _ret = 10;
      } else {
        return 0;
      }
    }

    return _ret;
  } else {
    return 0;
  }
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languageFeatureRegistry.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





function isExclusive(selector) {
  if (typeof selector === 'string') {
    return false;
  } else if (Array.isArray(selector)) {
    return selector.every(isExclusive);
  } else {
    return !!selector.exclusive; // TODO: microsoft/TypeScript#42768
  }
}

var languageFeatureRegistry_LanguageFeatureRegistry = /*#__PURE__*/function () {
  function LanguageFeatureRegistry() {
    _classCallCheck(this, LanguageFeatureRegistry);

    this._clock = 0;
    this._entries = [];
    this._onDidChange = new event_Emitter();
  }

  _createClass(LanguageFeatureRegistry, [{
    key: "onDidChange",
    get: function get() {
      return this._onDidChange.event;
    }
  }, {
    key: "register",
    value: function register(selector, provider) {
      var _this = this;

      var entry = {
        selector: selector,
        provider: provider,
        _score: -1,
        _time: this._clock++
      };

      this._entries.push(entry);

      this._lastCandidate = undefined;

      this._onDidChange.fire(this._entries.length);

      return toDisposable(function () {
        if (entry) {
          var idx = _this._entries.indexOf(entry);

          if (idx >= 0) {
            _this._entries.splice(idx, 1);

            _this._lastCandidate = undefined;

            _this._onDidChange.fire(_this._entries.length);

            entry = undefined;
          }
        }
      });
    }
  }, {
    key: "has",
    value: function has(model) {
      return this.all(model).length > 0;
    }
  }, {
    key: "all",
    value: function all(model) {
      if (!model) {
        return [];
      }

      this._updateScores(model);

      var result = []; // from registry

      var _iterator = _createForOfIteratorHelper(this._entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          if (entry._score > 0) {
            result.push(entry.provider);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
  }, {
    key: "ordered",
    value: function ordered(model) {
      var result = [];

      this._orderedForEach(model, function (entry) {
        return result.push(entry.provider);
      });

      return result;
    }
  }, {
    key: "orderedGroups",
    value: function orderedGroups(model) {
      var result = [];
      var lastBucket;
      var lastBucketScore;

      this._orderedForEach(model, function (entry) {
        if (lastBucket && lastBucketScore === entry._score) {
          lastBucket.push(entry.provider);
        } else {
          lastBucketScore = entry._score;
          lastBucket = [entry.provider];
          result.push(lastBucket);
        }
      });

      return result;
    }
  }, {
    key: "_orderedForEach",
    value: function _orderedForEach(model, callback) {
      if (!model) {
        return;
      }

      this._updateScores(model);

      var _iterator2 = _createForOfIteratorHelper(this._entries),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var entry = _step2.value;

          if (entry._score > 0) {
            callback(entry);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_updateScores",
    value: function _updateScores(model) {
      var candidate = {
        uri: model.uri.toString(),
        language: model.getLanguageId()
      };

      if (this._lastCandidate && this._lastCandidate.language === candidate.language && this._lastCandidate.uri === candidate.uri) {
        // nothing has changed
        return;
      }

      this._lastCandidate = candidate;

      var _iterator3 = _createForOfIteratorHelper(this._entries),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var entry = _step3.value;
          entry._score = languageSelector_score(entry.selector, model.uri, model.getLanguageId(), shouldSynchronizeModel(model));

          if (isExclusive(entry.selector) && entry._score > 0) {
            // support for one exclusive selector that overwrites
            // any other selector
            var _iterator4 = _createForOfIteratorHelper(this._entries),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _entry = _step4.value;
                _entry._score = 0;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            entry._score = 1000;
            break;
          }
        } // needs sorting

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this._entries.sort(LanguageFeatureRegistry._compareByScoreAndTime);
    }
  }], [{
    key: "_compareByScoreAndTime",
    value: function _compareByScoreAndTime(a, b) {
      if (a._score < b._score) {
        return 1;
      } else if (a._score > b._score) {
        return -1;
      } else if (a._time < b._time) {
        return 1;
      } else if (a._time > b._time) {
        return -1;
      } else {
        return 0;
      }
    }
  }]);

  return LanguageFeatureRegistry;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/tokenizationRegistry.js








/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var tokenizationRegistry_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



var tokenizationRegistry_TokenizationRegistry = /*#__PURE__*/function () {
  function TokenizationRegistry() {
    _classCallCheck(this, TokenizationRegistry);

    this._map = new Map();
    this._factories = new Map();
    this._onDidChange = new event_Emitter();
    this.onDidChange = this._onDidChange.event;
    this._colorMap = null;
  }

  _createClass(TokenizationRegistry, [{
    key: "fire",
    value: function fire(languages) {
      this._onDidChange.fire({
        changedLanguages: languages,
        changedColorMap: false
      });
    }
  }, {
    key: "register",
    value: function register(language, support) {
      var _this = this;

      this._map.set(language, support);

      this.fire([language]);
      return toDisposable(function () {
        if (_this._map.get(language) !== support) {
          return;
        }

        _this._map["delete"](language);

        _this.fire([language]);
      });
    }
  }, {
    key: "registerFactory",
    value: function registerFactory(languageId, factory) {
      var _this2 = this;

      var _a;

      (_a = this._factories.get(languageId)) === null || _a === void 0 ? void 0 : _a.dispose();
      var myData = new tokenizationRegistry_TokenizationSupportFactoryData(this, languageId, factory);

      this._factories.set(languageId, myData);

      return toDisposable(function () {
        var v = _this2._factories.get(languageId);

        if (!v || v !== myData) {
          return;
        }

        _this2._factories["delete"](languageId);

        v.dispose();
      });
    }
  }, {
    key: "getOrCreate",
    value: function getOrCreate(languageId) {
      return tokenizationRegistry_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var tokenizationSupport, factory;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // check first if the support is already set
                tokenizationSupport = this.get(languageId);

                if (!tokenizationSupport) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", tokenizationSupport);

              case 3:
                factory = this._factories.get(languageId);

                if (!(!factory || factory.isResolved)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", null);

              case 6:
                _context.next = 8;
                return factory.resolve();

              case 8:
                return _context.abrupt("return", this.get(languageId));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "get",
    value: function get(language) {
      return this._map.get(language) || null;
    }
  }, {
    key: "isResolved",
    value: function isResolved(languageId) {
      var tokenizationSupport = this.get(languageId);

      if (tokenizationSupport) {
        return true;
      }

      var factory = this._factories.get(languageId);

      if (!factory || factory.isResolved) {
        return true;
      }

      return false;
    }
  }, {
    key: "setColorMap",
    value: function setColorMap(colorMap) {
      this._colorMap = colorMap;

      this._onDidChange.fire({
        changedLanguages: Array.from(this._map.keys()),
        changedColorMap: true
      });
    }
  }, {
    key: "getColorMap",
    value: function getColorMap() {
      return this._colorMap;
    }
  }, {
    key: "getDefaultBackground",
    value: function getDefaultBackground() {
      if (this._colorMap && this._colorMap.length > 2
      /* DefaultBackground */
      ) {
          return this._colorMap[2
          /* DefaultBackground */
          ];
        }

      return null;
    }
  }]);

  return TokenizationRegistry;
}();

var tokenizationRegistry_TokenizationSupportFactoryData = /*#__PURE__*/function (_Disposable) {
  _inherits(TokenizationSupportFactoryData, _Disposable);

  var _super = _createSuper(TokenizationSupportFactoryData);

  function TokenizationSupportFactoryData(_registry, _languageId, _factory) {
    var _this3;

    _classCallCheck(this, TokenizationSupportFactoryData);

    _this3 = _super.call(this);
    _this3._registry = _registry;
    _this3._languageId = _languageId;
    _this3._factory = _factory;
    _this3._isDisposed = false;
    _this3._resolvePromise = null;
    _this3._isResolved = false;
    return _this3;
  }

  _createClass(TokenizationSupportFactoryData, [{
    key: "isResolved",
    get: function get() {
      return this._isResolved;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isDisposed = true;

      get_get(_getPrototypeOf(TokenizationSupportFactoryData.prototype), "dispose", this).call(this);
    }
  }, {
    key: "resolve",
    value: function resolve() {
      return tokenizationRegistry_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._resolvePromise) {
                  this._resolvePromise = this._create();
                }

                return _context2.abrupt("return", this._resolvePromise);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "_create",
    value: function _create() {
      return tokenizationRegistry_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var value;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.resolve(this._factory.createTokenizationSupport());

              case 2:
                value = _context3.sent;
                this._isResolved = true;

                if (value && !this._isDisposed) {
                  this._register(this._registry.register(this._languageId, value));
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return TokenizationSupportFactoryData;
}(lifecycle_Disposable);
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/base/common/codicons.js



// Selects all codicon names encapsulated in the `$()` syntax and wraps the
// results with spaces so that screen readers can read the text better.
function getCodiconAriaLabel(text) {
  if (!text) {
    return '';
  }

  return text.replace(/\$\((.*?)\)/g, function (_match, codiconName) {
    return " ".concat(codiconName, " ");
  }).trim();
}
/**
 * The Codicon library is a set of default icons that are built-in in VS Code.
 *
 * In the product (outside of base) Codicons should only be used as defaults. In order to have all icons in VS Code
 * themeable, component should define new, UI component specific icons using `iconRegistry.registerIcon`.
 * In that call a Codicon can be named as default.
 */

var codicons_Codicon = /*#__PURE__*/function () {
  function Codicon(id, definition, description) {
    _classCallCheck(this, Codicon);

    this.id = id;
    this.definition = definition;
    this.description = description;

    Codicon._allCodicons.push(this);
  }

  _createClass(Codicon, [{
    key: "classNames",
    get: function get() {
      return 'codicon codicon-' + this.id;
    } // classNamesArray is useful for migrating to ES6 classlist

  }, {
    key: "classNamesArray",
    get: function get() {
      return ['codicon', 'codicon-' + this.id];
    }
  }, {
    key: "cssSelector",
    get: function get() {
      return '.codicon.codicon-' + this.id;
    }
    /**
     * @returns Returns all default icons covered by the codicon font. Only to be used by the icon registry in platform.
     */

  }], [{
    key: "getAll",
    value: function getAll() {
      return Codicon._allCodicons;
    }
  }]);

  return Codicon;
}(); // registry

codicons_Codicon._allCodicons = []; // built-in icons, with image name

codicons_Codicon.add = new codicons_Codicon('add', {
  fontCharacter: '\\ea60'
});
codicons_Codicon.plus = new codicons_Codicon('plus', codicons_Codicon.add.definition);
codicons_Codicon.gistNew = new codicons_Codicon('gist-new', codicons_Codicon.add.definition);
codicons_Codicon.repoCreate = new codicons_Codicon('repo-create', codicons_Codicon.add.definition);
codicons_Codicon.lightbulb = new codicons_Codicon('lightbulb', {
  fontCharacter: '\\ea61'
});
codicons_Codicon.lightBulb = new codicons_Codicon('light-bulb', {
  fontCharacter: '\\ea61'
});
codicons_Codicon.repo = new codicons_Codicon('repo', {
  fontCharacter: '\\ea62'
});
codicons_Codicon.repoDelete = new codicons_Codicon('repo-delete', {
  fontCharacter: '\\ea62'
});
codicons_Codicon.gistFork = new codicons_Codicon('gist-fork', {
  fontCharacter: '\\ea63'
});
codicons_Codicon.repoForked = new codicons_Codicon('repo-forked', {
  fontCharacter: '\\ea63'
});
codicons_Codicon.gitPullRequest = new codicons_Codicon('git-pull-request', {
  fontCharacter: '\\ea64'
});
codicons_Codicon.gitPullRequestAbandoned = new codicons_Codicon('git-pull-request-abandoned', {
  fontCharacter: '\\ea64'
});
codicons_Codicon.recordKeys = new codicons_Codicon('record-keys', {
  fontCharacter: '\\ea65'
});
codicons_Codicon.keyboard = new codicons_Codicon('keyboard', {
  fontCharacter: '\\ea65'
});
codicons_Codicon.tag = new codicons_Codicon('tag', {
  fontCharacter: '\\ea66'
});
codicons_Codicon.tagAdd = new codicons_Codicon('tag-add', {
  fontCharacter: '\\ea66'
});
codicons_Codicon.tagRemove = new codicons_Codicon('tag-remove', {
  fontCharacter: '\\ea66'
});
codicons_Codicon.person = new codicons_Codicon('person', {
  fontCharacter: '\\ea67'
});
codicons_Codicon.personFollow = new codicons_Codicon('person-follow', {
  fontCharacter: '\\ea67'
});
codicons_Codicon.personOutline = new codicons_Codicon('person-outline', {
  fontCharacter: '\\ea67'
});
codicons_Codicon.personFilled = new codicons_Codicon('person-filled', {
  fontCharacter: '\\ea67'
});
codicons_Codicon.gitBranch = new codicons_Codicon('git-branch', {
  fontCharacter: '\\ea68'
});
codicons_Codicon.gitBranchCreate = new codicons_Codicon('git-branch-create', {
  fontCharacter: '\\ea68'
});
codicons_Codicon.gitBranchDelete = new codicons_Codicon('git-branch-delete', {
  fontCharacter: '\\ea68'
});
codicons_Codicon.sourceControl = new codicons_Codicon('source-control', {
  fontCharacter: '\\ea68'
});
codicons_Codicon.mirror = new codicons_Codicon('mirror', {
  fontCharacter: '\\ea69'
});
codicons_Codicon.mirrorPublic = new codicons_Codicon('mirror-public', {
  fontCharacter: '\\ea69'
});
codicons_Codicon.star = new codicons_Codicon('star', {
  fontCharacter: '\\ea6a'
});
codicons_Codicon.starAdd = new codicons_Codicon('star-add', {
  fontCharacter: '\\ea6a'
});
codicons_Codicon.starDelete = new codicons_Codicon('star-delete', {
  fontCharacter: '\\ea6a'
});
codicons_Codicon.starEmpty = new codicons_Codicon('star-empty', {
  fontCharacter: '\\ea6a'
});
codicons_Codicon.comment = new codicons_Codicon('comment', {
  fontCharacter: '\\ea6b'
});
codicons_Codicon.commentAdd = new codicons_Codicon('comment-add', {
  fontCharacter: '\\ea6b'
});
codicons_Codicon.alert = new codicons_Codicon('alert', {
  fontCharacter: '\\ea6c'
});
codicons_Codicon.warning = new codicons_Codicon('warning', {
  fontCharacter: '\\ea6c'
});
codicons_Codicon.search = new codicons_Codicon('search', {
  fontCharacter: '\\ea6d'
});
codicons_Codicon.searchSave = new codicons_Codicon('search-save', {
  fontCharacter: '\\ea6d'
});
codicons_Codicon.logOut = new codicons_Codicon('log-out', {
  fontCharacter: '\\ea6e'
});
codicons_Codicon.signOut = new codicons_Codicon('sign-out', {
  fontCharacter: '\\ea6e'
});
codicons_Codicon.logIn = new codicons_Codicon('log-in', {
  fontCharacter: '\\ea6f'
});
codicons_Codicon.signIn = new codicons_Codicon('sign-in', {
  fontCharacter: '\\ea6f'
});
codicons_Codicon.eye = new codicons_Codicon('eye', {
  fontCharacter: '\\ea70'
});
codicons_Codicon.eyeUnwatch = new codicons_Codicon('eye-unwatch', {
  fontCharacter: '\\ea70'
});
codicons_Codicon.eyeWatch = new codicons_Codicon('eye-watch', {
  fontCharacter: '\\ea70'
});
codicons_Codicon.circleFilled = new codicons_Codicon('circle-filled', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.primitiveDot = new codicons_Codicon('primitive-dot', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.closeDirty = new codicons_Codicon('close-dirty', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.debugBreakpoint = new codicons_Codicon('debug-breakpoint', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.debugBreakpointDisabled = new codicons_Codicon('debug-breakpoint-disabled', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.debugHint = new codicons_Codicon('debug-hint', {
  fontCharacter: '\\ea71'
});
codicons_Codicon.primitiveSquare = new codicons_Codicon('primitive-square', {
  fontCharacter: '\\ea72'
});
codicons_Codicon.edit = new codicons_Codicon('edit', {
  fontCharacter: '\\ea73'
});
codicons_Codicon.pencil = new codicons_Codicon('pencil', {
  fontCharacter: '\\ea73'
});
codicons_Codicon.info = new codicons_Codicon('info', {
  fontCharacter: '\\ea74'
});
codicons_Codicon.issueOpened = new codicons_Codicon('issue-opened', {
  fontCharacter: '\\ea74'
});
codicons_Codicon.gistPrivate = new codicons_Codicon('gist-private', {
  fontCharacter: '\\ea75'
});
codicons_Codicon.gitForkPrivate = new codicons_Codicon('git-fork-private', {
  fontCharacter: '\\ea75'
});
codicons_Codicon.lock = new codicons_Codicon('lock', {
  fontCharacter: '\\ea75'
});
codicons_Codicon.mirrorPrivate = new codicons_Codicon('mirror-private', {
  fontCharacter: '\\ea75'
});
codicons_Codicon.close = new codicons_Codicon('close', {
  fontCharacter: '\\ea76'
});
codicons_Codicon.removeClose = new codicons_Codicon('remove-close', {
  fontCharacter: '\\ea76'
});
codicons_Codicon.x = new codicons_Codicon('x', {
  fontCharacter: '\\ea76'
});
codicons_Codicon.repoSync = new codicons_Codicon('repo-sync', {
  fontCharacter: '\\ea77'
});
codicons_Codicon.sync = new codicons_Codicon('sync', {
  fontCharacter: '\\ea77'
});
codicons_Codicon.clone = new codicons_Codicon('clone', {
  fontCharacter: '\\ea78'
});
codicons_Codicon.desktopDownload = new codicons_Codicon('desktop-download', {
  fontCharacter: '\\ea78'
});
codicons_Codicon.beaker = new codicons_Codicon('beaker', {
  fontCharacter: '\\ea79'
});
codicons_Codicon.microscope = new codicons_Codicon('microscope', {
  fontCharacter: '\\ea79'
});
codicons_Codicon.vm = new codicons_Codicon('vm', {
  fontCharacter: '\\ea7a'
});
codicons_Codicon.deviceDesktop = new codicons_Codicon('device-desktop', {
  fontCharacter: '\\ea7a'
});
codicons_Codicon.file = new codicons_Codicon('file', {
  fontCharacter: '\\ea7b'
});
codicons_Codicon.fileText = new codicons_Codicon('file-text', {
  fontCharacter: '\\ea7b'
});
codicons_Codicon.more = new codicons_Codicon('more', {
  fontCharacter: '\\ea7c'
});
codicons_Codicon.ellipsis = new codicons_Codicon('ellipsis', {
  fontCharacter: '\\ea7c'
});
codicons_Codicon.kebabHorizontal = new codicons_Codicon('kebab-horizontal', {
  fontCharacter: '\\ea7c'
});
codicons_Codicon.mailReply = new codicons_Codicon('mail-reply', {
  fontCharacter: '\\ea7d'
});
codicons_Codicon.reply = new codicons_Codicon('reply', {
  fontCharacter: '\\ea7d'
});
codicons_Codicon.organization = new codicons_Codicon('organization', {
  fontCharacter: '\\ea7e'
});
codicons_Codicon.organizationFilled = new codicons_Codicon('organization-filled', {
  fontCharacter: '\\ea7e'
});
codicons_Codicon.organizationOutline = new codicons_Codicon('organization-outline', {
  fontCharacter: '\\ea7e'
});
codicons_Codicon.newFile = new codicons_Codicon('new-file', {
  fontCharacter: '\\ea7f'
});
codicons_Codicon.fileAdd = new codicons_Codicon('file-add', {
  fontCharacter: '\\ea7f'
});
codicons_Codicon.newFolder = new codicons_Codicon('new-folder', {
  fontCharacter: '\\ea80'
});
codicons_Codicon.fileDirectoryCreate = new codicons_Codicon('file-directory-create', {
  fontCharacter: '\\ea80'
});
codicons_Codicon.trash = new codicons_Codicon('trash', {
  fontCharacter: '\\ea81'
});
codicons_Codicon.trashcan = new codicons_Codicon('trashcan', {
  fontCharacter: '\\ea81'
});
codicons_Codicon.history = new codicons_Codicon('history', {
  fontCharacter: '\\ea82'
});
codicons_Codicon.clock = new codicons_Codicon('clock', {
  fontCharacter: '\\ea82'
});
codicons_Codicon.folder = new codicons_Codicon('folder', {
  fontCharacter: '\\ea83'
});
codicons_Codicon.fileDirectory = new codicons_Codicon('file-directory', {
  fontCharacter: '\\ea83'
});
codicons_Codicon.symbolFolder = new codicons_Codicon('symbol-folder', {
  fontCharacter: '\\ea83'
});
codicons_Codicon.logoGithub = new codicons_Codicon('logo-github', {
  fontCharacter: '\\ea84'
});
codicons_Codicon.markGithub = new codicons_Codicon('mark-github', {
  fontCharacter: '\\ea84'
});
codicons_Codicon.github = new codicons_Codicon('github', {
  fontCharacter: '\\ea84'
});
codicons_Codicon.terminal = new codicons_Codicon('terminal', {
  fontCharacter: '\\ea85'
});
codicons_Codicon.console = new codicons_Codicon('console', {
  fontCharacter: '\\ea85'
});
codicons_Codicon.repl = new codicons_Codicon('repl', {
  fontCharacter: '\\ea85'
});
codicons_Codicon.zap = new codicons_Codicon('zap', {
  fontCharacter: '\\ea86'
});
codicons_Codicon.symbolEvent = new codicons_Codicon('symbol-event', {
  fontCharacter: '\\ea86'
});
codicons_Codicon.error = new codicons_Codicon('error', {
  fontCharacter: '\\ea87'
});
codicons_Codicon.stop = new codicons_Codicon('stop', {
  fontCharacter: '\\ea87'
});
codicons_Codicon.variable = new codicons_Codicon('variable', {
  fontCharacter: '\\ea88'
});
codicons_Codicon.symbolVariable = new codicons_Codicon('symbol-variable', {
  fontCharacter: '\\ea88'
});
codicons_Codicon.array = new codicons_Codicon('array', {
  fontCharacter: '\\ea8a'
});
codicons_Codicon.symbolArray = new codicons_Codicon('symbol-array', {
  fontCharacter: '\\ea8a'
});
codicons_Codicon.symbolModule = new codicons_Codicon('symbol-module', {
  fontCharacter: '\\ea8b'
});
codicons_Codicon.symbolPackage = new codicons_Codicon('symbol-package', {
  fontCharacter: '\\ea8b'
});
codicons_Codicon.symbolNamespace = new codicons_Codicon('symbol-namespace', {
  fontCharacter: '\\ea8b'
});
codicons_Codicon.symbolObject = new codicons_Codicon('symbol-object', {
  fontCharacter: '\\ea8b'
});
codicons_Codicon.symbolMethod = new codicons_Codicon('symbol-method', {
  fontCharacter: '\\ea8c'
});
codicons_Codicon.symbolFunction = new codicons_Codicon('symbol-function', {
  fontCharacter: '\\ea8c'
});
codicons_Codicon.symbolConstructor = new codicons_Codicon('symbol-constructor', {
  fontCharacter: '\\ea8c'
});
codicons_Codicon.symbolBoolean = new codicons_Codicon('symbol-boolean', {
  fontCharacter: '\\ea8f'
});
codicons_Codicon.symbolNull = new codicons_Codicon('symbol-null', {
  fontCharacter: '\\ea8f'
});
codicons_Codicon.symbolNumeric = new codicons_Codicon('symbol-numeric', {
  fontCharacter: '\\ea90'
});
codicons_Codicon.symbolNumber = new codicons_Codicon('symbol-number', {
  fontCharacter: '\\ea90'
});
codicons_Codicon.symbolStructure = new codicons_Codicon('symbol-structure', {
  fontCharacter: '\\ea91'
});
codicons_Codicon.symbolStruct = new codicons_Codicon('symbol-struct', {
  fontCharacter: '\\ea91'
});
codicons_Codicon.symbolParameter = new codicons_Codicon('symbol-parameter', {
  fontCharacter: '\\ea92'
});
codicons_Codicon.symbolTypeParameter = new codicons_Codicon('symbol-type-parameter', {
  fontCharacter: '\\ea92'
});
codicons_Codicon.symbolKey = new codicons_Codicon('symbol-key', {
  fontCharacter: '\\ea93'
});
codicons_Codicon.symbolText = new codicons_Codicon('symbol-text', {
  fontCharacter: '\\ea93'
});
codicons_Codicon.symbolReference = new codicons_Codicon('symbol-reference', {
  fontCharacter: '\\ea94'
});
codicons_Codicon.goToFile = new codicons_Codicon('go-to-file', {
  fontCharacter: '\\ea94'
});
codicons_Codicon.symbolEnum = new codicons_Codicon('symbol-enum', {
  fontCharacter: '\\ea95'
});
codicons_Codicon.symbolValue = new codicons_Codicon('symbol-value', {
  fontCharacter: '\\ea95'
});
codicons_Codicon.symbolRuler = new codicons_Codicon('symbol-ruler', {
  fontCharacter: '\\ea96'
});
codicons_Codicon.symbolUnit = new codicons_Codicon('symbol-unit', {
  fontCharacter: '\\ea96'
});
codicons_Codicon.activateBreakpoints = new codicons_Codicon('activate-breakpoints', {
  fontCharacter: '\\ea97'
});
codicons_Codicon.archive = new codicons_Codicon('archive', {
  fontCharacter: '\\ea98'
});
codicons_Codicon.arrowBoth = new codicons_Codicon('arrow-both', {
  fontCharacter: '\\ea99'
});
codicons_Codicon.arrowDown = new codicons_Codicon('arrow-down', {
  fontCharacter: '\\ea9a'
});
codicons_Codicon.arrowLeft = new codicons_Codicon('arrow-left', {
  fontCharacter: '\\ea9b'
});
codicons_Codicon.arrowRight = new codicons_Codicon('arrow-right', {
  fontCharacter: '\\ea9c'
});
codicons_Codicon.arrowSmallDown = new codicons_Codicon('arrow-small-down', {
  fontCharacter: '\\ea9d'
});
codicons_Codicon.arrowSmallLeft = new codicons_Codicon('arrow-small-left', {
  fontCharacter: '\\ea9e'
});
codicons_Codicon.arrowSmallRight = new codicons_Codicon('arrow-small-right', {
  fontCharacter: '\\ea9f'
});
codicons_Codicon.arrowSmallUp = new codicons_Codicon('arrow-small-up', {
  fontCharacter: '\\eaa0'
});
codicons_Codicon.arrowUp = new codicons_Codicon('arrow-up', {
  fontCharacter: '\\eaa1'
});
codicons_Codicon.bell = new codicons_Codicon('bell', {
  fontCharacter: '\\eaa2'
});
codicons_Codicon.bold = new codicons_Codicon('bold', {
  fontCharacter: '\\eaa3'
});
codicons_Codicon.book = new codicons_Codicon('book', {
  fontCharacter: '\\eaa4'
});
codicons_Codicon.bookmark = new codicons_Codicon('bookmark', {
  fontCharacter: '\\eaa5'
});
codicons_Codicon.debugBreakpointConditionalUnverified = new codicons_Codicon('debug-breakpoint-conditional-unverified', {
  fontCharacter: '\\eaa6'
});
codicons_Codicon.debugBreakpointConditional = new codicons_Codicon('debug-breakpoint-conditional', {
  fontCharacter: '\\eaa7'
});
codicons_Codicon.debugBreakpointConditionalDisabled = new codicons_Codicon('debug-breakpoint-conditional-disabled', {
  fontCharacter: '\\eaa7'
});
codicons_Codicon.debugBreakpointDataUnverified = new codicons_Codicon('debug-breakpoint-data-unverified', {
  fontCharacter: '\\eaa8'
});
codicons_Codicon.debugBreakpointData = new codicons_Codicon('debug-breakpoint-data', {
  fontCharacter: '\\eaa9'
});
codicons_Codicon.debugBreakpointDataDisabled = new codicons_Codicon('debug-breakpoint-data-disabled', {
  fontCharacter: '\\eaa9'
});
codicons_Codicon.debugBreakpointLogUnverified = new codicons_Codicon('debug-breakpoint-log-unverified', {
  fontCharacter: '\\eaaa'
});
codicons_Codicon.debugBreakpointLog = new codicons_Codicon('debug-breakpoint-log', {
  fontCharacter: '\\eaab'
});
codicons_Codicon.debugBreakpointLogDisabled = new codicons_Codicon('debug-breakpoint-log-disabled', {
  fontCharacter: '\\eaab'
});
codicons_Codicon.briefcase = new codicons_Codicon('briefcase', {
  fontCharacter: '\\eaac'
});
codicons_Codicon.broadcast = new codicons_Codicon('broadcast', {
  fontCharacter: '\\eaad'
});
codicons_Codicon.browser = new codicons_Codicon('browser', {
  fontCharacter: '\\eaae'
});
codicons_Codicon.bug = new codicons_Codicon('bug', {
  fontCharacter: '\\eaaf'
});
codicons_Codicon.calendar = new codicons_Codicon('calendar', {
  fontCharacter: '\\eab0'
});
codicons_Codicon.caseSensitive = new codicons_Codicon('case-sensitive', {
  fontCharacter: '\\eab1'
});
codicons_Codicon.check = new codicons_Codicon('check', {
  fontCharacter: '\\eab2'
});
codicons_Codicon.checklist = new codicons_Codicon('checklist', {
  fontCharacter: '\\eab3'
});
codicons_Codicon.chevronDown = new codicons_Codicon('chevron-down', {
  fontCharacter: '\\eab4'
});
codicons_Codicon.dropDownButton = new codicons_Codicon('drop-down-button', codicons_Codicon.chevronDown.definition);
codicons_Codicon.chevronLeft = new codicons_Codicon('chevron-left', {
  fontCharacter: '\\eab5'
});
codicons_Codicon.chevronRight = new codicons_Codicon('chevron-right', {
  fontCharacter: '\\eab6'
});
codicons_Codicon.chevronUp = new codicons_Codicon('chevron-up', {
  fontCharacter: '\\eab7'
});
codicons_Codicon.chromeClose = new codicons_Codicon('chrome-close', {
  fontCharacter: '\\eab8'
});
codicons_Codicon.chromeMaximize = new codicons_Codicon('chrome-maximize', {
  fontCharacter: '\\eab9'
});
codicons_Codicon.chromeMinimize = new codicons_Codicon('chrome-minimize', {
  fontCharacter: '\\eaba'
});
codicons_Codicon.chromeRestore = new codicons_Codicon('chrome-restore', {
  fontCharacter: '\\eabb'
});
codicons_Codicon.circleOutline = new codicons_Codicon('circle-outline', {
  fontCharacter: '\\eabc'
});
codicons_Codicon.debugBreakpointUnverified = new codicons_Codicon('debug-breakpoint-unverified', {
  fontCharacter: '\\eabc'
});
codicons_Codicon.circleSlash = new codicons_Codicon('circle-slash', {
  fontCharacter: '\\eabd'
});
codicons_Codicon.circuitBoard = new codicons_Codicon('circuit-board', {
  fontCharacter: '\\eabe'
});
codicons_Codicon.clearAll = new codicons_Codicon('clear-all', {
  fontCharacter: '\\eabf'
});
codicons_Codicon.clippy = new codicons_Codicon('clippy', {
  fontCharacter: '\\eac0'
});
codicons_Codicon.closeAll = new codicons_Codicon('close-all', {
  fontCharacter: '\\eac1'
});
codicons_Codicon.cloudDownload = new codicons_Codicon('cloud-download', {
  fontCharacter: '\\eac2'
});
codicons_Codicon.cloudUpload = new codicons_Codicon('cloud-upload', {
  fontCharacter: '\\eac3'
});
codicons_Codicon.code = new codicons_Codicon('code', {
  fontCharacter: '\\eac4'
});
codicons_Codicon.collapseAll = new codicons_Codicon('collapse-all', {
  fontCharacter: '\\eac5'
});
codicons_Codicon.colorMode = new codicons_Codicon('color-mode', {
  fontCharacter: '\\eac6'
});
codicons_Codicon.commentDiscussion = new codicons_Codicon('comment-discussion', {
  fontCharacter: '\\eac7'
});
codicons_Codicon.compareChanges = new codicons_Codicon('compare-changes', {
  fontCharacter: '\\eafd'
});
codicons_Codicon.creditCard = new codicons_Codicon('credit-card', {
  fontCharacter: '\\eac9'
});
codicons_Codicon.dash = new codicons_Codicon('dash', {
  fontCharacter: '\\eacc'
});
codicons_Codicon.dashboard = new codicons_Codicon('dashboard', {
  fontCharacter: '\\eacd'
});
codicons_Codicon.database = new codicons_Codicon('database', {
  fontCharacter: '\\eace'
});
codicons_Codicon.debugContinue = new codicons_Codicon('debug-continue', {
  fontCharacter: '\\eacf'
});
codicons_Codicon.debugDisconnect = new codicons_Codicon('debug-disconnect', {
  fontCharacter: '\\ead0'
});
codicons_Codicon.debugPause = new codicons_Codicon('debug-pause', {
  fontCharacter: '\\ead1'
});
codicons_Codicon.debugRestart = new codicons_Codicon('debug-restart', {
  fontCharacter: '\\ead2'
});
codicons_Codicon.debugStart = new codicons_Codicon('debug-start', {
  fontCharacter: '\\ead3'
});
codicons_Codicon.debugStepInto = new codicons_Codicon('debug-step-into', {
  fontCharacter: '\\ead4'
});
codicons_Codicon.debugStepOut = new codicons_Codicon('debug-step-out', {
  fontCharacter: '\\ead5'
});
codicons_Codicon.debugStepOver = new codicons_Codicon('debug-step-over', {
  fontCharacter: '\\ead6'
});
codicons_Codicon.debugStop = new codicons_Codicon('debug-stop', {
  fontCharacter: '\\ead7'
});
codicons_Codicon.debug = new codicons_Codicon('debug', {
  fontCharacter: '\\ead8'
});
codicons_Codicon.deviceCameraVideo = new codicons_Codicon('device-camera-video', {
  fontCharacter: '\\ead9'
});
codicons_Codicon.deviceCamera = new codicons_Codicon('device-camera', {
  fontCharacter: '\\eada'
});
codicons_Codicon.deviceMobile = new codicons_Codicon('device-mobile', {
  fontCharacter: '\\eadb'
});
codicons_Codicon.diffAdded = new codicons_Codicon('diff-added', {
  fontCharacter: '\\eadc'
});
codicons_Codicon.diffIgnored = new codicons_Codicon('diff-ignored', {
  fontCharacter: '\\eadd'
});
codicons_Codicon.diffModified = new codicons_Codicon('diff-modified', {
  fontCharacter: '\\eade'
});
codicons_Codicon.diffRemoved = new codicons_Codicon('diff-removed', {
  fontCharacter: '\\eadf'
});
codicons_Codicon.diffRenamed = new codicons_Codicon('diff-renamed', {
  fontCharacter: '\\eae0'
});
codicons_Codicon.diff = new codicons_Codicon('diff', {
  fontCharacter: '\\eae1'
});
codicons_Codicon.discard = new codicons_Codicon('discard', {
  fontCharacter: '\\eae2'
});
codicons_Codicon.editorLayout = new codicons_Codicon('editor-layout', {
  fontCharacter: '\\eae3'
});
codicons_Codicon.emptyWindow = new codicons_Codicon('empty-window', {
  fontCharacter: '\\eae4'
});
codicons_Codicon.exclude = new codicons_Codicon('exclude', {
  fontCharacter: '\\eae5'
});
codicons_Codicon.extensions = new codicons_Codicon('extensions', {
  fontCharacter: '\\eae6'
});
codicons_Codicon.eyeClosed = new codicons_Codicon('eye-closed', {
  fontCharacter: '\\eae7'
});
codicons_Codicon.fileBinary = new codicons_Codicon('file-binary', {
  fontCharacter: '\\eae8'
});
codicons_Codicon.fileCode = new codicons_Codicon('file-code', {
  fontCharacter: '\\eae9'
});
codicons_Codicon.fileMedia = new codicons_Codicon('file-media', {
  fontCharacter: '\\eaea'
});
codicons_Codicon.filePdf = new codicons_Codicon('file-pdf', {
  fontCharacter: '\\eaeb'
});
codicons_Codicon.fileSubmodule = new codicons_Codicon('file-submodule', {
  fontCharacter: '\\eaec'
});
codicons_Codicon.fileSymlinkDirectory = new codicons_Codicon('file-symlink-directory', {
  fontCharacter: '\\eaed'
});
codicons_Codicon.fileSymlinkFile = new codicons_Codicon('file-symlink-file', {
  fontCharacter: '\\eaee'
});
codicons_Codicon.fileZip = new codicons_Codicon('file-zip', {
  fontCharacter: '\\eaef'
});
codicons_Codicon.files = new codicons_Codicon('files', {
  fontCharacter: '\\eaf0'
});
codicons_Codicon.filter = new codicons_Codicon('filter', {
  fontCharacter: '\\eaf1'
});
codicons_Codicon.flame = new codicons_Codicon('flame', {
  fontCharacter: '\\eaf2'
});
codicons_Codicon.foldDown = new codicons_Codicon('fold-down', {
  fontCharacter: '\\eaf3'
});
codicons_Codicon.foldUp = new codicons_Codicon('fold-up', {
  fontCharacter: '\\eaf4'
});
codicons_Codicon.fold = new codicons_Codicon('fold', {
  fontCharacter: '\\eaf5'
});
codicons_Codicon.folderActive = new codicons_Codicon('folder-active', {
  fontCharacter: '\\eaf6'
});
codicons_Codicon.folderOpened = new codicons_Codicon('folder-opened', {
  fontCharacter: '\\eaf7'
});
codicons_Codicon.gear = new codicons_Codicon('gear', {
  fontCharacter: '\\eaf8'
});
codicons_Codicon.gift = new codicons_Codicon('gift', {
  fontCharacter: '\\eaf9'
});
codicons_Codicon.gistSecret = new codicons_Codicon('gist-secret', {
  fontCharacter: '\\eafa'
});
codicons_Codicon.gist = new codicons_Codicon('gist', {
  fontCharacter: '\\eafb'
});
codicons_Codicon.gitCommit = new codicons_Codicon('git-commit', {
  fontCharacter: '\\eafc'
});
codicons_Codicon.gitCompare = new codicons_Codicon('git-compare', {
  fontCharacter: '\\eafd'
});
codicons_Codicon.gitMerge = new codicons_Codicon('git-merge', {
  fontCharacter: '\\eafe'
});
codicons_Codicon.githubAction = new codicons_Codicon('github-action', {
  fontCharacter: '\\eaff'
});
codicons_Codicon.githubAlt = new codicons_Codicon('github-alt', {
  fontCharacter: '\\eb00'
});
codicons_Codicon.globe = new codicons_Codicon('globe', {
  fontCharacter: '\\eb01'
});
codicons_Codicon.grabber = new codicons_Codicon('grabber', {
  fontCharacter: '\\eb02'
});
codicons_Codicon.graph = new codicons_Codicon('graph', {
  fontCharacter: '\\eb03'
});
codicons_Codicon.gripper = new codicons_Codicon('gripper', {
  fontCharacter: '\\eb04'
});
codicons_Codicon.heart = new codicons_Codicon('heart', {
  fontCharacter: '\\eb05'
});
codicons_Codicon.home = new codicons_Codicon('home', {
  fontCharacter: '\\eb06'
});
codicons_Codicon.horizontalRule = new codicons_Codicon('horizontal-rule', {
  fontCharacter: '\\eb07'
});
codicons_Codicon.hubot = new codicons_Codicon('hubot', {
  fontCharacter: '\\eb08'
});
codicons_Codicon.inbox = new codicons_Codicon('inbox', {
  fontCharacter: '\\eb09'
});
codicons_Codicon.issueClosed = new codicons_Codicon('issue-closed', {
  fontCharacter: '\\eba4'
});
codicons_Codicon.issueReopened = new codicons_Codicon('issue-reopened', {
  fontCharacter: '\\eb0b'
});
codicons_Codicon.issues = new codicons_Codicon('issues', {
  fontCharacter: '\\eb0c'
});
codicons_Codicon.italic = new codicons_Codicon('italic', {
  fontCharacter: '\\eb0d'
});
codicons_Codicon.jersey = new codicons_Codicon('jersey', {
  fontCharacter: '\\eb0e'
});
codicons_Codicon.json = new codicons_Codicon('json', {
  fontCharacter: '\\eb0f'
});
codicons_Codicon.kebabVertical = new codicons_Codicon('kebab-vertical', {
  fontCharacter: '\\eb10'
});
codicons_Codicon.key = new codicons_Codicon('key', {
  fontCharacter: '\\eb11'
});
codicons_Codicon.law = new codicons_Codicon('law', {
  fontCharacter: '\\eb12'
});
codicons_Codicon.lightbulbAutofix = new codicons_Codicon('lightbulb-autofix', {
  fontCharacter: '\\eb13'
});
codicons_Codicon.linkExternal = new codicons_Codicon('link-external', {
  fontCharacter: '\\eb14'
});
codicons_Codicon.link = new codicons_Codicon('link', {
  fontCharacter: '\\eb15'
});
codicons_Codicon.listOrdered = new codicons_Codicon('list-ordered', {
  fontCharacter: '\\eb16'
});
codicons_Codicon.listUnordered = new codicons_Codicon('list-unordered', {
  fontCharacter: '\\eb17'
});
codicons_Codicon.liveShare = new codicons_Codicon('live-share', {
  fontCharacter: '\\eb18'
});
codicons_Codicon.loading = new codicons_Codicon('loading', {
  fontCharacter: '\\eb19'
});
codicons_Codicon.location = new codicons_Codicon('location', {
  fontCharacter: '\\eb1a'
});
codicons_Codicon.mailRead = new codicons_Codicon('mail-read', {
  fontCharacter: '\\eb1b'
});
codicons_Codicon.mail = new codicons_Codicon('mail', {
  fontCharacter: '\\eb1c'
});
codicons_Codicon.markdown = new codicons_Codicon('markdown', {
  fontCharacter: '\\eb1d'
});
codicons_Codicon.megaphone = new codicons_Codicon('megaphone', {
  fontCharacter: '\\eb1e'
});
codicons_Codicon.mention = new codicons_Codicon('mention', {
  fontCharacter: '\\eb1f'
});
codicons_Codicon.milestone = new codicons_Codicon('milestone', {
  fontCharacter: '\\eb20'
});
codicons_Codicon.mortarBoard = new codicons_Codicon('mortar-board', {
  fontCharacter: '\\eb21'
});
codicons_Codicon.move = new codicons_Codicon('move', {
  fontCharacter: '\\eb22'
});
codicons_Codicon.multipleWindows = new codicons_Codicon('multiple-windows', {
  fontCharacter: '\\eb23'
});
codicons_Codicon.mute = new codicons_Codicon('mute', {
  fontCharacter: '\\eb24'
});
codicons_Codicon.noNewline = new codicons_Codicon('no-newline', {
  fontCharacter: '\\eb25'
});
codicons_Codicon.note = new codicons_Codicon('note', {
  fontCharacter: '\\eb26'
});
codicons_Codicon.octoface = new codicons_Codicon('octoface', {
  fontCharacter: '\\eb27'
});
codicons_Codicon.openPreview = new codicons_Codicon('open-preview', {
  fontCharacter: '\\eb28'
});
codicons_Codicon.package_ = new codicons_Codicon('package', {
  fontCharacter: '\\eb29'
});
codicons_Codicon.paintcan = new codicons_Codicon('paintcan', {
  fontCharacter: '\\eb2a'
});
codicons_Codicon.pin = new codicons_Codicon('pin', {
  fontCharacter: '\\eb2b'
});
codicons_Codicon.play = new codicons_Codicon('play', {
  fontCharacter: '\\eb2c'
});
codicons_Codicon.run = new codicons_Codicon('run', {
  fontCharacter: '\\eb2c'
});
codicons_Codicon.plug = new codicons_Codicon('plug', {
  fontCharacter: '\\eb2d'
});
codicons_Codicon.preserveCase = new codicons_Codicon('preserve-case', {
  fontCharacter: '\\eb2e'
});
codicons_Codicon.preview = new codicons_Codicon('preview', {
  fontCharacter: '\\eb2f'
});
codicons_Codicon.project = new codicons_Codicon('project', {
  fontCharacter: '\\eb30'
});
codicons_Codicon.pulse = new codicons_Codicon('pulse', {
  fontCharacter: '\\eb31'
});
codicons_Codicon.question = new codicons_Codicon('question', {
  fontCharacter: '\\eb32'
});
codicons_Codicon.quote = new codicons_Codicon('quote', {
  fontCharacter: '\\eb33'
});
codicons_Codicon.radioTower = new codicons_Codicon('radio-tower', {
  fontCharacter: '\\eb34'
});
codicons_Codicon.reactions = new codicons_Codicon('reactions', {
  fontCharacter: '\\eb35'
});
codicons_Codicon.references = new codicons_Codicon('references', {
  fontCharacter: '\\eb36'
});
codicons_Codicon.refresh = new codicons_Codicon('refresh', {
  fontCharacter: '\\eb37'
});
codicons_Codicon.regex = new codicons_Codicon('regex', {
  fontCharacter: '\\eb38'
});
codicons_Codicon.remoteExplorer = new codicons_Codicon('remote-explorer', {
  fontCharacter: '\\eb39'
});
codicons_Codicon.remote = new codicons_Codicon('remote', {
  fontCharacter: '\\eb3a'
});
codicons_Codicon.remove = new codicons_Codicon('remove', {
  fontCharacter: '\\eb3b'
});
codicons_Codicon.replaceAll = new codicons_Codicon('replace-all', {
  fontCharacter: '\\eb3c'
});
codicons_Codicon.replace = new codicons_Codicon('replace', {
  fontCharacter: '\\eb3d'
});
codicons_Codicon.repoClone = new codicons_Codicon('repo-clone', {
  fontCharacter: '\\eb3e'
});
codicons_Codicon.repoForcePush = new codicons_Codicon('repo-force-push', {
  fontCharacter: '\\eb3f'
});
codicons_Codicon.repoPull = new codicons_Codicon('repo-pull', {
  fontCharacter: '\\eb40'
});
codicons_Codicon.repoPush = new codicons_Codicon('repo-push', {
  fontCharacter: '\\eb41'
});
codicons_Codicon.report = new codicons_Codicon('report', {
  fontCharacter: '\\eb42'
});
codicons_Codicon.requestChanges = new codicons_Codicon('request-changes', {
  fontCharacter: '\\eb43'
});
codicons_Codicon.rocket = new codicons_Codicon('rocket', {
  fontCharacter: '\\eb44'
});
codicons_Codicon.rootFolderOpened = new codicons_Codicon('root-folder-opened', {
  fontCharacter: '\\eb45'
});
codicons_Codicon.rootFolder = new codicons_Codicon('root-folder', {
  fontCharacter: '\\eb46'
});
codicons_Codicon.rss = new codicons_Codicon('rss', {
  fontCharacter: '\\eb47'
});
codicons_Codicon.ruby = new codicons_Codicon('ruby', {
  fontCharacter: '\\eb48'
});
codicons_Codicon.saveAll = new codicons_Codicon('save-all', {
  fontCharacter: '\\eb49'
});
codicons_Codicon.saveAs = new codicons_Codicon('save-as', {
  fontCharacter: '\\eb4a'
});
codicons_Codicon.save = new codicons_Codicon('save', {
  fontCharacter: '\\eb4b'
});
codicons_Codicon.screenFull = new codicons_Codicon('screen-full', {
  fontCharacter: '\\eb4c'
});
codicons_Codicon.screenNormal = new codicons_Codicon('screen-normal', {
  fontCharacter: '\\eb4d'
});
codicons_Codicon.searchStop = new codicons_Codicon('search-stop', {
  fontCharacter: '\\eb4e'
});
codicons_Codicon.server = new codicons_Codicon('server', {
  fontCharacter: '\\eb50'
});
codicons_Codicon.settingsGear = new codicons_Codicon('settings-gear', {
  fontCharacter: '\\eb51'
});
codicons_Codicon.settings = new codicons_Codicon('settings', {
  fontCharacter: '\\eb52'
});
codicons_Codicon.shield = new codicons_Codicon('shield', {
  fontCharacter: '\\eb53'
});
codicons_Codicon.smiley = new codicons_Codicon('smiley', {
  fontCharacter: '\\eb54'
});
codicons_Codicon.sortPrecedence = new codicons_Codicon('sort-precedence', {
  fontCharacter: '\\eb55'
});
codicons_Codicon.splitHorizontal = new codicons_Codicon('split-horizontal', {
  fontCharacter: '\\eb56'
});
codicons_Codicon.splitVertical = new codicons_Codicon('split-vertical', {
  fontCharacter: '\\eb57'
});
codicons_Codicon.squirrel = new codicons_Codicon('squirrel', {
  fontCharacter: '\\eb58'
});
codicons_Codicon.starFull = new codicons_Codicon('star-full', {
  fontCharacter: '\\eb59'
});
codicons_Codicon.starHalf = new codicons_Codicon('star-half', {
  fontCharacter: '\\eb5a'
});
codicons_Codicon.symbolClass = new codicons_Codicon('symbol-class', {
  fontCharacter: '\\eb5b'
});
codicons_Codicon.symbolColor = new codicons_Codicon('symbol-color', {
  fontCharacter: '\\eb5c'
});
codicons_Codicon.symbolCustomColor = new codicons_Codicon('symbol-customcolor', {
  fontCharacter: '\\eb5c'
});
codicons_Codicon.symbolConstant = new codicons_Codicon('symbol-constant', {
  fontCharacter: '\\eb5d'
});
codicons_Codicon.symbolEnumMember = new codicons_Codicon('symbol-enum-member', {
  fontCharacter: '\\eb5e'
});
codicons_Codicon.symbolField = new codicons_Codicon('symbol-field', {
  fontCharacter: '\\eb5f'
});
codicons_Codicon.symbolFile = new codicons_Codicon('symbol-file', {
  fontCharacter: '\\eb60'
});
codicons_Codicon.symbolInterface = new codicons_Codicon('symbol-interface', {
  fontCharacter: '\\eb61'
});
codicons_Codicon.symbolKeyword = new codicons_Codicon('symbol-keyword', {
  fontCharacter: '\\eb62'
});
codicons_Codicon.symbolMisc = new codicons_Codicon('symbol-misc', {
  fontCharacter: '\\eb63'
});
codicons_Codicon.symbolOperator = new codicons_Codicon('symbol-operator', {
  fontCharacter: '\\eb64'
});
codicons_Codicon.symbolProperty = new codicons_Codicon('symbol-property', {
  fontCharacter: '\\eb65'
});
codicons_Codicon.wrench = new codicons_Codicon('wrench', {
  fontCharacter: '\\eb65'
});
codicons_Codicon.wrenchSubaction = new codicons_Codicon('wrench-subaction', {
  fontCharacter: '\\eb65'
});
codicons_Codicon.symbolSnippet = new codicons_Codicon('symbol-snippet', {
  fontCharacter: '\\eb66'
});
codicons_Codicon.tasklist = new codicons_Codicon('tasklist', {
  fontCharacter: '\\eb67'
});
codicons_Codicon.telescope = new codicons_Codicon('telescope', {
  fontCharacter: '\\eb68'
});
codicons_Codicon.textSize = new codicons_Codicon('text-size', {
  fontCharacter: '\\eb69'
});
codicons_Codicon.threeBars = new codicons_Codicon('three-bars', {
  fontCharacter: '\\eb6a'
});
codicons_Codicon.thumbsdown = new codicons_Codicon('thumbsdown', {
  fontCharacter: '\\eb6b'
});
codicons_Codicon.thumbsup = new codicons_Codicon('thumbsup', {
  fontCharacter: '\\eb6c'
});
codicons_Codicon.tools = new codicons_Codicon('tools', {
  fontCharacter: '\\eb6d'
});
codicons_Codicon.triangleDown = new codicons_Codicon('triangle-down', {
  fontCharacter: '\\eb6e'
});
codicons_Codicon.triangleLeft = new codicons_Codicon('triangle-left', {
  fontCharacter: '\\eb6f'
});
codicons_Codicon.triangleRight = new codicons_Codicon('triangle-right', {
  fontCharacter: '\\eb70'
});
codicons_Codicon.triangleUp = new codicons_Codicon('triangle-up', {
  fontCharacter: '\\eb71'
});
codicons_Codicon.twitter = new codicons_Codicon('twitter', {
  fontCharacter: '\\eb72'
});
codicons_Codicon.unfold = new codicons_Codicon('unfold', {
  fontCharacter: '\\eb73'
});
codicons_Codicon.unlock = new codicons_Codicon('unlock', {
  fontCharacter: '\\eb74'
});
codicons_Codicon.unmute = new codicons_Codicon('unmute', {
  fontCharacter: '\\eb75'
});
codicons_Codicon.unverified = new codicons_Codicon('unverified', {
  fontCharacter: '\\eb76'
});
codicons_Codicon.verified = new codicons_Codicon('verified', {
  fontCharacter: '\\eb77'
});
codicons_Codicon.versions = new codicons_Codicon('versions', {
  fontCharacter: '\\eb78'
});
codicons_Codicon.vmActive = new codicons_Codicon('vm-active', {
  fontCharacter: '\\eb79'
});
codicons_Codicon.vmOutline = new codicons_Codicon('vm-outline', {
  fontCharacter: '\\eb7a'
});
codicons_Codicon.vmRunning = new codicons_Codicon('vm-running', {
  fontCharacter: '\\eb7b'
});
codicons_Codicon.watch = new codicons_Codicon('watch', {
  fontCharacter: '\\eb7c'
});
codicons_Codicon.whitespace = new codicons_Codicon('whitespace', {
  fontCharacter: '\\eb7d'
});
codicons_Codicon.wholeWord = new codicons_Codicon('whole-word', {
  fontCharacter: '\\eb7e'
});
codicons_Codicon.window = new codicons_Codicon('window', {
  fontCharacter: '\\eb7f'
});
codicons_Codicon.wordWrap = new codicons_Codicon('word-wrap', {
  fontCharacter: '\\eb80'
});
codicons_Codicon.zoomIn = new codicons_Codicon('zoom-in', {
  fontCharacter: '\\eb81'
});
codicons_Codicon.zoomOut = new codicons_Codicon('zoom-out', {
  fontCharacter: '\\eb82'
});
codicons_Codicon.listFilter = new codicons_Codicon('list-filter', {
  fontCharacter: '\\eb83'
});
codicons_Codicon.listFlat = new codicons_Codicon('list-flat', {
  fontCharacter: '\\eb84'
});
codicons_Codicon.listSelection = new codicons_Codicon('list-selection', {
  fontCharacter: '\\eb85'
});
codicons_Codicon.selection = new codicons_Codicon('selection', {
  fontCharacter: '\\eb85'
});
codicons_Codicon.listTree = new codicons_Codicon('list-tree', {
  fontCharacter: '\\eb86'
});
codicons_Codicon.debugBreakpointFunctionUnverified = new codicons_Codicon('debug-breakpoint-function-unverified', {
  fontCharacter: '\\eb87'
});
codicons_Codicon.debugBreakpointFunction = new codicons_Codicon('debug-breakpoint-function', {
  fontCharacter: '\\eb88'
});
codicons_Codicon.debugBreakpointFunctionDisabled = new codicons_Codicon('debug-breakpoint-function-disabled', {
  fontCharacter: '\\eb88'
});
codicons_Codicon.debugStackframeActive = new codicons_Codicon('debug-stackframe-active', {
  fontCharacter: '\\eb89'
});
codicons_Codicon.debugStackframeDot = new codicons_Codicon('debug-stackframe-dot', {
  fontCharacter: '\\eb8a'
});
codicons_Codicon.debugStackframe = new codicons_Codicon('debug-stackframe', {
  fontCharacter: '\\eb8b'
});
codicons_Codicon.debugStackframeFocused = new codicons_Codicon('debug-stackframe-focused', {
  fontCharacter: '\\eb8b'
});
codicons_Codicon.debugBreakpointUnsupported = new codicons_Codicon('debug-breakpoint-unsupported', {
  fontCharacter: '\\eb8c'
});
codicons_Codicon.symbolString = new codicons_Codicon('symbol-string', {
  fontCharacter: '\\eb8d'
});
codicons_Codicon.debugReverseContinue = new codicons_Codicon('debug-reverse-continue', {
  fontCharacter: '\\eb8e'
});
codicons_Codicon.debugStepBack = new codicons_Codicon('debug-step-back', {
  fontCharacter: '\\eb8f'
});
codicons_Codicon.debugRestartFrame = new codicons_Codicon('debug-restart-frame', {
  fontCharacter: '\\eb90'
});
codicons_Codicon.callIncoming = new codicons_Codicon('call-incoming', {
  fontCharacter: '\\eb92'
});
codicons_Codicon.callOutgoing = new codicons_Codicon('call-outgoing', {
  fontCharacter: '\\eb93'
});
codicons_Codicon.menu = new codicons_Codicon('menu', {
  fontCharacter: '\\eb94'
});
codicons_Codicon.expandAll = new codicons_Codicon('expand-all', {
  fontCharacter: '\\eb95'
});
codicons_Codicon.feedback = new codicons_Codicon('feedback', {
  fontCharacter: '\\eb96'
});
codicons_Codicon.groupByRefType = new codicons_Codicon('group-by-ref-type', {
  fontCharacter: '\\eb97'
});
codicons_Codicon.ungroupByRefType = new codicons_Codicon('ungroup-by-ref-type', {
  fontCharacter: '\\eb98'
});
codicons_Codicon.account = new codicons_Codicon('account', {
  fontCharacter: '\\eb99'
});
codicons_Codicon.bellDot = new codicons_Codicon('bell-dot', {
  fontCharacter: '\\eb9a'
});
codicons_Codicon.debugConsole = new codicons_Codicon('debug-console', {
  fontCharacter: '\\eb9b'
});
codicons_Codicon.library = new codicons_Codicon('library', {
  fontCharacter: '\\eb9c'
});
codicons_Codicon.output = new codicons_Codicon('output', {
  fontCharacter: '\\eb9d'
});
codicons_Codicon.runAll = new codicons_Codicon('run-all', {
  fontCharacter: '\\eb9e'
});
codicons_Codicon.syncIgnored = new codicons_Codicon('sync-ignored', {
  fontCharacter: '\\eb9f'
});
codicons_Codicon.pinned = new codicons_Codicon('pinned', {
  fontCharacter: '\\eba0'
});
codicons_Codicon.githubInverted = new codicons_Codicon('github-inverted', {
  fontCharacter: '\\eba1'
});
codicons_Codicon.debugAlt = new codicons_Codicon('debug-alt', {
  fontCharacter: '\\eb91'
});
codicons_Codicon.serverProcess = new codicons_Codicon('server-process', {
  fontCharacter: '\\eba2'
});
codicons_Codicon.serverEnvironment = new codicons_Codicon('server-environment', {
  fontCharacter: '\\eba3'
});
codicons_Codicon.pass = new codicons_Codicon('pass', {
  fontCharacter: '\\eba4'
});
codicons_Codicon.stopCircle = new codicons_Codicon('stop-circle', {
  fontCharacter: '\\eba5'
});
codicons_Codicon.playCircle = new codicons_Codicon('play-circle', {
  fontCharacter: '\\eba6'
});
codicons_Codicon.record = new codicons_Codicon('record', {
  fontCharacter: '\\eba7'
});
codicons_Codicon.debugAltSmall = new codicons_Codicon('debug-alt-small', {
  fontCharacter: '\\eba8'
});
codicons_Codicon.vmConnect = new codicons_Codicon('vm-connect', {
  fontCharacter: '\\eba9'
});
codicons_Codicon.cloud = new codicons_Codicon('cloud', {
  fontCharacter: '\\ebaa'
});
codicons_Codicon.merge = new codicons_Codicon('merge', {
  fontCharacter: '\\ebab'
});
codicons_Codicon.exportIcon = new codicons_Codicon('export', {
  fontCharacter: '\\ebac'
});
codicons_Codicon.graphLeft = new codicons_Codicon('graph-left', {
  fontCharacter: '\\ebad'
});
codicons_Codicon.magnet = new codicons_Codicon('magnet', {
  fontCharacter: '\\ebae'
});
codicons_Codicon.notebook = new codicons_Codicon('notebook', {
  fontCharacter: '\\ebaf'
});
codicons_Codicon.redo = new codicons_Codicon('redo', {
  fontCharacter: '\\ebb0'
});
codicons_Codicon.checkAll = new codicons_Codicon('check-all', {
  fontCharacter: '\\ebb1'
});
codicons_Codicon.pinnedDirty = new codicons_Codicon('pinned-dirty', {
  fontCharacter: '\\ebb2'
});
codicons_Codicon.passFilled = new codicons_Codicon('pass-filled', {
  fontCharacter: '\\ebb3'
});
codicons_Codicon.circleLargeFilled = new codicons_Codicon('circle-large-filled', {
  fontCharacter: '\\ebb4'
});
codicons_Codicon.circleLargeOutline = new codicons_Codicon('circle-large-outline', {
  fontCharacter: '\\ebb5'
});
codicons_Codicon.combine = new codicons_Codicon('combine', {
  fontCharacter: '\\ebb6'
});
codicons_Codicon.gather = new codicons_Codicon('gather', {
  fontCharacter: '\\ebb6'
});
codicons_Codicon.table = new codicons_Codicon('table', {
  fontCharacter: '\\ebb7'
});
codicons_Codicon.variableGroup = new codicons_Codicon('variable-group', {
  fontCharacter: '\\ebb8'
});
codicons_Codicon.typeHierarchy = new codicons_Codicon('type-hierarchy', {
  fontCharacter: '\\ebb9'
});
codicons_Codicon.typeHierarchySub = new codicons_Codicon('type-hierarchy-sub', {
  fontCharacter: '\\ebba'
});
codicons_Codicon.typeHierarchySuper = new codicons_Codicon('type-hierarchy-super', {
  fontCharacter: '\\ebbb'
});
codicons_Codicon.gitPullRequestCreate = new codicons_Codicon('git-pull-request-create', {
  fontCharacter: '\\ebbc'
});
codicons_Codicon.runAbove = new codicons_Codicon('run-above', {
  fontCharacter: '\\ebbd'
});
codicons_Codicon.runBelow = new codicons_Codicon('run-below', {
  fontCharacter: '\\ebbe'
});
codicons_Codicon.notebookTemplate = new codicons_Codicon('notebook-template', {
  fontCharacter: '\\ebbf'
});
codicons_Codicon.debugRerun = new codicons_Codicon('debug-rerun', {
  fontCharacter: '\\ebc0'
});
codicons_Codicon.workspaceTrusted = new codicons_Codicon('workspace-trusted', {
  fontCharacter: '\\ebc1'
});
codicons_Codicon.workspaceUntrusted = new codicons_Codicon('workspace-untrusted', {
  fontCharacter: '\\ebc2'
});
codicons_Codicon.workspaceUnspecified = new codicons_Codicon('workspace-unspecified', {
  fontCharacter: '\\ebc3'
});
codicons_Codicon.terminalCmd = new codicons_Codicon('terminal-cmd', {
  fontCharacter: '\\ebc4'
});
codicons_Codicon.terminalDebian = new codicons_Codicon('terminal-debian', {
  fontCharacter: '\\ebc5'
});
codicons_Codicon.terminalLinux = new codicons_Codicon('terminal-linux', {
  fontCharacter: '\\ebc6'
});
codicons_Codicon.terminalPowershell = new codicons_Codicon('terminal-powershell', {
  fontCharacter: '\\ebc7'
});
codicons_Codicon.terminalTmux = new codicons_Codicon('terminal-tmux', {
  fontCharacter: '\\ebc8'
});
codicons_Codicon.terminalUbuntu = new codicons_Codicon('terminal-ubuntu', {
  fontCharacter: '\\ebc9'
});
codicons_Codicon.terminalBash = new codicons_Codicon('terminal-bash', {
  fontCharacter: '\\ebca'
});
codicons_Codicon.arrowSwap = new codicons_Codicon('arrow-swap', {
  fontCharacter: '\\ebcb'
});
codicons_Codicon.copy = new codicons_Codicon('copy', {
  fontCharacter: '\\ebcc'
});
codicons_Codicon.personAdd = new codicons_Codicon('person-add', {
  fontCharacter: '\\ebcd'
});
codicons_Codicon.filterFilled = new codicons_Codicon('filter-filled', {
  fontCharacter: '\\ebce'
});
codicons_Codicon.wand = new codicons_Codicon('wand', {
  fontCharacter: '\\ebcf'
});
codicons_Codicon.debugLineByLine = new codicons_Codicon('debug-line-by-line', {
  fontCharacter: '\\ebd0'
});
codicons_Codicon.inspect = new codicons_Codicon('inspect', {
  fontCharacter: '\\ebd1'
});
codicons_Codicon.layers = new codicons_Codicon('layers', {
  fontCharacter: '\\ebd2'
});
codicons_Codicon.layersDot = new codicons_Codicon('layers-dot', {
  fontCharacter: '\\ebd3'
});
codicons_Codicon.layersActive = new codicons_Codicon('layers-active', {
  fontCharacter: '\\ebd4'
});
codicons_Codicon.compass = new codicons_Codicon('compass', {
  fontCharacter: '\\ebd5'
});
codicons_Codicon.compassDot = new codicons_Codicon('compass-dot', {
  fontCharacter: '\\ebd6'
});
codicons_Codicon.compassActive = new codicons_Codicon('compass-active', {
  fontCharacter: '\\ebd7'
});
codicons_Codicon.azure = new codicons_Codicon('azure', {
  fontCharacter: '\\ebd8'
});
codicons_Codicon.issueDraft = new codicons_Codicon('issue-draft', {
  fontCharacter: '\\ebd9'
});
codicons_Codicon.gitPullRequestClosed = new codicons_Codicon('git-pull-request-closed', {
  fontCharacter: '\\ebda'
});
codicons_Codicon.gitPullRequestDraft = new codicons_Codicon('git-pull-request-draft', {
  fontCharacter: '\\ebdb'
});
codicons_Codicon.debugAll = new codicons_Codicon('debug-all', {
  fontCharacter: '\\ebdc'
});
codicons_Codicon.debugCoverage = new codicons_Codicon('debug-coverage', {
  fontCharacter: '\\ebdd'
});
codicons_Codicon.runErrors = new codicons_Codicon('run-errors', {
  fontCharacter: '\\ebde'
});
codicons_Codicon.folderLibrary = new codicons_Codicon('folder-library', {
  fontCharacter: '\\ebdf'
});
codicons_Codicon.debugContinueSmall = new codicons_Codicon('debug-continue-small', {
  fontCharacter: '\\ebe0'
});
codicons_Codicon.beakerStop = new codicons_Codicon('beaker-stop', {
  fontCharacter: '\\ebe1'
});
codicons_Codicon.graphLine = new codicons_Codicon('graph-line', {
  fontCharacter: '\\ebe2'
});
codicons_Codicon.graphScatter = new codicons_Codicon('graph-scatter', {
  fontCharacter: '\\ebe3'
});
codicons_Codicon.pieChart = new codicons_Codicon('pie-chart', {
  fontCharacter: '\\ebe4'
});
codicons_Codicon.bracket = new codicons_Codicon('bracket', codicons_Codicon.json.definition);
codicons_Codicon.bracketDot = new codicons_Codicon('bracket-dot', {
  fontCharacter: '\\ebe5'
});
codicons_Codicon.bracketError = new codicons_Codicon('bracket-error', {
  fontCharacter: '\\ebe6'
});
codicons_Codicon.lockSmall = new codicons_Codicon('lock-small', {
  fontCharacter: '\\ebe7'
});
codicons_Codicon.azureDevops = new codicons_Codicon('azure-devops', {
  fontCharacter: '\\ebe8'
});
codicons_Codicon.verifiedFilled = new codicons_Codicon('verified-filled', {
  fontCharacter: '\\ebe9'
});
codicons_Codicon.newLine = new codicons_Codicon('newline', {
  fontCharacter: '\\ebea'
});
codicons_Codicon.layout = new codicons_Codicon('layout', {
  fontCharacter: '\\ebeb'
});
codicons_Codicon.layoutActivitybarLeft = new codicons_Codicon('layout-activitybar-left', {
  fontCharacter: '\\ebec'
});
codicons_Codicon.layoutActivitybarRight = new codicons_Codicon('layout-activitybar-right', {
  fontCharacter: '\\ebed'
});
codicons_Codicon.layoutPanelLeft = new codicons_Codicon('layout-panel-left', {
  fontCharacter: '\\ebee'
});
codicons_Codicon.layoutPanelCenter = new codicons_Codicon('layout-panel-center', {
  fontCharacter: '\\ebef'
});
codicons_Codicon.layoutPanelJustify = new codicons_Codicon('layout-panel-justify', {
  fontCharacter: '\\ebf0'
});
codicons_Codicon.layoutPanelRight = new codicons_Codicon('layout-panel-right', {
  fontCharacter: '\\ebf1'
});
codicons_Codicon.layoutPanel = new codicons_Codicon('layout-panel', {
  fontCharacter: '\\ebf2'
});
codicons_Codicon.layoutSidebarLeft = new codicons_Codicon('layout-sidebar-left', {
  fontCharacter: '\\ebf3'
});
codicons_Codicon.layoutSidebarRight = new codicons_Codicon('layout-sidebar-right', {
  fontCharacter: '\\ebf4'
});
codicons_Codicon.layoutStatusbar = new codicons_Codicon('layout-statusbar', {
  fontCharacter: '\\ebf5'
});
codicons_Codicon.layoutMenubar = new codicons_Codicon('layout-menubar', {
  fontCharacter: '\\ebf6'
});
codicons_Codicon.layoutCentered = new codicons_Codicon('layout-centered', {
  fontCharacter: '\\ebf7'
});
codicons_Codicon.target = new codicons_Codicon('target', {
  fontCharacter: '\\ebf8'
}); // derived icons, that could become separate icons

codicons_Codicon.dialogError = new codicons_Codicon('dialog-error', codicons_Codicon.error.definition);
codicons_Codicon.dialogWarning = new codicons_Codicon('dialog-warning', codicons_Codicon.warning.definition);
codicons_Codicon.dialogInfo = new codicons_Codicon('dialog-info', codicons_Codicon.info.definition);
codicons_Codicon.dialogClose = new codicons_Codicon('dialog-close', codicons_Codicon.close.definition);
codicons_Codicon.treeItemExpanded = new codicons_Codicon('tree-item-expanded', codicons_Codicon.chevronDown.definition); // collapsed is done with rotation

codicons_Codicon.treeFilterOnTypeOn = new codicons_Codicon('tree-filter-on-type-on', codicons_Codicon.listFilter.definition);
codicons_Codicon.treeFilterOnTypeOff = new codicons_Codicon('tree-filter-on-type-off', codicons_Codicon.listSelection.definition);
codicons_Codicon.treeFilterClear = new codicons_Codicon('tree-filter-clear', codicons_Codicon.close.definition);
codicons_Codicon.treeItemLoading = new codicons_Codicon('tree-item-loading', codicons_Codicon.loading.definition);
codicons_Codicon.menuSelection = new codicons_Codicon('menu-selection', codicons_Codicon.check.definition);
codicons_Codicon.menuSubmenu = new codicons_Codicon('menu-submenu', codicons_Codicon.chevronRight.definition);
codicons_Codicon.menuBarMore = new codicons_Codicon('menubar-more', codicons_Codicon.more.definition);
codicons_Codicon.scrollbarButtonLeft = new codicons_Codicon('scrollbar-button-left', codicons_Codicon.triangleLeft.definition);
codicons_Codicon.scrollbarButtonRight = new codicons_Codicon('scrollbar-button-right', codicons_Codicon.triangleRight.definition);
codicons_Codicon.scrollbarButtonUp = new codicons_Codicon('scrollbar-button-up', codicons_Codicon.triangleUp.definition);
codicons_Codicon.scrollbarButtonDown = new codicons_Codicon('scrollbar-button-down', codicons_Codicon.triangleDown.definition);
codicons_Codicon.toolBarMore = new codicons_Codicon('toolbar-more', codicons_Codicon.more.definition);
codicons_Codicon.quickInputBack = new codicons_Codicon('quick-input-back', codicons_Codicon.arrowLeft.definition);
var codicons_CSSIcon;

(function (CSSIcon) {
  CSSIcon.iconNameSegment = '[A-Za-z0-9]+';
  CSSIcon.iconNameExpression = '[A-Za-z0-9-]+';
  CSSIcon.iconModifierExpression = '~[A-Za-z]+';
  CSSIcon.iconNameCharacter = '[A-Za-z0-9~-]';
  var cssIconIdRegex = new RegExp("^(".concat(CSSIcon.iconNameExpression, ")(").concat(CSSIcon.iconModifierExpression, ")?$"));

  function asClassNameArray(icon) {
    if (icon instanceof codicons_Codicon) {
      return ['codicon', 'codicon-' + icon.id];
    }

    var match = cssIconIdRegex.exec(icon.id);

    if (!match) {
      return asClassNameArray(codicons_Codicon.error);
    }

    var _match2 = _slicedToArray(match, 3),
        id = _match2[1],
        modifier = _match2[2];

    var classNames = ['codicon', 'codicon-' + id];

    if (modifier) {
      classNames.push('codicon-modifier-' + modifier.substr(1));
    }

    return classNames;
  }

  CSSIcon.asClassNameArray = asClassNameArray;

  function asClassName(icon) {
    return asClassNameArray(icon).join(' ');
  }

  CSSIcon.asClassName = asClassName;

  function asCSSSelector(icon) {
    return '.' + asClassNameArray(icon).join('.');
  }

  CSSIcon.asCSSSelector = asCSSSelector;
})(codicons_CSSIcon || (codicons_CSSIcon = {}));
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languages.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * @internal
 */

var languages_TokenMetadata = /*#__PURE__*/function () {
  function TokenMetadata() {
    _classCallCheck(this, TokenMetadata);
  }

  _createClass(TokenMetadata, null, [{
    key: "getLanguageId",
    value: function getLanguageId(metadata) {
      return (metadata & 255
      /* LANGUAGEID_MASK */
      ) >>> 0
      /* LANGUAGEID_OFFSET */
      ;
    }
  }, {
    key: "getTokenType",
    value: function getTokenType(metadata) {
      return (metadata & 768
      /* TOKEN_TYPE_MASK */
      ) >>> 8
      /* TOKEN_TYPE_OFFSET */
      ;
    }
  }, {
    key: "getFontStyle",
    value: function getFontStyle(metadata) {
      return (metadata & 15360
      /* FONT_STYLE_MASK */
      ) >>> 10
      /* FONT_STYLE_OFFSET */
      ;
    }
  }, {
    key: "getForeground",
    value: function getForeground(metadata) {
      return (metadata & 8372224
      /* FOREGROUND_MASK */
      ) >>> 14
      /* FOREGROUND_OFFSET */
      ;
    }
  }, {
    key: "getBackground",
    value: function getBackground(metadata) {
      return (metadata & 4286578688
      /* BACKGROUND_MASK */
      ) >>> 23
      /* BACKGROUND_OFFSET */
      ;
    }
  }, {
    key: "getClassNameFromMetadata",
    value: function getClassNameFromMetadata(metadata) {
      var foreground = this.getForeground(metadata);
      var className = 'mtk' + foreground;
      var fontStyle = this.getFontStyle(metadata);

      if (fontStyle & 1
      /* Italic */
      ) {
          className += ' mtki';
        }

      if (fontStyle & 2
      /* Bold */
      ) {
          className += ' mtkb';
        }

      if (fontStyle & 4
      /* Underline */
      ) {
          className += ' mtku';
        }

      if (fontStyle & 8
      /* Strikethrough */
      ) {
          className += ' mtks';
        }

      return className;
    }
  }, {
    key: "getInlineStyleFromMetadata",
    value: function getInlineStyleFromMetadata(metadata, colorMap) {
      var foreground = this.getForeground(metadata);
      var fontStyle = this.getFontStyle(metadata);
      var result = "color: ".concat(colorMap[foreground], ";");

      if (fontStyle & 1
      /* Italic */
      ) {
          result += 'font-style: italic;';
        }

      if (fontStyle & 2
      /* Bold */
      ) {
          result += 'font-weight: bold;';
        }

      var textDecoration = '';

      if (fontStyle & 4
      /* Underline */
      ) {
          textDecoration += ' underline';
        }

      if (fontStyle & 8
      /* Strikethrough */
      ) {
          textDecoration += ' line-through';
        }

      if (textDecoration) {
        result += "text-decoration:".concat(textDecoration, ";");
      }

      return result;
    }
  }, {
    key: "getPresentationFromMetadata",
    value: function getPresentationFromMetadata(metadata) {
      var foreground = this.getForeground(metadata);
      var fontStyle = this.getFontStyle(metadata);
      return {
        foreground: foreground,
        italic: Boolean(fontStyle & 1
        /* Italic */
        ),
        bold: Boolean(fontStyle & 2
        /* Bold */
        ),
        underline: Boolean(fontStyle & 4
        /* Underline */
        ),
        strikethrough: Boolean(fontStyle & 8
        /* Strikethrough */
        )
      };
    }
  }]);

  return TokenMetadata;
}();
var languages_Token = /*#__PURE__*/function () {
  function Token(offset, type, language) {
    _classCallCheck(this, Token);

    this._tokenBrand = undefined;
    this.offset = offset;
    this.type = type;
    this.language = language;
  }

  _createClass(Token, [{
    key: "toString",
    value: function toString() {
      return '(' + this.offset + ', ' + this.type + ')';
    }
  }]);

  return Token;
}();
/**
 * @internal
 */

var languages_TokenizationResult = function TokenizationResult(tokens, endState) {
  _classCallCheck(this, TokenizationResult);

  this._tokenizationResultBrand = undefined;
  this.tokens = tokens;
  this.endState = endState;
};
/**
 * @internal
 */

var languages_EncodedTokenizationResult = function EncodedTokenizationResult(tokens, endState) {
  _classCallCheck(this, EncodedTokenizationResult);

  this._encodedTokenizationResultBrand = undefined;
  this.tokens = tokens;
  this.endState = endState;
};
/**
 * @internal
 */

var languages_CompletionItemKinds;

(function (CompletionItemKinds) {
  var byKind = new Map();
  byKind.set(0
  /* Method */
  , codicons_Codicon.symbolMethod);
  byKind.set(1
  /* Function */
  , codicons_Codicon.symbolFunction);
  byKind.set(2
  /* Constructor */
  , codicons_Codicon.symbolConstructor);
  byKind.set(3
  /* Field */
  , codicons_Codicon.symbolField);
  byKind.set(4
  /* Variable */
  , codicons_Codicon.symbolVariable);
  byKind.set(5
  /* Class */
  , codicons_Codicon.symbolClass);
  byKind.set(6
  /* Struct */
  , codicons_Codicon.symbolStruct);
  byKind.set(7
  /* Interface */
  , codicons_Codicon.symbolInterface);
  byKind.set(8
  /* Module */
  , codicons_Codicon.symbolModule);
  byKind.set(9
  /* Property */
  , codicons_Codicon.symbolProperty);
  byKind.set(10
  /* Event */
  , codicons_Codicon.symbolEvent);
  byKind.set(11
  /* Operator */
  , codicons_Codicon.symbolOperator);
  byKind.set(12
  /* Unit */
  , codicons_Codicon.symbolUnit);
  byKind.set(13
  /* Value */
  , codicons_Codicon.symbolValue);
  byKind.set(15
  /* Enum */
  , codicons_Codicon.symbolEnum);
  byKind.set(14
  /* Constant */
  , codicons_Codicon.symbolConstant);
  byKind.set(15
  /* Enum */
  , codicons_Codicon.symbolEnum);
  byKind.set(16
  /* EnumMember */
  , codicons_Codicon.symbolEnumMember);
  byKind.set(17
  /* Keyword */
  , codicons_Codicon.symbolKeyword);
  byKind.set(27
  /* Snippet */
  , codicons_Codicon.symbolSnippet);
  byKind.set(18
  /* Text */
  , codicons_Codicon.symbolText);
  byKind.set(19
  /* Color */
  , codicons_Codicon.symbolColor);
  byKind.set(20
  /* File */
  , codicons_Codicon.symbolFile);
  byKind.set(21
  /* Reference */
  , codicons_Codicon.symbolReference);
  byKind.set(22
  /* Customcolor */
  , codicons_Codicon.symbolCustomColor);
  byKind.set(23
  /* Folder */
  , codicons_Codicon.symbolFolder);
  byKind.set(24
  /* TypeParameter */
  , codicons_Codicon.symbolTypeParameter);
  byKind.set(25
  /* User */
  , codicons_Codicon.account);
  byKind.set(26
  /* Issue */
  , codicons_Codicon.issues);
  /**
   * @internal
   */

  function toIcon(kind) {
    var codicon = byKind.get(kind);

    if (!codicon) {
      console.info('No codicon found for CompletionItemKind ' + kind);
      codicon = codicons_Codicon.symbolProperty;
    }

    return codicon;
  }

  CompletionItemKinds.toIcon = toIcon;
  var data = new Map();
  data.set('method', 0
  /* Method */
  );
  data.set('function', 1
  /* Function */
  );
  data.set('constructor', 2
  /* Constructor */
  );
  data.set('field', 3
  /* Field */
  );
  data.set('variable', 4
  /* Variable */
  );
  data.set('class', 5
  /* Class */
  );
  data.set('struct', 6
  /* Struct */
  );
  data.set('interface', 7
  /* Interface */
  );
  data.set('module', 8
  /* Module */
  );
  data.set('property', 9
  /* Property */
  );
  data.set('event', 10
  /* Event */
  );
  data.set('operator', 11
  /* Operator */
  );
  data.set('unit', 12
  /* Unit */
  );
  data.set('value', 13
  /* Value */
  );
  data.set('constant', 14
  /* Constant */
  );
  data.set('enum', 15
  /* Enum */
  );
  data.set('enum-member', 16
  /* EnumMember */
  );
  data.set('enumMember', 16
  /* EnumMember */
  );
  data.set('keyword', 17
  /* Keyword */
  );
  data.set('snippet', 27
  /* Snippet */
  );
  data.set('text', 18
  /* Text */
  );
  data.set('color', 19
  /* Color */
  );
  data.set('file', 20
  /* File */
  );
  data.set('reference', 21
  /* Reference */
  );
  data.set('customcolor', 22
  /* Customcolor */
  );
  data.set('folder', 23
  /* Folder */
  );
  data.set('type-parameter', 24
  /* TypeParameter */
  );
  data.set('typeParameter', 24
  /* TypeParameter */
  );
  data.set('account', 25
  /* User */
  );
  data.set('issue', 26
  /* Issue */
  );
  /**
   * @internal
   */

  function fromString(value, strict) {
    var res = data.get(value);

    if (typeof res === 'undefined' && !strict) {
      res = 9
      /* Property */
      ;
    }

    return res;
  }

  CompletionItemKinds.fromString = fromString;
})(languages_CompletionItemKinds || (languages_CompletionItemKinds = {}));
/**
 * How an {@link InlineCompletionsProvider inline completion provider} was triggered.
 */


var InlineCompletionTriggerKind;

(function (InlineCompletionTriggerKind) {
  /**
   * Completion was triggered automatically while editing.
   * It is sufficient to return a single completion item in this case.
   */
  InlineCompletionTriggerKind[InlineCompletionTriggerKind["Automatic"] = 0] = "Automatic";
  /**
   * Completion was triggered explicitly by a user gesture.
   * Return multiple completion items to enable cycling through them.
   */

  InlineCompletionTriggerKind[InlineCompletionTriggerKind["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));

var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A document highlight kind.
 */


var DocumentHighlightKind;

(function (DocumentHighlightKind) {
  /**
   * A textual occurrence.
   */
  DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
  /**
   * Read-access of a symbol, like reading a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
  /**
   * Write-access of a symbol, like writing to a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * @internal
 */


function isLocationLink(thing) {
  return thing && uri_URI.isUri(thing.uri) && range_Range.isIRange(thing.range) && (range_Range.isIRange(thing.originSelectionRange) || range_Range.isIRange(thing.targetSelectionRange));
}
/**
 * @internal
 */

var languages_SymbolKinds;

(function (SymbolKinds) {
  var byKind = new Map();
  byKind.set(0
  /* File */
  , codicons_Codicon.symbolFile);
  byKind.set(1
  /* Module */
  , codicons_Codicon.symbolModule);
  byKind.set(2
  /* Namespace */
  , codicons_Codicon.symbolNamespace);
  byKind.set(3
  /* Package */
  , codicons_Codicon.symbolPackage);
  byKind.set(4
  /* Class */
  , codicons_Codicon.symbolClass);
  byKind.set(5
  /* Method */
  , codicons_Codicon.symbolMethod);
  byKind.set(6
  /* Property */
  , codicons_Codicon.symbolProperty);
  byKind.set(7
  /* Field */
  , codicons_Codicon.symbolField);
  byKind.set(8
  /* Constructor */
  , codicons_Codicon.symbolConstructor);
  byKind.set(9
  /* Enum */
  , codicons_Codicon.symbolEnum);
  byKind.set(10
  /* Interface */
  , codicons_Codicon.symbolInterface);
  byKind.set(11
  /* Function */
  , codicons_Codicon.symbolFunction);
  byKind.set(12
  /* Variable */
  , codicons_Codicon.symbolVariable);
  byKind.set(13
  /* Constant */
  , codicons_Codicon.symbolConstant);
  byKind.set(14
  /* String */
  , codicons_Codicon.symbolString);
  byKind.set(15
  /* Number */
  , codicons_Codicon.symbolNumber);
  byKind.set(16
  /* Boolean */
  , codicons_Codicon.symbolBoolean);
  byKind.set(17
  /* Array */
  , codicons_Codicon.symbolArray);
  byKind.set(18
  /* Object */
  , codicons_Codicon.symbolObject);
  byKind.set(19
  /* Key */
  , codicons_Codicon.symbolKey);
  byKind.set(20
  /* Null */
  , codicons_Codicon.symbolNull);
  byKind.set(21
  /* EnumMember */
  , codicons_Codicon.symbolEnumMember);
  byKind.set(22
  /* Struct */
  , codicons_Codicon.symbolStruct);
  byKind.set(23
  /* Event */
  , codicons_Codicon.symbolEvent);
  byKind.set(24
  /* Operator */
  , codicons_Codicon.symbolOperator);
  byKind.set(25
  /* TypeParameter */
  , codicons_Codicon.symbolTypeParameter);
  /**
   * @internal
   */

  function toIcon(kind) {
    var icon = byKind.get(kind);

    if (!icon) {
      console.info('No codicon found for SymbolKind ' + kind);
      icon = codicons_Codicon.symbolProperty;
    }

    return icon;
  }

  SymbolKinds.toIcon = toIcon;
})(languages_SymbolKinds || (languages_SymbolKinds = {}));

var languages_FoldingRangeKind =
/**
 * Creates a new {@link FoldingRangeKind}.
 *
 * @param value of the kind.
 */
function FoldingRangeKind(value) {
  _classCallCheck(this, FoldingRangeKind);

  this.value = value;
};
/**
 * Kind for folding range representing a comment. The value of the kind is 'comment'.
 */

languages_FoldingRangeKind.Comment = new languages_FoldingRangeKind('comment');
/**
 * Kind for folding range representing a import. The value of the kind is 'imports'.
 */

languages_FoldingRangeKind.Imports = new languages_FoldingRangeKind('imports');
/**
 * Kind for folding range representing regions (for example marked by `#region`, `#endregion`).
 * The value of the kind is 'region'.
 */

languages_FoldingRangeKind.Region = new languages_FoldingRangeKind('region');
/**
 * @internal
 */

var Command;

(function (Command) {
  /**
   * @internal
   */
  function is(obj) {
    if (!obj || typeof obj !== 'object') {
      return false;
    }

    return typeof obj.id === 'string' && typeof obj.title === 'string';
  }

  Command.is = is;
})(Command || (Command = {}));

var InlayHintKind;

(function (InlayHintKind) {
  InlayHintKind[InlayHintKind["Other"] = 0] = "Other";
  InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
  InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {})); // --- feature registries ------

/**
 * @internal
 */


var ReferenceProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var RenameProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var CompletionProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var InlineCompletionsProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var SignatureHelpProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var HoverProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var EvaluatableExpressionProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var InlineValuesProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentSymbolProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentHighlightProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var LinkedEditingRangeProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DefinitionProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DeclarationProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var ImplementationProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var TypeDefinitionProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var CodeLensProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var InlayHintsProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var CodeActionProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentFormattingEditProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentRangeFormattingEditProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var OnTypeFormattingEditProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var LinkProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var ColorProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var SelectionRangeRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var FoldingRangeProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentSemanticTokensProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var DocumentRangeSemanticTokensProviderRegistry = new languageFeatureRegistry_LanguageFeatureRegistry();
/**
 * @internal
 */

var languages_TokenizationRegistry = new tokenizationRegistry_TokenizationRegistry();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
var AccessibilitySupport;

(function (AccessibilitySupport) {
  /**
   * This should be the browser case where it is not known if a screen reader is attached or no.
   */
  AccessibilitySupport[AccessibilitySupport["Unknown"] = 0] = "Unknown";
  AccessibilitySupport[AccessibilitySupport["Disabled"] = 1] = "Disabled";
  AccessibilitySupport[AccessibilitySupport["Enabled"] = 2] = "Enabled";
})(AccessibilitySupport || (AccessibilitySupport = {}));

var CompletionItemInsertTextRule;

(function (CompletionItemInsertTextRule) {
  /**
   * Adjust whitespace/indentation of multiline insert texts to
   * match the current line indentation.
   */
  CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
  /**
   * `insertText` is a snippet.
   */

  CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));

var CompletionItemKind;

(function (CompletionItemKind) {
  CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
  CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
  CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
  CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
  CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
  CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
  CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
  CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
  CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
  CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
  CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
  CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
  CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
  CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
  CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
  CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
  CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
  CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
  CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
  CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
  CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
  CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
  CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
  CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
  CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
  CompletionItemKind[CompletionItemKind["User"] = 25] = "User";
  CompletionItemKind[CompletionItemKind["Issue"] = 26] = "Issue";
  CompletionItemKind[CompletionItemKind["Snippet"] = 27] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));

var CompletionItemTag;

(function (CompletionItemTag) {
  CompletionItemTag[CompletionItemTag["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * How a suggest provider was triggered.
 */


var CompletionTriggerKind;

(function (CompletionTriggerKind) {
  CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
  CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
  CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
/**
 * A positioning preference for rendering content widgets.
 */


var ContentWidgetPositionPreference;

(function (ContentWidgetPositionPreference) {
  /**
   * Place the content widget exactly at a position
   */
  ContentWidgetPositionPreference[ContentWidgetPositionPreference["EXACT"] = 0] = "EXACT";
  /**
   * Place the content widget above a position
   */

  ContentWidgetPositionPreference[ContentWidgetPositionPreference["ABOVE"] = 1] = "ABOVE";
  /**
   * Place the content widget below a position
   */

  ContentWidgetPositionPreference[ContentWidgetPositionPreference["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
/**
 * Describes the reason the cursor has changed its position.
 */


var CursorChangeReason;

(function (CursorChangeReason) {
  /**
   * Unknown or not set.
   */
  CursorChangeReason[CursorChangeReason["NotSet"] = 0] = "NotSet";
  /**
   * A `model.setValue()` was called.
   */

  CursorChangeReason[CursorChangeReason["ContentFlush"] = 1] = "ContentFlush";
  /**
   * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
   */

  CursorChangeReason[CursorChangeReason["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
  /**
   * There was an explicit user gesture.
   */

  CursorChangeReason[CursorChangeReason["Explicit"] = 3] = "Explicit";
  /**
   * There was a Paste.
   */

  CursorChangeReason[CursorChangeReason["Paste"] = 4] = "Paste";
  /**
   * There was an Undo.
   */

  CursorChangeReason[CursorChangeReason["Undo"] = 5] = "Undo";
  /**
   * There was a Redo.
   */

  CursorChangeReason[CursorChangeReason["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
/**
 * The default end of line to use when instantiating models.
 */


var DefaultEndOfLine;

(function (DefaultEndOfLine) {
  /**
   * Use line feed (\n) as the end of line character.
   */
  DefaultEndOfLine[DefaultEndOfLine["LF"] = 1] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  DefaultEndOfLine[DefaultEndOfLine["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
/**
 * A document highlight kind.
 */


var standaloneEnums_DocumentHighlightKind;

(function (DocumentHighlightKind) {
  /**
   * A textual occurrence.
   */
  DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
  /**
   * Read-access of a symbol, like reading a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
  /**
   * Write-access of a symbol, like writing to a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(standaloneEnums_DocumentHighlightKind || (standaloneEnums_DocumentHighlightKind = {}));
/**
 * Configuration options for auto indentation in the editor
 */


var EditorAutoIndentStrategy;

(function (EditorAutoIndentStrategy) {
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["None"] = 0] = "None";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Keep"] = 1] = "Keep";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Brackets"] = 2] = "Brackets";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Advanced"] = 3] = "Advanced";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Full"] = 4] = "Full";
})(EditorAutoIndentStrategy || (EditorAutoIndentStrategy = {}));

var EditorOption;

(function (EditorOption) {
  EditorOption[EditorOption["acceptSuggestionOnCommitCharacter"] = 0] = "acceptSuggestionOnCommitCharacter";
  EditorOption[EditorOption["acceptSuggestionOnEnter"] = 1] = "acceptSuggestionOnEnter";
  EditorOption[EditorOption["accessibilitySupport"] = 2] = "accessibilitySupport";
  EditorOption[EditorOption["accessibilityPageSize"] = 3] = "accessibilityPageSize";
  EditorOption[EditorOption["ariaLabel"] = 4] = "ariaLabel";
  EditorOption[EditorOption["autoClosingBrackets"] = 5] = "autoClosingBrackets";
  EditorOption[EditorOption["autoClosingDelete"] = 6] = "autoClosingDelete";
  EditorOption[EditorOption["autoClosingOvertype"] = 7] = "autoClosingOvertype";
  EditorOption[EditorOption["autoClosingQuotes"] = 8] = "autoClosingQuotes";
  EditorOption[EditorOption["autoIndent"] = 9] = "autoIndent";
  EditorOption[EditorOption["automaticLayout"] = 10] = "automaticLayout";
  EditorOption[EditorOption["autoSurround"] = 11] = "autoSurround";
  EditorOption[EditorOption["bracketPairColorization"] = 12] = "bracketPairColorization";
  EditorOption[EditorOption["guides"] = 13] = "guides";
  EditorOption[EditorOption["codeLens"] = 14] = "codeLens";
  EditorOption[EditorOption["codeLensFontFamily"] = 15] = "codeLensFontFamily";
  EditorOption[EditorOption["codeLensFontSize"] = 16] = "codeLensFontSize";
  EditorOption[EditorOption["colorDecorators"] = 17] = "colorDecorators";
  EditorOption[EditorOption["columnSelection"] = 18] = "columnSelection";
  EditorOption[EditorOption["comments"] = 19] = "comments";
  EditorOption[EditorOption["contextmenu"] = 20] = "contextmenu";
  EditorOption[EditorOption["copyWithSyntaxHighlighting"] = 21] = "copyWithSyntaxHighlighting";
  EditorOption[EditorOption["cursorBlinking"] = 22] = "cursorBlinking";
  EditorOption[EditorOption["cursorSmoothCaretAnimation"] = 23] = "cursorSmoothCaretAnimation";
  EditorOption[EditorOption["cursorStyle"] = 24] = "cursorStyle";
  EditorOption[EditorOption["cursorSurroundingLines"] = 25] = "cursorSurroundingLines";
  EditorOption[EditorOption["cursorSurroundingLinesStyle"] = 26] = "cursorSurroundingLinesStyle";
  EditorOption[EditorOption["cursorWidth"] = 27] = "cursorWidth";
  EditorOption[EditorOption["disableLayerHinting"] = 28] = "disableLayerHinting";
  EditorOption[EditorOption["disableMonospaceOptimizations"] = 29] = "disableMonospaceOptimizations";
  EditorOption[EditorOption["domReadOnly"] = 30] = "domReadOnly";
  EditorOption[EditorOption["dragAndDrop"] = 31] = "dragAndDrop";
  EditorOption[EditorOption["emptySelectionClipboard"] = 32] = "emptySelectionClipboard";
  EditorOption[EditorOption["extraEditorClassName"] = 33] = "extraEditorClassName";
  EditorOption[EditorOption["fastScrollSensitivity"] = 34] = "fastScrollSensitivity";
  EditorOption[EditorOption["find"] = 35] = "find";
  EditorOption[EditorOption["fixedOverflowWidgets"] = 36] = "fixedOverflowWidgets";
  EditorOption[EditorOption["folding"] = 37] = "folding";
  EditorOption[EditorOption["foldingStrategy"] = 38] = "foldingStrategy";
  EditorOption[EditorOption["foldingHighlight"] = 39] = "foldingHighlight";
  EditorOption[EditorOption["foldingImportsByDefault"] = 40] = "foldingImportsByDefault";
  EditorOption[EditorOption["foldingMaximumRegions"] = 41] = "foldingMaximumRegions";
  EditorOption[EditorOption["unfoldOnClickAfterEndOfLine"] = 42] = "unfoldOnClickAfterEndOfLine";
  EditorOption[EditorOption["fontFamily"] = 43] = "fontFamily";
  EditorOption[EditorOption["fontInfo"] = 44] = "fontInfo";
  EditorOption[EditorOption["fontLigatures"] = 45] = "fontLigatures";
  EditorOption[EditorOption["fontSize"] = 46] = "fontSize";
  EditorOption[EditorOption["fontWeight"] = 47] = "fontWeight";
  EditorOption[EditorOption["formatOnPaste"] = 48] = "formatOnPaste";
  EditorOption[EditorOption["formatOnType"] = 49] = "formatOnType";
  EditorOption[EditorOption["glyphMargin"] = 50] = "glyphMargin";
  EditorOption[EditorOption["gotoLocation"] = 51] = "gotoLocation";
  EditorOption[EditorOption["hideCursorInOverviewRuler"] = 52] = "hideCursorInOverviewRuler";
  EditorOption[EditorOption["hover"] = 53] = "hover";
  EditorOption[EditorOption["inDiffEditor"] = 54] = "inDiffEditor";
  EditorOption[EditorOption["inlineSuggest"] = 55] = "inlineSuggest";
  EditorOption[EditorOption["letterSpacing"] = 56] = "letterSpacing";
  EditorOption[EditorOption["lightbulb"] = 57] = "lightbulb";
  EditorOption[EditorOption["lineDecorationsWidth"] = 58] = "lineDecorationsWidth";
  EditorOption[EditorOption["lineHeight"] = 59] = "lineHeight";
  EditorOption[EditorOption["lineNumbers"] = 60] = "lineNumbers";
  EditorOption[EditorOption["lineNumbersMinChars"] = 61] = "lineNumbersMinChars";
  EditorOption[EditorOption["linkedEditing"] = 62] = "linkedEditing";
  EditorOption[EditorOption["links"] = 63] = "links";
  EditorOption[EditorOption["matchBrackets"] = 64] = "matchBrackets";
  EditorOption[EditorOption["minimap"] = 65] = "minimap";
  EditorOption[EditorOption["mouseStyle"] = 66] = "mouseStyle";
  EditorOption[EditorOption["mouseWheelScrollSensitivity"] = 67] = "mouseWheelScrollSensitivity";
  EditorOption[EditorOption["mouseWheelZoom"] = 68] = "mouseWheelZoom";
  EditorOption[EditorOption["multiCursorMergeOverlapping"] = 69] = "multiCursorMergeOverlapping";
  EditorOption[EditorOption["multiCursorModifier"] = 70] = "multiCursorModifier";
  EditorOption[EditorOption["multiCursorPaste"] = 71] = "multiCursorPaste";
  EditorOption[EditorOption["occurrencesHighlight"] = 72] = "occurrencesHighlight";
  EditorOption[EditorOption["overviewRulerBorder"] = 73] = "overviewRulerBorder";
  EditorOption[EditorOption["overviewRulerLanes"] = 74] = "overviewRulerLanes";
  EditorOption[EditorOption["padding"] = 75] = "padding";
  EditorOption[EditorOption["parameterHints"] = 76] = "parameterHints";
  EditorOption[EditorOption["peekWidgetDefaultFocus"] = 77] = "peekWidgetDefaultFocus";
  EditorOption[EditorOption["definitionLinkOpensInPeek"] = 78] = "definitionLinkOpensInPeek";
  EditorOption[EditorOption["quickSuggestions"] = 79] = "quickSuggestions";
  EditorOption[EditorOption["quickSuggestionsDelay"] = 80] = "quickSuggestionsDelay";
  EditorOption[EditorOption["readOnly"] = 81] = "readOnly";
  EditorOption[EditorOption["renameOnType"] = 82] = "renameOnType";
  EditorOption[EditorOption["renderControlCharacters"] = 83] = "renderControlCharacters";
  EditorOption[EditorOption["renderFinalNewline"] = 84] = "renderFinalNewline";
  EditorOption[EditorOption["renderLineHighlight"] = 85] = "renderLineHighlight";
  EditorOption[EditorOption["renderLineHighlightOnlyWhenFocus"] = 86] = "renderLineHighlightOnlyWhenFocus";
  EditorOption[EditorOption["renderValidationDecorations"] = 87] = "renderValidationDecorations";
  EditorOption[EditorOption["renderWhitespace"] = 88] = "renderWhitespace";
  EditorOption[EditorOption["revealHorizontalRightPadding"] = 89] = "revealHorizontalRightPadding";
  EditorOption[EditorOption["roundedSelection"] = 90] = "roundedSelection";
  EditorOption[EditorOption["rulers"] = 91] = "rulers";
  EditorOption[EditorOption["scrollbar"] = 92] = "scrollbar";
  EditorOption[EditorOption["scrollBeyondLastColumn"] = 93] = "scrollBeyondLastColumn";
  EditorOption[EditorOption["scrollBeyondLastLine"] = 94] = "scrollBeyondLastLine";
  EditorOption[EditorOption["scrollPredominantAxis"] = 95] = "scrollPredominantAxis";
  EditorOption[EditorOption["selectionClipboard"] = 96] = "selectionClipboard";
  EditorOption[EditorOption["selectionHighlight"] = 97] = "selectionHighlight";
  EditorOption[EditorOption["selectOnLineNumbers"] = 98] = "selectOnLineNumbers";
  EditorOption[EditorOption["showFoldingControls"] = 99] = "showFoldingControls";
  EditorOption[EditorOption["showUnused"] = 100] = "showUnused";
  EditorOption[EditorOption["snippetSuggestions"] = 101] = "snippetSuggestions";
  EditorOption[EditorOption["smartSelect"] = 102] = "smartSelect";
  EditorOption[EditorOption["smoothScrolling"] = 103] = "smoothScrolling";
  EditorOption[EditorOption["stickyTabStops"] = 104] = "stickyTabStops";
  EditorOption[EditorOption["stopRenderingLineAfter"] = 105] = "stopRenderingLineAfter";
  EditorOption[EditorOption["suggest"] = 106] = "suggest";
  EditorOption[EditorOption["suggestFontSize"] = 107] = "suggestFontSize";
  EditorOption[EditorOption["suggestLineHeight"] = 108] = "suggestLineHeight";
  EditorOption[EditorOption["suggestOnTriggerCharacters"] = 109] = "suggestOnTriggerCharacters";
  EditorOption[EditorOption["suggestSelection"] = 110] = "suggestSelection";
  EditorOption[EditorOption["tabCompletion"] = 111] = "tabCompletion";
  EditorOption[EditorOption["tabIndex"] = 112] = "tabIndex";
  EditorOption[EditorOption["unicodeHighlighting"] = 113] = "unicodeHighlighting";
  EditorOption[EditorOption["unusualLineTerminators"] = 114] = "unusualLineTerminators";
  EditorOption[EditorOption["useShadowDOM"] = 115] = "useShadowDOM";
  EditorOption[EditorOption["useTabStops"] = 116] = "useTabStops";
  EditorOption[EditorOption["wordSeparators"] = 117] = "wordSeparators";
  EditorOption[EditorOption["wordWrap"] = 118] = "wordWrap";
  EditorOption[EditorOption["wordWrapBreakAfterCharacters"] = 119] = "wordWrapBreakAfterCharacters";
  EditorOption[EditorOption["wordWrapBreakBeforeCharacters"] = 120] = "wordWrapBreakBeforeCharacters";
  EditorOption[EditorOption["wordWrapColumn"] = 121] = "wordWrapColumn";
  EditorOption[EditorOption["wordWrapOverride1"] = 122] = "wordWrapOverride1";
  EditorOption[EditorOption["wordWrapOverride2"] = 123] = "wordWrapOverride2";
  EditorOption[EditorOption["wrappingIndent"] = 124] = "wrappingIndent";
  EditorOption[EditorOption["wrappingStrategy"] = 125] = "wrappingStrategy";
  EditorOption[EditorOption["showDeprecated"] = 126] = "showDeprecated";
  EditorOption[EditorOption["inlayHints"] = 127] = "inlayHints";
  EditorOption[EditorOption["editorClassName"] = 128] = "editorClassName";
  EditorOption[EditorOption["pixelRatio"] = 129] = "pixelRatio";
  EditorOption[EditorOption["tabFocusMode"] = 130] = "tabFocusMode";
  EditorOption[EditorOption["layoutInfo"] = 131] = "layoutInfo";
  EditorOption[EditorOption["wrappingInfo"] = 132] = "wrappingInfo";
})(EditorOption || (EditorOption = {}));
/**
 * End of line character preference.
 */


var EndOfLinePreference;

(function (EndOfLinePreference) {
  /**
   * Use the end of line character identified in the text buffer.
   */
  EndOfLinePreference[EndOfLinePreference["TextDefined"] = 0] = "TextDefined";
  /**
   * Use line feed (\n) as the end of line character.
   */

  EndOfLinePreference[EndOfLinePreference["LF"] = 1] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  EndOfLinePreference[EndOfLinePreference["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
/**
 * End of line character preference.
 */


var EndOfLineSequence;

(function (EndOfLineSequence) {
  /**
   * Use line feed (\n) as the end of line character.
   */
  EndOfLineSequence[EndOfLineSequence["LF"] = 0] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  EndOfLineSequence[EndOfLineSequence["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
/**
 * Describes what to do with the indentation when pressing Enter.
 */


var IndentAction;

(function (IndentAction) {
  /**
   * Insert new line and copy the previous line's indentation.
   */
  IndentAction[IndentAction["None"] = 0] = "None";
  /**
   * Insert new line and indent once (relative to the previous line's indentation).
   */

  IndentAction[IndentAction["Indent"] = 1] = "Indent";
  /**
   * Insert two new lines:
   *  - the first one indented which will hold the cursor
   *  - the second one at the same indentation level
   */

  IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
  /**
   * Insert new line and outdent once (relative to the previous line's indentation).
   */

  IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));

var standaloneEnums_InjectedTextCursorStops;

(function (InjectedTextCursorStops) {
  InjectedTextCursorStops[InjectedTextCursorStops["Both"] = 0] = "Both";
  InjectedTextCursorStops[InjectedTextCursorStops["Right"] = 1] = "Right";
  InjectedTextCursorStops[InjectedTextCursorStops["Left"] = 2] = "Left";
  InjectedTextCursorStops[InjectedTextCursorStops["None"] = 3] = "None";
})(standaloneEnums_InjectedTextCursorStops || (standaloneEnums_InjectedTextCursorStops = {}));

var standaloneEnums_InlayHintKind;

(function (InlayHintKind) {
  InlayHintKind[InlayHintKind["Other"] = 0] = "Other";
  InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
  InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(standaloneEnums_InlayHintKind || (standaloneEnums_InlayHintKind = {}));
/**
 * How an {@link InlineCompletionsProvider inline completion provider} was triggered.
 */


var standaloneEnums_InlineCompletionTriggerKind;

(function (InlineCompletionTriggerKind) {
  /**
   * Completion was triggered automatically while editing.
   * It is sufficient to return a single completion item in this case.
   */
  InlineCompletionTriggerKind[InlineCompletionTriggerKind["Automatic"] = 0] = "Automatic";
  /**
   * Completion was triggered explicitly by a user gesture.
   * Return multiple completion items to enable cycling through them.
   */

  InlineCompletionTriggerKind[InlineCompletionTriggerKind["Explicit"] = 1] = "Explicit";
})(standaloneEnums_InlineCompletionTriggerKind || (standaloneEnums_InlineCompletionTriggerKind = {}));
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */


var KeyCode;

(function (KeyCode) {
  KeyCode[KeyCode["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
  /**
   * Placed first to cover the 0 value of the enum.
   */

  KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
  KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
  KeyCode[KeyCode["Tab"] = 2] = "Tab";
  KeyCode[KeyCode["Enter"] = 3] = "Enter";
  KeyCode[KeyCode["Shift"] = 4] = "Shift";
  KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
  KeyCode[KeyCode["Alt"] = 6] = "Alt";
  KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
  KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
  KeyCode[KeyCode["Escape"] = 9] = "Escape";
  KeyCode[KeyCode["Space"] = 10] = "Space";
  KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
  KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
  KeyCode[KeyCode["End"] = 13] = "End";
  KeyCode[KeyCode["Home"] = 14] = "Home";
  KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
  KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
  KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
  KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
  KeyCode[KeyCode["Insert"] = 19] = "Insert";
  KeyCode[KeyCode["Delete"] = 20] = "Delete";
  KeyCode[KeyCode["Digit0"] = 21] = "Digit0";
  KeyCode[KeyCode["Digit1"] = 22] = "Digit1";
  KeyCode[KeyCode["Digit2"] = 23] = "Digit2";
  KeyCode[KeyCode["Digit3"] = 24] = "Digit3";
  KeyCode[KeyCode["Digit4"] = 25] = "Digit4";
  KeyCode[KeyCode["Digit5"] = 26] = "Digit5";
  KeyCode[KeyCode["Digit6"] = 27] = "Digit6";
  KeyCode[KeyCode["Digit7"] = 28] = "Digit7";
  KeyCode[KeyCode["Digit8"] = 29] = "Digit8";
  KeyCode[KeyCode["Digit9"] = 30] = "Digit9";
  KeyCode[KeyCode["KeyA"] = 31] = "KeyA";
  KeyCode[KeyCode["KeyB"] = 32] = "KeyB";
  KeyCode[KeyCode["KeyC"] = 33] = "KeyC";
  KeyCode[KeyCode["KeyD"] = 34] = "KeyD";
  KeyCode[KeyCode["KeyE"] = 35] = "KeyE";
  KeyCode[KeyCode["KeyF"] = 36] = "KeyF";
  KeyCode[KeyCode["KeyG"] = 37] = "KeyG";
  KeyCode[KeyCode["KeyH"] = 38] = "KeyH";
  KeyCode[KeyCode["KeyI"] = 39] = "KeyI";
  KeyCode[KeyCode["KeyJ"] = 40] = "KeyJ";
  KeyCode[KeyCode["KeyK"] = 41] = "KeyK";
  KeyCode[KeyCode["KeyL"] = 42] = "KeyL";
  KeyCode[KeyCode["KeyM"] = 43] = "KeyM";
  KeyCode[KeyCode["KeyN"] = 44] = "KeyN";
  KeyCode[KeyCode["KeyO"] = 45] = "KeyO";
  KeyCode[KeyCode["KeyP"] = 46] = "KeyP";
  KeyCode[KeyCode["KeyQ"] = 47] = "KeyQ";
  KeyCode[KeyCode["KeyR"] = 48] = "KeyR";
  KeyCode[KeyCode["KeyS"] = 49] = "KeyS";
  KeyCode[KeyCode["KeyT"] = 50] = "KeyT";
  KeyCode[KeyCode["KeyU"] = 51] = "KeyU";
  KeyCode[KeyCode["KeyV"] = 52] = "KeyV";
  KeyCode[KeyCode["KeyW"] = 53] = "KeyW";
  KeyCode[KeyCode["KeyX"] = 54] = "KeyX";
  KeyCode[KeyCode["KeyY"] = 55] = "KeyY";
  KeyCode[KeyCode["KeyZ"] = 56] = "KeyZ";
  KeyCode[KeyCode["Meta"] = 57] = "Meta";
  KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
  KeyCode[KeyCode["F1"] = 59] = "F1";
  KeyCode[KeyCode["F2"] = 60] = "F2";
  KeyCode[KeyCode["F3"] = 61] = "F3";
  KeyCode[KeyCode["F4"] = 62] = "F4";
  KeyCode[KeyCode["F5"] = 63] = "F5";
  KeyCode[KeyCode["F6"] = 64] = "F6";
  KeyCode[KeyCode["F7"] = 65] = "F7";
  KeyCode[KeyCode["F8"] = 66] = "F8";
  KeyCode[KeyCode["F9"] = 67] = "F9";
  KeyCode[KeyCode["F10"] = 68] = "F10";
  KeyCode[KeyCode["F11"] = 69] = "F11";
  KeyCode[KeyCode["F12"] = 70] = "F12";
  KeyCode[KeyCode["F13"] = 71] = "F13";
  KeyCode[KeyCode["F14"] = 72] = "F14";
  KeyCode[KeyCode["F15"] = 73] = "F15";
  KeyCode[KeyCode["F16"] = 74] = "F16";
  KeyCode[KeyCode["F17"] = 75] = "F17";
  KeyCode[KeyCode["F18"] = 76] = "F18";
  KeyCode[KeyCode["F19"] = 77] = "F19";
  KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
  KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ';:' key
   */

  KeyCode[KeyCode["Semicolon"] = 80] = "Semicolon";
  /**
   * For any country/region, the '+' key
   * For the US standard keyboard, the '=+' key
   */

  KeyCode[KeyCode["Equal"] = 81] = "Equal";
  /**
   * For any country/region, the ',' key
   * For the US standard keyboard, the ',<' key
   */

  KeyCode[KeyCode["Comma"] = 82] = "Comma";
  /**
   * For any country/region, the '-' key
   * For the US standard keyboard, the '-_' key
   */

  KeyCode[KeyCode["Minus"] = 83] = "Minus";
  /**
   * For any country/region, the '.' key
   * For the US standard keyboard, the '.>' key
   */

  KeyCode[KeyCode["Period"] = 84] = "Period";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '/?' key
   */

  KeyCode[KeyCode["Slash"] = 85] = "Slash";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '`~' key
   */

  KeyCode[KeyCode["Backquote"] = 86] = "Backquote";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '[{' key
   */

  KeyCode[KeyCode["BracketLeft"] = 87] = "BracketLeft";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '\|' key
   */

  KeyCode[KeyCode["Backslash"] = 88] = "Backslash";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ']}' key
   */

  KeyCode[KeyCode["BracketRight"] = 89] = "BracketRight";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ''"' key
   */

  KeyCode[KeyCode["Quote"] = 90] = "Quote";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   */

  KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
  /**
   * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
   */

  KeyCode[KeyCode["IntlBackslash"] = 92] = "IntlBackslash";
  KeyCode[KeyCode["Numpad0"] = 93] = "Numpad0";
  KeyCode[KeyCode["Numpad1"] = 94] = "Numpad1";
  KeyCode[KeyCode["Numpad2"] = 95] = "Numpad2";
  KeyCode[KeyCode["Numpad3"] = 96] = "Numpad3";
  KeyCode[KeyCode["Numpad4"] = 97] = "Numpad4";
  KeyCode[KeyCode["Numpad5"] = 98] = "Numpad5";
  KeyCode[KeyCode["Numpad6"] = 99] = "Numpad6";
  KeyCode[KeyCode["Numpad7"] = 100] = "Numpad7";
  KeyCode[KeyCode["Numpad8"] = 101] = "Numpad8";
  KeyCode[KeyCode["Numpad9"] = 102] = "Numpad9";
  KeyCode[KeyCode["NumpadMultiply"] = 103] = "NumpadMultiply";
  KeyCode[KeyCode["NumpadAdd"] = 104] = "NumpadAdd";
  KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
  KeyCode[KeyCode["NumpadSubtract"] = 106] = "NumpadSubtract";
  KeyCode[KeyCode["NumpadDecimal"] = 107] = "NumpadDecimal";
  KeyCode[KeyCode["NumpadDivide"] = 108] = "NumpadDivide";
  /**
   * Cover all key codes when IME is processing input.
   */

  KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
  KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
  KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
  KeyCode[KeyCode["AudioVolumeMute"] = 112] = "AudioVolumeMute";
  KeyCode[KeyCode["AudioVolumeUp"] = 113] = "AudioVolumeUp";
  KeyCode[KeyCode["AudioVolumeDown"] = 114] = "AudioVolumeDown";
  KeyCode[KeyCode["BrowserSearch"] = 115] = "BrowserSearch";
  KeyCode[KeyCode["BrowserHome"] = 116] = "BrowserHome";
  KeyCode[KeyCode["BrowserBack"] = 117] = "BrowserBack";
  KeyCode[KeyCode["BrowserForward"] = 118] = "BrowserForward";
  KeyCode[KeyCode["MediaTrackNext"] = 119] = "MediaTrackNext";
  KeyCode[KeyCode["MediaTrackPrevious"] = 120] = "MediaTrackPrevious";
  KeyCode[KeyCode["MediaStop"] = 121] = "MediaStop";
  KeyCode[KeyCode["MediaPlayPause"] = 122] = "MediaPlayPause";
  KeyCode[KeyCode["LaunchMediaPlayer"] = 123] = "LaunchMediaPlayer";
  KeyCode[KeyCode["LaunchMail"] = 124] = "LaunchMail";
  KeyCode[KeyCode["LaunchApp2"] = 125] = "LaunchApp2";
  /**
   * Placed last to cover the length of the enum.
   * Please do not depend on this value!
   */

  KeyCode[KeyCode["MAX_VALUE"] = 126] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));

var MarkerSeverity;

(function (MarkerSeverity) {
  MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
  MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
  MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
  MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));

var MarkerTag;

(function (MarkerTag) {
  MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
  MarkerTag[MarkerTag["Deprecated"] = 2] = "Deprecated";
})(MarkerTag || (MarkerTag = {}));
/**
 * Position in the minimap to render the decoration.
 */


var standaloneEnums_MinimapPosition;

(function (MinimapPosition) {
  MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
  MinimapPosition[MinimapPosition["Gutter"] = 2] = "Gutter";
})(standaloneEnums_MinimapPosition || (standaloneEnums_MinimapPosition = {}));
/**
 * Type of hit element with the mouse in the editor.
 */


var MouseTargetType;

(function (MouseTargetType) {
  /**
   * Mouse is on top of an unknown element.
   */
  MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
  /**
   * Mouse is on top of the textarea used for input.
   */

  MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
  /**
   * Mouse is on top of the glyph margin
   */

  MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
  /**
   * Mouse is on top of the line numbers
   */

  MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
  /**
   * Mouse is on top of the line decorations
   */

  MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
  /**
   * Mouse is on top of the whitespace left in the gutter by a view zone.
   */

  MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
  /**
   * Mouse is on top of text in the content.
   */

  MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
  /**
   * Mouse is on top of empty space in the content (e.g. after line text or below last line)
   */

  MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
  /**
   * Mouse is on top of a view zone in the content.
   */

  MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
  /**
   * Mouse is on top of a content widget.
   */

  MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
  /**
   * Mouse is on top of the decorations overview ruler.
   */

  MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
  /**
   * Mouse is on top of a scrollbar.
   */

  MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
  /**
   * Mouse is on top of an overlay widget.
   */

  MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
  /**
   * Mouse is outside of the editor.
   */

  MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
/**
 * A positioning preference for rendering overlay widgets.
 */


var OverlayWidgetPositionPreference;

(function (OverlayWidgetPositionPreference) {
  /**
   * Position the overlay widget in the top right corner
   */
  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
  /**
   * Position the overlay widget in the bottom right corner
   */

  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
  /**
   * Position the overlay widget in the top center
   */

  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */


var standaloneEnums_OverviewRulerLane;

(function (OverviewRulerLane) {
  OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
  OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
  OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
  OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(standaloneEnums_OverviewRulerLane || (standaloneEnums_OverviewRulerLane = {}));

var PositionAffinity;

(function (PositionAffinity) {
  /**
   * Prefers the left most position.
  */
  PositionAffinity[PositionAffinity["Left"] = 0] = "Left";
  /**
   * Prefers the right most position.
  */

  PositionAffinity[PositionAffinity["Right"] = 1] = "Right";
  /**
   * No preference.
  */

  PositionAffinity[PositionAffinity["None"] = 2] = "None";
})(PositionAffinity || (PositionAffinity = {}));

var RenderLineNumbersType;

(function (RenderLineNumbersType) {
  RenderLineNumbersType[RenderLineNumbersType["Off"] = 0] = "Off";
  RenderLineNumbersType[RenderLineNumbersType["On"] = 1] = "On";
  RenderLineNumbersType[RenderLineNumbersType["Relative"] = 2] = "Relative";
  RenderLineNumbersType[RenderLineNumbersType["Interval"] = 3] = "Interval";
  RenderLineNumbersType[RenderLineNumbersType["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));

var RenderMinimap;

(function (RenderMinimap) {
  RenderMinimap[RenderMinimap["None"] = 0] = "None";
  RenderMinimap[RenderMinimap["Text"] = 1] = "Text";
  RenderMinimap[RenderMinimap["Blocks"] = 2] = "Blocks";
})(RenderMinimap || (RenderMinimap = {}));

var ScrollType;

(function (ScrollType) {
  ScrollType[ScrollType["Smooth"] = 0] = "Smooth";
  ScrollType[ScrollType["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));

var ScrollbarVisibility;

(function (ScrollbarVisibility) {
  ScrollbarVisibility[ScrollbarVisibility["Auto"] = 1] = "Auto";
  ScrollbarVisibility[ScrollbarVisibility["Hidden"] = 2] = "Hidden";
  ScrollbarVisibility[ScrollbarVisibility["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
/**
 * The direction of a selection.
 */


var SelectionDirection;

(function (SelectionDirection) {
  /**
   * The selection starts above where it ends.
   */
  SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
  /**
   * The selection starts below where it ends.
   */

  SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));

var standaloneEnums_SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(standaloneEnums_SignatureHelpTriggerKind || (standaloneEnums_SignatureHelpTriggerKind = {}));
/**
 * A symbol kind.
 */


var SymbolKind;

(function (SymbolKind) {
  SymbolKind[SymbolKind["File"] = 0] = "File";
  SymbolKind[SymbolKind["Module"] = 1] = "Module";
  SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
  SymbolKind[SymbolKind["Package"] = 3] = "Package";
  SymbolKind[SymbolKind["Class"] = 4] = "Class";
  SymbolKind[SymbolKind["Method"] = 5] = "Method";
  SymbolKind[SymbolKind["Property"] = 6] = "Property";
  SymbolKind[SymbolKind["Field"] = 7] = "Field";
  SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
  SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
  SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
  SymbolKind[SymbolKind["Function"] = 11] = "Function";
  SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
  SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
  SymbolKind[SymbolKind["String"] = 14] = "String";
  SymbolKind[SymbolKind["Number"] = 15] = "Number";
  SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
  SymbolKind[SymbolKind["Array"] = 17] = "Array";
  SymbolKind[SymbolKind["Object"] = 18] = "Object";
  SymbolKind[SymbolKind["Key"] = 19] = "Key";
  SymbolKind[SymbolKind["Null"] = 20] = "Null";
  SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
  SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
  SymbolKind[SymbolKind["Event"] = 23] = "Event";
  SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
  SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));

var SymbolTag;

(function (SymbolTag) {
  SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
/**
 * The kind of animation in which the editor's cursor should be rendered.
 */


var TextEditorCursorBlinkingStyle;

(function (TextEditorCursorBlinkingStyle) {
  /**
   * Hidden
   */
  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Hidden"] = 0] = "Hidden";
  /**
   * Blinking
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Blink"] = 1] = "Blink";
  /**
   * Blinking with smooth fading
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Smooth"] = 2] = "Smooth";
  /**
   * Blinking with prolonged filled state and smooth fading
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Phase"] = 3] = "Phase";
  /**
   * Expand collapse animation on the y axis
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Expand"] = 4] = "Expand";
  /**
   * No-Blinking
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
/**
 * The style in which the editor's cursor should be rendered.
 */


var TextEditorCursorStyle;

(function (TextEditorCursorStyle) {
  /**
   * As a vertical line (sitting between two characters).
   */
  TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
  /**
   * As a block (sitting on top of a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
  /**
   * As a horizontal line (sitting under a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
  /**
   * As a thin vertical line (sitting between two characters).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
  /**
   * As an outlined block (sitting on top of a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
  /**
   * As a thin horizontal line (sitting under a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */


var TrackedRangeStickiness;

(function (TrackedRangeStickiness) {
  TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
  TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
  TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
  TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
/**
 * Describes how to indent wrapped lines.
 */


var WrappingIndent;

(function (WrappingIndent) {
  /**
   * No indentation => wrapped lines begin at column 1.
   */
  WrappingIndent[WrappingIndent["None"] = 0] = "None";
  /**
   * Same => wrapped lines get the same indentation as the parent.
   */

  WrappingIndent[WrappingIndent["Same"] = 1] = "Same";
  /**
   * Indent => wrapped lines get +1 indentation toward the parent.
   */

  WrappingIndent[WrappingIndent["Indent"] = 2] = "Indent";
  /**
   * DeepIndent => wrapped lines get +2 indentation toward the parent.
   */

  WrappingIndent[WrappingIndent["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









var editorBaseApi_KeyMod = /*#__PURE__*/function () {
  function KeyMod() {
    _classCallCheck(this, KeyMod);
  }

  _createClass(KeyMod, null, [{
    key: "chord",
    value: function chord(firstPart, secondPart) {
      return KeyChord(firstPart, secondPart);
    }
  }]);

  return KeyMod;
}();
editorBaseApi_KeyMod.CtrlCmd = 2048
/* CtrlCmd */
;
editorBaseApi_KeyMod.Shift = 1024
/* Shift */
;
editorBaseApi_KeyMod.Alt = 512
/* Alt */
;
editorBaseApi_KeyMod.WinCtrl = 256
/* WinCtrl */
;
function createMonacoBaseAPI() {
  return {
    editor: undefined,
    languages: undefined,
    CancellationTokenSource: cancellation_CancellationTokenSource,
    Emitter: event_Emitter,
    KeyCode: KeyCode,
    KeyMod: editorBaseApi_KeyMod,
    Position: position_Position,
    Range: range_Range,
    Selection: selection_Selection,
    SelectionDirection: SelectionDirection,
    MarkerSeverity: MarkerSeverity,
    MarkerTag: MarkerTag,
    Uri: uri_URI,
    Token: languages_Token
  };
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/core/wordCharacterClassifier.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var wordCharacterClassifier_WordCharacterClassifier = /*#__PURE__*/function (_CharacterClassifier) {
  _inherits(WordCharacterClassifier, _CharacterClassifier);

  var _super = _createSuper(WordCharacterClassifier);

  function WordCharacterClassifier(wordSeparators) {
    var _this;

    _classCallCheck(this, WordCharacterClassifier);

    _this = _super.call(this, 0
    /* Regular */
    );

    for (var i = 0, len = wordSeparators.length; i < len; i++) {
      _this.set(wordSeparators.charCodeAt(i), 2
      /* WordSeparator */
      );
    }

    _this.set(32
    /* Space */
    , 1
    /* Whitespace */
    );

    _this.set(9
    /* Tab */
    , 1
    /* Whitespace */
    );

    return _this;
  }

  return WordCharacterClassifier;
}(characterClassifier_CharacterClassifier);

function wordCharacterClassifier_once(computeFn) {
  var cache = {}; // TODO@Alex unbounded cache

  return function (input) {
    if (!cache.hasOwnProperty(input)) {
      cache[input] = computeFn(input);
    }

    return cache[input];
  };
}

var getMapForWordSeparators = wordCharacterClassifier_once(function (input) {
  return new wordCharacterClassifier_WordCharacterClassifier(input);
});
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





var LIMIT_FIND_COUNT = 999;
var textModelSearch_SearchParams = /*#__PURE__*/function () {
  function SearchParams(searchString, isRegex, matchCase, wordSeparators) {
    _classCallCheck(this, SearchParams);

    this.searchString = searchString;
    this.isRegex = isRegex;
    this.matchCase = matchCase;
    this.wordSeparators = wordSeparators;
  }

  _createClass(SearchParams, [{
    key: "parseSearchRequest",
    value: function parseSearchRequest() {
      if (this.searchString === '') {
        return null;
      } // Try to create a RegExp out of the params


      var multiline;

      if (this.isRegex) {
        multiline = isMultilineRegexSource(this.searchString);
      } else {
        multiline = this.searchString.indexOf('\n') >= 0;
      }

      var regex = null;

      try {
        regex = createRegExp(this.searchString, this.isRegex, {
          matchCase: this.matchCase,
          wholeWord: false,
          multiline: multiline,
          global: true,
          unicode: true
        });
      } catch (err) {
        return null;
      }

      if (!regex) {
        return null;
      }

      var canUseSimpleSearch = !this.isRegex && !multiline;

      if (canUseSimpleSearch && this.searchString.toLowerCase() !== this.searchString.toUpperCase()) {
        // casing might make a difference
        canUseSimpleSearch = this.matchCase;
      }

      return new model_SearchData(regex, this.wordSeparators ? getMapForWordSeparators(this.wordSeparators) : null, canUseSimpleSearch ? this.searchString : null);
    }
  }]);

  return SearchParams;
}();
function isMultilineRegexSource(searchString) {
  if (!searchString || searchString.length === 0) {
    return false;
  }

  for (var i = 0, len = searchString.length; i < len; i++) {
    var chCode = searchString.charCodeAt(i);

    if (chCode === 92
    /* Backslash */
    ) {
        // move to next char
        i++;

        if (i >= len) {
          // string ends with a \
          break;
        }

        var nextChCode = searchString.charCodeAt(i);

        if (nextChCode === 110
        /* n */
        || nextChCode === 114
        /* r */
        || nextChCode === 87
        /* W */
        ) {
            return true;
          }
      }
  }

  return false;
}
function createFindMatch(range, rawMatches, captureMatches) {
  if (!captureMatches) {
    return new model_FindMatch(range, null);
  }

  var matches = [];

  for (var i = 0, len = rawMatches.length; i < len; i++) {
    matches[i] = rawMatches[i];
  }

  return new model_FindMatch(range, matches);
}

var textModelSearch_LineFeedCounter = /*#__PURE__*/function () {
  function LineFeedCounter(text) {
    _classCallCheck(this, LineFeedCounter);

    var lineFeedsOffsets = [];
    var lineFeedsOffsetsLen = 0;

    for (var i = 0, textLen = text.length; i < textLen; i++) {
      if (text.charCodeAt(i) === 10
      /* LineFeed */
      ) {
          lineFeedsOffsets[lineFeedsOffsetsLen++] = i;
        }
    }

    this._lineFeedsOffsets = lineFeedsOffsets;
  }

  _createClass(LineFeedCounter, [{
    key: "findLineFeedCountBeforeOffset",
    value: function findLineFeedCountBeforeOffset(offset) {
      var lineFeedsOffsets = this._lineFeedsOffsets;
      var min = 0;
      var max = lineFeedsOffsets.length - 1;

      if (max === -1) {
        // no line feeds
        return 0;
      }

      if (offset <= lineFeedsOffsets[0]) {
        // before first line feed
        return 0;
      }

      while (min < max) {
        var mid = min + ((max - min) / 2 >> 0);

        if (lineFeedsOffsets[mid] >= offset) {
          max = mid - 1;
        } else {
          if (lineFeedsOffsets[mid + 1] >= offset) {
            // bingo!
            min = mid;
            max = mid;
          } else {
            min = mid + 1;
          }
        }
      }

      return min + 1;
    }
  }]);

  return LineFeedCounter;
}();

var textModelSearch_TextModelSearch = /*#__PURE__*/function () {
  function TextModelSearch() {
    _classCallCheck(this, TextModelSearch);
  }

  _createClass(TextModelSearch, null, [{
    key: "findMatches",
    value: function findMatches(model, searchParams, searchRange, captureMatches, limitResultCount) {
      var searchData = searchParams.parseSearchRequest();

      if (!searchData) {
        return [];
      }

      if (searchData.regex.multiline) {
        return this._doFindMatchesMultiline(model, searchRange, new textModelSearch_Searcher(searchData.wordSeparators, searchData.regex), captureMatches, limitResultCount);
      }

      return this._doFindMatchesLineByLine(model, searchRange, searchData, captureMatches, limitResultCount);
    }
    /**
     * Multiline search always executes on the lines concatenated with \n.
     * We must therefore compensate for the count of \n in case the model is CRLF
     */

  }, {
    key: "_getMultilineMatchRange",
    value: function _getMultilineMatchRange(model, deltaOffset, text, lfCounter, matchIndex, match0) {
      var startOffset;
      var lineFeedCountBeforeMatch = 0;

      if (lfCounter) {
        lineFeedCountBeforeMatch = lfCounter.findLineFeedCountBeforeOffset(matchIndex);
        startOffset = deltaOffset + matchIndex + lineFeedCountBeforeMatch
        /* add as many \r as there were \n */
        ;
      } else {
        startOffset = deltaOffset + matchIndex;
      }

      var endOffset;

      if (lfCounter) {
        var lineFeedCountBeforeEndOfMatch = lfCounter.findLineFeedCountBeforeOffset(matchIndex + match0.length);
        var lineFeedCountInMatch = lineFeedCountBeforeEndOfMatch - lineFeedCountBeforeMatch;
        endOffset = startOffset + match0.length + lineFeedCountInMatch
        /* add as many \r as there were \n */
        ;
      } else {
        endOffset = startOffset + match0.length;
      }

      var startPosition = model.getPositionAt(startOffset);
      var endPosition = model.getPositionAt(endOffset);
      return new range_Range(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
    }
  }, {
    key: "_doFindMatchesMultiline",
    value: function _doFindMatchesMultiline(model, searchRange, searcher, captureMatches, limitResultCount) {
      var deltaOffset = model.getOffsetAt(searchRange.getStartPosition()); // We always execute multiline search over the lines joined with \n
      // This makes it that \n will match the EOL for both CRLF and LF models
      // We compensate for offset errors in `_getMultilineMatchRange`

      var text = model.getValueInRange(searchRange, 1
      /* LF */
      );
      var lfCounter = model.getEOL() === '\r\n' ? new textModelSearch_LineFeedCounter(text) : null;
      var result = [];
      var counter = 0;
      var m;
      searcher.reset(0);

      while (m = searcher.next(text)) {
        result[counter++] = createFindMatch(this._getMultilineMatchRange(model, deltaOffset, text, lfCounter, m.index, m[0]), m, captureMatches);

        if (counter >= limitResultCount) {
          return result;
        }
      }

      return result;
    }
  }, {
    key: "_doFindMatchesLineByLine",
    value: function _doFindMatchesLineByLine(model, searchRange, searchData, captureMatches, limitResultCount) {
      var result = [];
      var resultLen = 0; // Early case for a search range that starts & stops on the same line number

      if (searchRange.startLineNumber === searchRange.endLineNumber) {
        var _text = model.getLineContent(searchRange.startLineNumber).substring(searchRange.startColumn - 1, searchRange.endColumn - 1);

        resultLen = this._findMatchesInLine(searchData, _text, searchRange.startLineNumber, searchRange.startColumn - 1, resultLen, result, captureMatches, limitResultCount);
        return result;
      } // Collect results from first line


      var text = model.getLineContent(searchRange.startLineNumber).substring(searchRange.startColumn - 1);
      resultLen = this._findMatchesInLine(searchData, text, searchRange.startLineNumber, searchRange.startColumn - 1, resultLen, result, captureMatches, limitResultCount); // Collect results from middle lines

      for (var lineNumber = searchRange.startLineNumber + 1; lineNumber < searchRange.endLineNumber && resultLen < limitResultCount; lineNumber++) {
        resultLen = this._findMatchesInLine(searchData, model.getLineContent(lineNumber), lineNumber, 0, resultLen, result, captureMatches, limitResultCount);
      } // Collect results from last line


      if (resultLen < limitResultCount) {
        var _text2 = model.getLineContent(searchRange.endLineNumber).substring(0, searchRange.endColumn - 1);

        resultLen = this._findMatchesInLine(searchData, _text2, searchRange.endLineNumber, 0, resultLen, result, captureMatches, limitResultCount);
      }

      return result;
    }
  }, {
    key: "_findMatchesInLine",
    value: function _findMatchesInLine(searchData, text, lineNumber, deltaOffset, resultLen, result, captureMatches, limitResultCount) {
      var wordSeparators = searchData.wordSeparators;

      if (!captureMatches && searchData.simpleSearch) {
        var searchString = searchData.simpleSearch;
        var searchStringLen = searchString.length;
        var textLength = text.length;
        var lastMatchIndex = -searchStringLen;

        while ((lastMatchIndex = text.indexOf(searchString, lastMatchIndex + searchStringLen)) !== -1) {
          if (!wordSeparators || isValidMatch(wordSeparators, text, textLength, lastMatchIndex, searchStringLen)) {
            result[resultLen++] = new model_FindMatch(new range_Range(lineNumber, lastMatchIndex + 1 + deltaOffset, lineNumber, lastMatchIndex + 1 + searchStringLen + deltaOffset), null);

            if (resultLen >= limitResultCount) {
              return resultLen;
            }
          }
        }

        return resultLen;
      }

      var searcher = new textModelSearch_Searcher(searchData.wordSeparators, searchData.regex);
      var m; // Reset regex to search from the beginning

      searcher.reset(0);

      do {
        m = searcher.next(text);

        if (m) {
          result[resultLen++] = createFindMatch(new range_Range(lineNumber, m.index + 1 + deltaOffset, lineNumber, m.index + 1 + m[0].length + deltaOffset), m, captureMatches);

          if (resultLen >= limitResultCount) {
            return resultLen;
          }
        }
      } while (m);

      return resultLen;
    }
  }, {
    key: "findNextMatch",
    value: function findNextMatch(model, searchParams, searchStart, captureMatches) {
      var searchData = searchParams.parseSearchRequest();

      if (!searchData) {
        return null;
      }

      var searcher = new textModelSearch_Searcher(searchData.wordSeparators, searchData.regex);

      if (searchData.regex.multiline) {
        return this._doFindNextMatchMultiline(model, searchStart, searcher, captureMatches);
      }

      return this._doFindNextMatchLineByLine(model, searchStart, searcher, captureMatches);
    }
  }, {
    key: "_doFindNextMatchMultiline",
    value: function _doFindNextMatchMultiline(model, searchStart, searcher, captureMatches) {
      var searchTextStart = new position_Position(searchStart.lineNumber, 1);
      var deltaOffset = model.getOffsetAt(searchTextStart);
      var lineCount = model.getLineCount(); // We always execute multiline search over the lines joined with \n
      // This makes it that \n will match the EOL for both CRLF and LF models
      // We compensate for offset errors in `_getMultilineMatchRange`

      var text = model.getValueInRange(new range_Range(searchTextStart.lineNumber, searchTextStart.column, lineCount, model.getLineMaxColumn(lineCount)), 1
      /* LF */
      );
      var lfCounter = model.getEOL() === '\r\n' ? new textModelSearch_LineFeedCounter(text) : null;
      searcher.reset(searchStart.column - 1);
      var m = searcher.next(text);

      if (m) {
        return createFindMatch(this._getMultilineMatchRange(model, deltaOffset, text, lfCounter, m.index, m[0]), m, captureMatches);
      }

      if (searchStart.lineNumber !== 1 || searchStart.column !== 1) {
        // Try again from the top
        return this._doFindNextMatchMultiline(model, new position_Position(1, 1), searcher, captureMatches);
      }

      return null;
    }
  }, {
    key: "_doFindNextMatchLineByLine",
    value: function _doFindNextMatchLineByLine(model, searchStart, searcher, captureMatches) {
      var lineCount = model.getLineCount();
      var startLineNumber = searchStart.lineNumber; // Look in first line

      var text = model.getLineContent(startLineNumber);

      var r = this._findFirstMatchInLine(searcher, text, startLineNumber, searchStart.column, captureMatches);

      if (r) {
        return r;
      }

      for (var i = 1; i <= lineCount; i++) {
        var lineIndex = (startLineNumber + i - 1) % lineCount;

        var _text3 = model.getLineContent(lineIndex + 1);

        var _r = this._findFirstMatchInLine(searcher, _text3, lineIndex + 1, 1, captureMatches);

        if (_r) {
          return _r;
        }
      }

      return null;
    }
  }, {
    key: "_findFirstMatchInLine",
    value: function _findFirstMatchInLine(searcher, text, lineNumber, fromColumn, captureMatches) {
      // Set regex to search from column
      searcher.reset(fromColumn - 1);
      var m = searcher.next(text);

      if (m) {
        return createFindMatch(new range_Range(lineNumber, m.index + 1, lineNumber, m.index + 1 + m[0].length), m, captureMatches);
      }

      return null;
    }
  }, {
    key: "findPreviousMatch",
    value: function findPreviousMatch(model, searchParams, searchStart, captureMatches) {
      var searchData = searchParams.parseSearchRequest();

      if (!searchData) {
        return null;
      }

      var searcher = new textModelSearch_Searcher(searchData.wordSeparators, searchData.regex);

      if (searchData.regex.multiline) {
        return this._doFindPreviousMatchMultiline(model, searchStart, searcher, captureMatches);
      }

      return this._doFindPreviousMatchLineByLine(model, searchStart, searcher, captureMatches);
    }
  }, {
    key: "_doFindPreviousMatchMultiline",
    value: function _doFindPreviousMatchMultiline(model, searchStart, searcher, captureMatches) {
      var matches = this._doFindMatchesMultiline(model, new range_Range(1, 1, searchStart.lineNumber, searchStart.column), searcher, captureMatches, 10 * LIMIT_FIND_COUNT);

      if (matches.length > 0) {
        return matches[matches.length - 1];
      }

      var lineCount = model.getLineCount();

      if (searchStart.lineNumber !== lineCount || searchStart.column !== model.getLineMaxColumn(lineCount)) {
        // Try again with all content
        return this._doFindPreviousMatchMultiline(model, new position_Position(lineCount, model.getLineMaxColumn(lineCount)), searcher, captureMatches);
      }

      return null;
    }
  }, {
    key: "_doFindPreviousMatchLineByLine",
    value: function _doFindPreviousMatchLineByLine(model, searchStart, searcher, captureMatches) {
      var lineCount = model.getLineCount();
      var startLineNumber = searchStart.lineNumber; // Look in first line

      var text = model.getLineContent(startLineNumber).substring(0, searchStart.column - 1);

      var r = this._findLastMatchInLine(searcher, text, startLineNumber, captureMatches);

      if (r) {
        return r;
      }

      for (var i = 1; i <= lineCount; i++) {
        var lineIndex = (lineCount + startLineNumber - i - 1) % lineCount;

        var _text4 = model.getLineContent(lineIndex + 1);

        var _r2 = this._findLastMatchInLine(searcher, _text4, lineIndex + 1, captureMatches);

        if (_r2) {
          return _r2;
        }
      }

      return null;
    }
  }, {
    key: "_findLastMatchInLine",
    value: function _findLastMatchInLine(searcher, text, lineNumber, captureMatches) {
      var bestResult = null;
      var m;
      searcher.reset(0);

      while (m = searcher.next(text)) {
        bestResult = createFindMatch(new range_Range(lineNumber, m.index + 1, lineNumber, m.index + 1 + m[0].length), m, captureMatches);
      }

      return bestResult;
    }
  }]);

  return TextModelSearch;
}();

function leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex === 0) {
    // Match starts at start of string
    return true;
  }

  var charBefore = text.charCodeAt(matchStartIndex - 1);

  if (wordSeparators.get(charBefore) !== 0
  /* Regular */
  ) {
      // The character before the match is a word separator
      return true;
    }

  if (charBefore === 13
  /* CarriageReturn */
  || charBefore === 10
  /* LineFeed */
  ) {
      // The character before the match is line break or carriage return.
      return true;
    }

  if (matchLength > 0) {
    var firstCharInMatch = text.charCodeAt(matchStartIndex);

    if (wordSeparators.get(firstCharInMatch) !== 0
    /* Regular */
    ) {
        // The first character inside the match is a word separator
        return true;
      }
  }

  return false;
}

function rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex + matchLength === textLength) {
    // Match ends at end of string
    return true;
  }

  var charAfter = text.charCodeAt(matchStartIndex + matchLength);

  if (wordSeparators.get(charAfter) !== 0
  /* Regular */
  ) {
      // The character after the match is a word separator
      return true;
    }

  if (charAfter === 13
  /* CarriageReturn */
  || charAfter === 10
  /* LineFeed */
  ) {
      // The character after the match is line break or carriage return.
      return true;
    }

  if (matchLength > 0) {
    var lastCharInMatch = text.charCodeAt(matchStartIndex + matchLength - 1);

    if (wordSeparators.get(lastCharInMatch) !== 0
    /* Regular */
    ) {
        // The last character in the match is a word separator
        return true;
      }
  }

  return false;
}

function isValidMatch(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  return leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) && rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength);
}
var textModelSearch_Searcher = /*#__PURE__*/function () {
  function Searcher(wordSeparators, searchRegex) {
    _classCallCheck(this, Searcher);

    this._wordSeparators = wordSeparators;
    this._searchRegex = searchRegex;
    this._prevMatchStartIndex = -1;
    this._prevMatchLength = 0;
  }

  _createClass(Searcher, [{
    key: "reset",
    value: function reset(lastIndex) {
      this._searchRegex.lastIndex = lastIndex;
      this._prevMatchStartIndex = -1;
      this._prevMatchLength = 0;
    }
  }, {
    key: "next",
    value: function next(text) {
      var textLength = text.length;
      var m;

      do {
        if (this._prevMatchStartIndex + this._prevMatchLength === textLength) {
          // Reached the end of the line
          return null;
        }

        m = this._searchRegex.exec(text);

        if (!m) {
          return null;
        }

        var matchStartIndex = m.index;
        var matchLength = m[0].length;

        if (matchStartIndex === this._prevMatchStartIndex && matchLength === this._prevMatchLength) {
          if (matchLength === 0) {
            // the search result is an empty string and won't advance `regex.lastIndex`, so `regex.exec` will stuck here
            // we attempt to recover from that by advancing by two if surrogate pair found and by one otherwise
            if (getNextCodePoint(text, textLength, this._searchRegex.lastIndex) > 0xFFFF) {
              this._searchRegex.lastIndex += 2;
            } else {
              this._searchRegex.lastIndex += 1;
            }

            continue;
          } // Exit early if the regex matches the same range twice


          return null;
        }

        this._prevMatchStartIndex = matchStartIndex;
        this._prevMatchLength = matchLength;

        if (!this._wordSeparators || isValidMatch(this._wordSeparators, text, textLength, matchStartIndex, matchLength)) {
          return m;
        }
      } while (m);

      return null;
    }
  }]);

  return Searcher;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/languages/unicodeTextModelHighlighter.js





/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var unicodeTextModelHighlighter_UnicodeTextModelHighlighter = /*#__PURE__*/function () {
  function UnicodeTextModelHighlighter() {
    _classCallCheck(this, UnicodeTextModelHighlighter);
  }

  _createClass(UnicodeTextModelHighlighter, null, [{
    key: "computeUnicodeHighlights",
    value: function computeUnicodeHighlights(model, options, range) {
      var startLine = range ? range.startLineNumber : 1;
      var endLine = range ? range.endLineNumber : model.getLineCount();
      var codePointHighlighter = new unicodeTextModelHighlighter_CodePointHighlighter(options);
      var candidates = codePointHighlighter.getCandidateCodePoints();
      var regex;

      if (candidates === 'allNonBasicAscii') {
        regex = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g');
      } else {
        regex = new RegExp("".concat(buildRegExpCharClassExpr(Array.from(candidates))), 'g');
      }

      var searcher = new textModelSearch_Searcher(null, regex);
      var ranges = [];
      var hasMore = false;
      var m;
      var ambiguousCharacterCount = 0;
      var invisibleCharacterCount = 0;
      var nonBasicAsciiCharacterCount = 0;

      forLoop: for (var lineNumber = startLine, lineCount = endLine; lineNumber <= lineCount; lineNumber++) {
        var lineContent = model.getLineContent(lineNumber);
        var lineLength = lineContent.length; // Reset regex to search from the beginning

        searcher.reset(0);

        do {
          m = searcher.next(lineContent);

          if (m) {
            var startIndex = m.index;
            var endIndex = m.index + m[0].length; // Extend range to entire code point

            if (startIndex > 0) {
              var charCodeBefore = lineContent.charCodeAt(startIndex - 1);

              if (isHighSurrogate(charCodeBefore)) {
                startIndex--;
              }
            }

            if (endIndex + 1 < lineLength) {
              var _charCodeBefore = lineContent.charCodeAt(endIndex - 1);

              if (isHighSurrogate(_charCodeBefore)) {
                endIndex++;
              }
            }

            var str = lineContent.substring(startIndex, endIndex);
            var highlightReason = codePointHighlighter.shouldHighlightNonBasicASCII(str);

            if (highlightReason !== 0
            /* None */
            ) {
                if (highlightReason === 3
                /* Ambiguous */
                ) {
                    ambiguousCharacterCount++;
                  } else if (highlightReason === 2
                /* Invisible */
                ) {
                    invisibleCharacterCount++;
                  } else if (highlightReason === 1
                /* NonBasicASCII */
                ) {
                    nonBasicAsciiCharacterCount++;
                  } else {
                  assertNever(highlightReason);
                }

                var MAX_RESULT_LENGTH = 1000;

                if (ranges.length >= MAX_RESULT_LENGTH) {
                  hasMore = true;
                  break forLoop;
                }

                ranges.push(new range_Range(lineNumber, startIndex + 1, lineNumber, endIndex + 1));
              }
          }
        } while (m);
      }

      return {
        ranges: ranges,
        hasMore: hasMore,
        ambiguousCharacterCount: ambiguousCharacterCount,
        invisibleCharacterCount: invisibleCharacterCount,
        nonBasicAsciiCharacterCount: nonBasicAsciiCharacterCount
      };
    }
  }, {
    key: "computeUnicodeHighlightReason",
    value: function computeUnicodeHighlightReason(_char, options) {
      var codePointHighlighter = new unicodeTextModelHighlighter_CodePointHighlighter(options);
      var reason = codePointHighlighter.shouldHighlightNonBasicASCII(_char);

      switch (reason) {
        case 0
        /* None */
        :
          return null;

        case 2
        /* Invisible */
        :
          return {
            kind: 1
            /* Invisible */

          };

        case 3
        /* Ambiguous */
        :
          {
            var codePoint = _char.codePointAt(0);

            var primaryConfusable = codePointHighlighter.ambiguousCharacters.getPrimaryConfusable(codePoint);
            var notAmbiguousInLocales = strings_AmbiguousCharacters.getLocales().filter(function (l) {
              return !strings_AmbiguousCharacters.getInstance(new Set([].concat(_toConsumableArray(options.allowedLocales), [l]))).isAmbiguous(codePoint);
            });
            return {
              kind: 0
              /* Ambiguous */
              ,
              confusableWith: String.fromCodePoint(primaryConfusable),
              notAmbiguousInLocales: notAmbiguousInLocales
            };
          }

        case 1
        /* NonBasicASCII */
        :
          return {
            kind: 2
            /* NonBasicAscii */

          };
      }
    }
  }]);

  return UnicodeTextModelHighlighter;
}();

function buildRegExpCharClassExpr(codePoints, flags) {
  var src = "[".concat(escapeRegExpCharacters(codePoints.map(function (i) {
    return String.fromCodePoint(i);
  }).join('')), "]");
  return src;
}

var unicodeTextModelHighlighter_CodePointHighlighter = /*#__PURE__*/function () {
  function CodePointHighlighter(options) {
    _classCallCheck(this, CodePointHighlighter);

    this.options = options;
    this.allowedCodePoints = new Set(options.allowedCodePoints);
    this.ambiguousCharacters = strings_AmbiguousCharacters.getInstance(new Set(options.allowedLocales));
  }

  _createClass(CodePointHighlighter, [{
    key: "getCandidateCodePoints",
    value: function getCandidateCodePoints() {
      if (this.options.nonBasicASCII) {
        return 'allNonBasicAscii';
      }

      var set = new Set();

      if (this.options.invisibleCharacters) {
        var _iterator = _createForOfIteratorHelper(strings_InvisibleCharacters.codePoints),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cp = _step.value;
            set.add(cp);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (this.options.ambiguousCharacters) {
        var _iterator2 = _createForOfIteratorHelper(this.ambiguousCharacters.getConfusableCodePoints()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _cp = _step2.value;
            set.add(_cp);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      var _iterator3 = _createForOfIteratorHelper(this.allowedCodePoints),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _cp2 = _step3.value;
          set["delete"](_cp2);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return set;
    }
  }, {
    key: "shouldHighlightNonBasicASCII",
    value: function shouldHighlightNonBasicASCII(character) {
      var codePoint = character.codePointAt(0);

      if (this.allowedCodePoints.has(codePoint)) {
        return 0
        /* None */
        ;
      }

      if (this.options.nonBasicASCII) {
        return 1
        /* NonBasicASCII */
        ;
      }

      if (this.options.invisibleCharacters) {
        var isAllowedInvisibleCharacter = character === ' ' || character === '\n' || character === '\t'; // TODO check for emojis

        if (!isAllowedInvisibleCharacter && strings_InvisibleCharacters.isInvisibleCharacter(codePoint)) {
          return 2
          /* Invisible */
          ;
        }
      }

      if (this.options.ambiguousCharacters) {
        if (this.ambiguousCharacters.isAmbiguous(codePoint)) {
          return 3
          /* Ambiguous */
          ;
        }
      }

      return 0
      /* None */
      ;
    }
  }]);

  return CodePointHighlighter;
}();
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js








/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var editorSimpleWorker_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};















/**
 * @internal
 */

var editorSimpleWorker_MirrorModel = /*#__PURE__*/function (_BaseMirrorModel) {
  _inherits(MirrorModel, _BaseMirrorModel);

  var _super = _createSuper(MirrorModel);

  function MirrorModel() {
    _classCallCheck(this, MirrorModel);

    return _super.apply(this, arguments);
  }

  _createClass(MirrorModel, [{
    key: "uri",
    get: function get() {
      return this._uri;
    }
  }, {
    key: "eol",
    get: function get() {
      return this._eol;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.getText();
    }
  }, {
    key: "getLinesContent",
    value: function getLinesContent() {
      return this._lines.slice(0);
    }
  }, {
    key: "getLineCount",
    value: function getLineCount() {
      return this._lines.length;
    }
  }, {
    key: "getLineContent",
    value: function getLineContent(lineNumber) {
      return this._lines[lineNumber - 1];
    }
  }, {
    key: "getWordAtPosition",
    value: function getWordAtPosition(position, wordDefinition) {
      var wordAtText = getWordAtText(position.column, ensureValidWordDefinition(wordDefinition), this._lines[position.lineNumber - 1], 0);

      if (wordAtText) {
        return new range_Range(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
      }

      return null;
    }
  }, {
    key: "words",
    value: function words(wordDefinition) {
      var lines = this._lines;

      var wordenize = this._wordenize.bind(this);

      var lineNumber = 0;
      var lineText = '';
      var wordRangesIdx = 0;
      var wordRanges = [];
      return _defineProperty({}, Symbol.iterator, /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var value;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                if (!(wordRangesIdx < wordRanges.length)) {
                  _context.next = 8;
                  break;
                }

                value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
                _context.next = 6;
                return value;

              case 6:
                _context.next = 16;
                break;

              case 8:
                if (!(lineNumber < lines.length)) {
                  _context.next = 15;
                  break;
                }

                lineText = lines[lineNumber];
                wordRanges = wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                _context.next = 16;
                break;

              case 15:
                return _context.abrupt("break", 18);

              case 16:
                _context.next = 0;
                break;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "getLineWords",
    value: function getLineWords(lineNumber, wordDefinition) {
      var content = this._lines[lineNumber - 1];

      var ranges = this._wordenize(content, wordDefinition);

      var words = [];

      var _iterator = _createForOfIteratorHelper(ranges),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var range = _step.value;
          words.push({
            word: content.substring(range.start, range.end),
            startColumn: range.start + 1,
            endColumn: range.end + 1
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return words;
    }
  }, {
    key: "_wordenize",
    value: function _wordenize(content, wordDefinition) {
      var result = [];
      var match;
      wordDefinition.lastIndex = 0; // reset lastIndex just to be sure

      while (match = wordDefinition.exec(content)) {
        if (match[0].length === 0) {
          // it did match the empty string
          break;
        }

        result.push({
          start: match.index,
          end: match.index + match[0].length
        });
      }

      return result;
    }
  }, {
    key: "getValueInRange",
    value: function getValueInRange(range) {
      range = this._validateRange(range);

      if (range.startLineNumber === range.endLineNumber) {
        return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
      }

      var lineEnding = this._eol;
      var startLineIndex = range.startLineNumber - 1;
      var endLineIndex = range.endLineNumber - 1;
      var resultLines = [];
      resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));

      for (var i = startLineIndex + 1; i < endLineIndex; i++) {
        resultLines.push(this._lines[i]);
      }

      resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
      return resultLines.join(lineEnding);
    }
  }, {
    key: "offsetAt",
    value: function offsetAt(position) {
      position = this._validatePosition(position);

      this._ensureLineStarts();

      return this._lineStarts.getPrefixSum(position.lineNumber - 2) + (position.column - 1);
    }
  }, {
    key: "positionAt",
    value: function positionAt(offset) {
      offset = Math.floor(offset);
      offset = Math.max(0, offset);

      this._ensureLineStarts();

      var out = this._lineStarts.getIndexOf(offset);

      var lineLength = this._lines[out.index].length; // Ensure we return a valid position

      return {
        lineNumber: 1 + out.index,
        column: 1 + Math.min(out.remainder, lineLength)
      };
    }
  }, {
    key: "_validateRange",
    value: function _validateRange(range) {
      var start = this._validatePosition({
        lineNumber: range.startLineNumber,
        column: range.startColumn
      });

      var end = this._validatePosition({
        lineNumber: range.endLineNumber,
        column: range.endColumn
      });

      if (start.lineNumber !== range.startLineNumber || start.column !== range.startColumn || end.lineNumber !== range.endLineNumber || end.column !== range.endColumn) {
        return {
          startLineNumber: start.lineNumber,
          startColumn: start.column,
          endLineNumber: end.lineNumber,
          endColumn: end.column
        };
      }

      return range;
    }
  }, {
    key: "_validatePosition",
    value: function _validatePosition(position) {
      if (!position_Position.isIPosition(position)) {
        throw new Error('bad position');
      }

      var lineNumber = position.lineNumber,
          column = position.column;
      var hasChanged = false;

      if (lineNumber < 1) {
        lineNumber = 1;
        column = 1;
        hasChanged = true;
      } else if (lineNumber > this._lines.length) {
        lineNumber = this._lines.length;
        column = this._lines[lineNumber - 1].length + 1;
        hasChanged = true;
      } else {
        var maxCharacter = this._lines[lineNumber - 1].length + 1;

        if (column < 1) {
          column = 1;
          hasChanged = true;
        } else if (column > maxCharacter) {
          column = maxCharacter;
          hasChanged = true;
        }
      }

      if (!hasChanged) {
        return position;
      } else {
        return {
          lineNumber: lineNumber,
          column: column
        };
      }
    }
  }]);

  return MirrorModel;
}(mirrorTextModel_MirrorTextModel);
/**
 * @internal
 */

var editorSimpleWorker_EditorSimpleWorker = /*#__PURE__*/function () {
  function EditorSimpleWorker(host, foreignModuleFactory) {
    _classCallCheck(this, EditorSimpleWorker);

    this._host = host;
    this._models = Object.create(null);
    this._foreignModuleFactory = foreignModuleFactory;
    this._foreignModule = null;
  }

  _createClass(EditorSimpleWorker, [{
    key: "dispose",
    value: function dispose() {
      this._models = Object.create(null);
    }
  }, {
    key: "_getModel",
    value: function _getModel(uri) {
      return this._models[uri];
    }
  }, {
    key: "_getModels",
    value: function _getModels() {
      var _this = this;

      var all = [];
      Object.keys(this._models).forEach(function (key) {
        return all.push(_this._models[key]);
      });
      return all;
    }
  }, {
    key: "acceptNewModel",
    value: function acceptNewModel(data) {
      this._models[data.url] = new editorSimpleWorker_MirrorModel(uri_URI.parse(data.url), data.lines, data.EOL, data.versionId);
    }
  }, {
    key: "acceptModelChanged",
    value: function acceptModelChanged(strURL, e) {
      if (!this._models[strURL]) {
        return;
      }

      var model = this._models[strURL];
      model.onEvents(e);
    }
  }, {
    key: "acceptRemovedModel",
    value: function acceptRemovedModel(strURL) {
      if (!this._models[strURL]) {
        return;
      }

      delete this._models[strURL];
    }
  }, {
    key: "computeUnicodeHighlights",
    value: function computeUnicodeHighlights(url, options, range) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var model;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                model = this._getModel(url);

                if (model) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", {
                  ranges: [],
                  hasMore: false,
                  ambiguousCharacterCount: 0,
                  invisibleCharacterCount: 0,
                  nonBasicAsciiCharacterCount: 0
                });

              case 3:
                return _context2.abrupt("return", unicodeTextModelHighlighter_UnicodeTextModelHighlighter.computeUnicodeHighlights(model, options, range));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    } // ---- BEGIN diff --------------------------------------------------------------------------

  }, {
    key: "computeDiff",
    value: function computeDiff(originalUrl, modifiedUrl, ignoreTrimWhitespace, maxComputationTime) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var original, modified, originalLines, modifiedLines, diffComputer, diffResult, identical;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                original = this._getModel(originalUrl);
                modified = this._getModel(modifiedUrl);

                if (!(!original || !modified)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", null);

              case 4:
                originalLines = original.getLinesContent();
                modifiedLines = modified.getLinesContent();
                diffComputer = new diffComputer_DiffComputer(originalLines, modifiedLines, {
                  shouldComputeCharChanges: true,
                  shouldPostProcessCharChanges: true,
                  shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
                  shouldMakePrettyDiff: true,
                  maxComputationTime: maxComputationTime
                });
                diffResult = diffComputer.computeDiff();
                identical = diffResult.changes.length > 0 ? false : this._modelsAreIdentical(original, modified);
                return _context3.abrupt("return", {
                  quitEarly: diffResult.quitEarly,
                  identical: identical,
                  changes: diffResult.changes
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "_modelsAreIdentical",
    value: function _modelsAreIdentical(original, modified) {
      var originalLineCount = original.getLineCount();
      var modifiedLineCount = modified.getLineCount();

      if (originalLineCount !== modifiedLineCount) {
        return false;
      }

      for (var line = 1; line <= originalLineCount; line++) {
        var originalLine = original.getLineContent(line);
        var modifiedLine = modified.getLineContent(line);

        if (originalLine !== modifiedLine) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "computeMoreMinimalEdits",
    value: function computeMoreMinimalEdits(modelUrl, edits) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var model, result, lastEol, _iterator2, _step2, _ref3, range, text, eol, original, changes, editOffset, _iterator3, _step3, change, start, end, newEdit;

        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", edits);

              case 3:
                result = [];
                lastEol = undefined;
                edits = edits.slice(0).sort(function (a, b) {
                  if (a.range && b.range) {
                    return range_Range.compareRangesUsingStarts(a.range, b.range);
                  } // eol only changes should go to the end


                  var aRng = a.range ? 0 : 1;
                  var bRng = b.range ? 0 : 1;
                  return aRng - bRng;
                });
                _iterator2 = _createForOfIteratorHelper(edits);
                _context4.prev = 7;

                _iterator2.s();

              case 9:
                if ((_step2 = _iterator2.n()).done) {
                  _context4.next = 30;
                  break;
                }

                _ref3 = _step2.value;
                range = _ref3.range;
                text = _ref3.text;
                eol = _ref3.eol;

                if (typeof eol === 'number') {
                  lastEol = eol;
                }

                if (!(range_Range.isEmpty(range) && !text)) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("continue", 28);

              case 17:
                original = model.getValueInRange(range);
                text = text.replace(/\r\n|\n|\r/g, model.eol);

                if (!(original === text)) {
                  _context4.next = 21;
                  break;
                }

                return _context4.abrupt("continue", 28);

              case 21:
                if (!(Math.max(text.length, original.length) > EditorSimpleWorker._diffLimit)) {
                  _context4.next = 24;
                  break;
                }

                result.push({
                  range: range,
                  text: text
                });
                return _context4.abrupt("continue", 28);

              case 24:
                // compute diff between original and edit.text
                changes = stringDiff(original, text, false);
                editOffset = model.offsetAt(range_Range.lift(range).getStartPosition());
                _iterator3 = _createForOfIteratorHelper(changes);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    change = _step3.value;
                    start = model.positionAt(editOffset + change.originalStart);
                    end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                    newEdit = {
                      text: text.substr(change.modifiedStart, change.modifiedLength),
                      range: {
                        startLineNumber: start.lineNumber,
                        startColumn: start.column,
                        endLineNumber: end.lineNumber,
                        endColumn: end.column
                      }
                    };

                    if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                      result.push(newEdit);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

              case 28:
                _context4.next = 9;
                break;

              case 30:
                _context4.next = 35;
                break;

              case 32:
                _context4.prev = 32;
                _context4.t0 = _context4["catch"](7);

                _iterator2.e(_context4.t0);

              case 35:
                _context4.prev = 35;

                _iterator2.f();

                return _context4.finish(35);

              case 38:
                if (typeof lastEol === 'number') {
                  result.push({
                    eol: lastEol,
                    text: '',
                    range: {
                      startLineNumber: 0,
                      startColumn: 0,
                      endLineNumber: 0,
                      endColumn: 0
                    }
                  });
                }

                return _context4.abrupt("return", result);

              case 40:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 32, 35, 38]]);
      }));
    } // ---- END minimal edits ---------------------------------------------------------------

  }, {
    key: "computeLinks",
    value: function computeLinks(modelUrl) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var model;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", null);

              case 3:
                return _context5.abrupt("return", linkComputer_computeLinks(model));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "textualSuggest",
    value: function textualSuggest(modelUrls, leadingWord, wordDef, wordDefFlags) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var sw, wordDefRegExp, seen, _iterator4, _step4, url, model, _iterator5, _step5, word;

        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                sw = new stopwatch_StopWatch(true);
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                seen = new Set();
                _iterator4 = _createForOfIteratorHelper(modelUrls);
                _context6.prev = 4;

                _iterator4.s();

              case 6:
                if ((_step4 = _iterator4.n()).done) {
                  _context6.next = 33;
                  break;
                }

                url = _step4.value;
                model = this._getModel(url);

                if (model) {
                  _context6.next = 11;
                  break;
                }

                return _context6.abrupt("continue", 31);

              case 11:
                _iterator5 = _createForOfIteratorHelper(model.words(wordDefRegExp));
                _context6.prev = 12;

                _iterator5.s();

              case 14:
                if ((_step5 = _iterator5.n()).done) {
                  _context6.next = 23;
                  break;
                }

                word = _step5.value;

                if (!(word === leadingWord || !isNaN(Number(word)))) {
                  _context6.next = 18;
                  break;
                }

                return _context6.abrupt("continue", 21);

              case 18:
                seen.add(word);

                if (!(seen.size > EditorSimpleWorker._suggestionsLimit)) {
                  _context6.next = 21;
                  break;
                }

                return _context6.abrupt("break", 33);

              case 21:
                _context6.next = 14;
                break;

              case 23:
                _context6.next = 28;
                break;

              case 25:
                _context6.prev = 25;
                _context6.t0 = _context6["catch"](12);

                _iterator5.e(_context6.t0);

              case 28:
                _context6.prev = 28;

                _iterator5.f();

                return _context6.finish(28);

              case 31:
                _context6.next = 6;
                break;

              case 33:
                _context6.next = 38;
                break;

              case 35:
                _context6.prev = 35;
                _context6.t1 = _context6["catch"](4);

                _iterator4.e(_context6.t1);

              case 38:
                _context6.prev = 38;

                _iterator4.f();

                return _context6.finish(38);

              case 41:
                return _context6.abrupt("return", {
                  words: Array.from(seen),
                  duration: sw.elapsed()
                });

              case 42:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 35, 38, 41], [12, 25, 28, 31]]);
      }));
    } // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --

  }, {
    key: "computeWordRanges",
    value: function computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var model, wordDefRegExp, result, line, words, _iterator6, _step6, word, array;

        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return", Object.create(null));

              case 3:
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                result = Object.create(null);
                line = range.startLineNumber;

              case 6:
                if (!(line < range.endLineNumber)) {
                  _context7.next = 31;
                  break;
                }

                words = model.getLineWords(line, wordDefRegExp);
                _iterator6 = _createForOfIteratorHelper(words);
                _context7.prev = 9;

                _iterator6.s();

              case 11:
                if ((_step6 = _iterator6.n()).done) {
                  _context7.next = 20;
                  break;
                }

                word = _step6.value;

                if (isNaN(Number(word.word))) {
                  _context7.next = 15;
                  break;
                }

                return _context7.abrupt("continue", 18);

              case 15:
                array = result[word.word];

                if (!array) {
                  array = [];
                  result[word.word] = array;
                }

                array.push({
                  startLineNumber: line,
                  startColumn: word.startColumn,
                  endLineNumber: line,
                  endColumn: word.endColumn
                });

              case 18:
                _context7.next = 11;
                break;

              case 20:
                _context7.next = 25;
                break;

              case 22:
                _context7.prev = 22;
                _context7.t0 = _context7["catch"](9);

                _iterator6.e(_context7.t0);

              case 25:
                _context7.prev = 25;

                _iterator6.f();

                return _context7.finish(25);

              case 28:
                line++;
                _context7.next = 6;
                break;

              case 31:
                return _context7.abrupt("return", result);

              case 32:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[9, 22, 25, 28]]);
      }));
    } //#endregion

  }, {
    key: "navigateValueSet",
    value: function navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
      return editorSimpleWorker_awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
        var model, wordDefRegExp, selectionText, wordRange, word, result;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", null);

              case 3:
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);

                if (range.startColumn === range.endColumn) {
                  range = {
                    startLineNumber: range.startLineNumber,
                    startColumn: range.startColumn,
                    endLineNumber: range.endLineNumber,
                    endColumn: range.endColumn + 1
                  };
                }

                selectionText = model.getValueInRange(range);
                wordRange = model.getWordAtPosition({
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                }, wordDefRegExp);

                if (wordRange) {
                  _context8.next = 9;
                  break;
                }

                return _context8.abrupt("return", null);

              case 9:
                word = model.getValueInRange(wordRange);
                result = inplaceReplaceSupport_BasicInplaceReplace.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
                return _context8.abrupt("return", result);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    } // ---- BEGIN foreign module support --------------------------------------------------------------------------

  }, {
    key: "loadForeignModule",
    value: function loadForeignModule(moduleId, createData, foreignHostMethods) {
      var _this2 = this;

      var proxyMethodRequest = function proxyMethodRequest(method, args) {
        return _this2._host.fhr(method, args);
      };

      var foreignHost = createProxyObject(foreignHostMethods, proxyMethodRequest);
      var ctx = {
        host: foreignHost,
        getMirrorModels: function getMirrorModels() {
          return _this2._getModels();
        }
      };

      if (this._foreignModuleFactory) {
        this._foreignModule = this._foreignModuleFactory(ctx, createData); // static foreing module

        return Promise.resolve(getAllMethodNames(this._foreignModule));
      } // ESM-comment-begin
      // 		return new Promise<any>((resolve, reject) => {
      // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
      // 				this._foreignModule = foreignModule.create(ctx, createData);
      // 
      // 				resolve(types.getAllMethodNames(this._foreignModule));
      // 
      // 			}, reject);
      // 		});
      // ESM-comment-end
      // ESM-uncomment-begin


      return Promise.reject(new Error("Unexpected usage")); // ESM-uncomment-end
    } // foreign method request

  }, {
    key: "fmr",
    value: function fmr(method, args) {
      if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
        return Promise.reject(new Error('Missing requestHandler or method: ' + method));
      }

      try {
        return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }]);

  return EditorSimpleWorker;
}(); // ---- END diff --------------------------------------------------------------------------
// ---- BEGIN minimal edits ---------------------------------------------------------------

editorSimpleWorker_EditorSimpleWorker._diffLimit = 100000; // ---- BEGIN suggest --------------------------------------------------------------------------

editorSimpleWorker_EditorSimpleWorker._suggestionsLimit = 10000;
/**
 * Called on the worker side
 * @internal
 */

function editorSimpleWorker_create(host) {
  return new editorSimpleWorker_EditorSimpleWorker(host, null);
}

if (typeof importScripts === 'function') {
  // Running in a web worker
  platform["a" /* globals */].monaco = createMonacoBaseAPI();
}
// CONCATENATED MODULE: /home/runner/work/data-structure-visualization/data-structure-visualization/node_modules/monaco-editor/esm/vs/editor/editor.worker.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var initialized = false;
function editor_worker_initialize(foreignModule) {
  if (initialized) {
    return;
  }

  initialized = true;
  var simpleWorker = new simpleWorker_SimpleWorkerServer(function (msg) {
    self.postMessage(msg);
  }, function (host) {
    return new editorSimpleWorker_EditorSimpleWorker(host, foreignModule);
  });

  self.onmessage = function (e) {
    simpleWorker.onmessage(e.data);
  };
}

self.onmessage = function (e) {
  // Ignore first message in this case and initialize if not yet initialized
  if (!initialized) {
    editor_worker_initialize(null);
  }
};

/***/ }),

/***/ "y4hX":
/*!*****************************!*\
  !*** (webpack)/4/global.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 873:
/***/ (function(module) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(873);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

/******/ });