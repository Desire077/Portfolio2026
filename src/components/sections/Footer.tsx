import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="relative border-t border-[--color-ink-800] py-12 mt-8">
      <div className="container-pf">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-3xl md:text-4xl text-[--color-ink-50] tracking-tight">
              Désiré Nguembet
              <span className="font-serif-italic text-[--color-accent]">.</span>
            </div>
            <p className="mt-2 font-mono text-xs text-[--color-ink-300] uppercase tracking-wider">
              Développeur Web · DevSecOps · Réseau
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-300] mb-2">
                Sections
              </div>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="#work"
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#internship"
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    Stage
                  </a>
                </li>
                <li>
                  <a
                    href="#documents"
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    Documents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-300] mb-2">
                Réseaux
              </div>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.email}
                    className="text-[--color-ink-100] hover:text-[--color-accent] transition-colors"
                  >
                    Email ↗
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-300] mb-2">
                Colophon
              </div>
              <p className="text-[--color-ink-200] text-xs leading-relaxed">
                React · TypeScript · Tailwind · Motion. Construit avec une
                attention aux détails et au respect de l'utilisateur.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[--color-ink-800] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[--color-ink-300]">
          <div>
            © {new Date().getFullYear()} Désiré Nguembet — Tous droits réservés.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[--color-accent] pulse-dot" />
            Système opérationnel
          </div>
        </div>
      </div>
    </footer>
  )
}
