import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-MI5ATYCP.js";

// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
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
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s5 = sampleLines.length - 1;
              var c3 = controlLines.length - 1;
              while (s5 >= 1 && c3 >= 0 && sampleLines[s5] !== controlLines[c3]) {
                c3--;
              }
              for (; s5 >= 1 && c3 >= 0; s5--, c3--) {
                if (sampleLines[s5] !== controlLines[c3]) {
                  if (s5 !== 1 || c3 !== 1) {
                    do {
                      s5--;
                      c3--;
                      if (c3 < 0 || sampleLines[s5] !== controlLines[c3]) {
                        var _frame = "\n" + sampleLines[s5].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s5 >= 1 && c3 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
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
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a4) {
          return isArrayImpl(a4);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e5) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
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
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
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
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
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
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Buttons/Button/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index11.css";

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/styles.module-mTL-HbmX.mjs
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/styles.css";
var c = "_standard_duzi2_1";
var a = "_active_duzi2_1";
var d = "_accept_duzi2_10";
var t = "_cancel_duzi2_18";
var _ = "_disabled_duzi2_28";
var e = {
  standard: c,
  active: a,
  accept: d,
  cancel: t,
  disabled: _
};

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Buttons/Button/index.js
var m = "_Button_1med1_1";
var u = {
  Button: m
};
function B(a4) {
  const { className: n3 = "", children: o5, isActive: e5 = false, variant: c3 = "standard", disabled: t4, ...i2 } = a4, r4 = e5 ? `${e.active}` : "", l2 = t4 ? "disabled" : c3;
  return (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: `${u.Button} ${e[l2]} ${n3} ${r4}`,
      disabled: t4,
      ...i2,
      children: o5
    }
  );
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Buttons/LabeledIconButton/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index8.css";
var $ = "_LabeledIconButton_ad93d_1";
var p = {
  LabeledIconButton: $
};
function I(n3) {
  const {
    className: o5 = "",
    isActive: l2 = false,
    variant: c3 = "standard",
    disabled: t4,
    src: d6,
    alt: i2,
    label: a4,
    ...r4
  } = n3, b2 = l2 ? `${e.active}` : "", m4 = t4 ? "disabled" : c3;
  return (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      className: `${p.LabeledIconButton}  ${e[m4]} ${o5} ${b2}`,
      disabled: t4,
      ...r4,
      children: [
        (0, import_jsx_runtime2.jsx)("img", { src: d6, alt: i2 ?? a4 }),
        (0, import_jsx_runtime2.jsx)("span", { children: a4 })
      ]
    }
  );
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Buttons/IconButton/index.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index9.css";
var u3 = "_ButtonIcon_xo07p_1";
var p2 = {
  ButtonIcon: u3
};
function I2(s5) {
  const {
    className: a4 = "",
    src: c3,
    isActive: e5 = false,
    alt: i2 = "",
    variant: r4 = "standard",
    disabled: t4,
    ...l2
  } = s5, d6 = e5 ? `${e.active}` : "", m4 = t4 ? "disabled" : r4;
  return (0, import_jsx_runtime3.jsx)(
    "button",
    {
      className: `${p2.ButtonIcon} ${e[m4]} ${a4} ${d6}`,
      disabled: t4,
      ...l2,
      children: (0, import_jsx_runtime3.jsx)("img", { src: c3, alt: i2 })
    }
  );
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Buttons/CloseButton/index.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index10.css";
var n = "_CloseButton_aszeo_1";
var e3 = {
  CloseButton: n
};
function u4(t4) {
  const { className: o5 = "" } = t4;
  return (0, import_jsx_runtime4.jsx)("button", { ...t4, className: `${e3.CloseButton} ${o5}`, children: "X" });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Inputs/Input/index.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index7.css";
var c2 = "_Input_146pk_1";
var i = {
  Input: c2
};
function p3(t4) {
  const { className: n3 = "", width: s5 = "90px", height: e5 = "fit-content" } = t4;
  return (0, import_jsx_runtime5.jsx)("input", { style: { ...t4.style, width: s5, height: e5 }, ...t4, className: `${i.Input} ${n3}` });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Inputs/SpacedLabel/index.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index4.css";
var d3 = "_SpacedLabel_1se2m_1";
var b = {
  SpacedLabel: d3
};
function p4({ label: a4, labelProps: c3 = {}, children: l2, ...e5 }) {
  const { className: s5 = "" } = e5;
  return (0, import_jsx_runtime6.jsxs)("div", { ...e5, className: `${b.SpacedLabel} ${s5}`, children: [
    (0, import_jsx_runtime6.jsx)("label", { ...c3, children: a4 }),
    l2
  ] });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Inputs/SpacedLabelInput/index.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function d4({ label: p6, labelProps: t4 = {}, divProps: o5 = {}, ...e5 }) {
  return (0, import_jsx_runtime7.jsx)(p4, { label: p6, labelProps: t4, ...o5, children: (0, import_jsx_runtime7.jsx)(p3, { width: "150px", ...e5 }) });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Inputs/FloatingLabelInput/index.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index6.css";
var r2 = "_FloatingLabelInput_16b2o_1";
var I3 = "_FloatingLabel_16b2o_1";
var $2 = "_float_16b2o_31";
var o2 = {
  FloatingLabelInput: r2,
  FloatingLabel: I3,
  float: $2
};
function B2({ divProps: t4 = {}, label: c3, labelProps: n3 = {}, children: F2, ...l2 }) {
  const { className: i2 = "" } = t4, { className: u7 = "" } = n3, [b2, e5] = (0, import_react.useState)(!!l2.value), g2 = (a4) => {
    l2.onFocus && l2.onFocus(a4), e5(true);
  }, m4 = (a4) => {
    l2.onBlur && l2.onBlur(a4), e5(!!l2.value);
  };
  return (0, import_jsx_runtime8.jsxs)("div", { className: `${o2.FloatingLabelInput} ${i2}`, ...t4, children: [
    (0, import_jsx_runtime8.jsx)("label", { className: `${o2.FloatingLabel} ${b2 ? `${o2.float}` : ""} ${u7}`, ...n3, children: c3 }),
    (0, import_jsx_runtime8.jsx)(p3, { onFocus: g2, onBlur: m4, ...l2 }),
    F2
  ] });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Inputs/FloatingLabelInputWithButton/index.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index5.css";
var p5 = "_FloatingLabelInputButton_127ki_1";
var m2 = {
  FloatingLabelInputButton: p5
};
function I4({
  divProps: o5,
  onClick: l2,
  label: e5,
  labelProps: b2,
  buttonProps: t4 = {},
  ...n3
}) {
  const { className: i2 = "", variant: r4 = "accept" } = t4, u7 = n3.value ? r4 : "disabled";
  return (0, import_jsx_runtime9.jsx)(B2, { ...o5, ...n3, label: e5, children: (0, import_jsx_runtime9.jsx)(
    B,
    {
      ...t4,
      className: `${m2.FloatingLabelInputButton} ${i2}`,
      variant: u7,
      onClick: l2,
      children: "+"
    }
  ) });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Modals/GenericModal/index.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index2.css";

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Modals/GenericModalBase/index.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index3.css";
var m3 = "_ModalWrapper_81vog_1";
var M = "_ModalCard_81vog_13";
var l = {
  ModalWrapper: m3,
  ModalCard: M
};
function N({
  handleClose: r4,
  isOpen: n3,
  children: d6,
  modalAttributes: o5 = {},
  modalWrapperAttributes: c3 = {}
}) {
  if (!n3)
    return (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, {});
  const { className: p6 = "" } = o5, { className: t4 = "" } = c3;
  return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    (0, import_jsx_runtime10.jsx)("div", { role: "presentation", className: `${l.ModalWrapper}${t4}`, onClick: r4 }),
    (0, import_jsx_runtime10.jsxs)("div", { ...o5, className: `${l.ModalCard} ${p6}`, children: [
      (0, import_jsx_runtime10.jsx)(u4, { onClick: r4 }),
      d6
    ] })
  ] });
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Modals/GenericModal/index.js
var $3 = "_ModalContent_xcd3p_1";
var B3 = "_ModalHeader_xcd3p_8";
var g = "_ModalBody_xcd3p_14";
var u6 = "_ModalActionGroup_xcd3p_18";
var d5 = {
  ModalContent: $3,
  ModalHeader: B3,
  ModalBody: g,
  ModalActionGroup: u6
};
function F({
  handleClose: r4,
  isOpen: t4,
  title: a4,
  children: m4,
  actionButtons: e5 = [],
  actionGroupAttributes: n3 = {},
  cardAttributes: l2 = {},
  bodyAttributes: c3 = {},
  modalAttributes: M3,
  modalWrapperAttributes: i2
}) {
  let s5 = a4;
  (typeof a4 == "string" || typeof a4 == "number") && (s5 = (0, import_jsx_runtime11.jsx)("h1", { children: a4 }));
  const { className: p6 = "" } = l2, { className: _3 = "" } = c3, { className: N2 = "" } = n3;
  return (0, import_jsx_runtime11.jsx)(
    N,
    {
      modalWrapperAttributes: i2,
      modalAttributes: M3,
      handleClose: r4,
      isOpen: t4,
      children: (0, import_jsx_runtime11.jsxs)("div", { ...l2, className: `${d5.ModalContent} ${p6}`, children: [
        s5,
        (0, import_jsx_runtime11.jsx)("div", { ...c3, className: `${d5.ModalBody} ${_3}`, children: m4 }),
        e5.length > 0 ? (0, import_jsx_runtime11.jsx)("div", { ...n3, className: `${d5.ModalActionGroup} ${N2}`, children: e5.map(
          (y, f3) => (0, import_jsx_runtime11.jsx)(import_react2.default.Fragment, { children: y }, "actionButton key " + f3)
        ) }) : (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, {})
      ] })
    }
  );
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Modals/GenericAcceptanceModal/index.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
function s4({
  handleClose: c3,
  handleSubmit: i2,
  isOpen: r4,
  title: o5,
  children: e5,
  actionGroupAttributes: a4,
  bodyAttributes: m4,
  modalAttributes: p6,
  cardAttributes: l2,
  modalWrapperAttributes: u7
}) {
  return (0, import_jsx_runtime12.jsx)(
    F,
    {
      handleClose: c3,
      isOpen: r4,
      title: o5,
      actionGroupAttributes: a4,
      bodyAttributes: m4,
      modalAttributes: p6,
      modalWrapperAttributes: u7,
      cardAttributes: l2,
      actionButtons: [
        (0, import_jsx_runtime12.jsx)(B, { variant: "cancel", onClick: c3, children: "Cancel" }),
        (0, import_jsx_runtime12.jsx)(B, { variant: "accept", type: "submit", onClick: i2, children: "Submit" })
      ],
      children: e5
    }
  );
}

// ../../node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/components/Modals/GenericModalWithTabs/index.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());
import "/home/jonkoi/Documents/Github/Jonny_Deates_Website/node_modules/.pnpm/koi-pool@0.0.19_react-dom@18.3.1_react@18.3.1/node_modules/koi-pool/dist/assets/index.css";
var M2 = "_ModalTabs_gtwho_1";
var _2 = "_TabActive_gtwho_9";
var r3 = {
  ModalTabs: M2,
  TabActive: _2
};
function A({ handleClose: a4, isOpen: c3, tabs: t4 = [], modalAttributes: s5, cardAttributes: l2, bodyAttributes: d6, actionGroupAttributes: h2, modalWrapperAttributes: T }) {
  const [n3, b2] = (0, import_react3.useState)(0);
  if (t4.length < 1)
    throw new Error("Not enough tabs specified for GenericModalWithTabs Function Component.");
  const { body: m4, actionButtons: u7 = [] } = t4[n3];
  return (0, import_jsx_runtime13.jsx)(
    F,
    {
      handleClose: a4,
      isOpen: c3,
      actionButtons: u7,
      actionGroupAttributes: h2,
      bodyAttributes: d6,
      cardAttributes: l2,
      modalAttributes: s5,
      modalWrapperAttributes: T,
      title: (0, import_jsx_runtime13.jsx)("div", { className: r3.ModalTabs, children: t4.map((i2, e5) => (0, import_jsx_runtime13.jsx)(
        "h1",
        {
          className: e5 === n3 ? r3.TabActive : "",
          onClick: () => b2(e5),
          style: { width: `${100 / t4.length}%` },
          children: i2.title
        },
        i2.title + e5
      )) }),
      children: m4
    }
  );
}
export {
  B as Button,
  u4 as CloseButton,
  B2 as FloatingLabelInput,
  I4 as FloatingLabelInputWithButton,
  s4 as GenericAcceptanceModal,
  F as GenericModal,
  N as GenericModalBase,
  A as GenericModalWithTabs,
  I2 as IconButton,
  p3 as Input,
  I as LabeledIconButton,
  p4 as SpacedLabel,
  d4 as SpacedLabelInput
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=koi-pool.js.map
