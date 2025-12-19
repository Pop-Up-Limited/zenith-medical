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

// 使用最简单的图片URL格式，确保所有图片都能加载
// 格式：https://images.unsplash.com/photo-{ID}?w={width}
export const IMAGES = {
  hero: [
    {
      src: "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=1920&h=1080&fit=crop",
      title: "洞见 · 未来",
      subtitle: "Zenith 7.0T 超高场磁共振，探索大脑的无限奥秘",
    },
    {
      src: "https://images.unsplash.com/photo-1579684385180-164e6f43e112?w=1920&h=1080&fit=crop",
      title: "感知 · 生命",
      subtitle: "全数字化PET-CT，捕捉每一个微小的生命信号",
    },
    {
      src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1920&h=1080&fit=crop",
      title: "联结 · 世界",
      subtitle: "全球协同研发网络，让创新科技惠及每一个角落",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e13c?w=1920&h=1080&fit=crop",
      title: "智能 · 诊疗",
      subtitle: "AI 赋能医学影像，让诊断更精准，治疗更高效",
    },
    {
      src: "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=1920&h=1080&fit=crop",
      title: "守护 · 健康",
      subtitle: "以患者为中心，打造有温度的医疗科技",
    }
  ],
  products: {
    mri: "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=1200&h=800&fit=crop",
    ct: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&h=800&fit=crop",
    dr: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=800&fit=crop",
    rt: "https://images.unsplash.com/photo-1579684385180-164e6f43e112?w=1200&h=800&fit=crop",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    us: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    dsa: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=800&fit=crop",
    mi: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
  },
  products_gallery: {
    mri: [
      "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    ],
    ct: [
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=800&h=600&fit=crop",
    ],
    xr: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579684385180-164e6f43e112?w=800&h=600&fit=crop",
    ],
    mi: [
      "https://images.unsplash.com/photo-1579684385180-164e6f43e112?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=800&h=600&fit=crop",
    ],
    ai: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e13c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?w=800&h=600&fit=crop",
    ],
    us: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=800&h=600&fit=crop",
    ],
    dsa: [
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=800&h=600&fit=crop",
    ],
  },
  innovation: {
    chip: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1000&h=800&fit=crop",
    lab: "https://images.unsplash.com/photo-1581093588401-fbb07373f327?w=1000&h=800&fit=crop",
    research: "https://images.unsplash.com/photo-1581056771107-24ca5f037085?w=1000&h=800&fit=crop",
    network: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=800&fit=crop",
  },
  about: {
    building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop",
    team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&h=1200&fit=crop",
    meeting: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2000&h=1200&fit=crop",
    global: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=2000&h=1200&fit=crop",
  },
  gallery: [
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1579684385180-164e6f43e112?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e13c?w=800&h=600&fit=crop",
  ]
};

export const NEWS = [
  {
    id: 1,
    title: "臻顶医疗发布新一代5.0T人体全身磁共振系统",
    date: "2025-05-15",
    image: "https://images.unsplash.com/photo-1516549655169-df83a06745d6?w=800&h=600&fit=crop",
    desc: "突破物理极限，重新定义影像诊断标准。Z-Magnet 5.0T为临床科研带来全新视角，搭载自主研发的'光梭'成像技术。",
    category: "产品发布"
  },
  {
    id: 2,
    title: "臻顶医疗与全球顶尖医学院达成战略合作",
    date: "2025-04-20",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    desc: "双方将在脑科学、肿瘤治疗等领域展开深入合作，共同推动医学影像技术的发展，建立联合实验室。",
    category: "战略合作"
  },
  {
    id: 3,
    title: "让医疗更普惠：臻顶医疗启动'县域医疗提升计划'",
    date: "2025-03-10",
    image: "https://images.unsplash.com/photo-1584515933487-9d3005c010aa?w=800&h=600&fit=crop",
    desc: "致力于将高端医疗设备下沉至基层，让更多患者享受到优质的医疗服务，助力分级诊疗落地。",
    category: "社会责任"
  },
  {
    id: 4,
    title: "臻顶医疗荣获'2025年度全球医疗器械创新奖'",
    date: "2025-02-28",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    desc: "以表彰其在超高场磁共振领域的技术突破和对全球医疗健康事业的贡献。",
    category: "荣誉奖项"
  },
  {
    id: 5,
    title: "第88届CMEF圆满收官，臻顶全线新品备受瞩目",
    date: "2025-02-15",
    image: "https://images.unsplash.com/photo-1551076805-e2983fe3600c?w=800&h=600&fit=crop",
    desc: "展示了从预防、诊断到治疗的全流程解决方案，吸引了来自全球各地的专家学者和合作伙伴。",
    category: "展会活动"
  },
  {
    id: 6,
    title: "臻顶医疗AI辅助诊断系统获FDA认证",
    date: "2025-01-20",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    desc: "标志着中国医疗AI技术走向世界，为全球医生提供更智能、更高效的诊断工具。",
    category: "产品动态"
  },
  {
    id: 7,
    title: "臻顶医疗出席北美放射学年会(RSNA)，展示最新AI影像成果",
    date: "2024-12-01",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e13c?w=800&h=600&fit=crop",
    desc: "向全球专家展示来自中国的创新力量，获得广泛关注与好评。",
    category: "展会活动"
  },
  {
    id: 8,
    title: "臻顶医疗与北京大学医学部签署合作协议",
    date: "2024-11-15",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    desc: "双方将在医学影像AI算法研发、人才培养等方面展开深度合作。",
    category: "战略合作"
  },
  {
    id: 9,
    title: "臻顶医疗完成C轮融资，估值突破200亿元",
    date: "2024-10-20",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    desc: "本轮融资将主要用于产品研发、市场拓展和国际化布局。",
    category: "企业动态"
  }
];
