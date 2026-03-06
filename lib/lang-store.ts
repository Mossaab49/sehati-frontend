/**
 * Global language store + translations
 * Survives Next.js page navigation (module-level singleton)
 */

export type Lang = 'en' | 'fr' | 'ar';

type Listener = (lang: Lang) => void;

let _lang: Lang = 'en';
const _listeners = new Set<Listener>();

export const langStore = {
  get: (): Lang => _lang,
  set: (lang: Lang) => {
    _lang = lang;
    // Update html dir for RTL
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
    setTimeout(() => _listeners.forEach((l) => l(_lang)), 0);
  },
  subscribe: (fn: Listener): (() => void) => {
    _listeners.add(fn);
    fn(_lang);
    return () => _listeners.delete(fn);
  },
};

// ── Translations ─────────────────────────────────────────────────
export const T = {
  en: {
    // Nav
    dashboard: 'Dashboard', profile: 'Profile', messages: 'Messages',
    notifications: 'Notifications', settings: 'Settings', logout: 'Log Out',
    // Settings page
    settings_title: 'Settings',
    settings_sub: 'Manage your account preferences and security.',
    appearance: 'Appearance', theme: 'Theme', theme_sub: 'Select your preferred color mode',
    light: 'Light', dark: 'Dark', system: 'System',
    language: 'Language', language_sub: 'Choose your preferred language',
    security: 'Security',
    current_pwd: 'Current Password', new_pwd: 'New Password', confirm_pwd: 'Confirm New Password',
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
    save: 'Save', edit: 'Edit', back: 'Back',
    weak: 'Weak', fair: 'Fair', good: 'Good', strong: 'Strong',
  },
  fr: {
    dashboard: 'Tableau de bord', profile: 'Profil', messages: 'Messages',
    notifications: 'Notifications', settings: 'Paramètres', logout: 'Déconnexion',
    settings_title: 'Paramètres',
    settings_sub: 'Gérez vos préférences de compte et votre sécurité.',
    appearance: 'Apparence', theme: 'Thème', theme_sub: 'Sélectionnez votre mode de couleur préféré',
    light: 'Clair', dark: 'Sombre', system: 'Système',
    language: 'Langue', language_sub: 'Choisissez votre langue préférée',
    security: 'Sécurité',
    current_pwd: 'Mot de passe actuel', new_pwd: 'Nouveau mot de passe', confirm_pwd: 'Confirmer le mot de passe',
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
    save: 'Enregistrer', edit: 'Modifier', back: 'Retour',
    weak: 'Faible', fair: 'Moyen', good: 'Bien', strong: 'Fort',
  },
  ar: {
    dashboard: 'لوحة التحكم', profile: 'الملف الشخصي', messages: 'الرسائل',
    notifications: 'الإشعارات', settings: 'الإعدادات', logout: 'تسجيل الخروج',
    settings_title: 'الإعدادات',
    settings_sub: 'إدارة تفضيلات الحساب والأمان.',
    appearance: 'المظهر', theme: 'السمة', theme_sub: 'اختر وضع الألوان المفضل',
    light: 'فاتح', dark: 'داكن', system: 'النظام',
    language: 'اللغة', language_sub: 'اختر لغتك المفضلة',
    security: 'الأمان',
    current_pwd: 'كلمة المرور الحالية', new_pwd: 'كلمة المرور الجديدة', confirm_pwd: 'تأكيد كلمة المرور',
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
    save: 'حفظ', edit: 'تعديل', back: 'رجوع',
    weak: 'ضعيف', fair: 'متوسط', good: 'جيد', strong: 'قوي',
  },
} as const;

export type TKey = keyof typeof T.en;

/** Hook-friendly translate function — call with current lang */
export function t(lang: Lang, key: TKey): string {
  return (T[lang] as Record<string, string>)[key] ?? T.en[key] ?? key;
}
