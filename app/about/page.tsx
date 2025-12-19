import { IMAGES } from "@/lib/constants";
import { SafeImage } from "@/components/ui/SafeImage";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-[60vh] bg-slate-900 mb-20 overflow-hidden">
        <SafeImage
          src={IMAGES.about.building}
          alt="Company Building"
          fill
          priority
          className="object-cover opacity-60"
          fallbackGradient="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">关于臻顶</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-slate-200">
              以科技之极，致敬生命之重
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="container mx-auto px-4 md:px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">全球领先的高端医疗影像设备提供商</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              臻顶医疗（Zenith Medical Systems）是全球领先的高端医疗影像设备及技术解决方案提供商。
              自成立以来，我们始终致力于突破科技边界，将人工智能、芯片技术、精密制造与现代医学影像深度融合。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              我们的业务网络覆盖全球 60 多个国家和地区，为超过 10,000 家医疗机构提供服务。
              通过持续的创新投入，我们在磁共振、CT、分子影像等领域掌握了全链条核心技术，让高端医疗科技惠及更广泛的人群。
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">2011</div>
                  <div className="text-slate-500">成立年份</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">8000+</div>
                  <div className="text-slate-500">全球员工</div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <SafeImage
               src={IMAGES.about.team}
               alt="Our Team"
               fill
               priority
               className="object-cover transition-transform duration-700 group-hover:scale-105"
               fallbackGradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10 text-white">
                <p className="font-bold text-xl">汇聚全球顶尖人才</p>
                <p className="text-slate-300">来自全球 20 多个国家的研发精英</p>
             </div>
          </div>
        </div>
      </div>

      {/* Vision/Mission */}
      <div className="bg-slate-900 text-white py-32 mb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-10 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="text-5xl text-blue-500 mb-6 font-serif">Mission</div>
              <h3 className="text-2xl font-bold mb-4">使命</h3>
              <p className="text-slate-400 text-lg">科技智造，关爱生命</p>
            </div>
            <div className="p-10 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors transform md:-translate-y-8">
              <div className="text-5xl text-blue-500 mb-6 font-serif">Vision</div>
              <h3 className="text-2xl font-bold mb-4">愿景</h3>
              <p className="text-slate-400 text-lg">成为世界级医疗创新引领者</p>
            </div>
            <div className="p-10 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="text-5xl text-blue-500 mb-6 font-serif">Values</div>
              <h3 className="text-2xl font-bold mb-4">价值观</h3>
              <p className="text-slate-400 text-lg">创新、极致、担当、共赢</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Gallery */}
      <div className="container mx-auto px-4 md:px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">走进臻顶</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
           <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <SafeImage src={IMAGES.about.meeting} alt="Meeting" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackGradient="linear-gradient(135deg, #64748b 0%, #94a3b8 100%)" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
           </div>
           <div className="relative rounded-2xl overflow-hidden group">
              <SafeImage src={IMAGES.innovation.research} alt="Research" fill loading="eager" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackGradient="linear-gradient(135deg, #64748b 0%, #94a3b8 100%)" />
           </div>
           <div className="relative rounded-2xl overflow-hidden group">
              <SafeImage src={IMAGES.innovation.chip} alt="Tech" fill loading="eager" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackGradient="linear-gradient(135deg, #64748b 0%, #94a3b8 100%)" />
           </div>
           <div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden group">
              <SafeImage src={IMAGES.about.global} alt="Global" fill loading="eager" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackGradient="linear-gradient(135deg, #64748b 0%, #94a3b8 100%)" />
           </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">发展历程</h2>
        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-1/2 space-y-16 pb-20">
          {[
            { year: "2011", title: "成立", desc: "臻顶医疗在上海成立，开启高端医疗设备自主研发之路。" },
            { year: "2014", title: "首发", desc: "发布首款自主研发 1.5T 超导磁共振系统。" },
            { year: "2018", title: "出海", desc: "产品首次出口美国，进军高端国际市场。" },
            { year: "2021", title: "上市", desc: "在科创板成功上市，开启全新发展阶段。" },
            { year: "2024", title: "突破", desc: "发布全球首款人体全身 5.0T 磁共振，刷新行业高度。" },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-12 md:pl-0">
               {/* Dot */}
               <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow md:left-1/2 md:-translate-x-1/2 z-10" />
               
               <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="hidden md:block w-1/2" />
                 <div className="md:w-1/2 md:px-10">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative">
                      {/* Arrow */}
                      <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45 ${idx % 2 === 0 ? '-left-2' : '-right-2'}`} />

                      <span className="text-4xl font-bold text-blue-600 block mb-3">{item.year}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
