import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: 'light' | 'dark' = 'light';

  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    if (this.theme === 'light') {
      this.renderer.setAttribute(document.body, 'data-theme', 'light');
    } else {
      this.renderer.setAttribute(document.body, 'data-theme', 'dark');
    }
  }

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
}
