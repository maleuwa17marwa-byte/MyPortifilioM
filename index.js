const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_badge: "Available for Freelance & Full-Time",
        hero_title: "Hi, I'm <span>DevMarwa</span>",
        hero_subtitle: "Web & Native Android Developer",
        hero_desc: "I build fast, responsive websites and engaging Android applications that turn ideas into real digital products.",
        btn_work: "Explore My Work",
        btn_hire: "Hire Me",
        about_title: "About & Services",
        about_p1: "I am a passionate Web and Mobile Developer specialized in building complete digital solutions from scratch. Whether you are a company looking for a dedicated developer or a business owner needing a website or an Android app, I deliver clean code and smooth user experiences.",
        srv_web_title: "Full-Stack Web Development",
        srv_web_desc: "Modern, responsive websites and dynamic backend systems built with HTML, CSS, JS, and PHP.",
        srv_app_title: "Native Android Apps",
        srv_app_desc: "High-performance Android applications and interactive mobile games developed with Kotlin & Java.",
        skills_title: "Technical Skills",
        cat_frontend: "Frontend Web",
        cat_backend: "Backend & Database",
        cat_mobile: "Android Development",
        projects_title: "Featured Projects",
        tag_web: "Web Development",
        proj1_desc: "A modern, responsive website for a seafood restaurant featuring an interactive menu, table reservation system, and smooth user interface.",
        live_demo: "Live Demo",
        source_code: "Code",
        tag_mobile: "Android App (In Progress)",
        proj2_title: "Android Gaming App",
        proj2_desc: "An interactive native Android gaming application currently in active development, focusing on smooth animations, score tracking, and engaging gameplay.",
        contact_title: "Get In Touch",
        contact_desc: "Have a project in mind or looking for a developer to join your team? Feel free to reach out!",
        footer_rights: "All rights reserved."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        hero_badge: "متاحة للعمل الحر والوظائف",
        hero_title: "مرحباً، أنا <span>DevMarwa</span>",
        hero_subtitle: "مطورة مواقع ويب وتطبيقات أندرويد",
        hero_desc: "أقوم ببناء مواقع إلكترونية سريعة ومتجاوبة وتطبيقات أندرويد احترافية تحول الأفكار إلى منتجات رقمية حقيقية.",
        btn_work: "استكشف أعمالي",
        btn_hire: "وظفني الآن",
        about_title: "نبذة عني وخدماتي",
        about_p1: "أنا مطورة ويب وتطبيقات هاتف شغوفة ببناء حلول رقمية متكاملة من الصفر. سواء كنتِ شركة تبحث عن مطورة متميزة أو صاحب مشروع يحتاج إلى موقع إلكتروني أو تطبيق أندرويد، أقدم كوداً نظيفاً وتجربة مستخدم سلسة.",
        srv_web_title: "تطوير مواقع الويب المتكاملة",
        srv_web_desc: "مواقع عصرية متجاوبة وأنظمة خلفية ديناميكية مبنية باستخدام HTML, CSS, JS, و PHP.",
        srv_app_title: "تطبيقات أندرويد أصلية",
        srv_app_desc: "تطبيقات أندرويد عالية الأداء وألعاب هاتف تفاعلية مطورة بلغة Kotlin و Java.",
        skills_title: "المهارات التقنية",
        cat_frontend: "تطوير الواجهات الأمامية",
        cat_backend: "الواجهات الخلفية وقواعد البيانات",
        cat_mobile: "تطوير تطبيقات الأندرويد",
        projects_title: "أبرز المشاريع",
        tag_web: "تطوير ويب",
        proj1_desc: "موقع إلكتروني عصري ومتجاوب لمطعم مأكولات بحرية، يتضمن قائمة طعام تفاعلية، ونظام حجز طاولات، وتجربة تصفح سلسة.",
        live_demo: "معاينة حية",
        source_code: "الكود المصدري",
        tag_mobile: "تطبيق أندرويد (قيد التطوير)",
        proj2_title: "تطبيق ألعاب أندرويد",
        proj2_desc: "تطبيق ألعاب تفاعلي لنظام أندرويد قيد التطوير حالياً، يركز على الحركات السلسة، وتتبع النقاط، وتجربة لعب ممتعة.",
        contact_title: "تواصل معي",
        contact_desc: "هل لديك فكرة مشروع أو تبحث عن مطورة للانضمام إلى فريقك؟ لا تتردد في مراسلتي!",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('devmarwa_lang') || 'en';

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langToggleBtn.textContent = lang === 'ar' ? 'English' : 'العربية';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem('devmarwa_lang', lang);
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
});

// تفعيل اللغة المحفوظة عند فتح الموقع
setLanguage(currentLang);