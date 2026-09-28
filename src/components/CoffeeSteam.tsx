import React from 'react';

interface CoffeeSteamProps {
  className?: string;
}

export const CoffeeSteam: React.FC<CoffeeSteamProps> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={"relative pointer-events-none select-none " + className}
      style={{ width: 44, height: 44 }}
    >
      {/* Stream 1 - Left */}
      <span
        className="steam-stream-1 absolute bottom-1 left-2.5 w-1.5 h-6 rounded-full bg-gradient-to-t from-[#e6b17e]/40 via-[#f5deca]/25 to-transparent blur-[1.5px]"
      />
      {/* Stream 2 - Center */}
      <span
        className="steam-stream-2 absolute bottom-2 left-5 w-2 h-8 rounded-full bg-gradient-to-t from-[#e6b17e]/50 via-[#f7f2ea]/30 to-transparent blur-[2px]"
      />
      {/* Stream 3 - Right */}
      <span
        className="steam-stream-3 absolute bottom-1.5 left-7.5 w-1.5 h-6 rounded-full bg-gradient-to-t from-[#e6b17e]/35 via-[#f5deca]/20 to-transparent blur-[1.5px]"
      />
    </div>
  );
};
