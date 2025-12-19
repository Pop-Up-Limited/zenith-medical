import Link from "next/link";
import { COMPANY_NAME, COMPANY_NAME_EN, NAVIGATION } from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="font-bold text-xl text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {COMPANY_NAME_EN} 致力于通过突破性的医学影像技术和创新解决方案，
              为全球医疗机构提供更精准、更高效的诊断工具，守护人类健康。
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">产品与解决方案</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/products/mri" className="hover:text-blue-400 transition-colors">磁共振成像系统 (MRI)</Link></li>
              <li><Link href="/products/ct" className="hover:text-blue-400 transition-colors">X射线计算机断层扫描 (CT)</Link></li>
              <li><Link href="/products/mi" className="hover:text-blue-400 transition-colors">分子影像系统 (MI)</Link></li>
              <li><Link href="/products/xr" className="hover:text-blue-400 transition-colors">X射线成像系统 (XR)</Link></li>
              <li><Link href="/products/ai" className="hover:text-blue-400 transition-colors">智能医疗云平台</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">快速链接</h3>
            <ul className="space-y-4 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">加入我们</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">联系我们</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-500" />
                <span>上海市浦东新区张江高科技园区<br />科苑路888号 臻顶创新中心</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+86 21 8888 6666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@zenith-med.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 {COMPANY_NAME_EN} Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">隐私政策</Link>
            <Link href="#" className="hover:text-slate-300">使用条款</Link>
            <Link href="#" className="hover:text-slate-300">沪ICP备12345678号</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

