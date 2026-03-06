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
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
/* ─── helpers ─────────────────────────────────────────────────── */ function generateCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
}
/* ─── Reusable OTP Card ───────────────────────────────────────── */ function OtpCard({ title, description, target, onVerified, onDismiss, accentClass = 'border-primary/30 bg-primary/5', iconClass = 'text-primary' }) {
    _s();
    const [code] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(generateCode);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resent, setResent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentCode, setCurrentCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(code);
    const handleResend = ()=>{
        setCurrentCode(generateCode());
        setInput('');
        setError('');
        setResent(true);
        setTimeout(()=>setResent(false), 3000);
    };
    const handleConfirm = ()=>{
        if (input === currentCode) {
            onVerified();
        } else {
            setError('Incorrect code. Please try again.');
            setInput('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mt-3 p-4 rounded-xl border space-y-3 ${accentClass}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        className: `w-4 h-4 ${iconClass}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: "Demo code:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold text-primary tracking-widest",
                        children: currentCode
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "6-digit code",
                        value: input,
                        maxLength: 6,
                        onChange: (e)=>{
                            setInput(e.target.value.replace(/\D/g, ''));
                            setError('');
                        },
                        className: `bg-background border-border text-center tracking-widest font-mono text-lg ${error ? 'border-destructive' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleConfirm,
                        disabled: input.length !== 6,
                        className: "bg-primary hover:bg-primary/90 text-primary-foreground px-5 shrink-0",
                        children: "Confirm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-destructive flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    " ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleResend,
                        className: "flex items-center gap-1.5 text-xs text-primary hover:underline transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            resent ? 'Code resent!' : 'Resend code'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    onDismiss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDismiss,
                        className: "text-xs text-muted-foreground hover:text-foreground underline transition-colors",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(OtpCard, "FW8i3M3Jstk5Oq+Or0Iyb1XobAo=");
_c = OtpCard;
function ProfilePage() {
    _s1();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailVerified, setEmailVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneVerified, setPhoneVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: 'Dr. Mossaab',
        email: 'mossaab@sehati.com',
        phone: '+212 6 12 34 56 78',
        years_Exp: '10+ years',
        location: 'Casablanca, Morocco',
        address: '123 Rue Mohammed V, Quartier des Habous, Casablanca 20000, Morocco',
        lat: '33.5731',
        lng: '-7.5898',
        bio: 'Experienced physician with 10+ years of practice',
        MAD: 350,
        dob: 'January 15, 1985',
        gender: 'Male',
        avatar: 'https://i.pravatar.cc/150?img=5'
    });
    const [profileCopy, setProfileCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile);
    /* change detection */ const phoneChanged = profileCopy.phone.trim() !== profile.phone.trim();
    const emailChanged = profileCopy.email.trim() !== profile.email.trim();
    /* which OTP / option card is open */ const [showPhoneOtp, setShowPhoneOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEmailOtp, setShowEmailOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEmailAsk, setShowEmailAsk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // "verify or skip?" card
    /* whether phone has been verified during this edit session */ const [phoneVerifiedNow, setPhoneVerifiedNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditingSchedule, setIsEditingSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ── Specializations ── */ const [specializations, setSpecializations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'General Medicine',
        'Preventive Care',
        'Chronic Disease Management'
    ]);
    const [isEditingSpecs, setIsEditingSpecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [specsCopy, setSpecsCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newSpec, setNewSpec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const startEditSpecs = ()=>{
        setSpecsCopy([
            ...specializations
        ]);
        setNewSpec('');
        setIsEditingSpecs(true);
    };
    const cancelEditSpecs = ()=>{
        setIsEditingSpecs(false);
        setNewSpec('');
    };
    const saveSpecs = ()=>{
        setSpecializations(specsCopy.filter((s)=>s.trim()));
        setIsEditingSpecs(false);
        setNewSpec('');
    };
    const addSpec = ()=>{
        const v = newSpec.trim();
        if (v && !specsCopy.includes(v)) {
            setSpecsCopy([
                ...specsCopy,
                v
            ]);
        }
        setNewSpec('');
    };
    const [education, setEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            degree: 'MD – General Medicine',
            school: 'Université Mohammed V, Rabat',
            year: '2010'
        },
        {
            id: '2',
            degree: 'DU – Family Medicine',
            school: 'CHU Ibn Rochd, Casablanca',
            year: '2013'
        }
    ]);
    const [isEditingEdu, setIsEditingEdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eduCopy, setEduCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const startEditEdu = ()=>{
        setEduCopy(education.map((e)=>({
                ...e
            })));
        setIsEditingEdu(true);
    };
    const cancelEditEdu = ()=>{
        setIsEditingEdu(false);
    };
    const saveEdu = ()=>{
        setEducation(eduCopy.filter((e)=>e.degree.trim() || e.school.trim()));
        setIsEditingEdu(false);
    };
    const addEduEntry = ()=>{
        setEduCopy([
            ...eduCopy,
            {
                id: Date.now().toString(),
                degree: '',
                school: '',
                year: ''
            }
        ]);
    };
    const updateEduField = (id, field, value)=>{
        setEduCopy(eduCopy.map((e)=>e.id === id ? {
                ...e,
                [field]: value
            } : e));
    };
    const removeEduEntry = (id)=>{
        setEduCopy(eduCopy.filter((e)=>e.id !== id));
    };
    /* Work schedule */ const [workSchedule, setWorkSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        monday: {
            enabled: true,
            start: '09:00',
            end: '17:00'
        },
        tuesday: {
            enabled: true,
            start: '09:00',
            end: '17:00'
        },
        wednesday: {
            enabled: true,
            start: '09:00',
            end: '17:00'
        },
        thursday: {
            enabled: true,
            start: '09:00',
            end: '17:00'
        },
        friday: {
            enabled: true,
            start: '09:00',
            end: '17:00'
        },
        saturday: {
            enabled: false,
            start: '10:00',
            end: '14:00'
        },
        sunday: {
            enabled: false,
            start: '',
            end: ''
        }
    });
    const [scheduleCopy, setScheduleCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(workSchedule);
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    /* ── edit helpers ── */ const startEdit = ()=>{
        setProfileCopy(profile);
        setShowPhoneOtp(false);
        setShowEmailOtp(false);
        setShowEmailAsk(false);
        setPhoneVerifiedNow(false);
        setIsEditing(true);
    };
    const cancelEdit = ()=>{
        setIsEditing(false);
        setShowPhoneOtp(false);
        setShowEmailOtp(false);
        setShowEmailAsk(false);
        setPhoneVerifiedNow(false);
    };
    /* ── Save button logic ── */ const handleSave = ()=>{
        // 1. If phone changed and NOT verified yet → must verify first
        if (phoneChanged && !phoneVerifiedNow) {
            setShowPhoneOtp(true);
            setShowEmailOtp(false);
            setShowEmailAsk(false);
            return;
        }
        // 2. Phone OK. If email changed → ask user to verify or skip
        if (emailChanged && !showEmailAsk && !showEmailOtp) {
            setShowEmailAsk(true);
            return;
        }
        // 3. All good → commit
        commitSave();
    };
    const commitSave = (newEmailVerified)=>{
        setProfile(profileCopy);
        if (phoneChanged) setPhoneVerified(true);
        if (newEmailVerified !== undefined) setEmailVerified(newEmailVerified);
        setIsEditing(false);
        setShowPhoneOtp(false);
        setShowEmailOtp(false);
        setShowEmailAsk(false);
        setPhoneVerifiedNow(false);
    };
    /* phone verified callback */ const onPhoneVerified = ()=>{
        setPhoneVerifiedNow(true);
        setShowPhoneOtp(false);
        // If email also changed, ask about it
        if (emailChanged) {
            setShowEmailAsk(true);
        } else {
            commitSave();
        }
    };
    /* avatar */ const handleAvatarChange = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = ()=>setProfileCopy({
                ...profileCopy,
                avatar: reader.result
            });
        reader.readAsDataURL(file);
    };
    /* whether Save should be visually blocked */ const saveBlocked = phoneChanged && !phoneVerifiedNow;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground",
                        children: "My Profile"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-muted-foreground mt-2",
                        children: "Manage your personal information and professional details."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Personal Information"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startEdit,
                                className: "gap-2 bg-primary hover:bg-primary/90 text-primary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    " Edit Profile"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSave,
                                        disabled: saveBlocked,
                                        title: saveBlocked ? 'Please verify your new phone number first' : '',
                                        className: `gap-2 ${saveBlocked ? 'opacity-50 cursor-not-allowed bg-primary/60' : 'bg-primary hover:bg-primary/90'} text-primary-foreground`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            " Save"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: cancelEdit,
                                        variant: "outline",
                                        className: "gap-2 border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            " Cancel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "w-24 h-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: isEditing ? profileCopy.avatar : profile.avatar,
                                                alt: profile.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "bg-primary text-primary-foreground text-2xl",
                                                children: "DM"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 cursor-pointer transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleAvatarChange,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 block",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, this),
                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: profileCopy.fullName,
                                                    onChange: (e)=>setProfileCopy({
                                                            ...profileCopy,
                                                            fullName: e.target.value
                                                        }),
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-foreground text-lg",
                                                    children: profile.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 block",
                                                    children: "Years of experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: profileCopy.years_Exp,
                                                    onChange: (e)=>setProfileCopy({
                                                            ...profileCopy,
                                                            years_Exp: e.target.value
                                                        }),
                                                    className: "bg-background border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: "w-fit bg-primary text-primary-foreground",
                                                    children: profile.years_Exp
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 block",
                                                    children: "Date of Birth"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground",
                                                    children: profile.dob
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 block",
                                                    children: "Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground",
                                                    children: profile.gender
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: profileCopy.email,
                                        onChange: (e)=>{
                                            setProfileCopy({
                                                ...profileCopy,
                                                email: e.target.value
                                            });
                                            setShowEmailAsk(false);
                                            setShowEmailOtp(false);
                                        },
                                        className: "bg-background border-border"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground font-medium",
                                        children: profile.email
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: `w-fit text-xs gap-1 ${emailVerified ? 'border-green-500/50 text-green-500' : 'border-orange-500/50 text-orange-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-2 h-2 rounded-full ${emailVerified ? 'bg-green-500' : 'bg-orange-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            emailVerified ? 'Verified' : 'Unverified'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    showEmailAsk && !showEmailOtp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 p-4 rounded-xl border border-orange-500/30 bg-orange-500/5 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                        className: "w-4 h-4 text-orange-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: "Verify your email?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "Your new email ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-foreground",
                                                        children: profileCopy.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 34
                                                    }, this),
                                                    " is not verified. Would you like to verify it now?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        onClick: ()=>{
                                                            setShowEmailAsk(false);
                                                            setShowEmailOtp(true);
                                                        },
                                                        className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Verify Email"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: ()=>commitSave(false),
                                                        className: "border-border text-muted-foreground",
                                                        children: "Leave Unverified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    showEmailOtp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OtpCard, {
                                        title: "Confirm your email",
                                        description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Enter the code sent to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: isEditing ? profileCopy.email : profile.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 55
                                                }, void 0),
                                                "."
                                            ]
                                        }, void 0, true),
                                        target: isEditing ? profileCopy.email : profile.email,
                                        onVerified: ()=>{
                                            if (isEditing) {
                                                commitSave(true);
                                            } else {
                                                setEmailVerified(true);
                                                setShowEmailOtp(false);
                                            }
                                        },
                                        onDismiss: ()=>{
                                            setShowEmailOtp(false);
                                            if (isEditing) setShowEmailAsk(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    !isEditing && !emailVerified && !showEmailOtp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowEmailOtp(true),
                                        className: "flex items-center gap-1.5 text-xs text-primary hover:underline mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            " Verify now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 451,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: profileCopy.phone,
                                        onChange: (e)=>{
                                            setProfileCopy({
                                                ...profileCopy,
                                                phone: e.target.value
                                            });
                                            setPhoneVerifiedNow(false);
                                            setShowPhoneOtp(false);
                                        },
                                        className: `bg-background border-border ${phoneChanged && !phoneVerifiedNow ? 'border-orange-500/60' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground font-medium",
                                        children: profile.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: `w-fit text-xs gap-1 ${!phoneChanged && phoneVerified || phoneVerifiedNow ? 'border-green-500/50 text-green-500' : 'border-orange-500/50 text-orange-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-2 h-2 rounded-full ${!phoneChanged && phoneVerified || phoneVerifiedNow ? 'bg-green-500' : 'bg-orange-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            !phoneChanged && phoneVerified || phoneVerifiedNow ? 'Verified' : 'Unverified — required to save'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    showPhoneOtp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OtpCard, {
                                        title: "Verify your new number",
                                        description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Enter the code sent to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: profileCopy.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 55
                                                }, void 0),
                                                "."
                                            ]
                                        }, void 0, true),
                                        target: profileCopy.phone,
                                        onVerified: onPhoneVerified,
                                        onDismiss: ()=>setShowPhoneOtp(false)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this),
                                    isEditing && phoneChanged && !phoneVerifiedNow && !showPhoneOtp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPhoneOtp(true),
                                        className: "flex items-center gap-1.5 text-xs text-primary hover:underline mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this),
                                            " Verify new number"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold",
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-muted-foreground mb-1 block",
                                                children: "City / Region"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: profileCopy.location,
                                                onChange: (e)=>setProfileCopy({
                                                        ...profileCopy,
                                                        location: e.target.value
                                                    }),
                                                className: "bg-background border-border",
                                                placeholder: "e.g. Casablanca, Morocco"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-muted-foreground mb-1 block",
                                                children: "Full Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: profileCopy.address,
                                                onChange: (e)=>setProfileCopy({
                                                        ...profileCopy,
                                                        address: e.target.value
                                                    }),
                                                className: "bg-background border-border",
                                                placeholder: "e.g. 123 Rue Mohammed V, Casablanca 20000"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-muted-foreground mb-1 block",
                                                        children: "Latitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: profileCopy.lat,
                                                        onChange: (e)=>setProfileCopy({
                                                                ...profileCopy,
                                                                lat: e.target.value
                                                            }),
                                                        className: "bg-background border-border",
                                                        placeholder: "e.g. 33.5731"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-muted-foreground mb-1 block",
                                                        children: "Longitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: profileCopy.lng,
                                                        onChange: (e)=>setProfileCopy({
                                                                ...profileCopy,
                                                                lng: e.target.value
                                                            }),
                                                        className: "bg-background border-border",
                                                        placeholder: "e.g. -7.5898"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    profileCopy.lat && profileCopy.lng && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://www.google.com/maps?q=${profileCopy.lat},${profileCopy.lng}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-1.5 text-xs text-primary hover:underline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 19
                                            }, this),
                                            "Preview on Google Maps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground font-medium",
                                        children: profile.location
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    profile.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: profile.address
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this),
                                    profile.lat && profile.lng ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://www.google.com/maps?q=${profile.lat},${profile.lng}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors border border-primary/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 19
                                            }, this),
                                            "Open in Google Maps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 17
                                    }, this) : profile.address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://www.google.com/maps/search/${encodeURIComponent(profile.address)}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors border border-primary/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this),
                                            "Open in Google Maps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-semibold text-muted-foreground block",
                                children: "Professional Bio"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                value: profileCopy.bio,
                                onChange: (e)=>setProfileCopy({
                                        ...profileCopy,
                                        bio: e.target.value
                                    }),
                                className: "bg-background border-border resize-none",
                                rows: 4
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground",
                                children: profile.bio
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 599,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-semibold text-muted-foreground block",
                                children: "MAD"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                value: profileCopy.MAD.toString(),
                                onChange: (e)=>setProfileCopy({
                                        ...profileCopy,
                                        MAD: Number(e.target.value) || 0
                                    }),
                                className: "bg-background border-border"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 606,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground",
                                children: profile.MAD
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 607,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Work Schedule"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 614,
                                columnNumber: 11
                            }, this),
                            !isEditingSchedule ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setScheduleCopy({
                                        ...workSchedule
                                    });
                                    setIsEditingSchedule(true);
                                },
                                className: "gap-2 bg-primary hover:bg-primary/90 text-primary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    " Edit Schedule"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setIsEditingSchedule(false);
                                        },
                                        className: "gap-2 bg-primary hover:bg-primary/90 text-primary-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this),
                                            " Save"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setWorkSchedule(scheduleCopy);
                                            setIsEditingSchedule(false);
                                        },
                                        variant: "outline",
                                        className: "gap-2 border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 17
                                            }, this),
                                            " Cancel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: days.map((day)=>{
                            const key = day.toLowerCase();
                            const isWeekend = key === "saturday" || key === "sunday";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-xl border transition-all ${workSchedule[key].enabled ? "bg-primary/5 border-primary/20" : "bg-background border-border opacity-60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-3 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !isEditingSchedule,
                                                onClick: ()=>setWorkSchedule({
                                                        ...workSchedule,
                                                        [key]: {
                                                            ...workSchedule[key],
                                                            enabled: !workSchedule[key].enabled
                                                        }
                                                    }),
                                                className: `relative w-10 h-6 rounded-full transition-colors shrink-0 ${workSchedule[key].enabled ? "bg-primary" : "bg-border"} ${!isEditingSchedule ? "cursor-default" : "cursor-pointer"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${workSchedule[key].enabled ? "left-5" : "left-1"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-semibold text-sm ${workSchedule[key].enabled ? "text-foreground" : "text-muted-foreground"}`,
                                                    children: [
                                                        day,
                                                        isWeekend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1.5 text-xs font-normal text-muted-foreground",
                                                            children: "Weekend"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                            lineNumber: 670,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${workSchedule[key].enabled ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`,
                                                children: workSchedule[key].enabled ? "Working" : "Off"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    workSchedule[key].enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 px-3 pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "time",
                                                value: workSchedule[key].start,
                                                onChange: (e)=>setWorkSchedule({
                                                        ...workSchedule,
                                                        [key]: {
                                                            ...workSchedule[key],
                                                            start: e.target.value
                                                        }
                                                    }),
                                                disabled: !isEditingSchedule,
                                                className: "bg-background border-border flex-1 min-w-0 text-sm h-9"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground font-medium text-sm shrink-0",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 697,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "time",
                                                value: workSchedule[key].end,
                                                onChange: (e)=>setWorkSchedule({
                                                        ...workSchedule,
                                                        [key]: {
                                                            ...workSchedule[key],
                                                            end: e.target.value
                                                        }
                                                    }),
                                                disabled: !isEditingSchedule,
                                                className: "bg-background border-border flex-1 min-w-0 text-sm h-9"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 687,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, day, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 635,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 719,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl md:text-2xl font-bold text-foreground",
                                        children: "Specializations"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 718,
                                columnNumber: 11
                            }, this),
                            !isEditingSpecs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startEditSpecs,
                                variant: "outline",
                                className: "gap-2 border-border",
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 726,
                                        columnNumber: 15
                                    }, this),
                                    " Edit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 725,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: saveSpecs,
                                        size: "sm",
                                        className: "gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this),
                                            " Save"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: cancelEditSpecs,
                                        size: "sm",
                                        variant: "outline",
                                        className: "gap-1.5 border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 734,
                                                columnNumber: 17
                                            }, this),
                                            " Cancel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 733,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, this),
                    !isEditingSpecs ? specializations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: specializations.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1.5 bg-primary/8 text-primary text-sm font-medium rounded-xl border border-primary/20",
                                children: spec
                            }, spec, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 744,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 742,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground italic",
                        children: "No specializations added yet."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 750,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 min-h-[40px]",
                                children: [
                                    specsCopy.map((spec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5 px-3 py-1.5 bg-primary/8 text-primary text-sm font-medium rounded-xl border border-primary/20",
                                            children: [
                                                spec,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSpecsCopy(specsCopy.filter((_, idx)=>idx !== i)),
                                                    className: "text-primary/60 hover:text-destructive transition-colors ml-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 756,
                                            columnNumber: 17
                                        }, this)),
                                    specsCopy.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground italic self-center",
                                        children: "No specializations yet — add some below."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: newSpec,
                                        onChange: (e)=>setNewSpec(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                addSpec();
                                            }
                                        },
                                        placeholder: "e.g. Cardiology, Pediatrics...",
                                        className: "bg-background border-border flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 771,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: addSpec,
                                        disabled: !newSpec.trim(),
                                        size: "sm",
                                        className: "gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 17
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 770,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Press Enter or click Add to add a specialization."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 787,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 716,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card border-border p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 797,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl md:text-2xl font-bold text-foreground",
                                        children: "Education"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 799,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            !isEditingEdu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startEditEdu,
                                variant: "outline",
                                className: "gap-2 border-border",
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    " Edit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 802,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: saveEdu,
                                        size: "sm",
                                        className: "gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 808,
                                                columnNumber: 17
                                            }, this),
                                            " Save"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: cancelEditEdu,
                                        size: "sm",
                                        variant: "outline",
                                        className: "gap-1.5 border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 811,
                                                columnNumber: 17
                                            }, this),
                                            " Cancel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 810,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 806,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 794,
                        columnNumber: 9
                    }, this),
                    !isEditingEdu ? education.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: education.map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-primary mt-2 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: edu.degree || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 824,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    edu.school,
                                                    edu.year ? ` · ${edu.year}` : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                lineNumber: 825,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, edu.id, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 821,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 819,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground italic",
                        children: "No education entries added yet."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 831,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            eduCopy.map((edu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl border border-border bg-background space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                    children: [
                                                        "Degree ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeEduEntry(edu.id),
                                                    className: "text-muted-foreground hover:text-destructive transition-colors p-1 rounded-lg hover:bg-destructive/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground mb-1.5 block",
                                                    children: "Diploma / Degree Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: edu.degree,
                                                    onChange: (e)=>updateEduField(edu.id, 'degree', e.target.value),
                                                    placeholder: "e.g. MD – Cardiology, MSc Public Health...",
                                                    className: "bg-card border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground mb-1.5 block",
                                                    children: "University / Institution"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: edu.school,
                                                    onChange: (e)=>updateEduField(edu.id, 'school', e.target.value),
                                                    placeholder: "e.g. Université Mohammed V, Rabat",
                                                    className: "bg-card border-border"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 855,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-muted-foreground mb-1.5 block",
                                                    children: "Year of Graduation"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: edu.year,
                                                    onChange: (e)=>updateEduField(edu.id, 'year', e.target.value),
                                                    placeholder: "e.g. 2015",
                                                    maxLength: 4,
                                                    className: "bg-card border-border w-32"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                            lineNumber: 864,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, edu.id, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                    lineNumber: 836,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addEduEntry,
                                className: "w-full py-3 rounded-xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                        lineNumber: 880,
                                        columnNumber: 15
                                    }, this),
                                    "Add another diploma"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                                lineNumber: 876,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                        lineNumber: 834,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/app/doctor/profile/page.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
_s1(ProfilePage, "/MAxAU343h5yAwWFgNGEFegB6cw=");
_c1 = ProfilePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "OtpCard");
__turbopack_context__.k.register(_c1, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bureau_Website_sehati_final_v6_sehati_v5_5883635d._.js.map