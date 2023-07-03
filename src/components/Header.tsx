import { useState } from 'react'
import { List, X } from 'phosphor-react'

export function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div>
        <div className="w-screen flex items-center justify-between p-4">
            <h1>CRYPTOCOIN</h1>
          {/* For Mobile Menu */}
          <div className="lg:hidden ">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <List size={24}/>
            </button>
            {/* if Mobile Menu is Open */}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-slate-800 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                <h1>CRYPTOCOIN</h1>
                    <div>
                      <button
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <X size={24}/>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#home"
                          
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a href='#market'>
                         Market
                        </a>
                      </li>
                      <li>
                        <a href='#choose-us'>
                          Choose Us
                        </a>
                      </li>
                      <li>
                        <a href="#join">
                         Help
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
