import { HeroSlider } from "@/components/home/HeroSlider";
import { IMAGES, NEWS } from "@/lib/constants";
import { ArrowRight, Activity, Cpu, Microscope, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const productCategories = [
    { name: "磁共振成像 (MRI)", desc: "超高场强，极致清晰", icon: Activity, img: IMAGES.products.mri },
    { name: "计算机断层扫描 (CT)", desc: "低剂量，高分辨率", icon: Cpu, img: IMAGES.products.ct },
    { name: "数字化X射线 (XR)", desc: "智能成像，高效便捷", icon: Microscope, img: IMAGES.products.dr },
    { name: "智能医疗云", desc: "互联互通，智慧诊断", icon: Globe, img: IMAGES.products.ai },
  ];

  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Product Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">全影像链产品解决方案</h2>
            <p className="text-lg text-slate-600">
              从诊断到治疗，从硬件到软件，我们为您提供全方位的医学影像创新技术。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white h-[400px] hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="mb-4 text-blue-400">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 text-sm">
                    {item.desc}
                  </p>
                  <Link href="/products" className="inline-flex items-center text-blue-400 font-medium text-sm hover:text-blue-300">
                    了解详情 <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.innovation.lab}
                alt="Innovation Lab"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">Innovation Core</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                以创新，<br />回应生命的托付
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                臻顶医疗始终坚持高强度的研发投入，在超导磁体、梯度功率放大器、射频探测器等核心部件领域实现全面突破。我们不仅仅是在制造设备，更是在探索生命的未知疆域。
              </p>
              <ul className="space-y-4 mb-8">
                {["自主研发核心部件 100% 覆盖", "全球 5 大研发中心协同创新", "拥有 3000+ 项核心技术专利"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    {text}
                  </li>
                ))}
              </ul>
              <Link
                href="/innovation"
                className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                探索创新故事
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">新闻中心</h2>
              <p className="text-slate-600">关注臻顶，了解最新行业动态</p>
            </div>
            <Link href="/news" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
              查看全部 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((news) => (
              <Link href={`/news`} key={news.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-semibold">企业新闻</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  {news.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
