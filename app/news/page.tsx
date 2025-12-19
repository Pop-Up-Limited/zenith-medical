import { NEWS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">新闻中心</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((news) => (
            <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56">
                <Image src={news.image} alt={news.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-2">{news.date}</div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 cursor-pointer">
                  {news.title}
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {news.desc}
                </p>
                <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                  阅读全文 <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
          
          {/* Filler News for visual volume */}
          {[4, 5, 6].map((i) => (
             <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="relative h-56 bg-slate-200 animate-pulse">
                 {/* Placeholder for more news */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                   News Image Placeholder
                 </div>
               </div>
               <div className="p-6">
                 <div className="text-sm text-slate-500 mb-2">2024-12-01</div>
                 <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 cursor-pointer">
                   臻顶医疗出席北美放射学年会(RSNA)，展示最新AI影像成果
                 </h2>
                 <p className="text-slate-600 mb-4 line-clamp-3">
                   向全球专家展示来自中国的创新力量，获得广泛关注与好评。
                 </p>
                 <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                   阅读全文 <ArrowRight size={16} className="ml-1" />
                 </Link>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

