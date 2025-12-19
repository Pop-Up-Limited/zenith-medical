import { IMAGES } from "@/lib/constants";
import { ArrowLeft, CheckCircle2, Download, PlayCircle } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { category: "mri" },
    { category: "ct" },
    { category: "xr" },
    { category: "mi" },
    { category: "ai" },
    { category: "us" },
    { category: "dsa" },
    { category: "default" },
  ];
}

export default function ProductDetail({ params }: { params: { category: string } }) {
  // Mock data fetching based on category
  const dataMap: any = {
    mri: {
      title: "磁共振成像系统 (MRI)",
      subtitle: "突破极限，洞见生命微毫",
      desc: "臻顶医疗MRI系列产品，搭载自主研发的超导磁体与梯度系统，配合先进的压缩感知技术，为您提供更快速、更清晰的影像诊断体验。无论是神经系统、骨关节还是腹部成像，Zenith MR都能提供卓越的图像质量。",
      features: ["自主研发 7.0T/5.0T/3.0T 超导磁体", "光梭成像技术 (Zenith-Speed)", "静音扫描平台", "AI智能辅助摆位系统", "全数字光纤传输"],
      image: IMAGES.products.mri,
      gallery: IMAGES.products_gallery.mri
    },
    ct: {
      title: "计算机断层扫描系统 (CT)",
      subtitle: "超宽探测，瞬间成像",
      desc: "从16排到640层，臻顶CT全系列产品致力于降低辐射剂量，提升图像分辨率。独特的时空探测器技术，实现了在极低剂量下的高清晰度成像，为心脏、神经等复杂部位的诊断提供坚实依据。",
      features: ["160mm 宽体时空探测器", "低剂量迭代重建 (Z-Dose)", "能谱成像技术", "全器官灌注成像", "智能心脏运动校正"],
      image: IMAGES.products.ct,
      gallery: IMAGES.products_gallery.ct
    },
    xr: {
      title: "数字化X射线成像系统 (XR)",
      subtitle: "灵活高效，普惠大众",
      desc: "无论是悬吊DR还是移动DR，我们都追求极致的图像质量与便捷的操作流程。智能化的工作流设计，大幅缩短了检查时间，满足门急诊大流量的检查需求。",
      features: ["千万像素非晶硅平板", "全自动智能跟踪定位", "全脊柱/全下肢自动拼接", "无线平板灵便操作", "轻量化移动机身设计"],
      image: IMAGES.products.dr,
      gallery: IMAGES.products_gallery.xr
    },
    // Default fallback with generic data but specific images if available
    default: {
      title: "医疗影像解决方案",
      subtitle: "科技创新，守护健康",
      desc: "臻顶医疗致力于提供全方位的医学影像设备与服务，涵盖分子影像、超声、介入治疗等多个领域。",
      features: ["高精度成像", "智能工作流", "云端互联", "远程诊断支持"],
      image: IMAGES.hero[0].src,
      gallery: IMAGES.hero.map(h => h.src).slice(0, 3)
    }
  };

  const info = dataMap[params.category] || dataMap.default;
  const galleryImages = info.gallery || IMAGES.hero.map((h: any) => h.src).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-800">
             <SafeImage 
               src={info.image} 
               alt={info.title} 
               fill 
               priority
               quality={85}
               className="object-cover opacity-30" 
               sizes="100vw"
               fallbackGradient="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/products" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> 返回产品列表
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{info.title}</h1>
          <p className="text-xl md:text-3xl text-slate-300 max-w-2xl font-light tracking-wide">{info.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider mb-4 block">Product Overview</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">产品概述</h2>
            <p className="text-lg text-slate-600 leading-loose mb-12">
              {info.desc}
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6">核心优势</h3>
            <div className="space-y-4 mb-12">
              {info.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-colors hover:border-blue-200 hover:bg-blue-50/50">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-800 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
               <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-600/20">
                 <Download size={20} /> 下载产品白皮书
               </button>
               <button className="flex items-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:bg-slate-50 transition-colors font-medium">
                 <PlayCircle size={20} /> 观看演示视频
               </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
               <SafeImage 
                 src={info.image} 
                 alt="Product Detail" 
                 fill 
                 priority
                 quality={90}
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 fallbackGradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
               />
            </div>
            
            {/* Spec Card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
               <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">技术规格摘要</h3>
               <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">分辨率</div>
                    <div className="text-lg font-bold">Ultra HD 4K</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">扫描速度</div>
                    <div className="text-lg font-bold">+40% 提升</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">孔径</div>
                    <div className="text-lg font-bold">75cm 超大孔径</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">承重</div>
                    <div className="text-lg font-bold">Max 250kg</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">临床影像画廊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {galleryImages.map((img: string, idx: number) => (
               <div key={idx} className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                  <SafeImage 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    fill 
                    loading={idx === 0 ? "eager" : "lazy"}
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fallbackGradient="linear-gradient(135deg, #64748b 0%, #94a3b8 100%)"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
               </div>
             ))}
             {/* Fillers if not enough images */}
             {galleryImages.length < 3 && (
               <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center text-slate-400">
                 更多影像即将上线
               </div>
             )}
          </div>
        </div>
      </section>
    </div>
  );
}
