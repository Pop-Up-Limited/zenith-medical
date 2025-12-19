import { IMAGES } from "@/lib/constants";
import { SafeImage } from "@/components/ui/SafeImage";
import { Cpu, Globe, Zap, Network, Microscope, Dna, Share2 } from "lucide-react";

export default function InnovationPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase mb-4 block">Research & Development</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">创新，源于对生命的敬畏</h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            我们深知，每一次技术微小的进步，都可能为患者带来巨大的生机。
            因此，臻顶医疗坚持将营收的 15% 以上投入研发，构建起产学研医深度融合的创新生态。
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
           <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
             <SafeImage src={IMAGES.innovation.chip} alt="Chip Technology" fill priority className="object-cover" fallbackGradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" />
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
           </div>
           <div className="flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">掌握核心技术，打破行业壁垒</h2>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
               从探测器芯片到超导磁体，从高压发生器到人工智能算法，我们致力于实现全链条核心部件的自主可控，让每一台设备都拥有“中国芯”。
             </p>
             <ul className="space-y-8">
               <li className="flex items-start gap-6">
                 <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm"><Cpu size={32} /></div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">自研光子计数芯片</h4>
                   <p className="text-slate-600">突破传统探测极限，实现极低剂量下的超清成像，捕捉每一个光子的能量。</p>
                 </div>
               </li>
               <li className="flex items-start gap-6">
                 <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm"><Zap size={32} /></div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">高性能梯度功率放大器</h4>
                   <p className="text-slate-600">为磁共振系统提供强劲动力，实现毫秒级快速扫描。</p>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center lg:flex-row-reverse">
           <div className="lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
             <SafeImage src={IMAGES.innovation.lab} alt="Lab" fill priority className="object-cover" fallbackGradient="linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)" />
           </div>
           <div className="lg:order-1 flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">产学研医，深度融合</h2>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
               创新不仅仅发生在实验室，更发生在临床一线。我们与全球顶尖医院建立联合研究中心，让医生的需求直接驱动技术创新。
             </p>
             <ul className="space-y-8">
               <li className="flex items-start gap-6">
                 <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm"><Microscope size={32} /></div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">临床联合实验室</h4>
                   <p className="text-slate-600">与北京协和医院、华西医院等建立深度合作，共同攻克疑难重症。</p>
                 </div>
               </li>
               <li className="flex items-start gap-6">
                 <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm"><Share2 size={32} /></div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">开放创新平台</h4>
                   <p className="text-slate-600">向全球科研机构开放底层开发接口，赋能科学家进行前沿医学探索。</p>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        {/* Global Network */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <SafeImage src={IMAGES.innovation.network} alt="Network" fill priority className="object-cover opacity-20" fallbackGradient="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">全球研发网络</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                 <div className="flex justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform"><Globe size={64} /></div>
                 <h3 className="text-2xl font-bold mb-4">上海 · 总部</h3>
                 <p className="text-slate-400 leading-relaxed">全球研发中心与制造基地<br/>聚焦全产品线系统集成</p>
               </div>
               <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                 <div className="flex justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform"><Network size={64} /></div>
                 <h3 className="text-2xl font-bold mb-4">休斯敦 · 北美</h3>
                 <p className="text-slate-400 leading-relaxed">前沿物理技术研究中心<br/>聚焦磁共振底层物理创新</p>
               </div>
               <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                 <div className="flex justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform"><Dna size={64} /></div>
                 <h3 className="text-2xl font-bold mb-4">武汉 · 软件</h3>
                 <p className="text-slate-400 leading-relaxed">人工智能与软件研发中心<br/>聚焦医疗大数据与AI算法</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
