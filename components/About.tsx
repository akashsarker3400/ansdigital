
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  // Explicitly type variants as Variants to satisfy Framer Motion's strict type requirements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Explicitly type variants to avoid string literal widening issues with 'ease' property
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Inside the Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-black font-space mb-8 leading-tight">
              Pioneering the Future <br /> of <span className="text-gradient">Content Rights</span>
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              ANS Digital is a global media-technology leader, architecting the essential infrastructure for the next generation of creative businesses. We specialize in the convergence of professional media services and enterprise-level software solutions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission is to empower creators, record labels, and media enterprises with the tools they need to navigate the complexities of digital distribution, copyright enforcement, and metadata management in a rapidly evolving global market.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 grid md:grid-cols-2 gap-6"
          >
            {[
              { icon: <Target className="text-cyan-400" />, title: "Global Network", text: "We operate on a worldwide scale, bridging the gap between independent creators and major digital service providers like Spotify, Apple Music, and Amazon.", color: "cyan" },
              { icon: <Users className="text-purple-400" />, title: "Talent Partnerships", text: "Our ecosystem supports thousands of artists and creators, providing the technical backbone for their intellectual property management and royalty collection.", color: "purple" },
              { icon: <TrendingUp className="text-orange-400" />, title: "Media Analytics", text: "Harnessing big data to provide real-time insights into content consumption, revenue patterns, and audience demographics across all major platforms.", color: "orange" },
              { icon: <Lightbulb className="text-green-400" />, title: "Future Innovation", text: "Investing heavily in AI-assisted content detection, rights automation, and blockchain-based royalty transparency for a fairer media economy.", color: "green" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-8 rounded-3xl glass border-white/5 hover:bg-white/5 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/5 blur-[100px] group-hover:bg-cyan-500/10 transition-all" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold font-space mb-6">Our Commitment to Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                As a multi-company structure with entities including ANS Music and Tune Via, we provide a holistic approach to the media supply chain. Our Wyoming-registered USA entity, ANS Enterprise LLC, serves as a strategic hub for global operations, ensuring compliance and high-standard business audit systems for our enterprise partners.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { text: "Enterprise-level Content Fingerprinting & Claims Management", color: "cyan" },
                { text: "Global Royalty Tracking & Transparent Reporting", color: "purple" },
                { text: "White-Label Digital Infrastructure & API Services", color: "orange" },
                { text: "Regulatory Media Compliance & Rights Monitoring", color: "green" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-2 h-2 rounded-full bg-${item.color}-400`} />
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
