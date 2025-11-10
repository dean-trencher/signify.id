import { motion } from "framer-motion";

interface IDCardProps {
  holderName: string;
  walletAddress: string;
  variant?: "purple" | "green" | "dark";
  delay?: number;
}

const IDCard = ({ holderName, walletAddress, variant = "purple", delay = 0 }: IDCardProps) => {
  const variantStyles = {
    purple: "from-solana-purple/90 to-purple-600/90",
    green: "from-solana-green/90 to-emerald-600/90",
    dark: "from-gray-800/90 to-gray-900/90",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className={`relative w-[340px] h-[214px] rounded-2xl bg-gradient-to-br ${variantStyles[variant]} p-6 shadow-2xl backdrop-blur-xl border border-white/10 overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Logo */}
        <div className="relative flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-sm font-bold">S</span>
            </div>
            <span className="text-sm font-bold">SIGNIFY.AI</span>
          </div>
          <div className="text-xs opacity-70">SOLANA ID</div>
        </div>

        {/* Chip */}
        <div className="relative w-12 h-10 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md opacity-80" />
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm" />
        </div>

        {/* Wallet Address */}
        <div className="relative mb-4">
          <p className="text-lg font-mono tracking-wider">
            {walletAddress}
          </p>
        </div>

        {/* Holder Info */}
        <div className="relative flex justify-between items-end">
          <div>
            <p className="text-xs opacity-70 mb-1">Card Holder</p>
            <p className="text-sm font-semibold">{holderName}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />
        </div>

        {/* Solana logo watermark */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <svg width="40" height="40" viewBox="0 0 397 311" fill="currentColor">
            <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
            <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
            <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default IDCard;
