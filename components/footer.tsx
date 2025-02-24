import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© {new Date().getFullYear()} Asher Farhan. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="asherfarhan123@gmail.com"
            className="text-gray-400 hover:text-purple-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

