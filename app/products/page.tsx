"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/constants";

const PRODUCT_CATEGORIES = [
  { id: "mri", name: "磁共振成像 (MRI)", count: 3, img: IMAGES.products.mri },
  { id: "ct", name: "计算机断层扫描 (CT)", count: 3, img: IMAGES.products.ct },
  { id: "xr", name: "X射线成像 (XR)", count: 3, img: IMAGES.products.dr },
  { id: "mi", name: "分子影像 (MI)", count: 1, img: IMAGES.products.rt },
  { id: "ai", name: "智能医疗云", count: 1, img: IMAGES.products.ai },
  { id: "us", name: "超声影像 (US)", count: 1, img: IMAGES.products.us },
  { id: "dsa", name: "介入治疗 (DSA)", count: 1, img: IMAGES.products.dsa },
];

const PRODUCTS = [
  {
    id: "mri-70",
    name: "Zenith MR 7.0T",
    category: "mri",
    desc: "超高场全身磁共振系统，开启脑科学研究新纪元",
    tags: ["7.0T", "科研旗舰", "神经影像"],
    img: IMAGES.products.mri
  },
  {
    id: "mri-50",
    name: "Zenith MR 5.0T",
    category: "mri",
    desc: "全身临床应用超高场磁共振，重新定义临床标准",
    tags: ["5.0T", "全身成像", "临床突破"],
    img: IMAGES.products.mri
  },
  {
    id: "mri-30",
    name: "Zenith MR 3.0T",
    category: "mri",
    desc: "临床主流高场磁共振，平衡性能与成本",
    tags: ["3.0T", "临床主流", "高性价比"],
    img: IMAGES.products.mri
  },
  {
    id: "ct-640",
    name: "Zenith CT 640",
    category: "ct",
    desc: "640层动态容积CT，一圈覆盖全心脏",
    tags: ["640层", "心脏成像", "低剂量"],
    img: IMAGES.products.ct
  },
  {
    id: "ct-320",
    name: "Zenith CT 320",
    category: "ct",
    desc: "超高端螺旋CT，精准影像诊断利器",
    tags: ["320排", "智能工作流"],
    img: IMAGES.products.ct
  },
  {
    id: "dr-pro",
    name: "Zenith DR Pro",
    category: "xr",
    desc: "悬吊式数字化X射线摄影系统",
    tags: ["自动跟踪", "全脊柱拼接"],
    img: IMAGES.products.dr
  },
  {
    id: "dr-mob",
    name: "Zenith Mobile DR",
    category: "xr",
    desc: "移动式数字化X射线摄影系统",
    tags: ["移动", "床旁摄影", "大容量电池"],
    img: IMAGES.products.dr
  },
  {
    id: "mi-pet",
    name: "Zenith PET-CT",
    category: "mi",
    desc: "全身PET-CT分子影像系统，精准定位病灶",
    tags: ["PET-CT", "分子影像", "全身扫描"],
    img: IMAGES.products.rt
  },
  {
    id: "ai-cloud",
    name: "Zenith AI Cloud",
    category: "ai",
    desc: "智能医疗云平台，AI辅助诊断",
    tags: ["AI诊断", "云端存储", "远程会诊"],
    img: IMAGES.products.ai
  },
  {
    id: "us-portable",
    name: "Zenith Portable US",
    category: "us",
    desc: "便携式超声诊断系统，随时随地精准检查",
    tags: ["便携", "实时成像", "多探头"],
    img: IMAGES.products.us
  },
  {
    id: "dsa-angiography",
    name: "Zenith DSA System",
    category: "dsa",
    desc: "数字化血管造影系统，精准介入导航",
    tags: ["DSA", "介入导航", "3D重建"],
    img: IMAGES.products.dsa
  },
  {
    id: "ct-128",
    name: "Zenith CT 128",
    category: "ct",
    desc: "128层螺旋CT，满足常规临床需求",
    tags: ["128层", "快速扫描", "低剂量"],
    img: IMAGES.products.ct
  },
  {
    id: "dr-vertical",
    name: "Zenith DR Vertical",
    category: "xr",
    desc: "立式数字化X射线摄影系统",
    tags: ["立式", "全自动", "高清成像"],
    img: IMAGES.products.dr
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 mb-12">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">产品与服务</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            臻顶医疗提供涵盖预防、诊断、治疗、康复的全流程医疗健康解决方案，
            以创新科技赋能医疗机构，提升诊疗效率与质量。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filter */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-lg">
                <Filter size={20} />
                <span>产品分类</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center ${
                    activeCategory === "all" 
                      ? "bg-blue-600 text-white" 
                      : "hover:bg-slate-50 text-slate-600"
                  }`}
                >
                  <span>全部产品</span>
                  <span className="text-xs opacity-80">{PRODUCTS.length}</span>
                </button>
                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center ${
                      activeCategory === cat.id 
                        ? "bg-blue-600 text-white" 
                        : "hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs opacity-80">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <SafeImage
                      src={product.img}
                      alt={product.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackGradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur text-xs font-semibold text-slate-700 px-2 py-1 rounded shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wider">
                      {PRODUCT_CATEGORIES.find(c => c.id === product.category)?.name}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-6">{product.desc}</p>
                    <Link 
                      href={`/products/${product.category}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      查看详情 <ChevronRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

