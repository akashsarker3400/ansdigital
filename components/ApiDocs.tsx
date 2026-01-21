
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode, 
  Terminal, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  PlayCircle,
  Image as ImageIcon,
  Clock,
  Music,
  UserCheck,
  Globe,
  Lock,
  Flag,
  Info,
  LifeBuoy,
  XCircle,
  Mail
} from 'lucide-react';

const ApiDocs: React.FC = () => {
  const fileFields = [
    { name: 'video', type: 'File (MP4)', required: true, desc: 'Music video file. Supports MP4, MOV, AVI. Max size 5GB. 1080p recommended (min 720p). Aspect 16:9.' },
    { name: 'thumbnail', type: 'File (JPG/PNG)', required: true, desc: 'Video thumbnail image. 1280x720 or 1920x1080 recommended. 16:9 aspect ratio.' }
  ];

  const requiredFields = [
    { name: 'videoId', type: 'string', desc: "Partner's internal video ID" },
    { name: 'title', type: 'string', desc: 'Video title' },
    { name: 'primaryArtist', type: 'string[]', desc: 'Array of artist names (must be array of strings)' },
    { name: 'genre', type: 'string', desc: 'Primary genre' },
    { name: 'repertoireOwner', type: 'string', desc: 'channelName / label name' },
    { name: 'label', type: 'string', desc: 'Releasing label name' },
    { name: 'isrc', type: 'string', desc: 'Standard ISRC code' },
    { name: 'vevoChannel', type: 'string', desc: 'Target VEVO channel alias' },
    { name: 'storeReleaseDate', type: 'string', desc: '"On a specific date" or "As soon as possible"' }
  ];

  const contributorFields = [
    { name: 'writer', type: 'string', desc: 'Song writer credit' },
    { name: 'composer', type: 'string', desc: 'Song composer credit' },
    { name: 'musicDirector', type: 'string', desc: 'Music director credit' },
    { name: 'producer', type: 'string', desc: 'Video producer credit' },
    { name: 'editor', type: 'string', desc: 'Video editor credit' }
  ];

  const identificationFields = [
    { name: 'upc', type: 'string', desc: 'Universal Product Code' },
    { name: 'audioIsrc', type: 'string', desc: 'Related Audio ISRC' },
    { name: 'assetId', type: 'string', desc: 'Internal Asset Identifier' }
  ];

  const distributionFields = [
    { name: 'territoryPolicy', type: 'string', desc: 'Distribution territory (e.g. worldwide)' },
    { name: 'visibility', type: 'string', desc: 'Platform visibility (e.g. public, unlisted)' },
    { name: 'language', type: 'string', desc: 'Content language' }
  ];

  const booleanFields = [
    { name: 'explicit', type: 'string', values: 'Yes / No', desc: 'Indicates parental advisory content' },
    { name: 'isKids', type: 'string', values: 'Yes / No', desc: 'Made for kids flag' },
    { name: 'youtubePremiere', type: 'string', values: 'Yes / No', desc: 'Enable YouTube premiere feature' },
    { name: 'videoAlreadyExistOnYoutube', type: 'string', values: 'Yes / No', desc: 'Flag if video is already live' }
  ];

  const descriptiveFields = [
    { name: 'description', type: 'string', desc: 'Video description text' },
    { name: 'keywords', type: 'string[]', desc: 'Array of search keywords' },
    { name: 'copyright', type: 'string', desc: 'Full copyright notice (e.g. © 2025 ANS)' },
    { name: 'copyrightYear', type: 'string', desc: 'Year of copyright' },
    { name: 'countdownTheme', type: 'string', desc: 'Premiere countdown style (Required if premiere=Yes)' },
    { name: 'countdownLength', type: 'string', desc: 'Premiere countdown duration (Required if premiere=Yes)' }
  ];

  const errorCodes = [
    { code: 400, title: "Validation Error", msg: "Required fields missing or invalid format (e.g. primaryArtist not an array)." },
    { code: 401, title: "Unauthorized", msg: "Invalid or missing x-api-key." },
    { code: 409, title: "Duplicate Content", msg: "Song with this ISRC or external ID already exists." },
    { code: 500, title: "Server Error", msg: "Internal system error, please contact support." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505] relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-cyan-500 pl-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileCode className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px]">Developer Documentation v1.0</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-space mb-6 leading-none tracking-tighter">
            B2B Video <br /><span className="text-gradient">Transfer API</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Scalable distribution for Labels, Aggregators, and Partners. Submit music videos to VEVO and YouTube Music with automated metadata validation.
          </p>
        </motion.div>

        {/* Removed Sidebar Grid and centered content using max-w-5xl */}
        <div className="space-y-24">
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Terminal size={24} className="text-cyan-400" />
              1. Overview
            </h2>
            <div className="glass rounded-[32px] p-8 border-white/10">
              <p className="text-gray-400 leading-relaxed mb-6">
                The ANS Music B2B Video Transfer API allows approved partners to submit music videos for digital distribution (VEVO / YouTube and related platforms). Each request uploads one video file, one thumbnail, and associated metadata.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-black uppercase text-gray-500 mb-4">Protocol Details</h4>
                    <ul className="space-y-3">
                       <li className="flex justify-between text-xs"><span className="text-gray-500">Protocol</span> <span className="text-white font-mono">HTTPS</span></li>
                       <li className="flex justify-between text-xs"><span className="text-gray-500">Method</span> <span className="text-green-400 font-mono font-bold">POST</span></li>
                       <li className="flex justify-between text-xs"><span className="text-gray-500">Endpoint</span> <span className="text-cyan-400 font-mono">/b2b-songs/transfer</span></li>
                       <li className="flex justify-between text-xs"><span className="text-gray-500">Type</span> <span className="text-white font-mono">multipart/form-data</span></li>
                    </ul>
                 </div>
                 <div id="auth" className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-black uppercase text-gray-500 mb-4">Authentication</h4>
                    <p className="text-xs text-gray-400 mb-4">All requests must include a valid API key in the header.</p>
                    <div className="glass bg-black p-3 rounded-xl font-mono text-[10px] text-purple-400">
                      x-api-key: YOUR_API_KEY
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* File Upload Fields Section */}
          <section id="files" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Database size={24} className="text-purple-400" />
              2. File Upload Fields (Required)
            </h2>
            <div className="space-y-4">
              {fileFields.map((field, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                        {field.name === 'video' ? <PlayCircle size={20} /> : <ImageIcon size={20} />}
                     </div>
                     <div>
                        <h4 className="font-mono text-sm text-cyan-400 font-bold">{field.name}</h4>
                        <p className="text-xs text-gray-500">{field.type}</p>
                     </div>
                  </div>
                  <p className="text-xs text-gray-400 md:max-w-md">{field.desc}</p>
                  <div className="flex items-center gap-1 text-[10px] text-green-500 font-black uppercase">
                     <CheckCircle2 size={12} /> Required
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Required Metadata Section */}
          <section id="required" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <CheckCircle2 size={24} className="text-green-400" />
              3. Required Metadata
            </h2>
            <div className="glass rounded-[32px] border-white/10 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-gray-500">Field</th>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-gray-500">Type</th>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-gray-500">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {requiredFields.map((field, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-6 font-mono text-xs text-cyan-400 font-bold">{field.name}</td>
                      <td className="p-6 text-xs text-gray-500">{field.type}</td>
                      <td className="p-6 text-xs text-gray-400">{field.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Release Date Logic Rule */}
              <div className="p-8 bg-cyan-500/5 border-t border-white/10">
                 <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-cyan-400" size={18} />
                    <h4 className="text-sm font-bold uppercase tracking-widest">Release Date Logic Rule</h4>
                 </div>
                 <div className="space-y-4 text-xs text-gray-400 leading-relaxed">
                    <div className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                       <div className="text-cyan-400 font-black">IF</div>
                       <div><span className="text-white font-bold">storeReleaseDate</span> = <span className="text-purple-400">"On a specific date"</span></div>
                       <div className="text-cyan-400 font-black">THEN</div>
                       <div className="text-white"><span className="font-bold">releaseDate</span> is <span className="text-red-500 uppercase font-black">Mandatory</span></div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                       <div className="text-cyan-400 font-black">IF</div>
                       <div><span className="text-white font-bold">storeReleaseDate</span> = <span className="text-purple-400">"As soon as possible"</span></div>
                       <div className="text-cyan-400 font-black">THEN</div>
                       <div className="text-white"><span className="font-bold">releaseDate</span> is <span className="text-gray-500 uppercase font-black">Not Required</span></div>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Artist Validation Rules */}
          <section id="artists" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <UserCheck size={24} className="text-cyan-400" />
              4. Strict Artist Validation
            </h2>
            <div className="p-8 glass rounded-[32px] border-red-500/20 bg-red-500/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                 <AlertCircle className="text-red-500" size={20} />
                 <h4 className="text-lg font-bold">Important: Artist fields must be Arrays</h4>
              </div>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Both <code className="text-red-400">primaryArtist</code> and <code className="text-red-400">featuringArtists</code> must be submitted as arrays of strings. Failure to do so will trigger a 400 Validation Error.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <div className="text-[10px] font-black uppercase text-red-500 tracking-widest">❌ Invalid Format</div>
                    <div className="glass bg-black p-4 rounded-2xl font-mono text-xs text-gray-500">
                      "primaryArtist": "Yeasin Arafat"
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="text-[10px] font-black uppercase text-green-500 tracking-widest">✅ Valid Format</div>
                    <div className="glass bg-black p-4 rounded-2xl font-mono text-xs text-cyan-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      "primaryArtist": ["Yeasin Arafat"]
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Contributor, ID, and Distribution Fields */}
          <section id="credits" className="scroll-mt-32">
             <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Music size={24} className="text-orange-400" />
              5. Credits, Identifiers & Settings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="glass p-8 rounded-[32px] border-white/10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Contributor Fields (Optional)</h3>
                  <div className="space-y-6">
                     {contributorFields.map((f, i) => (
                       <div key={i} className="flex justify-between items-start">
                          <span className="font-mono text-xs text-white">{f.name}</span>
                          <span className="text-[10px] text-gray-500 text-right max-w-[150px]">{f.desc}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="glass p-8 rounded-[32px] border-white/10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Identification Codes</h3>
                  <div className="space-y-6">
                     {identificationFields.map((f, i) => (
                       <div key={i} className="flex justify-between items-start">
                          <span className="font-mono text-xs text-white">{f.name}</span>
                          <span className="text-[10px] text-gray-500 text-right max-w-[150px]">{f.desc}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div id="distro" className="glass p-8 rounded-[32px] border-white/10 md:col-span-2">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Release & Distribution Settings</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                     {distributionFields.map((f, i) => (
                       <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <h5 className="font-mono text-xs text-cyan-400 mb-2">{f.name}</h5>
                          <p className="text-[11px] text-gray-500">{f.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </section>

          {/* Flags & Descriptive Fields Section */}
          <section id="flags" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Flag size={24} className="text-purple-400" />
              6. Logic Controls & Descriptions
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-4">
                  <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-4">Boolean Flags</h3>
                  {booleanFields.map((f, i) => (
                    <div key={i} className="p-5 rounded-2xl glass border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-white">{f.name}</span>
                        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[9px] font-bold">{f.values}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                  <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 text-[10px] text-gray-400">
                     <span className="text-cyan-400 font-bold uppercase block mb-2">Premiere Note</span>
                     If <span className="text-white">youtubePremiere</span> is "Yes", you MUST send <span className="text-white">countdownTheme</span> and <span className="text-white">countdownLength</span> data.
                  </div>
               </div>
               <div className="lg:col-span-2 glass p-8 rounded-[32px] border-white/10">
                  <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-6">Descriptive Fields</h3>
                  <div className="space-y-4">
                     {descriptiveFields.map((f, i) => (
                       <div key={i} className="group p-5 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors">
                          <div className="flex items-center justify-between mb-2">
                             <h4 className="font-mono text-xs text-cyan-400 font-bold">{f.name}</h4>
                             <span className="text-[9px] uppercase font-bold text-gray-600">{f.type}</span>
                          </div>
                          <p className="text-xs text-gray-500">{f.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </section>

          {/* Error Responses Section */}
          <section id="errors" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <AlertCircle size={24} className="text-red-400" />
              7. Error Responses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {errorCodes.map((err, idx) => (
                <div key={idx} className="p-6 rounded-[32px] glass border-red-500/10 flex gap-6 group hover:border-red-500/30 transition-all">
                  <div className="text-2xl font-black font-space text-red-500/40 group-hover:text-red-500 transition-colors">{err.code}</div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-2">{err.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{err.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="scroll-mt-32">
            <h2 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Terminal size={24} className="text-cyan-400" />
              8. Best Practices & Quality Specs
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
               <div className="space-y-12">
                  <div className="p-8 glass rounded-[40px] border-cyan-500/20 bg-cyan-500/[0.02]">
                     <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                        <PlayCircle className="text-cyan-400" /> Video Specs
                     </h3>
                     <ul className="space-y-4">
                        {[
                          "Formats: MP4, MOV, AVI",
                          "Resolution: 1080p recommended (Min 720p)",
                          "Aspect Ratio: 16:9",
                          "Max File Size: 5GB",
                          "No watermarks or logos allowed"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs text-gray-400">
                             <ArrowRight size={12} className="text-cyan-500" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-8 glass rounded-[40px] border-purple-500/20 bg-purple-500/[0.02]">
                     <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                        <ImageIcon className="text-purple-400" /> Thumbnail Specs
                     </h3>
                     <ul className="space-y-4">
                        {[
                          "Formats: JPEG, PNG",
                          "Resolution: 1280x720 or 1920x1080",
                          "Aspect Ratio: 16:9",
                          "High quality, clear images only",
                          "No explicit content in thumbnail"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs text-gray-400">
                             <ArrowRight size={12} className="text-purple-500" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="glass p-10 rounded-[40px] border-white/10 space-y-10">
                  <div>
                     <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Submission Ethics</h4>
                     <p className="text-xs text-gray-400 leading-relaxed">Do not resend rejected content without correction flags. Use unique videoId and ISRC for every submission to avoid 409 conflicts.</p>
                  </div>
                  
                  <div className="pt-10 border-t border-white/5">
                     <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em] mb-6">Support & Contact</h4>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                           <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                              <Mail size={18} />
                           </div>
                           <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">info@ansmusiclimited.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                              <LifeBuoy size={18} />
                           </div>
                           <span className="text-xs font-bold text-gray-400">WA: +1(307)204-2560</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                              <FileCode size={18} />
                           </div>
                           <span className="text-xs font-bold text-gray-400">FAX: +1 856 329 8282</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-xl shadow-cyan-500/20">
                     <h5 className="text-white font-black uppercase text-[10px] mb-2">Onboarding</h5>
                     <p className="text-white/80 text-xs leading-relaxed">New partners must undergo a compliance audit before receiving production API keys.</p>
                  </div>
               </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Visual Spacing */}
      <div className="h-20" />
    </div>
  );
};

export default ApiDocs;
