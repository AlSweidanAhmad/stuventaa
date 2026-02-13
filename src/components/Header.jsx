import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';
import { useToast } from '@/components/ui/use-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setIsOpen(false);

    const scrollToId = () => {
      const element = document.getElementById(id);
      if (!element) {
        toast({
          title: 'Navigation Error',
          description: `Section ${id} not found.`,
          variant: 'destructive',
        });
        return;
      }

      const headerOffset = 90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    window.setTimeout(scrollToId, 120);
  };

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.programs'), id: 'services' },
    { label: t('nav.contact'), id: 'contact' },
    { label: t('nav.privacy'), id: 'privacy' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <button
          onClick={() => handleScroll('home')}
          className="focus:outline-none hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          {navItems.map((item) =>
            item.id === 'privacy' ? (
              <Link
                key={item.id}
                to="/privacy"
                className="text-sm font-semibold text-[#003366] hover:text-[#FF6600] transition-colors uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-sm font-semibold text-[#003366] hover:text-[#FF6600] transition-colors uppercase tracking-wider focus:outline-none"
              >
                {item.label}
              </button>
            )
          )}

          {/* Language Switcher */}
          <div className="flex items-center gap-3 ml-6">
            <button
              onClick={() => changeLanguage('de')}
              className={`text-sm font-bold ${
                currentLang.startsWith('de')
                  ? 'text-[#FF6600]'
                  : 'text-[#003366]'
              }`}
            >
              DE
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`text-sm font-bold ${
                currentLang.startsWith('en')
                  ? 'text-[#FF6600]'
                  : 'text-[#003366]'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#003366]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="flex flex-col py-4 px-6 gap-y-3">
              {navItems.map((item) =>
                item.id === 'privacy' ? (
                  <Link
                    key={item.id}
                    to="/privacy"
                    className="text-left text-base font-medium text-[#003366] hover:text-[#FF6600] py-2 border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="text-left text-base font-medium text-[#003366] hover:text-[#FF6600] py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </button>
                )
              )}

              {/* Mobile Language Switcher */}
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => changeLanguage('de')}
                  className={`font-bold ${
                    currentLang.startsWith('de')
                      ? 'text-[#FF6600]'
                      : 'text-[#003366]'
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`font-bold ${
                    currentLang.startsWith('en')
                      ? 'text-[#FF6600]'
                      : 'text-[#003366]'
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
