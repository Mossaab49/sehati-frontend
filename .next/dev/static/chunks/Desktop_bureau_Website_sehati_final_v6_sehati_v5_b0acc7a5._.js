(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex size-8 shrink-0 overflow-hidden rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('aspect-square size-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted flex size-full items-center justify-center rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)");
;
;
;
function StatsCards({ appointments }) {
    const today = new Date().toDateString();
    const todayAppointments = appointments.filter(()=>true); // In real app, filter by date
    const stats = [
        {
            label: 'Today\'s Appointments',
            value: todayAppointments.length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            color: 'text-blue-400',
            bgColor: 'bg-blue-400/10'
        },
        {
            label: 'Pending',
            value: todayAppointments.filter((a)=>a.status === 'waiting').length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-400/10'
        },
        {
            label: 'Completed',
            value: todayAppointments.filter((a)=>a.status === 'completed').length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            color: 'text-primary',
            bgColor: 'bg-primary/10'
        },
        {
            label: 'Absent',
            value: todayAppointments.filter((a)=>a.status === 'absent').length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
            color: 'text-destructive',
            bgColor: 'bg-destructive/10'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",
        children: stats.map((stat, index)=>{
            const Icon = stat.icon;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-4 md:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl md:text-3xl font-bold text-foreground",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-2 md:p-3 rounded-lg ${stat.bgColor}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `w-5 h-5 md:w-6 md:h-6 ${stat.color}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this)
            }, index, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = StatsCards;
var _c;
__turbopack_context__.k.register(_c, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarWidget",
    ()=>CalendarWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CalendarWidget({ appointments, className, selectedDate = null, onDateSelect }) {
    _s();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarWidget.useEffect": ()=>{
            setMounted(true);
        }
    }["CalendarWidget.useEffect"], []);
    // Build a map: day -> list of appointments
    const appointmentsByDay = appointments.reduce((acc, apt)=>{
        if (apt.day) {
            acc[apt.day] = acc[apt.day] ? [
                ...acc[apt.day],
                apt
            ] : [
                apt
            ];
        }
        return acc;
    }, {});
    const getDaysInMonth = (date)=>new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getFirstDayOfMonth = (date)=>new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    for(let i = 0; i < firstDay; i++)days.push(null);
    for(let i = 1; i <= daysInMonth; i++)days.push(i);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const today = new Date();
    const isToday = (day)=>!!day && day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
    const previousMonth = ()=>setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    const nextMonth = ()=>setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    const selectedDayAppointments = selectedDate ? appointmentsByDay[selectedDate] ?? [] : [];
    const statusColor = (status)=>{
        if (status === 'completed') return 'bg-primary/20 text-primary';
        if (status === 'absent') return 'bg-destructive/20 text-destructive';
        return 'bg-yellow-500/20 text-yellow-600';
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card border-border p-6', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-foreground",
                            children: [
                                monthNames[currentDate.getMonth()],
                                " ",
                                currentDate.getFullYear()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: previousMonth,
                                    className: "border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: nextMonth,
                                    className: "border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-7 gap-1 mb-1",
                    children: [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat'
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-xs font-semibold text-muted-foreground py-1",
                            children: d
                        }, d, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-7 gap-1",
                    children: days.map((day, index)=>{
                        const hasApts = day !== null && !!appointmentsByDay[day];
                        const isSelected = day !== null && selectedDate === day;
                        const isTodayDay = isToday(day);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-square",
                            children: day ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDateSelect?.(day),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full h-full rounded-lg text-sm font-medium transition-all relative flex items-center justify-center', isSelected ? 'bg-primary text-primary-foreground shadow-md' : hasApts ? 'bg-primary/15 text-primary hover:bg-primary/25 border border-primary/40' : isTodayDay ? 'border-2 border-primary/60 text-foreground hover:bg-accent' : 'text-foreground hover:bg-accent'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: day
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, this),
                                    isTodayDay && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                        lineNumber: 138,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                lineNumber: 123,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                lineNumber: 142,
                                columnNumber: 19
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 pt-4 border-t border-border",
                    children: selectedDate === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground text-center",
                        children: [
                            appointments.length,
                            " appointment",
                            appointments.length !== 1 ? 's' : '',
                            " this month — click a day to view"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this) : selectedDayAppointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-foreground",
                                children: "No appointments"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: [
                                    "Nothing scheduled for day ",
                                    selectedDate,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3",
                                children: [
                                    selectedDayAppointments.length,
                                    " appointment",
                                    selectedDayAppointments.length !== 1 ? 's' : '',
                                    " — day ",
                                    selectedDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            selectedDayAppointments.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-background border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground truncate",
                                                    children: apt.patientName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                apt.specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground truncate",
                                                    children: apt.specialty
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground shrink-0",
                                            children: apt.time
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs font-semibold px-2 py-0.5 rounded-full shrink-0', statusColor(apt.status)),
                                            children: apt.status === 'completed' ? 'Done' : apt.status === 'absent' ? 'Absent' : 'Waiting'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, apt.id, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CalendarWidget, "26PAGM0AqHg69WgpQyfF/7nPBNI=");
_c = CalendarWidget;
var _c;
__turbopack_context__.k.register(_c, "CalendarWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PatientProfileModal",
    ()=>PatientProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
;
;
const MOCK_PATIENT_DATA = {
    dateOfBirth: 'May 12, 1985',
    gender: 'Female',
    phone: '+1 (555) 123-4567',
    bloodType: 'O+',
    allergies: [
        'Penicillin',
        'Shellfish'
    ],
    medications: [
        'Metformin 500mg daily',
        'Lisinopril 10mg daily'
    ],
    conditions: [
        'Type 2 Diabetes',
        'Hypertension'
    ]
};
function PatientProfileModal({ patient, isOpen, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl bg-card border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-foreground",
                        children: "Patient Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "w-16 h-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: patient.avatar,
                                                    alt: patient.patientName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    className: "bg-primary text-primary-foreground text-lg",
                                                    children: patient.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-foreground",
                                                    children: patient.patientName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: patient.specialty
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 bg-background p-4 rounded-lg border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: "Date of Birth"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: MOCK_PATIENT_DATA.dateOfBirth
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: "Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: MOCK_PATIENT_DATA.gender
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: MOCK_PATIENT_DATA.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-foreground",
                                    children: "Medical Information"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-background p-4 rounded-lg border border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-2",
                                                    children: "Blood Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: "bg-primary text-primary-foreground",
                                                    children: MOCK_PATIENT_DATA.bloodType
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-background p-4 rounded-lg border border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-2",
                                                    children: "Allergies"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: MOCK_PATIENT_DATA.allergies.map((allergy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "border-destructive text-destructive",
                                                            children: allergy
                                                        }, allergy, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-background p-4 rounded-lg border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mb-3",
                                            children: "Chronic Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: MOCK_PATIENT_DATA.conditions.map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "border-yellow-500/50 text-yellow-500",
                                                    children: condition
                                                }, condition, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-background p-4 rounded-lg border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mb-3",
                                            children: "Current Medications"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: MOCK_PATIENT_DATA.medications.map((medication)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-primary rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        medication
                                                    ]
                                                }, medication, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = PatientProfileModal;
var _c;
__turbopack_context__.k.register(_c, "PatientProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrescriptionModal",
    ()=>PrescriptionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function PrescriptionModal({ patient, isOpen, onClose }) {
    _s();
    const [medications, setMedications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: 'Metformin',
            dosage: '500mg',
            instructions: 'Twice daily with meals',
            duration: '30 days'
        }
    ]);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentMedication, setCurrentMedication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSigned, setIsSigned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('draft');
    const handleAddMedication = ()=>{
        setCurrentMedication({
            name: '',
            dosage: '',
            instructions: '',
            duration: ''
        });
    };
    const handleSaveMedication = ()=>{
        if (currentMedication) {
            if (medications.some((m)=>m.name === currentMedication.name)) {
                setMedications(medications.map((m)=>m.name === currentMedication.name ? currentMedication : m));
            } else {
                setMedications([
                    ...medications,
                    currentMedication
                ]);
            }
            setCurrentMedication(null);
        }
    };
    const handleRemoveMedication = (index)=>{
        setMedications(medications.filter((_, i)=>i !== index));
    };
    const handleSign = ()=>{
        setIsSigned(true);
        setStep('review');
    };
    const handleSend = ()=>{
        setStep('sent');
        setTimeout(()=>{
            onClose();
            setStep('draft');
            setIsSigned(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-foreground",
                        children: "Create Prescription"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                step === 'sent' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-12 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-6 h-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-foreground",
                            children: "Prescription Sent"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm",
                            children: [
                                "The prescription has been sent to ",
                                patient.patientName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-4 bg-background rounded-lg border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: patient.avatar,
                                            alt: patient.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-primary text-primary-foreground",
                                            children: patient.initials
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-foreground",
                                            children: patient.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Patient ID: #PAT-2024-001"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-foreground font-semibold",
                                    children: "Medications"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: medications.map((med, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-background border-border p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-foreground",
                                                                        children: med.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            "Dosage: ",
                                                                            med.dosage
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                onClick: ()=>handleRemoveMedication(index),
                                                                className: "text-destructive hover:bg-destructive/10",
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "Instructions: ",
                                                            med.instructions
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "Duration: ",
                                                            med.duration
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                currentMedication ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-background border-border p-4 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Medication name",
                                            value: currentMedication.name,
                                            onChange: (e)=>setCurrentMedication({
                                                    ...currentMedication,
                                                    name: e.target.value
                                                }),
                                            className: "bg-card border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Dosage (e.g., 500mg)",
                                            value: currentMedication.dosage,
                                            onChange: (e)=>setCurrentMedication({
                                                    ...currentMedication,
                                                    dosage: e.target.value
                                                }),
                                            className: "bg-card border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            placeholder: "Instructions for use",
                                            value: currentMedication.instructions,
                                            onChange: (e)=>setCurrentMedication({
                                                    ...currentMedication,
                                                    instructions: e.target.value
                                                }),
                                            className: "bg-card border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Duration (e.g., 30 days)",
                                            value: currentMedication.duration,
                                            onChange: (e)=>setCurrentMedication({
                                                    ...currentMedication,
                                                    duration: e.target.value
                                                }),
                                            className: "bg-card border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handleSaveMedication,
                                                    className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Save Medication"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>setCurrentMedication(null),
                                                    className: "border-border",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleAddMedication,
                                    variant: "outline",
                                    className: "w-full border-border",
                                    children: "+ Add Medication"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-foreground font-semibold",
                                    children: "Additional Notes"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "Any additional notes for the patient...",
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value),
                                    className: "bg-background border-border min-h-[100px]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        !isSigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background border-2 border-dashed border-border rounded-lg p-8 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                        className: "w-8 h-8 text-muted-foreground mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: 'Click "Sign" below to digitally sign this prescription'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 229,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 226,
                            columnNumber: 15
                        }, this),
                        isSigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary/10 border border-primary rounded-lg p-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-primary rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-primary",
                                    children: "Prescription signed by Dr. Mossaab"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 237,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: !isSigned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSign,
                                        className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this),
                                            "Sign & Review"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: onClose,
                                        className: "border-border flex-1",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 254,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSend,
                                        className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this),
                                            "Send to Patient"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 264,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: onClose,
                                        className: "border-border",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(PrescriptionModal, "xOTjPxmq5tjevWeMSgwLex8ls9Q=");
_c = PrescriptionModal;
var _c;
__turbopack_context__.k.register(_c, "PrescriptionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$stats$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/stats-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/calendar-widget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$patient$2d$profile$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/patient-profile-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$prescription$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/dashboard/prescription-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const today = new Date().getDate();
const safe = (offset)=>{
    const d = today + offset;
    if (d < 1) return today + 5;
    if (d > 28) return today - 5;
    return d;
};
const MOCK_APPOINTMENTS = [
    {
        id: '1',
        patientName: 'Sarah Johnson',
        specialty: 'General Checkup',
        time: '09:00 AM',
        avatar: 'https://i.pravatar.cc/150?img=1',
        initials: 'SJ',
        status: 'waiting',
        day: today
    },
    {
        id: '2',
        patientName: 'Michael Chen',
        specialty: 'Follow-up',
        time: '10:30 AM',
        avatar: 'https://i.pravatar.cc/150?img=2',
        initials: 'MC',
        status: 'waiting',
        day: today
    },
    {
        id: '3',
        patientName: 'Emma Davis',
        specialty: 'Consultation',
        time: '02:00 PM',
        avatar: 'https://i.pravatar.cc/150?img=3',
        initials: 'ED',
        status: 'completed',
        day: safe(3)
    },
    {
        id: '4',
        patientName: 'James Wilson',
        specialty: 'Emergency',
        time: '03:30 PM',
        avatar: 'https://i.pravatar.cc/150?img=4',
        initials: 'JW',
        status: 'absent',
        day: safe(3)
    },
    {
        id: '5',
        patientName: 'Layla Hassan',
        specialty: 'Cardiology',
        time: '11:00 AM',
        avatar: 'https://i.pravatar.cc/150?img=5',
        initials: 'LH',
        status: 'waiting',
        day: safe(7)
    },
    {
        id: '6',
        patientName: 'Omar Benali',
        specialty: 'Dermatology',
        time: '03:00 PM',
        avatar: 'https://i.pravatar.cc/150?img=6',
        initials: 'OB',
        status: 'waiting',
        day: safe(7)
    }
];
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const ALL_FEEDBACKS = [
    {
        name: 'Sarah Johnson',
        stars: 5,
        text: 'Excellent consultation. Dr. Mossaab was very thorough and professional.',
        date: '2 days ago'
    },
    {
        name: 'Michael Chen',
        stars: 4,
        text: 'Great doctor, clear explanations. Very helpful during my appointment.',
        date: '1 week ago'
    },
    {
        name: 'Emma Davis',
        stars: 5,
        text: 'The treatment plan worked wonderfully. Feeling much better now!',
        date: '2 weeks ago'
    },
    {
        name: 'James Wilson',
        stars: 5,
        text: 'Dr. Mossaab is very caring and attentive. Highly recommended!',
        date: '1 month ago'
    },
    {
        name: 'Layla Hassan',
        stars: 5,
        text: 'Very professional and kind. I felt heard and well taken care of throughout.',
        date: '1 month ago'
    },
    {
        name: 'Omar Benali',
        stars: 4,
        text: 'Good diagnosis, clear treatment plan. Would definitely come back.',
        date: '2 months ago'
    }
];
function DashboardPage() {
    _s();
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_APPOINTMENTS);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedAppointments, setSelectedAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPatient, setSelectedPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prescriptionDialogOpen, setPrescriptionDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedForPrescription, setSelectedForPrescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCalendarDate, setSelectedCalendarDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [addDialogOpen, setAddDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAllFeedback, setShowAllFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newApt, setNewApt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        phone: '',
        day: '',
        time: ''
    });
    const filteredAppointments = appointments.filter((apt)=>{
        const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = selectedCalendarDate ? apt.day === selectedCalendarDate : true;
        return matchesSearch && matchesDate;
    });
    const handleSelectAppointment = (id)=>setSelectedAppointments((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    const handleMarkCompleted = ()=>{
        setAppointments((prev)=>prev.map((apt)=>selectedAppointments.includes(apt.id) ? {
                    ...apt,
                    status: 'completed'
                } : apt));
        setSelectedAppointments([]);
    };
    const handleMarkAbsent = ()=>{
        setAppointments((prev)=>prev.map((apt)=>selectedAppointments.includes(apt.id) ? {
                    ...apt,
                    status: 'absent'
                } : apt));
        setSelectedAppointments([]);
    };
    const handlePrescription = (appointment)=>{
        setSelectedForPrescription(appointment);
        setPrescriptionDialogOpen(true);
    };
    const handleAddAppointment = ()=>{
        if (!newApt.firstName || !newApt.lastName || !newApt.phone || !newApt.day || !newApt.time) return;
        const fullName = `${newApt.firstName} ${newApt.lastName}`;
        const initials = `${newApt.firstName[0]}${newApt.lastName[0]}`.toUpperCase();
        setAppointments((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    patientName: fullName,
                    specialty: 'Consultation',
                    time: newApt.time,
                    avatar: '',
                    initials,
                    status: 'waiting',
                    day: parseInt(newApt.day),
                    phone: newApt.phone
                }
            ]);
        setNewApt({
            firstName: '',
            lastName: '',
            phone: '',
            day: '',
            time: ''
        });
        setAddDialogOpen(false);
    };
    const resetNewApt = ()=>{
        setNewApt({
            firstName: '',
            lastName: '',
            phone: '',
            day: '',
            time: ''
        });
        setAddDialogOpen(false);
    };
    const isFormValid = newApt.firstName && newApt.lastName && newApt.phone && newApt.day && newApt.time;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance",
                        children: "Good morning, Dr. Mossaab"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-muted-foreground mt-2",
                        children: "Here is your health dashboard. Stay on top of your appointments and care."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$stats$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
                appointments: appointments
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarWidget"], {
                        appointments: appointments,
                        className: "lg:col-span-1",
                        selectedDate: selectedCalendarDate,
                        onDateSelect: setSelectedCalendarDate
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-card border-border p-4 md:p-6 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg md:text-2xl font-bold text-foreground",
                                            children: selectedCalendarDate ? `Appointments – ${selectedCalendarDate} ${MONTHS[new Date().getMonth()]}` : 'Manage Appointments'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 shrink-0",
                                            children: [
                                                selectedCalendarDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedCalendarDate(null),
                                                    className: "text-xs text-muted-foreground hover:text-foreground underline transition-colors",
                                                    children: "Show all"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setAddDialogOpen(true),
                                                    className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                                    size: "sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: "New "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Appointment"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-3 w-5 h-5 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Search by patient name...",
                                            className: "pl-10 bg-background border-border text-sm md:text-base",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                selectedAppointments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleMarkCompleted,
                                            className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                "Mark Completed (",
                                                selectedAppointments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleMarkAbsent,
                                            variant: "outline",
                                            className: "gap-2 border-destructive text-destructive hover:bg-destructive/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                "Mark Absent (",
                                                selectedAppointments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: filteredAppointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-16 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-7 h-7 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground mb-1",
                                                children: "No appointments"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: selectedCalendarDate ? `There are no appointments scheduled for day ${selectedCalendarDate}.` : 'No appointments found.'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this) : filteredAppointments.map((appointment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                            checked: selectedAppointments.includes(appointment.id),
                                                            onCheckedChange: ()=>handleSelectAppointment(appointment.id)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedPatient(appointment),
                                                            className: "flex items-center gap-3 flex-1 min-w-0 text-left hover:opacity-80 transition-opacity",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                    className: "shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                            src: appointment.avatar,
                                                                            alt: appointment.patientName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                            className: "bg-primary text-primary-foreground",
                                                                            children: appointment.initials
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-foreground text-sm truncate",
                                                                            children: appointment.patientName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground truncate",
                                                                            children: appointment.specialty
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        appointment.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                    className: "w-3 h-3 shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                appointment.phone
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 text-muted-foreground shrink-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: appointment.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${appointment.status === 'completed' ? 'bg-primary/20 text-primary' : appointment.status === 'absent' ? 'bg-destructive/20 text-destructive' : 'bg-yellow-500/20 text-yellow-500'}`,
                                                            children: appointment.status === 'completed' ? 'Done' : appointment.status === 'absent' ? 'Absent' : 'Waiting'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 sm:shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "outline",
                                                            className: "flex-1 sm:flex-none border-primary text-primary hover:bg-primary/10 gap-1.5 text-xs",
                                                            onClick: ()=>handlePrescription(appointment),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Prescription"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/doctor/messages",
                                                            className: "flex-1 sm:flex-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                className: "w-full gap-1.5 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Message"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, appointment.id, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-foreground",
                                children: "Patient Feedback & Reviews"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    ALL_FEEDBACKS.length,
                                    " review",
                                    ALL_FEEDBACKS.length !== 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    ALL_FEEDBACKS.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "💬"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-foreground mb-1",
                                children: "No feedback for now"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Patient reviews will appear here once received."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: (showAllFeedback ? ALL_FEEDBACKS : ALL_FEEDBACKS.slice(0, 4)).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-lg bg-background border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-foreground",
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-0.5",
                                                        children: Array.from({
                                                            length: 5
                                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-base ${i < r.stars ? 'text-primary' : 'text-muted'}`,
                                                                children: "★"
                                                            }, i, false, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    '"',
                                                    r.text,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-3",
                                                children: r.date
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.name, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            ALL_FEEDBACKS.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAllFeedback((v)=>!v),
                                    className: "text-sm text-primary hover:underline font-medium transition-colors",
                                    children: showAllFeedback ? 'Show less' : `Show ${ALL_FEEDBACKS.length - 4} more review${ALL_FEEDBACKS.length - 4 !== 1 ? 's' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: addDialogOpen,
                onOpenChange: setAddDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    "New Appointment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                    children: "First Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "e.g. Ahmed",
                                                    value: newApt.firstName,
                                                    onChange: (e)=>setNewApt((p)=>({
                                                                ...p,
                                                                firstName: e.target.value
                                                            })),
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                    children: "Last Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "e.g. Benali",
                                                    value: newApt.lastName,
                                                    onChange: (e)=>setNewApt((p)=>({
                                                                ...p,
                                                                lastName: e.target.value
                                                            })),
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "+212 6XX XXX XXX",
                                                    value: newApt.phone,
                                                    onChange: (e)=>setNewApt((p)=>({
                                                                ...p,
                                                                phone: e.target.value
                                                            })),
                                                    className: "bg-background border-border pl-9"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                    children: "Day of month"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    min: 1,
                                                    max: 31,
                                                    placeholder: "e.g. 15",
                                                    value: newApt.day,
                                                    onChange: (e)=>setNewApt((p)=>({
                                                                ...p,
                                                                day: e.target.value
                                                            })),
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "time",
                                                    onChange: (e)=>{
                                                        const [h, m] = e.target.value.split(':');
                                                        const hour = parseInt(h);
                                                        const ampm = hour >= 12 ? 'PM' : 'AM';
                                                        const h12 = hour % 12 === 0 ? 12 : hour % 12;
                                                        setNewApt((p)=>({
                                                                ...p,
                                                                time: `${String(h12).padStart(2, '0')}:${m} ${ampm}`
                                                            }));
                                                    },
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: "flex-1 border-border",
                                            onClick: resetNewApt,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground",
                                            onClick: handleAddAppointment,
                                            disabled: !isFormValid,
                                            children: "Save Appointment"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            selectedPatient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$patient$2d$profile$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PatientProfileModal"], {
                patient: selectedPatient,
                isOpen: !!selectedPatient,
                onClose: ()=>setSelectedPatient(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, this),
            selectedForPrescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$dashboard$2f$prescription$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrescriptionModal"], {
                patient: selectedForPrescription,
                isOpen: prescriptionDialogOpen,
                onClose: ()=>{
                    setPrescriptionDialogOpen(false);
                    setSelectedForPrescription(null);
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/dashboard/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "dApE/c+2WZDhxyjPnm5hpja/3u0=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bureau_Website_sehati_final_v6_sehati_v5_b0acc7a5._.js.map