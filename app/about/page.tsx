import { IMAGES } from "@/lib/constants";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-[60vh] bg-slate-900 mb-20 overflow-hidden">
        <Image
          src={IMAGES.about.building}
          alt="Company Building"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">关于臻顶</h1>
            <p className="text-xl max-w-2xl mx-auto font-light">
              以科技之极，致敬生命之重
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">企业概况</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              臻顶医疗（Zenith Medical Systems）是全球领先的高端医疗影像设备及技术解决方案提供商。
              自成立以来，我们始终致力于突破科技边界，将人工智能、芯片技术、精密制造与现代医学影像深度融合。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              我们的业务网络覆盖全球 60 多个国家和地区，为超过 10,000 家医疗机构提供服务。
              通过持续的创新投入，我们在磁共振、CT、分子影像等领域掌握了全链条核心技术，让高端医疗科技惠及更广泛的人群。
            </p>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
             <Image
               src={IMAGES.about.team}
               alt="Our Team"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </div>

      {/* Vision/Mission */}
      <div className="bg-slate-50 py-24 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl text-blue-600 mb-4 font-serif">Mission</div>
              <h3 className="text-xl font-bold mb-4">使命</h3>
              <p className="text-slate-600">科技智造，关爱生命</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl text-blue-600 mb-4 font-serif">Vision</div>
              <h3 className="text-xl font-bold mb-4">愿景</h3>
              <p className="text-slate-600">成为世界级医疗创新引领者</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl text-blue-600 mb-4 font-serif">Values</div>
              <h3 className="text-xl font-bold mb-4">价值观</h3>
              <p className="text-slate-600">创新、极致、担当、共赢</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">发展历程</h2>
        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-1/2 space-y-12">
          {[
            { year: "2011", title: "成立", desc: "臻顶医疗在上海成立，开启高端医疗设备自主研发之路。" },
            { year: "2014", title: "首发", desc: "发布首款自主研发 1.5T 超导磁共振系统。" },
            { year: "2018", title: "出海", desc: "产品首次出口美国，进军高端国际市场。" },
            { year: "2021", title: "上市", desc: "在科创板成功上市，开启全新发展阶段。" },
            { year: "2024", title: "突破", desc: "发布全球首款人体全身 5.0T 磁共振，刷新行业高度。" },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
               {/* Dot */}
               <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow md:left-1/2 md:-translate-x-1/2" />
               
               <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="hidden md:block w-1/2" />
                 <div className="md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100">
                      <span className="text-3xl font-bold text-blue-600 block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
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

