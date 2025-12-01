"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { navItems, gridItems, projects, testimonials, companies, workExperience, socialMedia, techStack } from "@/data";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
    language: Language;
    direction: Direction;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    data: {
        navItems: any;
        gridItems: any;
        projects: any;
        testimonials: any;
        companies: any;
        workExperience: any;
        socialMedia: any;
        techStack: any;
    };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.testimonials": "Testimonials",
        "nav.contact": "Contact",
        "hero.tagline": "AI Engineer | Mobile App Developer",
        "hero.title": "Building Intelligent Mobile Solutions with AI & Computer Vision",
        "hero.description": "Hi, I'm Zaki, crafting innovative mobile experiences powered by artificial intelligence.",
        "hero.cta": "Explore My Work",
        "about.title": "My work experience",
        "projects.title": "A small selection of recent projects",
        "testimonials.title": "Kind words from satisfied clients",
        "approach.title": "My approach",
        "footer.title": "Ready to take your digital presence to the next level?",
        "footer.description": "Reach out to me today and let's discuss how I can help your achieve your goals.",
        "footer.cta": "Let's get in touch",
        "footer.copyright": "Copyright © 2024 Zaki",

        // Grid Items
        "grid.1.title": "I prioritize client collaboration, fostering open communication ",
        "grid.2.title": "I'm very flexible with time zone communications",
        "grid.3.title": "My tech stack",
        "grid.3.desc": "I constantly try to improve",
        "grid.4.title": "AI Engineer specializing in Computer Vision, NLP & LLMs",
        "grid.5.title": "Building intelligent solutions with PyTorch & TensorFlow",
        "grid.5.desc": "The Inside Scoop",
        "grid.6.title": "Do you want to start a project together?",

        // Projects
        "project.1.title": "Hoopoe App - AI-Powered News App",
        "project.1.desc": "A daily news application that delivers curated articles enhanced and powered by AI for personalized content discovery.",
        "project.2.title": "Orama - AI-Powered Smart Surveillance System",
        "project.2.desc": "Smart surveillance system powered by AI that allows you to monitor your surveillance cameras with cloud storage and real-time alerts.",
        "project.3.title": "Optimizer App - AI-Powered Optimization Tool",
        "project.3.desc": "Smart optimization application powered by machine learning that helps analyze and optimize various processes with data-driven insights.",
        "project.4.title": "Animated Apple Iphone 3D Website",
        "project.4.desc": "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",

        // Experience
        "exp.1.title": "AI Trainer Specialist",
        "exp.1.desc": "Specialized in training and fine-tuning large language models and AI systems, focusing on data annotation, model evaluation, and performance optimization.",
        "exp.2.title": "AI Engineer - Mobile Development",
        "exp.2.desc": "Designed and developed AI-powered mobile applications for both iOS & Android platforms using Flutter and TensorFlow.",
        "exp.3.title": "Freelance AI Engineer",
        "exp.3.desc": "Led the development of AI-powered mobile applications, integrating computer vision and NLP models from concept to deployment.",
        "exp.4.title": "AI Engineer - Computer Vision",
        "exp.4.desc": "Developed and deployed computer vision models using PyTorch and OpenCV for real-time object detection and image processing.",

        // Approach
        "approach.1.title": "Planning & Architecture",
        "approach.1.desc": "We begin by defining the goals, user needs, and technical direction of your project. Together, we identify the target audience, core features, and the overall experience the product should deliver. This includes outlining the system architecture, choosing the right technologies, and structuring the navigation, content flow, and key interactions. The result is a clear roadmap that aligns functionality, design, and scalability from day one.",
        "approach.2.title": "Development & Progress Update",
        "approach.2.desc": "With the strategy in place, I move into full development mode—turning concepts into functional, clean, and scalable code. From the first layout to refined components, every part of the build is crafted with attention to detail. Throughout the process, you'll receive consistent updates, previews, and progress reports to ensure everything aligns with your vision.",
        "approach.3.title": "Integration & Deployment",
        "approach.3.desc": "This is where everything comes together. I integrate the AI models into the mobile app, connect backend services, and ensure real-time performance, reliability, and smooth user interaction. After thorough testing, debugging, and optimization, the final product is deployed—ready for users with solid performance, clean architecture, and production-level stability.",
        "approach.phase1": "Phase 1",
        "approach.phase2": "Phase 2",
        "approach.phase3": "Phase 3",
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "عني",
        "nav.projects": "المشاريع",
        "nav.testimonials": "آراء العملاء",
        "nav.contact": "تواصل معي",
        "hero.tagline": "مهندس ذكاء اصطناعي | مطور تطبيقات جوال",
        "hero.title": "بناء حلول جوال ذكية باستخدام الذكاء الاصطناعي والرؤية الحاسوبية",
        "hero.description": "مرحباً، أنا زاكي، أصمم تجارب جوال مبتكرة مدعومة بالذكاء الاصطناعي.",
        "hero.cta": "استكشف أعمالي",
        "about.title": "خبرتي العملية",
        "projects.title": "مختارات من أحدث مشاريعي",
        "testimonials.title": "كلمات طيبة من عملاء راضين",
        "approach.title": "نهجي في العمل",
        "footer.title": "هل أنت مستعد للارتقاء بحضورك الرقمي إلى المستوى التالي؟",
        "footer.description": "تواصل معي اليوم ودعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك.",
        "footer.cta": "دعنا نتواصل",
        "footer.copyright": "حقوق النشر © 2024 زاكي",

        // Grid Items
        "grid.1.title": "أعطي الأولوية للتعاون مع العملاء، وتعزيز التواصل المفتوح",
        "grid.2.title": "مرن جداً في التواصل عبر المناطق الزمنية المختلفة",
        "grid.3.title": "مجموعتي التقنية",
        "grid.3.desc": "أسعى دائماً للتحسين والتطوير",
        "grid.4.title": "مهندس ذكاء اصطناعي متخصص في الرؤية الحاسوبية ومعالجة اللغات الطبيعية",
        "grid.5.title": "بناء حلول ذكية باستخدام PyTorch و TensorFlow",
        "grid.5.desc": "نظرة من الداخل",
        "grid.6.title": "هل ترغب في بدء مشروع معاً؟",

        // Projects
        "project.1.title": "تطبيق هوبو - تطبيق أخبار مدعوم بالذكاء الاصطناعي",
        "project.1.desc": "تطبيق إخباري يومي يقدم مقالات مختارة ومحسنة بواسطة الذكاء الاصطناعي لاكتشاف محتوى مخصص.",
        "project.2.title": "Orama - نظام مراقبة ذكي مدعوم بالذكاء الاصطناعي",
        "project.2.desc": "نظام مراقبة ذكي مدعوم بالذكاء الاصطناعي يتيح لك مراقبة كاميرات المراقبة الخاصة بك مع التخزين السحابي والتنبيهات في الوقت الفعلي.",
        "project.3.title": "Optimizer - أداة تحسين مدعومة بالذكاء الاصطناعي",
        "project.3.desc": "تطبيق تحسين ذكي مدعوم بالتعلم الآلي يساعد على تحليل وتحسين العمليات المختلفة برؤى مدفوعة بالبيانات.",
        "project.4.title": "موقع آيفون ثلاثي الأبعاد متحرك",
        "project.4.desc": "إعادة إنشاء موقع Apple iPhone 15 Pro، يجمع بين رسوم GSAP المتحركة وتأثيرات Three.js ثلاثية الأبعاد.",

        // Experience
        "exp.1.title": "أخصائي تدريب ذكاء اصطناعي",
        "exp.1.desc": "متخصص في تدريب وضبط نماذج اللغة الكبيرة وأنظمة الذكاء الاصطناعي، مع التركيز على تعليق البيانات وتقييم النماذج وتحسين الأداء.",
        "exp.2.title": "مهندس ذكاء اصطناعي - تطوير الجوال",
        "exp.2.desc": "تصميم وتطوير تطبيقات جوال مدعومة بالذكاء الاصطناعي لمنصتي iOS و Android باستخدام Flutter و TensorFlow.",
        "exp.3.title": "مهندس ذكاء اصطناعي مستقل",
        "exp.3.desc": "قاد تطوير تطبيقات الجوال المدعومة بالذكاء الاصطناعي، ودمج نماذج الرؤية الحاسوبية ومعالجة اللغات الطبيعية من المفهوم إلى النشر.",
        "exp.4.title": "مهندس ذكاء اصطناعي - رؤية حاسوبية",
        "exp.4.desc": "تطوير ونشر نماذج الرؤية الحاسوبية باستخدام PyTorch و OpenCV للكشف عن الأشياء ومعالجة الصور في الوقت الفعلي.",

        // Approach
        "approach.1.title": "التخطيط والهيكلة",
        "approach.1.desc": "نبدأ بتحديد الأهداف واحتياجات المستخدم والاتجاه الفني لمشروعك. معاً، نحدد الجمهور المستهدف والميزات الأساسية والتجربة الشاملة التي يجب أن يقدمها المنتج. ويشمل ذلك تحديد هيكلية النظام، واختيار التقنيات المناسبة، وهيكلة التنقل وتدفق المحتوى والتفاعلات الرئيسية. والنتيجة هي خارطة طريق واضحة تتماشى مع الوظائف والتصميم وقابلية التوسع من اليوم الأول.",
        "approach.2.title": "التطوير وتحديثات التقدم",
        "approach.2.desc": "مع وجود الاستراتيجية، أنتقل إلى وضع التطوير الكامل - تحويل المفاهيم إلى كود وظيفي ونظيف وقابل للتطوير. من التخطيط الأول إلى المكونات المحسنة، يتم صياغة كل جزء من البناء مع الاهتمام بالتفاصيل. طوال العملية، ستتلقى تحديثات ومعاينات وتقارير تقدم مستمرة لضمان توافق كل شيء مع رؤيتك.",
        "approach.3.title": "التكامل والنشر",
        "approach.3.desc": "هنا يجتمع كل شيء معاً. أقوم بدمج نماذج الذكاء الاصطناعي في تطبيق الجوال، وربط خدمات الخلفية، وضمان الأداء في الوقت الفعلي والموثوقية وتفاعل المستخدم السلس. بعد الاختبار الشامل وتصحيح الأخطاء والتحسين، يتم نشر المنتج النهائي - جاهزاً للمستخدمين بأداء قوي وهندسة نظيفة واستقرار على مستوى الإنتاج.",
        "approach.phase1": "المرحلة 1",
        "approach.phase2": "المرحلة 2",
        "approach.phase3": "المرحلة 3",
    },
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");
    const [direction, setDirection] = useState<Direction>("ltr");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguage(savedLang);
            setDirection(savedLang === "ar" ? "rtl" : "ltr");
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        setDirection(lang === "ar" ? "rtl" : "ltr");
        localStorage.setItem("language", lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
    };

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    // Helper to get translated data
    const getTranslatedData = () => {
        return {
            navItems: navItems.map(item => ({
                ...item,
                name: t(`nav.${item.name.toLowerCase()}`) !== `nav.${item.name.toLowerCase()}` ? t(`nav.${item.name.toLowerCase()}`) : item.name,
            })),
            gridItems: gridItems.map(item => ({
                ...item,
                title: t(`grid.${item.id}.title`) !== `grid.${item.id}.title` ? t(`grid.${item.id}.title`) : item.title,
                description: t(`grid.${item.id}.desc`) !== `grid.${item.id}.desc` ? t(`grid.${item.id}.desc`) : item.description,
            })),
            projects: projects.map(item => ({
                ...item,
                title: t(`project.${item.id}.title`) !== `project.${item.id}.title` ? t(`project.${item.id}.title`) : item.title,
                des: t(`project.${item.id}.desc`) !== `project.${item.id}.desc` ? t(`project.${item.id}.desc`) : item.des,
            })),
            testimonials: testimonials.map((item, index) => ({
                ...item,
                quote: language === 'ar'
                    ? "كان التعاون مع زاكي متعة مطلقة. احترافيته وسرعته وتفانيه في تقديم نتائج استثنائية كانت واضحة طوال مشروعنا. حماس زاكي لكل جانب من جوانب التطوير يبرز حقاً. إذا كنت تسعى للارتقاء بموقعك الإلكتروني وعلامتك التجارية، فإن زاكي هو الشريك المثالي."
                    : item.quote,
                name: language === 'ar' ? "مارتن شانغ" : item.name,
                title: language === 'ar' ? "عميل Fiverr" : item.title,
            })),
            companies,
            workExperience: workExperience.map(item => ({
                ...item,
                title: t(`exp.${item.id}.title`) !== `exp.${item.id}.title` ? t(`exp.${item.id}.title`) : item.title,
                desc: t(`exp.${item.id}.desc`) !== `exp.${item.id}.desc` ? t(`exp.${item.id}.desc`) : item.desc,
            })),
            socialMedia,
            techStack
        };
    };

    return (
        <LanguageContext.Provider value={{
            language,
            direction,
            setLanguage: handleSetLanguage,
            t,
            data: getTranslatedData()
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
