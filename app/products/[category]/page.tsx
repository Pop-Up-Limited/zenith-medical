import { IMAGES } from "@/lib/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { category: "mri" },
    { category: "ct" },
    { category: "xr" },
    { category: "mi" },
    { category: "ai" },
  ];
}

export default function ProductDetail({ params }: { params: { category: string } }) {
  // Mock data fetching based on category
  const dataMap: any = {
    mri: {
      title: "磁共振成像系统 (MRI)",
      subtitle: "突破极限，洞见生命微毫",
      desc: "臻顶医疗MRI系列产品，搭载自主研发的超导磁体与梯度系统，配合先进的压缩感知技术，为您提供更快速、更清晰的影像诊断体验。",
      features: ["自主研发超导磁体", "光梭成像技术", "静音扫描平台", "AI智能辅助摆位"],
      image: IMAGES.products.mri
    },
    ct: {
      title: "计算机断层扫描系统 (CT)",
      subtitle: "超宽探测，瞬间成像",
      desc: "从16排到640层，臻顶CT全系列产品致力于降低辐射剂量，提升图像分辨率，为心脏、神经等复杂部位的诊断提供坚实依据。",
      features: ["时空探测器", "低剂量迭代重建", "能谱成像", "全器官灌注"],
      image: IMAGES.products.ct
    },
    xr: {
      title: "数字化X射线成像系统 (XR)",
      subtitle: "灵活高效，普惠大众",
      desc: "无论是悬吊DR还是移动DR，我们都追求极致的图像质量与便捷的操作流程，满足门急诊大流量的检查需求。",
      features: ["千万像素平板", "自动跟踪定位", "全自动拼接", "轻量化设计"],
      image: IMAGES.products.dr
    },
    // Default fallback
    default: {
      title: "医疗影像解决方案",
      subtitle: "科技创新，守护健康",
      desc: "臻顶医疗致力于提供全方位的医学影像设备与服务。",
      features: ["高精度成像", "智能工作流", "云端互联"],
      image: IMAGES.hero[0].src
    }
  };

  const info = dataMap[params.category] || dataMap.default;

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image src={info.image} alt={info.title} fill className="object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/products" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> 返回产品列表
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{info.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">{info.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">产品概述</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {info.desc}
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6">核心优势</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-medium text-slate-800">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex gap-4">
               <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                 下载产品白皮书
               </button>
               <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-full hover:bg-slate-50 transition-colors font-medium">
                 预约演示
               </button>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
             <Image src={info.image} alt="Product Detail" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

