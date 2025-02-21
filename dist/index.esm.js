import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return twMerge(clsx(inputs));
}

var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ToastPrimitives.Viewport, __assign({ ref: ref, className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className) }, props)));
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground dark:border dark:bg-neutral-800 dark:text-neutral-100",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground dark:border-red-700 dark:bg-red-800 dark:text-red-200",
            success: "border-green-500 bg-green-100 text-green-900 dark:border-green-700 dark:bg-green-800 dark:text-green-100",
            warning: "border-yellow-500 bg-yellow-100 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-700 dark:text-yellow-100",
            info: "border-blue-500 bg-blue-100 text-blue-900 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
var Toast = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return React.createElement(ToastPrimitives.Root, __assign({ ref: ref, className: cn(toastVariants({ variant: variant }), className) }, props));
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ToastPrimitives.Action, __assign({ ref: ref, className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className) }, props)));
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ToastPrimitives.Close, __assign({ ref: ref, className: cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "" }, props),
        React.createElement(X, { className: "h-4 w-4" })));
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ToastPrimitives.Title, __assign({ ref: ref, className: cn("text-sm font-semibold", className) }, props)));
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ToastPrimitives.Description, __assign({ ref: ref, className: cn("text-sm opacity-90", className) }, props)));
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

var TOAST_LIMIT = 5;
var TOAST_REMOVE_DELAY = 1000000;
var count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
var toastTimeouts = new Map();
var addToRemoveQueue = function (toastId) {
    if (toastTimeouts.has(toastId)) {
        return;
    }
    var timeout = setTimeout(function () {
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId,
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ADD_TOAST":
            return __assign(__assign({}, state), { toasts: __spreadArray([action.toast], state.toasts, true).slice(0, TOAST_LIMIT) });
        case "UPDATE_TOAST":
            return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) { return (t.id === action.toast.id ? __assign(__assign({}, t), action.toast) : t); }) });
        case "DISMISS_TOAST": {
            var toastId_1 = action.toastId;
            if (toastId_1) {
                addToRemoveQueue(toastId_1);
            }
            else {
                state.toasts.forEach(function (toast) {
                    addToRemoveQueue(toast.id);
                });
            }
            return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) {
                    return t.id === toastId_1 || toastId_1 === undefined
                        ? __assign(__assign({}, t), { open: false }) : t;
                }) });
        }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return __assign(__assign({}, state), { toasts: [] });
            }
            return __assign(__assign({}, state), { toasts: state.toasts.filter(function (t) { return t.id !== action.toastId; }) });
    }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach(function (listener) {
        listener(memoryState);
    });
}
function toast(_a) {
    _a.titleClassName; _a.descriptionClassName; var props = __rest(_a, ["titleClassName", "descriptionClassName"]);
    var id = genId();
    var update = function (props) {
        return dispatch({
            type: "UPDATE_TOAST",
            toast: __assign(__assign({}, props), { id: id }),
        });
    };
    var dismiss = function () { return dispatch({ type: "DISMISS_TOAST", toastId: id }); };
    dispatch({
        type: "ADD_TOAST",
        toast: __assign(__assign({}, props), { id: id, open: true, onOpenChange: function (open) {
                if (!open)
                    dismiss();
            } }),
    });
    return {
        id: id,
        dismiss: dismiss,
        update: update,
    };
}
function useToast() {
    var _a = React.useState(memoryState), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        listeners.push(setState);
        return function () {
            var index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);
    return __assign(__assign({}, state), { toast: toast, dismiss: function (toastId) { return dispatch({ type: "DISMISS_TOAST", toastId: toastId }); } });
}

function Toaster() {
    var toasts = useToast().toasts;
    return (React.createElement(ToastProvider, null,
        toasts.map(function (_a) {
            var id = _a.id, title = _a.title, description = _a.description, action = _a.action, icon = _a.icon, props = __rest(_a, ["id", "title", "description", "action", "icon"]);
            return (React.createElement(Toast, __assign({ key: id }, props),
                React.createElement("div", { className: "flex items-start" },
                    icon && React.createElement("div", { className: "mr-3 mt-1" }, icon),
                    React.createElement("div", { className: "grid gap-1" },
                        title && React.createElement(ToastTitle, null, title),
                        description && React.createElement(ToastDescription, null, description))),
                action,
                React.createElement(ToastClose, null)));
        }),
        React.createElement(ToastViewport, null)));
}

export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, useToast };
//# sourceMappingURL=index.esm.js.map
