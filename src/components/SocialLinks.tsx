import React from 'react';

export function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="backdrop-blur-md bg-white/10 shadow-lg">
        <div className="flex justify-center items-center gap-4 py-2">
          <a href="https://github.com/mouryas-aiml" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#08fc96] transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mourya-s-4518b9296" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#08fc96] transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/mouryagowda.s?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#08fc96] transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/Mr_Mourya_Gowda?s=09" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#08fc96] transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/_mourya__gowda_/profilecard/?igsh=dHZ4NzRtdHpzdGE5" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#08fc96] transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="text-center py-1 bg-white/5">
          <p className="text-sm font-bold text-white">© 2024 MOURYA S. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}