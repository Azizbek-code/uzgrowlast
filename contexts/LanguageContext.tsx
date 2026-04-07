"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "uz" | "ru" | "en";

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Navigation
    nav: {
      home: "Bosh sahifa",
      greenhouse: "Issiqxona turlari",
      projects: "Loyihalar",
      team: "Jamoa",
      contact: "Aloqa",
      language: "Til tanlang",
    },
    // Common
    common: {
      readMore: "Batafsil ma'lumot",
      contact: "Aloqa",
      email: "Email",
      phone: "Telefon",
      address: "Manzil",
      year: "Yil",
      location: "Joylashuv",
      size: "Maydon",
      category: "Kategoriya",
      all: "Barchasi",
    },
    // Home
    hero: {
      title: "Zamonaviy Issiqxona Yechimlari",
      subtitle: "O'zbekistonning yetakchi agro-injiniring kompaniyasi",
      description:
        "Biz eng zamonaviy issiqxona texnologiyalarini joriy etamiz va qishloq xo'jaligini rivojlantiramiz",
      cta: "Bog'lanish",
    },
    // About
    about: {
      title: "Biz haqimizda",
      subtitle: "15+ yillik tajriba",
      description:
        "UZ-GROW - O'zbekistonda qishloq xo'jaligi sohasidagi yetakchi kompaniya",
      experience: "Tajriba",
      projects: "Loyihalar",
      clients: "Mijozlar",
      countries: "Davlatlar",
      values: ["Sifat", "Innovatsiya", "Ishonch", "Uzoq muddatli hamkorlik"],
    },
    // Services
    services: {
      title: "Xizmatlar",
      subtitle: "To'liq aylanma xizmatlar",
      description:
        "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing",
      engineering: "Injiniring",
      engineeringDesc: "Loyihalashdan boshlab to'liq ishga tushirishgacha",
      engineeringFullDesc:
        "Biz to'liq sikl asosida issiqxona quramiz. Natija: energiya tejamkor, yuqori hosildorlikka ega zamonaviy issiqxona",
      engineeringFeatures: [
        "Metall konstruksiya",
        "Polikarbonat yoki shisha qoplama",
        "Tomchilatib sug'orish",
        "Avtomatlashtirilgan boshqaruv",
      ],
      equipment: "Jihozlar",
      equipmentDesc: "Zamonaviy avtomatlashtirish va texnologiyalar",
      equipmentFullDesc:
        "Issiqxona uchun zarur bo'lgan barcha jihozlar va tizimlarni taqdim etamiz. Eng yuqori samaradorlik va ishonchlilik",
      equipmentFeatures: [
        "Iqlim nazorati tizimi",
        "Tomchilatib sug'orish",
        "LED grow lights",
        "O'g'itlash va sug'orish tizimi",
      ],
      consulting: "Konsalting",
      consultingDesc: "Professional maslahatlar va loyihalash",
      consultingFullDesc:
        "Bizning tajribali mutaxassislarimiz sizga eng yaxshi yechimlarni taklif qiladi. Loyihalashdan tortib to'liq ishga tushirishgacha",
      consultingFeatures: [
        "Tekshiruv va tahlil",
        "3D modellashtirish",
        "Texnik hujjatlar",
        "Eksport yo'nalishi",
        "Biznes model yaratish",
      ],
    },
    // Projects
    projects: {
      title: "Loyihalar",
      subtitle: "Muvaffaqiyatli yechimlar",
      categories: {
        all: "Barchasi",
        president: "Prezident tashrifi",
        international: "Xalqaro loyihalar",
        greenhouse: "Issiqxona turlari",
      },
      viewProject: "Loyihani ko'rish",
      close: "Yopish",
      previous: "Oldingi",
      next: "Keyingi",
      image: "rasm",
      of: "dan",
    },
    // Team
    team: {
      title: "Bizning Jamoa",
      subtitle: "Kuchli va tajribali mutaxassislar",
      ourTeam: "Bizning jamoa",
      experience: "Tajriba",
      achievements: "Yutuqlar",
      education: "Ta'lim",
      skills: "Ko'nikmalar",
      contact: "Aloqa",
    },
    // Greenhouse Types
    greenhouse: {
      title: "Issiqxona turlari",
      subtitle: "Har bir ekin uchun optimal yechim",
      description:
        "Turli xil issiqxona turlari bilan tanishing va siz uchun to'g'ri tanlov qiling",
      glass: {
        title: "Shisha issiqxona",
        description:
          "Yorug'likni yaxshi o'tkazadi, mustahkam, lekin qurilish xarajati yuqori.",
        features: [
          "Maksimal yorug'lik",
          "Uzoq muddatli",
          "Yuqori samaradorlik",
        ],
        complexity: "Yuqori",
        durability: "20+ yil",
        cost: "Yuqori",
        maintenance: "Oson",
      },
      polycarbonate: {
        title: "Polikarbonat issiqxona",
        description:
          "Yengil, arzon, yaxshi izolyatsiya qiladi, lekin shishagacha chidaymaydi.",
        features: ["Yengil", "Arzon", "Yaxshi izolyatsiya"],
        complexity: "O'rtacha",
        durability: "10-15 yil",
        cost: "O'rtacha",
        maintenance: "Oson",
      },
      tunnel: {
        title: "Tunnel issiqxona",
        description:
          "Soddadir, arzon, tez o'rnatiladi, lekin uzoq muddatga chidamli emas.",
        features: ["Soddadir", "Arzon", "Tez o'rnatiladi"],
        complexity: "Past",
        durability: "5-8 yil",
        cost: "Past",
        maintenance: "Oson",
      },
      industrial: {
        title: "Sanoat issiqxonasi",
        description:
          "Katta maydonlar uchun, avtomatlashtirilgan, yuqori samaradorlik.",
        features: [
          "Katta maydonlar",
          "Avtomatlashtirilgan",
          "Yuqori samaradorlik",
        ],
        complexity: "Yuqori",
        durability: "25+ yil",
        cost: "Yuqori",
        maintenance: "Murakkab",
      },
      hydroponic: {
        title: "Gidroponik issiqxona",
        description:
          "Suvsiz o'stirish, yuqori hosildorlik, zamonaviy texnologiya.",
        features: [
          "Suvsiz o'stirish",
          "Yuqori hosildorlik",
          "Zamonaviy texnologiya",
        ],
        complexity: "Yuqori",
        durability: "15-20 yil",
        cost: "Yuqori",
        maintenance: "Murakkab",
      },
      vertical: {
        title: "Vertikal issiqxona",
        description:
          "Bo'sh joyni tejaydi, shahar sharoitida ideal, yangi texnologiya.",
        features: [
          "Bo'sh joy tejash",
          "Shahar uchun ideal",
          "Yangi texnologiya",
        ],
        complexity: "Yuqori",
        durability: "10-15 yil",
        cost: "Yuqori",
        maintenance: "Murakkab",
      },
      comparison: {
        title: "Qiyosiy jadval",
        subtitle: "Issiqxona turlarini solishtiring",
        material: "Material",
        light: "Yorug'lik o'tkazuvchanligi",
        durability: "Chidamlilik",
        cost: "Xarajat",
        maintenance: "Xizmat ko'rsatish",
        serviceLife: "Xizmat muddati",
      },
      guide: {
        title: "To'g'ri Issiqxonini Qanday Tanlash?",
        beginners: "Boshlanuvchilar uchun",
        beginnersDesc:
          "Oddiy yoki Tunnel issiqxona - arzon va oson boshqariladi",
        professionals: "Professionallar uchun",
        professionalsDesc:
          "Polikarbonat yoki Shisha - uzoq muddatli va samarali",
        business: "Biznes uchun",
        businessDesc:
          "Sanoat, Gidroponik yoki Vertikal - maksimal samaradorlik",
        consult: "Mutaxassis bilan maslahatlashish",
      },
    },
    // Contact
    contact: {
      title: "Aloqa",
      subtitle: "Biz bilan bog'laning",
      formTitle: "Xabar yuborish",
      name: "Ism",
      namePlaceholder: "Ismingizni kiriting",
      phone: "Telefon",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Xizmat turi",
      servicePlaceholder: "Xizmatni tanlang",
      message: "Xabar",
      messagePlaceholder: "Xabaringizni yozing...",
      send: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabar yuborildi!",
      successMessage: "Tez orada siz bilan bog'lanamiz",
      newMessage: "Yangi xabar",
      infoTitle: "Aloqa ma'lumotlari",
      workingHours: "Ish vaqti",
      workingHoursDesc: "Biz bilan bog'laning",
      monday: "Dushanba",
      friday: "Juma",
      saturday: "Shanba",
      sunday: "Yakshanba",
      closed: "Dam olish kuni",
      socialMedia: "Ijtimoiy tarmoqlar",
      followUs: "Ijtimoiy tarmoqlarda bizga qo'shiling",
      location: "Manzil",
      getDirections: "Yo'nalishni olish",
      copyAddress: "Manzilni nusxalash",
      services: {
        turnkey: "Turnkey issiqxona qurish",
        engineering: "Agro-injiniring",
        equipment: "Jihozlar",
        consulting: "Agro-konsalting",
        investment: "Investitsiya",
      },
    },
  },
  ru: {
    // Navigation
    nav: {
      home: "Главная",
      greenhouse: "Типы теплиц",
      projects: "Проекты",
      team: "Команда",
      contact: "Контакты",
      language: "Выберите язык",
    },
    // Common
    common: {
      readMore: "Подробнее",
      contact: "Контакты",
      email: "Email",
      phone: "Телефон",
      address: "Адрес",
      year: "Год",
      location: "Местоположение",
      size: "Площадь",
      category: "Категория",
      all: "Все",
    },
    // Home
    hero: {
      title: "Современные тепличные решения",
      subtitle: "Ведущая агроинжиниринговая компания Узбекистана",
      description:
        "Мы внедряем самые современные тепличные технологии и развиваем сельское хозяйство",
      cta: "Связаться",
    },
    // About
    about: {
      title: "О нас",
      subtitle: "15+ лет опыта",
      description:
        "UZ-GROW - ведущая компания в сфере сельского хозяйства в Узбекистане",
      experience: "Опыт",
      projects: "Проекты",
      clients: "Клиенты",
      countries: "Страны",
      values: ["Качество", "Инновации", "Доверие", "Долгосрочное партнерство"],
    },
    // Services
    services: {
      title: "Услуги",
      subtitle: "Полный цикл услуг",
      description:
        "От проектирования до полной реализации - сотрудничайте с нами и достигайте результатов",
      engineering: "Инжиниринг",
      engineeringDesc: "От проектирования до полной реализации",
      engineeringFullDesc:
        "Мы строим теплицы по полному циклу. Результат: энергосберегающая, высокопроизводительная современная теплица",
      engineeringFeatures: [
        "Металлическая конструкция",
        "Покрытие из поликарбоната или стекла",
        "Капельное орошение",
        "Автоматизированное управление",
      ],
      equipment: "Оборудование",
      equipmentDesc: "Современная автоматизация и технологии",
      equipmentFullDesc:
        "Мы предоставляем все необходимое оборудование и системы для теплиц. Максимальная эффективность и надежность",
      equipmentFeatures: [
        "Система контроля климата",
        "Капельное орошение",
        "LED grow lights",
        "Система удобрения и полива",
      ],
      consulting: "Консалтинг",
      consultingDesc: "Профессиональные консультации и проектирование",
      consultingFullDesc:
        "Наши опытные специалисты предложат вам лучшие решения. От проектирования до полной реализации",
      consultingFeatures: [
        "Обследование и анализ",
        "3D моделирование",
        "Техническая документация",
        "Экспортные направления",
        "Создание бизнес-модели",
      ],
    },
    // Projects
    projects: {
      title: "Проекты",
      subtitle: "Успешные решения",
      categories: {
        all: "Все",
        president: "Визит президента",
        international: "Международные проекты",
        greenhouse: "Типы теплиц",
      },
      viewProject: "Посмотреть проект",
      close: "Закрыть",
      previous: "Предыдущий",
      next: "Следующий",
      image: "изображение",
      of: "из",
    },
    // Team
    team: {
      title: "Наша команда",
      subtitle: "Сильные и опытные специалисты",
      ourTeam: "Наша команда",
      experience: "Опыт",
      achievements: "Достижения",
      education: "Образование",
      skills: "Навыки",
      contact: "Контакты",
    },
    // Contact
    contact: {
      title: "Контакты",
      subtitle: "Свяжитесь с нами",
      formTitle: "Отправить сообщение",
      name: "Имя",
      namePlaceholder: "Введите ваше имя",
      phone: "Телефон",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Тип услуги",
      servicePlaceholder: "Выберите услугу",
      message: "Сообщение",
      messagePlaceholder: "Напишите ваше сообщение...",
      send: "Отправить",
      sending: "Отправка...",
      success: "Сообщение отправлено!",
      successMessage: "Мы свяжемся с вами в ближайшее время",
      newMessage: "Новое сообщение",
      infoTitle: "Контактная информация",
      workingHours: "Время работы",
      workingHoursDesc: "Свяжитесь с нами",
      monday: "Понедельник",
      friday: "Пятница",
      saturday: "Суббота",
      sunday: "Воскресенье",
      closed: "Выходной",
      socialMedia: "Социальные сети",
      followUs: "Присоединяйтесь к нам в социальных сетях",
      location: "Адрес",
      getDirections: "Построить маршрут",
      copyAddress: "Скопировать адрес",
      services: {
        turnkey: "Строительство теплиц под ключ",
        engineering: "Агроинжиниринг",
        equipment: "Оборудование",
        consulting: "Агроконсалтинг",
        investment: "Инвестиции",
      },
    },
    // Greenhouse Types
    greenhouse: {
      title: "Типы теплиц",
      subtitle: "Оптимальное решение для каждой культуры",
      description:
        "Ознакомьтесь с различными типами теплиц и выберите правильное решение для себя",
      glass: {
        title: "Стеклянная теплица",
        description:
          "Хорошо пропускает свет, прочная, но высокая стоимость строительства.",
        features: [
          "Максимальное освещение",
          "Долговечная",
          "Высокая эффективность",
        ],
        complexity: "Высокая",
        durability: "20+ лет",
        cost: "Высокая",
        maintenance: "Простое",
      },
      polycarbonate: {
        title: "Поликарбонатная теплица",
        description:
          "Легкая, доступная, хорошая изоляция, но не такая прочная как стекло.",
        features: ["Легкая", "Доступная", "Хорошая изоляция"],
        complexity: "Средняя",
        durability: "10-15 лет",
        cost: "Средняя",
        maintenance: "Простое",
      },
      tunnel: {
        title: "Туннельная теплица",
        description:
          "Простая, доступная, быстрая установка, но не долговечная.",
        features: ["Простая", "Доступная", "Быстрая установка"],
        complexity: "Низкая",
        durability: "5-8 лет",
        cost: "Низкая",
        maintenance: "Простое",
      },
      industrial: {
        title: "Промышленная теплица",
        description:
          "Для больших площадей, автоматизированная, высокая эффективность.",
        features: [
          "Большие площади",
          "Автоматизированная",
          "Высокая эффективность",
        ],
        complexity: "Высокая",
        durability: "25+ лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      hydroponic: {
        title: "Гидропонная теплица",
        description:
          "Безпочвенное выращивание, высокая урожайность, современная технология.",
        features: [
          "Безпочвенное выращивание",
          "Высокая урожайность",
          "Современная технология",
        ],
        complexity: "Высокая",
        durability: "15-20 лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      vertical: {
        title: "Вертикальная теплица",
        description:
          "Экономит пространство, идеальна для городских условий, новая технология.",
        features: [
          "Экономия пространства",
          "Идеальна для города",
          "Новая технология",
        ],
        complexity: "Высокая",
        durability: "10-15 лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      comparison: {
        title: "Сравнительная таблица",
        subtitle: "Сравните типы теплиц",
        material: "Материал",
        light: "Светопропускаемость",
        durability: "Прочность",
        cost: "Стоимость",
        maintenance: "Обслуживание",
        serviceLife: "Срок службы",
      },
      guide: {
        title: "Как выбрать правильную теплицу?",
        beginners: "Для начинающих",
        beginnersDesc:
          "Простая или туннельная теплица - доступная и простая в управлении",
        professionals: "Для профессионалов",
        professionalsDesc:
          "Поликарбонат или стекло - долговечные и эффективные",
        business: "Для бизнеса",
        businessDesc:
          "Промышленная, гидропонная или вертикальная - максимальная эффективность",
        consult: "Консультация со специалистом",
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      greenhouse: "Greenhouse Types",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
      language: "Choose Language",
    },
    // Common
    common: {
      readMore: "Read More",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      address: "Address",
      year: "Year",
      location: "Location",
      size: "Size",
      category: "Category",
      all: "All",
    },
    // Home
    hero: {
      title: "Modern Greenhouse Solutions",
      subtitle: "Leading agro-engineering company in Uzbekistan",
      description:
        "We implement the most modern greenhouse technologies and develop agriculture",
      cta: "Contact Us",
    },
    // About
    about: {
      title: "About Us",
      subtitle: "15+ years of experience",
      description:
        "UZ-GROW - leading company in the agricultural sector in Uzbekistan",
      experience: "Experience",
      projects: "Projects",
      clients: "Clients",
      countries: "Countries",
      values: ["Quality", "Innovation", "Trust", "Long-term partnership"],
    },
    // Services
    services: {
      title: "Services",
      subtitle: "Full cycle services",
      description:
        "From design to full implementation - partner with us and achieve results",
      engineering: "Engineering",
      engineeringDesc: "From design to full implementation",
      engineeringFullDesc:
        "We build greenhouses on a full cycle basis. Result: energy-efficient, high-yield modern greenhouse",
      engineeringFeatures: [
        "Metal construction",
        "Polycarbonate or glass covering",
        "Drip irrigation",
        "Automated control",
      ],
      equipment: "Equipment",
      equipmentDesc: "Modern automation and technologies",
      equipmentFullDesc:
        "We provide all necessary equipment and systems for greenhouses. Maximum efficiency and reliability",
      equipmentFeatures: [
        "Climate control system",
        "Drip irrigation",
        "LED grow lights",
        "Fertilization and irrigation system",
      ],
      consulting: "Consulting",
      consultingDesc: "Professional consultations and design",
      consultingFullDesc:
        "Our experienced specialists will offer you the best solutions. From design to full implementation",
      consultingFeatures: [
        "Inspection and analysis",
        "3D modeling",
        "Technical documentation",
        "Export directions",
        "Business model creation",
      ],
    },
    // Projects
    projects: {
      title: "Projects",
      subtitle: "Successful Solutions",
      categories: {
        all: "All",
        president: "President Visit",
        international: "International Projects",
        greenhouse: "Greenhouse Types",
      },
      viewProject: "View Project",
      close: "Close",
      previous: "Previous",
      next: "Next",
      image: "image",
      of: "of",
    },
    // Team
    team: {
      title: "Our Team",
      subtitle: "Strong and experienced specialists",
      ourTeam: "Our Team",
      experience: "Experience",
      achievements: "Achievements",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Get in touch",
      formTitle: "Send Message",
      name: "Name",
      namePlaceholder: "Enter your name",
      phone: "Phone",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Service Type",
      servicePlaceholder: "Select a service",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send",
      sending: "Sending...",
      success: "Message sent!",
      successMessage: "We'll contact you soon",
      newMessage: "New Message",
      infoTitle: "Contact Information",
      workingHours: "Working Hours",
      workingHoursDesc: "Get in touch with us",
      monday: "Monday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      socialMedia: "Social Media",
      followUs: "Follow us on social media",
      location: "Location",
      getDirections: "Get Directions",
      copyAddress: "Copy Address",
      services: {
        turnkey: "Turnkey Greenhouse Construction",
        engineering: "Agro-engineering",
        equipment: "Equipment",
        consulting: "Agro-consulting",
        investment: "Investment",
      },
    },
    // Greenhouse Types
    greenhouse: {
      title: "Greenhouse Types",
      subtitle: "Optimal solution for every crop",
      description:
        "Explore different greenhouse types and choose the right solution for you",
      glass: {
        title: "Glass Greenhouse",
        description:
          "Good light transmission, durable, but high construction cost.",
        features: ["Maximum light", "Long-lasting", "High efficiency"],
        complexity: "High",
        durability: "20+ years",
        cost: "High",
        maintenance: "Easy",
      },
      polycarbonate: {
        title: "Polycarbonate Greenhouse",
        description:
          "Lightweight, affordable, good insulation, but not as durable as glass.",
        features: ["Lightweight", "Affordable", "Good insulation"],
        complexity: "Medium",
        durability: "10-15 years",
        cost: "Medium",
        maintenance: "Easy",
      },
      tunnel: {
        title: "Tunnel Greenhouse",
        description:
          "Simple, affordable, quick installation, but not long-lasting.",
        features: ["Simple", "Affordable", "Quick installation"],
        complexity: "Low",
        durability: "5-8 years",
        cost: "Low",
        maintenance: "Easy",
      },
      industrial: {
        title: "Industrial Greenhouse",
        description: "For large areas, automated, high efficiency.",
        features: ["Large areas", "Automated", "High efficiency"],
        complexity: "High",
        durability: "25+ years",
        cost: "High",
        maintenance: "Complex",
      },
      hydroponic: {
        title: "Hydroponic Greenhouse",
        description: "Soilless cultivation, high yield, modern technology.",
        features: ["Soilless cultivation", "High yield", "Modern technology"],
        complexity: "High",
        durability: "15-20 years",
        cost: "High",
        maintenance: "Complex",
      },
      vertical: {
        title: "Vertical Greenhouse",
        description: "Saves space, ideal for urban conditions, new technology.",
        features: ["Space saving", "Ideal for urban", "New technology"],
        complexity: "High",
        durability: "10-15 years",
        cost: "High",
        maintenance: "Complex",
      },
      comparison: {
        title: "Comparison Table",
        subtitle: "Compare greenhouse types",
        material: "Material",
        light: "Light transmission",
        durability: "Durability",
        cost: "Cost",
        maintenance: "Maintenance",
        serviceLife: "Service life",
      },
      guide: {
        title: "How to Choose the Right Greenhouse?",
        beginners: "For Beginners",
        beginnersDesc:
          "Simple or Tunnel greenhouse - affordable and easy to manage",
        professionals: "For Professionals",
        professionalsDesc: "Polycarbonate or Glass - durable and efficient",
        business: "For Business",
        businessDesc: "Industrial, Hydroponic or Vertical - maximum efficiency",
        consult: "Consult with Specialist",
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("uz");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (
      savedLang &&
      (savedLang === "uz" || savedLang === "ru" || savedLang === "en")
    ) {
      setCurrentLang(savedLang as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[currentLang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
