
  /**
   * @license
   * author: Dris Hammani
   * ternoa-connect-react.js v0.1.0
   * Released under the MIT license.
   */

this["ternoa-connect-react"] = (function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var reactExports = {};
	var react = {
	  get exports(){ return reactExports; },
	  set exports(v){ reactExports = v; },
	};

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	var react_production_min = {};

	var hasRequiredReact_production_min;
	function requireReact_production_min() {
	  if (hasRequiredReact_production_min) return react_production_min;
	  hasRequiredReact_production_min = 1;
	  var l = Symbol["for"]("react.element"),
	    n = Symbol["for"]("react.portal"),
	    p = Symbol["for"]("react.fragment"),
	    q = Symbol["for"]("react.strict_mode"),
	    r = Symbol["for"]("react.profiler"),
	    t = Symbol["for"]("react.provider"),
	    u = Symbol["for"]("react.context"),
	    v = Symbol["for"]("react.forward_ref"),
	    w = Symbol["for"]("react.suspense"),
	    x = Symbol["for"]("react.memo"),
	    y = Symbol["for"]("react.lazy"),
	    z = Symbol.iterator;
	  function A(a) {
	    if (null === a || "object" !== _typeof(a)) return null;
	    a = z && a[z] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }
	  var B = {
	      isMounted: function isMounted() {
	        return !1;
	      },
	      enqueueForceUpdate: function enqueueForceUpdate() {},
	      enqueueReplaceState: function enqueueReplaceState() {},
	      enqueueSetState: function enqueueSetState() {}
	    },
	    C = Object.assign,
	    D = {};
	  function E(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  E.prototype.isReactComponent = {};
	  E.prototype.setState = function (a, b) {
	    if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	    this.updater.enqueueSetState(this, a, b, "setState");
	  };
	  E.prototype.forceUpdate = function (a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	  };
	  function F() {}
	  F.prototype = E.prototype;
	  function G(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  var H = G.prototype = new F();
	  H.constructor = G;
	  C(H, E.prototype);
	  H.isPureReactComponent = !0;
	  var I = Array.isArray,
	    J = Object.prototype.hasOwnProperty,
	    K = {
	      current: null
	    },
	    L = {
	      key: !0,
	      ref: !0,
	      __self: !0,
	      __source: !0
	    };
	  function M(a, b, e) {
	    var d,
	      c = {},
	      k = null,
	      h = null;
	    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
	    var g = arguments.length - 2;
	    if (1 === g) c.children = e;else if (1 < g) {
	      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	      c.children = f;
	    }
	    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	    return {
	      $$typeof: l,
	      type: a,
	      key: k,
	      ref: h,
	      props: c,
	      _owner: K.current
	    };
	  }
	  function N(a, b) {
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: b,
	      ref: a.ref,
	      props: a.props,
	      _owner: a._owner
	    };
	  }
	  function O(a) {
	    return "object" === _typeof(a) && null !== a && a.$$typeof === l;
	  }
	  function escape(a) {
	    var b = {
	      "=": "=0",
	      ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function (a) {
	      return b[a];
	    });
	  }
	  var P = /\/+/g;
	  function Q(a, b) {
	    return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	  }
	  function R(a, b, e, d, c) {
	    var k = _typeof(a);
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = !1;
	    if (null === a) h = !0;else switch (k) {
	      case "string":
	      case "number":
	        h = !0;
	        break;
	      case "object":
	        switch (a.$$typeof) {
	          case l:
	          case n:
	            h = !0;
	        }
	    }
	    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
	      return a;
	    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
	    h = 0;
	    d = "" === d ? "." : d + ":";
	    if (I(a)) for (var g = 0; g < a.length; g++) {
	      k = a[g];
	      var f = d + Q(k, g);
	      h += R(k, b, e, f, c);
	    } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	    return h;
	  }
	  function S(a, b, e) {
	    if (null == a) return a;
	    var d = [],
	      c = 0;
	    R(a, d, "", "", function (a) {
	      return b.call(e, a, c++);
	    });
	    return d;
	  }
	  function T(a) {
	    if (-1 === a._status) {
	      var b = a._result;
	      b = b();
	      b.then(function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	      }, function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	      });
	      -1 === a._status && (a._status = 0, a._result = b);
	    }
	    if (1 === a._status) return a._result["default"];
	    throw a._result;
	  }
	  var U = {
	      current: null
	    },
	    V = {
	      transition: null
	    },
	    W = {
	      ReactCurrentDispatcher: U,
	      ReactCurrentBatchConfig: V,
	      ReactCurrentOwner: K
	    };
	  react_production_min.Children = {
	    map: S,
	    forEach: function forEach(a, b, e) {
	      S(a, function () {
	        b.apply(this, arguments);
	      }, e);
	    },
	    count: function count(a) {
	      var b = 0;
	      S(a, function () {
	        b++;
	      });
	      return b;
	    },
	    toArray: function toArray(a) {
	      return S(a, function (a) {
	        return a;
	      }) || [];
	    },
	    only: function only(a) {
	      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
	      return a;
	    }
	  };
	  react_production_min.Component = E;
	  react_production_min.Fragment = p;
	  react_production_min.Profiler = r;
	  react_production_min.PureComponent = G;
	  react_production_min.StrictMode = q;
	  react_production_min.Suspense = w;
	  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	  react_production_min.cloneElement = function (a, b, e) {
	    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	    var d = C({}, a.props),
	      c = a.key,
	      k = a.ref,
	      h = a._owner;
	    if (null != b) {
	      void 0 !== b.ref && (k = b.ref, h = K.current);
	      void 0 !== b.key && (c = "" + b.key);
	      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }
	    var f = arguments.length - 2;
	    if (1 === f) d.children = e;else if (1 < f) {
	      g = Array(f);
	      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	      d.children = g;
	    }
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: c,
	      ref: k,
	      props: d,
	      _owner: h
	    };
	  };
	  react_production_min.createContext = function (a) {
	    a = {
	      $$typeof: u,
	      _currentValue: a,
	      _currentValue2: a,
	      _threadCount: 0,
	      Provider: null,
	      Consumer: null,
	      _defaultValue: null,
	      _globalName: null
	    };
	    a.Provider = {
	      $$typeof: t,
	      _context: a
	    };
	    return a.Consumer = a;
	  };
	  react_production_min.createElement = M;
	  react_production_min.createFactory = function (a) {
	    var b = M.bind(null, a);
	    b.type = a;
	    return b;
	  };
	  react_production_min.createRef = function () {
	    return {
	      current: null
	    };
	  };
	  react_production_min.forwardRef = function (a) {
	    return {
	      $$typeof: v,
	      render: a
	    };
	  };
	  react_production_min.isValidElement = O;
	  react_production_min.lazy = function (a) {
	    return {
	      $$typeof: y,
	      _payload: {
	        _status: -1,
	        _result: a
	      },
	      _init: T
	    };
	  };
	  react_production_min.memo = function (a, b) {
	    return {
	      $$typeof: x,
	      type: a,
	      compare: void 0 === b ? null : b
	    };
	  };
	  react_production_min.startTransition = function (a) {
	    var b = V.transition;
	    V.transition = {};
	    try {
	      a();
	    } finally {
	      V.transition = b;
	    }
	  };
	  react_production_min.unstable_act = function () {
	    throw Error("act(...) is not supported in production builds of React.");
	  };
	  react_production_min.useCallback = function (a, b) {
	    return U.current.useCallback(a, b);
	  };
	  react_production_min.useContext = function (a) {
	    return U.current.useContext(a);
	  };
	  react_production_min.useDebugValue = function () {};
	  react_production_min.useDeferredValue = function (a) {
	    return U.current.useDeferredValue(a);
	  };
	  react_production_min.useEffect = function (a, b) {
	    return U.current.useEffect(a, b);
	  };
	  react_production_min.useId = function () {
	    return U.current.useId();
	  };
	  react_production_min.useImperativeHandle = function (a, b, e) {
	    return U.current.useImperativeHandle(a, b, e);
	  };
	  react_production_min.useInsertionEffect = function (a, b) {
	    return U.current.useInsertionEffect(a, b);
	  };
	  react_production_min.useLayoutEffect = function (a, b) {
	    return U.current.useLayoutEffect(a, b);
	  };
	  react_production_min.useMemo = function (a, b) {
	    return U.current.useMemo(a, b);
	  };
	  react_production_min.useReducer = function (a, b, e) {
	    return U.current.useReducer(a, b, e);
	  };
	  react_production_min.useRef = function (a) {
	    return U.current.useRef(a);
	  };
	  react_production_min.useState = function (a) {
	    return U.current.useState(a);
	  };
	  react_production_min.useSyncExternalStore = function (a, b, e) {
	    return U.current.useSyncExternalStore(a, b, e);
	  };
	  react_production_min.useTransition = function () {
	    return U.current.useTransition();
	  };
	  react_production_min.version = "18.2.0";
	  return react_production_min;
	}

	var react_developmentExports = {};
	var react_development = {
	  get exports(){ return react_developmentExports; },
	  set exports(v){ react_developmentExports = v; },
	};

	var hasRequiredReact_development;
	function requireReact_development() {
	  if (hasRequiredReact_development) return react_developmentExports;
	  hasRequiredReact_development = 1;
	  (function (module, exports) {

	    if (process.env.NODE_ENV !== "production") {
	      (function () {

	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
	          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	        }
	        var ReactVersion = '18.2.0';

	        // ATTENTION
	        // When adding new symbols to this file,
	        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	        // The Symbol used to tag the ReactElement-like types.
	        var REACT_ELEMENT_TYPE = Symbol["for"]('react.element');
	        var REACT_PORTAL_TYPE = Symbol["for"]('react.portal');
	        var REACT_FRAGMENT_TYPE = Symbol["for"]('react.fragment');
	        var REACT_STRICT_MODE_TYPE = Symbol["for"]('react.strict_mode');
	        var REACT_PROFILER_TYPE = Symbol["for"]('react.profiler');
	        var REACT_PROVIDER_TYPE = Symbol["for"]('react.provider');
	        var REACT_CONTEXT_TYPE = Symbol["for"]('react.context');
	        var REACT_FORWARD_REF_TYPE = Symbol["for"]('react.forward_ref');
	        var REACT_SUSPENSE_TYPE = Symbol["for"]('react.suspense');
	        var REACT_SUSPENSE_LIST_TYPE = Symbol["for"]('react.suspense_list');
	        var REACT_MEMO_TYPE = Symbol["for"]('react.memo');
	        var REACT_LAZY_TYPE = Symbol["for"]('react.lazy');
	        var REACT_OFFSCREEN_TYPE = Symbol["for"]('react.offscreen');
	        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	        var FAUX_ITERATOR_SYMBOL = '@@iterator';
	        function getIteratorFn(maybeIterable) {
	          if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
	            return null;
	          }
	          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	          if (typeof maybeIterator === 'function') {
	            return maybeIterator;
	          }
	          return null;
	        }

	        /**
	         * Keeps track of the current dispatcher.
	         */
	        var ReactCurrentDispatcher = {
	          /**
	           * @internal
	           * @type {ReactComponent}
	           */
	          current: null
	        };

	        /**
	         * Keeps track of the current batch's configuration such as how long an update
	         * should suspend for if it needs to.
	         */
	        var ReactCurrentBatchConfig = {
	          transition: null
	        };
	        var ReactCurrentActQueue = {
	          current: null,
	          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
	          isBatchingLegacy: false,
	          didScheduleLegacyUpdate: false
	        };

	        /**
	         * Keeps track of the current owner.
	         *
	         * The current owner is the component who should own any components that are
	         * currently being constructed.
	         */
	        var ReactCurrentOwner = {
	          /**
	           * @internal
	           * @type {ReactComponent}
	           */
	          current: null
	        };
	        var ReactDebugCurrentFrame = {};
	        var currentExtraStackFrame = null;
	        function setExtraStackFrame(stack) {
	          {
	            currentExtraStackFrame = stack;
	          }
	        }
	        {
	          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
	            {
	              currentExtraStackFrame = stack;
	            }
	          }; // Stack implementation injected by the current renderer.

	          ReactDebugCurrentFrame.getCurrentStack = null;
	          ReactDebugCurrentFrame.getStackAddendum = function () {
	            var stack = ''; // Add an extra top frame while an element is being validated

	            if (currentExtraStackFrame) {
	              stack += currentExtraStackFrame;
	            } // Delegate to the injected renderer-specific implementation

	            var impl = ReactDebugCurrentFrame.getCurrentStack;
	            if (impl) {
	              stack += impl() || '';
	            }
	            return stack;
	          };
	        }

	        // -----------------------------------------------------------------------------

	        var enableScopeAPI = false; // Experimental Create Event Handle API.
	        var enableCacheElement = false;
	        var enableTransitionTracing = false; // No known bugs, but needs performance testing

	        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	        // stuff. Intended to enable React core members to more easily debug scheduling
	        // issues in DEV builds.

	        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	        var ReactSharedInternals = {
	          ReactCurrentDispatcher: ReactCurrentDispatcher,
	          ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	          ReactCurrentOwner: ReactCurrentOwner
	        };
	        {
	          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
	          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
	        }

	        // by calls to these methods by a Babel plugin.
	        //
	        // In PROD (or in packages without access to React internals),
	        // they are left as they are instead.

	        function warn(format) {
	          {
	            {
	              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	              }
	              printWarning('warn', format, args);
	            }
	          }
	        }
	        function error(format) {
	          {
	            {
	              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	              }
	              printWarning('error', format, args);
	            }
	          }
	        }
	        function printWarning(level, format, args) {
	          // When changing this logic, you might want to also
	          // update consoleWithStackDev.www.js as well.
	          {
	            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	            var stack = ReactDebugCurrentFrame.getStackAddendum();
	            if (stack !== '') {
	              format += '%s';
	              args = args.concat([stack]);
	            } // eslint-disable-next-line react-internal/safe-string-coercion

	            var argsWithFormat = args.map(function (item) {
	              return String(item);
	            }); // Careful: RN currently depends on this prefix

	            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	            // breaks IE9: https://github.com/facebook/react/issues/13610
	            // eslint-disable-next-line react-internal/no-production-logging

	            Function.prototype.apply.call(console[level], console, argsWithFormat);
	          }
	        }
	        var didWarnStateUpdateForUnmountedComponent = {};
	        function warnNoop(publicInstance, callerName) {
	          {
	            var _constructor = publicInstance.constructor;
	            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	            var warningKey = componentName + "." + callerName;
	            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	              return;
	            }
	            error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
	            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	          }
	        }
	        /**
	         * This is the abstract API for an update queue.
	         */

	        var ReactNoopUpdateQueue = {
	          /**
	           * Checks whether or not this composite component is mounted.
	           * @param {ReactClass} publicInstance The instance we want to test.
	           * @return {boolean} True if mounted, false otherwise.
	           * @protected
	           * @final
	           */
	          isMounted: function isMounted(publicInstance) {
	            return false;
	          },
	          /**
	           * Forces an update. This should only be invoked when it is known with
	           * certainty that we are **not** in a DOM transaction.
	           *
	           * You may want to call this when you know that some deeper aspect of the
	           * component's state has changed but `setState` was not called.
	           *
	           * This will not invoke `shouldComponentUpdate`, but it will invoke
	           * `componentWillUpdate` and `componentDidUpdate`.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} callerName name of the calling function in the public API.
	           * @internal
	           */
	          enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
	            warnNoop(publicInstance, 'forceUpdate');
	          },
	          /**
	           * Replaces all of the state. Always use this or `setState` to mutate state.
	           * You should treat `this.state` as immutable.
	           *
	           * There is no guarantee that `this.state` will be immediately updated, so
	           * accessing `this.state` after calling this method may return the old value.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {object} completeState Next state.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} callerName name of the calling function in the public API.
	           * @internal
	           */
	          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
	            warnNoop(publicInstance, 'replaceState');
	          },
	          /**
	           * Sets a subset of the state. This only exists because _pendingState is
	           * internal. This provides a merging strategy that is not available to deep
	           * properties which is confusing. TODO: Expose pendingState or don't use it
	           * during the merge.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {object} partialState Next partial state to be merged with state.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} Name of the calling function in the public API.
	           * @internal
	           */
	          enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
	            warnNoop(publicInstance, 'setState');
	          }
	        };
	        var assign = Object.assign;
	        var emptyObject = {};
	        {
	          Object.freeze(emptyObject);
	        }
	        /**
	         * Base class helpers for the updating state of a component.
	         */

	        function Component(props, context, updater) {
	          this.props = props;
	          this.context = context; // If a component has string refs, we will assign a different object later.

	          this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	          // renderer.

	          this.updater = updater || ReactNoopUpdateQueue;
	        }
	        Component.prototype.isReactComponent = {};
	        /**
	         * Sets a subset of the state. Always use this to mutate
	         * state. You should treat `this.state` as immutable.
	         *
	         * There is no guarantee that `this.state` will be immediately updated, so
	         * accessing `this.state` after calling this method may return the old value.
	         *
	         * There is no guarantee that calls to `setState` will run synchronously,
	         * as they may eventually be batched together.  You can provide an optional
	         * callback that will be executed when the call to setState is actually
	         * completed.
	         *
	         * When a function is provided to setState, it will be called at some point in
	         * the future (not synchronously). It will be called with the up to date
	         * component arguments (state, props, context). These values can be different
	         * from this.* because your function may be called after receiveProps but before
	         * shouldComponentUpdate, and this new state, props, and context will not yet be
	         * assigned to this.
	         *
	         * @param {object|function} partialState Next partial state or function to
	         *        produce next partial state to be merged with current state.
	         * @param {?function} callback Called after state is updated.
	         * @final
	         * @protected
	         */

	        Component.prototype.setState = function (partialState, callback) {
	          if (_typeof(partialState) !== 'object' && typeof partialState !== 'function' && partialState != null) {
	            throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
	          }
	          this.updater.enqueueSetState(this, partialState, callback, 'setState');
	        };
	        /**
	         * Forces an update. This should only be invoked when it is known with
	         * certainty that we are **not** in a DOM transaction.
	         *
	         * You may want to call this when you know that some deeper aspect of the
	         * component's state has changed but `setState` was not called.
	         *
	         * This will not invoke `shouldComponentUpdate`, but it will invoke
	         * `componentWillUpdate` and `componentDidUpdate`.
	         *
	         * @param {?function} callback Called after update is complete.
	         * @final
	         * @protected
	         */

	        Component.prototype.forceUpdate = function (callback) {
	          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	        };
	        /**
	         * Deprecated APIs. These APIs used to exist on classic React classes but since
	         * we would like to deprecate them, we're not going to move them over to this
	         * modern base class. Instead, we define a getter that warns if it's accessed.
	         */

	        {
	          var deprecatedAPIs = {
	            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	          };
	          var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	            Object.defineProperty(Component.prototype, methodName, {
	              get: function get() {
	                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	                return undefined;
	              }
	            });
	          };
	          for (var fnName in deprecatedAPIs) {
	            if (deprecatedAPIs.hasOwnProperty(fnName)) {
	              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	            }
	          }
	        }
	        function ComponentDummy() {}
	        ComponentDummy.prototype = Component.prototype;
	        /**
	         * Convenience component with default shallow equality check for sCU.
	         */

	        function PureComponent(props, context, updater) {
	          this.props = props;
	          this.context = context; // If a component has string refs, we will assign a different object later.

	          this.refs = emptyObject;
	          this.updater = updater || ReactNoopUpdateQueue;
	        }
	        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	        assign(pureComponentPrototype, Component.prototype);
	        pureComponentPrototype.isPureReactComponent = true;

	        // an immutable object with a single mutable value
	        function createRef() {
	          var refObject = {
	            current: null
	          };
	          {
	            Object.seal(refObject);
	          }
	          return refObject;
	        }
	        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	        function isArray(a) {
	          return isArrayImpl(a);
	        }

	        /*
	         * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	         * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	         *
	         * The functions in this module will throw an easier-to-understand,
	         * easier-to-debug exception with a clear errors message message explaining the
	         * problem. (Instead of a confusing exception thrown inside the implementation
	         * of the `value` object).
	         */
	        // $FlowFixMe only called in DEV, so void return is not possible.
	        function typeName(value) {
	          {
	            // toStringTag is needed for namespaced types like Temporal.Instant
	            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	            return type;
	          }
	        } // $FlowFixMe only called in DEV, so void return is not possible.

	        function willCoercionThrow(value) {
	          {
	            try {
	              testStringCoercion(value);
	              return false;
	            } catch (e) {
	              return true;
	            }
	          }
	        }
	        function testStringCoercion(value) {
	          // If you ended up here by following an exception call stack, here's what's
	          // happened: you supplied an object or symbol value to React (as a prop, key,
	          // DOM attribute, CSS property, string ref, etc.) and when React tried to
	          // coerce it to a string using `'' + value`, an exception was thrown.
	          //
	          // The most common types that will cause this exception are `Symbol` instances
	          // and Temporal objects like `Temporal.Instant`. But any object that has a
	          // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	          // exception. (Library authors do this to prevent users from using built-in
	          // numeric operators like `+` or comparison operators like `>=` because custom
	          // methods are needed to perform accurate arithmetic or comparison.)
	          //
	          // To fix the problem, coerce this object or symbol value to a string before
	          // passing it to React. The most reliable way is usually `String(value)`.
	          //
	          // To find which value is throwing, check the browser or debugger console.
	          // Before this exception was thrown, there should be `console.error` output
	          // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	          // problem and how that type was used: key, atrribute, input value prop, etc.
	          // In most cases, this console output also shows the component and its
	          // ancestor components where the exception happened.
	          //
	          // eslint-disable-next-line react-internal/safe-string-coercion
	          return '' + value;
	        }
	        function checkKeyStringCoercion(value) {
	          {
	            if (willCoercionThrow(value)) {
	              error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
	              return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	            }
	          }
	        }

	        function getWrappedName(outerType, innerType, wrapperName) {
	          var displayName = outerType.displayName;
	          if (displayName) {
	            return displayName;
	          }
	          var functionName = innerType.displayName || innerType.name || '';
	          return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	        } // Keep in sync with react-reconciler/getComponentNameFromFiber

	        function getContextName(type) {
	          return type.displayName || 'Context';
	        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

	        function getComponentNameFromType(type) {
	          if (type == null) {
	            // Host root, text node or just invalid type.
	            return null;
	          }
	          {
	            if (typeof type.tag === 'number') {
	              error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	            }
	          }
	          if (typeof type === 'function') {
	            return type.displayName || type.name || null;
	          }
	          if (typeof type === 'string') {
	            return type;
	          }
	          switch (type) {
	            case REACT_FRAGMENT_TYPE:
	              return 'Fragment';
	            case REACT_PORTAL_TYPE:
	              return 'Portal';
	            case REACT_PROFILER_TYPE:
	              return 'Profiler';
	            case REACT_STRICT_MODE_TYPE:
	              return 'StrictMode';
	            case REACT_SUSPENSE_TYPE:
	              return 'Suspense';
	            case REACT_SUSPENSE_LIST_TYPE:
	              return 'SuspenseList';
	          }
	          if (_typeof(type) === 'object') {
	            switch (type.$$typeof) {
	              case REACT_CONTEXT_TYPE:
	                var context = type;
	                return getContextName(context) + '.Consumer';
	              case REACT_PROVIDER_TYPE:
	                var provider = type;
	                return getContextName(provider._context) + '.Provider';
	              case REACT_FORWARD_REF_TYPE:
	                return getWrappedName(type, type.render, 'ForwardRef');
	              case REACT_MEMO_TYPE:
	                var outerName = type.displayName || null;
	                if (outerName !== null) {
	                  return outerName;
	                }
	                return getComponentNameFromType(type.type) || 'Memo';
	              case REACT_LAZY_TYPE:
	                {
	                  var lazyComponent = type;
	                  var payload = lazyComponent._payload;
	                  var init = lazyComponent._init;
	                  try {
	                    return getComponentNameFromType(init(payload));
	                  } catch (x) {
	                    return null;
	                  }
	                }

	              // eslint-disable-next-line no-fallthrough
	            }
	          }

	          return null;
	        }
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var RESERVED_PROPS = {
	          key: true,
	          ref: true,
	          __self: true,
	          __source: true
	        };
	        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
	        {
	          didWarnAboutStringRefs = {};
	        }
	        function hasValidRef(config) {
	          {
	            if (hasOwnProperty.call(config, 'ref')) {
	              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	              if (getter && getter.isReactWarning) {
	                return false;
	              }
	            }
	          }
	          return config.ref !== undefined;
	        }
	        function hasValidKey(config) {
	          {
	            if (hasOwnProperty.call(config, 'key')) {
	              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	              if (getter && getter.isReactWarning) {
	                return false;
	              }
	            }
	          }
	          return config.key !== undefined;
	        }
	        function defineKeyPropWarningGetter(props, displayName) {
	          var warnAboutAccessingKey = function warnAboutAccessingKey() {
	            {
	              if (!specialPropKeyWarningShown) {
	                specialPropKeyWarningShown = true;
	                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	              }
	            }
	          };
	          warnAboutAccessingKey.isReactWarning = true;
	          Object.defineProperty(props, 'key', {
	            get: warnAboutAccessingKey,
	            configurable: true
	          });
	        }
	        function defineRefPropWarningGetter(props, displayName) {
	          var warnAboutAccessingRef = function warnAboutAccessingRef() {
	            {
	              if (!specialPropRefWarningShown) {
	                specialPropRefWarningShown = true;
	                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	              }
	            }
	          };
	          warnAboutAccessingRef.isReactWarning = true;
	          Object.defineProperty(props, 'ref', {
	            get: warnAboutAccessingRef,
	            configurable: true
	          });
	        }
	        function warnIfStringRefCannotBeAutoConverted(config) {
	          {
	            if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
	              if (!didWarnAboutStringRefs[componentName]) {
	                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
	                didWarnAboutStringRefs[componentName] = true;
	              }
	            }
	          }
	        }
	        /**
	         * Factory method to create a new React element. This no longer adheres to
	         * the class pattern, so do not use new to call it. Also, instanceof check
	         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	         * if something is a React Element.
	         *
	         * @param {*} type
	         * @param {*} props
	         * @param {*} key
	         * @param {string|object} ref
	         * @param {*} owner
	         * @param {*} self A *temporary* helper to detect places where `this` is
	         * different from the `owner` when React.createElement is called, so that we
	         * can warn. We want to get rid of owner and replace string `ref`s with arrow
	         * functions, and as long as `this` and owner are the same, there will be no
	         * change in behavior.
	         * @param {*} source An annotation object (added by a transpiler or otherwise)
	         * indicating filename, line number, and/or other information.
	         * @internal
	         */

	        var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	          var element = {
	            // This tag allows us to uniquely identify this as a React Element
	            $$typeof: REACT_ELEMENT_TYPE,
	            // Built-in properties that belong on the element
	            type: type,
	            key: key,
	            ref: ref,
	            props: props,
	            // Record the component responsible for creating this element.
	            _owner: owner
	          };
	          {
	            // The validation flag is currently mutative. We put it on
	            // an external backing store so that we can freeze the whole object.
	            // This can be replaced with a WeakMap once they are implemented in
	            // commonly used development environments.
	            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	            // the validation flag non-enumerable (where possible, which should
	            // include every environment we run tests in), so the test framework
	            // ignores it.

	            Object.defineProperty(element._store, 'validated', {
	              configurable: false,
	              enumerable: false,
	              writable: true,
	              value: false
	            }); // self and source are DEV only properties.

	            Object.defineProperty(element, '_self', {
	              configurable: false,
	              enumerable: false,
	              writable: false,
	              value: self
	            }); // Two elements created in two different places should be considered
	            // equal for testing purposes and therefore we hide it from enumeration.

	            Object.defineProperty(element, '_source', {
	              configurable: false,
	              enumerable: false,
	              writable: false,
	              value: source
	            });
	            if (Object.freeze) {
	              Object.freeze(element.props);
	              Object.freeze(element);
	            }
	          }
	          return element;
	        };
	        /**
	         * Create and return a new ReactElement of the given type.
	         * See https://reactjs.org/docs/react-api.html#createelement
	         */

	        function createElement(type, config, children) {
	          var propName; // Reserved names are extracted

	          var props = {};
	          var key = null;
	          var ref = null;
	          var self = null;
	          var source = null;
	          if (config != null) {
	            if (hasValidRef(config)) {
	              ref = config.ref;
	              {
	                warnIfStringRefCannotBeAutoConverted(config);
	              }
	            }
	            if (hasValidKey(config)) {
	              {
	                checkKeyStringCoercion(config.key);
	              }
	              key = '' + config.key;
	            }
	            self = config.__self === undefined ? null : config.__self;
	            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	            for (propName in config) {
	              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	                props[propName] = config[propName];
	              }
	            }
	          } // Children can be more than one argument, and those are transferred onto
	          // the newly allocated props object.

	          var childrenLength = arguments.length - 2;
	          if (childrenLength === 1) {
	            props.children = children;
	          } else if (childrenLength > 1) {
	            var childArray = Array(childrenLength);
	            for (var i = 0; i < childrenLength; i++) {
	              childArray[i] = arguments[i + 2];
	            }
	            {
	              if (Object.freeze) {
	                Object.freeze(childArray);
	              }
	            }
	            props.children = childArray;
	          } // Resolve default props

	          if (type && type.defaultProps) {
	            var defaultProps = type.defaultProps;
	            for (propName in defaultProps) {
	              if (props[propName] === undefined) {
	                props[propName] = defaultProps[propName];
	              }
	            }
	          }
	          {
	            if (key || ref) {
	              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	              if (key) {
	                defineKeyPropWarningGetter(props, displayName);
	              }
	              if (ref) {
	                defineRefPropWarningGetter(props, displayName);
	              }
	            }
	          }
	          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	        }
	        function cloneAndReplaceKey(oldElement, newKey) {
	          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	          return newElement;
	        }
	        /**
	         * Clone and return a new ReactElement using element as the starting point.
	         * See https://reactjs.org/docs/react-api.html#cloneelement
	         */

	        function cloneElement(element, config, children) {
	          if (element === null || element === undefined) {
	            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
	          }
	          var propName; // Original props are copied

	          var props = assign({}, element.props); // Reserved names are extracted

	          var key = element.key;
	          var ref = element.ref; // Self is preserved since the owner is preserved.

	          var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	          // transpiler, and the original source is probably a better indicator of the
	          // true owner.

	          var source = element._source; // Owner will be preserved, unless ref is overridden

	          var owner = element._owner;
	          if (config != null) {
	            if (hasValidRef(config)) {
	              // Silently steal the ref from the parent.
	              ref = config.ref;
	              owner = ReactCurrentOwner.current;
	            }
	            if (hasValidKey(config)) {
	              {
	                checkKeyStringCoercion(config.key);
	              }
	              key = '' + config.key;
	            } // Remaining properties override existing props

	            var defaultProps;
	            if (element.type && element.type.defaultProps) {
	              defaultProps = element.type.defaultProps;
	            }
	            for (propName in config) {
	              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	                if (config[propName] === undefined && defaultProps !== undefined) {
	                  // Resolve default props
	                  props[propName] = defaultProps[propName];
	                } else {
	                  props[propName] = config[propName];
	                }
	              }
	            }
	          } // Children can be more than one argument, and those are transferred onto
	          // the newly allocated props object.

	          var childrenLength = arguments.length - 2;
	          if (childrenLength === 1) {
	            props.children = children;
	          } else if (childrenLength > 1) {
	            var childArray = Array(childrenLength);
	            for (var i = 0; i < childrenLength; i++) {
	              childArray[i] = arguments[i + 2];
	            }
	            props.children = childArray;
	          }
	          return ReactElement(element.type, key, ref, self, source, owner, props);
	        }
	        /**
	         * Verifies the object is a ReactElement.
	         * See https://reactjs.org/docs/react-api.html#isvalidelement
	         * @param {?object} object
	         * @return {boolean} True if `object` is a ReactElement.
	         * @final
	         */

	        function isValidElement(object) {
	          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	        }
	        var SEPARATOR = '.';
	        var SUBSEPARATOR = ':';
	        /**
	         * Escape and wrap key so it is safe to use as a reactid
	         *
	         * @param {string} key to be escaped.
	         * @return {string} the escaped key.
	         */

	        function escape(key) {
	          var escapeRegex = /[=:]/g;
	          var escaperLookup = {
	            '=': '=0',
	            ':': '=2'
	          };
	          var escapedString = key.replace(escapeRegex, function (match) {
	            return escaperLookup[match];
	          });
	          return '$' + escapedString;
	        }
	        /**
	         * TODO: Test that a single child and an array with one item have the same key
	         * pattern.
	         */

	        var didWarnAboutMaps = false;
	        var userProvidedKeyEscapeRegex = /\/+/g;
	        function escapeUserProvidedKey(text) {
	          return text.replace(userProvidedKeyEscapeRegex, '$&/');
	        }
	        /**
	         * Generate a key string that identifies a element within a set.
	         *
	         * @param {*} element A element that could contain a manual key.
	         * @param {number} index Index that is used if a manual key is not provided.
	         * @return {string}
	         */

	        function getElementKey(element, index) {
	          // Do some typechecking here since we call this blindly. We want to ensure
	          // that we don't block potential future ES APIs.
	          if (_typeof(element) === 'object' && element !== null && element.key != null) {
	            // Explicit key
	            {
	              checkKeyStringCoercion(element.key);
	            }
	            return escape('' + element.key);
	          } // Implicit key determined by the index in the set

	          return index.toString(36);
	        }
	        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	          var type = _typeof(children);
	          if (type === 'undefined' || type === 'boolean') {
	            // All of the above are perceived as null.
	            children = null;
	          }
	          var invokeCallback = false;
	          if (children === null) {
	            invokeCallback = true;
	          } else {
	            switch (type) {
	              case 'string':
	              case 'number':
	                invokeCallback = true;
	                break;
	              case 'object':
	                switch (children.$$typeof) {
	                  case REACT_ELEMENT_TYPE:
	                  case REACT_PORTAL_TYPE:
	                    invokeCallback = true;
	                }
	            }
	          }
	          if (invokeCallback) {
	            var _child = children;
	            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
	            // so that it's consistent if the number of children grows:

	            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
	            if (isArray(mappedChild)) {
	              var escapedChildKey = '';
	              if (childKey != null) {
	                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
	              }
	              mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
	                return c;
	              });
	            } else if (mappedChild != null) {
	              if (isValidElement(mappedChild)) {
	                {
	                  // The `if` statement here prevents auto-disabling of the safe
	                  // coercion ESLint rule, so we must manually disable it below.
	                  // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
	                    checkKeyStringCoercion(mappedChild.key);
	                  }
	                }
	                mappedChild = cloneAndReplaceKey(mappedChild,
	                // Keep both the (mapped) and old keys if they differ, just as
	                // traverseAllChildren used to do for objects as children
	                escapedPrefix + (
	                // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	                mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
	                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
	                // eslint-disable-next-line react-internal/safe-string-coercion
	                escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
	              }
	              array.push(mappedChild);
	            }
	            return 1;
	          }
	          var child;
	          var nextName;
	          var subtreeCount = 0; // Count of children found in the current subtree.

	          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              child = children[i];
	              nextName = nextNamePrefix + getElementKey(child, i);
	              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	            }
	          } else {
	            var iteratorFn = getIteratorFn(children);
	            if (typeof iteratorFn === 'function') {
	              var iterableChildren = children;
	              {
	                // Warn about using Maps as children
	                if (iteratorFn === iterableChildren.entries) {
	                  if (!didWarnAboutMaps) {
	                    warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	                  }
	                  didWarnAboutMaps = true;
	                }
	              }
	              var iterator = iteratorFn.call(iterableChildren);
	              var step;
	              var ii = 0;
	              while (!(step = iterator.next()).done) {
	                child = step.value;
	                nextName = nextNamePrefix + getElementKey(child, ii++);
	                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	              }
	            } else if (type === 'object') {
	              // eslint-disable-next-line react-internal/safe-string-coercion
	              var childrenString = String(children);
	              throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	            }
	          }
	          return subtreeCount;
	        }

	        /**
	         * Maps children that are typically specified as `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	         *
	         * The provided mapFunction(child, index) will be called for each
	         * leaf child.
	         *
	         * @param {?*} children Children tree container.
	         * @param {function(*, int)} func The map function.
	         * @param {*} context Context for mapFunction.
	         * @return {object} Object containing the ordered map of results.
	         */
	        function mapChildren(children, func, context) {
	          if (children == null) {
	            return children;
	          }
	          var result = [];
	          var count = 0;
	          mapIntoArray(children, result, '', '', function (child) {
	            return func.call(context, child, count++);
	          });
	          return result;
	        }
	        /**
	         * Count the number of children that are typically specified as
	         * `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrencount
	         *
	         * @param {?*} children Children tree container.
	         * @return {number} The number of children.
	         */

	        function countChildren(children) {
	          var n = 0;
	          mapChildren(children, function () {
	            n++; // Don't return anything
	          });

	          return n;
	        }

	        /**
	         * Iterates through children that are typically specified as `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	         *
	         * The provided forEachFunc(child, index) will be called for each
	         * leaf child.
	         *
	         * @param {?*} children Children tree container.
	         * @param {function(*, int)} forEachFunc
	         * @param {*} forEachContext Context for forEachContext.
	         */
	        function forEachChildren(children, forEachFunc, forEachContext) {
	          mapChildren(children, function () {
	            forEachFunc.apply(this, arguments); // Don't return anything.
	          }, forEachContext);
	        }
	        /**
	         * Flatten a children object (typically specified as `props.children`) and
	         * return an array with appropriately re-keyed children.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	         */

	        function toArray(children) {
	          return mapChildren(children, function (child) {
	            return child;
	          }) || [];
	        }
	        /**
	         * Returns the first child in a collection of children and verifies that there
	         * is only one child in the collection.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	         *
	         * The current implementation of this function assumes that a single child gets
	         * passed without a wrapper, but the purpose of this helper function is to
	         * abstract away the particular structure of children.
	         *
	         * @param {?object} children Child collection structure.
	         * @return {ReactElement} The first and only `ReactElement` contained in the
	         * structure.
	         */

	        function onlyChild(children) {
	          if (!isValidElement(children)) {
	            throw new Error('React.Children.only expected to receive a single React element child.');
	          }
	          return children;
	        }
	        function createContext(defaultValue) {
	          // TODO: Second argument used to be an optional `calculateChangedBits`
	          // function. Warn to reserve for future use?
	          var context = {
	            $$typeof: REACT_CONTEXT_TYPE,
	            // As a workaround to support multiple concurrent renderers, we categorize
	            // some renderers as primary and others as secondary. We only expect
	            // there to be two concurrent renderers at most: React Native (primary) and
	            // Fabric (secondary); React DOM (primary) and React ART (secondary).
	            // Secondary renderers store their context values on separate fields.
	            _currentValue: defaultValue,
	            _currentValue2: defaultValue,
	            // Used to track how many concurrent renderers this context currently
	            // supports within in a single renderer. Such as parallel server rendering.
	            _threadCount: 0,
	            // These are circular
	            Provider: null,
	            Consumer: null,
	            // Add these to use same hidden class in VM as ServerContext
	            _defaultValue: null,
	            _globalName: null
	          };
	          context.Provider = {
	            $$typeof: REACT_PROVIDER_TYPE,
	            _context: context
	          };
	          var hasWarnedAboutUsingNestedContextConsumers = false;
	          var hasWarnedAboutUsingConsumerProvider = false;
	          var hasWarnedAboutDisplayNameOnConsumer = false;
	          {
	            // A separate object, but proxies back to the original context object for
	            // backwards compatibility. It has a different $$typeof, so we can properly
	            // warn for the incorrect usage of Context as a Consumer.
	            var Consumer = {
	              $$typeof: REACT_CONTEXT_TYPE,
	              _context: context
	            }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	            Object.defineProperties(Consumer, {
	              Provider: {
	                get: function get() {
	                  if (!hasWarnedAboutUsingConsumerProvider) {
	                    hasWarnedAboutUsingConsumerProvider = true;
	                    error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	                  }
	                  return context.Provider;
	                },
	                set: function set(_Provider) {
	                  context.Provider = _Provider;
	                }
	              },
	              _currentValue: {
	                get: function get() {
	                  return context._currentValue;
	                },
	                set: function set(_currentValue) {
	                  context._currentValue = _currentValue;
	                }
	              },
	              _currentValue2: {
	                get: function get() {
	                  return context._currentValue2;
	                },
	                set: function set(_currentValue2) {
	                  context._currentValue2 = _currentValue2;
	                }
	              },
	              _threadCount: {
	                get: function get() {
	                  return context._threadCount;
	                },
	                set: function set(_threadCount) {
	                  context._threadCount = _threadCount;
	                }
	              },
	              Consumer: {
	                get: function get() {
	                  if (!hasWarnedAboutUsingNestedContextConsumers) {
	                    hasWarnedAboutUsingNestedContextConsumers = true;
	                    error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	                  }
	                  return context.Consumer;
	                }
	              },
	              displayName: {
	                get: function get() {
	                  return context.displayName;
	                },
	                set: function set(displayName) {
	                  if (!hasWarnedAboutDisplayNameOnConsumer) {
	                    warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
	                    hasWarnedAboutDisplayNameOnConsumer = true;
	                  }
	                }
	              }
	            }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	            context.Consumer = Consumer;
	          }
	          {
	            context._currentRenderer = null;
	            context._currentRenderer2 = null;
	          }
	          return context;
	        }
	        var Uninitialized = -1;
	        var Pending = 0;
	        var Resolved = 1;
	        var Rejected = 2;
	        function lazyInitializer(payload) {
	          if (payload._status === Uninitialized) {
	            var ctor = payload._result;
	            var thenable = ctor(); // Transition to the next state.
	            // This might throw either because it's missing or throws. If so, we treat it
	            // as still uninitialized and try again next time. Which is the same as what
	            // happens if the ctor or any wrappers processing the ctor throws. This might
	            // end up fixing it if the resolution was a concurrency bug.

	            thenable.then(function (moduleObject) {
	              if (payload._status === Pending || payload._status === Uninitialized) {
	                // Transition to the next state.
	                var resolved = payload;
	                resolved._status = Resolved;
	                resolved._result = moduleObject;
	              }
	            }, function (error) {
	              if (payload._status === Pending || payload._status === Uninitialized) {
	                // Transition to the next state.
	                var rejected = payload;
	                rejected._status = Rejected;
	                rejected._result = error;
	              }
	            });
	            if (payload._status === Uninitialized) {
	              // In case, we're still uninitialized, then we're waiting for the thenable
	              // to resolve. Set it as pending in the meantime.
	              var pending = payload;
	              pending._status = Pending;
	              pending._result = thenable;
	            }
	          }
	          if (payload._status === Resolved) {
	            var moduleObject = payload._result;
	            {
	              if (moduleObject === undefined) {
	                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
	                // Break up imports to avoid accidentally parsing them as dependencies.
	                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
	              }
	            }
	            {
	              if (!('default' in moduleObject)) {
	                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
	                // Break up imports to avoid accidentally parsing them as dependencies.
	                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
	              }
	            }
	            return moduleObject["default"];
	          } else {
	            throw payload._result;
	          }
	        }
	        function lazy(ctor) {
	          var payload = {
	            // We use these fields to store the result.
	            _status: Uninitialized,
	            _result: ctor
	          };
	          var lazyType = {
	            $$typeof: REACT_LAZY_TYPE,
	            _payload: payload,
	            _init: lazyInitializer
	          };
	          {
	            // In production, this would just set it on the object.
	            var defaultProps;
	            var propTypes; // $FlowFixMe

	            Object.defineProperties(lazyType, {
	              defaultProps: {
	                configurable: true,
	                get: function get() {
	                  return defaultProps;
	                },
	                set: function set(newDefaultProps) {
	                  error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	                  defaultProps = newDefaultProps; // Match production behavior more closely:
	                  // $FlowFixMe

	                  Object.defineProperty(lazyType, 'defaultProps', {
	                    enumerable: true
	                  });
	                }
	              },
	              propTypes: {
	                configurable: true,
	                get: function get() {
	                  return propTypes;
	                },
	                set: function set(newPropTypes) {
	                  error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	                  propTypes = newPropTypes; // Match production behavior more closely:
	                  // $FlowFixMe

	                  Object.defineProperty(lazyType, 'propTypes', {
	                    enumerable: true
	                  });
	                }
	              }
	            });
	          }
	          return lazyType;
	        }
	        function forwardRef(render) {
	          {
	            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	              error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	            } else if (typeof render !== 'function') {
	              error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
	            } else {
	              if (render.length !== 0 && render.length !== 2) {
	                error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	              }
	            }
	            if (render != null) {
	              if (render.defaultProps != null || render.propTypes != null) {
	                error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	              }
	            }
	          }
	          var elementType = {
	            $$typeof: REACT_FORWARD_REF_TYPE,
	            render: render
	          };
	          {
	            var ownName;
	            Object.defineProperty(elementType, 'displayName', {
	              enumerable: false,
	              configurable: true,
	              get: function get() {
	                return ownName;
	              },
	              set: function set(name) {
	                ownName = name; // The inner component shouldn't inherit this display name in most cases,
	                // because the component may be used elsewhere.
	                // But it's nice for anonymous functions to inherit the name,
	                // so that our component-stack generation logic will display their frames.
	                // An anonymous function generally suggests a pattern like:
	                //   React.forwardRef((props, ref) => {...});
	                // This kind of inner function is not used elsewhere so the side effect is okay.

	                if (!render.name && !render.displayName) {
	                  render.displayName = name;
	                }
	              }
	            });
	          }
	          return elementType;
	        }
	        var REACT_MODULE_REFERENCE;
	        {
	          REACT_MODULE_REFERENCE = Symbol["for"]('react.module.reference');
	        }
	        function isValidElementType(type) {
	          if (typeof type === 'string' || typeof type === 'function') {
	            return true;
	          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	            return true;
	          }
	          if (_typeof(type) === 'object' && type !== null) {
	            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            // This needs to include all possible module reference object
	            // types supported by any Flight configuration anywhere since
	            // we don't know which Flight build this will end up being used
	            // with.
	            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	              return true;
	            }
	          }
	          return false;
	        }
	        function memo(type, compare) {
	          {
	            if (!isValidElementType(type)) {
	              error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
	            }
	          }
	          var elementType = {
	            $$typeof: REACT_MEMO_TYPE,
	            type: type,
	            compare: compare === undefined ? null : compare
	          };
	          {
	            var ownName;
	            Object.defineProperty(elementType, 'displayName', {
	              enumerable: false,
	              configurable: true,
	              get: function get() {
	                return ownName;
	              },
	              set: function set(name) {
	                ownName = name; // The inner component shouldn't inherit this display name in most cases,
	                // because the component may be used elsewhere.
	                // But it's nice for anonymous functions to inherit the name,
	                // so that our component-stack generation logic will display their frames.
	                // An anonymous function generally suggests a pattern like:
	                //   React.memo((props) => {...});
	                // This kind of inner function is not used elsewhere so the side effect is okay.

	                if (!type.name && !type.displayName) {
	                  type.displayName = name;
	                }
	              }
	            });
	          }
	          return elementType;
	        }
	        function resolveDispatcher() {
	          var dispatcher = ReactCurrentDispatcher.current;
	          {
	            if (dispatcher === null) {
	              error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	            }
	          } // Will result in a null access error if accessed outside render phase. We
	          // intentionally don't throw our own error because this is in a hot path.
	          // Also helps ensure this is inlined.

	          return dispatcher;
	        }
	        function useContext(Context) {
	          var dispatcher = resolveDispatcher();
	          {
	            // TODO: add a more generic warning for invalid values.
	            if (Context._context !== undefined) {
	              var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	              // and nobody should be using this in existing code.

	              if (realContext.Consumer === Context) {
	                error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	              } else if (realContext.Provider === Context) {
	                error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	              }
	            }
	          }
	          return dispatcher.useContext(Context);
	        }
	        function useState(initialState) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useState(initialState);
	        }
	        function useReducer(reducer, initialArg, init) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useReducer(reducer, initialArg, init);
	        }
	        function useRef(initialValue) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useRef(initialValue);
	        }
	        function useEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useEffect(create, deps);
	        }
	        function useInsertionEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useInsertionEffect(create, deps);
	        }
	        function useLayoutEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useLayoutEffect(create, deps);
	        }
	        function useCallback(callback, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useCallback(callback, deps);
	        }
	        function useMemo(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useMemo(create, deps);
	        }
	        function useImperativeHandle(ref, create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useImperativeHandle(ref, create, deps);
	        }
	        function useDebugValue(value, formatterFn) {
	          {
	            var dispatcher = resolveDispatcher();
	            return dispatcher.useDebugValue(value, formatterFn);
	          }
	        }
	        function useTransition() {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useTransition();
	        }
	        function useDeferredValue(value) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useDeferredValue(value);
	        }
	        function useId() {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useId();
	        }
	        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	        }

	        // Helpers to patch console.logs to avoid logging during side-effect free
	        // replaying on render function. This currently only patches the object
	        // lazily which won't cover if the log function was extracted eagerly.
	        // We could also eagerly patch the method.
	        var disabledDepth = 0;
	        var prevLog;
	        var prevInfo;
	        var prevWarn;
	        var prevError;
	        var prevGroup;
	        var prevGroupCollapsed;
	        var prevGroupEnd;
	        function disabledLog() {}
	        disabledLog.__reactDisabledLog = true;
	        function disableLogs() {
	          {
	            if (disabledDepth === 0) {
	              /* eslint-disable react-internal/no-production-logging */
	              prevLog = console.log;
	              prevInfo = console.info;
	              prevWarn = console.warn;
	              prevError = console.error;
	              prevGroup = console.group;
	              prevGroupCollapsed = console.groupCollapsed;
	              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	              var props = {
	                configurable: true,
	                enumerable: true,
	                value: disabledLog,
	                writable: true
	              }; // $FlowFixMe Flow thinks console is immutable.

	              Object.defineProperties(console, {
	                info: props,
	                log: props,
	                warn: props,
	                error: props,
	                group: props,
	                groupCollapsed: props,
	                groupEnd: props
	              });
	              /* eslint-enable react-internal/no-production-logging */
	            }

	            disabledDepth++;
	          }
	        }
	        function reenableLogs() {
	          {
	            disabledDepth--;
	            if (disabledDepth === 0) {
	              /* eslint-disable react-internal/no-production-logging */
	              var props = {
	                configurable: true,
	                enumerable: true,
	                writable: true
	              }; // $FlowFixMe Flow thinks console is immutable.

	              Object.defineProperties(console, {
	                log: assign({}, props, {
	                  value: prevLog
	                }),
	                info: assign({}, props, {
	                  value: prevInfo
	                }),
	                warn: assign({}, props, {
	                  value: prevWarn
	                }),
	                error: assign({}, props, {
	                  value: prevError
	                }),
	                group: assign({}, props, {
	                  value: prevGroup
	                }),
	                groupCollapsed: assign({}, props, {
	                  value: prevGroupCollapsed
	                }),
	                groupEnd: assign({}, props, {
	                  value: prevGroupEnd
	                })
	              });
	              /* eslint-enable react-internal/no-production-logging */
	            }

	            if (disabledDepth < 0) {
	              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	            }
	          }
	        }
	        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	        var prefix;
	        function describeBuiltInComponentFrame(name, source, ownerFn) {
	          {
	            if (prefix === undefined) {
	              // Extract the VM specific prefix used by each line.
	              try {
	                throw Error();
	              } catch (x) {
	                var match = x.stack.trim().match(/\n( *(at )?)/);
	                prefix = match && match[1] || '';
	              }
	            } // We use the prefix to ensure our stacks line up with native stack frames.

	            return '\n' + prefix + name;
	          }
	        }
	        var reentry = false;
	        var componentFrameCache;
	        {
	          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	          componentFrameCache = new PossiblyWeakMap();
	        }
	        function describeNativeComponentFrame(fn, construct) {
	          // If something asked for a stack inside a fake render, it should get ignored.
	          if (!fn || reentry) {
	            return '';
	          }
	          {
	            var frame = componentFrameCache.get(fn);
	            if (frame !== undefined) {
	              return frame;
	            }
	          }
	          var control;
	          reentry = true;
	          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	          Error.prepareStackTrace = undefined;
	          var previousDispatcher;
	          {
	            previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
	            // for warnings.

	            ReactCurrentDispatcher$1.current = null;
	            disableLogs();
	          }
	          try {
	            // This should throw.
	            if (construct) {
	              // Something should be setting the props in the constructor.
	              var Fake = function Fake() {
	                throw Error();
	              }; // $FlowFixMe

	              Object.defineProperty(Fake.prototype, 'props', {
	                set: function set() {
	                  // We use a throwing setter instead of frozen or non-writable props
	                  // because that won't throw in a non-strict mode function.
	                  throw Error();
	                }
	              });
	              if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
	                // We construct a different control for this case to include any extra
	                // frames added by the construct call.
	                try {
	                  Reflect.construct(Fake, []);
	                } catch (x) {
	                  control = x;
	                }
	                Reflect.construct(fn, [], Fake);
	              } else {
	                try {
	                  Fake.call();
	                } catch (x) {
	                  control = x;
	                }
	                fn.call(Fake.prototype);
	              }
	            } else {
	              try {
	                throw Error();
	              } catch (x) {
	                control = x;
	              }
	              fn();
	            }
	          } catch (sample) {
	            // This is inlined manually because closure doesn't do it for us.
	            if (sample && control && typeof sample.stack === 'string') {
	              // This extracts the first frame from the sample that isn't also in the control.
	              // Skipping one frame that we assume is the frame that calls the two.
	              var sampleLines = sample.stack.split('\n');
	              var controlLines = control.stack.split('\n');
	              var s = sampleLines.length - 1;
	              var c = controlLines.length - 1;
	              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	                // We expect at least one stack frame to be shared.
	                // Typically this will be the root most one. However, stack frames may be
	                // cut off due to maximum stack limits. In this case, one maybe cut off
	                // earlier than the other. We assume that the sample is longer or the same
	                // and there for cut off earlier. So we should find the root most frame in
	                // the sample somewhere in the control.
	                c--;
	              }
	              for (; s >= 1 && c >= 0; s--, c--) {
	                // Next we find the first one that isn't the same which should be the
	                // frame that called our sample function and the control.
	                if (sampleLines[s] !== controlLines[c]) {
	                  // In V8, the first line is describing the message but other VMs don't.
	                  // If we're about to return the first line, and the control is also on the same
	                  // line, that's a pretty good indicator that our sample threw at same line as
	                  // the control. I.e. before we entered the sample frame. So we ignore this result.
	                  // This can happen if you passed a class to function component, or non-function.
	                  if (s !== 1 || c !== 1) {
	                    do {
	                      s--;
	                      c--; // We may still have similar intermediate frames from the construct call.
	                      // The next one that isn't the same should be our match though.

	                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                        // but we have a user-provided "displayName"
	                        // splice it in to make the stack more readable.

	                        if (fn.displayName && _frame.includes('<anonymous>')) {
	                          _frame = _frame.replace('<anonymous>', fn.displayName);
	                        }
	                        {
	                          if (typeof fn === 'function') {
	                            componentFrameCache.set(fn, _frame);
	                          }
	                        } // Return the line we found.

	                        return _frame;
	                      }
	                    } while (s >= 1 && c >= 0);
	                  }
	                  break;
	                }
	              }
	            }
	          } finally {
	            reentry = false;
	            {
	              ReactCurrentDispatcher$1.current = previousDispatcher;
	              reenableLogs();
	            }
	            Error.prepareStackTrace = previousPrepareStackTrace;
	          } // Fallback to just using the name if we couldn't make it throw.

	          var name = fn ? fn.displayName || fn.name : '';
	          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
	          {
	            if (typeof fn === 'function') {
	              componentFrameCache.set(fn, syntheticFrame);
	            }
	          }
	          return syntheticFrame;
	        }
	        function describeFunctionComponentFrame(fn, source, ownerFn) {
	          {
	            return describeNativeComponentFrame(fn, false);
	          }
	        }
	        function shouldConstruct(Component) {
	          var prototype = Component.prototype;
	          return !!(prototype && prototype.isReactComponent);
	        }
	        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
	          if (type == null) {
	            return '';
	          }
	          if (typeof type === 'function') {
	            {
	              return describeNativeComponentFrame(type, shouldConstruct(type));
	            }
	          }
	          if (typeof type === 'string') {
	            return describeBuiltInComponentFrame(type);
	          }
	          switch (type) {
	            case REACT_SUSPENSE_TYPE:
	              return describeBuiltInComponentFrame('Suspense');
	            case REACT_SUSPENSE_LIST_TYPE:
	              return describeBuiltInComponentFrame('SuspenseList');
	          }
	          if (_typeof(type) === 'object') {
	            switch (type.$$typeof) {
	              case REACT_FORWARD_REF_TYPE:
	                return describeFunctionComponentFrame(type.render);
	              case REACT_MEMO_TYPE:
	                // Memo may contain any component type so we recursively resolve it.
	                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
	              case REACT_LAZY_TYPE:
	                {
	                  var lazyComponent = type;
	                  var payload = lazyComponent._payload;
	                  var init = lazyComponent._init;
	                  try {
	                    // Lazy may contain any component type so we recursively resolve it.
	                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	                  } catch (x) {}
	                }
	            }
	          }
	          return '';
	        }
	        var loggedTypeFailures = {};
	        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	        function setCurrentlyValidatingElement(element) {
	          {
	            if (element) {
	              var owner = element._owner;
	              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	            } else {
	              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	            }
	          }
	        }
	        function checkPropTypes(typeSpecs, values, location, componentName, element) {
	          {
	            // $FlowFixMe This is okay but Flow doesn't know it.
	            var has = Function.call.bind(hasOwnProperty);
	            for (var typeSpecName in typeSpecs) {
	              if (has(typeSpecs, typeSpecName)) {
	                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	                // fail the render phase where it didn't fail before. So we log it.
	                // After these have been cleaned up, we'll let them throw.

	                try {
	                  // This is intentionally an invariant that gets caught. It's the same
	                  // behavior as without this statement except with a better message.
	                  if (typeof typeSpecs[typeSpecName] !== 'function') {
	                    // eslint-disable-next-line react-internal/prod-error-codes
	                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	                    err.name = 'Invariant Violation';
	                    throw err;
	                  }
	                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	                } catch (ex) {
	                  error$1 = ex;
	                }
	                if (error$1 && !(error$1 instanceof Error)) {
	                  setCurrentlyValidatingElement(element);
	                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
	                  setCurrentlyValidatingElement(null);
	                }
	                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	                  // Only monitor this failure once because there tends to be a lot of the
	                  // same error.
	                  loggedTypeFailures[error$1.message] = true;
	                  setCurrentlyValidatingElement(element);
	                  error('Failed %s type: %s', location, error$1.message);
	                  setCurrentlyValidatingElement(null);
	                }
	              }
	            }
	          }
	        }
	        function setCurrentlyValidatingElement$1(element) {
	          {
	            if (element) {
	              var owner = element._owner;
	              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	              setExtraStackFrame(stack);
	            } else {
	              setExtraStackFrame(null);
	            }
	          }
	        }
	        var propTypesMisspellWarningShown;
	        {
	          propTypesMisspellWarningShown = false;
	        }
	        function getDeclarationErrorAddendum() {
	          if (ReactCurrentOwner.current) {
	            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
	            if (name) {
	              return '\n\nCheck the render method of `' + name + '`.';
	            }
	          }
	          return '';
	        }
	        function getSourceInfoErrorAddendum(source) {
	          if (source !== undefined) {
	            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	            var lineNumber = source.lineNumber;
	            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	          }
	          return '';
	        }
	        function getSourceInfoErrorAddendumForProps(elementProps) {
	          if (elementProps !== null && elementProps !== undefined) {
	            return getSourceInfoErrorAddendum(elementProps.__source);
	          }
	          return '';
	        }
	        /**
	         * Warn if there's no key explicitly set on dynamic arrays of children or
	         * object keys are not valid. This allows us to keep track of children between
	         * updates.
	         */

	        var ownerHasKeyUseWarning = {};
	        function getCurrentComponentErrorInfo(parentType) {
	          var info = getDeclarationErrorAddendum();
	          if (!info) {
	            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	            if (parentName) {
	              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	            }
	          }
	          return info;
	        }
	        /**
	         * Warn if the element doesn't have an explicit key assigned to it.
	         * This element is in an array. The array could grow and shrink or be
	         * reordered. All children that haven't already been validated are required to
	         * have a "key" property assigned to it. Error statuses are cached so a warning
	         * will only be shown once.
	         *
	         * @internal
	         * @param {ReactElement} element Element that requires a key.
	         * @param {*} parentType element's parent's type.
	         */

	        function validateExplicitKey(element, parentType) {
	          if (!element._store || element._store.validated || element.key != null) {
	            return;
	          }
	          element._store.validated = true;
	          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	            return;
	          }
	          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	          // property, it may be the creator of the child that's responsible for
	          // assigning it a key.

	          var childOwner = '';
	          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	            // Give the component that originally created this child.
	            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	          }
	          {
	            setCurrentlyValidatingElement$1(element);
	            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
	            setCurrentlyValidatingElement$1(null);
	          }
	        }
	        /**
	         * Ensure that every element either is passed in a static location, in an
	         * array with an explicit keys property defined, or in an object literal
	         * with valid key property.
	         *
	         * @internal
	         * @param {ReactNode} node Statically passed child of any type.
	         * @param {*} parentType node's parent's type.
	         */

	        function validateChildKeys(node, parentType) {
	          if (_typeof(node) !== 'object') {
	            return;
	          }
	          if (isArray(node)) {
	            for (var i = 0; i < node.length; i++) {
	              var child = node[i];
	              if (isValidElement(child)) {
	                validateExplicitKey(child, parentType);
	              }
	            }
	          } else if (isValidElement(node)) {
	            // This element was passed in a valid location.
	            if (node._store) {
	              node._store.validated = true;
	            }
	          } else if (node) {
	            var iteratorFn = getIteratorFn(node);
	            if (typeof iteratorFn === 'function') {
	              // Entry iterators used to provide implicit keys,
	              // but now we print a separate warning for them later.
	              if (iteratorFn !== node.entries) {
	                var iterator = iteratorFn.call(node);
	                var step;
	                while (!(step = iterator.next()).done) {
	                  if (isValidElement(step.value)) {
	                    validateExplicitKey(step.value, parentType);
	                  }
	                }
	              }
	            }
	          }
	        }
	        /**
	         * Given an element, validate that its props follow the propTypes definition,
	         * provided by the type.
	         *
	         * @param {ReactElement} element
	         */

	        function validatePropTypes(element) {
	          {
	            var type = element.type;
	            if (type === null || type === undefined || typeof type === 'string') {
	              return;
	            }
	            var propTypes;
	            if (typeof type === 'function') {
	              propTypes = type.propTypes;
	            } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            // Note: Memo only checks outer props here.
	            // Inner props are checked in the reconciler.
	            type.$$typeof === REACT_MEMO_TYPE)) {
	              propTypes = type.propTypes;
	            } else {
	              return;
	            }
	            if (propTypes) {
	              // Intentionally inside to avoid triggering lazy initializers:
	              var name = getComponentNameFromType(type);
	              checkPropTypes(propTypes, element.props, 'prop', name, element);
	            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	              var _name = getComponentNameFromType(type);
	              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	            }
	            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	            }
	          }
	        }
	        /**
	         * Given a fragment, validate that it can only be provided with fragment props
	         * @param {ReactElement} fragment
	         */

	        function validateFragmentProps(fragment) {
	          {
	            var keys = Object.keys(fragment.props);
	            for (var i = 0; i < keys.length; i++) {
	              var key = keys[i];
	              if (key !== 'children' && key !== 'key') {
	                setCurrentlyValidatingElement$1(fragment);
	                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
	                setCurrentlyValidatingElement$1(null);
	                break;
	              }
	            }
	            if (fragment.ref !== null) {
	              setCurrentlyValidatingElement$1(fragment);
	              error('Invalid attribute `ref` supplied to `React.Fragment`.');
	              setCurrentlyValidatingElement$1(null);
	            }
	          }
	        }
	        function createElementWithValidation(type, props, children) {
	          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	          // succeed and there will likely be errors in render.

	          if (!validType) {
	            var info = '';
	            if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
	              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	            }
	            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
	            if (sourceInfo) {
	              info += sourceInfo;
	            } else {
	              info += getDeclarationErrorAddendum();
	            }
	            var typeString;
	            if (type === null) {
	              typeString = 'null';
	            } else if (isArray(type)) {
	              typeString = 'array';
	            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	              typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	              info = ' Did you accidentally export a JSX literal instead of a component?';
	            } else {
	              typeString = _typeof(type);
	            }
	            {
	              error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	            }
	          }
	          var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	          // TODO: Drop this when these are no longer allowed as the type argument.

	          if (element == null) {
	            return element;
	          } // Skip key warning if the type isn't valid since our key validation logic
	          // doesn't expect a non-string/function type and can throw confusing errors.
	          // We don't want exception behavior to differ between dev and prod.
	          // (Rendering will throw with a helpful message and as soon as the type is
	          // fixed, the key warnings will appear.)

	          if (validType) {
	            for (var i = 2; i < arguments.length; i++) {
	              validateChildKeys(arguments[i], type);
	            }
	          }
	          if (type === REACT_FRAGMENT_TYPE) {
	            validateFragmentProps(element);
	          } else {
	            validatePropTypes(element);
	          }
	          return element;
	        }
	        var didWarnAboutDeprecatedCreateFactory = false;
	        function createFactoryWithValidation(type) {
	          var validatedFactory = createElementWithValidation.bind(null, type);
	          validatedFactory.type = type;
	          {
	            if (!didWarnAboutDeprecatedCreateFactory) {
	              didWarnAboutDeprecatedCreateFactory = true;
	              warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	            } // Legacy hook: remove it

	            Object.defineProperty(validatedFactory, 'type', {
	              enumerable: false,
	              get: function get() {
	                warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	                Object.defineProperty(this, 'type', {
	                  value: type
	                });
	                return type;
	              }
	            });
	          }
	          return validatedFactory;
	        }
	        function cloneElementWithValidation(element, props, children) {
	          var newElement = cloneElement.apply(this, arguments);
	          for (var i = 2; i < arguments.length; i++) {
	            validateChildKeys(arguments[i], newElement.type);
	          }
	          validatePropTypes(newElement);
	          return newElement;
	        }
	        function startTransition(scope, options) {
	          var prevTransition = ReactCurrentBatchConfig.transition;
	          ReactCurrentBatchConfig.transition = {};
	          var currentTransition = ReactCurrentBatchConfig.transition;
	          {
	            ReactCurrentBatchConfig.transition._updatedFibers = new Set();
	          }
	          try {
	            scope();
	          } finally {
	            ReactCurrentBatchConfig.transition = prevTransition;
	            {
	              if (prevTransition === null && currentTransition._updatedFibers) {
	                var updatedFibersCount = currentTransition._updatedFibers.size;
	                if (updatedFibersCount > 10) {
	                  warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
	                }
	                currentTransition._updatedFibers.clear();
	              }
	            }
	          }
	        }
	        var didWarnAboutMessageChannel = false;
	        var enqueueTaskImpl = null;
	        function enqueueTask(task) {
	          if (enqueueTaskImpl === null) {
	            try {
	              // read require off the module object to get around the bundlers.
	              // we don't want them to detect a require and bundle a Node polyfill.
	              var requireString = ('require' + Math.random()).slice(0, 7);
	              var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
	              // version of setImmediate, bypassing fake timers if any.

	              enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
	            } catch (_err) {
	              // we're in a browser
	              // we can't use regular timers because they may still be faked
	              // so we try MessageChannel+postMessage instead
	              enqueueTaskImpl = function enqueueTaskImpl(callback) {
	                {
	                  if (didWarnAboutMessageChannel === false) {
	                    didWarnAboutMessageChannel = true;
	                    if (typeof MessageChannel === 'undefined') {
	                      error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
	                    }
	                  }
	                }
	                var channel = new MessageChannel();
	                channel.port1.onmessage = callback;
	                channel.port2.postMessage(undefined);
	              };
	            }
	          }
	          return enqueueTaskImpl(task);
	        }
	        var actScopeDepth = 0;
	        var didWarnNoAwaitAct = false;
	        function act(callback) {
	          {
	            // `act` calls can be nested, so we track the depth. This represents the
	            // number of `act` scopes on the stack.
	            var prevActScopeDepth = actScopeDepth;
	            actScopeDepth++;
	            if (ReactCurrentActQueue.current === null) {
	              // This is the outermost `act` scope. Initialize the queue. The reconciler
	              // will detect the queue and use it instead of Scheduler.
	              ReactCurrentActQueue.current = [];
	            }
	            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
	            var result;
	            try {
	              // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
	              // set to `true` while the given callback is executed, not for updates
	              // triggered during an async event, because this is how the legacy
	              // implementation of `act` behaved.
	              ReactCurrentActQueue.isBatchingLegacy = true;
	              result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
	              // which flushed updates immediately after the scope function exits, even
	              // if it's an async function.

	              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
	                var queue = ReactCurrentActQueue.current;
	                if (queue !== null) {
	                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
	                  flushActQueue(queue);
	                }
	              }
	            } catch (error) {
	              popActScope(prevActScopeDepth);
	              throw error;
	            } finally {
	              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
	            }
	            if (result !== null && _typeof(result) === 'object' && typeof result.then === 'function') {
	              var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
	              // for it to resolve before exiting the current scope.

	              var wasAwaited = false;
	              var thenable = {
	                then: function then(resolve, reject) {
	                  wasAwaited = true;
	                  thenableResult.then(function (returnValue) {
	                    popActScope(prevActScopeDepth);
	                    if (actScopeDepth === 0) {
	                      // We've exited the outermost act scope. Recursively flush the
	                      // queue until there's no remaining work.
	                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                    } else {
	                      resolve(returnValue);
	                    }
	                  }, function (error) {
	                    // The callback threw an error.
	                    popActScope(prevActScopeDepth);
	                    reject(error);
	                  });
	                }
	              };
	              {
	                if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
	                  // eslint-disable-next-line no-undef
	                  Promise.resolve().then(function () {}).then(function () {
	                    if (!wasAwaited) {
	                      didWarnNoAwaitAct = true;
	                      error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
	                    }
	                  });
	                }
	              }
	              return thenable;
	            } else {
	              var returnValue = result; // The callback is not an async function. Exit the current scope
	              // immediately, without awaiting.

	              popActScope(prevActScopeDepth);
	              if (actScopeDepth === 0) {
	                // Exiting the outermost act scope. Flush the queue.
	                var _queue = ReactCurrentActQueue.current;
	                if (_queue !== null) {
	                  flushActQueue(_queue);
	                  ReactCurrentActQueue.current = null;
	                } // Return a thenable. If the user awaits it, we'll flush again in
	                // case additional work was scheduled by a microtask.

	                var _thenable = {
	                  then: function then(resolve, reject) {
	                    // Confirm we haven't re-entered another `act` scope, in case
	                    // the user does something weird like await the thenable
	                    // multiple times.
	                    if (ReactCurrentActQueue.current === null) {
	                      // Recursively flush the queue until there's no remaining work.
	                      ReactCurrentActQueue.current = [];
	                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                    } else {
	                      resolve(returnValue);
	                    }
	                  }
	                };
	                return _thenable;
	              } else {
	                // Since we're inside a nested `act` scope, the returned thenable
	                // immediately resolves. The outer scope will flush the queue.
	                var _thenable2 = {
	                  then: function then(resolve, reject) {
	                    resolve(returnValue);
	                  }
	                };
	                return _thenable2;
	              }
	            }
	          }
	        }
	        function popActScope(prevActScopeDepth) {
	          {
	            if (prevActScopeDepth !== actScopeDepth - 1) {
	              error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
	            }
	            actScopeDepth = prevActScopeDepth;
	          }
	        }
	        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
	          {
	            var queue = ReactCurrentActQueue.current;
	            if (queue !== null) {
	              try {
	                flushActQueue(queue);
	                enqueueTask(function () {
	                  if (queue.length === 0) {
	                    // No additional work was scheduled. Finish.
	                    ReactCurrentActQueue.current = null;
	                    resolve(returnValue);
	                  } else {
	                    // Keep flushing work until there's none left.
	                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                  }
	                });
	              } catch (error) {
	                reject(error);
	              }
	            } else {
	              resolve(returnValue);
	            }
	          }
	        }
	        var isFlushing = false;
	        function flushActQueue(queue) {
	          {
	            if (!isFlushing) {
	              // Prevent re-entrance.
	              isFlushing = true;
	              var i = 0;
	              try {
	                for (; i < queue.length; i++) {
	                  var callback = queue[i];
	                  do {
	                    callback = callback(true);
	                  } while (callback !== null);
	                }
	                queue.length = 0;
	              } catch (error) {
	                // If something throws, leave the remaining callbacks on the queue.
	                queue = queue.slice(i + 1);
	                throw error;
	              } finally {
	                isFlushing = false;
	              }
	            }
	          }
	        }
	        var createElement$1 = createElementWithValidation;
	        var cloneElement$1 = cloneElementWithValidation;
	        var createFactory = createFactoryWithValidation;
	        var Children = {
	          map: mapChildren,
	          forEach: forEachChildren,
	          count: countChildren,
	          toArray: toArray,
	          only: onlyChild
	        };
	        exports.Children = Children;
	        exports.Component = Component;
	        exports.Fragment = REACT_FRAGMENT_TYPE;
	        exports.Profiler = REACT_PROFILER_TYPE;
	        exports.PureComponent = PureComponent;
	        exports.StrictMode = REACT_STRICT_MODE_TYPE;
	        exports.Suspense = REACT_SUSPENSE_TYPE;
	        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	        exports.cloneElement = cloneElement$1;
	        exports.createContext = createContext;
	        exports.createElement = createElement$1;
	        exports.createFactory = createFactory;
	        exports.createRef = createRef;
	        exports.forwardRef = forwardRef;
	        exports.isValidElement = isValidElement;
	        exports.lazy = lazy;
	        exports.memo = memo;
	        exports.startTransition = startTransition;
	        exports.unstable_act = act;
	        exports.useCallback = useCallback;
	        exports.useContext = useContext;
	        exports.useDebugValue = useDebugValue;
	        exports.useDeferredValue = useDeferredValue;
	        exports.useEffect = useEffect;
	        exports.useId = useId;
	        exports.useImperativeHandle = useImperativeHandle;
	        exports.useInsertionEffect = useInsertionEffect;
	        exports.useLayoutEffect = useLayoutEffect;
	        exports.useMemo = useMemo;
	        exports.useReducer = useReducer;
	        exports.useRef = useRef;
	        exports.useState = useState;
	        exports.useSyncExternalStore = useSyncExternalStore;
	        exports.useTransition = useTransition;
	        exports.version = ReactVersion;
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
	          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	        }
	      })();
	    }
	  })(react_development, react_developmentExports);
	  return react_developmentExports;
	}

	(function (module) {

	  if (process.env.NODE_ENV === 'production') {
	    module.exports = requireReact_production_min();
	  } else {
	    module.exports = requireReact_development();
	  }
	})(react);
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	function TestComponent() {
	    return (React.createElement("div", { style: {
	            height: 300,
	            width: 300,
	            backgroundColor: 'red'
	        } }, "TESTE"));
	}

	var index = { TestComponent };

	return index;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwiLi4vc3JjL2luZGV4LnRzeCIsIi4uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtcbmV4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9O1xuZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjIuMFwiO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjIuMCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdENvbXBvbmVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJ1xuICAgICAgfX1cbiAgICA+VEVTVEU8L2RpdiA+XG4gIClcbn1cbiIsImltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gXCIuL3NyY1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7IFRlc3RDb21wb25lbnQgfTtcbiJdLCJuYW1lcyI6WyJsIiwiU3ltYm9sIiwibiIsInAiLCJxIiwiciIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJpdGVyYXRvciIsIkEiLCJhIiwiQiIsImlzTW91bnRlZCIsImVucXVldWVGb3JjZVVwZGF0ZSIsImVucXVldWVSZXBsYWNlU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJDIiwiT2JqZWN0IiwiYXNzaWduIiwiRCIsIkUiLCJiIiwiZSIsInByb3BzIiwiY29udGV4dCIsInJlZnMiLCJ1cGRhdGVyIiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsInNldFN0YXRlIiwiRXJyb3IiLCJmb3JjZVVwZGF0ZSIsIkYiLCJHIiwiSCIsImNvbnN0cnVjdG9yIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJJIiwiQXJyYXkiLCJpc0FycmF5IiwiSiIsImhhc093blByb3BlcnR5IiwiSyIsImN1cnJlbnQiLCJMIiwia2V5IiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJNIiwiZCIsImMiLCJrIiwiaCIsImNhbGwiLCJnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmIiwibSIsImRlZmF1bHRQcm9wcyIsIiQkdHlwZW9mIiwidHlwZSIsIl9vd25lciIsIk4iLCJPIiwiZXNjYXBlIiwicmVwbGFjZSIsIlAiLCJRIiwidG9TdHJpbmciLCJSIiwicHVzaCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJTdHJpbmciLCJrZXlzIiwiam9pbiIsIlMiLCJUIiwiX3N0YXR1cyIsIl9yZXN1bHQiLCJ0aGVuIiwiVSIsIlYiLCJ0cmFuc2l0aW9uIiwiVyIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyIsIlJlYWN0Q3VycmVudE93bmVyIiwicmVhY3RfcHJvZHVjdGlvbl9taW4iLCJDaGlsZHJlbiIsIm1hcCIsImZvckVhY2giLCJhcHBseSIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsIl9jdXJyZW50VmFsdWUiLCJfY3VycmVudFZhbHVlMiIsIl90aHJlYWRDb3VudCIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJfZGVmYXVsdFZhbHVlIiwiX2dsb2JhbE5hbWUiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJiaW5kIiwiY3JlYXRlUmVmIiwiZm9yd2FyZFJlZiIsInJlbmRlciIsImlzVmFsaWRFbGVtZW50IiwibGF6eSIsIl9wYXlsb2FkIiwiX2luaXQiLCJtZW1vIiwiY29tcGFyZSIsInN0YXJ0VHJhbnNpdGlvbiIsInVuc3RhYmxlX2FjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZURlYnVnVmFsdWUiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwidXNlSWQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwidXNlVHJhbnNpdGlvbiIsInZlcnNpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQiLCJSZWFjdFZlcnNpb24iLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiTUFZQkVfSVRFUkFUT1JfU1lNQk9MIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIm1heWJlSXRlcmF0b3IiLCJSZWFjdEN1cnJlbnRBY3RRdWV1ZSIsImlzQmF0Y2hpbmdMZWdhY3kiLCJkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJjdXJyZW50RXh0cmFTdGFja0ZyYW1lIiwic2V0RXh0cmFTdGFja0ZyYW1lIiwic3RhY2siLCJnZXRDdXJyZW50U3RhY2siLCJnZXRTdGFja0FkZGVuZHVtIiwiaW1wbCIsImVuYWJsZVNjb3BlQVBJIiwiZW5hYmxlQ2FjaGVFbGVtZW50IiwiZW5hYmxlVHJhbnNpdGlvblRyYWNpbmciLCJlbmFibGVMZWdhY3lIaWRkZW4iLCJlbmFibGVEZWJ1Z1RyYWNpbmciLCJSZWFjdFNoYXJlZEludGVybmFscyIsIndhcm4iLCJmb3JtYXQiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJwcmludFdhcm5pbmciLCJlcnJvciIsIl9sZW4yIiwiX2tleTIiLCJsZXZlbCIsImNvbmNhdCIsImFyZ3NXaXRoRm9ybWF0IiwiaXRlbSIsInVuc2hpZnQiLCJGdW5jdGlvbiIsImNvbnNvbGUiLCJkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQiLCJ3YXJuTm9vcCIsInB1YmxpY0luc3RhbmNlIiwiY2FsbGVyTmFtZSIsIl9jb25zdHJ1Y3RvciIsImNvbXBvbmVudE5hbWUiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ3YXJuaW5nS2V5IiwiUmVhY3ROb29wVXBkYXRlUXVldWUiLCJjYWxsYmFjayIsImNvbXBsZXRlU3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJlbXB0eU9iamVjdCIsImZyZWV6ZSIsImRlcHJlY2F0ZWRBUElzIiwicmVwbGFjZVN0YXRlIiwiZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nIiwibWV0aG9kTmFtZSIsImluZm8iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInVuZGVmaW5lZCIsImZuTmFtZSIsIkNvbXBvbmVudER1bW15IiwiUHVyZUNvbXBvbmVudCIsInB1cmVDb21wb25lbnRQcm90b3R5cGUiLCJyZWZPYmplY3QiLCJzZWFsIiwiaXNBcnJheUltcGwiLCJ0eXBlTmFtZSIsImhhc1RvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ3aWxsQ29lcmNpb25UaHJvdyIsInRlc3RTdHJpbmdDb2VyY2lvbiIsImNoZWNrS2V5U3RyaW5nQ29lcmNpb24iLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJnZXRDb21wb25lbnROYW1lRnJvbVR5cGUiLCJ0YWciLCJwcm92aWRlciIsIm91dGVyTmFtZSIsImxhenlDb21wb25lbnQiLCJwYXlsb2FkIiwiaW5pdCIsIlJFU0VSVkVEX1BST1BTIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImNvbmZpZyIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ0tleSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nUmVmIiwid2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkIiwic3RhdGVOb2RlIiwiUmVhY3RFbGVtZW50Iiwic2VsZiIsInNvdXJjZSIsIm93bmVyIiwiZWxlbWVudCIsIl9zdG9yZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInByb3BOYW1lIiwiY2hpbGRyZW5MZW5ndGgiLCJjaGlsZEFycmF5IiwiaSIsImNsb25lQW5kUmVwbGFjZUtleSIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiX3NlbGYiLCJfc291cmNlIiwib2JqZWN0IiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsIm1hdGNoIiwiZGlkV2FybkFib3V0TWFwcyIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsImdldEVsZW1lbnRLZXkiLCJpbmRleCIsIm1hcEludG9BcnJheSIsImFycmF5IiwiZXNjYXBlZFByZWZpeCIsIm5hbWVTb0ZhciIsImludm9rZUNhbGxiYWNrIiwiX2NoaWxkIiwibWFwcGVkQ2hpbGQiLCJjaGlsZEtleSIsImVzY2FwZWRDaGlsZEtleSIsImNoaWxkIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsIml0ZXJhdG9yRm4iLCJpdGVyYWJsZUNoaWxkcmVuIiwiZW50cmllcyIsInN0ZXAiLCJpaSIsImNoaWxkcmVuU3RyaW5nIiwibWFwQ2hpbGRyZW4iLCJmdW5jIiwicmVzdWx0IiwiY291bnRDaGlsZHJlbiIsImZvckVhY2hDaGlsZHJlbiIsImZvckVhY2hGdW5jIiwiZm9yRWFjaENvbnRleHQiLCJvbmx5Q2hpbGQiLCJkZWZhdWx0VmFsdWUiLCJoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyIsImhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyIiwiaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwic2V0IiwiX1Byb3ZpZGVyIiwiX2N1cnJlbnRSZW5kZXJlciIsIl9jdXJyZW50UmVuZGVyZXIyIiwiVW5pbml0aWFsaXplZCIsIlBlbmRpbmciLCJSZXNvbHZlZCIsIlJlamVjdGVkIiwibGF6eUluaXRpYWxpemVyIiwiY3RvciIsInRoZW5hYmxlIiwibW9kdWxlT2JqZWN0IiwicmVzb2x2ZWQiLCJyZWplY3RlZCIsInBlbmRpbmciLCJsYXp5VHlwZSIsInByb3BUeXBlcyIsIm5ld0RlZmF1bHRQcm9wcyIsIm5ld1Byb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwib3duTmFtZSIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXRNb2R1bGVJZCIsInJlc29sdmVEaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRleHQiLCJyZWFsQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJpbml0aWFsQXJnIiwiaW5pdGlhbFZhbHVlIiwiY3JlYXRlIiwiZGVwcyIsImZvcm1hdHRlckZuIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsImRpc2FibGVkRGVwdGgiLCJwcmV2TG9nIiwicHJldkluZm8iLCJwcmV2V2FybiIsInByZXZFcnJvciIsInByZXZHcm91cCIsInByZXZHcm91cENvbGxhcHNlZCIsInByZXZHcm91cEVuZCIsImRpc2FibGVkTG9nIiwiX19yZWFjdERpc2FibGVkTG9nIiwiZGlzYWJsZUxvZ3MiLCJsb2ciLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJyZWVuYWJsZUxvZ3MiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEiLCJwcmVmaXgiLCJkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSIsIm93bmVyRm4iLCJ0cmltIiwicmVlbnRyeSIsImNvbXBvbmVudEZyYW1lQ2FjaGUiLCJQb3NzaWJseVdlYWtNYXAiLCJXZWFrTWFwIiwiTWFwIiwiZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSIsImZuIiwiY29uc3RydWN0IiwiZnJhbWUiLCJjb250cm9sIiwicHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSIsInByZXBhcmVTdGFja1RyYWNlIiwicHJldmlvdXNEaXNwYXRjaGVyIiwiRmFrZSIsIlJlZmxlY3QiLCJzYW1wbGUiLCJzYW1wbGVMaW5lcyIsInNwbGl0IiwiY29udHJvbExpbmVzIiwicyIsIl9mcmFtZSIsImluY2x1ZGVzIiwic3ludGhldGljRnJhbWUiLCJkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUiLCJzaG91bGRDb25zdHJ1Y3QiLCJkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEiLCJzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJoYXMiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciQxIiwiZXJyIiwiZXgiLCJtZXNzYWdlIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5IiwiY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIiwidmFsaWRhdGVkRmFjdG9yeSIsImNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwic2NvcGUiLCJvcHRpb25zIiwicHJldlRyYW5zaXRpb24iLCJjdXJyZW50VHJhbnNpdGlvbiIsIl91cGRhdGVkRmliZXJzIiwiU2V0IiwidXBkYXRlZEZpYmVyc0NvdW50Iiwic2l6ZSIsImNsZWFyIiwiZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwiLCJlbnF1ZXVlVGFza0ltcGwiLCJlbnF1ZXVlVGFzayIsInRhc2siLCJyZXF1aXJlU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwibm9kZVJlcXVpcmUiLCJtb2R1bGUiLCJzZXRJbW1lZGlhdGUiLCJfZXJyIiwiTWVzc2FnZUNoYW5uZWwiLCJjaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwiYWN0U2NvcGVEZXB0aCIsImRpZFdhcm5Ob0F3YWl0QWN0IiwiYWN0IiwicHJldkFjdFNjb3BlRGVwdGgiLCJwcmV2SXNCYXRjaGluZ0xlZ2FjeSIsInF1ZXVlIiwiZmx1c2hBY3RRdWV1ZSIsInBvcEFjdFNjb3BlIiwidGhlbmFibGVSZXN1bHQiLCJ3YXNBd2FpdGVkIiwicmVzb2x2ZSIsInJlamVjdCIsInJldHVyblZhbHVlIiwicmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayIsIlByb21pc2UiLCJfcXVldWUiLCJfdGhlbmFibGUiLCJfdGhlbmFibGUyIiwiaXNGbHVzaGluZyIsImNyZWF0ZUVsZW1lbnQkMSIsImNsb25lRWxlbWVudCQxIiwiY3JlYXRlRmFjdG9yeSIsImV4cG9ydHMiLCJTdXNwZW5zZSIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FTYSxFQUFBLElBQUlBLENBQUMsR0FBQ0MsTUFBTSxDQUFJLEtBQUEsQ0FBQSxDQUFDLGVBQWUsQ0FBQztDQUFDQyxJQUFBQSxDQUFDLEdBQUNELE1BQU0sQ0FBSSxLQUFBLENBQUEsQ0FBQyxjQUFjLENBQUM7Q0FBQ0UsSUFBQUEsQ0FBQyxHQUFDRixNQUFNLENBQUksS0FBQSxDQUFBLENBQUMsZ0JBQWdCLENBQUM7Q0FBQ0csSUFBQUEsQ0FBQyxHQUFDSCxNQUFNLENBQUksS0FBQSxDQUFBLENBQUMsbUJBQW1CLENBQUM7Q0FBQ0ksSUFBQUEsQ0FBQyxHQUFDSixNQUFNLENBQUksS0FBQSxDQUFBLENBQUMsZ0JBQWdCLENBQUM7Q0FBQ0ssSUFBQUEsQ0FBQyxHQUFDTCxNQUFNLENBQUksS0FBQSxDQUFBLENBQUMsZ0JBQWdCLENBQUM7Q0FBQ00sSUFBQUEsQ0FBQyxHQUFDTixNQUFNLENBQUksS0FBQSxDQUFBLENBQUMsZUFBZSxDQUFDO0NBQUNPLElBQUFBLENBQUMsR0FBQ1AsTUFBTSxDQUFJLEtBQUEsQ0FBQSxDQUFDLG1CQUFtQixDQUFDO0NBQUNRLElBQUFBLENBQUMsR0FBQ1IsTUFBTSxDQUFJLEtBQUEsQ0FBQSxDQUFDLGdCQUFnQixDQUFDO0NBQUNTLElBQUFBLENBQUMsR0FBQ1QsTUFBTSxDQUFJLEtBQUEsQ0FBQSxDQUFDLFlBQVksQ0FBQztDQUFDVSxJQUFBQSxDQUFDLEdBQUNWLE1BQU0sQ0FBSSxLQUFBLENBQUEsQ0FBQyxZQUFZLENBQUM7S0FBQ1csQ0FBQyxHQUFDWCxNQUFNLENBQUNZLFFBQVEsQ0FBQTtHQUFDLFNB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
