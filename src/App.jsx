
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { 
  Twitter, 
  MessageCircle, 
  Copy, 
  TrendingUp, 
  Users, 
  Zap, 
  Star,
  Rocket,
  Crown,
  Shield
} from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Contract Address Copied!",
      description: "Ready to trade $BULLRIO! 🚀",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Market Cap", value: "$2.5M", icon: TrendingUp },
    { label: "Holders", value: "15,420", icon: Users },
    { label: "Liquidity", value: "$850K", icon: Zap },
    { label: "24h Volume", value: "$1.2M", icon: Star }
  ];

  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000", percentage: "100%" },
    { label: "Liquidity Pool", value: "800,000,000", percentage: "80%" },
    { label: "Marketing", value: "100,000,000", percentage: "10%" },
    { label: "Team", value: "100,000,000", percentage: "10%" }
  ];

  const roadmapItems = [
    { phase: "Phase 1", title: "Launch & Community", status: "completed", icon: Rocket },
    { phase: "Phase 2", title: "CEX Listings", status: "active", icon: Crown },
    { phase: "Phase 3", title: "NFT Collection", status: "upcoming", icon: Star },
    { phase: "Phase 4", title: "Metaverse Integration", status: "upcoming", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pixel-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a93f77ec-1590-4fa4-bf99-1c2d2bf4735e/e547c29a1bcc0ffe549246e7f894cbf9.png" 
                alt="BULLRIO pixel art logo with blue background and retro gaming characters"
                className="w-full max-w-4xl h-auto retro-shadow animate-float"
              />
            </motion.div>

            {/* Main Character */}
            <motion.div 
              className="mb-12 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a93f77ec-1590-4fa4-bf99-1c2d2bf4735e/ba98481dcc68d87f05a59eafac93eebd.jpg" 
                alt="Pixel art bull character with blue overalls and cap"
                className="w-64 h-64 retro-shadow glow-blue animate-pulse-glow"
              />
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white pixel-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              $BULLRIO
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              The Ultimate Pixel Bull Memecoin! Join the retro revolution and ride the bull to the moon! 🚀
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-lg retro-shadow glow-blue"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Buy $BULLRIO
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 text-lg retro-shadow"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </motion.div>

            {/* Contract Address */}
            <motion.div 
              className="bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto retro-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <p className="text-blue-100 text-sm mb-2">Contract Address:</p>
              <div className="flex items-center gap-2">
                <code className="text-white text-xs bg-black/50 px-2 py-1 rounded flex-1 truncate">
                  {contractAddress}
                </code>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={copyToClipboard}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-yellow-400 opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center retro-shadow hover:glow-blue transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white pixel-text">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white pixel-text mb-12">
              Tokenomics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 retro-shadow hover:glow-blue transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{item.label}</h3>
                    <span className="text-yellow-400 font-bold">{item.percentage}</span>
                  </div>
                  <p className="text-blue-200">{item.value.toLocaleString()} tokens</p>
                  <div className="w-full bg-black/30 rounded-full h-2 mt-3">
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.percentage }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white pixel-text mb-12">
              Roadmap
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.phase}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 retro-shadow transition-all duration-300 ${
                    item.status === 'completed' ? 'border-2 border-green-400 glow-blue' :
                    item.status === 'active' ? 'border-2 border-yellow-400 animate-pulse-glow' :
                    'border-2 border-gray-400'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className={`h-8 w-8 mx-auto mb-3 ${
                    item.status === 'completed' ? 'text-green-400' :
                    item.status === 'active' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`} />
                  <h3 className="text-lg font-bold text-white text-center mb-2">{item.phase}</h3>
                  <p className="text-blue-200 text-center text-sm">{item.title}</p>
                  <div className={`text-xs text-center mt-2 px-2 py-1 rounded ${
                    item.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                    item.status === 'active' ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-gray-400/20 text-gray-400'
                  }`}>
                    {item.status.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white pixel-text mb-8">
              Join the Bull Army!
            </h2>
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              Connect with fellow bulls and stay updated on the latest $BULLRIO news and developments!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 text-lg retro-shadow glow-blue"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Follow on Twitter
              </Button>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 text-lg retro-shadow"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Telegram
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200 mb-4">
            $BULLRIO - The Ultimate Pixel Bull Memecoin
          </p>
          <p className="text-sm text-blue-300">
            This is a meme token created for entertainment purposes. Please do your own research before investing.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;
