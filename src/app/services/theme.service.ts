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
      this.renderer.removeClass(document.body, 'dark');
    } else {
      this.renderer.addClass(document.body, 'dark');
    }
  }

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
}
