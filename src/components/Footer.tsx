import { Link } from "react-router-dom";
import { Brain, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold">NIMISHES Lab</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Nishi Medical Imaging & Intelligent Health Engineering Systems Lab
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Research</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/research" className="hover:text-primary transition-colors">Research Areas</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/publications" className="hover:text-primary transition-colors">Publications</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Lab</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/people" className="hover:text-primary transition-colors">People</Link>
            <Link to="/join" className="hover:text-primary transition-colors">Join Us</Link>
            <Link to="/news" className="hover:text-primary transition-colors">News</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail size={14} /> contact@nimisheslab.org</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Bangladesh (Remote)</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NIMISHES Lab. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
