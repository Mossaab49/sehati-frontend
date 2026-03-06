(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple auth helper — uses sessionStorage (demo only)
__turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "logout",
    ()=>logout
]);
function getUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem('sehati_user');
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function logout() {
    if ("TURBOPACK compile-time truthy", 1) {
        sessionStorage.removeItem('sehati_user');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/lang-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Global language store + translations
 * Survives Next.js page navigation (module-level singleton)
 */ __turbopack_context__.s([
    "T",
    ()=>T,
    "langStore",
    ()=>langStore,
    "t",
    ()=>t
]);
let _lang = 'en';
const _listeners = new Set();
const langStore = {
    get: ()=>_lang,
    set: (lang)=>{
        _lang = lang;
        // Update html dir for RTL
        if (typeof document !== 'undefined') {
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
        }
        setTimeout(()=>_listeners.forEach((l)=>l(_lang)), 0);
    },
    subscribe: (fn)=>{
        _listeners.add(fn);
        fn(_lang);
        return ()=>_listeners.delete(fn);
    }
};
const T = {
    en: {
        // Nav
        dashboard: 'Dashboard',
        profile: 'Profile',
        messages: 'Messages',
        notifications: 'Notifications',
        settings: 'Settings',
        logout: 'Log Out',
        // Settings page
        settings_title: 'Settings',
        settings_sub: 'Manage your account preferences and security.',
        appearance: 'Appearance',
        theme: 'Theme',
        theme_sub: 'Select your preferred color mode',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
        language: 'Language',
        language_sub: 'Choose your preferred language',
        security: 'Security',
        current_pwd: 'Current Password',
        new_pwd: 'New Password',
        confirm_pwd: 'Confirm New Password',
        update_pwd: 'Update Password',
        pwd_placeholder_current: 'Enter current password',
        pwd_placeholder_new: 'At least 8 characters',
        pwd_placeholder_confirm: 'Repeat new password',
        pwd_success: 'Password updated successfully!',
        pwd_err_wrong: 'Current password is incorrect.',
        pwd_err_short: 'New password must be at least 8 characters.',
        pwd_err_same: 'New password must be different from your current password.',
        pwd_err_match: 'Passwords do not match.',
        danger_zone: 'Danger Zone',
        danger_sub: 'These actions are irreversible. Please proceed with caution.',
        logout_desc: 'Sign out from your current session',
        delete_acc: 'Delete Account',
        delete_desc: 'Permanently remove your account and all data',
        delete_btn: 'Delete',
        confirm_logout_title: 'Log out?',
        confirm_logout_msg: 'You will be signed out of your account.',
        confirm_delete_title: 'Delete your account?',
        confirm_delete_msg: 'This will permanently delete your account and all associated data. This action cannot be undone.',
        yes_delete: 'Yes, Delete',
        cancel: 'Cancel',
        // Sidebar logout dialog
        logout_confirm_msg: 'You will be signed out of your account.',
        // Common
        save: 'Save',
        edit: 'Edit',
        back: 'Back',
        weak: 'Weak',
        fair: 'Fair',
        good: 'Good',
        strong: 'Strong'
    },
    fr: {
        dashboard: 'Tableau de bord',
        profile: 'Profil',
        messages: 'Messages',
        notifications: 'Notifications',
        settings: 'Paramètres',
        logout: 'Déconnexion',
        settings_title: 'Paramètres',
        settings_sub: 'Gérez vos préférences de compte et votre sécurité.',
        appearance: 'Apparence',
        theme: 'Thème',
        theme_sub: 'Sélectionnez votre mode de couleur préféré',
        light: 'Clair',
        dark: 'Sombre',
        system: 'Système',
        language: 'Langue',
        language_sub: 'Choisissez votre langue préférée',
        security: 'Sécurité',
        current_pwd: 'Mot de passe actuel',
        new_pwd: 'Nouveau mot de passe',
        confirm_pwd: 'Confirmer le mot de passe',
        update_pwd: 'Mettre à jour',
        pwd_placeholder_current: 'Entrez le mot de passe actuel',
        pwd_placeholder_new: 'Au moins 8 caractères',
        pwd_placeholder_confirm: 'Répétez le nouveau mot de passe',
        pwd_success: 'Mot de passe mis à jour avec succès !',
        pwd_err_wrong: 'Le mot de passe actuel est incorrect.',
        pwd_err_short: 'Le nouveau mot de passe doit comporter au moins 8 caractères.',
        pwd_err_same: 'Le nouveau mot de passe doit être différent de l\'actuel.',
        pwd_err_match: 'Les mots de passe ne correspondent pas.',
        danger_zone: 'Zone dangereuse',
        danger_sub: 'Ces actions sont irréversibles. Procédez avec prudence.',
        logout_desc: 'Se déconnecter de la session en cours',
        delete_acc: 'Supprimer le compte',
        delete_desc: 'Supprimer définitivement votre compte et toutes vos données',
        delete_btn: 'Supprimer',
        confirm_logout_title: 'Se déconnecter ?',
        confirm_logout_msg: 'Vous serez déconnecté de votre compte.',
        confirm_delete_title: 'Supprimer votre compte ?',
        confirm_delete_msg: 'Cela supprimera définitivement votre compte et toutes les données associées.',
        yes_delete: 'Oui, supprimer',
        cancel: 'Annuler',
        logout_confirm_msg: 'Vous serez déconnecté de votre compte.',
        save: 'Enregistrer',
        edit: 'Modifier',
        back: 'Retour',
        weak: 'Faible',
        fair: 'Moyen',
        good: 'Bien',
        strong: 'Fort'
    },
    ar: {
        dashboard: 'لوحة التحكم',
        profile: 'الملف الشخصي',
        messages: 'الرسائل',
        notifications: 'الإشعارات',
        settings: 'الإعدادات',
        logout: 'تسجيل الخروج',
        settings_title: 'الإعدادات',
        settings_sub: 'إدارة تفضيلات الحساب والأمان.',
        appearance: 'المظهر',
        theme: 'السمة',
        theme_sub: 'اختر وضع الألوان المفضل',
        light: 'فاتح',
        dark: 'داكن',
        system: 'النظام',
        language: 'اللغة',
        language_sub: 'اختر لغتك المفضلة',
        security: 'الأمان',
        current_pwd: 'كلمة المرور الحالية',
        new_pwd: 'كلمة المرور الجديدة',
        confirm_pwd: 'تأكيد كلمة المرور',
        update_pwd: 'تحديث كلمة المرور',
        pwd_placeholder_current: 'أدخل كلمة المرور الحالية',
        pwd_placeholder_new: '8 أحرف على الأقل',
        pwd_placeholder_confirm: 'كرر كلمة المرور الجديدة',
        pwd_success: 'تم تحديث كلمة المرور بنجاح!',
        pwd_err_wrong: 'كلمة المرور الحالية غير صحيحة.',
        pwd_err_short: 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل.',
        pwd_err_same: 'يجب أن تكون كلمة المرور الجديدة مختلفة عن الحالية.',
        pwd_err_match: 'كلمتا المرور غير متطابقتين.',
        danger_zone: 'المنطقة الخطرة',
        danger_sub: 'هذه الإجراءات لا يمكن التراجع عنها. تابع بحذر.',
        logout_desc: 'تسجيل الخروج من الجلسة الحالية',
        delete_acc: 'حذف الحساب',
        delete_desc: 'إزالة حسابك وجميع بياناتك نهائيًا',
        delete_btn: 'حذف',
        confirm_logout_title: 'تسجيل الخروج؟',
        confirm_logout_msg: 'سيتم تسجيل خروجك من حسابك.',
        confirm_delete_title: 'حذف حسابك؟',
        confirm_delete_msg: 'سيؤدي ذلك إلى حذف حسابك وجميع بياناتك بشكل دائم.',
        yes_delete: 'نعم، احذف',
        cancel: 'إلغاء',
        logout_confirm_msg: 'سيتم تسجيل خروجك من حسابك.',
        save: 'حفظ',
        edit: 'تعديل',
        back: 'رجوع',
        weak: 'ضعيف',
        fair: 'متوسط',
        good: 'جيد',
        strong: 'قوي'
    }
};
function t(lang, key) {
    return T[lang][key] ?? T.en[key] ?? key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/hooks/use-lang.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$lang$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/lang-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLang() {
    _s();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$lang$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["langStore"].get());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLang.useEffect": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$lang$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["langStore"].subscribe(setLang);
        }
    }["useLang.useEffect"], []);
    return {
        lang,
        setLang: (l)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$lang$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["langStore"].set(l),
        t: (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$lang$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, key)
    };
}
_s(useLang, "1Mxj3uJf5TmPA0W5YER5c/azL/U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/unread-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Global singleton store — survives Next.js page navigation
 * because module-level variables persist as long as the JS bundle is loaded.
 */ __turbopack_context__.s([
    "unreadStore",
    ()=>unreadStore
]);
// ── Initial thread data ──────────────────────────────────────────
const INIT_THREADS = {
    '1': [
        {
            id: '1',
            sender: 'patient',
            text: "Hello Doctor, I'm having some concerns about the medication side effects.",
            timestamp: '10:15 AM'
        },
        {
            id: '2',
            sender: 'doctor',
            text: 'Hello Sarah, which side effects are you experiencing? Please describe them in detail.',
            timestamp: '10:20 AM'
        },
        {
            id: '3',
            sender: 'patient',
            text: "I'm having some nausea and slight headaches. Started after I took the first dose.",
            timestamp: '10:25 AM'
        },
        {
            id: '4',
            sender: 'doctor',
            text: 'These are common initial side effects. They usually subside within a few days. Try taking the medication with food.',
            timestamp: '10:28 AM'
        },
        {
            id: '5',
            sender: 'patient',
            text: 'Thank you for the prescription. How long should I take it?',
            timestamp: '10:32 AM'
        }
    ],
    '2': [
        {
            id: '1',
            sender: 'doctor',
            text: 'Hi Michael, your lab results are back from the testing center.',
            timestamp: '2:45 PM'
        },
        {
            id: '2',
            sender: 'patient',
            text: 'Great! What are the results?',
            timestamp: '3:00 PM'
        },
        {
            id: '3',
            sender: 'doctor',
            text: "Your blood work looks good overall. All values are within normal range. Let's schedule a follow-up.",
            timestamp: '3:05 PM'
        },
        {
            id: '4',
            sender: 'patient',
            text: 'Your test results are ready. Please schedule a follow-up.',
            timestamp: '3:10 PM'
        }
    ],
    '3': [
        {
            id: '1',
            sender: 'patient',
            text: "Doctor, I wanted to thank you for the treatment plan. I've been feeling much better.",
            timestamp: '9:30 AM'
        },
        {
            id: '2',
            sender: 'doctor',
            text: "That's wonderful to hear, Emma! I'm glad the new medication is working well for you.",
            timestamp: '9:45 AM'
        },
        {
            id: '3',
            sender: 'patient',
            text: 'I feel much better after starting the new medication.',
            timestamp: '10:00 AM'
        },
        {
            id: '4',
            sender: 'doctor',
            text: 'Continue with the current dosage and schedule another check-up in 4 weeks.',
            timestamp: '10:15 AM'
        }
    ]
};
// ── Singleton state ──────────────────────────────────────────────
let _state = {
    messages: 2,
    notifications: 4,
    threads: INIT_THREADS,
    readConvIds: new Set()
};
const _listeners = new Set();
function _emit() {
    // Defer to avoid "setState during render" React error
    setTimeout(()=>{
        _listeners.forEach((l)=>l(_state));
    }, 0);
}
const unreadStore = {
    /** Get a snapshot (safe to read outside React) */ get: ()=>_state,
    /** Subscribe to all changes. Returns unsubscribe fn. */ subscribe: (fn)=>{
        _listeners.add(fn);
        fn(_state); // fire immediately so caller gets current value
        return ()=>_listeners.delete(fn);
    },
    setNotifications: (n)=>{
        _state = {
            ..._state,
            notifications: n
        };
        _emit();
    },
    /** Call when a conversation is opened — clears its badge */ markConvRead: (convId, remainingUnread)=>{
        const readConvIds = new Set(_state.readConvIds);
        readConvIds.add(convId);
        _state = {
            ..._state,
            readConvIds,
            messages: remainingUnread
        };
        _emit();
    },
    isConvRead: (convId)=>_state.readConvIds.has(convId),
    /** Append a message to a thread — persists across navigations */ addMessage: (convId, msg)=>{
        const prev = _state.threads[convId] ?? [];
        _state = {
            ..._state,
            threads: {
                ..._state.threads,
                [convId]: [
                    ...prev,
                    msg
                ]
            }
        };
        _emit();
    },
    getThread: (convId)=>_state.threads[convId] ?? []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$hooks$2f$use$2d$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/hooks/use-lang.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/unread-store.ts [app-client] (ecmascript)");
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
/* ─── Confirm Dialog ─────────────────────────────────────────── */ function LogoutDialog({ onConfirm, onCancel }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$hooks$2f$use$2d$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card border border-border rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "w-6 h-6 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-foreground",
                            children: t('confirm_logout_title')
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: t('logout_confirm_msg')
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "flex-1 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium",
                            children: t('cancel')
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: "flex-1 py-2 rounded-lg bg-destructive hover:bg-destructive/90 text-white transition-colors text-sm font-medium",
                            children: t('logout')
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(LogoutDialog, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$hooks$2f$use$2d$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = LogoutDialog;
function Sidebar() {
    _s1();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogout, setShowLogout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$hooks$2f$use$2d$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [unread, setUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].get());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].subscribe(setUnread);
            return unsub;
        }
    }["Sidebar.useEffect"], []);
    const menuItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
            label: t('dashboard'),
            href: '/doctor/dashboard',
            badge: null
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            label: t('profile'),
            href: '/doctor/profile',
            badge: null
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            label: t('messages'),
            href: '/doctor/messages',
            badge: unread.messages || null
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            label: t('notifications'),
            href: '/doctor/notifications',
            badge: unread.notifications || null
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
            label: t('settings'),
            href: '/doctor/settings',
            badge: null
        }
    ];
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300', collapsed ? 'w-20' : 'w-52'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-sidebar-border",
                        children: !collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-5 h-5 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-sidebar-foreground",
                                    children: "Sehati"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-5 h-5 text-primary-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 overflow-y-auto p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1",
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                const active = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative group', active ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md' : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-5 h-5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, this),
                                                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 text-left text-sm font-medium",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 27
                                                        }, this),
                                                        item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0",
                                                            children: item.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                collapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -right-1 -top-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-pulse",
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-sidebar-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCollapsed(!collapsed),
                            className: "w-full flex items-center justify-center p-2 rounded-lg text-sidebar-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200",
                            title: collapsed ? 'Expand' : 'Collapse',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-5 h-5 transition-transform duration-200', collapsed && 'rotate-180')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-sidebar-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowLogout(true),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-sidebar-border text-sidebar-foreground hover:border-destructive hover:bg-destructive/10 hover:text-destructive transition-all duration-200', collapsed ? 'justify-center' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: t('logout')
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                                    lineNumber: 156,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            showLogout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutDialog, {
                onConfirm: handleLogout,
                onCancel: ()=>setShowLogout(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(Sidebar, "WrV7R+KPmJFV6+j0/akvheY/ALA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$hooks$2f$use$2d$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoutDialog");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/unread-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
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
function LogoutConfirmDialog({ onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card border border-border rounded-2xl p-6 w-full max-w-sm shadow-2xl space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "w-6 h-6 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-foreground",
                            children: "Log out?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: "You will be signed out of your account."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 py-3 rounded-xl bg-destructive hover:bg-destructive/90 text-white transition-colors text-sm font-medium",
                            onClick: onConfirm,
                            children: "Log Out"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = LogoutConfirmDialog;
function Header() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unread, setUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Header.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].get()
    }["Header.useState"]);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMounted(true);
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].subscribe({
                "Header.useEffect": (s)=>setUnread({
                        ...s
                    })
            }["Header.useEffect"])
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleOutside(e) {
                if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
            }
            document.addEventListener('mousedown', handleOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener('mousedown', handleOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const toggleTheme = ()=>setTheme(theme === 'dark' ? 'light' : 'dark');
    const navItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
            label: 'Dashboard',
            href: '/doctor/dashboard',
            badge: 0
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            label: 'Profile',
            href: '/doctor/profile',
            badge: 0
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            label: 'Messages',
            href: '/doctor/messages',
            badge: unread.messages
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            label: 'Notifications',
            href: '/doctor/notifications',
            badge: unread.notifications
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
            label: 'Settings',
            href: '/doctor/settings',
            badge: 0
        }
    ];
    const totalUnread = (unread.messages || 0) + (unread.notifications || 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-14 items-center justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/doctor/dashboard",
                            className: "md:hidden flex items-center gap-2 hover:opacity-80 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-primary-foreground",
                                        children: "S"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-foreground",
                                    children: "Sehati"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex flex-1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                    suppressHydrationWarning: true,
                                    children: mounted ? theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 36
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 66
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/doctor/notifications",
                                    className: "hidden md:inline-flex relative items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        mounted && unread.notifications > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-1 right-1 min-w-[14px] h-3.5 px-0.5 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center",
                                            children: unread.notifications
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/doctor/settings",
                                    className: "hidden md:inline-flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: menuRef,
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMenuOpen(!menuOpen),
                                            className: "flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-secondary transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-primary-foreground",
                                                    children: "DM"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden md:inline text-sm font-medium text-foreground",
                                                    children: "Dr. Mossaab"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                mounted && totalUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "md:hidden flex items-center justify-center w-4 h-4 text-[9px] font-bold rounded-full bg-destructive text-destructive-foreground",
                                                    children: totalUnread > 9 ? '9+' : totalUnread
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-56 bg-card rounded-2xl border border-border shadow-xl overflow-hidden z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 border-b border-border bg-secondary/40",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0",
                                                                children: "DM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-foreground",
                                                                        children: "Dr. Mossaab"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-muted-foreground",
                                                                        children: "General Practitioner"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/doctor/profile",
                                                            onClick: ()=>setMenuOpen(false),
                                                            className: "flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "w-4 h-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "View Profile"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/doctor/settings",
                                                            onClick: ()=>setMenuOpen(false),
                                                            className: "flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                    className: "w-4 h-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Settings"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-border py-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMenuOpen(false);
                                                            setShowLogoutConfirm(true);
                                                        },
                                                        className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/8 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Log Out"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            showLogoutConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutConfirmDialog, {
                onConfirm: ()=>{
                    setShowLogoutConfirm(false);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
                    router.push('/login');
                },
                onCancel: ()=>setShowLogoutConfirm(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "NlSWDwIenA/AUFGQpIIQDg9wS3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoutConfirmDialog");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/unread-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/lib/utils.ts [app-client] (ecmascript)");
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
;
const AUTH_ROUTES = [
    '/login',
    '/signup'
];
const PATIENT_ROUTES = [
    '/patient'
];
/* ─── Doctor Mobile Bottom Nav ────────────────────────────── */ function DoctorMobileNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [unread, setUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DoctorMobileNav.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].get()
    }["DoctorMobileNav.useState"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorMobileNav.useEffect": ()=>{
            setMounted(true);
        }
    }["DoctorMobileNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorMobileNav.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$unread$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreadStore"].subscribe({
                "DoctorMobileNav.useEffect": (s)=>setUnread({
                        ...s
                    })
            }["DoctorMobileNav.useEffect"])
    }["DoctorMobileNav.useEffect"], []);
    const items = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
            label: 'Dashboard',
            href: '/doctor/dashboard',
            badge: 0
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            label: 'Profile',
            href: '/doctor/profile',
            badge: 0
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            label: 'Messages',
            href: '/doctor/messages',
            badge: unread.messages
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            label: 'Notifs',
            href: '/doctor/notifications',
            badge: unread.notifications
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
            label: 'Settings',
            href: '/doctor/settings',
            badge: 0
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-stretch justify-around px-1 py-1",
            style: {
                paddingBottom: 'env(safe-area-inset-bottom, 4px)'
            },
            children: items.map((item)=>{
                const isActive = pathname === item.href || pathname?.startsWith(item.href);
                const Icon = item.icon;
                const badge = mounted ? item.badge : 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 rounded-xl transition-all', isActive ? 'text-primary' : 'text-muted-foreground'),
                    children: [
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-5 h-5 transition-transform', isActive && 'scale-110')
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1.5 min-w-[14px] h-3.5 px-0.5 text-[8px] font-bold rounded-full bg-destructive text-destructive-foreground flex items-center justify-center",
                                    children: badge > 9 ? '9+' : badge
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                                    lineNumber: 56,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[9px] font-semibold tracking-wide transition-all', isActive ? 'opacity-100' : 'opacity-60'),
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(DoctorMobileNav, "HfxU3I8t1WEzzKPUttz0MIjLH70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DoctorMobileNav;
function AppLayout({ children }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAuthPage = AUTH_ROUTES.some((r)=>pathname?.startsWith(r));
    const isPatientPage = PATIENT_ROUTES.some((r)=>pathname?.startsWith(r));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLayout.useEffect": ()=>{
            if (!isAuthPage) {
                const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])();
                if (!user) {
                    router.replace('/login');
                    return;
                }
                if (user.role === 'patient' && !isPatientPage) {
                    router.replace('/patient');
                    return;
                }
                if (user.role === 'doctor' && isPatientPage) {
                    router.replace('/doctor/dashboard');
                    return;
                }
            }
            setChecked(true);
        }
    }["AppLayout.useEffect"], [
        pathname
    ]);
    if (!checked && !isAuthPage) return null;
    if (isAuthPage) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    if (isPatientPage) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:flex-col h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto bg-background pb-16 md:pb-0",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorMobileNav, {}, void 0, false, {
                fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bureau/Website/sehati/final/v6/sehati_v5/components/layout/app-layout.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s1(AppLayout, "9K+RKOJpeC+WDhpLSXCUBrLLE0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bureau$2f$Website$2f$sehati$2f$final$2f$v6$2f$sehati_v5$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = AppLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "DoctorMobileNav");
__turbopack_context__.k.register(_c1, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bureau_Website_sehati_final_v6_sehati_v5_1c2e309b._.js.map