import { HeroSlider } from "@/components/home/HeroSlider";
import { IMAGES, NEWS } from "@/lib/constants";
import { ArrowRight, Activity, Cpu, Microscope, Globe, BarChart3, Users, Zap } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";

export default function Home() {
  const productCategories = [
    { name: "磁共振成像 (MRI)", desc: "超高场强，极致清晰", icon: Activity, img: IMAGES.products.mri },
    { name: "计算机断层扫描 (CT)", desc: "低剂量，高分辨率", icon: Cpu, img: IMAGES.products.ct },
    { name: "数字化X射线 (XR)", desc: "智能成像，高效便捷", icon: Microscope, img: IMAGES.products.dr },
    { name: "分子影像 (MI)", desc: "精准诊疗，洞察微观", icon: Zap, img: IMAGES.products.rt },
    { name: "智能医疗云", desc: "互联互通，智慧诊断", icon: Globe, img: IMAGES.products.ai },
    { name: "介入治疗 (DSA)", desc: "微创介入，清晰导航", icon: Activity, img: IMAGES.products.dsa },
    { name: "超声影像 (US)", desc: "便捷诊断，实时成像", icon: Activity, img: IMAGES.products.us },
    { name: "生命科学仪器", desc: "前沿探索，科研助力", icon: Microscope, img: IMAGES.innovation.research },
  ];

  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Product Highlights Grid - Expanded */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">全影像链产品解决方案</h2>
            <p className="text-lg text-slate-600">
              从诊断到治疗，从硬件到软件，我们为您提供全方位的医学影像创新技术，覆盖临床与科研的每一个环节。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white h-[320px] hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0">
                  <SafeImage
                    src={item.img}
                    alt={item.name}
                    fill
                    priority={idx < 4}
                    loading={idx < 4 ? "eager" : "lazy"}
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    fallbackGradient="linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="mb-3 text-blue-400">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 text-sm">
                    {item.desc}
                  </p>
                  <Link href="/products" className="inline-flex items-center text-blue-400 font-medium text-xs hover:text-blue-300 uppercase tracking-wide">
                    View Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section - Richer Content */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">Innovation Core</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                以创新，<br />回应生命的托付
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                臻顶医疗始终坚持高强度的研发投入，在超导磁体、梯度功率放大器、射频探测器等核心部件领域实现全面突破。
                我们构建了全球协同的研发创新网络，汇聚世界顶尖智慧，只为探索生命的未知疆域。
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-4xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-sm text-slate-600">核心部件自主研发</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                   <div className="text-4xl font-bold text-slate-900 mb-1">3000+</div>
                   <div className="text-sm text-slate-600">核心技术专利</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                   <div className="text-4xl font-bold text-slate-900 mb-1">15%</div>
                   <div className="text-sm text-slate-600">年营收研发投入</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                   <div className="text-4xl font-bold text-slate-900 mb-1">5</div>
                   <div className="text-sm text-slate-600">全球研发中心</div>
                </div>
              </div>

              <Link
                href="/innovation"
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-blue-700 transition-colors font-medium group"
              >
                探索创新故事 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <SafeImage
                  src={IMAGES.innovation.lab}
                  alt="Innovation Lab"
                  fill
                  priority
                  quality={90}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fallbackGradient="linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)"
                />
               </div>
               {/* Floating cards */}
               <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white rounded-xl shadow-xl p-6 hidden md:flex flex-col justify-center items-center z-10">
                  <Cpu size={40} className="text-blue-600 mb-3" />
                  <span className="font-bold text-slate-900 text-center">自研芯片技术</span>
               </div>
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600 rounded-xl shadow-xl p-6 hidden md:flex flex-col justify-center items-center z-10 text-white">
                  <Globe size={40} className="mb-3" />
                  <span className="font-bold text-center">全球协同网络</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section - NEW */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex justify-between items-end mb-12">
             <div>
               <span className="text-blue-400 font-bold tracking-wider uppercase mb-2 block">Visual Tour</span>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">影像之美，科技之光</h2>
               <p className="text-slate-400 max-w-2xl">
                 透过镜头，感受高端医疗科技的精密与温度。
               </p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[500px]">
              {/* Large item */}
              <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
                 <SafeImage 
                   src={IMAGES.gallery[0]} 
                   alt="Gallery 1" 
                   fill 
                   priority
                   quality={90}
                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
                   sizes="(max-width: 768px) 100vw, 66vw"
                   fallbackGradient="linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              {/* Smaller items */}
              <div className="relative rounded-xl overflow-hidden group">
                 <SafeImage 
                   src={IMAGES.gallery[1]} 
                   alt="Gallery 2" 
                   fill 
                   loading="eager"
                   quality={85}
                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
                   sizes="(max-width: 768px) 100vw, 33vw"
                   fallbackGradient="linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                 />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                 <SafeImage 
                   src={IMAGES.gallery[4]} 
                   alt="Gallery 3" 
                   fill 
                   loading="eager"
                   quality={85}
                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
                   sizes="(max-width: 768px) 100vw, 33vw"
                   fallbackGradient="linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Global Impact Section - NEW */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[500px] flex items-center">
               <SafeImage 
                 src={IMAGES.about.global} 
                 alt="Global Map" 
                 fill 
                 priority
                 quality={85}
                 className="object-cover opacity-30" 
                 sizes="100vw"
                 fallbackGradient="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
               />
               <div className="relative z-10 p-12 md:p-24 w-full">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">服务全球 60+ 国家与地区</h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                      从中国的顶级三甲医院，到美国的顶尖科研机构；从欧洲的百年老院，到非洲的基层诊所。
                      臻顶医疗的设备正在全球每一个角落，为数亿患者提供精准的影像诊断服务。
                    </p>
                    <div className="flex flex-wrap gap-8">
                       <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                             <Users size={24} />
                          </div>
                          <div>
                             <div className="text-2xl font-bold">10,000+</div>
                             <div className="text-slate-400 text-sm">装机用户</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                             <Globe size={24} />
                          </div>
                          <div>
                             <div className="text-2xl font-bold">60+</div>
                             <div className="text-slate-400 text-sm">覆盖国家</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                             <BarChart3 size={24} />
                          </div>
                          <div>
                             <div className="text-2xl font-bold">Top 3</div>
                             <div className="text-slate-400 text-sm">行业排名</div>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* News Section - Expanded */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">News & Events</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">新闻中心</h2>
              <p className="text-slate-600">关注臻顶，了解最新行业动态与企业资讯</p>
            </div>
            <Link href="/news" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
              查看全部 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.slice(0, 3).map((news) => (
              <Link href={`/news`} key={news.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={news.image}
                    alt={news.title}
                    fill
                    loading="lazy"
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fallbackGradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <Users size={14} />
                    <span>Zenith Media</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-4 flex-grow">
                    {news.desc}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-auto group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
