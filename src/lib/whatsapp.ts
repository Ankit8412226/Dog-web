// Configurable WhatsApp Phone Number
export const WHATSAPP_NUMBER = "917678494050";

/**
 * Generate a valid WhatsApp API link with encoded prefilled message text.
 */
export function getWhatsAppUrl(message?: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getPuppyEnquiryUrl(puppyName: string, breed: string): string {
  return getWhatsAppUrl(
    `Hi, I'm interested in ${puppyName}, the ${breed} puppy. Please share more details.`
  );
}

export function getBreedEnquiryUrl(breedName: string): string {
  return getWhatsAppUrl(
    `Hi, I would like to know more about available ${breedName} puppies.`
  );
}

export function getLifestyleEnquiryUrl(): string {
  return getWhatsAppUrl(
    "Hi, I need help choosing the right dog breed for my lifestyle."
  );
}

export function getGeneralEnquiryUrl(): string {
  return getWhatsAppUrl(
    "Hi, I would like to know more about your available puppies."
  );
}
