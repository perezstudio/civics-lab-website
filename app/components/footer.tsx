import { FC } from 'react'
import { Link } from '@remix-run/react'
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon
} from 'lucide-react'

const Footer: FC = () => {
  return (
    <footer className="bg-slate-50 px-8 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Civics Lab" 
            className="w-10 h-10"
          />
        </div>

        {/* Center - Copyright */}
        <div className="text-sm text-gray-500">
          © 2025 Civics Lab, LLC.
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <Link to="https://facebook.com" className="text-gray-400 hover:text-gray-600">
            <FacebookIcon className="w-5 h-5" />
          </Link>
          <Link to="https://bsky.app" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z"/>
            </svg>
          </Link>
          <Link to="https://instagram.com" className="text-gray-400 hover:text-gray-600">
            <InstagramIcon className="w-5 h-5" />
          </Link>
          <Link to="https://youtube.com" className="text-gray-400 hover:text-gray-600">
            <YoutubeIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 