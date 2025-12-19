export const COMPANY_NAME = "臻顶医疗";
export const COMPANY_NAME_EN = "Zenith Medical";

export const NAVIGATION = [
  { name: "首页", href: "/" },
  { name: "关于臻顶", href: "/about" },
  { name: "产品与服务", href: "/products" },
  { name: "创新科技", href: "/innovation" },
  { name: "新闻中心", href: "/news" },
  { name: "投资者关系", href: "/investors" },
];

// 混合使用本地图片和线上图片 - 本地图片用 / 开头，线上图片用 https://
export const IMAGES = {
  hero: [
    {
      src: "/hero1.jpg", // 本地图片
      title: "洞见 · 未来",
      subtitle: "Zenith 7.0T 超高场磁共振，探索大脑的无限奥秘",
    },
    {
      src: "/hero2.jpg", // 本地图片
      title: "感知 · 生命",
      subtitle: "全数字化PET-CT，捕捉每一个微小的生命信号",
    },
    {
      src: "/hero3.jpg", // 本地图片
      title: "联结 · 世界",
      subtitle: "全球协同研发网络，让创新科技惠及每一个角落",
    },
    {
      src: "/hero4.jpg", // 本地图片
      title: "智能 · 诊疗",
      subtitle: "AI 赋能医学影像，让诊断更精准，治疗更高效",
    },
    {
      src: "/hero5.jpg", // 本地图片
      title: "守护 · 健康",
      subtitle: "以患者为中心，打造有温度的医疗科技",
    },
  ],
  products: {
    mri: "/mri.jpg", // 本地图片
    ct: "/ct.jpg", // 本地图片
    dr: "/dr.jpg", // 本地图片
    rt: "/rt.jpg", // 本地图片
    mi: "/mi.jpg", // 本地图片
    ai: "/ai.jpg", // 本地图片
    us: "/us.jpg", // 本地图片
    dsa: "/dsa.jpg", // 本地图片
  },
  products_gallery: {
    mri: [
      "/mri.jpg", // 本地
      "/mri_gallery1.jpg", // 本地
      "/mri_gallery2.jpg", // 本地
      "https://images.unsplash.com/photo-1516549655169-df83a06745d6?auto=format&fit=crop&q=80&w=800", // 线上
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800", // 线上
    ],
    ct: [
      "/ct.jpg", // 本地
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800", // 线上
      "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?auto=format&fit=crop&q=80&w=800", // 线上
      "/istockphoto-1027752634-612x612.jpg", // 本地
      "/istockphoto-1219641664-612x612.jpg", // 本地
    ],
    xr: [
      "/dr.jpg", // 本地
      "/xr_gallery1.jpg", // 本地
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800", // 线上
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800", // 线上
      "/Xray_share.jpg", // 本地
    ],
    mi: [
      "/mi.jpg", // 本地
      "/rt.jpg", // 本地
      "https://images.unsplash.com/photo-1579684385180-164e6f43e112?auto=format&fit=crop&q=80&w=800", // 线上
    ],
    ai: [
      "/ai.jpg", // 本地
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", // 线上
      "/istockphoto-1610685617-612x612.jpg", // 本地
    ],
    us: [
      "/us.jpg", // 本地
      "/istockphoto-1297146235-612x612.jpg", // 本地
      "/istockphoto-1410045037-612x612.jpg", // 本地
    ],
    dsa: [
      "/dsa.jpg", // 本地
      "/istockphoto-906504186-640x640.jpg", // 本地
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200", // 线上
    ],
  },
  innovation: {
    chip: "/chip.jpg", // 本地
    lab: "/lab.jpg", // 本地
    research: "/research.jpg", // 本地
    network: "/network.jpg", // 本地
    // 保留线上备选
    chip_online: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
    lab_online: "https://images.unsplash.com/photo-1581093588401-fbb07373f327?auto=format&fit=crop&q=80&w=1000",
  },
  about: {
    building: "/building.jpg", // 本地
    team: "/team.jpg", // 本地
    meeting: "/meeting.jpg", // 本地
    global: "/global.jpg", // 本地
    // 更多本地图片
    campus1: "/large_0011_medical_campus_aerial_0.jpg", // 本地
    campus2: "/Michigan-Medicine-Health-Care-Pavilion_1900.jpg", // 本地
    campus3: "/MM-UH-building_1.jpg", // 本地
  },
  gallery: [
    "/gallery1.jpg", // 本地
    "/gallery2.jpg", // 本地
    "/gallery3.jpg", // 本地
    "/gallery4.jpg", // 本地
    "/gallery5.jpg", // 本地
    "/gallery6.jpg", // 本地
    // 混合线上图片
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800", // 线上
    "https://images.unsplash.com/photo-1579684385180-164e6f43e112?auto=format&fit=crop&q=80&w=800", // 线上
    "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?auto=format&fit=crop&q=80&w=800", // 线上
    "/pexels-photo-3844581.webp", // 本地
    "/pexels-pixabay-159211.jpg", // 本地
    "/medical-equipment-background-group-health-workers-icu-medical-equipment-background-group-health-132942616.webp", // 本地
    "/modern-medical-equipment-stockcake.webp", // 本地
    "/surgicalservices_feat.webp", // 本地
    "/NEWS_Childrens-hospital-operating-rooms.jpg", // 本地
  ]
};

