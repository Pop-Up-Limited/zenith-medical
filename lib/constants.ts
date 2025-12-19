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

// 使用本地图片路径，所有图片已下载到public目录
export const IMAGES = {
  hero: [
    {
      src: "/hero1.jpg",
      title: "洞见 · 未来",
      subtitle: "Zenith 7.0T 超高场磁共振，探索大脑的无限奥秘",
    },
    {
      src: "/hero2.jpg",
      title: "感知 · 生命",
      subtitle: "全数字化PET-CT，捕捉每一个微小的生命信号",
    },
    {
      src: "/hero3.jpg",
      title: "联结 · 世界",
      subtitle: "全球协同研发网络，让创新科技惠及每一个角落",
    },
    {
      src: "/hero4.jpg",
      title: "智能 · 诊疗",
      subtitle: "AI 赋能医学影像，让诊断更精准，治疗更高效",
    },
    {
      src: "/hero5.jpg",
      title: "守护 · 健康",
      subtitle: "以患者为中心，打造有温度的医疗科技",
    }
  ],
  products: {
    mri: "/mri.jpg",
    ct: "/ct.jpg",
    dr: "/dr.jpg",
    rt: "/rt.jpg",
    ai: "/ai.jpg",
    us: "/us.jpg",
    dsa: "/dsa.jpg",
    mi: "/mi.jpg",
  },
  products_gallery: {
    mri: [
      "/mri.jpg",
      "/mri_gallery1.jpg",
      "/mri_gallery2.jpg",
      "/news4.jpg",
    ],
    ct: [
      "/ct.jpg",
      "/gallery3.jpg",
      "/news5.jpg",
    ],
    xr: [
      "/dr.jpg",
      "/xr_gallery1.jpg",
      "/hero2.jpg",
    ],
    mi: [
      "/mi.jpg",
      "/gallery2.jpg",
      "/news5.jpg",
    ],
    ai: [
      "/ai.jpg",
      "/news6.jpg",
      "/gallery3.jpg",
    ],
    us: [
      "/us.jpg",
      "/gallery4.jpg",
      "/news5.jpg",
    ],
    dsa: [
      "/dsa.jpg",
      "/dr.jpg",
      "/mri.jpg",
    ],
  },
  innovation: {
    chip: "/chip.jpg",
    lab: "/lab.jpg",
    research: "/research.jpg",
    network: "/network.jpg",
  },
  about: {
    building: "/building.jpg",
    team: "/team.jpg",
    meeting: "/meeting.jpg",
    global: "/global.jpg",
  },
  gallery: [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/news5.jpg",
    "/news6.jpg",
  ]
};

export const NEWS = [
  {
    id: 1,
    title: "臻顶医疗发布新一代5.0T人体全身磁共振系统",
    date: "2025-05-15",
    image: "/mri.jpg",
    desc: "突破物理极限，重新定义影像诊断标准。Z-Magnet 5.0T为临床科研带来全新视角，搭载自主研发的'光梭'成像技术。",
    category: "产品发布"
  },
  {
    id: 2,
    title: "臻顶医疗与全球顶尖医学院达成战略合作",
    date: "2025-04-20",
    image: "/us.jpg",
    desc: "双方将在脑科学、肿瘤治疗等领域展开深入合作，共同推动医学影像技术的发展，建立联合实验室。",
    category: "战略合作"
  },
  {
    id: 3,
    title: "让医疗更普惠：臻顶医疗启动'县域医疗提升计划'",
    date: "2025-03-10",
    image: "/gallery3.jpg",
    desc: "致力于将高端医疗设备下沉至基层，让更多患者享受到优质的医疗服务，助力分级诊疗落地。",
    category: "社会责任"
  },
  {
    id: 4,
    title: "臻顶医疗荣获'2025年度全球医疗器械创新奖'",
    date: "2025-02-28",
    image: "/news4.jpg",
    desc: "以表彰其在超高场磁共振领域的技术突破和对全球医疗健康事业的贡献。",
    category: "荣誉奖项"
  },
  {
    id: 5,
    title: "第88届CMEF圆满收官，臻顶全线新品备受瞩目",
    date: "2025-02-15",
    image: "/news5.jpg",
    desc: "展示了从预防、诊断到治疗的全流程解决方案，吸引了来自全球各地的专家学者和合作伙伴。",
    category: "展会活动"
  },
  {
    id: 6,
    title: "臻顶医疗AI辅助诊断系统获FDA认证",
    date: "2025-01-20",
    image: "/news6.jpg",
    desc: "标志着中国医疗AI技术走向世界，为全球医生提供更智能、更高效的诊断工具。",
    category: "产品动态"
  },
  {
    id: 7,
    title: "臻顶医疗出席北美放射学年会(RSNA)，展示最新AI影像成果",
    date: "2024-12-01",
    image: "/news7.jpg",
    desc: "向全球专家展示来自中国的创新力量，获得广泛关注与好评。",
    category: "展会活动"
  },
  {
    id: 8,
    title: "臻顶医疗与北京大学医学部签署合作协议",
    date: "2024-11-15",
    image: "/news8.jpg",
    desc: "双方将在医学影像AI算法研发、人才培养等方面展开深度合作。",
    category: "战略合作"
  },
  {
    id: 9,
    title: "臻顶医疗完成C轮融资，估值突破200亿元",
    date: "2024-10-20",
    image: "/news9.jpg",
    desc: "本轮融资将主要用于产品研发、市场拓展和国际化布局。",
    category: "企业动态"
  }
];
