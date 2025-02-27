'use server'

import webpush from 'web-push'

webpush.setVapidDetails(
    '<mailto:4funcafebr@gmail.com,br>',
    process.env.VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

let subscription: PushSubscription | null = null

export async function subscribeUser(sub: PushSubscription) {
    subscription = sub
    // In a production environment, you would want to store the subscription in a database
    // For example: await db.subscriptions.create({ data: sub })
    return { success: true }
}

export async function unsubscribeUser() {
    subscription = null
    // In a production environment, you would want to remove the subscription from the database
    // For example: await db.subscriptions.delete({ where: { ... } })
    return { success: true }
}

export async function sendNotification(message: string) {
    if (!subscription) {
        throw new Error('No subscription available')
    }

    try {
        type PushSubscriptionWithKeys = PushSubscription & {
            keys: { p256dh: string; auth: string };
        };

        const pushSubscription: import("web-push").PushSubscription = {
            endpoint: (subscription as PushSubscriptionWithKeys).endpoint,
            expirationTime: (subscription as PushSubscriptionWithKeys).expirationTime ?? null,
            keys: (subscription as PushSubscriptionWithKeys).keys ?? {
                p256dh: "",
                auth: ""
            }
        };

        await webpush.sendNotification(
            pushSubscription, // Aqui está a correção
            JSON.stringify({
                title: 'Test Notification',
                body: message,
                icon: '/icon.png',
            })
        );
    } catch (error) {
        console.error("Erro ao enviar notificação:", error);
    }

}