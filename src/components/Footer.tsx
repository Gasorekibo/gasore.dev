export default function Footer() {
  return (
    <footer className=" pt-10 border-t border-primary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">

          <p className="text-gray-500 text-sm tracking-wider">
            © {new Date().getFullYear()} Gasore Mugwaneza. All rights reserved.
          </p>

          {/* Signature accent line - Made with ♥ in Rwanda */}
          <div className="flex items-center gap-6 text-gray-500 text-sm tracking-wider">
            <span>Made with</span>
            
            {/* Red heart/line accent */}
            <div className="relative">
              <div className="w-32 h-1 bg-[#E8563A] rounded-full shadow-lg shadow-[#E8563A]/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#E8563A] text-lg">♥</span>
              </div>
            </div>
            
            <span>in Rwanda</span>
          </div>
        </div>

        {/* Optional subtle top border glow */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#E8563A]/20 to-transparent" />
      </div>
    </footer>
  );
}