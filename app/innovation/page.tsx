import { IMAGES } from "@/lib/constants";
import Image from "next/image";
import { Cpu, Globe, Zap, Network } from "lucide-react";

export default function InnovationPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase">Research & Development</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">创新，源于对生命的敬畏</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            我们深知，每一次技术微小的进步，都可能为患者带来巨大的生机。
            因此，臻顶医疗坚持将营收的 15% 以上投入研发，构建起产学研医深度融合的创新生态。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
             <Image src={IMAGES.innovation.chip} alt="Chip Technology" fill className="object-cover" />
           </div>
           <div className="flex flex-col justify-center">
             <h2 className="text-3xl font-bold mb-6">掌握核心技术，打破行业壁垒</h2>
             <p className="text-lg text-slate-600 mb-6">
               从探测器芯片到超导磁体，从高压发生器到人工智能算法，我们致力于实现全链条核心部件的自主可控。
             </p>
             <ul className="space-y-4">
               <li className="flex items-center gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Cpu /></div>
                 <div>
                   <h4 className="font-bold">自研芯片</h4>
                   <p className="text-sm text-slate-600">低噪声、高灵敏度信号处理芯片</p>
                 </div>
               </li>
               <li className="flex items-center gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Zap /></div>
                 <div>
                   <h4 className="font-bold">梯度功率放大器</h4>
                   <p className="text-sm text-slate-600">实现超快速、高分辨率成像</p>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-12 mb-24 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">全球研发网络</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="text-center">
                 <div className="flex justify-center mb-4 text-blue-400"><Globe size={48} /></div>
                 <h3 className="text-xl font-bold mb-2">上海总部</h3>
                 <p className="text-slate-400">全球研发中心与制造基地</p>
               </div>
               <div className="text-center">
                 <div className="flex justify-center mb-4 text-blue-400"><Network size={48} /></div>
                 <h3 className="text-xl font-bold mb-2">休斯敦</h3>
                 <p className="text-slate-400">北美研发中心，聚焦前沿物理技术</p>
               </div>
               <div className="text-center">
                 <div className="flex justify-center mb-4 text-blue-400"><Cpu size={48} /></div>
                 <h3 className="text-xl font-bold mb-2">武汉</h3>
                 <p className="text-slate-400">软件与人工智能研发中心</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

