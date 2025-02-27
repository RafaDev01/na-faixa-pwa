import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function usePWAInstall() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            const event = e as BeforeInstallPromptEvent;
            event.preventDefault();
            setDeferredPrompt(event);
        };

        window.addEventListener("beforeinstallprompt", handler as unknown as EventListener);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler as unknown as EventListener);
        };
    }, []);

    const installPWA = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            setIsInstalled(true);
        }
        setDeferredPrompt(null);
    };

    return { installPWA, isInstalled };
}
