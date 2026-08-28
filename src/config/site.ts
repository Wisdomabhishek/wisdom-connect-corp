/**
 * Single place for WISDOM contact details.
 * Fill these in with the real numbers and address; every Call, WhatsApp and
 * Email link on the site reads from here. While a value is empty, the related
 * button simply sends the visitor to the enquiry form instead of a wrong number.
 */
export const contact = {
  phoneDisplay: "",
  phoneDial: "", // e.g. "+919876543210"
  whatsapp: "", // digits only with country code, e.g. "919876543210"
  email: "", // e.g. "info@wisdomservices.in"
  addressLines: ["Jharkhand, India"],
};

export const telHref = () => (contact.phoneDial ? `tel:${contact.phoneDial}` : "/contact");

export const mailHref = () => (contact.email ? `mailto:${contact.email}` : "/contact");

export const waHref = (message = "Hello WISDOM, I would like to discuss a requirement.") =>
  contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
    : "/contact";

export const isExternal = (href: string) => href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

export const brand = {
  name: "WISDOM",
  tagline: "Think Wisdom. Service You Can Trust.",
  location: "Based in Jharkhand. Serving businesses across India.",
};
