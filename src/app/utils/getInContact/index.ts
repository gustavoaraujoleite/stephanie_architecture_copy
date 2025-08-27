export function openContactClient() {
  const whatsAppLink = `https://wa.me/${process.env.NEXT_PUBLIC_CLIENT_NUMBER}`;

  window.open(whatsAppLink, "_blank");
}
