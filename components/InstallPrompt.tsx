import { useEffect, useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallPrompt() {
    const { installPWA } = usePWAInstall();
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(window as unknown as { MSStream?: unknown }).MSStream
        );

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
    }, []);

    if (isStandalone) {
        return null; // Não mostra se já estiver instalado
    }

    return (
        <div>
            <h3>Instalar App</h3>
            <button onClick={installPWA}>Adicionar à Tela Inicial</button>
            {isIOS && (
                <p>
                    Para instalar no iOS, toque no botão de compartilhamento
                    <span role="img" aria-label="share icon"> ⎋ </span>
                    e depois em &quot;Adicionar à Tela Inicial&quot;
                    <span role="img" aria-label="plus icon"> ➕ </span>.
                </p>
            )}
        </div>
    );
}
