// Film harness: mounts the real Yarnkin <Mascot> (unchanged source) and lets a
// timeline change its props. Time is driven by Playwright's fake clock.
import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";
import { Mascot } from "@/web/components/creatures/Mascot";
type Props = Parameters<typeof Mascot>[0];
const roots = new Map<HTMLElement, Root>();
(globalThis as any).YK = {
  render(el: HTMLElement, props: Props) {
    let r = roots.get(el); if (!r) { r = createRoot(el); roots.set(el, r); }
    flushSync(() => r!.render(<Mascot {...props} />));
  },
};
