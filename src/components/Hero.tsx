import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Abstract red wave background */}
        <div className="absolute top-0 left-0 right-0 h-full bg-slate-50 overflow-hidden">
          <div className="absolute top-0 -left-48 md:-left-24 w-[150%] h-[1000px] opacity-15 rotate-12">
            <div className="absolute w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 animate-wave-slow"></div>
          </div>
        </div>
        
        {/* Decorative elements - Minas Gerais red */}
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-red-600/20 animate-pulse-red"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-red-500/15 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-slate-900/10 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-red-600/10 animate-pulse-red"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="mb-2 inline-block px-4 py-1 rounded-full bg-red-600/10 text-red-700 text-sm font-medium animate-fade-in">
              <span className="relative overflow-hidden">
                <span className="animate-pulse-red">Programa de aceleração 2024</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700 animate-gradient-shift">
                Transformando
              </span>{" "}
              ideias em startups em 54h
            </h1>
            
            <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Nós somos Minas, nós somos Startup Weekend. O Circuito Mineiro reúne
              empreendedores, designers e desenvolvedores para criar o futuro da
              inovação em nosso estado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 group relative overflow-hidden"
              >
                <span className="relative z-10">Inscreva-se agora</span>
                <span className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-white" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100"></span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-900 text-slate-900 hover:bg-slate-900/10 transition-colors"
              >
                Veja cases
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-red-600/10 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-semibold text-red-700">+{i}</span>
                  </div>
                ))}
              </div>
              <p>+500 startups já participaram do nosso programa</p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-red-600/20 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/hero-startup.jpg"
                alt="Startups em Minas Gerais"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-transparent"></div>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-10 right-10 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-100/50 animate-slide-up z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Crescimento</p>
                  <p className="text-xl font-bold text-red-600">+230%</p>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -left-5 top-1/4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float z-20">
              <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center animate-pulse-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            {/* Event callout */}
            <div className="absolute -right-5 top-10 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float-slow z-20">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-900/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs font-medium">15-17 Outubro, 2023</span>
              </div>
            </div>
            
            {/* Additional decorative element */}
            <div className="absolute -right-10 bottom-1/3 z-10">
              <div className="relative w-20 h-20 rotate-12">
                <div className="absolute inset-0 bg-red-600/10 rounded-lg animate-pulse-red"></div>
                <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 