export const NEWS = [
  {
    id: 1,
    title: "臻顶医疗发布新一代5.0T人体全身磁共振系统",
    date: "2025-05-15",
    image: "/news1.jpg", // 本地
    desc: "突破物理极限，重新定义影像诊断标准。Z-Magnet 5.0T为临床科研带来全新视角，搭载自主研发的'光梭'成像技术。",
    category: "产品发布"
  },
  {
    id: 2,
    title: "臻顶医疗与全球顶尖医学院达成战略合作",
    date: "2025-04-20",
    image: "/news2.jpg", // 本地
    desc: "双方将在脑科学、肿瘤治疗等领域展开深入合作，共同推动医学影像技术的发展，建立联合实验室。",
    category: "战略合作"
  },
  {
    id: 3,
    title: "让医疗更普惠：臻顶医疗启动'县域医疗提升计划'",
    date: "2025-03-10",
    image: "/news3.jpg", // 本地
    desc: "致力于将高端医疗设备下沉至基层，让更多患者享受到优质的医疗服务，助力分级诊疗落地。",
    category: "社会责任"
  },
  {
    id: 4,
    title: "臻顶医疗荣获'2025年度全球医疗器械创新奖'",
    date: "2025-02-28",
    image: "/news4.jpg", // 本地
    desc: "以表彰其在超高场磁共振领域的技术突破和对全球医疗健康事业的贡献。",
    category: "荣誉奖项"
  },
  {
    id: 5,
    title: "第88届CMEF圆满收官，臻顶全线新品备受瞩目",
    date: "2025-02-15",
    image: "/news5.jpg", // 本地
    desc: "展示了从预防、诊断到治疗的全流程解决方案，吸引了来自全球各地的专家学者和合作伙伴。",
    category: "展会活动"
  },
  {
    id: 6,
    title: "臻顶医疗AI辅助诊断系统获FDA认证",
    date: "2025-01-20",
    image: "/news6.jpg", // 本地
    desc: "标志着中国医疗AI技术走向世界，为全球医生提供更智能、更高效的诊断工具。",
    category: "产品动态"
  },
  {
    id: 7,
    title: "臻顶医疗全球研发中心正式启用",
    date: "2025-01-10",
    image: "/news7.jpg", // 本地
    desc: "投资50亿元打造的全球研发中心正式启用，将汇聚全球顶尖科研人才，加速医疗科技创新。",
    category: "企业动态"
  },
  {
    id: 8,
    title: "臻顶医疗与哈佛医学院签署合作协议",
    date: "2024-12-20",
    image: "/news8.jpg", // 本地
    desc: "双方将在神经影像、肿瘤影像等领域展开深度合作，共同推动精准医疗发展。",
    category: "战略合作"
  },
  {
    id: 9,
    title: "臻顶医疗助力'一带一路'医疗健康合作",
    date: "2024-12-05",
    image: "/news9.jpg", // 本地
    desc: "向'一带一路'沿线国家捐赠高端医疗设备，助力提升当地医疗服务水平。",
    category: "社会责任"
  },
  // 保留部分线上图片作为备选
  {
    id: 10,
    title: "臻顶医疗发布2024年度社会责任报告",
    date: "2024-11-30",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    desc: "报告详细展示了公司在可持续发展、公益慈善、员工关怀等方面的实践与成果。",
    category: "企业动态"
  },
];
