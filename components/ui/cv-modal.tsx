"use client";

import { useLanguage } from "@/context/LanguageContext";

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
    const { language } = useLanguage();

    if (!isOpen) return null;

    const roadmapData = {
        en: {
            title: "My Professional Journey",
            subtitle: "Chaib draa Mohammed",
            milestones: [
                {
                    year: "2020 - 2023",
                    title: "BSc Metrology & Quality Control",
                    location: "Setif, Ferhat Abbas University",
                    description: "Applied Metrology, geometric and wave optics, programming in C and Matlab. Lidar project for graduation.",
                    icon: "🎓",
                    side: "left"
                },
                {
                    year: "Apr - May 2022",
                    title: "Maintenance Intern",
                    location: "Agrovast, Bouira",
                    description: "Supported mechanical tasks like turning, milling, and drilling. Assisted in ultrasonic diagnostics for equipment monitoring.",
                    icon: "🔧",
                    side: "right"
                },
                {
                    year: "2023",
                    title: "Mobile Development",
                    location: "Self-Learning & Projects",
                    description: "Started learning mobile app development with Flutter and React Native. Built cross-platform applications and explored mobile UI/UX design patterns.",
                    icon: "📱",
                    side: "left"
                },
                {
                    year: "2023 - 2025",
                    title: "MSc Metrology",
                    location: "Setif, Ferhat Abbas University",
                    description: "Applied Metrology 2, 3D modeling GeoMagic, LabVIEW, optic measurements. Startup founder: cloud-based smart surveillance systems.",
                    icon: "🎓",
                    side: "right"
                },
                {
                    year: "Sep 2023 - Jan 2024",
                    title: "Metrology Intern",
                    location: "Iris Tyres, Setif",
                    description: "Calibration procedures, GUM framework for uncertainty calculation, ensuring compliance and accuracy in lab testing.",
                    icon: "📊",
                    side: "left"
                },
                {
                    year: "2024",
                    title: "Machine Learning",
                    location: "AI & Data Science",
                    description: "Deepened knowledge in machine learning algorithms, neural networks, and AI model training. Applied ML techniques to real-world problems.",
                    icon: "🤖",
                    side: "right"
                },
                {
                    year: "Jan - Aug 2025",
                    title: "Diploma Computer Science",
                    location: "Lisbon, Portugal Institute",
                    description: "Relevant coursework: algorithms, AI, Git and Github.",
                    icon: "💻",
                    side: "left"
                },
                {
                    year: "Apr - Sep 2025",
                    title: "Software Development Intern",
                    location: "Algerie Telecom",
                    description: "Developing AI-powered mobile applications using Flutter. Cloud-based architecture for scalable app deployment.",
                    icon: "🚀",
                    side: "right"
                }
            ]
        },
        ar: {
            title: "رحلتي المهنية",
            subtitle: "شعيب درع محمد",
            milestones: [
                {
                    year: "2020 - 2023",
                    title: "بكالوريوس القياسات ومراقبة الجودة",
                    location: "سطيف، جامعة فرحات عباس",
                    description: "القياسات التطبيقية، البصريات الهندسية والموجية، البرمجة بلغة C و Matlab. مشروع Lidar للتخرج.",
                    icon: "🎓",
                    side: "right"
                },
                {
                    year: "أبريل - مايو 2022",
                    title: "متدرب صيانة",
                    location: "أغروفاست، البويرة",
                    description: "دعم المهام الميكانيكية مثل الخراطة والطحن والحفر. المساعدة في التشخيص بالموجات فوق الصوتية.",
                    icon: "🔧",
                    side: "left"
                },
                {
                    year: "2023",
                    title: "تطوير تطبيقات الجوال",
                    location: "التعلم الذاتي والمشاريع",
                    description: "بدأت تعلم تطوير تطبيقات الجوال باستخدام Flutter و React Native. بناء تطبيقات متعددة المنصات واستكشاف أنماط تصميم واجهة المستخدم.",
                    icon: "📱",
                    side: "right"
                },
                {
                    year: "2023 - 2025",
                    title: "ماجستير في القياسات",
                    location: "سطيف، جامعة فرحات عباس",
                    description: "القياسات التطبيقية 2، النمذجة ثلاثية الأبعاد GeoMagic، LabVIEW، قياسات بصرية. مؤسس شركة ناشئة: نظام مراقبة ذكي سحابي.",
                    icon: "🎓",
                    side: "left"
                },
                {
                    year: "سبتمبر 2023 - يناير 2024",
                    title: "متدرب قياسات",
                    location: "إيريس تايرز، سطيف",
                    description: "إجراءات المعايرة، إطار GUM لحساب عدم اليقين، ضمان الامتثال والدقة في الاختبارات المخبرية.",
                    icon: "📊",
                    side: "right"
                },
                {
                    year: "2024",
                    title: "تعلم الآلة",
                    location: "الذكاء الاصطناعي وعلوم البيانات",
                    description: "تعميق المعرفة في خوارزميات التعلم الآلي والشبكات العصبية وتدريب نماذج الذكاء الاصطناعي. تطبيق تقنيات التعلم الآلي على مشاكل العالم الحقيقي.",
                    icon: "🤖",
                    side: "left"
                },
                {
                    year: "يناير - أغسطس 2025",
                    title: "دبلوم علوم الحاسوب",
                    location: "معهد لشبونة، البرتغال",
                    description: "المقررات ذات الصلة: الخوارزميات، الذكاء الاصطناعي، Git و Github.",
                    icon: "💻",
                    side: "right"
                },
                {
                    year: "أبريل - سبتمبر 2025",
                    title: "متدرب تطوير برمجيات",
                    location: "اتصالات الجزائر",
                    description: "تطوير تطبيقات جوال مدعومة بالذكاء الاصطناعي باستخدام Flutter. البنية السحابية لنشر التطبيقات القابلة للتطوير.",
                    icon: "🚀",
                    side: "left"
                }
            ]
        }
    };

    const data = roadmapData[language];

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Roadmap Modal */}
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-morphism glow-purple border border-white/[0.2] p-6 md:p-10 animate-slideUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                        {data.title}
                    </h2>
                    <p className="text-lg text-white/80">{data.subtitle}</p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Center Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

                    {/* Milestones */}
                    <div className="space-y-12">
                        {data.milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`w-[45%] ${milestone.side === 'right' ? 'text-right' : 'text-left'}`}>
                                    <div className="glass-morphism border border-white/[0.1] rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                                        <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
                                        <p className="text-sm font-medium text-purple-400 mb-2">{milestone.location}</p>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-3">{milestone.description}</p>
                                        <div className={`flex items-center gap-2 ${milestone.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                                            <span className="text-xs font-semibold text-neutral-400 bg-black/30 px-3 py-1 rounded-full">
                                                {milestone.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center text-2xl shadow-lg border-4 border-black/20 hover:scale-110 transition-transform duration-300">
                                        {milestone.icon}
                                    </div>
                                </div>

                                {/* Connector Line to Center */}
                                <div className={`absolute top-1/2 ${milestone.side === 'left'
                                        ? 'left-[45%] right-1/2'
                                        : 'left-1/2 right-[45%]'
                                    } h-0.5 bg-purple-500/30`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <div className="flex items-center justify-center gap-6 text-sm text-neutral-300">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>zakira-cpu@outlook.fr</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>{language === 'en' ? '+213 557257137' : '213 557257137+'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
